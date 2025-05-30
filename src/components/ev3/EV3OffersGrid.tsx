
import React from 'react';
import { useEV3Offers } from '@/hooks/useEV3Offers';
import { useNavigate } from 'react-router-dom';
import EV3OffersGridHeader from './EV3OffersGridHeader';
import EV3OffersGridStates from './EV3OffersGridStates';
import EV3OfferCard from './EV3OfferCard';

const EV3OffersGrid = () => {
  const { data: offers, isLoading, error } = useEV3Offers();
  const navigate = useNavigate();

  console.log('EV3OffersGrid rendered - Component mount state');
  console.log('Loading state:', isLoading);
  console.log('Error state:', error);
  console.log('Offers data:', offers);
  console.log('Offers length:', offers?.length);

  const handleViewOffer = (vehicleId: number) => {
    navigate(`/new-cars/ev3/offer/${vehicleId}`);
  };

  // Handle loading, error, and empty states
  if (isLoading || error || !offers || offers.length === 0) {
    return (
      <EV3OffersGridStates 
        isLoading={isLoading}
        error={error}
        isEmpty={!offers || offers.length === 0}
      />
    );
  }

  console.log('Rendering offers grid with', offers.length, 'offers');

  return (
    <section className="py-16 bg-kia-gray-light">
      <div className="container mx-auto px-4">
        <EV3OffersGridHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => {
            console.log('Rendering individual offer:', offer.vehicle_id, offer);
            
            return (
              <EV3OfferCard
                key={offer.vehicle_id}
                offer={offer}
                onViewOffer={handleViewOffer}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EV3OffersGrid;
