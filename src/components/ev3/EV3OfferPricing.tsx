
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { AlertTriangle } from 'lucide-react';

interface EV3OfferPricingProps {
  listPrice: number;
  finalPrice: number;
  savingsAmount: number;
  financeOffers: any;
}

const EV3OfferPricing = ({ listPrice, finalPrice, savingsAmount, financeOffers }: EV3OfferPricingProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-kia-charcoal">Pricing & Finance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Cash Price Section */}
        <div className="space-y-3">
          <h3 className="font-semibold text-kia-charcoal">Cash Price</h3>
          <div className="space-y-2">
            {listPrice > finalPrice ? (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">List Price:</span>
                  <span className="text-gray-500 line-through">{formatPrice(listPrice)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Our Price:</span>
                  <span className="text-2xl font-bold text-kia-red">{formatPrice(finalPrice)}</span>
                </div>
                {savingsAmount > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-medium">You Save:</span>
                    <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">
                      {formatPrice(savingsAmount)}
                    </Badge>
                  </div>
                )}
              </>
            ) : (
              <div className="flex justify-between items-center">
                <span className="font-medium">Price:</span>
                <span className="text-2xl font-bold text-kia-charcoal">{formatPrice(finalPrice)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Finance Options */}
        {financeOffers && Array.isArray(financeOffers) && financeOffers.length > 0 && (
          <>
            <Separator />
            <div className="space-y-4">
              <h3 className="font-semibold text-kia-charcoal">Finance Options</h3>
              {financeOffers.map((offer, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-kia-charcoal">{getFinanceTypeLabel(offer.type)}</h4>
                    {offer.representative_apr && (
                      <Badge variant="outline" className="font-semibold">
                        {offer.representative_apr}% APR Representative
                      </Badge>
                    )}
                  </div>
                  
                  {/* Key Finance Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {offer.monthly_payment && (
                      <div>
                        <span className="text-gray-500">Monthly Payment:</span>
                        <div className="font-semibold text-lg">{formatPrice(offer.monthly_payment)}/month</div>
                      </div>
                    )}
                    
                    {offer.customer_deposit && (
                      <div>
                        <span className="text-gray-500">Customer Deposit:</span>
                        <div className="font-semibold">{formatPrice(offer.customer_deposit)}</div>
                      </div>
                    )}
                    
                    {offer.contract_length_months && (
                      <div>
                        <span className="text-gray-500">Contract Length:</span>
                        <div className="font-semibold">{offer.contract_length_months} months</div>
                      </div>
                    )}
                    
                    {offer.annual_mileage && (
                      <div>
                        <span className="text-gray-500">Annual Mileage:</span>
                        <div className="font-semibold">{offer.annual_mileage.toLocaleString()} miles</div>
                      </div>
                    )}
                  </div>

                  {/* Optional Final Payment */}
                  {offer.optional_final_payment && (
                    <div className="pt-2 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Optional Final Payment:</span>
                        <span className="font-semibold text-lg">{formatPrice(offer.optional_final_payment)}</span>
                      </div>
                    </div>
                  )}

                  {/* Total Amount Payable */}
                  {offer.total_amount_payable && (
                    <div className="pt-2 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Total Amount Payable:</span>
                        <span className="font-semibold text-lg">{formatPrice(offer.total_amount_payable)}</span>
                      </div>
                    </div>
                  )}

                  {/* Additional Finance Terms */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pt-2 border-t">
                    {offer.excess_mileage_charge && (
                      <div>
                        <span className="text-gray-500">Excess Mileage:</span>
                        <div className="font-medium">{offer.excess_mileage_charge}p per mile</div>
                      </div>
                    )}
                    
                    {offer.documentation_fee && (
                      <div>
                        <span className="text-gray-500">Documentation Fee:</span>
                        <div className="font-medium">{formatPrice(offer.documentation_fee)}</div>
                      </div>
                    )}

                    {offer.option_to_purchase_fee && (
                      <div>
                        <span className="text-gray-500">Option to Purchase Fee:</span>
                        <div className="font-medium">{formatPrice(offer.option_to_purchase_fee)}</div>
                      </div>
                    )}
                  </div>

                  {/* Representative Example Warning */}
                  {offer.representative_apr && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-blue-800">
                          <p className="font-medium mb-1">Representative Example:</p>
                          <p>
                            Cash price {formatPrice(finalPrice)}, deposit {formatPrice(offer.customer_deposit || 0)}, 
                            amount of credit {formatPrice((finalPrice - (offer.customer_deposit || 0)))}, 
                            {offer.contract_length_months} monthly payments of {formatPrice(offer.monthly_payment || 0)}, 
                            optional final payment {formatPrice(offer.optional_final_payment || 0)}, 
                            total amount payable {formatPrice(offer.total_amount_payable || 0)}, 
                            representative APR {offer.representative_apr}%.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Legal Disclaimers */}
        <div className="text-xs text-gray-500 space-y-2 pt-4 border-t">
          <p>* Finance subject to status. Terms and conditions apply. Applicants must be 18 or over.</p>
          <p>* Representative example based on personal contract purchase. Representative APR applies to new applications only.</p>
          <p>* Written quotations available on request from authorised Kia dealer.</p>
          <p>* Excess mileage charges apply. Fair wear and tear conditions apply.</p>
          <p>* Finance provided by Kia Finance, authorised and regulated by the Financial Conduct Authority.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EV3OfferPricing;
