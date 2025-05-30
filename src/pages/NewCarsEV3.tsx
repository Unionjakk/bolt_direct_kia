
import React from 'react';
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EV3OffersGrid from "@/components/ev3/EV3OffersGrid";
import EV3HeroSection from "@/components/ev3/EV3HeroSection";
import EV3Information from "@/components/ev3/EV3Information";
import EV3CallToAction from "@/components/ev3/EV3CallToAction";

const NewCarsEV3 = () => {
  return (
    <div className="min-h-screen font-inter bg-white">
      <SEOHead 
        pageSlug="new-cars-ev3"
        fallbackTitle="New Kia EV3 Offers | Electric SUV | DirectKia"
        fallbackDescription="Discover the all-new Kia EV3 electric SUV with up to 372 miles range. View current offers, specifications, and book your test drive today."
      />
      
      <Header />
      <EV3OffersGrid />
      <EV3HeroSection />
      <EV3Information />
      <EV3CallToAction />
      <Footer />
    </div>
  );
};

export default NewCarsEV3;
