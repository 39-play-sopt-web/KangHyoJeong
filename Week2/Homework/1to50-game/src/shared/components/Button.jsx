const VARIANTS = {
  primary: 'bg-primary border-primary-border text-foreground hover:bg-primary-hover',
  default: 'bg-surface border-border text-foreground hover:bg-border/30',
  danger: 'bg-surface border-danger text-danger hover:bg-danger/5',
};

export function Button({ variant = 'default', fullWidth = false, ...props }) {
  return (
    <button
      type="button"
      {...props}
      className={`inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors duration-300 ease-out ${VARIANTS[variant]} ${fullWidth ? 'w-full' : ''}`}
    />
  );
}
