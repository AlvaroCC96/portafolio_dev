import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Reveal } from '../ui/Reveal';

const facts = [
  { label: 'Experiencia', value: '+6 años' },
  { label: 'Foco', value: 'Backend & Cloud' },
  { label: 'Cloud', value: 'GCP & AWS' },
  { label: 'Ubicación', value: 'Chile' },
];

export function About() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <SectionHeading index="01" eyebrow="Sobre mí" title="Ingeniero de backend, no de interfaces" />

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <Reveal delay={0.1} className="md:col-span-3">
            <div className="space-y-5 text-ink-muted leading-relaxed text-lg">
              <p>
                Soy <span className="text-ink font-medium">Backend Engineer con más de 6 años de experiencia</span>{' '}
                construyendo servicios e integraciones críticas sobre Google Cloud Platform y AWS, con foco en
                integridad y disponibilidad de datos a gran escala.
              </p>
              <p>
                Mi trabajo diario combina desarrollo de APIs (Python, Go, gRPC), datos operacionales de bajo
                tiempo de respuesta y gran volumen sobre bases no relacionales como Bigtable, infraestructura
                como código con Terraform, despliegues continuos sobre Cloud Run y análisis de datos a escala en
                BigQuery. También he automatizado integraciones críticas con entidades gubernamentales y
                financieras sobre AWS.
              </p>
              <p>
                Me interesa la ingeniería que se sostiene sola: sistemas observables, infraestructura reproducible
                y automatización que reemplaza el trabajo manual — incluyendo, cada vez más, integrar IA en esos
                flujos.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-2">
            <GlassCard className="p-6">
              <dl className="space-y-5">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex items-center justify-between border-b border-base-border pb-4 last:border-0 last:pb-0">
                    <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint">{fact.label}</dt>
                    <dd className="text-ink font-medium text-right">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
