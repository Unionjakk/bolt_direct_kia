
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/878f20f7-4fdc-4c3a-9530-3cc4948ed168

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/878f20f7-4fdc-4c3a-9530-3cc4948ed168) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## SEO System for New Pages

This project uses a centralized SEO management system powered by Supabase. **Every new page MUST follow this system.**

### Quick Start for New Pages

1. **Add SEO data to database:**
```sql
INSERT INTO public.page_seo (page_slug, page_title, meta_description, h1_title) 
VALUES ('your-page-slug', 'Your Page Title', 'Your meta description', 'Your H1 Title');
```

2. **Create your page component:**
```typescript
import SEOHead from "@/components/SEOHead";
import { useSEO } from "@/hooks/useSEO";

const YourPage = () => {
  const { data: seoData } = useSEO('your-page-slug');
  
  return (
    <div className="min-h-screen font-inter">
      <SEOHead 
        pageSlug="your-page-slug"
        fallbackTitle="Fallback Title"
        fallbackDescription="Fallback description"
      />
      <Header />
      
      <h1>{seoData?.h1_title || 'Fallback H1'}</h1>
      {/* Your page content */}
      
      <Footer />
    </div>
  );
};
```

3. **Add route in App.tsx:**
```typescript
<Route path="/your-page" element={<YourPage />} />
```

### SEO Database Fields

The `page_seo` table supports these fields:

- `page_slug`: Unique identifier for the page (required)
- `page_title`: Main page title for `<title>` tag (required)
- `meta_description`: Meta description for search engines
- `h1_title`: H1 heading text for the page
- `og_title`: Open Graph title (falls back to page_title)
- `og_description`: Open Graph description (falls back to meta_description)
- `canonical_url`: Canonical URL (auto-generated if not provided)
- `meta_keywords`: Keywords for meta tag
- `meta_robots`: Robot instructions (default: 'index, follow')
- `focus_keyword`: SEO focus keyword
- `schema_markup`: JSON-LD structured data

### Existing Pages

Reference these existing implementations:

- **Home page** (`/`): pageSlug = `"home"`
- **Electric Vehicles** (`/electric`): pageSlug = `"electric"`
- **New Cars** (`/new-cars`): pageSlug = `"new-cars"`
- **Used Cars** (`/used-cars`): pageSlug = `"used-cars"`

### Components and Hooks

- **`SEOHead`**: Manages all meta tags and SEO elements
- **`useSEO`**: Hook to fetch SEO data from database
- **Database function**: `get_page_seo(slug)` with auto-fallbacks

**Important**: Always check `src/App.tsx` for detailed comments and examples when adding new pages.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/878f20f7-4fdc-4c3a-9530-3cc4948ed168) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
