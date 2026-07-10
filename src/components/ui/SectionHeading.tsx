import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeading({ index, eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <Reveal className={`mb-12 max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      <div className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="h-px w-8 bg-base-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">{eyebrow}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-ink text-balance">{title}</h2>
      {description && <p className="mt-4 text-ink-muted leading-relaxed">{description}</p>}
    </Reveal>
  );
}
