
import { VehicleFilters } from '@/types/vehicle';

export const useFilterLogic = () => {
  const handleFilterChange = (
    filters: VehicleFilters,
    key: keyof VehicleFilters,
    value: any,
    onFiltersChange: (filters: VehicleFilters) => void
  ) => {
    const newFilters = { ...filters, [key]: value === 'all' ? undefined : value };
    
    // Implement cascading logic - clear dependent filters when parent changes
    if (key === 'make') {
      // When make changes, clear model and other dependent filters
      newFilters.model = undefined;
    }
    
    onFiltersChange(newFilters);
  };

  const handleRemoveFilter = (
    filters: VehicleFilters,
    key: keyof VehicleFilters,
    onFiltersChange: (filters: VehicleFilters) => void
  ) => {
    const newFilters = { ...filters };
    delete newFilters[key];
    
    // Handle cascading when removing filters
    if (key === 'make') {
      delete newFilters.model;
    }
    
    onFiltersChange(newFilters);
  };

  const getActiveFiltersCount = (filters: VehicleFilters) => {
    let count = 0;
    if (filters.make) count++;
    if (filters.model) count++;
    if (filters.minPrice || filters.maxPrice) count++;
    if (filters.minMileage || filters.maxMileage) count++;
    if (filters.minYear || filters.maxYear) count++;
    if (filters.fuel) count++;
    if (filters.colour) count++;
    if (filters.transmission && filters.transmission !== 'Any') count++;
    return count;
  };

  return {
    handleFilterChange,
    handleRemoveFilter,
    getActiveFiltersCount
  };
};
