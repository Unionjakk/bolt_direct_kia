
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface EV3CashPriceSectionProps {
  listPrice: number;
  finalPrice: number;
  savingsAmount: number;
}

const EV3CashPriceSection = ({ listPrice, finalPrice, savingsAmount }: EV3CashPriceSectionProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-kia-charcoal">Cash Price</h3>
      <div className="space-y-2">
        {listPrice > finalPrice ? (
          <>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">List Price:</span>
              <span className="text-gray-500 line-through">{formatPrice(listPrice)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Our Price:</span>
              <span className="text-2xl font-bold text-kia-red">{formatPrice(finalPrice)}</span>
            </div>
            {savingsAmount > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-medium">You Save:</span>
                <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">
                  {formatPrice(savingsAmount)}
                </Badge>
              </div>
            )}
          </>
        ) : (
          <div className="flex justify-between items-center">
            <span className="font-medium">Price:</span>
            <span className="text-2xl font-bold text-kia-charcoal">{formatPrice(finalPrice)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EV3CashPriceSection;
