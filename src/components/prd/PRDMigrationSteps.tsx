
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PRDMigrationSteps = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-kia-red">🚀 Next.js Migration Steps</CardTitle>
      </CardHeader>
      <CardContent>
        
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-800 mb-3">Step-by-Step Migration Process</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-700">1. Initialize Next.js Project</h4>
                <div className="bg-white rounded p-3 mt-2">
                  <code className="text-xs">
{`npx create-next-app@latest directkia-nextjs --typescript --tailwind --eslint --app
cd directkia-nextjs

# Install all dependencies from package.json above
npm install @supabase/supabase-js @tanstack/react-query
npm install @radix-ui/react-* lucide-react
# ... all other dependencies from downloadable package.json`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-700">2. Critical SEO Route Implementation</h4>
                <div className="bg-white rounded p-3 mt-2">
                  <code className="text-xs">
{`// pages/new-cars/ev3/offer/[vehicleId].tsx
export async function getServerSideProps({ params }) {
  const { data: offer } = await supabase
    .from('direct_kia_new_vehicles_offers')
    .select('*')
    .eq('vehicle_id', params.vehicleId)
    .eq('model', 'EV3')
    .single();

  if (!offer) {
    return { notFound: true };
  }

  // Generate SEO data
  const seoTitle = \`\${offer.make} \${offer.model} \${offer.variant} | New Car Deals | DirectKia\`;
  const seoDescription = \`Discover our exclusive offer on the \${offer.make} \${offer.model}...\`;

  return {
    props: {
      offer,
      seoTitle,
      seoDescription,
    },
  };
}`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PRDMigrationSteps;
