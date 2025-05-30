
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { VehicleEnquiryRequest } from './types.ts';
import { validateRequest } from './validation.ts';
import { 
  createCustomerEmailTemplate, 
  createInternalEmailTemplate, 
  getVehicleDescription 
} from './email-templates.ts';
import { sendEmails } from './email-service.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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

    const body: VehicleEnquiryRequest = await req.json();
    
    // Validate required fields
    const validationError = validateRequest(body);
    if (validationError) {
      return new Response(
        JSON.stringify({ error: validationError }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

    // Get client IP and user agent
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';

    console.log('Processing vehicle enquiry:', {
      name: body.name,
      email: body.email,
      vehicleType: body.vehicleType,
      vehicleId: body.vehicleId
    });

    // Store enquiry in database
    const { data: enquiry, error: dbError } = await supabase
      .from('direct_kia_customer_enquiries')
      .insert({
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        message: body.message,
        vehicle_type: body.vehicleType,
        vehicle_id: body.vehicleId,
        vehicle_details: body.vehicleDetails,
        source_page: body.sourcePage,
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

    console.log('Enquiry saved successfully:', enquiry.id);

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

    // Prepare vehicle description and email templates
    const vehicleDescription = getVehicleDescription(body);
    const customerEmailTemplate = createCustomerEmailTemplate(body, vehicleDescription, enquiry.id);
    const internalEmailTemplate = createInternalEmailTemplate(body, vehicleDescription, enquiry.id, clientIP);

    // Send emails
    await sendEmails(sendGridApiKey, customerEmailTemplate, internalEmailTemplate);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Enquiry submitted successfully',
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
    console.error('Error in vehicle-enquiry function:', error);
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
