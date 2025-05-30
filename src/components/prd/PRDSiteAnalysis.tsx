
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PRDSiteAnalysis = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-kia-charcoal">🗺️ Complete Site Analysis & Route Mapping</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-800 mb-3">🎯 ALL Routes That Must Be Migrated</h3>
          <p className="text-red-700 mb-4">
            Every single route from the current Vite/React site must be recreated in Next.js with identical functionality.
            Missing even one route will break user experience and SEO.
          </p>
        </div>

        <div className="space-y-6">
          
          {/* Static Routes */}
          <div className="border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-3">📄 Static Routes (Use getStaticProps)</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">Core Pages:</h5>
                <ul className="text-sm space-y-1">
                  <li>• <code>/</code> - Homepage with hero, featured sections</li>
                  <li>• <code>/contact</code> - Contact forms and dealership info</li>
                  <li>• <code>/finance</code> - Finance information and calculators</li>
                  <li>• <code>/new-cars</code> - New cars overview page</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Legal Pages:</h5>
                <ul className="text-sm space-y-1">
                  <li>• <code>/privacy-policy</code> - Privacy policy content</li>
                  <li>• <code>/cookie-policy</code> - Cookie policy content</li>
                  <li>• <code>/terms-and-conditions</code> - Terms content</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dynamic Routes - CRITICAL */}
          <div className="border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-3">🔥 Dynamic Routes (MUST Use getServerSideProps)</h4>
            <div className="space-y-4">
              
              <div className="bg-red-50 p-3 rounded">
                <h5 className="font-medium text-red-700 mb-2">CRITICAL: EV3 Offer Pages</h5>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• <code>/new-cars/ev3</code> - EV3 offers listing page</li>
                  <li>• <code>/new-cars/ev3/offer/[vehicleId]</code> - Individual EV3 offer details</li>
                  <li>• <strong>Data Source:</strong> direct_kia_new_vehicles_offers table</li>
                  <li>• <strong>SEO Critical:</strong> Meta tags MUST be populated from database</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-3 rounded">
                <h5 className="font-medium text-orange-700 mb-2">Used Cars Pages</h5>
                <ul className="text-sm text-orange-600 space-y-1">
                  <li>• <code>/used-cars</code> - Used cars listing with filters</li>
                  <li>• <code>/used-cars/vehicle/[id]</code> - Individual used car details</li>
                  <li>• <strong>Data Source:</strong> direct_kia_active_used_vehicles table</li>
                  <li>• <strong>Features:</strong> Filtering, search, pagination</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Error & Special Routes */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">⚠️ Error Handling & Special Routes</h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-medium mb-2">Error Pages (Must Create):</h5>
                <ul className="text-sm space-y-1">
                  <li>• <code>pages/404.tsx</code> - Custom 404 page with navigation</li>
                  <li>• <code>pages/500.tsx</code> - Server error page</li>
                  <li>• <code>pages/_error.tsx</code> - Generic error handling</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium mb-2">Special Next.js Files:</h5>
                <ul className="text-sm space-y-1">
                  <li>• <code>pages/_app.tsx</code> - App wrapper with providers</li>
                  <li>• <code>pages/_document.tsx</code> - HTML document structure</li>
                  <li>• <code>next.config.js</code> - Next.js configuration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form Handling Routes */}
          <div className="border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-3">📋 Form Handling & API Routes</h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-medium mb-2">Contact Forms:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Vehicle enquiry forms on all vehicle detail pages</li>
                  <li>• General contact form on /contact page</li>
                  <li>• EV3 offer enquiry forms</li>
                  <li>• <strong>Backend:</strong> Uses existing Supabase edge functions</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium mb-2">API Integration:</h5>
                <ul className="text-sm space-y-1">
                  <li>• All forms submit to existing Supabase edge functions</li>
                  <li>• No new API routes needed in Next.js</li>
                  <li>• Keep existing email integration via SendGrid</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation & Layout */}
          <div className="border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-3">🧭 Navigation & Layout Requirements</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">Header Navigation:</h5>
                <ul className="text-sm space-y-1">
                  <li>• New Cars dropdown menu</li>
                  <li>• Used Cars link</li>
                  <li>• Finance link</li>
                  <li>• Contact link</li>
                  <li>• Logo linking to homepage</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Footer Links:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Privacy Policy link</li>
                  <li>• Terms & Conditions link</li>
                  <li>• Cookie Policy link</li>
                  <li>• Contact information</li>
                  <li>• Social media links</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-bold text-yellow-800 mb-3">📋 Route Migration Checklist</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">For Each Route:</h4>
              <ul className="text-sm space-y-1">
                <li>□ Create Next.js page file</li>
                <li>□ Implement proper data fetching method</li>
                <li>□ Add SEO meta tags</li>
                <li>□ Ensure responsive design</li>
                <li>□ Test form submissions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Validation Steps:</h4>
              <ul className="text-sm space-y-1">
                <li>□ Check view-source for meta tags</li>
                <li>□ Verify navigation works</li>
                <li>□ Test 404 error handling</li>
                <li>□ Confirm mobile responsiveness</li>
                <li>□ Validate form functionality</li>
              </ul>
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default PRDSiteAnalysis;
