import { SectionHeading } from '../../ui/SectionHeading';
import { labs } from '../../../data/labs';
import { LabCard } from './LabCard';

export function Lab() {
  return (
    <section id="lab" className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <SectionHeading
          index="06"
          eyebrow="Laboratorio"
          title="Lo que construyo cuando termina la jornada"
          description="Espacio donde experimento con tecnologías, valido ideas y construyo productos que nacen por curiosidad."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {labs.map((item, i) => (
            <LabCard key={item.title} item={item} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
