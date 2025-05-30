
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Vehicle } from '@/types/vehicle';

export const useVehicle = (id: string) => {
  return useQuery({
    queryKey: ['vehicle', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('direct_kia_active_used_vehicles')
        .select('*')
        .eq('id', parseInt(id)) // Convert string to number
        .single();

      if (error) {
        console.error('Error fetching vehicle:', error);
        throw error;
      }

      return data as Vehicle;
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
