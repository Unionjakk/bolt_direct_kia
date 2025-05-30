
import { LucideIcon } from "lucide-react";

interface BenefitItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitItem = ({ icon: Icon, title, description }: BenefitItemProps) => {
  return (
    <div className="text-center group">
      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-kia-red transition-colors duration-300">
        <Icon className="h-8 w-8 text-kia-red group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-kia-charcoal mb-2">
        {title}
      </h3>
      <p className="text-kia-gray-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default BenefitItem;
