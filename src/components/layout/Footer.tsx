import { Github, Linkedin, Mail } from 'lucide-react';
import { SocialLink } from '../ui/SocialLink';

export function Footer() {
  return (
    <footer className="border-t border-base-border">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} Álvaro Lucas Castillo Calabacero
        </p>

        <div className="flex items-center gap-6">
          <SocialLink href="https://www.linkedin.com/in/alvarocc96" icon={<Linkedin size={18} />} label="LinkedIn" />
          <SocialLink href="https://github.com/AlvaroCC96" icon={<Github size={18} />} label="GitHub" />
          <SocialLink href="mailto:alvarolucascc96@gmail.com" icon={<Mail size={18} />} label="Email" />
        </div>
      </div>
    </footer>
  );
}
