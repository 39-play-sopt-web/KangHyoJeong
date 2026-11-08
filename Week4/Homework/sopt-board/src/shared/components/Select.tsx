import type { ComponentProps } from 'react';

import chevronDownIcon from '@/shared/assets/icons/icChevronDown.svg';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends ComponentProps<'select'> {
  options: readonly SelectOption[];
  placeholder?: string;
}

function Select({ options, placeholder, value, className = '', ...props }: SelectProps) {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        className={`w-full cursor-pointer appearance-none rounded-lg border border-foreground-muted bg-transparent py-3 pr-14 pl-5 text-base font-medium ${value ? 'text-foreground' : 'text-foreground-muted'}`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-background text-foreground">
            {option.label}
          </option>
        ))}
      </select>
      <img
        src={chevronDownIcon}
        alt=""
        className="pointer-events-none absolute top-1/2 right-4 size-6 -translate-y-1/2"
      />
    </div>
  );
}

export default Select;
