
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PRDTestingCriteria = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-kia-charcoal">✅ Testing & Validation Criteria</CardTitle>
      </CardHeader>
      <CardContent>
        
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-bold text-red-800 mb-3">🎯 Critical Success Criteria</h3>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">1. View-Source SEO Test</h4>
                <ul className="text-sm text-red-700 list-disc list-inside ml-4">
                  <li>Right-click → "View Page Source" on any EV3 offer page</li>
                  <li>Must show actual vehicle data in meta tags, NOT empty values</li>
                  <li>Title must include vehicle make, model, variant</li>
                  <li>Description must include price, range, features</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">2. Social Media Preview Test</h4>
                <ul className="text-sm text-red-700 list-disc list-inside ml-4">
                  <li>Share EV3 offer URL on Facebook/LinkedIn</li>
                  <li>Must show proper title, description, and image</li>
                  <li>No "DirectKia - New & Used Kia Cars" generic fallback</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">3. Visual Parity Test</h4>
                <ul className="text-sm text-red-700 list-disc list-inside ml-4">
                  <li>Side-by-side comparison with current site</li>
                  <li>Identical colors, fonts, spacing, layout</li>
                  <li>All components render exactly the same</li>
                  <li>Mobile responsiveness preserved</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PRDTestingCriteria;
