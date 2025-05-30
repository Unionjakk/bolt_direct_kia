
import { Zap, Truck, Star } from "lucide-react";

const TrustIndicators = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
      <div className="flex items-center gap-2 text-kia-charcoal">
        <Zap className="h-5 w-5 text-kia-red" />
        <span className="font-medium">EV Specialists</span>
      </div>
      <div className="flex items-center gap-2 text-kia-charcoal">
        <Truck className="h-5 w-5 text-kia-red" />
        <span className="font-medium">Free Delivery</span>
      </div>
      <div className="flex items-center gap-2 text-kia-charcoal">
        <Star className="h-5 w-5 text-kia-red" />
        <span className="font-medium">5★ Service</span>
      </div>
    </div>
  );
};

export default TrustIndicators;
