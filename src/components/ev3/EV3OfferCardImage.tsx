
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface EV3OfferCardImageProps {
  offer: {
    vehicle_id: number;
    variant: string;
    savings_amount: number;
    images: any;
  };
  onImageError: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

const EV3OfferCardImage = ({ offer, onImageError }: EV3OfferCardImageProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getImageUrl = (offer: EV3OfferCardImageProps['offer']) => {
    console.log('Getting image for offer:', offer.vehicle_id, 'images:', offer.images);
    
    if (offer.images && Array.isArray(offer.images) && offer.images.length > 0) {
      const firstImage = offer.images[0];
      const imageUrl = typeof firstImage === 'object' && firstImage.url ? firstImage.url : firstImage;
      console.log('Using image from data:', imageUrl);
      return imageUrl;
    }
    console.log('Using fallback image for offer:', offer.vehicle_id);
    return '/images/EV3.jpg';
  };

  return (
    <div className="relative">
      <img
        src={getImageUrl(offer)}
        alt={`Kia EV3 ${offer.variant}`}
        className="w-full h-48 object-cover"
        loading="lazy"
        onError={onImageError}
      />
      {offer.savings_amount > 0 && (
        <div className="absolute top-3 right-3">
          <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white font-bold px-3 py-1.5 text-xs shadow-lg">
            SAVE {formatPrice(offer.savings_amount)}
          </Badge>
        </div>
      )}
    </div>
  );
};

export default EV3OfferCardImage;
