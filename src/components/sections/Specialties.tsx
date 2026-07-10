import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { Reveal } from '../ui/Reveal';
import { specialties } from '../../data/specialties';

export function Specialties() {
  return (
    <section id="specialties" className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <SectionHeading
          index="03"
          eyebrow="Especialidades"
          title="Dónde enfoco mi ingeniería"
          description="Los pilares técnicos sobre los que diseño y construyo sistemas backend en producción."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, i) => {
            const Icon = specialty.icon;
            return (
              <Reveal key={specialty.title} delay={i * 0.08}>
                <GlassCard className="p-6 h-full group">
                  <div className="mb-5 inline-flex p-3 rounded-xl bg-accent-dim border border-accent-border text-accent-hover group-hover:scale-105 transition-transform">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-2">{specialty.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-5">{specialty.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {specialty.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
