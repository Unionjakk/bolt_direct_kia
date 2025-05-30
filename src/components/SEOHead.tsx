
import { Helmet } from "react-helmet-async";
import { useSEO } from "@/hooks/useSEO";

/**
 * SEOHead Component - Centralized SEO Management
 * =============================================
 * 
 * This component manages all SEO metadata for pages using a centralized database system.
 * It automatically fetches SEO data from the page_seo table and provides fallbacks.
 * 
 * USAGE FOR NEW PAGES:
 * 
 * 1. First, add SEO data to database:
 *    INSERT INTO public.page_seo (page_slug, page_title, meta_description, h1_title) 
 *    VALUES ('your-slug', 'Your Title', 'Your Description', 'Your H1');
 * 
 * 2. Then use this component in your page:
 *    <SEOHead 
 *      pageSlug="your-slug"
 *      fallbackTitle="Fallback Title"
 *      fallbackDescription="Fallback Description"
 *    />
 * 
 * FEATURES:
 * - Auto-generates Open Graph tags from database data
 * - Auto-generates canonical URLs based on page slug
 * - Provides fallback values when database data is unavailable
 * - Supports schema markup from database
 * - Handles loading states gracefully
 * 
 * DATABASE FIELDS SUPPORTED:
 * - page_title: Main page title (required)
 * - meta_description: Meta description for search engines
 * - h1_title: H1 heading (accessible via useSEO hook)
 * - og_title: Open Graph title (falls back to page_title)
 * - og_description: Open Graph description (falls back to meta_description)
 * - canonical_url: Canonical URL (auto-generated if not provided)
 * - meta_keywords: Keywords for meta tag
 * - meta_robots: Robot instructions (default: 'index, follow')
 * - schema_markup: JSON-LD structured data
 */

interface SEOHeadProps {
  pageSlug?: string;
  fallbackTitle?: string;
  fallbackDescription?: string;
  fallbackH1?: string;
}

const SEOHead = ({ pageSlug, fallbackTitle, fallbackDescription, fallbackH1 }: SEOHeadProps) => {
  // Only fetch from database if pageSlug is provided
  const { data: seoData, isLoading } = useSEO(pageSlug || '');
  const shouldUseDatabaseData = Boolean(pageSlug);

  // For dynamic pages (no pageSlug), use fallback data immediately
  // For static pages (with pageSlug), use database data if available
  const title = shouldUseDatabaseData ? (seoData?.page_title || fallbackTitle) : fallbackTitle;
  const description = shouldUseDatabaseData ? (seoData?.meta_description || fallbackDescription) : fallbackDescription;
  const ogTitle = shouldUseDatabaseData ? (seoData?.og_title || title) : title;
  const ogDescription = shouldUseDatabaseData ? (seoData?.og_description || description) : description;
  const canonicalUrl = shouldUseDatabaseData ? 
    (seoData?.canonical_url || (pageSlug ? `/${pageSlug === 'home' ? '' : pageSlug}` : window.location.pathname)) :
    window.location.pathname;
  const metaRobots = shouldUseDatabaseData ? (seoData?.meta_robots || 'index, follow') : 'index, follow';
  const keywords = shouldUseDatabaseData ? (seoData?.meta_keywords || '') : '';

  // For static pages with database integration, show basic fallback while loading
  if (isLoading && shouldUseDatabaseData) {
    return (
      <Helmet>
        {fallbackTitle && <title>{fallbackTitle}</title>}
        {fallbackDescription && <meta name="description" content={fallbackDescription} />}
      </Helmet>
    );
  }

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={metaRobots} />
      
      {/* Open Graph tags */}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      <meta property="og:type" content="website" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Schema markup if available (only for database-driven pages) */}
      {shouldUseDatabaseData && seoData?.schema_markup && (
        <script type="application/ld+json">
          {JSON.stringify(seoData.schema_markup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
