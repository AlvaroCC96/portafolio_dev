import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TerminalSquare } from 'lucide-react';
import clsx from 'clsx';

const links = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#stack', label: 'Stack' },
  { href: '#principles', label: 'Principios' },
  { href: '#lab', label: 'Lab' },
  { href: '#contact', label: 'Contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={clsx(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'bg-base/70 backdrop-blur-xl border-b border-base-border' : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-6 h-14 md:h-16 flex items-center justify-between gap-3">
        <a href="#top" className="font-mono text-sm text-ink hover:text-accent transition-colors shrink-0">
          alvaro<span className="text-accent">.</span>dev
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/terminal"
            className="inline-flex items-center gap-2 rounded-full border border-base-border bg-base-panel/60 backdrop-blur px-3 py-1.5 font-mono text-xs text-ink-muted hover:border-accent-border hover:text-accent-hover transition-colors"
          >
            <TerminalSquare size={14} />
            <span className="hidden sm:inline">&gt; terminal</span>
            <span className="inline-block w-1.5 h-3.5 bg-accent animate-pulse" />
          </Link>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-lg border border-base-border px-4 py-2 text-sm text-ink hover:border-accent-border hover:text-accent-hover transition-colors"
          >
            Hablemos
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
