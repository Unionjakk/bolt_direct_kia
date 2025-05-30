
import React from 'react';
import { Battery, Zap, Car } from 'lucide-react';

interface EV3OfferCardSpecsProps {
  offer: {
    range_miles?: number;
    engine_power?: string;
    doors?: number;
    seating_capacity?: number;
  };
}

const EV3OfferCardSpecs = ({ offer }: EV3OfferCardSpecsProps) => {
  return (
    <div className="grid grid-cols-2 gap-3 text-sm">
      {offer.range_miles && (
        <div className="flex items-center gap-1">
          <Battery className="h-4 w-4 text-kia-red" />
          <span>{offer.range_miles} miles</span>
        </div>
      )}
      {offer.engine_power && (
        <div className="flex items-center gap-1">
          <Zap className="h-4 w-4 text-kia-red" />
          <span>{offer.engine_power}</span>
        </div>
      )}
      {offer.doors && (
        <div className="flex items-center gap-1">
          <Car className="h-4 w-4 text-kia-red" />
          <span>{offer.doors} doors</span>
        </div>
      )}
      {offer.seating_capacity && (
        <div className="flex items-center gap-1">
          <Car className="h-4 w-4 text-kia-red" />
          <span>{offer.seating_capacity} seats</span>
        </div>
      )}
    </div>
  );
};

export default EV3OfferCardSpecs;
