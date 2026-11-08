import type { ComponentProps } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
}

const VARIANT_CLASS_NAME: Record<ButtonVariant, string> = {
  primary:
    'relative isolate bg-primary-dark text-on-primary before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-(image:--gradient-primary) before:transition-opacity enabled:hover:before:opacity-0',
  secondary:
    'border border-foreground-muted text-foreground-muted enabled:hover:bg-foreground-muted/10',
  outline: 'border border-foreground text-foreground enabled:hover:bg-foreground/10',
  danger: 'border border-danger text-danger enabled:hover:bg-danger/10',
};

function Button({ variant = 'primary', type = 'button', className = '', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-lg px-5 py-3 text-base font-medium whitespace-nowrap transition disabled:cursor-not-allowed disabled:opacity-50 ${VARIANT_CLASS_NAME[variant]} ${className}`}
      {...props}
    />
  );
}

export default Button;
