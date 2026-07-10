import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { SocialLink } from '../ui/SocialLink';
import { Reveal } from '../ui/Reveal';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | '' }>({
    message: '',
    type: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setStatus({ message: '', type: '' });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus({ message: 'Mensaje enviado con éxito.', type: 'success' });
      form.current.reset();
    } catch {
      setStatus({ message: 'No se pudo enviar el mensaje. Intenta de nuevo.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <SectionHeading
          index="07"
          eyebrow="Contacto"
          align="center"
          title="¿Construyendo algo en cloud o backend?"
          description="Abierto a conversar sobre oportunidades, colaboraciones o simplemente sobre arquitectura de sistemas."
        />

        <Reveal delay={0.15} className="max-w-xl mx-auto">
          <div className="flex justify-center gap-8 mb-10">
            <SocialLink href="https://www.linkedin.com/in/alvarocc96" icon={<Linkedin size={18} />} label="LinkedIn" />
            <SocialLink href="https://github.com/AlvaroCC96" icon={<Github size={18} />} label="GitHub" />
            <SocialLink href="mailto:alvarolucascc96@gmail.com" icon={<Mail size={18} />} label="Email" />
          </div>

          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="from_name"
              placeholder="Tu nombre"
              required
              className="w-full px-4 py-3 rounded-lg bg-base-panel border border-base-border focus:ring-2 focus:ring-accent focus:border-transparent text-ink placeholder-ink-faint transition-colors"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Tu email"
              required
              className="w-full px-4 py-3 rounded-lg bg-base-panel border border-base-border focus:ring-2 focus:ring-accent focus:border-transparent text-ink placeholder-ink-faint transition-colors"
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg bg-base-panel border border-base-border focus:ring-2 focus:ring-accent focus:border-transparent text-ink placeholder-ink-faint transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-white py-3 px-6 rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {status.message && (
              <div
                className={`text-center p-3 rounded-lg text-sm ${
                  status.type === 'success' ? 'bg-status-live/10 text-status-live' : 'bg-red-500/10 text-red-400'
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
