
import { Gauge, Battery, Zap } from "lucide-react";

const TechnologySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-kia-charcoal mb-6">
              Advanced New Car Technology
            </h2>
            <p className="text-lg text-kia-gray-medium mb-6 leading-relaxed">
              Our new Kia vehicles feature cutting-edge electric innovation that 
              enhances every aspect of your driving experience. From revolutionary 
              800V architecture to intelligent battery management systems.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Gauge className="h-6 w-6 text-kia-red mt-1" />
                <div>
                  <h4 className="font-semibold text-kia-charcoal">800V Fast Charging</h4>
                  <p className="text-kia-gray-medium">Revolutionary charging speeds that minimize downtime</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Battery className="h-6 w-6 text-kia-red mt-1" />
                <div>
                  <h4 className="font-semibold text-kia-charcoal">Advanced Battery Management</h4>
                  <p className="text-kia-gray-medium">Optimised performance and longevity in all conditions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-kia-red mt-1" />
                <div>
                  <h4 className="font-semibold text-kia-charcoal">Regenerative Braking</h4>
                  <p className="text-kia-gray-medium">Intelligent energy recovery for extended range</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/images/kia-ev3-gtline-aventurinegreen-exterior-digital-1920x1080-001.webp" 
              alt="Kia EV3 GT-Line in Aventurine Green - New Car Technology" 
              className="rounded-lg shadow-xl w-full" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
