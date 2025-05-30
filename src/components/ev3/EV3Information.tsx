
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Battery, Zap, Shield, Smartphone, Car, Gauge } from 'lucide-react';

const EV3Information = () => {
  const specifications = [
    { icon: Battery, label: 'Electric Range', value: 'Up to 372 miles (WLTP)' },
    { icon: Zap, label: 'Fast Charging', value: '10-80% in 31 minutes' },
    { icon: Gauge, label: 'Acceleration', value: '0-62mph in 8.5 seconds' },
    { icon: Car, label: 'Top Speed', value: '106mph' },
  ];

  const features = [
    {
      title: 'Advanced Technology',
      description: 'Experience the latest in automotive technology with the EV3\'s state-of-the-art infotainment system.',
      features: [
        '12.3" touchscreen display',
        'Wireless smartphone integration',
        'Over-the-air updates',
        'Digital instrument cluster'
      ]
    },
    {
      title: 'Safety & Security',
      description: 'Drive with confidence knowing you\'re protected by Kia\'s comprehensive safety suite.',
      features: [
        'Forward Collision-Avoidance Assist',
        'Blind-Spot Collision-Avoidance Assist',
        'Lane Keeping Assist',
        'Smart Cruise Control'
      ]
    },
    {
      title: 'Comfort & Convenience',
      description: 'Every journey is enhanced with premium comfort features and intelligent design.',
      features: [
        'Heated and ventilated seats',
        'Dual-zone climate control',
        'Wireless charging pad',
        'Premium audio system'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Key Specifications */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-kia-charcoal mb-4">
            EV3 Key Specifications
          </h2>
          <p className="text-lg text-kia-gray-medium max-w-2xl mx-auto">
            The Kia EV3 delivers impressive performance and efficiency in a compact, 
            stylish package designed for modern urban living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specifications.map((spec, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <spec.icon className="h-12 w-12 text-kia-red mx-auto mb-4" />
                <h3 className="font-semibold text-kia-charcoal mb-2">{spec.label}</h3>
                <p className="text-kia-gray-medium">{spec.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-kia-charcoal mb-3">{feature.title}</h3>
                <p className="text-kia-gray-medium mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-kia-gray-medium">
                      <span className="text-kia-red font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Design & Interior */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-kia-charcoal mb-4">
              Bold Design, Intelligent Space
            </h3>
            <p className="text-kia-gray-medium mb-6 leading-relaxed">
              The EV3's distinctive design language combines Kia's signature styling with 
              purpose-built electric vehicle innovation. Every curve and line has been 
              crafted to optimise aerodynamics while creating a bold, confident presence on the road.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-kia-red font-bold">•</span>
                <span>Spacious 5-seat interior with flexible cargo solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-kia-red font-bold">•</span>
                <span>Premium materials and sustainable fabric options</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-kia-red font-bold">•</span>
                <span>Panoramic sunroof for an open, airy cabin feel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-kia-red font-bold">•</span>
                <span>Advanced ambient lighting with customisable colours</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img 
              src="/images/EV3.jpg" 
              alt="Kia EV3 Interior Design"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EV3Information;
