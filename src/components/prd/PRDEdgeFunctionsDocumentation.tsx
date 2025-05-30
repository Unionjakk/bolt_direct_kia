
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PRDEdgeFunctionsDocumentation = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-kia-charcoal">⚡ Complete Edge Functions & Database Functions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-800 mb-3">📡 Existing Supabase Edge Functions</h3>
          <p className="text-blue-700 mb-4">
            These edge functions are already deployed and working. The Next.js site must integrate with them exactly as they are.
            <strong>DO NOT recreate these functions - use the existing ones.</strong>
          </p>
        </div>

        <div className="space-y-6">
          
          {/* Vehicle Enquiry Function */}
          <div className="border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-3">🚗 vehicle-enquiry Function</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">Purpose:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Handles all vehicle enquiry form submissions</li>
                  <li>• Stores enquiry in direct_kia_customer_enquiries table</li>
                  <li>• Sends confirmation email to customer</li>
                  <li>• Sends notification email to dealership</li>
                  <li>• Integrates with SendGrid for email delivery</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Usage in Next.js:</h5>
                <div className="bg-white rounded p-3">
                  <code className="text-xs block">
{`const response = await supabase.functions.invoke('vehicle-enquiry', {
  body: {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    vehicle_type: 'new_ev3_offer', // or 'used_vehicle'
    vehicle_id: vehicleId,
    vehicle_details: vehicleData,
    source_page: window.location.pathname
  }
});`}
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Enquiry Function */}
          <div className="border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-3">📞 contact-enquiry Function</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">Purpose:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Handles general contact form submissions</li>
                  <li>• Stores general enquiries in database</li>
                  <li>• Sends confirmation and notification emails</li>
                  <li>• Used for /contact page form</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Usage:</h5>
                <div className="bg-white rounded p-3">
                  <code className="text-xs block">
{`const response = await supabase.functions.invoke('contact-enquiry', {
  body: {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    subject: formData.subject
  }
});`}
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Add Contact SEO Function */}
          <div className="border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-3">🔍 add-contact-seo Function</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">Purpose:</h5>
                <ul className="text-sm space-y-1">
                  <li>• SEO-related functionality</li>
                  <li>• Manages SEO data for contact pages</li>
                  <li>• Updates page_seo table entries</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Integration:</h5>
                <p className="text-sm">Used internally for SEO management. May not require direct frontend integration.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-bold text-green-800 mb-3">🗄️ Database Functions</h3>
          
          <div className="space-y-4">
            
            <div className="border-b border-green-200 pb-3">
              <h4 className="font-semibold text-green-700 mb-2">get_page_seo(slug)</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-sm font-medium mb-1">Purpose:</h5>
                  <p className="text-sm">Retrieves SEO data for static pages from page_seo table</p>
                </div>
                <div>
                  <h5 className="text-sm font-medium mb-1">Next.js Usage:</h5>
                  <div className="bg-white rounded p-2">
                    <code className="text-xs">
{`const { data } = await supabase.rpc('get_page_seo', { slug: 'home' });`}
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-green-200 pb-3">
              <h4 className="font-semibold text-green-700 mb-2">update_updated_at_column()</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-sm font-medium mb-1">Purpose:</h5>
                  <p className="text-sm">Trigger function that automatically updates timestamp columns</p>
                </div>
                <div>
                  <h5 className="text-sm font-medium mb-1">Usage:</h5>
                  <p className="text-sm">Automatically triggered on UPDATE operations. No direct frontend usage.</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">Other Database Functions</h4>
              <ul className="text-sm space-y-1">
                <li>• update_timestamp() - General timestamp trigger</li>
                <li>• get_table_columns() - Schema introspection</li>
                <li>• apply_product_cost() - Business logic functions</li>
                <li>• update_page_seo_updated_at() - SEO table triggers</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-800 mb-3">🚨 Critical Integration Requirements</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>DO NOT recreate edge functions</strong> - Use existing ones</li>
            <li>• <strong>Form submissions must use supabase.functions.invoke()</strong></li>
            <li>• <strong>SEO data must use get_page_seo() function</strong></li>
            <li>• <strong>All database connections use existing Supabase client</strong></li>
            <li>• <strong>Email integration via SendGrid already configured</strong></li>
          </ul>
        </div>

      </CardContent>
    </Card>
  );
};

export default PRDEdgeFunctionsDocumentation;
