
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

/**
 * useSEO Hook - Database-Driven SEO Data Fetching
 * ==============================================
 * 
 * This hook fetches SEO data from the page_seo table for any given page slug.
 * It's designed to work with the centralized SEO management system.
 * 
 * USAGE:
 * const { data: seoData, isLoading, error } = useSEO('your-page-slug');
 * 
 * RETURN DATA STRUCTURE:
 * {
 *   page_slug: string;        // The page identifier
 *   page_title: string;       // Main page title
 *   meta_description: string; // Meta description
 *   h1_title: string;         // H1 heading text
 *   og_title: string;         // Open Graph title
 *   og_description: string;   // Open Graph description
 *   canonical_url: string;    // Canonical URL
 *   meta_keywords: string;    // Meta keywords
 *   meta_robots: string;      // Robot instructions
 *   focus_keyword: string;    // SEO focus keyword
 *   schema_markup: any;       // JSON-LD structured data
 * }
 * 
 * DATABASE INTEGRATION:
 * - Uses Supabase RPC function 'get_page_seo'
 * - Automatically handles fallbacks for missing fields
 * - Includes 5-minute caching for performance
 * - Only fetches active (is_active = true) SEO records
 * 
 * FOR NEW PAGES:
 * 1. Add SEO data to database first:
 *    INSERT INTO public.page_seo (page_slug, page_title, meta_description, h1_title) 
 *    VALUES ('new-page', 'New Page Title', 'Description', 'H1 Title');
 * 
 * 2. Use this hook in your component:
 *    const { data: seoData } = useSEO('new-page');
 * 
 * 3. Access the h1_title for dynamic headings:
 *    <h1>{seoData?.h1_title || 'Fallback H1'}</h1>
 */

export interface SEOData {
  page_slug: string;
  page_title: string;
  meta_description: string;
  h1_title: string;
  og_title: string;
  og_description: string;
  canonical_url: string;
  meta_keywords: string;
  meta_robots: string;
  focus_keyword: string;
  schema_markup: any;
}

export const useSEO = (pageSlug: string) => {
  return useQuery({
    queryKey: ['seo', pageSlug],
    queryFn: async (): Promise<SEOData | null> => {
      const { data, error } = await supabase.rpc('get_page_seo', {
        slug: pageSlug
      });

      if (error) {
        console.error('Error fetching SEO data:', error);
        return null;
      }

      return data?.[0] || null;
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
};
