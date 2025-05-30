
# New Page Template

Use this template when creating new pages to ensure proper SEO integration.

## Step 1: Add SEO Data to Database

```sql
INSERT INTO public.page_seo (
  page_slug, 
  page_title, 
  meta_description, 
  h1_title,
  meta_keywords,
  focus_keyword
) VALUES (
  'your-page-slug',
  'Your Page Title | DirectKia',
  'Your compelling meta description that describes the page content.',
  'Your H1 Heading',
  'keyword1, keyword2, keyword3',
  'primary-keyword'
);
```

## Step 2: Create Page Component

```typescript
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const YourPage = () => {
  const { data: seoData } = useSEO('your-page-slug');

  return (
    <div className="min-h-screen font-inter">
      <SEOHead 
        pageSlug="your-page-slug"
        fallbackTitle="Your Fallback Title | DirectKia"
        fallbackDescription="Your fallback description for when database is unavailable."
      />
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-kia-charcoal mb-6">
            {seoData?.h1_title || "Your Fallback H1"}
          </h1>
          
          {/* Your page content here */}
          
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default YourPage;
```

## Step 3: Add Route to App.tsx

```typescript
// In src/App.tsx, add this line in the Routes section:
<Route path="/your-page" element={<YourPage />} />
```

## Step 4: Update Navigation (if needed)

Add links to your new page in the Header component or relevant navigation areas.

## Checklist

- [ ] SEO data added to database
- [ ] Page component created with SEOHead
- [ ] useSEO hook implemented for dynamic H1
- [ ] Route added to App.tsx
- [ ] Navigation updated (if applicable)
- [ ] Page tested for SEO meta tags
- [ ] Fallback values provided

## Notes

- Always use the `useSEO` hook for dynamic content like H1 headings
- Provide meaningful fallback values for when the database is unavailable
- Keep page slugs consistent with URL paths
- Test that meta tags are properly rendered in browser dev tools
