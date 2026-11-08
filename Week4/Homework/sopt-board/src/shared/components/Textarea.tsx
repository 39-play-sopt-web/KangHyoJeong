import type { ComponentProps } from 'react';

interface TextareaProps extends ComponentProps<'textarea'> {
  label: string;
  value: string;
  maxLength: number;
}

function Textarea({ label, value, maxLength, ...props }: TextareaProps) {
  return (
    <label className="flex flex-col">
      <span className="mb-4 text-xl font-semibold text-foreground-muted">{label}</span>
      <textarea
        value={value}
        maxLength={maxLength}
        className="h-45 resize-none rounded-lg border border-primary bg-input p-4 outline-none"
        {...props}
      />
      <span className="mt-2 text-right text-xs font-medium text-foreground-muted">
        {value.length}/{maxLength}
      </span>
    </label>
  );
}

export default Textarea;
