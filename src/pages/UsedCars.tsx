
import React, { useState } from 'react';
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VehicleFilters from '@/components/vehicles/VehicleFilters';
import VehicleSortSection from '@/components/vehicles/VehicleSortSection';
import VehicleGrid from '@/components/vehicles/VehicleGrid';
import { useVehicles } from '@/hooks/useVehicles';
import { useFilterParams } from '@/hooks/useFilterParams';
import { Vehicle } from '@/types/vehicle';

const UsedCars = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { filters, updateFilters } = useFilterParams();

  const { data: vehicleData, isLoading, error } = useVehicles(filters, currentPage, 12);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetails = (vehicle: Vehicle) => {
    console.log('View details for vehicle:', vehicle);
    // TODO: Navigate to vehicle detail page
    // This will be implemented in Stage 2
  };

  if (error) {
    console.error('Error loading vehicles:', error);
  }

  const vehicles = vehicleData?.vehicles || [];
  const totalCount = vehicleData?.totalCount || 0;
  const totalPages = vehicleData?.totalPages || 1;

  return (
    <div className="min-h-screen font-inter">
      <SEOHead 
        pageSlug="used-cars"
        fallbackTitle="Quality Used Kia Cars | Pre-Owned Vehicles | DirectKia"
        fallbackDescription="Browse our extensive selection of quality used Kia vehicles. All cars inspected and warranty options available. National delivery across the UK."
      />
      <Header />
      
      <main className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-kia-charcoal mb-4">
              Used Kia Cars for Sale
            </h1>
            <p className="text-lg text-kia-gray-medium">
              Discover our extensive range of quality used Kia vehicles with comprehensive inspections and warranty options.
            </p>
          </div>

          <VehicleSortSection
            filters={filters}
            onFiltersChange={updateFilters}
            resultsCount={totalCount}
          />

          <VehicleFilters
            filters={filters}
            onFiltersChange={updateFilters}
            resultsCount={totalCount}
          />

          <VehicleGrid
            vehicles={vehicles}
            isLoading={isLoading}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onViewDetails={handleViewDetails}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UsedCars;
