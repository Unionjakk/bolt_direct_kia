
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Filter } from 'lucide-react';
import { VehicleFilters } from '@/types/vehicle';
import { useVehicleFilters } from '@/hooks/useVehicles';
import { useFilterLogic } from '@/hooks/useFilterLogic';
import { PRICE_RANGES, MILEAGE_RANGES } from '@/constants/filterRanges';
import { getPriceRangeValue, getMileageRangeValue, handlePriceRangeChange, handleMileageRangeChange } from '@/utils/filterUtils';
import ActiveFilters from './ActiveFilters';
import FilterSelect from './FilterSelect';

interface VehicleFiltersProps {
  filters: VehicleFilters;
  onFiltersChange: (filters: VehicleFilters) => void;
  resultsCount: number;
}

const VehicleFiltersComponent: React.FC<VehicleFiltersProps> = ({
  filters,
  onFiltersChange,
  resultsCount
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: filterOptions } = useVehicleFilters(filters);
  const { handleFilterChange, handleRemoveFilter, getActiveFiltersCount } = useFilterLogic();

  const clearFilters = () => {
    onFiltersChange({});
  };

  const activeFiltersCount = getActiveFiltersCount(filters);

  if (!filterOptions) return null;

  // Prepare filter options for FilterSelect components
  const makeOptions = [
    { value: 'all', label: 'All Makes' },
    ...filterOptions.makes.map(make => ({ value: make, label: make }))
  ];

  const modelOptions = [
    { value: 'all', label: 'All Models' },
    ...filterOptions.models.map(model => ({ value: model, label: model }))
  ];

  const fuelOptions = [
    { value: 'all', label: 'All Fuel Types' },
    ...filterOptions.fuels.map(fuel => ({ value: fuel, label: fuel }))
  ];

  const colourOptions = [
    { value: 'all', label: 'All Colours' },
    ...filterOptions.colours.map(colour => ({ value: colour, label: colour }))
  ];

  const transmissionOptions = [
    { value: 'Any', label: 'Any' },
    ...filterOptions.transmissions.map(transmission => ({ value: transmission, label: transmission }))
  ];

  return (
    <Card className="mb-6">
      <ActiveFilters 
        filters={filters}
        onRemoveFilter={(key) => handleRemoveFilter(filters, key, onFiltersChange)}
        onClearAll={clearFilters}
      />
      
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button 
            variant="ghost" 
            className="w-full p-4 flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="font-medium">
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </span>
            </div>
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </Button>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <div className="p-4 pt-2 space-y-6 border-t">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <FilterSelect
                label="Make"
                value={filters.make ? 'selected' : 'all'}
                placeholder={filters.make || "All Makes"}
                options={makeOptions}
                onValueChange={(value) => handleFilterChange(filters, 'make', value, onFiltersChange)}
                isFilterActive={!!filters.make}
              />

              <FilterSelect
                label="Model"
                value={filters.model ? 'selected' : 'all'}
                placeholder={filters.model || (filters.make ? "All Models" : "Select Make first")}
                options={modelOptions}
                onValueChange={(value) => handleFilterChange(filters, 'model', value, onFiltersChange)}
                disabled={!filters.make}
                isFilterActive={!!filters.model}
              />

              <FilterSelect
                label="Price Range"
                value={getPriceRangeValue(filters)}
                placeholder="All Prices"
                options={PRICE_RANGES}
                onValueChange={(value) => handlePriceRangeChange(value, filters, onFiltersChange)}
              />

              <FilterSelect
                label="Mileage"
                value={getMileageRangeValue(filters)}
                placeholder="All Mileages"
                options={MILEAGE_RANGES}
                onValueChange={(value) => handleMileageRangeChange(value, filters, onFiltersChange)}
              />

              <FilterSelect
                label="Fuel Type"
                value={filters.fuel ? 'selected' : 'all'}
                placeholder={filters.fuel || "All Fuel Types"}
                options={fuelOptions}
                onValueChange={(value) => handleFilterChange(filters, 'fuel', value, onFiltersChange)}
                isFilterActive={!!filters.fuel}
              />

              <FilterSelect
                label="Colour"
                value={filters.colour ? 'selected' : 'all'}
                placeholder={filters.colour || "All Colours"}
                options={colourOptions}
                onValueChange={(value) => handleFilterChange(filters, 'colour', value, onFiltersChange)}
                isFilterActive={!!filters.colour}
              />

              <FilterSelect
                label="Transmission"
                value={filters.transmission && filters.transmission !== 'Any' ? 'selected' : 'Any'}
                placeholder={filters.transmission || "Any"}
                options={transmissionOptions}
                onValueChange={(value) => handleFilterChange(filters, 'transmission', value, onFiltersChange)}
                isFilterActive={!!(filters.transmission && filters.transmission !== 'Any')}
              />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default VehicleFiltersComponent;
