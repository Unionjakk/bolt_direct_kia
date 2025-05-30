
import React from 'react';
import { useParams } from 'react-router-dom';
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEV3Offer } from '@/hooks/useEV3Offer';
import EV3OfferDetailLoadingState from './EV3OfferDetailLoadingState';
import EV3OfferDetailErrorState from './EV3OfferDetailErrorState';
import EV3OfferDetailBreadcrumb from './EV3OfferDetailBreadcrumb';
import EV3OfferDetailHeader from './EV3OfferDetailHeader';
import EV3OfferDetailContent from './EV3OfferDetailContent';
import EV3OfferDetailSidebar from './EV3OfferDetailSidebar';

const EV3OfferDetailPage = () => {
  const { vehicleId } = useParams<{ vehicleId: string }>();
  const { data: offer, isLoading, error } = useEV3Offer(vehicleId || '');

  // Basic fallback SEO - the seo-injector.js script will handle the real SEO
  const fallbackTitle = `Kia EV3 Offer ${vehicleId} | New Car Deals | DirectKia`;
  const fallbackDescription = `Discover our exclusive Kia EV3 offer ${vehicleId}. Electric SUV with competitive pricing and finance options.`;

  if (isLoading) {
    return (
      <div className="min-h-screen font-inter bg-white">
        <SEOHead 
          fallbackTitle={fallbackTitle}
          fallbackDescription={fallbackDescription}
        />
        <Header />
        <EV3OfferDetailLoadingState />
        <Footer />
      </div>
    );
  }

  if (error || !offer) {
    return (
      <div className="min-h-screen font-inter bg-white">
        <SEOHead 
          fallbackTitle={`Kia EV3 Offer ${vehicleId} Not Found | DirectKia`}
          fallbackDescription={`The Kia EV3 offer ${vehicleId} you're looking for could not be found or has expired.`}
        />
        <Header />
        <EV3OfferDetailErrorState />
        <Footer />
      </div>
    );
  }

  // Enhanced SEO with offer data for client-side updates
  const seoTitle = `${offer.make} ${offer.model} ${offer.variant}${offer.trim_level ? ` ${offer.trim_level}` : ''} | New Car Deals | DirectKia`;
  const seoDescription = `Discover our exclusive offer on the ${offer.make} ${offer.model} ${offer.variant}. Electric SUV with ${offer.range_miles} miles range. Special pricing from £${offer.final_price?.toLocaleString()}.`;

  return (
    <div className="min-h-screen font-inter bg-white">
      <SEOHead 
        fallbackTitle={seoTitle}
        fallbackDescription={seoDescription}
      />
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <EV3OfferDetailBreadcrumb />
        <EV3OfferDetailHeader offer={offer} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <EV3OfferDetailContent offer={offer} />
          <EV3OfferDetailSidebar offer={offer} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EV3OfferDetailPage;
