
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const handler = async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Insert SEO data for contact page
    const { error } = await supabase
      .from('page_seo')
      .upsert({
        page_slug: 'contact',
        page_title: 'Contact DirectKia - Get in Touch | DirectKia',
        meta_description: 'Contact DirectKia for all your Kia vehicle needs. Call us on 01642 632 299 or use our contact form. Expert advice and exceptional service.',
        h1_title: 'Contact DirectKia',
        meta_keywords: 'contact directkia, kia dealer contact, directkia phone, kia sales enquiry',
        focus_keyword: 'contact-directkia'
      }, {
        onConflict: 'page_slug'
      });

    if (error) {
      console.error('Error inserting SEO data:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

serve(handler);
