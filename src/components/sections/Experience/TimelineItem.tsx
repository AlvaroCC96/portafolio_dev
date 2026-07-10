import { Reveal } from '../../ui/Reveal';
import { Badge } from '../../ui/Badge';
import { StatusPill } from '../../ui/StatusPill';
import { GlassCard } from '../../ui/GlassCard';
import type { ExperienceEntry } from '../../../data/experience';

interface TimelineItemProps {
  entry: ExperienceEntry;
  delay: number;
  isLast: boolean;
}

export function TimelineItem({ entry, delay, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-10">
      <span
        className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${
          entry.status === 'current' ? 'bg-accent border-accent' : 'bg-base border-base-borderHover'
        }`}
      />
      {!isLast && <span className="absolute left-[5px] top-5 bottom-[-2rem] w-px bg-base-border" />}

      <Reveal delay={delay}>
        <GlassCard className="p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
            <div>
              <h3 className="text-lg font-semibold text-ink">{entry.role}</h3>
              <p className="text-ink-muted">{entry.company} · {entry.location}</p>
            </div>
            <div className="flex flex-col md:items-end gap-2">
              <span className="font-mono text-xs text-ink-faint">{entry.period}</span>
              {entry.status === 'current' && <StatusPill status="current" />}
            </div>
          </div>

          <p className="text-ink-muted leading-relaxed mb-4">{entry.summary}</p>

          <ul className="space-y-2 mb-5">
            {entry.achievements.map((achievement) => (
              <li key={achievement} className="flex gap-2 text-sm text-ink-muted">
                <span className="text-accent mt-1">▹</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {entry.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </GlassCard>
      </Reveal>
    </div>
  );
}
