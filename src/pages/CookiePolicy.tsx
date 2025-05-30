
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen font-inter">
      <SEOHead 
        pageSlug="cookie-policy"
        fallbackTitle="Cookie Policy - Kia Stockton Ltd | DirectKia"
        fallbackDescription="Cookie policy for Kia Stockton Ltd trading as DirectKia. Learn about the cookies we use and how to manage your preferences."
      />
      <Header />
      
      <main className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-kia-charcoal mb-8">Cookie Policy</h1>
            
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
                  <li><a href="#what-are-cookies" className="text-kia-red hover:text-kia-red-dark">2. What Are Cookies?</a></li>
                  <li><a href="#cookies-we-use" className="text-kia-red hover:text-kia-red-dark">3. Cookies We Use</a></li>
                  <li><a href="#essential-cookies" className="text-kia-red hover:text-kia-red-dark">4. Essential Cookies</a></li>
                  <li><a href="#performance-cookies" className="text-kia-red hover:text-kia-red-dark">5. Performance Cookies</a></li>
                  <li><a href="#functional-cookies" className="text-kia-red hover:text-kia-red-dark">6. Functional Cookies</a></li>
                  <li><a href="#marketing-cookies" className="text-kia-red hover:text-kia-red-dark">7. Marketing Cookies</a></li>
                  <li><a href="#third-party-cookies" className="text-kia-red hover:text-kia-red-dark">8. Third-Party Cookies</a></li>
                  <li><a href="#managing-cookies" className="text-kia-red hover:text-kia-red-dark">9. Managing Your Cookie Preferences</a></li>
                  <li><a href="#browser-settings" className="text-kia-red hover:text-kia-red-dark">10. Browser Settings</a></li>
                  <li><a href="#legal-basis" className="text-kia-red hover:text-kia-red-dark">11. Legal Basis</a></li>
                  <li><a href="#contact" className="text-kia-red hover:text-kia-red-dark">12. Contact Us</a></li>
                  <li><a href="#changes" className="text-kia-red hover:text-kia-red-dark">13. Changes to This Policy</a></li>
                </ul>
              </div>

              {/* Introduction */}
              <section id="introduction" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Kia Stockton Ltd (trading as DirectKia) uses cookies and similar technologies on our website 
                  to provide you with the best possible experience. This Cookie Policy explains what cookies are, 
                  how we use them, and how you can manage your cookie preferences.
                </p>
                <p className="text-gray-700 mb-4">
                  By continuing to use our website, you consent to our use of cookies in accordance with this policy. 
                  You can withdraw your consent at any time by changing your browser settings or using our cookie 
                  preference centre.
                </p>
              </section>

              {/* What Are Cookies */}
              <section id="what-are-cookies" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">2. What Are Cookies?</h2>
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are placed on your computer, smartphone, or other device when 
                  you visit a website. They allow the website to recognise your device and store some information 
                  about your preferences or past actions.
                </p>
                <p className="text-gray-700 mb-4">
                  Cookies are widely used to make websites work more efficiently and to provide information to 
                  website owners. They help us understand how visitors use our website and enable us to improve 
                  the user experience.
                </p>
              </section>

              {/* Cookies We Use */}
              <section id="cookies-we-use" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">3. Cookies We Use</h2>
                <p className="text-gray-700 mb-4">We use four main types of cookies on our website:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-semibold text-kia-charcoal mb-2">Essential Cookies</h3>
                    <p className="text-gray-700 text-sm">Required for the website to function properly</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-semibold text-kia-charcoal mb-2">Performance Cookies</h3>
                    <p className="text-gray-700 text-sm">Help us understand how visitors interact with our website</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-semibold text-kia-charcoal mb-2">Functional Cookies</h3>
                    <p className="text-gray-700 text-sm">Remember your preferences and enhance your experience</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-semibold text-kia-charcoal mb-2">Marketing Cookies</h3>
                    <p className="text-gray-700 text-sm">Used to show you relevant advertisements</p>
                  </div>
                </div>
              </section>

              {/* Essential Cookies */}
              <section id="essential-cookies" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">4. Essential Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Essential cookies are necessary for our website to function properly. They enable basic functions 
                  like page navigation, access to secure areas, and form submissions. The website cannot function 
                  properly without these cookies.
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border border-gray-200 rounded">
                    <thead className="bg-kia-gray-light">
                      <tr>
                        <th className="border border-gray-200 p-3 text-left text-kia-charcoal">Cookie Name</th>
                        <th className="border border-gray-200 p-3 text-left text-kia-charcoal">Purpose</th>
                        <th className="border border-gray-200 p-3 text-left text-kia-charcoal">Expiry</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-3 text-gray-700">session_id</td>
                        <td className="border border-gray-200 p-3 text-gray-700">Maintains your session while browsing</td>
                        <td className="border border-gray-200 p-3 text-gray-700">Session</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 text-gray-700">csrf_token</td>
                        <td className="border border-gray-200 p-3 text-gray-700">Security protection for forms</td>
                        <td className="border border-gray-200 p-3 text-gray-700">Session</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 text-gray-700">cookie_consent</td>
                        <td className="border border-gray-200 p-3 text-gray-700">Remembers your cookie preferences</td>
                        <td className="border border-gray-200 p-3 text-gray-700">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Performance Cookies */}
              <section id="performance-cookies" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">5. Performance Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Performance cookies collect information about how visitors use our website, such as which pages 
                  are visited most often and if users get error messages from web pages. This information helps 
                  us improve how our website works.
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border border-gray-200 rounded">
                    <thead className="bg-kia-gray-light">
                      <tr>
                        <th className="border border-gray-200 p-3 text-left text-kia-charcoal">Cookie Name</th>
                        <th className="border border-gray-200 p-3 text-left text-kia-charcoal">Purpose</th>
                        <th className="border border-gray-200 p-3 text-left text-kia-charcoal">Expiry</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-3 text-gray-700">_ga</td>
                        <td className="border border-gray-200 p-3 text-gray-700">Google Analytics - tracks website usage</td>
                        <td className="border border-gray-200 p-3 text-gray-700">2 years</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 text-gray-700">_ga_*</td>
                        <td className="border border-gray-200 p-3 text-gray-700">Google Analytics 4 - enhanced tracking</td>
                        <td className="border border-gray-200 p-3 text-gray-700">2 years</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 text-gray-700">_gid</td>
                        <td className="border border-gray-200 p-3 text-gray-700">Google Analytics - distinguishes users</td>
                        <td className="border border-gray-200 p-3 text-gray-700">24 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Functional Cookies */}
              <section id="functional-cookies" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">6. Functional Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Functional cookies allow our website to remember choices you make and provide enhanced, 
                  personalised features. They may be set by us or by third-party providers whose services 
                  we have added to our pages.
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border border-gray-200 rounded">
                    <thead className="bg-kia-gray-light">
                      <tr>
                        <th className="border border-gray-200 p-3 text-left text-kia-charcoal">Cookie Name</th>
                        <th className="border border-gray-200 p-3 text-left text-kia-charcoal">Purpose</th>
                        <th className="border border-gray-200 p-3 text-left text-kia-charcoal">Expiry</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-3 text-gray-700">user_preferences</td>
                        <td className="border border-gray-200 p-3 text-gray-700">Remembers your website preferences</td>
                        <td className="border border-gray-200 p-3 text-gray-700">6 months</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 text-gray-700">search_filters</td>
                        <td className="border border-gray-200 p-3 text-gray-700">Saves your vehicle search preferences</td>
                        <td className="border border-gray-200 p-3 text-gray-700">30 days</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 text-gray-700">location_data</td>
                        <td className="border border-gray-200 p-3 text-gray-700">Remembers your location for delivery</td>
                        <td className="border border-gray-200 p-3 text-gray-700">90 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Marketing Cookies */}
              <section id="marketing-cookies" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">7. Marketing Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Marketing cookies are used to track visitors across websites. They are used to display 
                  advertisements that are relevant and engaging for individual users, making them more 
                  valuable for publishers and third-party advertisers.
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border border-gray-200 rounded">
                    <thead className="bg-kia-gray-light">
                      <tr>
                        <th className="border border-gray-200 p-3 text-left text-kia-charcoal">Cookie Name</th>
                        <th className="border border-gray-200 p-3 text-left text-kia-charcoal">Purpose</th>
                        <th className="border border-gray-200 p-3 text-left text-kia-charcoal">Expiry</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-3 text-gray-700">_fbp</td>
                        <td className="border border-gray-200 p-3 text-gray-700">Facebook Pixel - tracks conversions</td>
                        <td className="border border-gray-200 p-3 text-gray-700">3 months</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 text-gray-700">_gcl_au</td>
                        <td className="border border-gray-200 p-3 text-gray-700">Google Ads - conversion tracking</td>
                        <td className="border border-gray-200 p-3 text-gray-700">90 days</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 text-gray-700">fr</td>
                        <td className="border border-gray-200 p-3 text-gray-700">Facebook - ad delivery and measurement</td>
                        <td className="border border-gray-200 p-3 text-gray-700">3 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Third-Party Cookies */}
              <section id="third-party-cookies" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">8. Third-Party Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We use several third-party services that may set their own cookies. These services help us 
                  provide better functionality and understand how our website is being used.
                </p>
                
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Google Analytics:</strong> Website traffic analysis and user behaviour tracking</li>
                  <li><strong>Google Ads:</strong> Conversion tracking and remarketing</li>
                  <li><strong>Facebook:</strong> Social media integration and advertising</li>
                  <li><strong>YouTube:</strong> Video content embedded on our pages</li>
                  <li><strong>reCAPTCHA:</strong> Spam protection on forms</li>
                  <li><strong>Live Chat:</strong> Customer support functionality</li>
                </ul>
                
                <p className="text-gray-700">
                  These third-party services have their own privacy policies and cookie policies, 
                  which we encourage you to read.
                </p>
              </section>

              {/* Managing Cookies */}
              <section id="managing-cookies" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">9. Managing Your Cookie Preferences</h2>
                <p className="text-gray-700 mb-4">
                  You have several options for managing cookies on our website:
                </p>
                
                <div className="bg-kia-gray-light p-4 rounded mb-4">
                  <h3 className="text-lg font-semibold text-kia-charcoal mb-2">Cookie Consent Banner</h3>
                  <p className="text-gray-700 text-sm">
                    When you first visit our website, you'll see a cookie consent banner where you can 
                    choose which types of cookies to accept.
                  </p>
                </div>
                
                <div className="bg-kia-gray-light p-4 rounded mb-4">
                  <h3 className="text-lg font-semibold text-kia-charcoal mb-2">Browser Settings</h3>
                  <p className="text-gray-700 text-sm">
                    You can control cookies through your browser settings. See the next section for 
                    detailed instructions for popular browsers.
                  </p>
                </div>
                
                <div className="bg-kia-gray-light p-4 rounded mb-4">
                  <h3 className="text-lg font-semibold text-kia-charcoal mb-2">Third-Party Opt-Outs</h3>
                  <p className="text-gray-700 text-sm">
                    You can opt out of specific third-party cookies by visiting their respective 
                    opt-out pages.
                  </p>
                </div>
              </section>

              {/* Browser Settings */}
              <section id="browser-settings" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">10. Browser Settings</h2>
                <p className="text-gray-700 mb-4">
                  Here's how to manage cookies in the most popular web browsers:
                </p>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-semibold text-kia-charcoal mb-2">Google Chrome</h3>
                    <ol className="list-decimal pl-6 text-gray-700 text-sm space-y-1">
                      <li>Click the three dots menu in the top right corner</li>
                      <li>Select "Settings"</li>
                      <li>Click "Privacy and security" in the left sidebar</li>
                      <li>Click "Cookies and other site data"</li>
                      <li>Choose your preferred cookie settings</li>
                    </ol>
                  </div>
                  
                  <div className="border border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-semibold text-kia-charcoal mb-2">Mozilla Firefox</h3>
                    <ol className="list-decimal pl-6 text-gray-700 text-sm space-y-1">
                      <li>Click the three lines menu in the top right corner</li>
                      <li>Select "Settings"</li>
                      <li>Click "Privacy & Security" in the left sidebar</li>
                      <li>Scroll down to "Cookies and Site Data"</li>
                      <li>Adjust your cookie preferences</li>
                    </ol>
                  </div>
                  
                  <div className="border border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-semibold text-kia-charcoal mb-2">Safari</h3>
                    <ol className="list-decimal pl-6 text-gray-700 text-sm space-y-1">
                      <li>Click "Safari" in the menu bar</li>
                      <li>Select "Preferences"</li>
                      <li>Click the "Privacy" tab</li>
                      <li>Choose your cookie blocking preferences</li>
                      <li>Close the preferences window</li>
                    </ol>
                  </div>
                  
                  <div className="border border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-semibold text-kia-charcoal mb-2">Microsoft Edge</h3>
                    <ol className="list-decimal pl-6 text-gray-700 text-sm space-y-1">
                      <li>Click the three dots menu in the top right corner</li>
                      <li>Select "Settings"</li>
                      <li>Click "Cookies and site permissions" in the left sidebar</li>
                      <li>Click "Cookies and site data"</li>
                      <li>Configure your cookie settings</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Legal Basis */}
              <section id="legal-basis" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">11. Legal Basis</h2>
                <p className="text-gray-700 mb-4">
                  Our use of cookies is governed by UK GDPR and the Privacy and Electronic Communications 
                  Regulations (PECR). We use cookies based on the following legal grounds:
                </p>
                
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Strictly Necessary:</strong> Essential cookies don't require consent as they're necessary for the website to function</li>
                  <li><strong>Legitimate Interest:</strong> Performance cookies help us improve our website based on legitimate business interests</li>
                  <li><strong>Consent:</strong> Marketing and non-essential cookies require your explicit consent</li>
                </ul>
                
                <p className="text-gray-700">
                  You can withdraw your consent at any time by changing your browser settings or contacting us directly.
                </p>
              </section>

              {/* Contact */}
              <section id="contact" className="mb-8">
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">12. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
                <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">13. Changes to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or applicable laws. We will notify you of any significant changes by posting the updated 
                  policy on our website with a new "last updated" date.
                </p>
                
                <p className="text-gray-700">
                  We recommend checking this policy periodically to stay informed about our use of cookies.
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

export default CookiePolicy;
