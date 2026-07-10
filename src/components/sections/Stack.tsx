import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { Reveal } from '../ui/Reveal';
import { stack } from '../../data/stack';

export function Stack() {
  return (
    <section id="stack" className="py-12 md:py-16 bg-base-panel/30">
      <div className="container mx-auto px-6">
        <SectionHeading index="04" eyebrow="Stack Tecnológico" title="Herramientas que uso a diario" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((category, i) => (
            <Reveal key={category.category} delay={i * 0.06}>
              <GlassCard className="p-6 h-full">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
