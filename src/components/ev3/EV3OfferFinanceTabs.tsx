
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import EV3FinanceTabsHeader from './EV3FinanceTabsHeader';
import EV3CashPriceSection from './EV3CashPriceSection';
import EV3FinanceTabsContainer from './EV3FinanceTabsContainer';
import EV3FinanceDisclaimer from './EV3FinanceDisclaimer';

interface EV3OfferFinanceTabsProps {
  listPrice: number;
  finalPrice: number;
  savingsAmount: number;
  financeOffers: any;
}

const EV3OfferFinanceTabs = ({ listPrice, finalPrice, savingsAmount, financeOffers }: EV3OfferFinanceTabsProps) => {
  const getFinanceTypeLabel = (type: string) => {
    switch (type?.toUpperCase()) {
      case 'PCP':
        return 'Personal Contract Purchase';
      case 'PCH':
        return 'Personal Contract Hire';
      case 'HP':
        return 'Hire Purchase';
      default:
        return type || 'Finance Option';
    }
  };

  // Group finance offers by type
  const financeOffersByType = React.useMemo(() => {
    if (!financeOffers || !Array.isArray(financeOffers)) return {};
    
    return financeOffers.reduce((acc, offer) => {
      const type = offer.type?.toUpperCase() || 'OTHER';
      if (!acc[type]) acc[type] = [];
      acc[type].push(offer);
      return acc;
    }, {});
  }, [financeOffers]);

  const availableTypes = Object.keys(financeOffersByType);
  const hasFinanceOffers = availableTypes.length > 0;

  return (
    <Card>
      <EV3FinanceTabsHeader hasFinanceOffers={hasFinanceOffers} />
      <CardContent className="space-y-6">
        {hasFinanceOffers ? (
          <>
            <EV3FinanceTabsContainer
              financeOffersByType={financeOffersByType}
              availableTypes={availableTypes}
              getFinanceTypeLabel={getFinanceTypeLabel}
            />
            <EV3FinanceDisclaimer />
          </>
        ) : (
          <EV3CashPriceSection
            listPrice={listPrice}
            finalPrice={finalPrice}
            savingsAmount={savingsAmount}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default EV3OfferFinanceTabs;
