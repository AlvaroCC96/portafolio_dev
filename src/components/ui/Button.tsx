import type { AnchorHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
}

export function Button({ children, variant = 'primary', icon, className, ...props }: ButtonProps) {
  return (
    <a
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all duration-200',
        variant === 'primary' && 'bg-accent text-white shadow-glow hover:bg-accent-hover',
        variant === 'secondary' &&
          'border border-base-border bg-base-panel text-ink hover:border-base-borderHover hover:bg-base-elevated',
        variant === 'ghost' && 'text-ink-muted hover:text-ink',
        className
      )}
      {...props}
    >
      {children}
      {icon}
    </a>
  );
}
