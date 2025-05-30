
export interface Vehicle {
  id: number; // Changed from bigint to number to match database
  make: string;
  model: string;
  registration: string;
  stock_number: string;
  price: number;
  display_price?: number;
  offer_price?: number;
  offer_display?: boolean;
  mileage: number;
  registration_year: number;
  registration_date: string; // Changed from Date to string to match database return type
  fuel: string;
  transmission: string;
  body_style: string;
  doors?: number;
  seats?: number;
  engine_size?: number;
  emissions?: number;
  mpg?: number;
  colour_base?: string;
  colour_manufacturer?: string;
  image_url?: string;
  image_count?: number;
  images?: any;
  attention_grabber?: string;
  sales_pitch?: string;
  variant?: string;
  type: string;
  status: string;
  condition: string;
  websitedisplay: boolean;
  display_finance_monthly?: number;
  display_finance_deposit?: number;
  vin?: string; // Added missing vin property
  created_at: string;
  updated_at: string;
}

export interface VehicleFilters {
  make?: string;
  model?: string;
  minPrice?: number;
  maxPrice?: number;
  minMileage?: number;
  maxMileage?: number;
  minYear?: number;
  maxYear?: number;
  fuel?: string;
  colour?: string;
  transmission?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}
