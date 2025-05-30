
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';

const EV3CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-kia-charcoal to-kia-gray-medium text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Experience the EV3?
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Book a test drive today or speak to our experts about financing options. 
            We're here to help you make the switch to electric.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-kia-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Book a Test Drive</h3>
              <p className="text-gray-200 mb-4">
                Experience the EV3 firsthand. Schedule your test drive at a time that suits you.
              </p>
              <Button className="bg-kia-red hover:bg-kia-red-dark text-white w-full">
                Book Test Drive
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
            <CardContent className="p-6 text-center">
              <Mail className="h-12 w-12 text-kia-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Get a Quote</h3>
              <p className="text-gray-200 mb-4">
                Receive a personalised quote with financing options tailored to your needs.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-kia-charcoal w-full">
                Request Quote
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
            <CardContent className="p-6 text-center">
              <Phone className="h-12 w-12 text-kia-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Speak to an Expert</h3>
              <p className="text-gray-200 mb-4">
                Have questions? Our EV specialists are ready to help you find the perfect EV3.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-kia-charcoal w-full">
                Call Now
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-gray-200 mb-4">
            <MapPin className="h-5 w-5" />
            <span>Nationwide delivery available across the UK</span>
          </div>
          <p className="text-gray-300">
            All new Kia vehicles come with our industry-leading 7-year, 100,000-mile warranty
          </p>
        </div>
      </div>
    </section>
  );
};

export default EV3CallToAction;
