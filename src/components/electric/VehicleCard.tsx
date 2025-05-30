import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface VehicleCardProps {
  vehicle: {
    name: string;
    description: string;
    range: string;
    chargingTime: string;
    image: string;
  };
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const navigate = useNavigate();

  const getVehicleLink = () => {
    // Link EV3 to its dedicated page, others can be added later
    if (vehicle.name === 'EV3') {
      return '/new-cars/ev3';
    }
    // For now, other vehicles don't have dedicated pages
    return '#';
  };

  const handleCardClick = () => {
    const link = getVehicleLink();
    if (link !== '#') {
      navigate(link);
    }
  };

  const handleLearnMore = (e: React.MouseEvent) => {
    // Prevent the card click event from firing when button is clicked
    e.stopPropagation();
    
    const link = getVehicleLink();
    if (link !== '#') {
      navigate(link);
    }
  };

  const isClickable = getVehicleLink() !== '#';

  return (
    <Card 
      className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-white ${
        isClickable ? 'cursor-pointer' : ''
      }`}
      onClick={isClickable ? handleCardClick : undefined}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      } : undefined}
      aria-label={isClickable ? `View details for Kia ${vehicle.name}` : undefined}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={vehicle.image} 
          alt={`Kia ${vehicle.name} - Electric vehicle with ${vehicle.range} range`}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            console.error(`Failed to load image for ${vehicle.name}:`, vehicle.image);
            // Fallback to a placeholder if the image fails to load
            e.currentTarget.src = "https://images.unsplash.com/photo-1549399137-fb17de92d82e?w=600&h=400&fit=crop";
          }}
        />
        <div className="absolute top-4 right-4 bg-kia-red text-white px-3 py-1 rounded-full text-sm font-medium">
          EV
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-kia-charcoal mb-2 group-hover:text-kia-red transition-colors">
          Kia {vehicle.name}
        </h3>
        <p className="text-kia-gray-medium mb-4 leading-relaxed">
          {vehicle.description}
        </p>
        
        <div className="space-y-2 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-sm text-kia-gray-medium">Range:</span>
            <span className="font-semibold text-kia-charcoal">{vehicle.range}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-kia-gray-medium">Fast Charging:</span>
            <span className="font-semibold text-kia-charcoal">{vehicle.chargingTime}</span>
          </div>
        </div>

        <Button 
          onClick={handleLearnMore}
          className="w-full bg-kia-red hover:bg-kia-red-dark text-white group-hover:shadow-lg transition-all"
          disabled={getVehicleLink() === '#'}
        >
          {getVehicleLink() === '#' ? 'Coming Soon' : 'Learn More'}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
