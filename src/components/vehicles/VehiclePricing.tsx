
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Vehicle } from '@/types/vehicle';

interface VehiclePricingProps {
  vehicle: Vehicle;
}

const VehiclePricing: React.FC<VehiclePricingProps> = ({ vehicle }) => {
  const displayPrice = vehicle.display_price || vehicle.price;
  const hasOffer = vehicle.offer_display && vehicle.offer_price;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const calculateSavings = () => {
    if (hasOffer) {
      return displayPrice - vehicle.offer_price!;
    }
    return 0;
  };

  return (
    <Card className="bg-gradient-to-br from-gray-50 to-white border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Pricing
          {hasOffer && (
            <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white">
              SPECIAL OFFER
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {hasOffer ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Special Offer Price:</span>
              <div className="text-right">
                <div className="text-2xl font-bold text-red-600">
                  {formatPrice(vehicle.offer_price!)}
                </div>
                <div className="text-sm text-gray-500 line-through">
                  Was {formatPrice(displayPrice)}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-t">
              <span className="font-semibold text-green-600">You Save:</span>
              <span className="text-lg font-bold text-green-600">
                {formatPrice(calculateSavings())}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-lg text-gray-700">Price:</span>
            <div className="text-3xl font-bold text-kia-charcoal">
              {formatPrice(displayPrice)}
            </div>
          </div>
        )}

        {vehicle.display_finance_monthly && (
          <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Finance from:</span>
              <div className="text-right">
                <div className="text-xl font-semibold text-kia-charcoal">
                  £{vehicle.display_finance_monthly}/month
                </div>
                {vehicle.display_finance_deposit && (
                  <div className="text-sm text-gray-500">
                    £{vehicle.display_finance_deposit} deposit
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="font-semibold text-blue-800">National Delivery Available</span>
          </div>
          <p className="text-sm text-blue-700">
            We can deliver this vehicle anywhere in the UK. Contact us for delivery options and pricing.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehiclePricing;
