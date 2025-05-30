
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
  images: any;
  summary_features: any;
  features: any;
  finance_offers: any;
  delivery_type: string;
  created_at: string;
  updated_at: string;
}

export const useEV3Offer = (vehicleId: string) => {
  return useQuery({
    queryKey: ['ev3-offer', vehicleId],
    queryFn: async (): Promise<EV3Offer | null> => {
      console.log('useEV3Offer: Fetching offer for vehicle ID:', vehicleId);
      
      try {
        const { data, error } = await supabase
          .from('direct_kia_new_vehicles_offers')
          .select('*')
          .eq('vehicle_id', parseInt(vehicleId))
          .ilike('model', 'EV3')
          .single();

        if (error) {
          console.error('useEV3Offer: Database error:', error);
          throw error;
        }

        // Check if offer is expired by looking at finance offers validity
        if (data?.finance_offers && Array.isArray(data.finance_offers)) {
          const now = new Date();
          const hasValidOffer = data.finance_offers.some(offer => {
            // Check if offer is an object and has valid_until property
            if (typeof offer === 'object' && offer !== null && 'valid_until' in offer) {
              const validUntil = new Date(offer.valid_until as string);
              return validUntil >= now;
            }
            return true; // If no expiry date, consider it valid
          });
          
          if (!hasValidOffer) {
            console.log('useEV3Offer: All offers have expired');
            return null;
          }
        }

        console.log('useEV3Offer: Fetched offer:', data);
        return data;

      } catch (queryError) {
        console.error('useEV3Offer: Query execution failed:', queryError);
        throw queryError;
      }
    },
    staleTime: 5 * 60 * 1000,
    retry: 2,
    meta: {
      onError: (error) => {
        console.error('useEV3Offer: React Query error:', error);
      }
    }
  });
};
