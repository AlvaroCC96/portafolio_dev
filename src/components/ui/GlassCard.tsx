import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
}

export function GlassCard({ children, hoverable = true, className, ...props }: GlassCardProps) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-base-border bg-base-panel/60 backdrop-blur-xl shadow-card transition-colors duration-300',
        hoverable && 'hover:border-base-borderHover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
