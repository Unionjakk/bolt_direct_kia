
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FilterSelectProps {
  label: string;
  value: string;
  placeholder: string;
  options: Array<{ value: string; label: string }>;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  isFilterActive?: boolean;
}

const FilterSelect: React.FC<FilterSelectProps> = ({
  label,
  value,
  placeholder,
  options,
  onValueChange,
  disabled = false,
  isFilterActive = false
}) => {
  const isSelectDisabled = disabled || isFilterActive;

  return (
    <div>
      <label className="text-sm font-medium mb-3 block">{label}</label>
      <Select 
        value={value} 
        onValueChange={onValueChange} 
        disabled={isSelectDisabled}
      >
        <SelectTrigger 
          className={`${isFilterActive ? 'cursor-not-allowed bg-muted text-muted-foreground border-muted' : ''} ${isSelectDisabled ? 'opacity-60' : ''}`}
        >
          <SelectValue 
            placeholder={placeholder}
            className={isFilterActive ? 'text-muted-foreground' : ''}
          />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterSelect;
