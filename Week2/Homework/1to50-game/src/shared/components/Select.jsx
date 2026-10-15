import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Select({ options, value, onChange, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-flex">
      <select
        {...props}
        value={value}
        onMouseDown={() => setIsOpen((prev) => !prev)}
        onChange={(e) => {
          onChange(e.target.value);
          setIsOpen(false);
        }}
        onBlur={() => setIsOpen(false)}
        onKeyDown={(e) => {
          if (e.key === 'Escape' || e.key === 'Enter') setIsOpen(false);
        }}
        className="cursor-pointer appearance-none rounded-lg border border-border bg-surface py-2 pr-8 pl-3 text-sm font-medium text-foreground transition-colors duration-300 ease-out hover:bg-border/30 focus:border-foreground-muted focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <ChevronDown
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-foreground-muted transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`}
      />
    </div>
  );
}
