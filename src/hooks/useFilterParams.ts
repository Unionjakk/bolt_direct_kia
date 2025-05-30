
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { VehicleFilters } from '@/types/vehicle';

export const useFilterParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<VehicleFilters>({});

  // Initialize filters from URL parameters
  useEffect(() => {
    const urlFilters: VehicleFilters = {};
    
    const make = searchParams.get('make');
    const model = searchParams.get('model');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const minMileage = searchParams.get('minMileage');
    const maxMileage = searchParams.get('maxMileage');
    const fuel = searchParams.get('fuel');
    const colour = searchParams.get('colour');
    const transmission = searchParams.get('transmission');
    const sortBy = searchParams.get('sortBy');
    const sortOrder = searchParams.get('sortOrder');

    if (make) urlFilters.make = make;
    if (model) urlFilters.model = model;
    if (minPrice) urlFilters.minPrice = parseInt(minPrice);
    if (maxPrice) urlFilters.maxPrice = parseInt(maxPrice);
    if (minMileage) urlFilters.minMileage = parseInt(minMileage);
    if (maxMileage) urlFilters.maxMileage = parseInt(maxMileage);
    if (fuel) urlFilters.fuel = fuel;
    if (colour) urlFilters.colour = colour;
    if (transmission) urlFilters.transmission = transmission;
    if (sortBy) urlFilters.sortBy = sortBy;
    if (sortOrder) urlFilters.sortOrder = sortOrder as 'asc' | 'desc';

    setFilters(urlFilters);
  }, [searchParams]);

  // Update URL when filters change
  const updateFilters = (newFilters: VehicleFilters) => {
    setFilters(newFilters);
    
    const params = new URLSearchParams();
    
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params.set(key, value.toString());
      }
    });

    setSearchParams(params);
  };

  return { filters, updateFilters };
};
