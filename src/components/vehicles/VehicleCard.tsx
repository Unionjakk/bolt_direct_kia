import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Vehicle } from '@/types/vehicle';
import { Car, Fuel, Calendar, Gauge, Eye } from 'lucide-react';

interface VehicleCardProps {
  vehicle: Vehicle;
  onViewDetails: (vehicle: Vehicle) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onViewDetails }) => {
  const navigate = useNavigate();
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

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-GB').format(mileage);
  };

  const calculateSavings = () => {
    if (hasOffer) {
      return displayPrice - vehicle.offer_price!;
    }
    return 0;
  };

  const handleViewDetails = () => {
    navigate(`/used-cars/vehicle/${vehicle.id}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div 
        className="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-pointer"
        onClick={handleViewDetails}
      >
        {vehicle.image_url ? (
          <img
            src={vehicle.image_url}
            alt={`${vehicle.make} ${vehicle.model}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <Car className="h-12 w-12 text-gray-400" />
          </div>
        )}
        
        {hasOffer && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white font-bold px-3 py-1.5 text-xs shadow-lg">
              SPECIAL OFFER
            </Badge>
          </div>
        )}

        {vehicle.image_count && vehicle.image_count > 1 && (
          <div className="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
            {vehicle.image_count} photos
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="mb-3">
          <h3 className="font-bold text-lg text-kia-charcoal line-clamp-1">
            {vehicle.registration_year} {vehicle.make} {vehicle.model}
          </h3>
          {vehicle.variant && (
            <p className="text-sm text-kia-gray-medium line-clamp-1">{vehicle.variant}</p>
          )}
          
          {vehicle.attention_grabber && (
            <div className="mt-2">
              <Badge 
                variant="outline" 
                className="bg-blue-100 text-blue-800 font-semibold px-2 py-1 text-xs border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {vehicle.attention_grabber}
              </Badge>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-1">
            <Gauge className="h-4 w-4 text-kia-gray-medium" />
            <span>{formatMileage(vehicle.mileage)} miles</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4 text-kia-gray-medium" />
            <span>{vehicle.fuel}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4 text-kia-gray-medium" />
            <span>{vehicle.registration_year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Car className="h-4 w-4 text-kia-gray-medium" />
            <span>{vehicle.transmission}</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex-1">
              {hasOffer ? (
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-bold text-red-600">
                      {formatPrice(vehicle.offer_price!)}
                    </div>
                    <Badge variant="outline" className="text-xs text-red-600 border-red-200 bg-red-50">
                      Save {formatPrice(calculateSavings())}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    Was {formatPrice(displayPrice)}
                  </div>
                </div>
              ) : (
                <div className="font-bold text-xl text-kia-charcoal">
                  {formatPrice(displayPrice)}
                </div>
              )}
            </div>
            {vehicle.display_finance_monthly && (
              <div className="text-right ml-4">
                <div className="text-sm text-kia-gray-medium">From</div>
                <div className="font-semibold text-kia-charcoal">
                  £{vehicle.display_finance_monthly}/mo
                </div>
              </div>
            )}
          </div>

          <Button 
            onClick={handleViewDetails}
            className="w-full bg-kia-red hover:bg-kia-red-dark text-white"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
