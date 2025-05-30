
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PRDFrequentlyAskedQuestions = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-kia-charcoal">❓ Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-800 mb-4">Questions an AI might have about this migration:</h3>
          
          <div className="space-y-6">
            
            <div className="border-b border-blue-200 pb-4">
              <h4 className="font-semibold text-blue-700 mb-2">Q: Why can't we just fix the current Vite/React site?</h4>
              <p className="text-blue-600 text-sm">
                <strong>A:</strong> Vite/React is a client-side framework. Even with React Helmet, meta tags are only populated 
                after JavaScript loads, which search engines and social media crawlers cannot see. Next.js with SSR 
                ensures meta tags are in the HTML source before any JavaScript runs.
              </p>
            </div>

            <div className="border-b border-blue-200 pb-4">
              <h4 className="font-semibold text-blue-700 mb-2">Q: What makes this migration "critical"?</h4>
              <p className="text-blue-600 text-sm">
                <strong>A:</strong> The EV3 offer pages generate significant revenue but have zero SEO visibility. 
                When users share these pages on social media or Google indexes them, they show generic fallback 
                content instead of specific vehicle details, resulting in lost sales opportunities.
              </p>
            </div>

            <div className="border-b border-blue-200 pb-4">
              <h4 className="font-semibold text-blue-700 mb-2">Q: Should I use getStaticProps instead of getServerSideProps?</h4>
              <p className="text-blue-600 text-sm">
                <strong>A:</strong> No. getStaticProps generates pages at build time, but vehicle offers change 
                frequently (prices, availability, new offers). getServerSideProps ensures real-time data 
                is always reflected in the meta tags.
              </p>
            </div>

            <div className="border-b border-blue-200 pb-4">
              <h4 className="font-semibold text-blue-700 mb-2">Q: How do I test if the SEO is working?</h4>
              <p className="text-blue-600 text-sm">
                <strong>A:</strong> Right-click on any EV3 offer page → "View Page Source" → Look for meta tags 
                in the HTML. You should see actual vehicle data (make, model, price) in the meta description, 
                NOT generic text like "DirectKia - New & Used Kia Cars".
              </p>
            </div>

            <div className="border-b border-blue-200 pb-4">
              <h4 className="font-semibold text-blue-700 mb-2">Q: What if a vehicle offer doesn't exist in the database?</h4>
              <p className="text-blue-600 text-sm">
                <strong>A:</strong> Return <code>notFound: true</code> from getServerSideProps. This will show 
                a proper 404 page instead of an error, which is better for SEO and user experience.
              </p>
            </div>

            <div className="border-b border-blue-200 pb-4">
              <h4 className="font-semibold text-blue-700 mb-2">Q: Should I migrate all pages at once or in phases?</h4>
              <p className="text-blue-600 text-sm">
                <strong>A:</strong> ALWAYS migrate in phases. Start with static pages, then used cars, then EV3 offers. 
                This allows you to test each section thoroughly and catch issues early.
              </p>
            </div>

            <div className="border-b border-blue-200 pb-4">
              <h4 className="font-semibold text-blue-700 mb-2">Q: How do I maintain the exact same visual appearance?</h4>
              <p className="text-blue-600 text-sm">
                <strong>A:</strong> Use the exact same Tailwind CSS classes and component structure. The provided 
                tailwind.config.ts includes all Kia brand colors. Copy components exactly from the current site, 
                only changing the data fetching method.
              </p>
            </div>

            <div className="border-b border-blue-200 pb-4">
              <h4 className="font-semibold text-blue-700 mb-2">Q: What about the contact forms and enquiry system?</h4>
              <p className="text-blue-600 text-sm">
                <strong>A:</strong> The contact forms use Supabase Edge Functions (vehicle-enquiry) which are already 
                working. You'll need to recreate the frontend forms to submit to the same endpoints. The backend 
                integration remains unchanged.
              </p>
            </div>

            <div className="border-b border-blue-200 pb-4">
              <h4 className="font-semibold text-blue-700 mb-2">Q: How do I handle the image galleries and responsive design?</h4>
              <p className="text-blue-600 text-sm">
                <strong>A:</strong> Vehicle images are stored as JSONB arrays in the database. Use the same responsive 
                image components, just fetch the data server-side instead of client-side. All existing responsive 
                classes should work identically.
              </p>
            </div>

            <div className="border-b border-blue-200 pb-4">
              <h4 className="font-semibold text-blue-700 mb-2">Q: What's the most important success metric?</h4>
              <p className="text-blue-600 text-sm">
                <strong>A:</strong> View-source test on EV3 offer pages. If you can see real vehicle data 
                (specific make, model, price, features) in the HTML source, then SEO is working correctly. 
                Everything else is secondary to this.
              </p>
            </div>

          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-bold text-green-800 mb-3">✅ Quick Reference Checklist</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Before Starting:</h4>
              <ul className="text-sm space-y-1">
                <li>□ Read entire PRD thoroughly</li>
                <li>□ Understand current site architecture</li>
                <li>□ Verify Supabase database access</li>
                <li>□ Download all provided files</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">After Each Phase:</h4>
              <ul className="text-sm space-y-1">
                <li>□ Test view-source for SEO data</li>
                <li>□ Verify responsive design</li>
                <li>□ Test all forms and interactions</li>
                <li>□ Compare with current site visually</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-800 mb-3">🚨 Common Mistakes to Avoid</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Using client-side data fetching for SEO content</strong> - This defeats the entire purpose</li>
            <li>• <strong>Trying to build everything at once</strong> - Always follow the staged approach</li>
            <li>• <strong>Not testing view-source</strong> - This is the primary success metric</li>
            <li>• <strong>Changing visual design</strong> - Maintain 100% visual parity</li>
            <li>• <strong>Forgetting error handling</strong> - Always handle missing data gracefully</li>
            <li>• <strong>Skipping mobile testing</strong> - Responsive design is critical</li>
          </ul>
        </div>

      </CardContent>
    </Card>
  );
};

export default PRDFrequentlyAskedQuestions;
