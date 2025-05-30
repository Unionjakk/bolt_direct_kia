
import { Zap, Battery, Leaf, Shield } from "lucide-react";
import BenefitItem from "./BenefitItem";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Ultra-Fast Charging",
      description: "Charge from 10-80% in as little as 18 minutes with 800V technology"
    },
    {
      icon: Battery,
      title: "Long Range",
      description: "Travel up to 390 miles on a single charge with advanced battery technology"
    },
    {
      icon: Leaf,
      title: "Zero Emissions",
      description: "Contribute to a cleaner environment with zero tailpipe emissions"
    },
    {
      icon: Shield,
      title: "7-Year Warranty",
      description: "Industry-leading 7-year/100,000-mile warranty for peace of mind"
    }
  ];

  return (
    <section className="py-16 bg-kia-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-kia-charcoal mb-4">
            Why Choose Our New Cars?
          </h2>
          <p className="text-lg text-kia-gray-medium max-w-2xl mx-auto">
            Our new Kia vehicles represent the perfect fusion of innovation, 
            sustainability, and performance, designed for the modern driver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitItem 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
