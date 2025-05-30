
import React from 'react';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface FilterTagProps {
  label: string;
  value: string;
  onRemove: () => void;
}

const FilterTag: React.FC<FilterTagProps> = ({ label, value, onRemove }) => {
  return (
    <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1 text-sm">
      <span className="font-medium text-gray-700">{label}:</span>
      <span>{value}</span>
      <button
        onClick={onRemove}
        className="ml-1 hover:bg-gray-300 rounded-full p-0.5 transition-colors"
        aria-label={`Remove ${label} filter`}
      >
        <X className="h-3 w-3" />
      </button>
    </Badge>
  );
};

export default FilterTag;
