
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useVehicle } from '@/hooks/useVehicle';
import VehicleImageGallery from '@/components/vehicles/VehicleImageGallery';
import VehicleSpecifications from '@/components/vehicles/VehicleSpecifications';
import VehiclePricing from '@/components/vehicles/VehiclePricing';
import VehicleEnquiryForm from '@/components/vehicles/VehicleEnquiryForm';
import { Badge } from '@/components/ui/badge';
import { Loader2, Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: vehicle, isLoading, error } = useVehicle(id!);

  if (!id) {
    return <Navigate to="/used-cars" replace />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen font-inter flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-kia-red" />
          <span className="text-lg">Loading vehicle details...</span>
        </div>
      </div>
    );
  }

  if (error || !vehicle) {
    return (
      <div className="min-h-screen font-inter">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-kia-charcoal mb-4">Vehicle Not Found</h1>
            <p className="text-kia-gray-medium mb-4">
              Sorry, we couldn't find the vehicle you're looking for.
            </p>
            <Link 
              to="/used-cars" 
              className="inline-flex items-center text-kia-red hover:underline"
            >
              ← Back to Used Cars
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Generate dynamic SEO data
  const vehicleTitle = `${vehicle.registration_year} ${vehicle.make} ${vehicle.model}${vehicle.variant ? ` ${vehicle.variant}` : ''}`;
  const price = vehicle.display_price || vehicle.price;
  const seoTitle = `Used ${vehicleTitle} - ${new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0 }).format(price)} | DirectKia`;
  const seoDescription = `Used ${vehicleTitle} for sale at ${new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0 }).format(price)}. ${new Intl.NumberFormat('en-GB').format(vehicle.mileage)} miles, ${vehicle.fuel}, ${vehicle.transmission}. View full details and enquire online.`;

  return (
    <div className="min-h-screen font-inter">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        {vehicle.image_url && <meta property="og:image" content={vehicle.image_url} />}
        <meta property="og:type" content="product" />
        <link rel="canonical" href={`/used-cars/vehicle/${vehicle.id}`} />
      </Helmet>
      
      <Header />
      
      <main className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-kia-red flex items-center gap-1">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/used-cars" className="hover:text-kia-red">
              Used Cars
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-kia-charcoal font-medium">Vehicle Details</span>
          </nav>

          {/* Vehicle Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-kia-charcoal mb-2">
                  Used {vehicleTitle}
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-lg text-kia-gray-medium">
                    {new Intl.NumberFormat('en-GB').format(vehicle.mileage)} miles
                  </span>
                  <span className="text-lg text-kia-gray-medium">•</span>
                  <span className="text-lg text-kia-gray-medium">{vehicle.fuel}</span>
                  <span className="text-lg text-kia-gray-medium">•</span>
                  <span className="text-lg text-kia-gray-medium">{vehicle.transmission}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Mobile First Flexbox, Desktop Grid */}
          <div className="flex flex-col xl:grid xl:grid-cols-3 gap-8">
            {/* Image Gallery - Always first on mobile and desktop */}
            <div className="order-1 xl:col-span-2">
              <VehicleImageGallery 
                images={vehicle.images || []} 
                vehicleName={vehicleTitle}
              />
            </div>
            
            {/* Attention Grabber - Second on mobile, stays with images on desktop */}
            {vehicle.attention_grabber && (
              <div className="order-2 xl:col-span-2">
                <Badge className="bg-blue-100 text-blue-800 font-semibold px-4 py-3 text-base border border-blue-200 w-full justify-center">
                  {vehicle.attention_grabber}
                </Badge>
              </div>
            )}
            
            {/* Pricing - Third on mobile, sidebar on desktop */}
            <div className="order-3 xl:row-start-1 xl:col-start-3 xl:row-span-2">
              <div className="space-y-6">
                <VehiclePricing vehicle={vehicle} />
                <VehicleEnquiryForm vehicle={vehicle} />
              </div>
            </div>
            
            {/* Vehicle Specifications - Fourth on mobile, below images on desktop */}
            <div className="order-4 xl:col-span-2">
              <VehicleSpecifications vehicle={vehicle} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VehicleDetail;
