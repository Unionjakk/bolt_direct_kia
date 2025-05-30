import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Vehicle, VehicleFilters } from '@/types/vehicle';

export const useVehicles = (filters: VehicleFilters, page: number = 1, limit: number = 12) => {
  return useQuery({
    queryKey: ['vehicles', filters, page, limit],
    queryFn: async () => {
      let query = supabase
        .from('direct_kia_active_used_vehicles')
        .select('*', { count: 'exact' });

      // Apply filters
      if (filters.make) {
        query = query.ilike('make', `%${filters.make}%`);
      }
      
      if (filters.model) {
        query = query.ilike('model', `%${filters.model}%`);
      }
      
      if (filters.minPrice) {
        query = query.gte('display_price', filters.minPrice);
      }
      
      if (filters.maxPrice) {
        query = query.lte('display_price', filters.maxPrice);
      }
      
      if (filters.minMileage) {
        query = query.gte('mileage', filters.minMileage);
      }
      
      if (filters.maxMileage) {
        query = query.lte('mileage', filters.maxMileage);
      }
      
      if (filters.minYear) {
        query = query.gte('registration_year', filters.minYear);
      }
      
      if (filters.maxYear) {
        query = query.lte('registration_year', filters.maxYear);
      }
      
      if (filters.fuel) {
        query = query.eq('fuel', filters.fuel);
      }
      
      if (filters.colour) {
        query = query.eq('colour_base', filters.colour);
      }
      
      if (filters.transmission && filters.transmission !== 'Any') {
        query = query.eq('transmission', filters.transmission);
      }

      // Apply sorting
      if (filters.sortBy === 'featured') {
        // Featured sort: offer_display TRUE first, then oldest cars first within each group
        query = query.order('offer_display', { ascending: false, nullsFirst: false });
        query = query.order('created_at', { ascending: true });
      } else if (filters.sortBy) {
        const order = filters.sortOrder || 'asc';
        query = query.order(filters.sortBy, { ascending: order === 'asc' });
      } else {
        // Default to featured sort
        query = query.order('offer_display', { ascending: false, nullsFirst: false });
        query = query.order('created_at', { ascending: true });
      }

      // Apply pagination
      const from = (page - 1) * limit;
      const to = from + limit - 1;
      query = query.range(from, to);

      const { data, error, count } = await query;

      if (error) {
        console.error('Error fetching vehicles:', error);
        throw error;
      }

      return {
        vehicles: data as Vehicle[],
        totalCount: count || 0,
        currentPage: page,
        totalPages: Math.ceil((count || 0) / limit)
      };
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useVehicleFilters = (currentFilters: VehicleFilters = {}) => {
  return useQuery({
    queryKey: ['vehicle-filters', currentFilters],
    queryFn: async () => {
      let query = supabase
        .from('direct_kia_active_used_vehicles')
        .select('make, model, fuel, colour_base, transmission, display_price, price, mileage, registration_year');

      // Only apply filters that exist - this allows getting all options when no filters are set
      if (currentFilters.make) {
        query = query.ilike('make', `%${currentFilters.make}%`);
      }
      
      if (currentFilters.fuel) {
        query = query.eq('fuel', currentFilters.fuel);
      }
      
      if (currentFilters.colour) {
        query = query.eq('colour_base', currentFilters.colour);
      }
      
      if (currentFilters.transmission && currentFilters.transmission !== 'Any') {
        query = query.eq('transmission', currentFilters.transmission);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching filter options:', error);
        throw error;
      }

      // Extract unique values for filters with counts
      const makes = [...new Set(data.map(v => v.make).filter(Boolean))].sort();
      const models = [...new Set(data.map(v => v.model).filter(Boolean))].sort();
      const fuels = [...new Set(data.map(v => v.fuel).filter(Boolean))].sort();
      const colours = [...new Set(data.map(v => v.colour_base).filter(Boolean))].sort();
      const transmissions = [...new Set(data.map(v => v.transmission).filter(Boolean))].sort();
      
      const prices = data.map(v => v.display_price || v.price).filter(Boolean);
      const mileages = data.map(v => v.mileage).filter(Boolean);
      const years = data.map(v => v.registration_year).filter(Boolean);

      return {
        makes,
        models,
        fuels,
        colours,
        transmissions,
        priceRange: {
          min: Math.min(...prices),
          max: Math.max(...prices)
        },
        mileageRange: {
          min: Math.min(...mileages),
          max: Math.max(...mileages)
        },
        yearRange: {
          min: Math.min(...years),
          max: Math.max(...years)
        }
      };
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
