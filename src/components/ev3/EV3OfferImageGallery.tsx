
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

interface EV3OfferImageGalleryProps {
  images: any;
  offerName: string;
}

const EV3OfferImageGallery = ({ images, offerName }: EV3OfferImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Process images array
  const processedImages = React.useMemo(() => {
    if (!images || !Array.isArray(images) || images.length === 0) {
      return ['/images/EV3.jpg']; // Fallback image
    }
    
    return images.map(img => {
      if (typeof img === 'string') return img;
      if (typeof img === 'object' && img.url) return img.url;
      return '/images/EV3.jpg';
    });
  }, [images]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === processedImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? processedImages.length - 1 : prev - 1
    );
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/images/EV3.jpg';
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        {/* Main Image */}
        <div className="aspect-video bg-gray-100 flex items-center justify-center">
          {processedImages.length > 0 ? (
            <img
              src={processedImages[currentImageIndex]}
              alt={`${offerName} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-400">
              <ImageIcon className="h-16 w-16 mb-2" />
              <p className="text-sm">No images available</p>
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        {processedImages.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Image Counter */}
        {processedImages.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {processedImages.length}
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {processedImages.length > 1 && (
        <div className="p-4">
          <div className="flex gap-2 overflow-x-auto">
            {processedImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                  index === currentImageIndex 
                    ? 'border-kia-red' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`${offerName} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

export default EV3OfferImageGallery;
