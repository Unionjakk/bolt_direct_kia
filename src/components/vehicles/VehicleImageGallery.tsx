
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageData {
  url: string;
  priority: number;
  id: string;
}

interface VehicleImageGalleryProps {
  images: ImageData[];
  vehicleName: string;
}

const VehicleImageGallery: React.FC<VehicleImageGalleryProps> = ({ images, vehicleName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Sort images by priority and filter out any invalid URLs
  const sortedImages = images
    ?.filter(img => img.url && img.url.trim() !== '')
    ?.sort((a, b) => a.priority - b.priority) || [];

  if (!sortedImages.length) {
    return (
      <div className="aspect-[3/2] bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">No images available</span>
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentImageIndex(prev => (prev - 1 + sortedImages.length) % sortedImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex(prev => (prev + 1) % sortedImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const currentImage = sortedImages[currentImageIndex];

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative group">
        <div className="aspect-[3/2] overflow-hidden rounded-lg bg-gray-100">
          <img
            src={currentImage.url}
            alt={`${vehicleName} - Image ${currentImageIndex + 1} of ${sortedImages.length}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Navigation Arrows */}
        {sortedImages.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} of {sortedImages.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      {sortedImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {sortedImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToImage(index)}
              className={`flex-shrink-0 aspect-[3/2] w-20 rounded-md overflow-hidden border-2 transition-all ${
                index === currentImageIndex
                  ? 'border-kia-red shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <img
                src={image.url}
                alt={`${vehicleName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default VehicleImageGallery;
