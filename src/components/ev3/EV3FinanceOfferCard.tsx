
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle } from 'lucide-react';

interface EV3FinanceOfferCardProps {
  offer: any;
  getFinanceTypeLabel: (type: string) => string;
}

const EV3FinanceOfferCard = ({ offer, getFinanceTypeLabel }: EV3FinanceOfferCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const shouldDisplayField = (value: any) => {
    return value !== undefined && value !== null && value !== '';
  };

  return (
    <div className="border rounded-lg p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-kia-charcoal">{getFinanceTypeLabel(offer.type)}</h4>
        {offer.apr && offer.type !== 'PCH' && (
          <Badge variant="outline" className="font-semibold">
            {offer.apr}% APR Representative
          </Badge>
        )}
      </div>
      
      {/* Key Finance Details */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        {shouldDisplayField(offer.monthly_payment) && (
          <div>
            <span className="text-gray-500">Monthly Payment:</span>
            <div className="font-semibold text-lg">{formatPrice(offer.monthly_payment)}/month</div>
          </div>
        )}
        
        {shouldDisplayField(offer.deposit) && (
          <div>
            <span className="text-gray-500">Deposit:</span>
            <div className="font-semibold">{formatPrice(offer.deposit)}</div>
          </div>
        )}
        
        {shouldDisplayField(offer.contract_length_months) && (
          <div>
            <span className="text-gray-500">Contract Length:</span>
            <div className="font-semibold">{offer.contract_length_months} months</div>
          </div>
        )}
        
        {shouldDisplayField(offer.annual_mileage) && (
          <div>
            <span className="text-gray-500">Annual Mileage:</span>
            <div className="font-semibold">{offer.annual_mileage.toLocaleString()} miles</div>
          </div>
        )}
      </div>

      {/* Optional Final Payment */}
      {shouldDisplayField(offer.final_payment) && offer.final_payment > 1 && (
        <div className="pt-2 border-t">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Optional Final Payment:</span>
            <span className="font-semibold text-lg">{formatPrice(offer.final_payment)}</span>
          </div>
        </div>
      )}

      {/* Total Amount Payable */}
      {shouldDisplayField(offer.total_payable) && (
        <div className="pt-2 border-t">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Total Amount Payable:</span>
            <span className="font-semibold text-lg">{formatPrice(offer.total_payable)}</span>
          </div>
        </div>
      )}

      {/* Additional Finance Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pt-2 border-t">
        {shouldDisplayField(offer.excess_mileage_charge) && (
          <div>
            <span className="text-gray-500">Excess Mileage:</span>
            <div className="font-medium">{offer.excess_mileage_charge}p per mile</div>
          </div>
        )}
        
        {shouldDisplayField(offer.documentation_fee) && (
          <div>
            <span className="text-gray-500">Documentation Fee:</span>
            <div className="font-medium">{formatPrice(offer.documentation_fee)}</div>
          </div>
        )}

        {shouldDisplayField(offer.option_to_purchase_fee) && (
          <div>
            <span className="text-gray-500">Option to Purchase Fee:</span>
            <div className="font-medium">{formatPrice(offer.option_to_purchase_fee)}</div>
          </div>
        )}
      </div>

      {/* Representative Example from Database */}
      {offer.representative_example && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Representative Example:</p>
              <p>{offer.representative_example}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EV3FinanceOfferCard;
