
import React from 'react';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { VehicleFilters } from '@/types/vehicle';

interface VehicleSortSectionProps {
  filters: VehicleFilters;
  onFiltersChange: (filters: VehicleFilters) => void;
  resultsCount: number;
}

const VehicleSortSection: React.FC<VehicleSortSectionProps> = ({
  filters,
  onFiltersChange,
  resultsCount
}) => {
  const handleSortChange = (value: string) => {
    if (value === 'featured') {
      onFiltersChange({ ...filters, sortBy: 'featured', sortOrder: undefined });
    } else if (value === 'relevance') {
      onFiltersChange({ ...filters, sortBy: undefined, sortOrder: undefined });
    } else {
      const [sortBy, sortOrder] = value.split('-');
      onFiltersChange({ ...filters, sortBy, sortOrder: sortOrder as 'asc' | 'desc' });
    }
  };

  const getSortValue = () => {
    if (filters.sortBy === 'featured') return 'featured';
    if (filters.sortBy && filters.sortOrder) return `${filters.sortBy}-${filters.sortOrder}`;
    return 'featured'; // Default to featured instead of relevance
  };

  return (
    <Card className="p-4 mb-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="text-sm text-gray-600">
          <span className="font-medium">{resultsCount}</span> vehicles found
        </div>
        
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium">Sort by:</label>
          <Select 
            value={getSortValue()} 
            onValueChange={handleSortChange}
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Featured" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="display_price-asc">Price: Low to High</SelectItem>
              <SelectItem value="display_price-desc">Price: High to Low</SelectItem>
              <SelectItem value="mileage-asc">Mileage: Low to High</SelectItem>
              <SelectItem value="mileage-desc">Mileage: High to Low</SelectItem>
              <SelectItem value="registration_year-desc">Year: Newest First</SelectItem>
              <SelectItem value="registration_year-asc">Year: Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
};

export default VehicleSortSection;
