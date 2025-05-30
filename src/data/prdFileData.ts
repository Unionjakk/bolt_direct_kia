// Critical file contents for DirectKia Next.js migration
export const configFiles = [
  {
    filename: 'package.json',
    content: `{
  "name": "directkia",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.1",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-context-menu": "^2.2.1",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-hover-card": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.4",
    "@supabase/supabase-js": "^2.49.8",
    "@tanstack/react-query": "^5.56.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.3.0",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-hook-form": "^7.53.0",
    "react-resizable-panels": "^2.1.3",
    "react-router-dom": "^6.26.2",
    "recharts": "^2.12.7",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.3",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^7.15.0",
    "@typescript-eslint/parser": "^7.15.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "lovable-tagger": "^0.0.1",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.2.2",
    "vite": "^5.3.4"
  }
}`,
    language: 'json',
    description: 'Complete dependency list with exact versions for Next.js migration',
    category: 'config' as const,
    priority: 'critical' as const
  },
  {
    filename: 'tailwind.config.ts',
    content: `import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'kia-red': '#DC2626',
        'kia-red-dark': '#B91C1C',
        'kia-charcoal': '#1F2937',
        'kia-gray-medium': '#4B5563',
        'kia-gray-light': '#F3F4F6',
        'kia-silver': '#E5E7EB',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;`,
    language: 'typescript',
    description: 'Exact Tailwind configuration with Kia brand colors',
    category: 'config' as const,
    priority: 'critical' as const
  }
];

export const supabaseFiles = [
  {
    filename: 'src/integrations/supabase/client.ts',
    content: `// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://himiywrlajmgruscisks.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpbWl5d3JsYWptZ3J1c2Npc2tzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MTU2MzIsImV4cCI6MjA1ODk5MTYzMn0.2T9wuwbTBr9OghyJjGGVbvG8VKe-8bSJgSmzGdgMfQ0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);`,
    language: 'typescript',
    description: 'Supabase client configuration with database connection',
    category: 'integration' as const,
    priority: 'critical' as const
  }
];

export const componentFiles = [
  {
    filename: 'src/components/Header.tsx',
    content: `import { Car, Phone, MapPin, Menu, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home
    },
    {
      name: "New Cars",
      href: "/new-cars"
    },
    {
      name: "Used Cars", 
      href: "/used-cars"
    },
    {
      name: "Finance",
      href: "/finance"
    },
    {
      name: "About",
      href: "/about"
    }
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-kia-charcoal text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>01642 632 299</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>National Delivery Available</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Open Time • 6 Days 9AM - 6PM •  Sun 10AM - 4PM</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-kia-red p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-kia-charcoal font-inter">
                Direct<span className="text-kia-red">Kia</span>
              </h1>
              <p className="text-xs text-kia-gray-medium">Authorised Kia Dealer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <Link 
                key={item.name} 
                to={item.href} 
                className="text-kia-charcoal hover:text-kia-red transition-colors font-medium flex items-center gap-2"
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <Button className="bg-kia-red hover:bg-kia-red-dark text-white">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map(item => (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className="text-lg text-kia-charcoal hover:text-kia-red transition-colors py-2 border-b border-gray-100 flex items-center gap-3"
                  >
                    {item.icon && <item.icon className="h-5 w-5" />}
                    {item.name}
                  </Link>
                ))}
                <Link to="/contact">
                  <Button className="bg-kia-red hover:bg-kia-red-dark text-white mt-4 w-full">
                    Contact Us
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;`,
    language: 'typescript',
    description: 'Complete Header component with navigation and styling',
    category: 'component' as const,
    priority: 'critical' as const
  }
];

export const hookFiles = [
  {
    filename: 'src/hooks/useEV3Offers.ts',
    content: `import { useQuery } from "@tanstack/react-query";
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
  images: any; // Json type from database
  summary_features: any; // Json type from database
  features: any; // Json type from database
  finance_offers: any; // Json type from database
  delivery_type: string;
  created_at: string;
  updated_at: string;
}

export const useEV3Offers = () => {
  return useQuery({
    queryKey: ['ev3-offers'],
    queryFn: async (): Promise<EV3Offer[]> => {
      console.log('useEV3Offers: Starting database query');
      
      try {
        // First, let's try a simple query to test connectivity
        console.log('useEV3Offers: Testing basic table access...');
        const { count } = await supabase
          .from('direct_kia_new_vehicles_offers')
          .select('*', { count: 'exact', head: true });
        
        console.log('useEV3Offers: Total records in table:', count);

        // Now try to get all records to see what models exist
        console.log('useEV3Offers: Fetching all records to check available models...');
        const { data: allData, error: allError } = await supabase
          .from('direct_kia_new_vehicles_offers')
          .select('model, make, variant')
          .limit(10);

        console.log('useEV3Offers: Sample records:', allData);
        console.log('useEV3Offers: Sample query error:', allError);

        // Try case-insensitive query for EV3
        console.log('useEV3Offers: Querying for EV3 offers (case-insensitive)...');
        const { data, error } = await supabase
          .from('direct_kia_new_vehicles_offers')
          .select('*')
          .ilike('model', 'EV3')
          .order('created_at', { ascending: false });

        console.log('useEV3Offers: EV3 query response - Data length:', data?.length || 0);
        console.log('useEV3Offers: EV3 query response - Data:', data);
        console.log('useEV3Offers: EV3 query response - Error:', error);

        if (error) {
          console.error('useEV3Offers: Database error details:', {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code
          });
          throw error;
        }

        // If case-insensitive doesn't work, try exact match
        if (!data || data.length === 0) {
          console.log('useEV3Offers: No results with ilike, trying exact match...');
          const { data: exactData, error: exactError } = await supabase
            .from('direct_kia_new_vehicles_offers')
            .select('*')
            .eq('model', 'EV3')
            .order('created_at', { ascending: false });

          console.log('useEV3Offers: Exact match query - Data:', exactData);
          console.log('useEV3Offers: Exact match query - Error:', exactError);

          if (exactError) {
            throw exactError;
          }

          console.log('useEV3Offers: Returning exact match results:', exactData?.length || 0, 'offers');
          return exactData || [];
        }

        console.log('useEV3Offers: Returning case-insensitive results:', data.length, 'offers');
        return data;

      } catch (queryError) {
        console.error('useEV3Offers: Query execution failed:', queryError);
        throw queryError;
      }
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    meta: {
      onError: (error) => {
        console.error('useEV3Offers: React Query error:', error);
      }
    }
  });
};`,
    language: 'typescript',
    description: 'React Query hook for fetching EV3 offers from Supabase',
    category: 'hook' as const,
    priority: 'critical' as const
  }
];

export const pageFiles = [
  {
    filename: 'src/pages/NewCarsEV3.tsx',
    content: `import React from 'react';
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EV3OffersGrid from "@/components/ev3/EV3OffersGrid";
import EV3HeroSection from "@/components/ev3/EV3HeroSection";
import EV3Information from "@/components/ev3/EV3Information";
import EV3CallToAction from "@/components/ev3/EV3CallToAction";

const NewCarsEV3 = () => {
  return (
    <div className="min-h-screen font-inter bg-white">
      <SEOHead 
        pageSlug="new-cars-ev3"
        fallbackTitle="New Kia EV3 Offers | Electric SUV | DirectKia"
        fallbackDescription="Discover the all-new Kia EV3 electric SUV with up to 372 miles range. View current offers, specifications, and book your test drive today."
      />
      
      <Header />
      <EV3OffersGrid />
      <EV3HeroSection />
      <EV3Information />
      <EV3CallToAction />
      <Footer />
    </div>
  );
};

export default NewCarsEV3;`,
    language: 'typescript',
    description: 'Complete EV3 listing page with SEO integration',
    category: 'page' as const,
    priority: 'important' as const
  }
];

// Add new critical files to the exports
export const nextjsFiles = [
  {
    filename: 'next.config.js',
    content: `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'himiywrlajmgruscisks.supabase.co',
      'images.unsplash.com',
      'via.placeholder.com'
    ],
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;`,
    language: 'javascript',
    description: 'Next.js configuration with image optimization and security headers',
    category: 'config' as const,
    priority: 'critical' as const
  },
  {
    filename: '.env.local.example',
    content: `# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://himiywrlajmgruscisks.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpbWl5d3JsYWptZ3J1c2Npc2tzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MTU2MzIsImV4cCI6MjA1ODk5MTYzMn0.2T9wuwbTBr9OghyJjGGVbvG8VKe-8bSJgSmzGdgMfQ0

# Email Configuration (for contact forms)
SENDGRID_API_KEY=your_sendgrid_api_key_here

# Optional: Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id_here`,
    language: 'bash',
    description: 'Environment variables template for Next.js',
    category: 'config' as const,
    priority: 'critical' as const
  }
];

// Add more hook files showing the conversion pattern
export const additionalHookFiles = [
  {
    filename: 'src/hooks/useVehicles.ts',
    content: `import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Vehicle } from '@/types/vehicle';

interface UseVehiclesOptions {
  make?: string;
  model?: string;
  priceMin?: number;
  priceMax?: number;
  fuelType?: string;
  transmission?: string;
  bodyStyle?: string;
  limit?: number;
}

export const useVehicles = (options: UseVehiclesOptions = {}) => {
  return useQuery({
    queryKey: ['vehicles', options],
    queryFn: async (): Promise<Vehicle[]> => {
      console.log('useVehicles: Starting query with options:', options);
      
      let query = supabase
        .from('direct_kia_active_used_vehicles')
        .select(\`
          id, stock_number, make, model, variant, registration,
          mileage, price, display_price, fuel, transmission,
          body_style, doors, seats, engine_size, images,
          registration_date, websitedisplay, dealership,
          colour_base, colour_manufacturer, condition
        \`)
        .eq('websitedisplay', true)
        .order('created_at', { ascending: false });

      // Apply filters
      if (options.make) {
        query = query.ilike('make', \`%\${options.make}%\`);
      }
      
      if (options.model) {
        query = query.ilike('model', \`%\${options.model}%\`);
      }
      
      if (options.priceMin) {
        query = query.gte('display_price', options.priceMin);
      }
      
      if (options.priceMax) {
        query = query.lte('display_price', options.priceMax);
      }
      
      if (options.fuelType) {
        query = query.eq('fuel', options.fuelType);
      }
      
      if (options.transmission) {
        query = query.eq('transmission', options.transmission);
      }
      
      if (options.bodyStyle) {
        query = query.eq('body_style', options.bodyStyle);
      }
      
      if (options.limit) {
        query = query.limit(options.limit);
      }

      const { data, error } = await query;

      if (error) {
        console.error('useVehicles: Database error:', error);
        throw error;
      }

      console.log('useVehicles: Successfully fetched', data?.length || 0, 'vehicles');
      return data || [];
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    retry: 2,
  });
};`,
    language: 'typescript',
    description: 'Used cars hook with filtering - needs conversion to getServerSideProps',
    category: 'hook' as const,
    priority: 'important' as const
  }
];

// Add converted Next.js page examples
export const nextjsPageFiles = [
  {
    filename: 'pages/new-cars/ev3/offer/[vehicleId].tsx',
    content: `import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { supabase } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EV3OfferDetailPage from '@/components/ev3/EV3OfferDetailPage';

interface EV3Offer {
  vehicle_id: number;
  make: string;
  model: string;
  variant: string;
  trim_level: string;
  list_price: number;
  final_price: number;
  savings_amount: number;
  range_miles: number;
  battery_capacity: string;
  engine_power: string;
  images: any;
  features: any;
  finance_offers: any;
  // ... all other fields
}

interface PageProps {
  offer: EV3Offer;
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
}

const EV3OfferDetailPage = ({ offer, seoTitle, seoDescription, ogImage }: PageProps) => {
  return (
    <div className="min-h-screen font-inter bg-white">
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="canonical" href={\`https://directkia.co.uk/new-cars/ev3/offer/\${offer.vehicle_id}\`} />
      </Head>
      
      <Header />
      <EV3OfferDetailPage offer={offer} />
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const vehicleId = params?.vehicleId as string;

  if (!vehicleId) {
    return { notFound: true };
  }

  try {
    const { data: offer, error } = await supabase
      .from('direct_kia_new_vehicles_offers')
      .select('*')
      .eq('vehicle_id', parseInt(vehicleId))
      .eq('model', 'EV3')
      .single();

    if (error || !offer) {
      console.error('EV3 offer not found:', error);
      return { notFound: true };
    }

    // Generate dynamic SEO data
    const seoTitle = \`\${offer.make} \${offer.model} \${offer.variant}\${offer.trim_level ? \` \${offer.trim_level}\` : ''} | New Car Deals | DirectKia\`;
    
    const seoDescription = \`Discover our exclusive offer on the \${offer.make} \${offer.model} \${offer.variant}. Electric SUV with \${offer.range_miles} miles range, \${offer.engine_power} power. Special pricing from £\${offer.final_price?.toLocaleString()}. Save £\${offer.savings_amount?.toLocaleString()} off list price.\`;
    
    const ogImage = offer.images?.[0]?.url || 'https://directkia.co.uk/images/kia-ev3-default.jpg';

    return {
      props: {
        offer,
        seoTitle,
        seoDescription,
        ogImage,
      },
    };
  } catch (error) {
    console.error('Error fetching EV3 offer:', error);
    return { notFound: true };
  }
};

export default EV3OfferDetailPage;`,
    language: 'typescript',
    description: 'Perfect example of Next.js page with SSR for EV3 offers - CRITICAL for SEO',
    category: 'page' as const,
    priority: 'critical' as const
  }
];
