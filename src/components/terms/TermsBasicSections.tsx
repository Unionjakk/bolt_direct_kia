
const TermsBasicSections = () => {
  return (
    <>
      {/* Introduction */}
      <section id="introduction" className="mb-8">
        <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">1. Introduction and Acceptance</h2>
        <p className="text-gray-700 mb-4">
          These Terms and Conditions ("Terms") govern your use of the DirectKia website and your purchase 
          of vehicles and services from Kia Stockton Ltd, an authorised Kia dealer in the United Kingdom.
        </p>
        <p className="text-gray-700 mb-4">
          By using our website, making an enquiry, or purchasing a vehicle from us, you agree to be bound 
          by these Terms. If you do not agree with any part of these Terms, please do not use our website 
          or services.
        </p>
        <p className="text-gray-700 mb-4">
          We reserve the right to update these Terms at any time. Any changes will be posted on this page 
          with an updated "last modified" date. Your continued use of our services after any changes 
          constitutes acceptance of the new Terms.
        </p>
      </section>

      {/* Definitions */}
      <section id="definitions" className="mb-8">
        <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">2. Definitions</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-kia-red pl-4">
            <p className="text-gray-700"><strong>"We," "us," "our"</strong> refers to Kia Stockton Ltd, trading as DirectKia</p>
          </div>
          <div className="border-l-4 border-kia-red pl-4">
            <p className="text-gray-700"><strong>"You," "your"</strong> refers to the customer or website user</p>
          </div>
          <div className="border-l-4 border-kia-red pl-4">
            <p className="text-gray-700"><strong>"Website"</strong> refers to directkia.co.uk and all associated pages</p>
          </div>
          <div className="border-l-4 border-kia-red pl-4">
            <p className="text-gray-700"><strong>"Vehicle"</strong> refers to any new or used car, van, or commercial vehicle offered for sale</p>
          </div>
          <div className="border-l-4 border-kia-red pl-4">
            <p className="text-gray-700"><strong>"Services"</strong> includes vehicle sales, finance, insurance, warranties, and related services</p>
          </div>
        </div>
      </section>

      {/* Website Terms */}
      <section id="website-terms" className="mb-8">
        <h2 className="text-2xl font-semibold text-kia-charcoal mb-4">3. Website Terms of Use</h2>
        
        <h3 className="text-lg font-semibold text-kia-charcoal mb-3">3.1 Permitted Use</h3>
        <p className="text-gray-700 mb-4">
          You may use our website to browse vehicle stock, make enquiries, request finance quotes, 
          and access information about our services. You must not use the website for any unlawful 
          purpose or in any way that could damage, disable, or impair the website.
        </p>
        
        <h3 className="text-lg font-semibold text-kia-charcoal mb-3">3.2 Prohibited Activities</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Attempting to gain unauthorised access to any part of the website</li>
          <li>Using automated systems to scrape or download content</li>
          <li>Submitting false or misleading information</li>
          <li>Interfering with the proper working of the website</li>
          <li>Using the website for commercial purposes without our consent</li>
        </ul>

        <h3 className="text-lg font-semibold text-kia-charcoal mb-3">3.3 Website Availability</h3>
        <p className="text-gray-700 mb-4">
          We aim to keep our website available 24/7, but we cannot guarantee uninterrupted access. 
          We may suspend access for maintenance, updates, or other operational reasons without notice.
        </p>
      </section>
    </>
  );
};

export default TermsBasicSections;
