
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Battery, Zap, Car, Settings, Package } from 'lucide-react';

interface EV3OfferSpecificationsProps {
  offer: {
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
    trim_level?: string;
  };
}

const EV3OfferSpecifications = ({ offer }: EV3OfferSpecificationsProps) => {
  const specifications = [
    {
      category: 'Vehicle Type',
      icon: <Car className="h-5 w-5 text-kia-red" />,
      items: [
        { label: 'Body Type', value: offer.body_type || 'SUV' },
        { label: 'Trim Level', value: offer.trim_level },
        { label: 'Fuel Type', value: offer.fuel_type },
        { label: 'Transmission', value: offer.transmission },
      ]
    },
    {
      category: 'Performance',
      icon: <Zap className="h-5 w-5 text-kia-red" />,
      items: [
        { label: 'Power', value: offer.engine_power },
        { label: '0-60 mph', value: offer.zero_to_sixty ? `${offer.zero_to_sixty}s` : null },
        { label: 'Top Speed', value: offer.top_speed ? `${offer.top_speed} mph` : null },
      ]
    },
    {
      category: 'Electric Range & Battery',
      icon: <Battery className="h-5 w-5 text-kia-red" />,
      items: [
        { label: 'Range (WLTP)', value: offer.range_miles ? `${offer.range_miles} miles` : null },
        { label: 'Battery Capacity', value: offer.battery_capacity },
      ]
    },
    {
      category: 'Dimensions & Capacity',
      icon: <Settings className="h-5 w-5 text-kia-red" />,
      items: [
        { label: 'Doors', value: offer.doors?.toString() },
        { label: 'Seating Capacity', value: offer.seating_capacity?.toString() },
        { label: 'Boot Capacity', value: offer.boot_capacity ? `${offer.boot_capacity}L` : null },
      ]
    },
    {
      category: 'Delivery',
      icon: <Package className="h-5 w-5 text-kia-red" />,
      items: [
        { label: 'Delivery Type', value: offer.delivery_type },
      ]
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-kia-charcoal">Technical Specifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {specifications.map((section) => (
          <div key={section.category} className="space-y-3">
            <div className="flex items-center gap-2">
              {section.icon}
              <h3 className="font-semibold text-kia-charcoal">{section.category}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {section.items.map((item) => (
                item.value ? (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">{item.label}:</span>
                    <span className="font-medium text-kia-charcoal">{item.value}</span>
                  </div>
                ) : null
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default EV3OfferSpecifications;
