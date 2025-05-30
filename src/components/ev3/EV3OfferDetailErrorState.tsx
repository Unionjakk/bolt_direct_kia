
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const EV3OfferDetailErrorState = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-kia-charcoal mb-4">Offer Not Found</h1>
        <p className="text-kia-gray-medium mb-6">
          We couldn't find the EV3 offer you're looking for, or this offer has expired.
        </p>
        <Link to="/new-cars/ev3">
          <Button className="bg-kia-red hover:bg-kia-red-dark text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to EV3 Offers
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EV3OfferDetailErrorState;
