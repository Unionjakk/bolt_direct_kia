
# Styling Guidelines for DirectKia Website

This document outlines the mandatory styling requirements for maintaining consistency across all pages of the DirectKia website.

## Critical Styling Requirements for ALL Pages

### Root Container Classes (MANDATORY)
Every page component MUST include these classes on the root `<div>` element:

```jsx
<div className="min-h-screen font-inter">
  {/* Page content */}
</div>
```

**Required Classes:**
- `min-h-screen` - Ensures full viewport height
- `font-inter` - **CRITICAL**: Ensures consistent font family across all pages, especially for header consistency

**Optional but Recommended:**
- `bg-white` - Consistent background colour (add if page needs white background)

### Why font-inter is Critical
The `font-inter` class is essential because:
- The Header component uses Inter font family
- Without this class, the header will render in a different font
- This causes visible font size and styling inconsistencies
- All existing pages use this pattern

## Page Structure Template

```jsx
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const YourPage = () => {
  return (
    <div className="min-h-screen font-inter">
      <SEOHead 
        pageSlug="your-page-slug"
        fallbackTitle="Your Page Title"
        fallbackDescription="Your page description"
      />
      <Header />
      {/* Your page content here */}
      <Footer />
    </div>
  );
};

export default YourPage;
```

## Brand Colours (Tailwind Custom Classes)
Use these predefined Kia brand colours:

- `bg-kia-red` / `text-kia-red` - Primary brand red (#E4002B)
- `bg-kia-red-dark` / `text-kia-red-dark` - Darker red for hovers (#C40024)
- `bg-kia-charcoal` / `text-kia-charcoal` - Dark grey (#2D2D2D)
- `bg-kia-silver` / `text-kia-silver` - Light grey (#F8F9FA)
- `bg-kia-gray-light` / `text-kia-gray-light` - Very light grey (#F5F6F7)
- `bg-kia-gray-medium` / `text-kia-gray-medium` - Medium grey (#8B95A1)

## Typography
- Primary font: Inter (`font-inter` class)
- Use consistent heading sizes and weights
- Follow existing patterns in other components

## Responsive Design
- Always use Tailwind's responsive classes
- Follow mobile-first approach
- Test on various screen sizes

## AI Assistant Checklist
When creating or modifying pages, ensure:

1. ✅ Root container has `min-h-screen font-inter` classes
2. ✅ SEOHead component is properly integrated
3. ✅ Header and Footer components are included
4. ✅ UK spelling is used throughout (see UK_SPELLING_GUIDELINES.md)
5. ✅ Brand colours are used consistently
6. ✅ Responsive design principles are followed

## Common Mistakes to Avoid
- ❌ Forgetting `font-inter` class (causes header inconsistencies)
- ❌ Using American spelling instead of British
- ❌ Not including SEOHead component
- ❌ Inconsistent use of brand colours
- ❌ Not following the established page structure template

## Testing
Always verify that:
- Header appears consistent across all pages
- Font rendering is uniform
- Brand colours display correctly
- Page is responsive on mobile and desktop
