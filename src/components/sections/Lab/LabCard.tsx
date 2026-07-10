import { FlaskConical, Check, Github, Globe } from 'lucide-react';
import { Badge } from '../../ui/Badge';
import { StatusPill } from '../../ui/StatusPill';
import { Reveal } from '../../ui/Reveal';
import type { LabItem } from '../../../data/labs';

export function LabCard({ item, delay }: { item: LabItem; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="p-6 rounded-2xl border border-dashed border-base-borderHover bg-base-panel/40 hover:bg-base-panel/70 transition-colors h-full">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex p-2 rounded-lg bg-accent-dim text-accent-hover">
            <FlaskConical size={16} />
          </span>
          {item.status === 'production' ? (
            <StatusPill status="live" label="🚀 Producción" pulse={false} />
          ) : (
            <Badge className="border-status-wip/40 text-status-wip">beta</Badge>
          )}
        </div>

        <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-2">{item.category}</p>
        <h3 className="text-base font-semibold text-ink mb-2">{item.title}</h3>
        <p className="text-sm text-ink-muted leading-relaxed mb-4">{item.description}</p>

        {item.highlights.length > 0 && (
          <ul className="mb-4 space-y-1.5">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2 text-sm text-ink-muted">
                <Check size={14} className="text-accent shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {item.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-5">
          {item.demoUrl && (
            <a
              href={item.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent-hover transition-colors"
            >
              <Globe size={16} /> Demo
            </a>
          )}
          {item.repoUrl && (
            <a
              href={item.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent-hover transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
