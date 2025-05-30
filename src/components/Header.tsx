
import { Car, Phone, MapPin, Menu, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home
    },
    {
      name: "New Cars",
      href: "/new-cars"
    },
    {
      name: "Used Cars", 
      href: "/used-cars"
    },
    {
      name: "Finance",
      href: "/finance"
    },
    {
      name: "About",
      href: "/about"
    }
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-kia-charcoal text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>01642 632 299</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>National Delivery Available</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Open Time • 6 Days 9AM - 6PM •  Sun 10AM - 4PM</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-kia-red p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-kia-charcoal font-inter">
                Direct<span className="text-kia-red">Kia</span>
              </h1>
              <p className="text-xs text-kia-gray-medium">Authorised Kia Dealer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <Link 
                key={item.name} 
                to={item.href} 
                className="text-kia-charcoal hover:text-kia-red transition-colors font-medium flex items-center gap-2"
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <Button className="bg-kia-red hover:bg-kia-red-dark text-white">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map(item => (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className="text-lg text-kia-charcoal hover:text-kia-red transition-colors py-2 border-b border-gray-100 flex items-center gap-3"
                  >
                    {item.icon && <item.icon className="h-5 w-5" />}
                    {item.name}
                  </Link>
                ))}
                <Link to="/contact">
                  <Button className="bg-kia-red hover:bg-kia-red-dark text-white mt-4 w-full">
                    Contact Us
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
