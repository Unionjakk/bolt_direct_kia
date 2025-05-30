
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PRDTaskDefinition = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-kia-red">🎯 Project Task Definition</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-800 mb-4 text-xl">Primary Objective</h3>
          <p className="text-blue-700 text-lg mb-4">
            <strong>Build a new Next.js website for directkia.co.uk</strong> to replace the current Vite/React implementation 
            and fix critical SEO failures that are preventing proper Google indexing and social media sharing.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Current Website Issues:</h4>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Dynamic pages show empty meta tags in view-source</li>
                <li>• EV3 offer pages have no SEO data visible to crawlers</li>
                <li>• Social media previews display generic fallback content</li>
                <li>• Google cannot properly index vehicle offer pages</li>
                <li>• Client-side rendering prevents meta tag population</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Solution Requirements:</h4>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Next.js with Server-Side Rendering (SSR)</li>
                <li>• Dynamic meta tags populated from Supabase data</li>
                <li>• Perfect view-source showing real vehicle data</li>
                <li>• 100% visual and functional parity with current site</li>
                <li>• All existing features must work identically</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-bold text-yellow-800 mb-3">Success Criteria</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Badge className="bg-yellow-600 mb-2">SEO Test</Badge>
              <p className="text-yellow-700 text-sm">Right-click "View Page Source" on any EV3 offer page shows real vehicle data in meta tags</p>
            </div>
            <div>
              <Badge className="bg-yellow-600 mb-2">Social Test</Badge>
              <p className="text-yellow-700 text-sm">Share any EV3 offer URL on Facebook/LinkedIn shows proper title, description, image</p>
            </div>
            <div>
              <Badge className="bg-yellow-600 mb-2">Parity Test</Badge>
              <p className="text-yellow-700 text-sm">Side-by-side comparison shows identical appearance and functionality</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-gray-800 mb-3">Current Website Analysis</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Key Routes to Migrate:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <code>/</code> - Homepage with hero and featured sections</li>
                <li>• <code>/new-cars</code> - New cars listing page</li>
                <li>• <code>/new-cars/ev3</code> - EV3 specific offers page</li>
                <li>• <code>/new-cars/ev3/offer/[vehicleId]</code> - Individual EV3 offer details</li>
                <li>• <code>/used-cars</code> - Used cars listing with filters</li>
                <li>• <code>/used-cars/vehicle/[id]</code> - Individual used car details</li>
                <li>• <code>/contact</code> - Contact form and information</li>
                <li>• <code>/finance</code> - Finance information page</li>
                <li>• <code>/privacy-policy</code> - Privacy policy</li>
                <li>• <code>/terms-and-conditions</code> - Terms and conditions</li>
                <li>• <code>/cookie-policy</code> - Cookie policy</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Critical Functionality:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Vehicle search and filtering system</li>
                <li>• EV3 offer browsing and enquiry forms</li>
                <li>• Used car browsing with image galleries</li>
                <li>• Contact forms with email integration</li>
                <li>• SEO system with dynamic meta tags</li>
                <li>• Responsive design across all devices</li>
                <li>• Finance calculator integration</li>
                <li>• Vehicle enquiry system</li>
              </ul>
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default PRDTaskDefinition;
