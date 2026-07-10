import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { principles } from '../../data/principles';

export function Principles() {
  return (
    <section id="principles" className="py-12 md:py-16 bg-base-panel/30">
      <div className="container mx-auto px-6">
        <SectionHeading
          index="05"
          eyebrow="Engineering Principles"
          title="Cómo tomo decisiones de ingeniería"
          description="No se trata del código en sí, sino del criterio detrás de cada decisión técnica."
        />

        <div className="max-w-3xl divide-y divide-base-border border-y border-base-border">
          {principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 0.08} className="flex gap-6 md:gap-10 py-8">
              <span className="font-mono text-sm text-accent shrink-0 pt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-ink mb-2">{principle.title}</h3>
                <p className="text-ink-muted leading-relaxed">{principle.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
