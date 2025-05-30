
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PRDDatabaseSchema = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-kia-charcoal">🗄️ Complete Database Schema</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-800 mb-3">🔑 Critical Tables for SEO & Functionality</h3>
          
          <div className="space-y-6">
            
            {/* EV3 Offers Table */}
            <div>
              <h4 className="font-semibold text-red-700 mb-2">direct_kia_new_vehicles_offers</h4>
              <p className="text-sm text-red-600 mb-3">PRIMARY TABLE: EV3 offer pages - CRITICAL for dynamic SEO</p>
              <div className="bg-white rounded p-4">
                <code className="text-xs block whitespace-pre-wrap">
{`Key fields for SEO and functionality:
• vehicle_id (INTEGER) - Primary key for individual offers
• make (VARCHAR) - Vehicle manufacturer (e.g., "Kia")
• model (VARCHAR) - Vehicle model (e.g., "EV3") 
• variant (VARCHAR) - Specific variant (e.g., "GT-Line")
• trim_level (VARCHAR) - Trim specification
• list_price (NUMERIC) - Original price
• final_price (NUMERIC) - Offer price after discounts
• savings_amount (NUMERIC) - Total savings amount
• range_miles (INTEGER) - Electric range in miles
• battery_capacity (VARCHAR) - Battery size (e.g., "81.4kWh")
• engine_power (VARCHAR) - Power output (e.g., "150kW")
• zero_to_sixty (NUMERIC) - 0-60mph time
• top_speed (INTEGER) - Maximum speed
• seating_capacity (INTEGER) - Number of seats
• doors (INTEGER) - Number of doors
• boot_capacity (INTEGER) - Boot space in litres
• images (JSONB) - Vehicle images array
• summary_features (JSONB) - Key features list
• features (JSONB) - Full features breakdown
• finance_offers (JSONB) - Available finance options
• fuel_type (VARCHAR) - "Electric"
• transmission (VARCHAR) - "Automatic"
• delivery_type (VARCHAR) - "National Delivery"
• created_at, updated_at (TIMESTAMP)`}
                </code>
              </div>
            </div>

            {/* Used Vehicles Table */}
            <div>
              <h4 className="font-semibold text-red-700 mb-2">direct_kia_active_used_vehicles</h4>
              <p className="text-sm text-red-600 mb-3">Used car listings - Critical for used car pages SEO</p>
              <div className="bg-white rounded p-4">
                <code className="text-xs block whitespace-pre-wrap">
{`Key fields:
• id (BIGINT) - Primary key
• stock_number (VARCHAR) - Unique stock identifier
• make, model, variant (VARCHAR) - Vehicle identification
• registration (VARCHAR) - Registration number
• registration_date (DATE) - First registration
• mileage (INTEGER) - Current mileage
• price (NUMERIC) - Selling price
• display_price (NUMERIC) - Display price
• fuel (VARCHAR) - Fuel type
• transmission (VARCHAR) - Gearbox type
• body_style (VARCHAR) - Body type
• doors, seats (INTEGER) - Physical attributes
• engine_size (INTEGER) - Engine displacement
• condition (VARCHAR) - Vehicle condition
• images (JSONB) - Photo gallery
• dealership (JSONB) - Dealer information
• websitedisplay (BOOLEAN) - Show on website
• created_at, updated_at (TIMESTAMP)`}
                </code>
              </div>
            </div>

            {/* Customer Enquiries Table */}
            <div>
              <h4 className="font-semibold text-red-700 mb-2">direct_kia_customer_enquiries</h4>
              <p className="text-sm text-red-600 mb-3">Customer enquiry system - Required for contact forms</p>
              <div className="bg-white rounded p-4">
                <code className="text-xs block whitespace-pre-wrap">
{`Key fields:
• id (UUID) - Primary key
• name (TEXT) - Customer name
• email (TEXT) - Customer email
• phone (TEXT) - Customer phone (optional)
• message (TEXT) - Enquiry message
• vehicle_type (TEXT) - "new_ev3_offer" | "used_vehicle"
• vehicle_id (INTEGER) - Reference to vehicle
• vehicle_details (JSONB) - Cached vehicle data
• source_page (TEXT) - Page where enquiry originated
• status (TEXT) - "new" | "contacted" | "closed"
• ip_address (TEXT) - Customer IP
• user_agent (TEXT) - Browser information
• created_at, updated_at (TIMESTAMP)`}
                </code>
              </div>
            </div>

            {/* SEO Table */}
            <div>
              <h4 className="font-semibold text-red-700 mb-2">page_seo</h4>
              <p className="text-sm text-red-600 mb-3">Static page SEO data - Required for all static pages</p>
              <div className="bg-white rounded p-4">
                <code className="text-xs block whitespace-pre-wrap">
{`Key fields:
• page_slug (TEXT) - URL slug (e.g., "home", "new-cars")
• page_title (TEXT) - HTML title tag
• meta_description (TEXT) - Meta description
• h1_title (TEXT) - Main page heading
• og_title (TEXT) - Open Graph title
• og_description (TEXT) - Open Graph description
• canonical_url (TEXT) - Canonical URL
• meta_keywords (TEXT) - SEO keywords
• meta_robots (TEXT) - Robot instructions
• is_active (BOOLEAN) - Active status
• created_at, updated_at (TIMESTAMP)`}
                </code>
              </div>
            </div>

            {/* Additional Supporting Tables */}
            <div>
              <h4 className="font-semibold text-red-700 mb-2">Additional Supporting Tables</h4>
              <div className="bg-white rounded p-4">
                <code className="text-xs block whitespace-pre-wrap">
{`customers - Customer database
• customer_id (INTEGER) - Primary key
• name, email, phone (VARCHAR) - Contact details
• address (TEXT) - Customer address
• marketing_opt_in, email_opt_in (BOOLEAN) - Preferences

dealerships - Dealer information  
• dealership_id (INTEGER) - Primary key
• name (VARCHAR) - Dealership name
• address (TEXT) - Physical address
• phone, email (VARCHAR) - Contact details

combined_vehicles_with_history - Vehicle history tracking
• All vehicle data with price history
• Historical pricing information
• Audit trail for changes`}
                </code>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-800 mb-3">Database Connection Details</h3>
          <div className="bg-white rounded p-4">
            <code className="text-sm block">
{`Environment Configuration:
SUPABASE_URL=https://himiywrlajmgruscisks.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Next.js Environment Variables:
NEXT_PUBLIC_SUPABASE_URL=https://himiywrlajmgruscisks.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`}
            </code>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-bold text-green-800 mb-3">Critical Database Functions</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-green-700">get_page_seo(slug)</h4>
              <p className="text-sm text-green-600">Retrieves SEO data for static pages</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700">update_updated_at_column()</h4>
              <p className="text-sm text-green-600">Trigger function for timestamp updates</p>
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default PRDDatabaseSchema;
