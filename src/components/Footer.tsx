
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
const Footer = () => {
  return <footer className="bg-kia-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-kia-red p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Direct<span className="text-kia-red">Kia</span>
                </h3>
                <p className="text-sm text-gray-400">Authorised Kia Dealer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">UK's number 1 independent, family retail dealer for new and used Kia vehicles across the UK. Exceptional service, competitive prices, and nationwide delivery.</p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-700 rounded-lg hover:bg-kia-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-lg hover:bg-kia-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-lg hover:bg-kia-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-lg hover:bg-kia-red transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/new-cars" className="text-gray-300 hover:text-kia-red transition-colors">New Cars</a></li>
              <li><a href="/used-cars" className="text-gray-300 hover:text-kia-red transition-colors">Used Cars</a></li>
              <li><a href="/electric" className="text-gray-300 hover:text-kia-red transition-colors">Electric Vehicles</a></li>
              <li><a href="/finance" className="text-gray-300 hover:text-kia-red transition-colors">Finance Options</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-kia-red transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-kia-red transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-kia-red transition-colors">National Delivery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-kia-red transition-colors">Part Exchange</a></li>
              <li><a href="#" className="text-gray-300 hover:text-kia-red transition-colors">Finance & Leasing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-kia-red transition-colors">Extended Warranty</a></li>
              <li><a href="#" className="text-gray-300 hover:text-kia-red transition-colors">Service & MOT</a></li>
              <li><a href="#" className="text-gray-300 hover:text-kia-red transition-colors">Insurance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-kia-red mt-1" />
                <div>
                  <p className="text-white font-medium">01642 632 299</p>
                  <p className="text-gray-400 text-sm">Mon-Sat: 9AM-6PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-kia-red mt-1" />
                <div>
                  <p className="text-white">info@directkia.co.uk</p>
                  <p className="text-gray-400 text-sm">24/7 Email Support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-kia-red mt-1" />
                <div>
                  <p className="text-white">Nationwide Delivery</p>
                  <p className="text-gray-400 text-sm">Free on New EV across the UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 DirectKia. All rights reserved. Authorised Kia dealer.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
