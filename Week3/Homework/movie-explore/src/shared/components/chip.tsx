import type { ReactNode } from 'react';

interface ChipProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const baseClassName = 'text-body inline-flex items-center rounded-2xl px-3 py-2';

export default function Chip({ children, className = '', onClick }: ChipProps) {
  const chipClassName = `${baseClassName} ${className}`;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={chipClassName}>
        {children}
      </button>
    );
  }

  return <span className={chipClassName}>{children}</span>;
}
