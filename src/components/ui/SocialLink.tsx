import type { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-ink-muted hover:text-accent-hover transition-colors duration-200"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
