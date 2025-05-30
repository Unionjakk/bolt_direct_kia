import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Car, Shield, Award } from "lucide-react";
const FeaturedSections = () => {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-kia-charcoal mb-4">
            Why Choose DirectKia?
          </h2>
          <p className="text-xl text-kia-gray-medium max-w-2xl mx-auto">New Kia car buying with outstanding value. Family company offering national delivery on all New and Used Kia - Direct Kia.</p>
        </div>

        {/* Feature cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
            <div className="bg-kia-red/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Zap className="h-8 w-8 text-kia-red" />
            </div>
            <h3 className="text-xl font-bold text-kia-charcoal mb-4">EV Specialists</h3>
            <p className="text-kia-gray-medium mb-6">
              Leading the electric revolution with the latest Kia EV models including EV6, EV9, and Niro EV.
            </p>
            <Button variant="outline" className="border-kia-red text-kia-red hover:bg-kia-red hover:text-white">
              Explore EVs
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
            <div className="bg-kia-red/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Car className="h-8 w-8 text-kia-red" />
            </div>
            <h3 className="text-xl font-bold text-kia-charcoal mb-4">National Delivery</h3>
            <p className="text-kia-gray-medium mb-6">
              Free delivery anywhere in the UK. Your perfect Kia delivered directly to your doorstep.
            </p>
            <Button variant="outline" className="border-kia-red text-kia-red hover:bg-kia-red hover:text-white">
              Learn More
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
            <div className="bg-kia-red/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Award className="h-8 w-8 text-kia-red" />
            </div>
            <h3 className="text-xl font-bold text-kia-charcoal mb-4">Best Prices</h3>
            <p className="text-kia-gray-medium mb-6">
              Guaranteed competitive pricing on both new and used Kia vehicles. Save thousands.
            </p>
            <Button variant="outline" className="border-kia-red text-kia-red hover:bg-kia-red hover:text-white">
              Get Quote
            </Button>
          </Card>
        </div>

        {/* CTA sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* New Cars */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-kia-red to-kia-red-dark text-white">
            <div className="p-8 lg:p-12">
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">New Kia Cars</h3>
                <p className="text-lg mb-6 opacity-90">
                  Discover the latest Kia models with manufacturer warranties and the newest technology.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="h-5 w-5" />
                  <span>7-Year Warranty</span>
                </div>
                <Button className="bg-white text-kia-red hover:bg-gray-100" onClick={() => window.location.href = '/new-cars'}>
                  Browse New Cars <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          </Card>

          {/* Used Cars */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-kia-charcoal to-gray-800 text-white">
            <div className="p-8 lg:p-12">
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Used Kia Cars</h3>
                <p className="text-lg mb-6 opacity-90">
                  Quality assured pre-owned Kia vehicles with comprehensive history checks.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="h-5 w-5" />
                  <span>Quality Guarantee</span>
                </div>
                <Button className="bg-white text-kia-charcoal hover:bg-gray-100" onClick={() => window.location.href = '/used-cars'}>
                  Browse Used Cars <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          </Card>
        </div>
      </div>
    </section>;
};
export default FeaturedSections;