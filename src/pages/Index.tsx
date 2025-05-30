
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedSections from "@/components/FeaturedSections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <SEOHead 
        pageSlug="home"
        fallbackTitle="DirectKia - New & Used Kia Cars | National Delivery | UK"
        fallbackDescription="DirectKia offers new and used Kia cars at discounted prices with national delivery across the UK. Specializing in Kia EVs and quality used vehicles."
      />
      <Header />
      <Hero />
      <FeaturedSections />
      <Footer />
    </div>
  );
};

export default Index;
