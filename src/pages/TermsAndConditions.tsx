
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsHeader from "@/components/terms/TermsHeader";
import TermsTableOfContents from "@/components/terms/TermsTableOfContents";
import TermsBasicSections from "@/components/terms/TermsBasicSections";
import TermsVehicleSalesSection from "@/components/terms/TermsVehicleSalesSection";
import TermsFinanceSection from "@/components/terms/TermsFinanceSection";
import TermsLegalSections from "@/components/terms/TermsLegalSections";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen font-inter">
      <SEOHead 
        pageSlug="terms-and-conditions"
        fallbackTitle="Terms and Conditions - Kia Stockton Ltd | DirectKia"
        fallbackDescription="Terms and conditions for Kia Stockton Ltd trading as DirectKia. Website usage terms, vehicle sales conditions, and legal agreements."
      />
      <Header />
      
      <main className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <TermsHeader />
            
            <div className="prose prose-lg max-w-none">
              <TermsTableOfContents />
              <TermsBasicSections />
              <TermsVehicleSalesSection />
              <TermsFinanceSection />
              <TermsLegalSections />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
