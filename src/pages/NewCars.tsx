
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/electric/HeroSection";
import VehicleGrid from "@/components/electric/VehicleGrid";
import BenefitsSection from "@/components/electric/BenefitsSection";
import TechnologySection from "@/components/electric/TechnologySection";
import CTASection from "@/components/electric/CTASection";

const NewCars = () => {
  return (
    <>
      <SEOHead 
        pageSlug="new-cars"
        fallbackTitle="New Kia Cars | Latest Electric Models | DirectKia"
        fallbackDescription="Browse our selection of brand new Kia electric vehicles. Featuring the latest EV models with competitive pricing and nationwide delivery across the UK."
      />

      <div className="min-h-screen bg-white font-inter">
        <Header />
        <VehicleGrid />
        <HeroSection />
        <BenefitsSection />
        <TechnologySection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default NewCars;
