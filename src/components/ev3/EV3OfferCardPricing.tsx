
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

interface EV3OfferCardPricingProps {
  offer: {
    list_price: number;
    final_price: number;
    finance_offers: any;
  };
  onButtonClick: (event: React.MouseEvent) => void;
}

const EV3OfferCardPricing = ({ offer, onButtonClick }: EV3OfferCardPricingProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="border-t pt-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          {offer.list_price > offer.final_price ? (
            <div>
              <div className="text-lg font-bold text-kia-red">
                {formatPrice(offer.final_price)}
              </div>
              <div className="text-sm text-gray-500 line-through">
                Was {formatPrice(offer.list_price)}
              </div>
            </div>
          ) : (
            <div className="text-lg font-bold text-kia-charcoal">
              {formatPrice(offer.final_price)}
            </div>
          )}
        </div>
        
        {offer.finance_offers && Array.isArray(offer.finance_offers) && offer.finance_offers.length > 0 && (
          <div className="text-right">
            {(() => {
              const pcpOffer = offer.finance_offers.find(fo => fo.type === 'PCP');
              if (pcpOffer) {
                const monthlyAmount = pcpOffer.monthly_payment || pcpOffer.monthly || 0;
                return (
                  <>
                    <div className="text-sm text-kia-gray-medium">From</div>
                    <div className="font-semibold text-kia-charcoal">
                      £{monthlyAmount}/mo
                    </div>
                  </>
                );
              }
              return null;
            })()}
          </div>
        )}
      </div>

      <Button 
        onClick={onButtonClick}
        className="w-full bg-kia-red hover:bg-kia-red-dark text-white"
      >
        <Eye className="h-4 w-4 mr-2" />
        View Offer Details
      </Button>
    </div>
  );
};

export default EV3OfferCardPricing;
