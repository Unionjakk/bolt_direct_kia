
import TrustIndicators from "./TrustIndicators";

const HeroContent = () => {
  return (
    <div className="text-center lg:text-left animate-fade-in">
      <h1 className="text-4xl lg:text-6xl font-bold text-kia-charcoal mb-6 font-inter">
        New & Used <span className="text-kia-red">Kia</span> Cars
      </h1>
      <p className="text-xl text-kia-gray-medium mb-8 leading-relaxed">
        Discover discounted prices on new Kia EVs and quality used vehicles. 
        <span className="font-semibold text-kia-charcoal"> National delivery available</span> across the UK.
      </p>
      
      <TrustIndicators />
    </div>
  );
};

export default HeroContent;
