
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

interface EV3OfferDetailHeaderProps {
  offer: {
    make: string;
    model: string;
    variant: string;
    trim_level: string;
    final_price: number;
    list_price: number;
    savings_amount: number;
  };
}

const EV3OfferDetailHeader = ({ offer }: EV3OfferDetailHeaderProps) => {
  const offerName = `${offer.make} ${offer.model} ${offer.variant}${offer.trim_level ? ` ${offer.trim_level}` : ''}`;

  return (
    <>
      {/* Back Button */}
      <div className="mb-6">
        <Link to="/new-cars/ev3">
          <Button variant="outline" className="text-kia-red border-kia-red hover:bg-kia-red hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All EV3 Offers
          </Button>
        </Link>
      </div>

      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-kia-charcoal mb-2">
              {offerName}
            </h1>
            {offer.savings_amount > 0 && (
              <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white font-bold px-4 py-2 text-lg">
                Save £{offer.savings_amount.toLocaleString()}
              </Badge>
            )}
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-kia-red">
              £{offer.final_price?.toLocaleString()}
            </div>
            {offer.list_price > offer.final_price && (
              <div className="text-lg text-gray-500 line-through">
                Was £{offer.list_price?.toLocaleString()}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EV3OfferDetailHeader;
