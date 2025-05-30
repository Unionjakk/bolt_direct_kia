
import React from 'react';
import { VehicleFilters } from '@/types/vehicle';
import FilterTag from './FilterTag';

interface ActiveFiltersProps {
  filters: VehicleFilters;
  onRemoveFilter: (filterKey: keyof VehicleFilters) => void;
  onClearAll: () => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({ 
  filters, 
  onRemoveFilter, 
  onClearAll 
}) => {
  const getFilterDisplayValue = (key: keyof VehicleFilters, value: any): string => {
    switch (key) {
      case 'minPrice':
      case 'maxPrice':
        return '';
      case 'minMileage':
      case 'maxMileage':
        return '';
      case 'minYear':
      case 'maxYear':
        return '';
      default:
        return value?.toString() || '';
    }
  };

  const getFilterLabel = (key: keyof VehicleFilters): string => {
    switch (key) {
      case 'make': return 'Make';
      case 'model': return 'Model';
      case 'fuel': return 'Fuel';
      case 'colour': return 'Colour';
      case 'transmission': return 'Transmission';
      default: return key;
    }
  };

  const getPriceRangeDisplay = (): string | null => {
    if (filters.minPrice || filters.maxPrice) {
      const min = filters.minPrice || 0;
      const max = filters.maxPrice || 999999;
      if (max === 999999) return `£${min.toLocaleString()}+`;
      return `£${min.toLocaleString()} - £${max.toLocaleString()}`;
    }
    return null;
  };

  const getMileageRangeDisplay = (): string | null => {
    if (filters.minMileage || filters.maxMileage) {
      const min = filters.minMileage || 0;
      const max = filters.maxMileage || 999999;
      if (max === 999999) return `${min.toLocaleString()}+ miles`;
      return `${min.toLocaleString()} - ${max.toLocaleString()} miles`;
    }
    return null;
  };

  const handleRemovePriceRange = () => {
    onRemoveFilter('minPrice');
    onRemoveFilter('maxPrice');
  };

  const handleRemoveMileageRange = () => {
    onRemoveFilter('minMileage');
    onRemoveFilter('maxMileage');
  };

  const activeFilters = [];

  // Add individual filters
  if (filters.make) {
    activeFilters.push(
      <FilterTag
        key="make"
        label="Make"
        value={filters.make}
        onRemove={() => onRemoveFilter('make')}
      />
    );
  }

  if (filters.model) {
    activeFilters.push(
      <FilterTag
        key="model"
        label="Model"
        value={filters.model}
        onRemove={() => onRemoveFilter('model')}
      />
    );
  }

  if (filters.fuel) {
    activeFilters.push(
      <FilterTag
        key="fuel"
        label="Fuel"
        value={filters.fuel}
        onRemove={() => onRemoveFilter('fuel')}
      />
    );
  }

  if (filters.colour) {
    activeFilters.push(
      <FilterTag
        key="colour"
        label="Colour"
        value={filters.colour}
        onRemove={() => onRemoveFilter('colour')}
      />
    );
  }

  if (filters.transmission && filters.transmission !== 'Any') {
    activeFilters.push(
      <FilterTag
        key="transmission"
        label="Transmission"
        value={filters.transmission}
        onRemove={() => onRemoveFilter('transmission')}
      />
    );
  }

  // Add price range filter
  const priceDisplay = getPriceRangeDisplay();
  if (priceDisplay) {
    activeFilters.push(
      <FilterTag
        key="price"
        label="Price"
        value={priceDisplay}
        onRemove={handleRemovePriceRange}
      />
    );
  }

  // Add mileage range filter
  const mileageDisplay = getMileageRangeDisplay();
  if (mileageDisplay) {
    activeFilters.push(
      <FilterTag
        key="mileage"
        label="Mileage"
        value={mileageDisplay}
        onRemove={handleRemoveMileageRange}
      />
    );
  }

  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-700">Active Filters:</h3>
        <button
          onClick={onClearAll}
          className="text-sm text-red-600 hover:text-red-800 transition-colors"
        >
          Clear All
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {activeFilters}
      </div>
    </div>
  );
};

export default ActiveFilters;
