
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PRDApiDocumentation = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-kia-charcoal">🔗 API & Data Fetching Patterns</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-800 mb-3">🚨 CRITICAL: Convert Client-Side to Server-Side</h3>
          <p className="text-red-700 mb-3">
            Current site uses React Query hooks for client-side data fetching. 
            These MUST be converted to Next.js getServerSideProps for SEO to work.
          </p>
        </div>

        <div className="space-y-6">
          
          {/* EV3 Offers API */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-3">EV3 Offers - CRITICAL for SEO</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-red-600 mb-2">❌ Current (Client-Side)</h5>
                <div className="bg-gray-50 rounded p-3">
                  <code className="text-xs block whitespace-pre-wrap">
{`// useEV3Offers.ts - BREAKS SEO
import { useQuery } from "@tanstack/react-query";

export const useEV3Offers = () => {
  return useQuery({
    queryKey: ['ev3-offers'],
    queryFn: async () => {
      const { data } = await supabase
        .from('direct_kia_new_vehicles_offers')
        .select('*')
        .eq('model', 'EV3');
      return data;
    }
  });
};`}
                  </code>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-green-600 mb-2">✅ Required (Server-Side)</h5>
                <div className="bg-gray-50 rounded p-3">
                  <code className="text-xs block whitespace-pre-wrap">
{`// pages/new-cars/ev3/offer/[vehicleId].tsx
export async function getServerSideProps({ params }) {
  const { data: offer } = await supabase
    .from('direct_kia_new_vehicles_offers')
    .select('*')
    .eq('vehicle_id', params.vehicleId)
    .single();

  const seoTitle = \`\${offer.make} \${offer.model} \${offer.variant}\`;
  const seoDescription = \`\${offer.make} \${offer.model} from £\${offer.final_price}\`;

  return {
    props: { offer, seoTitle, seoDescription }
  };
}`}
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Used Cars API */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Used Cars Data Fetching</h4>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-medium mb-2">Vehicle Listings with Filters</h5>
                <div className="bg-gray-50 rounded p-3">
                  <code className="text-xs block whitespace-pre-wrap">
{`// Server-Side Query for Used Cars
const { data: vehicles } = await supabase
  .from('direct_kia_active_used_vehicles')
  .select(\`
    id, stock_number, make, model, variant, registration,
    mileage, price, display_price, fuel, transmission,
    body_style, doors, seats, engine_size, images,
    registration_date, websitedisplay
  \`)
  .eq('websitedisplay', true)
  .order('created_at', { ascending: false });`}
                  </code>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Individual Vehicle Details</h5>
                <div className="bg-gray-50 rounded p-3">
                  <code className="text-xs block whitespace-pre-wrap">
{`// pages/used-cars/vehicle/[id].tsx
export async function getServerSideProps({ params }) {
  const { data: vehicle } = await supabase
    .from('direct_kia_active_used_vehicles')
    .select('*')
    .eq('id', params.id)
    .single();

  if (!vehicle) {
    return { notFound: true };
  }

  const seoTitle = \`\${vehicle.year} \${vehicle.make} \${vehicle.model} \${vehicle.variant}\`;
  
  return {
    props: { vehicle, seoTitle, seoDescription }
  };
}`}
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Forms */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Contact Forms & Enquiries</h4>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-medium mb-2">Vehicle Enquiry Submission</h5>
                <div className="bg-gray-50 rounded p-3">
                  <code className="text-xs block whitespace-pre-wrap">
{`// Vehicle Enquiry Form Handler
const submitEnquiry = async (formData) => {
  const { data, error } = await supabase
    .from('direct_kia_customer_enquiries')
    .insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      vehicle_type: formData.vehicleType, // "new_ev3_offer" | "used_vehicle"
      vehicle_id: formData.vehicleId,
      vehicle_details: formData.vehicleDetails,
      source_page: window.location.pathname,
      status: 'new'
    });
};`}
                  </code>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Contact Form Integration</h5>
                <div className="bg-gray-50 rounded p-3">
                  <code className="text-xs block whitespace-pre-wrap">
{`// Edge Function: vehicle-enquiry
// Located: supabase/functions/vehicle-enquiry/index.ts
// Handles form submission and sends emails via SendGrid
// Validates data and stores in database
// Sends confirmation email to customer
// Sends notification email to dealership`}
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Data Fetching */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-3">SEO Data Fetching</h4>
            
            <div className="bg-gray-50 rounded p-3">
              <code className="text-xs block whitespace-pre-wrap">
{`// Static Page SEO Data
export async function getServerSideProps({ params }) {
  const { data: seoData } = await supabase
    .rpc('get_page_seo', { slug: 'page-slug' });

  return {
    props: {
      seoData: seoData[0] || {
        page_title: 'Default Title',
        meta_description: 'Default Description'
      }
    }
  };
}`}
              </code>
            </div>
          </div>

        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-bold text-yellow-800 mb-3">⚠️ Important Notes</h3>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Never use client-side data fetching for SEO-critical content</strong></li>
            <li>• <strong>All dynamic pages must use getServerSideProps</strong></li>
            <li>• <strong>Test view-source on every page to verify SEO data</strong></li>
            <li>• <strong>Handle error states and loading states appropriately</strong></li>
            <li>• <strong>Cache non-critical data on client-side for performance</strong></li>
          </ul>
        </div>

      </CardContent>
    </Card>
  );
};

export default PRDApiDocumentation;
