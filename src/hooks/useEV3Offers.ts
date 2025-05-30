
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface EV3Offer {
  vehicle_id: number;
  make: string;
  model: string;
  variant: string;
  trim_level: string;
  list_price: number;
  final_price: number;
  savings_amount: number;
  fuel_type: string;
  transmission: string;
  doors: number;
  seating_capacity: number;
  range_miles: number;
  battery_capacity: string;
  engine_power: string;
  zero_to_sixty: number;
  top_speed: number;
  boot_capacity: number;
  images: any; // Json type from database
  summary_features: any; // Json type from database
  features: any; // Json type from database
  finance_offers: any; // Json type from database
  delivery_type: string;
  created_at: string;
  updated_at: string;
}

export const useEV3Offers = () => {
  return useQuery({
    queryKey: ['ev3-offers'],
    queryFn: async (): Promise<EV3Offer[]> => {
      console.log('useEV3Offers: Starting database query');
      
      try {
        // First, let's try a simple query to test connectivity
        console.log('useEV3Offers: Testing basic table access...');
        const { count } = await supabase
          .from('direct_kia_new_vehicles_offers')
          .select('*', { count: 'exact', head: true });
        
        console.log('useEV3Offers: Total records in table:', count);

        // Now try to get all records to see what models exist
        console.log('useEV3Offers: Fetching all records to check available models...');
        const { data: allData, error: allError } = await supabase
          .from('direct_kia_new_vehicles_offers')
          .select('model, make, variant')
          .limit(10);

        console.log('useEV3Offers: Sample records:', allData);
        console.log('useEV3Offers: Sample query error:', allError);

        // Try case-insensitive query for EV3
        console.log('useEV3Offers: Querying for EV3 offers (case-insensitive)...');
        const { data, error } = await supabase
          .from('direct_kia_new_vehicles_offers')
          .select('*')
          .ilike('model', 'EV3')
          .order('created_at', { ascending: false });

        console.log('useEV3Offers: EV3 query response - Data length:', data?.length || 0);
        console.log('useEV3Offers: EV3 query response - Data:', data);
        console.log('useEV3Offers: EV3 query response - Error:', error);

        if (error) {
          console.error('useEV3Offers: Database error details:', {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code
          });
          throw error;
        }

        // If case-insensitive doesn't work, try exact match
        if (!data || data.length === 0) {
          console.log('useEV3Offers: No results with ilike, trying exact match...');
          const { data: exactData, error: exactError } = await supabase
            .from('direct_kia_new_vehicles_offers')
            .select('*')
            .eq('model', 'EV3')
            .order('created_at', { ascending: false });

          console.log('useEV3Offers: Exact match query - Data:', exactData);
          console.log('useEV3Offers: Exact match query - Error:', exactError);

          if (exactError) {
            throw exactError;
          }

          console.log('useEV3Offers: Returning exact match results:', exactData?.length || 0, 'offers');
          return exactData || [];
        }

        console.log('useEV3Offers: Returning case-insensitive results:', data.length, 'offers');
        return data;

      } catch (queryError) {
        console.error('useEV3Offers: Query execution failed:', queryError);
        throw queryError;
      }
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    meta: {
      onError: (error) => {
        console.error('useEV3Offers: React Query error:', error);
      }
    }
  });
};
