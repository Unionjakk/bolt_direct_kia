
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useSEO } from "@/hooks/useSEO";
import { Phone, Clock } from "lucide-react";

const Contact = () => {
  const { data: seoData } = useSEO('contact');

  return (
    <div className="min-h-screen font-inter">
      <SEOHead 
        pageSlug="contact"
        fallbackTitle="Contact DirectKia - Get in Touch | DirectKia"
        fallbackDescription="Contact DirectKia for all your Kia vehicle needs. Call us on 01642 632 299 or use our contact form. Expert advice and exceptional service."
      />
      <Header />
      
      <section className="py-16 bg-gradient-to-b from-kia-silver to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-kia-charcoal mb-6">
                {seoData?.h1_title || "Contact DirectKia"}
              </h1>
              <p className="text-xl text-kia-gray-medium max-w-3xl mx-auto">
                Get in touch with our expert team for all your Kia vehicle needs. 
                We're here to help with sales, finance, and any questions you may have.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-kia-charcoal mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-kia-gray-light rounded-lg">
                    <div className="bg-kia-red p-3 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-kia-charcoal">Call Us</h3>
                      <p className="text-2xl font-bold text-kia-red">01642 632 299</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-kia-gray-light rounded-lg">
                    <div className="bg-kia-red p-3 rounded-full">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-kia-charcoal">Opening Hours</h3>
                      <p className="text-kia-gray-medium">6 Days 9AM - 6PM</p>
                      <p className="text-kia-gray-medium">Sunday 10AM - 4PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-kia-red rounded-lg text-white">
                  <h3 className="font-bold text-xl mb-2">Why Choose DirectKia?</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Authorised Kia Dealer</li>
                    <li>• National Delivery Available</li>
                    <li>• Expert Finance Options</li>
                    <li>• Professional Service Team</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
