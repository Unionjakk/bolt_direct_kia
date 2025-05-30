
import React from 'react';

interface EV3OfferCardFeaturesProps {
  summaryFeatures: any;
}

const EV3OfferCardFeatures = ({ summaryFeatures }: EV3OfferCardFeaturesProps) => {
  if (!summaryFeatures || !Array.isArray(summaryFeatures) || summaryFeatures.length === 0) {
    return null;
  }

  return (
    <div className="space-y-1">
      <p className="text-sm font-medium text-kia-charcoal">Key Features:</p>
      <ul className="text-sm text-kia-gray-medium space-y-1">
        {summaryFeatures.slice(0, 3).map((feature, index: number) => {
          let featureText = '';
          if (typeof feature === 'object' && feature !== null) {
            if (feature.feature && feature.value) {
              featureText = `${feature.feature}: ${feature.value}`;
            } else if (feature.feature) {
              featureText = feature.feature;
            } else {
              featureText = String(feature);
            }
          } else {
            featureText = String(feature);
          }
          
          return (
            <li key={index} className="flex items-start gap-1">
              <span className="text-kia-red">•</span>
              {featureText}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EV3OfferCardFeatures;
