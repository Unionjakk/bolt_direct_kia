
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import EV3OfferFinanceTabs from './EV3OfferFinanceTabs';
import EV3OfferEnquiryForm from './EV3OfferEnquiryForm';

interface EV3OfferDetailSidebarProps {
  offer: {
    list_price: number;
    final_price: number;
    savings_amount: number;
    finance_offers: any;
    // Add all the properties that EV3OfferEnquiryForm needs
    vehicle_id: number;
    make: string;
    model: string;
    variant: string;
    trim_level: string;
  };
}

const EV3OfferDetailSidebar = ({ offer }: EV3OfferDetailSidebarProps) => {
  return (
    <div className="space-y-8">
      {/* Finance Tabs */}
      <EV3OfferFinanceTabs 
        listPrice={offer.list_price}
        finalPrice={offer.final_price}
        savingsAmount={offer.savings_amount}
        financeOffers={offer.finance_offers}
      />

      {/* Enquiry Form */}
      <EV3OfferEnquiryForm offer={offer} />

      {/* Important Notice */}
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-amber-800">
              <p className="font-medium mb-2">Important Information</p>
              <p className="text-xs">
                Offers subject to availability and may be withdrawn at any time, Finance subject to status and approval, All prices include VAT and delivery charges, Images shown for illustration purposes only
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EV3OfferDetailSidebar;
