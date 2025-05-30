
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Car, CreditCard, FileText, RefreshCw } from "lucide-react";

const Finance = () => {
  return (
    <div className="min-h-screen font-inter">
      <SEOHead 
        pageSlug="finance"
        fallbackTitle="Car Finance Options - PCP, HP, PCH & Cash | DirectKia"
        fallbackDescription="Explore flexible car finance options at DirectKia. Choose from PCP, HP, PCH lease, cash purchase or part exchange. Get competitive rates on your new Kia."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-kia-charcoal to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Car Finance Made Simple
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Choose from four flexible ways to drive away your new Kia. From cash purchase to competitive finance deals, we'll help you find the perfect solution for your budget.
            </p>
          </div>
        </div>
      </section>

      {/* Finance Options Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-kia-charcoal mb-12">
              Four Ways to Get Your Kia
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <CreditCard className="w-12 h-12 text-kia-red mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-kia-charcoal mb-2">Cash Purchase</h3>
                  <p className="text-gray-600">Buy outright with no monthly payments</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <FileText className="w-12 h-12 text-kia-red mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-kia-charcoal mb-2">Finance</h3>
                  <p className="text-gray-600">PCP or HP with flexible terms</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <Car className="w-12 h-12 text-kia-red mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-kia-charcoal mb-2">Lease</h3>
                  <p className="text-gray-600">PCH with maintenance options</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <RefreshCw className="w-12 h-12 text-kia-red mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-kia-charcoal mb-2">Part Exchange</h3>
                  <p className="text-gray-600">Trade in your current vehicle</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cash Purchase Section */}
      <section className="py-16 bg-kia-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-kia-charcoal mb-6">Cash Purchase</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The simplest way to buy your new Kia. Pay the full amount upfront and enjoy immediate ownership with no monthly commitments or interest charges.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-kia-charcoal">No Interest Charges</h3>
                      <p className="text-gray-600">Pay the agreed price with no additional finance costs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-kia-charcoal">Immediate Ownership</h3>
                      <p className="text-gray-600">The vehicle is yours from day one with full ownership rights</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-kia-charcoal">No Monthly Payments</h3>
                      <p className="text-gray-600">One payment and you're done - no ongoing commitments</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-kia-charcoal">Freedom to Modify</h3>
                      <p className="text-gray-600">Personalise your vehicle without finance restrictions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-kia-charcoal mb-4">Why Choose Cash?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Best overall value with no interest</li>
                  <li>• Stronger negotiating position</li>
                  <li>• No credit checks required</li>
                  <li>• Simplified paperwork</li>
                  <li>• No mileage restrictions</li>
                  <li>• Full control over vehicle maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Section - PCP & HP */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-kia-charcoal mb-12">Finance Options</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* PCP Card */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-kia-charcoal mb-4">Personal Contract Purchase (PCP)</h3>
                  <p className="text-gray-700 mb-6">
                    Lower monthly payments with flexibility at the end of your agreement. Perfect if you like to change your car regularly.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Lower monthly payments than HP</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Three options at the end: return, exchange, or keep</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Guaranteed Minimum Future Value</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Comprehensive insurance required</span>
                    </div>
                  </div>
                  
                  <div className="bg-kia-gray-light p-4 rounded-lg">
                    <h4 className="font-semibold text-kia-charcoal mb-2">How PCP Works:</h4>
                    <p className="text-sm text-gray-600">
                      You pay a deposit, then monthly payments for an agreed period. At the end, you can return the car, part-exchange for a new one, or pay the balloon payment to keep it.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* HP Card */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-kia-charcoal mb-4">Hire Purchase (HP)</h3>
                  <p className="text-gray-700 mb-6">
                    Straightforward finance with fixed monthly payments. The car becomes yours at the end of the agreement.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Fixed monthly payments</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Automatic ownership at the end</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">No mileage restrictions</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Simple and transparent</span>
                    </div>
                  </div>
                  
                  <div className="bg-kia-gray-light p-4 rounded-lg">
                    <h4 className="font-semibold text-kia-charcoal mb-2">How HP Works:</h4>
                    <p className="text-sm text-gray-600">
                      You pay a deposit, then equal monthly instalments. Once you've made all payments, the vehicle automatically becomes yours with no additional fees.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lease Section - PCH */}
      <section className="py-16 bg-kia-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-kia-charcoal mb-4">Lease Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Fixed monthly costs for better budgeting</li>
                  <li>• Maintenance packages available</li>
                  <li>• No depreciation worries</li>
                  <li>• Upgrade to latest models regularly</li>
                  <li>• Potential tax benefits for businesses</li>
                  <li>• Professional warranty coverage</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-kia-charcoal mb-6">Personal Contract Hire (PCH)</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Lease your Kia with fixed monthly payments and no ownership responsibilities. Perfect for both personal and business use with optional maintenance packages.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-kia-charcoal">Fixed Monthly Payments</h3>
                      <p className="text-gray-600">Predictable costs throughout your lease period</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-kia-charcoal">Maintenance Included</h3>
                      <p className="text-gray-600">Optional servicing and maintenance packages available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-kia-charcoal">Latest Technology</h3>
                      <p className="text-gray-600">Always drive the newest models with latest features</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-kia-charcoal">Business Benefits</h3>
                      <p className="text-gray-600">Potential tax advantages for business users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part Exchange Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-kia-charcoal mb-12">Part Exchange Your Current Vehicle</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent>
                  <div className="w-16 h-16 bg-kia-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-kia-charcoal mb-3">Get Your Valuation</h3>
                  <p className="text-gray-600">
                    We'll assess your current vehicle and provide a competitive valuation based on current market conditions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent>
                  <div className="w-16 h-16 bg-kia-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-kia-charcoal mb-3">Offset Your Purchase</h3>
                  <p className="text-gray-600">
                    Use your vehicle's value as a deposit or to reduce the final price of your new Kia.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent>
                  <div className="w-16 h-16 bg-kia-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-kia-charcoal mb-3">Simple Process</h3>
                  <p className="text-gray-600">
                    We handle all the paperwork and logistics. Drive away in your new Kia the same day.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 bg-kia-gray-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-kia-charcoal mb-4 text-center">Part Exchange Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-kia-charcoal mb-3">For You:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• No hassle selling privately</li>
                    <li>• Immediate value realisation</li>
                    <li>• Reduce your new car cost</li>
                    <li>• One-stop transaction</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-kia-charcoal mb-3">What We Accept:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Any make or model</li>
                    <li>• Various conditions considered</li>
                    <li>• Outstanding finance arrangements</li>
                    <li>• Honest, transparent valuations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-kia-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Explore Your Options?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Our finance specialists are here to help you find the perfect solution for your budget and lifestyle. Get in touch today for a personalised quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
              >
                <a href="/contact">Get Finance Quote</a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
              >
                <a href="/new-cars">View New Kia Models</a>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-semibold mb-2">Competitive Rates</h3>
                <p className="text-gray-300">We work with multiple lenders to find you the best deal</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Expert Advice</h3>
                <p className="text-gray-300">Our specialists will guide you through every option</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Quick Decisions</h3>
                <p className="text-gray-300">Fast approval process to get you driving sooner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Finance;
