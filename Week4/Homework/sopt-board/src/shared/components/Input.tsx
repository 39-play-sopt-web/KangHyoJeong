import type { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  label: string;
  value: string;
  maxLength: number;
}

function Input({ label, value, maxLength, ...props }: InputProps) {
  return (
    <label className="flex flex-col">
      <span className="mb-4 text-xl font-semibold text-foreground-muted">{label}</span>
      <input
        value={value}
        maxLength={maxLength}
        className="h-10 rounded-lg border border-primary bg-input px-4 outline-none"
        {...props}
      />
      <span className="mt-2 text-right text-xs font-medium text-foreground-muted">
        {value.length}/{maxLength}
      </span>
    </label>
  );
}

export default Input;
