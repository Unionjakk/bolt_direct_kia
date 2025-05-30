
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactEnquiryRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  sourcePage?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders } 
      }
    );
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const body: ContactEnquiryRequest = await req.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

    // Get client IP and user agent
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';

    console.log('Processing contact enquiry:', {
      name: body.name,
      email: body.email,
      subject: body.subject
    });

    // Store enquiry in database using existing table structure
    const { data: enquiry, error: dbError } = await supabase
      .from('direct_kia_customer_enquiries')
      .insert({
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        message: body.message,
        vehicle_type: 'contact_enquiry',
        vehicle_id: 0,
        vehicle_details: { subject: body.subject },
        source_page: body.sourcePage || '/contact',
        ip_address: clientIP,
        user_agent: userAgent,
        status: 'new'
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to save enquiry' }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

    console.log('Contact enquiry saved successfully:', enquiry.id);

    // Send emails via SendGrid
    const sendGridApiKey = Deno.env.get('SENDGRID_API_KEY');
    if (!sendGridApiKey) {
      console.error('SendGrid API key not found');
      return new Response(
        JSON.stringify({ error: 'Email service configuration error' }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

    // Send customer confirmation email
    const customerEmailPayload = {
      personalizations: [{
        to: [{ email: body.email, name: body.name }],
        subject: `Your DirectKia Contact Enquiry - ${body.subject}`
      }],
      from: { email: 'noreply@directkia.co.uk', name: 'DirectKia' },
      content: [{
        type: 'text/html',
        value: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #dc2626; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0;">DirectKia</h1>
            </div>
            <div style="padding: 30px; background: #f9f9f9;">
              <h2 style="color: #333;">Thank you for contacting us, ${body.name}!</h2>
              
              <p style="color: #666; line-height: 1.6;">
                We have received your enquiry about <strong>${body.subject}</strong> 
                and will be in touch with you shortly.
              </p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">Your Enquiry Details:</h3>
                <p><strong>Subject:</strong> ${body.subject}</p>
                <p><strong>Your Message:</strong> ${body.message}</p>
                ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
                <p><strong>Email:</strong> ${body.email}</p>
              </div>
              
              <p style="color: #666; line-height: 1.6;">
                Our team will review your enquiry and contact you within 24 hours. 
                If you have any urgent questions, please call us directly on <strong>01642 632 299</strong>.
              </p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://directkia.co.uk" style="background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">
                  Visit Our Website
                </a>
              </div>
            </div>
            
            <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 14px;">
              <p style="margin: 0;">DirectKia - Your Trusted Kia Partner</p>
              <p style="margin: 5px 0 0 0;">This is a no-reply email | Website: directkia.co.uk</p>
            </div>
          </div>
        `
      }]
    };

    // Send internal notification email
    const internalEmailPayload = {
      personalizations: [{
        to: [{ email: 'mail@directkia.co.uk', name: 'DirectKia Team' }],
        subject: `New Contact Enquiry - ${body.subject} (ID: ${enquiry.id})`
      }],
      from: { email: 'mail@directkia.co.uk', name: 'DirectKia Website' },
      content: [{
        type: 'text/html',
        value: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #dc2626; color: white; padding: 20px;">
              <h1 style="margin: 0;">New Contact Enquiry</h1>
            </div>
            <div style="padding: 20px; background: #f9f9f9;">
              <h2 style="color: #333;">Customer Details:</h2>
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <p><strong>Name:</strong> ${body.name}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : '<p><strong>Phone:</strong> Not provided</p>'}
                <p><strong>Subject:</strong> ${body.subject}</p>
                <p><strong>Enquiry ID:</strong> ${enquiry.id}</p>
                <p><strong>Source Page:</strong> ${body.sourcePage || '/contact'}</p>
                <p><strong>IP Address:</strong> ${clientIP}</p>
              </div>
              
              <h2 style="color: #333;">Customer Message:</h2>
              <div style="background: white; padding: 20px; border-radius: 8px;">
                <p style="white-space: pre-wrap;">${body.message}</p>
              </div>
            </div>
          </div>
        `
      }]
    };

    // Send both emails
    const emailPromises = [
      fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${sendGridApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerEmailPayload),
      }),
      fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${sendGridApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(internalEmailPayload),
      }),
    ];

    const emailResults = await Promise.allSettled(emailPromises);
    
    // Log email results but don't fail the request if emails fail
    emailResults.forEach((result, index) => {
      const emailType = index === 0 ? 'customer' : 'internal';
      if (result.status === 'fulfilled') {
        console.log(`${emailType} email sent successfully`);
      } else {
        console.error(`Failed to send ${emailType} email:`, result.reason);
      }
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact enquiry submitted successfully',
        enquiryId: enquiry.id 
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );

  } catch (error) {
    console.error('Error in contact-enquiry function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);
