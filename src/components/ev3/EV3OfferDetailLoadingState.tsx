
import React from 'react';
import { Loader2 } from 'lucide-react';

const EV3OfferDetailLoadingState = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-kia-red mr-4" />
        <p className="text-kia-gray-medium">Loading offer details...</p>
      </div>
    </div>
  );
};

export default EV3OfferDetailLoadingState;
