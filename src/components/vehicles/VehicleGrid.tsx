
import React from 'react';
import { Vehicle } from '@/types/vehicle';
import VehicleCard from './VehicleCard';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface VehicleGridProps {
  vehicles: Vehicle[];
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onViewDetails: (vehicle: Vehicle) => void;
}

const VehicleGrid: React.FC<VehicleGridProps> = ({
  vehicles,
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
  onViewDetails
}) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-kia-red" />
        <span className="ml-2 text-kia-gray-medium">Loading vehicles...</span>
      </div>
    );
  }

  if (!vehicles.length) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-kia-charcoal mb-2">No vehicles found</h3>
        <p className="text-kia-gray-medium">Try adjusting your filters to see more results.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={`${vehicle.id}-${vehicle.stock_number}`}
            vehicle={vehicle}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage <= 1}
          >
            Previous
          </Button>
          
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  size="sm"
                  onClick={() => onPageChange(pageNum)}
                  className={currentPage === pageNum ? "bg-kia-red hover:bg-kia-red-dark" : ""}
                >
                  {pageNum}
                </Button>
              );
            })}
          </div>

          <Button
            variant="outline"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default VehicleGrid;
