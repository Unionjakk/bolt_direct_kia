
import React from 'react';
import { CardHeader, CardTitle } from '@/components/ui/card';

interface EV3OfferCardHeaderProps {
  variant: string;
  trimLevel?: string;
}

const EV3OfferCardHeader = ({ variant, trimLevel }: EV3OfferCardHeaderProps) => {
  return (
    <CardHeader>
      <CardTitle className="text-xl text-kia-charcoal">
        Kia EV3 {variant}
      </CardTitle>
      {trimLevel && (
        <p className="text-kia-gray-medium text-sm">{trimLevel}</p>
      )}
    </CardHeader>
  );
};

export default EV3OfferCardHeader;
