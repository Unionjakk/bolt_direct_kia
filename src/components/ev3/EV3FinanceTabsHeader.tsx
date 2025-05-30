
import React from 'react';
import { CardHeader, CardTitle } from '@/components/ui/card';

interface EV3FinanceTabsHeaderProps {
  hasFinanceOffers: boolean;
}

const EV3FinanceTabsHeader = ({ hasFinanceOffers }: EV3FinanceTabsHeaderProps) => {
  return (
    <CardHeader>
      <CardTitle className="text-xl text-kia-charcoal">
        {hasFinanceOffers ? 'Finance Options' : 'Pricing'}
      </CardTitle>
    </CardHeader>
  );
};

export default EV3FinanceTabsHeader;
