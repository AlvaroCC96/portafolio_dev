import { SectionHeading } from '../../ui/SectionHeading';
import { experience } from '../../../data/experience';
import { TimelineItem } from './TimelineItem';

export function Timeline() {
  return (
    <section id="experience" className="py-12 md:py-16 bg-base-panel/30">
      <div className="container mx-auto px-6">
        <SectionHeading
          index="02"
          eyebrow="Experiencia"
          title="Trayectoria profesional"
          description="Más de 6 años construyendo software en producción, desde integraciones gubernamentales hasta plataformas cloud."
        />

        <div className="max-w-3xl">
          {experience.map((entry, i) => (
            <TimelineItem key={`${entry.company}-${entry.period}`} entry={entry} delay={i * 0.05} isLast={i === experience.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
