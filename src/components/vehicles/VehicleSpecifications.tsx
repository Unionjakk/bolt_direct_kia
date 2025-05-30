import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Vehicle } from '@/types/vehicle';
import { Calendar, Gauge, Fuel, Car, Cog, Users, DoorOpen } from 'lucide-react';
interface VehicleSpecificationsProps {
  vehicle: Vehicle;
}
const VehicleSpecifications: React.FC<VehicleSpecificationsProps> = ({
  vehicle
}) => {
  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-GB').format(mileage);
  };
  const specifications = [{
    icon: Calendar,
    label: 'Year',
    value: vehicle.registration_year
  }, {
    icon: Gauge,
    label: 'Mileage',
    value: `${formatMileage(vehicle.mileage)} miles`
  }, {
    icon: Fuel,
    label: 'Fuel Type',
    value: vehicle.fuel
  }, {
    icon: Car,
    label: 'Transmission',
    value: vehicle.transmission
  }, {
    icon: Cog,
    label: 'Engine Size',
    value: vehicle.engine_size ? `${vehicle.engine_size}L` : 'N/A'
  }, {
    icon: DoorOpen,
    label: 'Doors',
    value: vehicle.doors || 'N/A'
  }, {
    icon: Users,
    label: 'Seats',
    value: vehicle.seats || 'N/A'
  }, {
    icon: Car,
    label: 'Body Style',
    value: vehicle.body_style
  }];
  const additionalInfo = [{
    label: 'Registration',
    value: vehicle.registration
  }, {
    label: 'Stock Number',
    value: vehicle.stock_number
  }, {
    label: 'Colour',
    value: vehicle.colour_base || vehicle.colour_manufacturer
  }, {
    label: 'VIN',
    value: vehicle.vin
  }, {
    label: 'Emissions',
    value: vehicle.emissions ? `${vehicle.emissions} g/km` : 'N/A'
  }, {
    label: 'MPG',
    value: vehicle.mpg ? `${vehicle.mpg} mpg` : 'N/A'
  }].filter(item => item.value && item.value !== 'N/A');
  return <div className="space-y-6">
      {/* Key Specifications */}
      <Card>
        <CardHeader>
          <CardTitle>Key Specifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specifications.map((spec, index) => <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <spec.icon className="h-5 w-5 text-kia-red flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-600">{spec.label}</div>
                  <div className="font-semibold text-kia-charcoal">{spec.value}</div>
                </div>
              </div>)}
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      {additionalInfo.length > 0 && <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalInfo.map((info, index) => <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-600">{info.label}:</span>
                  <span className="font-semibold text-kia-charcoal">{info.value}</span>
                </div>)}
            </div>
          </CardContent>
        </Card>}

      {/* Sales Pitch */}
      {vehicle.sales_pitch}
    </div>;
};
export default VehicleSpecifications;