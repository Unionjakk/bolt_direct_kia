
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PRDRevisedStagedMigration = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-kia-red">🚀 Revised AI Migration Plan</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-red-800 mb-2">⚡ AI-Optimized Migration Phases</h3>
          <p className="text-red-700">Each phase designed for AI completion in 5-15 minutes. No manual testing required during development.</p>
        </div>

        {/* Phase 1 */}
        <div className="border border-green-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-green-600">Phase 1</Badge>
            <h3 className="text-xl font-bold text-green-800">Next.js Foundation Setup</h3>
            <Badge variant="outline">5-10 minutes</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">AI Tasks:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Create Next.js project structure</li>
                <li>✓ Install exact dependencies from package.json</li>
                <li>✓ Configure Tailwind with Kia brand colors</li>
                <li>✓ Set up Supabase client integration</li>
                <li>✓ Create environment variables template</li>
                <li>✓ Configure next.config.js</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">AI Validation:</h4>
              <ul className="text-sm space-y-1">
                <li>• Next.js builds without errors</li>
                <li>• Supabase client imports successfully</li>
                <li>• Tailwind styles compile</li>
                <li>• All dependencies resolve</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="border border-blue-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-blue-600">Phase 2</Badge>
            <h3 className="text-xl font-bold text-blue-800">Core Layout & Components</h3>
            <Badge variant="outline">10-15 minutes</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">AI Tasks:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Create _app.tsx and _document.tsx</li>
                <li>✓ Build Header component with navigation</li>
                <li>✓ Build Footer component</li>
                <li>✓ Create SEOHead component for meta tags</li>
                <li>✓ Set up basic page layout structure</li>
                <li>✓ Configure fonts and global styles</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">AI Validation:</h4>
              <ul className="text-sm space-y-1">
                <li>• Components render without errors</li>
                <li>• Navigation links work</li>
                <li>• Responsive design functions</li>
                <li>• SEO meta tags appear in HTML</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="border border-purple-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-purple-600">Phase 3</Badge>
            <h3 className="text-xl font-bold text-purple-800">Static Pages Implementation</h3>
            <Badge variant="outline">15-20 minutes</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">AI Tasks:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Create homepage with getStaticProps</li>
                <li>✓ Build contact page with forms</li>
                <li>✓ Create finance page</li>
                <li>✓ Build privacy, terms, cookie policy pages</li>
                <li>✓ Implement get_page_seo integration</li>
                <li>✓ Set up 404 and error pages</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">AI Validation:</h4>
              <ul className="text-sm space-y-1">
                <li>• All static pages build successfully</li>
                <li>• SEO data loads from database</li>
                <li>• Contact forms render correctly</li>
                <li>• Navigation between pages works</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 4 */}
        <div className="border border-orange-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-orange-600">Phase 4</Badge>
            <h3 className="text-xl font-bold text-orange-800">Used Cars System</h3>
            <Badge variant="outline">20-25 minutes</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">AI Tasks:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Create /used-cars page with getServerSideProps</li>
                <li>✓ Build vehicle filtering components</li>
                <li>✓ Create /used-cars/vehicle/[id] dynamic page</li>
                <li>✓ Implement image galleries</li>
                <li>✓ Build vehicle enquiry forms</li>
                <li>✓ Connect to vehicle-enquiry edge function</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">AI Validation:</h4>
              <ul className="text-sm space-y-1">
                <li>• Used car data loads from database</li>
                <li>• Dynamic routes work correctly</li>
                <li>• SEO meta tags populate with real data</li>
                <li>• Forms submit to edge functions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 5 */}
        <div className="border border-red-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-red-600">Phase 5</Badge>
            <h3 className="text-xl font-bold text-red-800">EV3 Offers System (CRITICAL)</h3>
            <Badge variant="outline">25-30 minutes</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">AI Tasks:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Create /new-cars/ev3 page with offers grid</li>
                <li>✓ Build /new-cars/ev3/offer/[vehicleId] page</li>
                <li>✓ Implement getServerSideProps for dynamic SEO</li>
                <li>✓ Create finance calculator components</li>
                <li>✓ Build EV3 enquiry forms</li>
                <li>✓ Ensure perfect meta tag population</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">AI Validation:</h4>
              <ul className="text-sm space-y-1">
                <li>• View-source shows real vehicle data</li>
                <li>• Dynamic meta tags from Supabase</li>
                <li>• Finance calculators function</li>
                <li>• THIS IS THE PRIMARY SUCCESS METRIC</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 6 - REVISED */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-gray-600">Phase 6</Badge>
            <h3 className="text-xl font-bold text-gray-800">AI Validation & Documentation</h3>
            <Badge variant="outline">10-15 minutes</Badge>
          </div>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
              <h4 className="font-semibold text-yellow-800 mb-2">AI-Verifiable Checks:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Verify all pages build without errors</li>
                <li>✓ Check all imports resolve correctly</li>
                <li>✓ Validate all routes are defined</li>
                <li>✓ Confirm getServerSideProps returns proper data</li>
                <li>✓ Check meta tags exist in HTML source</li>
                <li>✓ Verify form components render correctly</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-3">
              <h4 className="font-semibold text-blue-800 mb-2">Documentation for Human Testing:</h4>
              <ul className="text-sm space-y-1">
                <li>• Create checklist for manual SEO testing</li>
                <li>• Document social media sharing test steps</li>
                <li>• List mobile responsiveness validation points</li>
                <li>• Provide form submission testing guide</li>
                <li>• Create deployment instructions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-bold text-green-800 mb-3">✅ AI Success Criteria</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Code Validation:</h4>
              <ul className="text-sm space-y-1">
                <li>□ Next.js builds successfully</li>
                <li>□ All TypeScript types resolve</li>
                <li>□ No console errors in development</li>
                <li>□ All components render</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Data Integration:</h4>
              <ul className="text-sm space-y-1">
                <li>□ Supabase queries execute successfully</li>
                <li>□ Dynamic routes populate with real data</li>
                <li>□ Meta tags contain vehicle information</li>
                <li>□ Forms connect to edge functions</li>
              </ul>
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default PRDRevisedStagedMigration;
