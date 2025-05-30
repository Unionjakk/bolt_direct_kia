
import { Zap, Battery, Star } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const HeroSection = () => {
  const { data: seoData, isLoading } = useSEO('new-cars');

  // Use the database title if available, otherwise show the expected title immediately
  const title = seoData?.h1_title || "New Kia Cars";

  return (
    <section className="bg-gradient-to-br from-kia-silver via-white to-kia-gray-light py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-4xl lg:text-6xl font-bold text-kia-charcoal mb-6 font-inter transition-opacity duration-300 ${isLoading ? 'opacity-70' : 'opacity-100'}`}>
            {title}
          </h1>
          <p className="text-xl text-kia-gray-medium mb-8 leading-relaxed">
            Discover Kia's latest electric vehicles - the future of driving is here. 
            From compact crossovers to flagship SUVs, explore our new car range 
            featuring cutting-edge electric technology.
          </p>
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            <div className="flex items-center gap-2 text-kia-charcoal">
              <Zap className="h-5 w-5 text-kia-red" />
              <span className="font-medium">Ultra-Fast Charging</span>
            </div>
            <div className="flex items-center gap-2 text-kia-charcoal">
              <Battery className="h-5 w-5 text-kia-red" />
              <span className="font-medium">Up to 390 Miles Range</span>
            </div>
            <div className="flex items-center gap-2 text-kia-charcoal">
              <Star className="h-5 w-5 text-kia-red" />
              <span className="font-medium">7-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
