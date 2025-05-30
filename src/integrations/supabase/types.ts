export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      approved_domains: {
        Row: {
          created_at: string | null
          created_by: string | null
          domain_id: number
          domain_name: string
          is_active: boolean | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          domain_id?: number
          domain_name: string
          is_active?: boolean | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          domain_id?: number
          domain_name?: string
          is_active?: boolean | null
        }
        Relationships: []
      }
      customer_vehicles: {
        Row: {
          condition: string | null
          created_at: string | null
          customer_id: number | null
          identifier: string | null
          make: string | null
          mileage: number | null
          mileage_unit: string | null
          model: string | null
          registration: string | null
          updated_at: string | null
          vehicle_id: number
          year: number | null
        }
        Insert: {
          condition?: string | null
          created_at?: string | null
          customer_id?: number | null
          identifier?: string | null
          make?: string | null
          mileage?: number | null
          mileage_unit?: string | null
          model?: string | null
          registration?: string | null
          updated_at?: string | null
          vehicle_id?: number
          year?: number | null
        }
        Update: {
          condition?: string | null
          created_at?: string | null
          customer_id?: number | null
          identifier?: string | null
          make?: string | null
          mileage?: number | null
          mileage_unit?: string | null
          model?: string | null
          registration?: string | null
          updated_at?: string | null
          vehicle_id?: number
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_vehicles_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
        ]
      }
      customers: {
        Row: {
          address: string | null
          created_at: string | null
          customer_id: number
          direct_mail_opt_in: boolean | null
          email: string | null
          email_opt_in: boolean | null
          email2: string | null
          marketing_opt_in: boolean | null
          name: string
          phone: string | null
          phone_opt_in: boolean | null
          preferred_language: string | null
          sms_opt_in: boolean | null
          source: string | null
          status_id: number | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          customer_id?: number
          direct_mail_opt_in?: boolean | null
          email?: string | null
          email_opt_in?: boolean | null
          email2?: string | null
          marketing_opt_in?: boolean | null
          name: string
          phone?: string | null
          phone_opt_in?: boolean | null
          preferred_language?: string | null
          sms_opt_in?: boolean | null
          source?: string | null
          status_id?: number | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          customer_id?: number
          direct_mail_opt_in?: boolean | null
          email?: string | null
          email_opt_in?: boolean | null
          email2?: string | null
          marketing_opt_in?: boolean | null
          name?: string
          phone?: string | null
          phone_opt_in?: boolean | null
          preferred_language?: string | null
          sms_opt_in?: boolean | null
          source?: string | null
          status_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_status_id_fkey"
            columns: ["status_id"]
            isOneToOne: false
            referencedRelation: "lead_statuses"
            referencedColumns: ["status_id"]
          },
        ]
      }
      deal_book_data: {
        Row: {
          administration_fee_costs: number | null
          administration_fee_profit: number | null
          administration_fee_sales: number | null
          cosmetic_repair_insurance_costs: number | null
          cosmetic_repair_insurance_profit: number | null
          cosmetic_repair_insurance_sales: number | null
          costs_adjustments: number | null
          costs_basic_options: number | null
          costs_delivery: number | null
          costs_vat: number | null
          costs_ved: number | null
          created_at: string
          creditor_balance: number | null
          customer: string | null
          customer_savings_bonus: number | null
          dealer_fitted_accessories_costs: number | null
          dealer_fitted_accessories_profit: number | null
          dealer_fitted_accessories_sales: number | null
          debtor_balance: number | null
          diamond_brite_full_ceramic_costs: number | null
          diamond_brite_full_ceramic_profit: number | null
          diamond_brite_full_ceramic_sales: number | null
          diamond_brite_nanoceramic_costs: number | null
          diamond_brite_nanoceramic_profit: number | null
          diamond_brite_nanoceramic_sales: number | null
          dis: string | null
          discount: number | null
          do_not_use_costs: number | null
          do_not_use_profit: number | null
          do_not_use_sales: number | null
          fda_costs: number | null
          fda_profit: number | null
          fda_sales: number | null
          file_id: number
          finance_due: number | null
          fuel_costs: number | null
          fuel_profit: number | null
          fuel_sales: number | null
          gap_15_25k_costs: number | null
          gap_15_25k_profit: number | null
          gap_15_25k_sales: number | null
          gap_26k_plus_costs: number | null
          gap_26k_plus_profit: number | null
          gap_26k_plus_sales: number | null
          gross_sale: number | null
          group_days_in_stock: number | null
          hm_government_plugin_grant_costs: number | null
          hm_government_plugin_grant_profit: number | null
          hm_government_plugin_grant_sales: number | null
          id: string
          invoice_date: string | null
          invoice_number: string | null
          invoice_period: string | null
          invoice_to: string | null
          order_date: string | null
          original_group_costs: number | null
          overallowance: number | null
          part_exchange_count: number | null
          preparation_costs: number | null
          preparation_profit: number | null
          preparation_sales: number | null
          profit: number | null
          purchase_invoice_date: string | null
          registration: string | null
          registration_date: string | null
          sales_adjustments: number | null
          sales_basic_options: number | null
          sales_delivery: number | null
          sales_location: string | null
          sales_person: string | null
          sales_vat: number | null
          sales_ved: number | null
          special_scheme_vat: number | null
          stock_number: string | null
          supplier_name: string | null
          supplier_order_number: string | null
          tos: string | null
          tosg: string | null
          total_deposit_received: number | null
          tyre_and_alloy_costs: number | null
          tyre_and_alloy_profit: number | null
          tyre_and_alloy_sales: number | null
          updated_at: string | null
          vat_qualifying: boolean | null
          vehicle: string | null
          vehicle_code: string | null
          vin: string | null
          warranty_costs: number | null
          warranty_profit: number | null
          warranty_sales: number | null
          write_back: number | null
        }
        Insert: {
          administration_fee_costs?: number | null
          administration_fee_profit?: number | null
          administration_fee_sales?: number | null
          cosmetic_repair_insurance_costs?: number | null
          cosmetic_repair_insurance_profit?: number | null
          cosmetic_repair_insurance_sales?: number | null
          costs_adjustments?: number | null
          costs_basic_options?: number | null
          costs_delivery?: number | null
          costs_vat?: number | null
          costs_ved?: number | null
          created_at?: string
          creditor_balance?: number | null
          customer?: string | null
          customer_savings_bonus?: number | null
          dealer_fitted_accessories_costs?: number | null
          dealer_fitted_accessories_profit?: number | null
          dealer_fitted_accessories_sales?: number | null
          debtor_balance?: number | null
          diamond_brite_full_ceramic_costs?: number | null
          diamond_brite_full_ceramic_profit?: number | null
          diamond_brite_full_ceramic_sales?: number | null
          diamond_brite_nanoceramic_costs?: number | null
          diamond_brite_nanoceramic_profit?: number | null
          diamond_brite_nanoceramic_sales?: number | null
          dis?: string | null
          discount?: number | null
          do_not_use_costs?: number | null
          do_not_use_profit?: number | null
          do_not_use_sales?: number | null
          fda_costs?: number | null
          fda_profit?: number | null
          fda_sales?: number | null
          file_id: number
          finance_due?: number | null
          fuel_costs?: number | null
          fuel_profit?: number | null
          fuel_sales?: number | null
          gap_15_25k_costs?: number | null
          gap_15_25k_profit?: number | null
          gap_15_25k_sales?: number | null
          gap_26k_plus_costs?: number | null
          gap_26k_plus_profit?: number | null
          gap_26k_plus_sales?: number | null
          gross_sale?: number | null
          group_days_in_stock?: number | null
          hm_government_plugin_grant_costs?: number | null
          hm_government_plugin_grant_profit?: number | null
          hm_government_plugin_grant_sales?: number | null
          id?: string
          invoice_date?: string | null
          invoice_number?: string | null
          invoice_period?: string | null
          invoice_to?: string | null
          order_date?: string | null
          original_group_costs?: number | null
          overallowance?: number | null
          part_exchange_count?: number | null
          preparation_costs?: number | null
          preparation_profit?: number | null
          preparation_sales?: number | null
          profit?: number | null
          purchase_invoice_date?: string | null
          registration?: string | null
          registration_date?: string | null
          sales_adjustments?: number | null
          sales_basic_options?: number | null
          sales_delivery?: number | null
          sales_location?: string | null
          sales_person?: string | null
          sales_vat?: number | null
          sales_ved?: number | null
          special_scheme_vat?: number | null
          stock_number?: string | null
          supplier_name?: string | null
          supplier_order_number?: string | null
          tos?: string | null
          tosg?: string | null
          total_deposit_received?: number | null
          tyre_and_alloy_costs?: number | null
          tyre_and_alloy_profit?: number | null
          tyre_and_alloy_sales?: number | null
          updated_at?: string | null
          vat_qualifying?: boolean | null
          vehicle?: string | null
          vehicle_code?: string | null
          vin?: string | null
          warranty_costs?: number | null
          warranty_profit?: number | null
          warranty_sales?: number | null
          write_back?: number | null
        }
        Update: {
          administration_fee_costs?: number | null
          administration_fee_profit?: number | null
          administration_fee_sales?: number | null
          cosmetic_repair_insurance_costs?: number | null
          cosmetic_repair_insurance_profit?: number | null
          cosmetic_repair_insurance_sales?: number | null
          costs_adjustments?: number | null
          costs_basic_options?: number | null
          costs_delivery?: number | null
          costs_vat?: number | null
          costs_ved?: number | null
          created_at?: string
          creditor_balance?: number | null
          customer?: string | null
          customer_savings_bonus?: number | null
          dealer_fitted_accessories_costs?: number | null
          dealer_fitted_accessories_profit?: number | null
          dealer_fitted_accessories_sales?: number | null
          debtor_balance?: number | null
          diamond_brite_full_ceramic_costs?: number | null
          diamond_brite_full_ceramic_profit?: number | null
          diamond_brite_full_ceramic_sales?: number | null
          diamond_brite_nanoceramic_costs?: number | null
          diamond_brite_nanoceramic_profit?: number | null
          diamond_brite_nanoceramic_sales?: number | null
          dis?: string | null
          discount?: number | null
          do_not_use_costs?: number | null
          do_not_use_profit?: number | null
          do_not_use_sales?: number | null
          fda_costs?: number | null
          fda_profit?: number | null
          fda_sales?: number | null
          file_id?: number
          finance_due?: number | null
          fuel_costs?: number | null
          fuel_profit?: number | null
          fuel_sales?: number | null
          gap_15_25k_costs?: number | null
          gap_15_25k_profit?: number | null
          gap_15_25k_sales?: number | null
          gap_26k_plus_costs?: number | null
          gap_26k_plus_profit?: number | null
          gap_26k_plus_sales?: number | null
          gross_sale?: number | null
          group_days_in_stock?: number | null
          hm_government_plugin_grant_costs?: number | null
          hm_government_plugin_grant_profit?: number | null
          hm_government_plugin_grant_sales?: number | null
          id?: string
          invoice_date?: string | null
          invoice_number?: string | null
          invoice_period?: string | null
          invoice_to?: string | null
          order_date?: string | null
          original_group_costs?: number | null
          overallowance?: number | null
          part_exchange_count?: number | null
          preparation_costs?: number | null
          preparation_profit?: number | null
          preparation_sales?: number | null
          profit?: number | null
          purchase_invoice_date?: string | null
          registration?: string | null
          registration_date?: string | null
          sales_adjustments?: number | null
          sales_basic_options?: number | null
          sales_delivery?: number | null
          sales_location?: string | null
          sales_person?: string | null
          sales_vat?: number | null
          sales_ved?: number | null
          special_scheme_vat?: number | null
          stock_number?: string | null
          supplier_name?: string | null
          supplier_order_number?: string | null
          tos?: string | null
          tosg?: string | null
          total_deposit_received?: number | null
          tyre_and_alloy_costs?: number | null
          tyre_and_alloy_profit?: number | null
          tyre_and_alloy_sales?: number | null
          updated_at?: string | null
          vat_qualifying?: boolean | null
          vehicle?: string | null
          vehicle_code?: string | null
          vin?: string | null
          warranty_costs?: number | null
          warranty_profit?: number | null
          warranty_sales?: number | null
          write_back?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "deal_book_data_file_id_fkey"
            columns: ["file_id"]
            isOneToOne: false
            referencedRelation: "deal_book_files"
            referencedColumns: ["id"]
          },
        ]
      }
      deal_book_files: {
        Row: {
          created_at: string
          file_name: string
          id: number
          month: string
          month_number: number
          organization_id: string | null
          original_name: string
          row_count: number | null
          security_enabled: boolean | null
          status: string | null
          updated_at: string
          user_id: string
          year: number
        }
        Insert: {
          created_at?: string
          file_name: string
          id?: number
          month: string
          month_number: number
          organization_id?: string | null
          original_name: string
          row_count?: number | null
          security_enabled?: boolean | null
          status?: string | null
          updated_at?: string
          user_id: string
          year: number
        }
        Update: {
          created_at?: string
          file_name?: string
          id?: number
          month?: string
          month_number?: number
          organization_id?: string | null
          original_name?: string
          row_count?: number | null
          security_enabled?: boolean | null
          status?: string | null
          updated_at?: string
          user_id?: string
          year?: number
        }
        Relationships: []
      }
      dealer_groups: {
        Row: {
          created_at: string | null
          dealer_group_id: number
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          dealer_group_id?: number
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          dealer_group_id?: number
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      dealerships: {
        Row: {
          address: string | null
          created_at: string | null
          dealer_group_id: number | null
          dealership_id: number
          email: string | null
          name: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          dealer_group_id?: number | null
          dealership_id?: number
          email?: string | null
          name: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          dealer_group_id?: number | null
          dealership_id?: number
          email?: string | null
          name?: string
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dealerships_dealer_group_id_fkey"
            columns: ["dealer_group_id"]
            isOneToOne: false
            referencedRelation: "dealer_groups"
            referencedColumns: ["dealer_group_id"]
          },
        ]
      }
      direct_kia_customer_enquiries: {
        Row: {
          created_at: string
          email: string
          id: string
          ip_address: string | null
          message: string
          name: string
          phone: string | null
          source_page: string | null
          status: string
          updated_at: string
          user_agent: string | null
          vehicle_details: Json | null
          vehicle_id: number
          vehicle_type: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          ip_address?: string | null
          message: string
          name: string
          phone?: string | null
          source_page?: string | null
          status?: string
          updated_at?: string
          user_agent?: string | null
          vehicle_details?: Json | null
          vehicle_id: number
          vehicle_type: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          ip_address?: string | null
          message?: string
          name?: string
          phone?: string | null
          source_page?: string | null
          status?: string
          updated_at?: string
          user_agent?: string | null
          vehicle_details?: Json | null
          vehicle_id?: number
          vehicle_type?: string
        }
        Relationships: []
      }
      direct_kia_new_vehicles_offers: {
        Row: {
          battery_capacity: string | null
          body_type: string | null
          boot_capacity: number | null
          created_at: string | null
          delivery_type: string | null
          doors: number | null
          engine_power: string | null
          features: Json | null
          final_price: number | null
          finance_offers: Json | null
          fuel_type: string | null
          images: Json | null
          list_price: number | null
          make: string
          model: string
          range_miles: number | null
          savings_amount: number | null
          seating_capacity: number | null
          summary_features: Json | null
          top_speed: number | null
          transmission: string | null
          trim_level: string | null
          updated_at: string | null
          variant: string
          vehicle_id: number
          zero_to_sixty: number | null
        }
        Insert: {
          battery_capacity?: string | null
          body_type?: string | null
          boot_capacity?: number | null
          created_at?: string | null
          delivery_type?: string | null
          doors?: number | null
          engine_power?: string | null
          features?: Json | null
          final_price?: number | null
          finance_offers?: Json | null
          fuel_type?: string | null
          images?: Json | null
          list_price?: number | null
          make: string
          model: string
          range_miles?: number | null
          savings_amount?: number | null
          seating_capacity?: number | null
          summary_features?: Json | null
          top_speed?: number | null
          transmission?: string | null
          trim_level?: string | null
          updated_at?: string | null
          variant: string
          vehicle_id?: number
          zero_to_sixty?: number | null
        }
        Update: {
          battery_capacity?: string | null
          body_type?: string | null
          boot_capacity?: number | null
          created_at?: string | null
          delivery_type?: string | null
          doors?: number | null
          engine_power?: string | null
          features?: Json | null
          final_price?: number | null
          finance_offers?: Json | null
          fuel_type?: string | null
          images?: Json | null
          list_price?: number | null
          make?: string
          model?: string
          range_miles?: number | null
          savings_amount?: number | null
          seating_capacity?: number | null
          summary_features?: Json | null
          top_speed?: number | null
          transmission?: string | null
          trim_level?: string | null
          updated_at?: string | null
          variant?: string
          vehicle_id?: number
          zero_to_sixty?: number | null
        }
        Relationships: []
      }
      email_mapping_patterns: {
        Row: {
          created_at: string | null
          field_name: string
          mapping_id: number | null
          pattern_id: number
          pattern_type: string | null
          pattern_value: string
          sample_match: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          field_name: string
          mapping_id?: number | null
          pattern_id?: number
          pattern_type?: string | null
          pattern_value: string
          sample_match?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          field_name?: string
          mapping_id?: number | null
          pattern_id?: number
          pattern_type?: string | null
          pattern_value?: string
          sample_match?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_mapping_patterns_mapping_id_fkey"
            columns: ["mapping_id"]
            isOneToOne: false
            referencedRelation: "email_mappings"
            referencedColumns: ["mapping_id"]
          },
        ]
      }
      email_mappings: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          is_active: boolean | null
          mapping_id: number
          name: string
          source_domain: string | null
          subject_exclude_pattern: string | null
          subject_pattern: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          is_active?: boolean | null
          mapping_id?: number
          name: string
          source_domain?: string | null
          subject_exclude_pattern?: string | null
          subject_pattern?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          is_active?: boolean | null
          mapping_id?: number
          name?: string
          source_domain?: string | null
          subject_exclude_pattern?: string | null
          subject_pattern?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      excluded_customers: {
        Row: {
          created_at: string | null
          id: string
          name: string
          reason: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          reason?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          reason?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      excluded_sales_executives: {
        Row: {
          created_at: string | null
          id: string
          name: string
          reason: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          reason?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          reason?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      fi_manager_targets: {
        Row: {
          add_on_bonus_new: string | null
          add_on_bonus_used: string | null
          created_at: string
          id: string
          last_applied: string | null
          pen_bonus_new: string | null
          pen_bonus_used: string | null
          updated_at: string
        }
        Insert: {
          add_on_bonus_new?: string | null
          add_on_bonus_used?: string | null
          created_at?: string
          id?: string
          last_applied?: string | null
          pen_bonus_new?: string | null
          pen_bonus_used?: string | null
          updated_at?: string
        }
        Update: {
          add_on_bonus_new?: string | null
          add_on_bonus_used?: string | null
          created_at?: string
          id?: string
          last_applied?: string | null
          pen_bonus_new?: string | null
          pen_bonus_used?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      haswent_api_credentials: {
        Row: {
          access_token: string | null
          created_at: string
          id: string
          password: string
          refresh_token: string | null
          token_expires_at: string | null
          updated_at: string
          username: string
        }
        Insert: {
          access_token?: string | null
          created_at?: string
          id?: string
          password: string
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string
          username: string
        }
        Update: {
          access_token?: string | null
          created_at?: string
          id?: string
          password?: string
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
      haswent_cred_v2: {
        Row: {
          access_token: string | null
          created_at: string
          id: string
          password: string
          refresh_token: string | null
          token_expires_at: string | null
          updated_at: string
          username: string
        }
        Insert: {
          access_token?: string | null
          created_at?: string
          id?: string
          password: string
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string
          username: string
        }
        Update: {
          access_token?: string | null
          created_at?: string
          id?: string
          password?: string
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
      haswent_token_refresh_log: {
        Row: {
          credential_id: string | null
          execution_time: string
          id: string
          message: string | null
          status: string
        }
        Insert: {
          credential_id?: string | null
          execution_time?: string
          id?: string
          message?: string | null
          status: string
        }
        Update: {
          credential_id?: string | null
          execution_time?: string
          id?: string
          message?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "haswent_token_refresh_log_credential_id_fkey"
            columns: ["credential_id"]
            isOneToOne: false
            referencedRelation: "haswent_api_credentials"
            referencedColumns: ["id"]
          },
        ]
      }
      haswent_vehicles: {
        Row: {
          attention_grabber: string | null
          body_style: string | null
          colour_base: string | null
          colour_manufacturer: string | null
          condition: string | null
          created_at: string | null
          dealership: Json | null
          display_finance_deposit: number | null
          display_finance_monthly: number | null
          display_price: number | null
          doors: number | null
          emissions: number | null
          engine_size: number | null
          finances: Json | null
          fuel: string | null
          gears: number | null
          id: number
          image_count: number | null
          image_url: string | null
          images: Json | null
          last_sync_at: string | null
          lists: Json | null
          make: string | null
          mileage: number | null
          model: string | null
          mpg: number | null
          offer_display: boolean | null
          offer_price: number | null
          owners: number | null
          price: number | null
          price_updated_at: string | null
          registration: string | null
          registration_date: string | null
          registration_year: number | null
          sales_pitch: string | null
          seats: number | null
          status: string | null
          stock_number: string | null
          trade_price: number | null
          transmission: string | null
          type: string | null
          uk: Json | null
          updated_at: string | null
          variant: string | null
          vin: string | null
          websitedisplay: boolean | null
        }
        Insert: {
          attention_grabber?: string | null
          body_style?: string | null
          colour_base?: string | null
          colour_manufacturer?: string | null
          condition?: string | null
          created_at?: string | null
          dealership?: Json | null
          display_finance_deposit?: number | null
          display_finance_monthly?: number | null
          display_price?: number | null
          doors?: number | null
          emissions?: number | null
          engine_size?: number | null
          finances?: Json | null
          fuel?: string | null
          gears?: number | null
          id: number
          image_count?: number | null
          image_url?: string | null
          images?: Json | null
          last_sync_at?: string | null
          lists?: Json | null
          make?: string | null
          mileage?: number | null
          model?: string | null
          mpg?: number | null
          offer_display?: boolean | null
          offer_price?: number | null
          owners?: number | null
          price?: number | null
          price_updated_at?: string | null
          registration?: string | null
          registration_date?: string | null
          registration_year?: number | null
          sales_pitch?: string | null
          seats?: number | null
          status?: string | null
          stock_number?: string | null
          trade_price?: number | null
          transmission?: string | null
          type?: string | null
          uk?: Json | null
          updated_at?: string | null
          variant?: string | null
          vin?: string | null
          websitedisplay?: boolean | null
        }
        Update: {
          attention_grabber?: string | null
          body_style?: string | null
          colour_base?: string | null
          colour_manufacturer?: string | null
          condition?: string | null
          created_at?: string | null
          dealership?: Json | null
          display_finance_deposit?: number | null
          display_finance_monthly?: number | null
          display_price?: number | null
          doors?: number | null
          emissions?: number | null
          engine_size?: number | null
          finances?: Json | null
          fuel?: string | null
          gears?: number | null
          id?: number
          image_count?: number | null
          image_url?: string | null
          images?: Json | null
          last_sync_at?: string | null
          lists?: Json | null
          make?: string | null
          mileage?: number | null
          model?: string | null
          mpg?: number | null
          offer_display?: boolean | null
          offer_price?: number | null
          owners?: number | null
          price?: number | null
          price_updated_at?: string | null
          registration?: string | null
          registration_date?: string | null
          registration_year?: number | null
          sales_pitch?: string | null
          seats?: number | null
          status?: string | null
          stock_number?: string | null
          trade_price?: number | null
          transmission?: string | null
          type?: string | null
          uk?: Json | null
          updated_at?: string | null
          variant?: string | null
          vin?: string | null
          websitedisplay?: boolean | null
        }
        Relationships: []
      }
      haswent_webhook_events: {
        Row: {
          created_at: string | null
          event_id: string | null
          event_type: string
          id: number
          processed: boolean | null
          raw_data: Json | null
          vehicle_id: number | null
        }
        Insert: {
          created_at?: string | null
          event_id?: string | null
          event_type: string
          id?: number
          processed?: boolean | null
          raw_data?: Json | null
          vehicle_id?: number | null
        }
        Update: {
          created_at?: string | null
          event_id?: string | null
          event_type?: string
          id?: number
          processed?: boolean | null
          raw_data?: Json | null
          vehicle_id?: number | null
        }
        Relationships: []
      }
      haswent_webhook_settings: {
        Row: {
          created_at: string
          id: string
          signature: string
          status: string | null
          updated_at: string
          url: string | null
          webhook_id: string | null
        }
        Insert: {
          created_at: string
          id?: string
          signature: string
          status?: string | null
          updated_at: string
          url?: string | null
          webhook_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          signature?: string
          status?: string | null
          updated_at?: string
          url?: string | null
          webhook_id?: string | null
        }
        Relationships: []
      }
      interactions: {
        Row: {
          content: string | null
          created_at: string | null
          direction: string | null
          interaction_id: number
          interaction_type: string | null
          lead_id: number | null
          original_email_id: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          direction?: string | null
          interaction_id?: number
          interaction_type?: string | null
          lead_id?: number | null
          original_email_id?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          direction?: string | null
          interaction_id?: number
          interaction_type?: string | null
          lead_id?: number | null
          original_email_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interactions_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["lead_id"]
          },
        ]
      }
      lead_statuses: {
        Row: {
          created_at: string | null
          description: string | null
          name: string
          status_id: number
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          name: string
          status_id?: number
        }
        Update: {
          created_at?: string | null
          description?: string | null
          name?: string
          status_id?: number
        }
        Relationships: []
      }
      leads: {
        Row: {
          assigned_user_id: string | null
          comments: string | null
          created_at: string | null
          customer_id: number | null
          lead_id: number
          lead_type: string | null
          source: string | null
          source_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          assigned_user_id?: string | null
          comments?: string | null
          created_at?: string | null
          customer_id?: number | null
          lead_id?: number
          lead_type?: string | null
          source?: string | null
          source_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          assigned_user_id?: string | null
          comments?: string | null
          created_at?: string | null
          customer_id?: number | null
          lead_id?: number
          lead_type?: string | null
          source?: string | null
          source_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
        ]
      }
      page_seo: {
        Row: {
          canonical_url: string | null
          created_at: string | null
          created_by: string | null
          focus_keyword: string | null
          h1_title: string | null
          id: string
          is_active: boolean | null
          meta_description: string | null
          meta_keywords: string | null
          meta_robots: Database["public"]["Enums"]["meta_robots_type"] | null
          og_description: string | null
          og_title: string | null
          page_slug: string
          page_title: string
          schema_markup: Json | null
          updated_at: string | null
        }
        Insert: {
          canonical_url?: string | null
          created_at?: string | null
          created_by?: string | null
          focus_keyword?: string | null
          h1_title?: string | null
          id?: string
          is_active?: boolean | null
          meta_description?: string | null
          meta_keywords?: string | null
          meta_robots?: Database["public"]["Enums"]["meta_robots_type"] | null
          og_description?: string | null
          og_title?: string | null
          page_slug: string
          page_title: string
          schema_markup?: Json | null
          updated_at?: string | null
        }
        Update: {
          canonical_url?: string | null
          created_at?: string | null
          created_by?: string | null
          focus_keyword?: string | null
          h1_title?: string | null
          id?: string
          is_active?: boolean | null
          meta_description?: string | null
          meta_keywords?: string | null
          meta_robots?: Database["public"]["Enums"]["meta_robots_type"] | null
          og_description?: string | null
          og_title?: string | null
          page_slug?: string
          page_title?: string
          schema_markup?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      pinnacle_upload_history: {
        Row: {
          created_at: string
          file_name: string
          id: string
          original_name: string
          row_count: number | null
          status: string | null
          updated_at: string
          upload_date: string
          user_id: string
        }
        Insert: {
          created_at?: string
          file_name: string
          id?: string
          original_name: string
          row_count?: number | null
          status?: string | null
          updated_at?: string
          upload_date?: string
          user_id: string
        }
        Update: {
          created_at?: string
          file_name?: string
          id?: string
          original_name?: string
          row_count?: number | null
          status?: string | null
          updated_at?: string
          upload_date?: string
          user_id?: string
        }
        Relationships: []
      }
      pinnacle_upload_vehicles: {
        Row: {
          basic_incl_options: number | null
          body_style: string | null
          bonus: number | null
          branch: string | null
          co2_emission: string | null
          colour: string | null
          creditors: number | null
          customer: string | null
          customer_order: boolean | null
          date_funded: string | null
          date_in_stock: string | null
          depreciation: number | null
          division: string | null
          drive: string | null
          engine_code: string | null
          engine_size: string | null
          estimated_delivery_date: string | null
          fuel_type: string | null
          funder: string | null
          group_stock_days: number | null
          id: number
          interior: string | null
          internet_price: number | null
          invoice_date: string | null
          invoice_number: string | null
          key_code_1: string | null
          location: string | null
          make: string | null
          mid: string | null
          mileage: number | null
          misc_costs: number | null
          model: string | null
          mot_expiry_date: string | null
          option_groups: string | null
          order_number: string | null
          original_group_date_in_stock: string | null
          part_exchanges: string | null
          photo_count: number | null
          previous_owners: string | null
          profiles: string | null
          purchased_by: string | null
          qualifying: boolean | null
          radio_code: string | null
          registration_date: string | null
          registration_number: string | null
          reserved: boolean | null
          selling_price: number | null
          specification: string | null
          stand_in_value: number | null
          stock_days: number | null
          stock_number: string
          stocktake_date: string | null
          stocktake_user: string | null
          supplier_name: string | null
          transmission: string | null
          transmission_code: string | null
          v55_description: string | null
          ved_expiry: string | null
          vehicle_code: string | null
          video: boolean | null
          vin: string | null
        }
        Insert: {
          basic_incl_options?: number | null
          body_style?: string | null
          bonus?: number | null
          branch?: string | null
          co2_emission?: string | null
          colour?: string | null
          creditors?: number | null
          customer?: string | null
          customer_order?: boolean | null
          date_funded?: string | null
          date_in_stock?: string | null
          depreciation?: number | null
          division?: string | null
          drive?: string | null
          engine_code?: string | null
          engine_size?: string | null
          estimated_delivery_date?: string | null
          fuel_type?: string | null
          funder?: string | null
          group_stock_days?: number | null
          id?: number
          interior?: string | null
          internet_price?: number | null
          invoice_date?: string | null
          invoice_number?: string | null
          key_code_1?: string | null
          location?: string | null
          make?: string | null
          mid?: string | null
          mileage?: number | null
          misc_costs?: number | null
          model?: string | null
          mot_expiry_date?: string | null
          option_groups?: string | null
          order_number?: string | null
          original_group_date_in_stock?: string | null
          part_exchanges?: string | null
          photo_count?: number | null
          previous_owners?: string | null
          profiles?: string | null
          purchased_by?: string | null
          qualifying?: boolean | null
          radio_code?: string | null
          registration_date?: string | null
          registration_number?: string | null
          reserved?: boolean | null
          selling_price?: number | null
          specification?: string | null
          stand_in_value?: number | null
          stock_days?: number | null
          stock_number: string
          stocktake_date?: string | null
          stocktake_user?: string | null
          supplier_name?: string | null
          transmission?: string | null
          transmission_code?: string | null
          v55_description?: string | null
          ved_expiry?: string | null
          vehicle_code?: string | null
          video?: boolean | null
          vin?: string | null
        }
        Update: {
          basic_incl_options?: number | null
          body_style?: string | null
          bonus?: number | null
          branch?: string | null
          co2_emission?: string | null
          colour?: string | null
          creditors?: number | null
          customer?: string | null
          customer_order?: boolean | null
          date_funded?: string | null
          date_in_stock?: string | null
          depreciation?: number | null
          division?: string | null
          drive?: string | null
          engine_code?: string | null
          engine_size?: string | null
          estimated_delivery_date?: string | null
          fuel_type?: string | null
          funder?: string | null
          group_stock_days?: number | null
          id?: number
          interior?: string | null
          internet_price?: number | null
          invoice_date?: string | null
          invoice_number?: string | null
          key_code_1?: string | null
          location?: string | null
          make?: string | null
          mid?: string | null
          mileage?: number | null
          misc_costs?: number | null
          model?: string | null
          mot_expiry_date?: string | null
          option_groups?: string | null
          order_number?: string | null
          original_group_date_in_stock?: string | null
          part_exchanges?: string | null
          photo_count?: number | null
          previous_owners?: string | null
          profiles?: string | null
          purchased_by?: string | null
          qualifying?: boolean | null
          radio_code?: string | null
          registration_date?: string | null
          registration_number?: string | null
          reserved?: boolean | null
          selling_price?: number | null
          specification?: string | null
          stand_in_value?: number | null
          stock_days?: number | null
          stock_number?: string
          stocktake_date?: string | null
          stocktake_user?: string | null
          supplier_name?: string | null
          transmission?: string | null
          transmission_code?: string | null
          v55_description?: string | null
          ved_expiry?: string | null
          vehicle_code?: string | null
          video?: boolean | null
          vin?: string | null
        }
        Relationships: []
      }
      product_costs: {
        Row: {
          cosmetic_repair_insurance: string | null
          created_at: string | null
          diamond_brite_full_ceramic: string | null
          diamond_brite_nanoceramic: string | null
          excluded_customers_last_applied: string | null
          excluded_sales_executives_last_applied: string | null
          fuel: string | null
          gap_15_25k: string | null
          gap_26k_plus: string | null
          id: string
          last_applied: string | null
          tyre_and_alloy: string | null
          updated_at: string | null
          warranty: string | null
        }
        Insert: {
          cosmetic_repair_insurance?: string | null
          created_at?: string | null
          diamond_brite_full_ceramic?: string | null
          diamond_brite_nanoceramic?: string | null
          excluded_customers_last_applied?: string | null
          excluded_sales_executives_last_applied?: string | null
          fuel?: string | null
          gap_15_25k?: string | null
          gap_26k_plus?: string | null
          id?: string
          last_applied?: string | null
          tyre_and_alloy?: string | null
          updated_at?: string | null
          warranty?: string | null
        }
        Update: {
          cosmetic_repair_insurance?: string | null
          created_at?: string | null
          diamond_brite_full_ceramic?: string | null
          diamond_brite_nanoceramic?: string | null
          excluded_customers_last_applied?: string | null
          excluded_sales_executives_last_applied?: string | null
          fuel?: string | null
          gap_15_25k?: string | null
          gap_26k_plus?: string | null
          id?: string
          last_applied?: string | null
          tyre_and_alloy?: string | null
          updated_at?: string | null
          warranty?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      profit_update: {
        Row: {
          backupprofit: number | null
          cosmetic_repair_insurance_costs: number | null
          created_at: string
          diamond_brite_full_ceramic_costs: number | null
          diamond_brite_nanoceramic_costs: number | null
          fuel_costs: number | null
          gap_15_25k_costs: number | null
          gap_26k_plus_costs: number | null
          id: string
          profitneedsupdating: boolean | null
          stock_number: string
          total_costs: number | null
          tyre_and_alloy_costs: number | null
          updated_at: string
          warranty_costs: number | null
        }
        Insert: {
          backupprofit?: number | null
          cosmetic_repair_insurance_costs?: number | null
          created_at?: string
          diamond_brite_full_ceramic_costs?: number | null
          diamond_brite_nanoceramic_costs?: number | null
          fuel_costs?: number | null
          gap_15_25k_costs?: number | null
          gap_26k_plus_costs?: number | null
          id?: string
          profitneedsupdating?: boolean | null
          stock_number: string
          total_costs?: number | null
          tyre_and_alloy_costs?: number | null
          updated_at?: string
          warranty_costs?: number | null
        }
        Update: {
          backupprofit?: number | null
          cosmetic_repair_insurance_costs?: number | null
          created_at?: string
          diamond_brite_full_ceramic_costs?: number | null
          diamond_brite_nanoceramic_costs?: number | null
          fuel_costs?: number | null
          gap_15_25k_costs?: number | null
          gap_26k_plus_costs?: number | null
          id?: string
          profitneedsupdating?: boolean | null
          stock_number?: string
          total_costs?: number | null
          tyre_and_alloy_costs?: number | null
          updated_at?: string
          warranty_costs?: number | null
        }
        Relationships: []
      }
      raw_emails: {
        Row: {
          attachments: Json | null
          content: string | null
          email_id: number
          is_ingested: boolean | null
          processed: boolean | null
          processed_at: string | null
          received_at: string | null
          recipient: string | null
          sender: string | null
          subject: string | null
        }
        Insert: {
          attachments?: Json | null
          content?: string | null
          email_id?: number
          is_ingested?: boolean | null
          processed?: boolean | null
          processed_at?: string | null
          received_at?: string | null
          recipient?: string | null
          sender?: string | null
          subject?: string | null
        }
        Update: {
          attachments?: Json | null
          content?: string | null
          email_id?: number
          is_ingested?: boolean | null
          processed?: boolean | null
          processed_at?: string | null
          received_at?: string | null
          recipient?: string | null
          sender?: string | null
          subject?: string | null
        }
        Relationships: []
      }
      vehicle_price_history: {
        Row: {
          display_price: number | null
          id: number
          new_price: number | null
          offer_display: boolean | null
          offer_price: number | null
          price_type: string | null
          recorded_at: string
          vehicle_id: number
        }
        Insert: {
          display_price?: number | null
          id?: number
          new_price?: number | null
          offer_display?: boolean | null
          offer_price?: number | null
          price_type?: string | null
          recorded_at?: string
          vehicle_id: number
        }
        Update: {
          display_price?: number | null
          id?: number
          new_price?: number | null
          offer_display?: boolean | null
          offer_price?: number | null
          price_type?: string | null
          recorded_at?: string
          vehicle_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_vehicle"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "direct_kia_active_used_vehicles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_vehicle"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "haswent_vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicles_interest: {
        Row: {
          body_type: string | null
          color: string | null
          created_at: string | null
          customer_id: number | null
          fuel_type: string | null
          interest_id: number
          make: string | null
          model: string | null
          price: number | null
          registration: string | null
          transmission: string | null
          trim: string | null
          updated_at: string | null
          year: number | null
        }
        Insert: {
          body_type?: string | null
          color?: string | null
          created_at?: string | null
          customer_id?: number | null
          fuel_type?: string | null
          interest_id?: number
          make?: string | null
          model?: string | null
          price?: number | null
          registration?: string | null
          transmission?: string | null
          trim?: string | null
          updated_at?: string | null
          year?: number | null
        }
        Update: {
          body_type?: string | null
          color?: string | null
          created_at?: string | null
          customer_id?: number | null
          fuel_type?: string | null
          interest_id?: number
          make?: string | null
          model?: string | null
          price?: number | null
          registration?: string | null
          transmission?: string | null
          trim?: string | null
          updated_at?: string | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicles_interest_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
        ]
      }
    }
    Views: {
      combined_vehicles_with_history: {
        Row: {
          attention_grabber: string | null
          body_style: string | null
          colour_base: string | null
          colour_manufacturer: string | null
          condition: string | null
          created_at: string | null
          dealership: Json | null
          display_finance_deposit: number | null
          display_finance_monthly: number | null
          display_price: number | null
          doors: number | null
          emissions: number | null
          engine_size: number | null
          finances: Json | null
          fuel: string | null
          gears: number | null
          id: number | null
          image_count: number | null
          image_url: string | null
          images: Json | null
          last_sync_at: string | null
          lists: Json | null
          make: string | null
          mileage: number | null
          model: string | null
          mpg: number | null
          offer_display: boolean | null
          offer_price: number | null
          owners: number | null
          pinnacle_basic_incl_options: number | null
          pinnacle_body_style: string | null
          pinnacle_bonus: number | null
          pinnacle_branch: string | null
          pinnacle_co2_emission: string | null
          pinnacle_colour: string | null
          pinnacle_creditors: number | null
          pinnacle_customer: string | null
          pinnacle_customer_order: boolean | null
          pinnacle_date_funded: string | null
          pinnacle_date_in_stock: string | null
          pinnacle_depreciation: number | null
          pinnacle_division: string | null
          pinnacle_drive: string | null
          pinnacle_engine_code: string | null
          pinnacle_engine_size: string | null
          pinnacle_estimated_delivery_date: string | null
          pinnacle_fuel_type: string | null
          pinnacle_funder: string | null
          pinnacle_group_stock_days: number | null
          pinnacle_interior: string | null
          pinnacle_internet_price: number | null
          pinnacle_invoice_date: string | null
          pinnacle_invoice_number: string | null
          pinnacle_key_code_1: string | null
          pinnacle_location: string | null
          pinnacle_make: string | null
          pinnacle_mid: string | null
          pinnacle_mileage: number | null
          pinnacle_misc_costs: number | null
          pinnacle_model: string | null
          pinnacle_mot_expiry_date: string | null
          pinnacle_option_groups: string | null
          pinnacle_order_number: string | null
          pinnacle_original_group_date_in_stock: string | null
          pinnacle_part_exchanges: string | null
          pinnacle_photo_count: number | null
          pinnacle_previous_owners: string | null
          pinnacle_profiles: string | null
          pinnacle_purchased_by: string | null
          pinnacle_qualifying: boolean | null
          pinnacle_radio_code: string | null
          pinnacle_registration_date: string | null
          pinnacle_registration_number: string | null
          pinnacle_reserved: boolean | null
          pinnacle_selling_price: number | null
          pinnacle_specification: string | null
          pinnacle_stand_in_value: number | null
          pinnacle_stock_days: number | null
          pinnacle_stock_number: string | null
          pinnacle_stocktake_date: string | null
          pinnacle_stocktake_user: string | null
          pinnacle_supplier_name: string | null
          pinnacle_transmission: string | null
          pinnacle_transmission_code: string | null
          pinnacle_v55_description: string | null
          pinnacle_ved_expiry: string | null
          pinnacle_vehicle_code: string | null
          pinnacle_video: boolean | null
          pinnacle_vin: string | null
          price: number | null
          price_history: Json | null
          price_updated_at: string | null
          registration: string | null
          registration_date: string | null
          registration_year: number | null
          sales_pitch: string | null
          seats: number | null
          source_table: string | null
          status: string | null
          stock_number: string | null
          trade_price: number | null
          transmission: string | null
          type: string | null
          uk: Json | null
          updated_at: string | null
          variant: string | null
          vin: string | null
          websitedisplay: boolean | null
        }
        Relationships: []
      }
      combined_vehicles_with_history_active: {
        Row: {
          attention_grabber: string | null
          body_style: string | null
          colour_base: string | null
          colour_manufacturer: string | null
          condition: string | null
          created_at: string | null
          dealership: Json | null
          display_finance_deposit: number | null
          display_finance_monthly: number | null
          display_price: number | null
          doors: number | null
          emissions: number | null
          engine_size: number | null
          finances: Json | null
          fuel: string | null
          gears: number | null
          id: number | null
          image_count: number | null
          image_url: string | null
          images: Json | null
          last_sync_at: string | null
          lists: Json | null
          make: string | null
          mileage: number | null
          model: string | null
          mpg: number | null
          offer_display: boolean | null
          offer_price: number | null
          owners: number | null
          pinnacle_basic_incl_options: number | null
          pinnacle_body_style: string | null
          pinnacle_bonus: number | null
          pinnacle_branch: string | null
          pinnacle_co2_emission: string | null
          pinnacle_colour: string | null
          pinnacle_creditors: number | null
          pinnacle_customer: string | null
          pinnacle_customer_order: boolean | null
          pinnacle_date_funded: string | null
          pinnacle_date_in_stock: string | null
          pinnacle_depreciation: number | null
          pinnacle_division: string | null
          pinnacle_drive: string | null
          pinnacle_engine_code: string | null
          pinnacle_engine_size: string | null
          pinnacle_estimated_delivery_date: string | null
          pinnacle_fuel_type: string | null
          pinnacle_funder: string | null
          pinnacle_group_stock_days: number | null
          pinnacle_interior: string | null
          pinnacle_internet_price: number | null
          pinnacle_invoice_date: string | null
          pinnacle_invoice_number: string | null
          pinnacle_key_code_1: string | null
          pinnacle_location: string | null
          pinnacle_make: string | null
          pinnacle_mid: string | null
          pinnacle_mileage: number | null
          pinnacle_misc_costs: number | null
          pinnacle_model: string | null
          pinnacle_mot_expiry_date: string | null
          pinnacle_option_groups: string | null
          pinnacle_order_number: string | null
          pinnacle_original_group_date_in_stock: string | null
          pinnacle_part_exchanges: string | null
          pinnacle_photo_count: number | null
          pinnacle_previous_owners: string | null
          pinnacle_profiles: string | null
          pinnacle_purchased_by: string | null
          pinnacle_qualifying: boolean | null
          pinnacle_radio_code: string | null
          pinnacle_registration_date: string | null
          pinnacle_registration_number: string | null
          pinnacle_reserved: boolean | null
          pinnacle_selling_price: number | null
          pinnacle_specification: string | null
          pinnacle_stand_in_value: number | null
          pinnacle_stock_days: number | null
          pinnacle_stock_number: string | null
          pinnacle_stocktake_date: string | null
          pinnacle_stocktake_user: string | null
          pinnacle_supplier_name: string | null
          pinnacle_transmission: string | null
          pinnacle_transmission_code: string | null
          pinnacle_v55_description: string | null
          pinnacle_ved_expiry: string | null
          pinnacle_vehicle_code: string | null
          pinnacle_video: boolean | null
          pinnacle_vin: string | null
          price: number | null
          price_history: Json | null
          price_updated_at: string | null
          registration: string | null
          registration_date: string | null
          registration_year: number | null
          sales_pitch: string | null
          seats: number | null
          source_table: string | null
          status: string | null
          stock_number: string | null
          trade_price: number | null
          transmission: string | null
          type: string | null
          uk: Json | null
          updated_at: string | null
          variant: string | null
          vin: string | null
          websitedisplay: boolean | null
        }
        Relationships: []
      }
      combined_vehicles_with_history_sold_stc: {
        Row: {
          attention_grabber: string | null
          body_style: string | null
          colour_base: string | null
          colour_manufacturer: string | null
          condition: string | null
          created_at: string | null
          dealership: Json | null
          display_finance_deposit: number | null
          display_finance_monthly: number | null
          display_price: number | null
          doors: number | null
          emissions: number | null
          engine_size: number | null
          finances: Json | null
          fuel: string | null
          gears: number | null
          id: number | null
          image_count: number | null
          image_url: string | null
          images: Json | null
          last_sync_at: string | null
          lists: Json | null
          make: string | null
          mileage: number | null
          model: string | null
          mpg: number | null
          offer_display: boolean | null
          offer_price: number | null
          owners: number | null
          pinnacle_basic_incl_options: number | null
          pinnacle_body_style: string | null
          pinnacle_bonus: number | null
          pinnacle_branch: string | null
          pinnacle_co2_emission: string | null
          pinnacle_colour: string | null
          pinnacle_creditors: number | null
          pinnacle_customer: string | null
          pinnacle_customer_order: boolean | null
          pinnacle_date_funded: string | null
          pinnacle_date_in_stock: string | null
          pinnacle_depreciation: number | null
          pinnacle_division: string | null
          pinnacle_drive: string | null
          pinnacle_engine_code: string | null
          pinnacle_engine_size: string | null
          pinnacle_estimated_delivery_date: string | null
          pinnacle_fuel_type: string | null
          pinnacle_funder: string | null
          pinnacle_group_stock_days: number | null
          pinnacle_interior: string | null
          pinnacle_internet_price: number | null
          pinnacle_invoice_date: string | null
          pinnacle_invoice_number: string | null
          pinnacle_key_code_1: string | null
          pinnacle_location: string | null
          pinnacle_make: string | null
          pinnacle_mid: string | null
          pinnacle_mileage: number | null
          pinnacle_misc_costs: number | null
          pinnacle_model: string | null
          pinnacle_mot_expiry_date: string | null
          pinnacle_option_groups: string | null
          pinnacle_order_number: string | null
          pinnacle_original_group_date_in_stock: string | null
          pinnacle_part_exchanges: string | null
          pinnacle_photo_count: number | null
          pinnacle_previous_owners: string | null
          pinnacle_profiles: string | null
          pinnacle_purchased_by: string | null
          pinnacle_qualifying: boolean | null
          pinnacle_radio_code: string | null
          pinnacle_registration_date: string | null
          pinnacle_registration_number: string | null
          pinnacle_reserved: boolean | null
          pinnacle_selling_price: number | null
          pinnacle_specification: string | null
          pinnacle_stand_in_value: number | null
          pinnacle_stock_days: number | null
          pinnacle_stock_number: string | null
          pinnacle_stocktake_date: string | null
          pinnacle_stocktake_user: string | null
          pinnacle_supplier_name: string | null
          pinnacle_transmission: string | null
          pinnacle_transmission_code: string | null
          pinnacle_v55_description: string | null
          pinnacle_ved_expiry: string | null
          pinnacle_vehicle_code: string | null
          pinnacle_video: boolean | null
          pinnacle_vin: string | null
          price: number | null
          price_history: Json | null
          price_updated_at: string | null
          registration: string | null
          registration_date: string | null
          registration_year: number | null
          sales_pitch: string | null
          seats: number | null
          source_table: string | null
          status: string | null
          stock_number: string | null
          trade_price: number | null
          transmission: string | null
          type: string | null
          uk: Json | null
          updated_at: string | null
          variant: string | null
          vin: string | null
          websitedisplay: boolean | null
        }
        Relationships: []
      }
      direct_kia_active_used_vehicles: {
        Row: {
          attention_grabber: string | null
          body_style: string | null
          colour_base: string | null
          colour_manufacturer: string | null
          condition: string | null
          created_at: string | null
          dealership: Json | null
          display_finance_deposit: number | null
          display_finance_monthly: number | null
          display_price: number | null
          doors: number | null
          emissions: number | null
          engine_size: number | null
          finances: Json | null
          fuel: string | null
          gears: number | null
          id: number | null
          image_count: number | null
          image_url: string | null
          images: Json | null
          last_sync_at: string | null
          lists: Json | null
          make: string | null
          mileage: number | null
          model: string | null
          mpg: number | null
          offer_display: boolean | null
          offer_price: number | null
          owners: number | null
          price: number | null
          price_updated_at: string | null
          registration: string | null
          registration_date: string | null
          registration_year: number | null
          sales_pitch: string | null
          seats: number | null
          status: string | null
          stock_number: string | null
          trade_price: number | null
          transmission: string | null
          type: string | null
          uk: Json | null
          updated_at: string | null
          variant: string | null
          vin: string | null
          websitedisplay: boolean | null
        }
        Insert: {
          attention_grabber?: string | null
          body_style?: string | null
          colour_base?: string | null
          colour_manufacturer?: string | null
          condition?: string | null
          created_at?: string | null
          dealership?: Json | null
          display_finance_deposit?: number | null
          display_finance_monthly?: number | null
          display_price?: number | null
          doors?: number | null
          emissions?: number | null
          engine_size?: number | null
          finances?: Json | null
          fuel?: string | null
          gears?: number | null
          id?: number | null
          image_count?: number | null
          image_url?: string | null
          images?: Json | null
          last_sync_at?: string | null
          lists?: Json | null
          make?: string | null
          mileage?: number | null
          model?: string | null
          mpg?: number | null
          offer_display?: boolean | null
          offer_price?: number | null
          owners?: number | null
          price?: number | null
          price_updated_at?: string | null
          registration?: string | null
          registration_date?: string | null
          registration_year?: number | null
          sales_pitch?: string | null
          seats?: number | null
          status?: string | null
          stock_number?: string | null
          trade_price?: number | null
          transmission?: string | null
          type?: string | null
          uk?: Json | null
          updated_at?: string | null
          variant?: string | null
          vin?: string | null
          websitedisplay?: boolean | null
        }
        Update: {
          attention_grabber?: string | null
          body_style?: string | null
          colour_base?: string | null
          colour_manufacturer?: string | null
          condition?: string | null
          created_at?: string | null
          dealership?: Json | null
          display_finance_deposit?: number | null
          display_finance_monthly?: number | null
          display_price?: number | null
          doors?: number | null
          emissions?: number | null
          engine_size?: number | null
          finances?: Json | null
          fuel?: string | null
          gears?: number | null
          id?: number | null
          image_count?: number | null
          image_url?: string | null
          images?: Json | null
          last_sync_at?: string | null
          lists?: Json | null
          make?: string | null
          mileage?: number | null
          model?: string | null
          mpg?: number | null
          offer_display?: boolean | null
          offer_price?: number | null
          owners?: number | null
          price?: number | null
          price_updated_at?: string | null
          registration?: string | null
          registration_date?: string | null
          registration_year?: number | null
          sales_pitch?: string | null
          seats?: number | null
          status?: string | null
          stock_number?: string | null
          trade_price?: number | null
          transmission?: string | null
          type?: string | null
          uk?: Json | null
          updated_at?: string | null
          variant?: string | null
          vin?: string | null
          websitedisplay?: boolean | null
        }
        Relationships: []
      }
      sales_executives_view: {
        Row: {
          sales_person: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      apply_product_cost: {
        Args:
          | {
              cost_value: number
              profit_column: string
              costs_column: string
              sales_column: string
            }
          | {
              cost_value: number
              profit_column: string
              costs_column: string
              sales_column: string
              product_name: string
            }
        Returns: undefined
      }
      get_page_seo: {
        Args: { slug: string }
        Returns: {
          page_slug: string
          page_title: string
          meta_description: string
          h1_title: string
          og_title: string
          og_description: string
          canonical_url: string
          meta_keywords: string
          meta_robots: string
          focus_keyword: string
          schema_markup: Json
        }[]
      }
      get_table_columns: {
        Args: { table_name: string }
        Returns: {
          column_name: string
          data_type: string
          is_nullable: boolean
        }[]
      }
    }
    Enums: {
      meta_robots_type:
        | "index, follow"
        | "noindex, follow"
        | "index, nofollow"
        | "noindex, nofollow"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      meta_robots_type: [
        "index, follow",
        "noindex, follow",
        "index, nofollow",
        "noindex, nofollow",
      ],
    },
  },
} as const
