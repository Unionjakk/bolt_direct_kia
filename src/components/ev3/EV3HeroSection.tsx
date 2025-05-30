
import React from 'react';
import { Zap, Battery, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EV3HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-kia-silver via-white to-kia-gray-light py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-kia-charcoal mb-6 font-inter">
              New Kia EV3
            </h1>
            <p className="text-xl text-kia-gray-medium mb-8 leading-relaxed">
              Discover the all-new Kia EV3, the compact electric SUV that redefines 
              urban mobility. With cutting-edge technology, impressive range, and 
              distinctive design.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 text-kia-charcoal">
                <Battery className="h-5 w-5 text-kia-red" />
                <span className="font-medium">Up to 372 miles range</span>
              </div>
              <div className="flex items-center gap-2 text-kia-charcoal">
                <Zap className="h-5 w-5 text-kia-red" />
                <span className="font-medium">0-80% in 31 mins</span>
              </div>
              <div className="flex items-center gap-2 text-kia-charcoal">
                <Star className="h-5 w-5 text-kia-red" />
                <span className="font-medium">7-Year Warranty</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-kia-red hover:bg-kia-red-dark text-white px-8 py-3">
                Book Test Drive
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative mb-6">
              <img 
                src="/images/EV3.jpg" 
                alt="New Kia EV3 - Compact Electric SUV"
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="eager"
              />
              <div className="absolute top-4 right-4 bg-kia-red text-white px-4 py-2 rounded-full font-bold shadow-lg">
                NEW 2024
              </div>
            </div>
            
            {/* Embedded YouTube Video */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/0CovmT9wsJk"
                title="Kia EV3 Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EV3HeroSection;
