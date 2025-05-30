
import { VehicleFilters } from '@/types/vehicle';
import { PRICE_RANGES, MILEAGE_RANGES } from '@/constants/filterRanges';

export const getPriceRangeValue = (filters: VehicleFilters): string => {
  if (!filters.minPrice && !filters.maxPrice) return 'all';
  
  const range = PRICE_RANGES.find(range => 
    range.min === filters.minPrice && range.max === filters.maxPrice
  );
  
  return range?.value || 'all';
};

export const getMileageRangeValue = (filters: VehicleFilters): string => {
  if (!filters.minMileage && !filters.maxMileage) return 'all';
  
  const range = MILEAGE_RANGES.find(range => 
    range.min === filters.minMileage && range.max === filters.maxMileage
  );
  
  return range?.value || 'all';
};

export const handlePriceRangeChange = (
  value: string,
  filters: VehicleFilters,
  onFiltersChange: (filters: VehicleFilters) => void
) => {
  if (value === 'all') {
    onFiltersChange({ ...filters, minPrice: undefined, maxPrice: undefined });
  } else {
    const range = PRICE_RANGES.find(r => r.value === value);
    if (range) {
      onFiltersChange({ 
        ...filters, 
        minPrice: range.min, 
        maxPrice: range.max 
      });
    }
  }
};

export const handleMileageRangeChange = (
  value: string,
  filters: VehicleFilters,
  onFiltersChange: (filters: VehicleFilters) => void
) => {
  if (value === 'all') {
    onFiltersChange({ ...filters, minMileage: undefined, maxMileage: undefined });
  } else {
    const range = MILEAGE_RANGES.find(r => r.value === value);
    if (range) {
      onFiltersChange({ 
        ...filters, 
        minMileage: range.min, 
        maxMileage: range.max 
      });
    }
  }
};
