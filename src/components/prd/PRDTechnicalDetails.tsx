
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PRDTechnicalDetails = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-kia-charcoal">⚙️ Complete Technical Implementation Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-800 mb-3">📋 Environment & Configuration</h3>
          
          <div className="space-y-4">
            
            <div>
              <h4 className="font-semibold mb-2">Required Environment Variables:</h4>
              <div className="bg-white rounded p-3">
                <code className="text-xs block whitespace-pre-wrap">
{`# .env.local template for Next.js
NEXT_PUBLIC_SUPABASE_URL=https://himiywrlajmgruscisks.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Note: These are the EXACT same values from current Vite setup
# The migration keeps the same Supabase backend`}
                </code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Next.js Configuration (next.config.js):</h4>
              <div className="bg-white rounded p-3">
                <code className="text-xs block whitespace-pre-wrap">
{`/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['himiywrlajmgruscisks.supabase.co'],
    unoptimized: true, // For static exports if needed
  },
  async redirects() {
    return [
      // Add any URL redirects needed for SEO
    ];
  },
};

module.exports = nextConfig;`}
                </code>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-bold text-green-800 mb-3">🗂️ Project Structure</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Pages Directory:</h4>
              <div className="bg-white rounded p-3">
                <code className="text-xs block whitespace-pre-wrap">
{`pages/
├── _app.tsx              # App wrapper
├── _document.tsx         # HTML document
├── index.tsx             # Homepage
├── contact.tsx           # Contact page
├── finance.tsx           # Finance page
├── privacy-policy.tsx    # Privacy policy
├── cookie-policy.tsx     # Cookie policy
├── terms-and-conditions.tsx
├── 404.tsx               # Custom 404
├── new-cars/
│   ├── index.tsx         # New cars overview
│   └── ev3/
│       ├── index.tsx     # EV3 offers listing
│       └── offer/
│           └── [vehicleId].tsx  # Dynamic EV3 offer
└── used-cars/
    ├── index.tsx         # Used cars listing
    └── vehicle/
        └── [id].tsx      # Dynamic used car`}
                </code>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Components Directory:</h4>
              <div className="bg-white rounded p-3">
                <code className="text-xs block whitespace-pre-wrap">
{`components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── SEOHead.tsx
├── vehicles/
│   ├── VehicleCard.tsx
│   ├── VehicleGrid.tsx
│   ├── VehicleFilters.tsx
│   └── VehicleEnquiryForm.tsx
├── ev3/
│   ├── EV3OfferCard.tsx
│   ├── EV3OfferDetail.tsx
│   └── EV3FinanceCalculator.tsx
└── ui/
    # Copy all existing shadcn/ui components`}
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h3 className="font-bold text-orange-800 mb-3">🎨 Asset Management</h3>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold mb-2">Public Assets Structure:</h4>
              <div className="bg-white rounded p-3">
                <code className="text-xs block">
{`public/
├── images/              # Vehicle images from current site
│   ├── EV3.jpg
│   ├── EV4.jpg
│   ├── EV5.jpg
│   └── kia-ev3-gtline-aventurinegreen-exterior-digital-1920x1080-001.webp
├── favicon.ico
└── robots.txt           # Copy from current site`}
                </code>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Image Handling Strategy:</h4>
              <ul className="text-sm space-y-1">
                <li>• Vehicle images stored in Supabase as JSONB arrays</li>
                <li>• Use Next.js Image component for optimization</li>
                <li>• Fallback images for missing vehicle photos</li>
                <li>• Responsive image loading for galleries</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="font-bold text-purple-800 mb-3">🔌 Supabase Integration</h3>
          
          <div className="space-y-4">
            
            <div>
              <h4 className="font-semibold mb-2">Client Setup (lib/supabase.ts):</h4>
              <div className="bg-white rounded p-3">
                <code className="text-xs block whitespace-pre-wrap">
{`import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types will be generated automatically
export type Database = any; // Will be replaced with actual types`}
                </code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Data Fetching Patterns:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <h5 className="text-sm font-medium mb-1">Static Pages:</h5>
                  <div className="bg-white rounded p-2">
                    <code className="text-xs">Use getStaticProps for homepage, contact, legal pages</code>
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-medium mb-1">Dynamic Pages:</h5>
                  <div className="bg-white rounded p-2">
                    <code className="text-xs">Use getServerSideProps for vehicle details, offers</code>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-800 mb-3">🚨 Critical Implementation Notes</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Copy exact Tailwind classes</strong> from current components for visual parity</li>
            <li>• <strong>Use existing Supabase client patterns</strong> from current integrations</li>
            <li>• <strong>Keep form validation logic identical</strong> to current implementation</li>
            <li>• <strong>Preserve responsive breakpoints</strong> and mobile layouts exactly</li>
            <li>• <strong>Maintain font-inter class</strong> on all page containers for consistency</li>
            <li>• <strong>Copy SEO patterns</strong> from current SEOHead component usage</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-gray-800 mb-3">📦 Deployment Considerations</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Build Process:</h4>
              <ul className="text-sm space-y-1">
                <li>• npm run build must complete without errors</li>
                <li>• All TypeScript types must resolve</li>
                <li>• Static generation for static pages</li>
                <li>• Server-side rendering for dynamic pages</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Performance:</h4>
              <ul className="text-sm space-y-1">
                <li>• Image optimization enabled</li>
                <li>• Code splitting automatic</li>
                <li>• Database queries optimized</li>
                <li>• Minimal JavaScript bundle size</li>
              </ul>
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default PRDTechnicalDetails;
