
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EV3FinanceOfferCard from './EV3FinanceOfferCard';

interface EV3FinanceTabsContainerProps {
  financeOffersByType: Record<string, any[]>;
  availableTypes: string[];
  getFinanceTypeLabel: (type: string) => string;
}

const EV3FinanceTabsContainer = ({ 
  financeOffersByType, 
  availableTypes, 
  getFinanceTypeLabel 
}: EV3FinanceTabsContainerProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-kia-charcoal">Finance Options*</h3>
      <Tabs defaultValue={availableTypes[0]} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {availableTypes.includes('PCP') && (
            <TabsTrigger value="PCP">PCP</TabsTrigger>
          )}
          {availableTypes.includes('PCH') && (
            <TabsTrigger value="PCH">PCH</TabsTrigger>
          )}
          {availableTypes.includes('HP') && (
            <TabsTrigger value="HP">HP</TabsTrigger>
          )}
        </TabsList>

        {availableTypes.map(type => (
          <TabsContent key={type} value={type} className="space-y-4">
            {financeOffersByType[type].map((offer, index) => (
              <EV3FinanceOfferCard
                key={index}
                offer={offer}
                getFinanceTypeLabel={getFinanceTypeLabel}
              />
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default EV3FinanceTabsContainer;
