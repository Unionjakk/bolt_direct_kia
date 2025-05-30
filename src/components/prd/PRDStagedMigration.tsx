
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PRDStagedMigration = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-kia-red">📋 Staged Migration Plan</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-red-800 mb-2">⚠️ CRITICAL: DO NOT ATTEMPT ALL AT ONCE</h3>
          <p className="text-red-700">This migration MUST be done in stages. Attempting to rebuild everything simultaneously will result in errors and incomplete functionality. Follow the phases in order.</p>
        </div>

        {/* Phase 1 */}
        <div className="border border-green-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-green-600">Phase 1</Badge>
            <h3 className="text-xl font-bold text-green-800">Foundation Setup</h3>
            <Badge variant="outline">2-3 hours</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Tasks:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Initialize Next.js project with TypeScript</li>
                <li>✓ Install all dependencies from package.json</li>
                <li>✓ Configure Tailwind CSS with Kia brand colors</li>
                <li>✓ Set up Supabase integration</li>
                <li>✓ Create basic folder structure</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Acceptance Criteria:</h4>
              <ul className="text-sm space-y-1">
                <li>• Next.js dev server runs without errors</li>
                <li>• Supabase connection works</li>
                <li>• Tailwind styles compile correctly</li>
                <li>• All shadcn/ui components available</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="border border-blue-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-blue-600">Phase 2</Badge>
            <h3 className="text-xl font-bold text-blue-800">Core Components & Layout</h3>
            <Badge variant="outline">3-4 hours</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Tasks:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Create Header component with navigation</li>
                <li>✓ Create Footer component</li>
                <li>✓ Set up SEOHead component for meta tags</li>
                <li>✓ Create basic page layouts</li>
                <li>✓ Implement responsive design system</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Acceptance Criteria:</h4>
              <ul className="text-sm space-y-1">
                <li>• Header navigation works on all devices</li>
                <li>• Footer displays correctly</li>
                <li>• Basic pages render with proper layout</li>
                <li>• Mobile responsiveness works</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="border border-purple-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-purple-600">Phase 3</Badge>
            <h3 className="text-xl font-bold text-purple-800">Static Pages Migration</h3>
            <Badge variant="outline">2-3 hours</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Tasks:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Create Homepage with hero section</li>
                <li>✓ Create Contact page with forms</li>
                <li>✓ Create Finance page</li>
                <li>✓ Create Privacy Policy page</li>
                <li>✓ Create Terms & Conditions page</li>
                <li>✓ Set up static SEO data</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Acceptance Criteria:</h4>
              <ul className="text-sm space-y-1">
                <li>• All static pages render correctly</li>
                <li>• Contact forms submit successfully</li>
                <li>• SEO meta tags appear in view-source</li>
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
            <Badge variant="outline">4-5 hours</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Tasks:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Create used cars listing page with SSR</li>
                <li>✓ Implement vehicle filtering system</li>
                <li>✓ Create vehicle detail pages with getServerSideProps</li>
                <li>✓ Set up image galleries</li>
                <li>✓ Create enquiry forms</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Acceptance Criteria:</h4>
              <ul className="text-sm space-y-1">
                <li>• Used car listings load with real data</li>
                <li>• Filters work correctly</li>
                <li>• Individual car pages show proper SEO in view-source</li>
                <li>• Enquiry forms submit successfully</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 5 */}
        <div className="border border-red-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-red-600">Phase 5</Badge>
            <h3 className="text-xl font-bold text-red-800">EV3 Offers System (CRITICAL)</h3>
            <Badge variant="outline">4-6 hours</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Tasks:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Create EV3 offers listing page</li>
                <li>✓ Implement getServerSideProps for EV3 offer details</li>
                <li>✓ Set up dynamic SEO meta tags from database</li>
                <li>✓ Create finance calculators</li>
                <li>✓ Implement enquiry system</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Acceptance Criteria:</h4>
              <ul className="text-sm space-y-1">
                <li>• EV3 offer pages show real data in view-source</li>
                <li>• Dynamic meta tags populated from Supabase</li>
                <li>• Social media previews work correctly</li>
                <li>• Finance calculators function properly</li>
                <li>• This is the PRIMARY SUCCESS METRIC</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 6 */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-gray-600">Phase 6</Badge>
            <h3 className="text-xl font-bold text-gray-800">Testing & Deployment</h3>
            <Badge variant="outline">2-3 hours</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Tasks:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Comprehensive SEO testing</li>
                <li>✓ Social media sharing tests</li>
                <li>✓ Cross-browser compatibility</li>
                <li>✓ Mobile responsiveness verification</li>
                <li>✓ Performance optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Acceptance Criteria:</h4>
              <ul className="text-sm space-y-1">
                <li>• All pages pass view-source SEO test</li>
                <li>• Social sharing works on all platforms</li>
                <li>• Site performs well on mobile</li>
                <li>• All forms and features work correctly</li>
                <li>• Ready for production deployment</li>
              </ul>
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default PRDStagedMigration;
