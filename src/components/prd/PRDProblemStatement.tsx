
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PRDProblemStatement = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-kia-red">🚨 Critical Problem Statement</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-800 mb-2">Current SEO Failure:</h3>
          <ul className="list-disc list-inside text-red-700 space-y-1">
            <li>Dynamic pages show empty meta tags in view-source</li>
            <li>EV3 offer pages (e.g., `/new-cars/ev3/offer/123`) have no SEO data</li>
            <li>Social media previews are broken</li>
            <li>Google indexing is compromised</li>
          </ul>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-bold text-green-800 mb-2">Required Solution:</h3>
          <ul className="list-disc list-inside text-green-700 space-y-1">
            <li>Next.js with Server-Side Rendering (SSR)</li>
            <li>Dynamic meta tags populated from Supabase data</li>
            <li>Perfect view-source showing real vehicle data</li>
            <li>100% visual and functional parity</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PRDProblemStatement;
