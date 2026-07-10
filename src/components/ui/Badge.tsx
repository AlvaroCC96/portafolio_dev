import type { ReactNode } from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-md px-2.5 py-1 font-mono text-xs border transition-colors',
        variant === 'default' && 'bg-base-elevated border-base-border text-ink-muted',
        variant === 'accent' && 'bg-accent-dim border-accent-border text-accent-hover',
        className
      )}
    >
      {children}
    </span>
  );
}
