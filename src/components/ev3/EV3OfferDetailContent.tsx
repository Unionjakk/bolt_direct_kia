import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import EV3OfferImageGallery from './EV3OfferImageGallery';
import EV3OfferSpecifications from './EV3OfferSpecifications';

interface EV3OfferDetailContentProps {
  offer: {
    make: string;
    model: string;
    variant: string;
    trim_level: string;
    images: any;
    summary_features: any;
    transmission: string;
    doors: number;
    seating_capacity: number;
    range_miles: number;
    battery_capacity: string;
    engine_power: string;
    zero_to_sixty: number;
    top_speed: number;
    boot_capacity: number;
    fuel_type: string;
    delivery_type: string;
    body_type?: string;
  };
}

const EV3OfferDetailContent = ({ offer }: EV3OfferDetailContentProps) => {
  const offerName = `${offer.make} ${offer.model} ${offer.variant}${offer.trim_level ? ` ${offer.trim_level}` : ''}`;

  return (
    <div className="lg:col-span-2 space-y-8">
      {/* Image Gallery */}
      <EV3OfferImageGallery 
        images={offer.images} 
        offerName={offerName}
      />

      {/* Key Features */}
      {offer.summary_features && Array.isArray(offer.summary_features) && offer.summary_features.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-kia-charcoal">Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {offer.summary_features.map((feature, index) => {
                let featureText = '';
                if (typeof feature === 'object' && feature !== null) {
                  if (feature.feature && feature.value) {
                    featureText = `${feature.feature}: ${feature.value}`;
                  } else if (feature.feature) {
                    featureText = feature.feature;
                  } else {
                    featureText = String(feature);
                  }
                } else {
                  featureText = String(feature);
                }
                
                return (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-kia-red mt-0.5 flex-shrink-0" />
                    <span className="text-kia-charcoal">{featureText}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Specifications */}
      <EV3OfferSpecifications offer={offer} />
    </div>
  );
};

export default EV3OfferDetailContent;
