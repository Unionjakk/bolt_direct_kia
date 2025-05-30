
import React from 'react';
import { Loader2 } from 'lucide-react';

interface EV3OffersGridStatesProps {
  isLoading?: boolean;
  error?: Error | null;
  isEmpty?: boolean;
}

const EV3OffersGridStates = ({ isLoading, error, isEmpty }: EV3OffersGridStatesProps) => {
  if (isLoading) {
    console.log('Rendering loading state');
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-kia-red mx-auto mb-4" />
            <p className="text-kia-gray-medium">Loading EV3 offers...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading EV3 offers:', error);
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-kia-gray-medium">Unable to load offers at this time.</p>
            <p className="text-sm text-red-500 mt-2">Error: {error.message}</p>
            {error.message.includes('permission') || error.message.includes('policy') ? (
              <p className="text-xs text-gray-500 mt-1">
                This might be a database access issue. Please check the browser console for more details.
              </p>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  if (isEmpty) {
    console.log('No offers found or empty offers array');
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-kia-charcoal mb-4">EV3 Offers</h2>
            <p className="text-kia-gray-medium">No offers available at this time. Please check back soon.</p>
            <p className="text-xs text-gray-500 mt-2">
              If you expect to see offers here, please check the browser console for debugging information.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default EV3OffersGridStates;
