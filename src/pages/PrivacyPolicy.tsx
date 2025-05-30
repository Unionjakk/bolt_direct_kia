
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen font-inter">
      <SEOHead 
        pageSlug="privacy-policy"
        fallbackTitle="Privacy Policy - Kia Stockton Ltd | DirectKia"
        fallbackDescription="Privacy policy for Kia Stockton Ltd trading as DirectKia. Learn how we collect, use and protect your personal data."
      />
      <Header />
      
      <main className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-kia-charcoal mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-kia-silver p-6 rounded-lg mb-8">
                <p className="text-kia-charcoal mb-2"><strong>Last updated:</strong> December 2024</p>
                <p className="text-kia-charcoal"><strong>Company:</strong> Kia Stockton Ltd (trading as DirectKia)</p>
              </div>

              {/* Table of Contents */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-kia-charcoal mb-4">Contents</h2>
                <ul className="space-y-2">
                  <li><a href="#introduction" className="text-kia-red hover:text-kia-red-dark">1. Introduction</a></li>
                  <li><a href="#company-details" className="text-kia-red hover:text-kia-red-dark">2. Company Details</a></li>
                  <li><a href="#data-collection" className="text-kia-red hover:text-kia-red-dark">3. What Information We Collect</a></li>
                  <li><a href="#data-usage" className="text-kia-red hover:text-kia-red-dark">4. How We Use Your Information</a></li>
                  <li><a href="#legal-basis" className="text-kia-red hover:text-kia-red-dark">5. Legal Basis for Processing</a></li>
                  <li><a href="#data-sharing" className="text-kia-red hover:text-kia-red-dark">6. Sharing Your Information</a></li>
                  <li><a href="#data-rights" className="text-kia-red hover:text-kia-red-dark">7. Your Rights</a></li>
                  <li><a href="#data-security" className="text-kia-red hover:text-kia-red-dark">8. Data Security</a></li>
                  <li><a href="#data-retention" className="text-kia-red hover:text-kia-red-dark">9. Data Retention</a></li>
                  <li><a href="#cookies" className="text-kia-red hover:text-kia-red-dark">10. Cookies</a></li>
                  <li><a href="#contact" className="text-kia-red hover:text-kia-red-dark">11. Contact Us</a></li>
                  <li><a href="#changes" className="text-kia-red hover:text-kia-red-dark">12. Changes to This Policy</a></li>
                </ul>
              </div>

              {/* Introduction */}
              <section id="introduction" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Kia Stockton Ltd (trading as DirectKia) is committed to protecting your privacy and personal information. 
                  This privacy policy explains how we collect, use, store, and protect your personal data when you use our 
                  services or visit our website.
                </p>
                <p className="text-gray-700 mb-4">
                  We are authorised Kia dealers specialising in new and used Kia vehicles across the UK, providing 
                  exceptional service, competitive prices, and nationwide delivery.
                </p>
              </section>

              {/* Company Details */}
              <section id="company-details" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">2. Company Details</h2>
                <div className="bg-kia-gray-light p-4 rounded">
                  <p className="text-gray-700 mb-2"><strong>Company Name:</strong> Kia Stockton Ltd</p>
                  <p className="text-gray-700 mb-2"><strong>Trading Name:</strong> DirectKia</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> 01642 632 299</p>
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> info@directkia.co.uk</p>
                  <p className="text-gray-700"><strong>Data Protection Officer:</strong> privacy@directkia.co.uk</p>
                </div>
              </section>

              {/* Data Collection */}
              <section id="data-collection" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">3. What Information We Collect</h2>
                <p className="text-gray-700 mb-4">We may collect the following types of personal information:</p>
                
                <h3 className="text-xl font-semibold text-kia-charcoal mb-3">Personal Details</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Name, address, phone number, email address</li>
                  <li>Date of birth and driving licence details</li>
                  <li>Financial information for vehicle finance applications</li>
                  <li>Employment details and income information</li>
                </ul>

                <h3 className="text-xl font-semibold text-kia-charcoal mb-3">Vehicle Information</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Current vehicle details for part exchange valuations</li>
                  <li>Vehicle preferences and requirements</li>
                  <li>Service history and warranty information</li>
                </ul>

                <h3 className="text-xl font-semibold text-kia-charcoal mb-3">Website Usage</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Search queries and form submissions</li>
                  <li>Cookie and tracking data</li>
                </ul>
              </section>

              {/* Data Usage */}
              <section id="data-usage" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">4. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use your personal information for the following purposes:</p>
                
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Processing vehicle sales and purchase transactions</li>
                  <li>Arranging vehicle finance and insurance</li>
                  <li>Providing after-sales service and warranty support</li>
                  <li>Vehicle delivery and collection services</li>
                  <li>Part exchange valuations and vehicle history checks</li>
                  <li>Marketing communications (with your consent)</li>
                  <li>Improving our website and services</li>
                  <li>Compliance with legal and regulatory requirements</li>
                </ul>
              </section>

              {/* Legal Basis */}
              <section id="legal-basis" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">5. Legal Basis for Processing</h2>
                <p className="text-gray-700 mb-4">We process your personal data under the following legal bases:</p>
                
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Contract Performance:</strong> To fulfil our obligations under sales contracts</li>
                  <li><strong>Legitimate Interests:</strong> For business operations and customer service</li>
                  <li><strong>Legal Compliance:</strong> To meet FCA and other regulatory requirements</li>
                  <li><strong>Consent:</strong> For marketing communications and non-essential cookies</li>
                </ul>
              </section>

              {/* Data Sharing */}
              <section id="data-sharing" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">6. Sharing Your Information</h2>
                <p className="text-gray-700 mb-4">We may share your information with:</p>
                
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Kia Motors UK:</strong> For warranty registration and recall notifications</li>
                  <li><strong>Finance Partners:</strong> For vehicle finance applications and credit checks</li>
                  <li><strong>Insurance Providers:</strong> For vehicle insurance quotations</li>
                  <li><strong>Delivery Services:</strong> For vehicle transportation and logistics</li>
                  <li><strong>Valuation Services:</strong> For part exchange vehicle assessments</li>
                  <li><strong>Service Providers:</strong> Including IT support, payment processing, and marketing</li>
                  <li><strong>Legal Authorities:</strong> When required by law or regulation</li>
                </ul>
                
                <p className="text-gray-700">
                  We ensure all third parties maintain appropriate data protection standards and only 
                  share information necessary for the specific service being provided.
                </p>
              </section>

              {/* Data Rights */}
              <section id="data-rights" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">7. Your Rights</h2>
                <p className="text-gray-700 mb-4">Under UK GDPR, you have the following rights:</p>
                
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Right of Access:</strong> Request copies of your personal data</li>
                  <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                  <li><strong>Right to Data Portability:</strong> Receive your data in a transferable format</li>
                  <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                  <li><strong>Rights Related to Automated Decision Making:</strong> Challenge automated decisions</li>
                </ul>
                
                <p className="text-gray-700 mb-4">
                  To exercise any of these rights, please contact us using the details in section 11. 
                  We will respond within one month of receiving your request.
                </p>
                
                <p className="text-gray-700">
                  If you are unsatisfied with our response, you have the right to complain to the 
                  Information Commissioner's Office (ICO) at ico.org.uk or by calling 0303 123 1113.
                </p>
              </section>

              {/* Data Security */}
              <section id="data-security" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">8. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organisational measures to protect your personal data:
                </p>
                
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Encrypted data transmission and storage</li>
                  <li>Regular security assessments and updates</li>
                  <li>Staff training on data protection procedures</li>
                  <li>Limited access controls and user permissions</li>
                  <li>Secure disposal of confidential documents</li>
                  <li>Regular backup and disaster recovery procedures</li>
                </ul>
              </section>

              {/* Data Retention */}
              <section id="data-retention" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">9. Data Retention</h2>
                <p className="text-gray-700 mb-4">We retain your personal data for different periods depending on the purpose:</p>
                
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Sales Records:</strong> 7 years after transaction completion</li>
                  <li><strong>Finance Applications:</strong> 7 years from application date</li>
                  <li><strong>Service Records:</strong> Duration of vehicle ownership plus 7 years</li>
                  <li><strong>Marketing Consent:</strong> Until consent is withdrawn</li>
                  <li><strong>Website Analytics:</strong> 26 months from collection</li>
                  <li><strong>CCTV Footage:</strong> 30 days unless required for investigation</li>
                </ul>
              </section>

              {/* Cookies */}
              <section id="cookies" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">10. Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Our website uses cookies to enhance your browsing experience. We use:
                </p>
                
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> To understand how visitors use our site</li>
                  <li><strong>Marketing Cookies:</strong> To show relevant advertisements (with consent)</li>
                  <li><strong>Preference Cookies:</strong> To remember your settings and preferences</li>
                </ul>
                
                <p className="text-gray-700">
                  You can manage your cookie preferences through your browser settings or our cookie consent tool.
                </p>
              </section>

              {/* Contact */}
              <section id="contact" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">11. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this privacy policy or how we handle your personal data, please contact us:
                </p>
                
                <div className="bg-kia-gray-light p-4 rounded">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@directkia.co.uk</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> 01642 632 299</p>
                  <p className="text-gray-700 mb-2"><strong>Post:</strong> Data Protection Officer, Kia Stockton Ltd</p>
                  <p className="text-gray-700">Mon-Sat: 9AM-6PM</p>
                </div>
              </section>

              {/* Changes */}
              <section id="changes" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">12. Changes to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this privacy policy from time to time to reflect changes in our practices or 
                  applicable laws. We will notify you of any significant changes by posting the updated policy 
                  on our website with a new "last updated" date.
                </p>
                
                <p className="text-gray-700">
                  We encourage you to review this policy periodically to stay informed about how we protect your information.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
