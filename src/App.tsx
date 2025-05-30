
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NewCars from "./pages/NewCars";
import UsedCars from "./pages/UsedCars";
import VehicleDetail from "./pages/VehicleDetail";
import NotFound from "./pages/NotFound";
import NewCarsEV3 from "./pages/NewCarsEV3";
import NewCarsEV3OfferDetail from "./pages/NewCarsEV3OfferDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Contact from "./pages/Contact";
import Finance from "./pages/Finance";
import PRD from "./pages/PRD";

const queryClient = new QueryClient();

/**
 * IMPORTANT: SEO SYSTEM FOR NEW PAGES
 * ===================================
 * 
 * When adding a new page to this application, you MUST follow these steps:
 * 
 * 1. Add the route below in the Routes section
 * 2. Create the page component with SEOHead integration
 * 3. Add SEO data to the database using the page_seo table
 * 4. ENSURE CONSISTENT STYLING (see styling requirements below)
 * 
 * REQUIRED STEPS FOR NEW PAGES:
 * 
 * Step 1: Add SEO data to database
 * -------------------------------
 * INSERT INTO public.page_seo (page_slug, page_title, meta_description, h1_title) VALUES
 * ('your-page-slug', 'Your Page Title', 'Your meta description', 'Your H1 Title');
 * 
 * Step 2: Use SEOHead component in your page
 * -----------------------------------------
 * import SEOHead from "@/components/SEOHead";
 * 
 * Step 3: MANDATORY STYLING REQUIREMENTS
 * -------------------------------------
 * ALL new pages MUST include these classes on the root container:
 * - min-h-screen: Ensures full viewport height
 * - font-inter: Consistent font family across all pages (CRITICAL for header consistency)
 * - bg-white: Consistent background colour
 * 
 * CORRECT PAGE STRUCTURE:
 * const YourPage = () => {
 *   return (
 *     <div className="min-h-screen font-inter">
 *       <SEOHead 
 *         pageSlug="your-page-slug"
 *         fallbackTitle="Fallback Title"
 *         fallbackDescription="Fallback description"
 *       />
 *       <Header />
 *       // ... your page content
 *       <Footer />
 *     </div>
 *   );
 * };
 * 
 * Step 4: Add route below (see existing examples)
 * ----------------------------------------------
 * 
 * EXISTING EXAMPLES:
 * - Index page (/) uses pageSlug="home"
 * - NewCars (/new-cars) uses pageSlug="new-cars"
 * - UsedCars (/used-cars) uses pageSlug="used-cars"
 * - Contact (/contact) uses pageSlug="contact"
 * 
 * WARNING: Missing the `font-inter` class will cause header styling inconsistencies!
 */

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/new-cars" element={<NewCars />} />
            <Route path="/new-cars/ev3" element={<NewCarsEV3 />} />
            <Route path="/new-cars/ev3/offer/:vehicleId" element={<NewCarsEV3OfferDetail />} />
            <Route path="/used-cars" element={<UsedCars />} />
            <Route path="/used-cars/vehicle/:id" element={<VehicleDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/prd" element={<PRD />} />
            {/* 
              ADD ALL NEW CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE 
              
              TEMPLATE FOR NEW ROUTES:
              <Route path="/your-new-page" element={<YourNewPage />} />
              
              REMEMBER: Each new page MUST include SEOHead component with proper pageSlug!
              REMEMBER: Each new page MUST include font-inter class on root container!
            */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
