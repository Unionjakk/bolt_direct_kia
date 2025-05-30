
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import EV3OfferCardImage from './EV3OfferCardImage';
import EV3OfferCardHeader from './EV3OfferCardHeader';
import EV3OfferCardSpecs from './EV3OfferCardSpecs';
import EV3OfferCardFeatures from './EV3OfferCardFeatures';
import EV3OfferCardPricing from './EV3OfferCardPricing';

interface EV3Offer {
  vehicle_id: number;
  make: string;
  model: string;
  variant: string;
  trim_level: string;
  list_price: number;
  final_price: number;
  savings_amount: number;
  fuel_type: string;
  transmission: string;
  doors: number;
  seating_capacity: number;
  range_miles: number;
  battery_capacity: string;
  engine_power: string;
  zero_to_sixty: number;
  top_speed: number;
  boot_capacity: number;
  images: any;
  summary_features: any;
  features: any;
  finance_offers: any;
  delivery_type: string;
  created_at: string;
  updated_at: string;
}

interface EV3OfferCardProps {
  offer: EV3Offer;
  onViewOffer: (vehicleId: number) => void;
}

const EV3OfferCard = ({ offer, onViewOffer }: EV3OfferCardProps) => {
  const handleCardClick = () => {
    onViewOffer(offer.vehicle_id);
  };

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onViewOffer(offer.vehicle_id);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onViewOffer(offer.vehicle_id);
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log('Image failed to load, using fallback');
    e.currentTarget.src = '/images/EV3.jpg';
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for Kia EV3 ${offer.variant}`}
    >
      <EV3OfferCardImage 
        offer={offer} 
        onImageError={handleImageError}
      />

      <EV3OfferCardHeader 
        variant={offer.variant}
        trimLevel={offer.trim_level}
      />

      <CardContent className="space-y-4">
        <EV3OfferCardSpecs offer={offer} />

        <EV3OfferCardFeatures summaryFeatures={offer.summary_features} />

        <EV3OfferCardPricing 
          offer={offer}
          onButtonClick={handleButtonClick}
        />
      </CardContent>
    </Card>
  );
};

export default EV3OfferCard;
