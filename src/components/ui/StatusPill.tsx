import clsx from 'clsx';

type Status = 'live' | 'wip' | 'archived' | 'current';

const statusMap: Record<Status, { label: string; dot: string; text: string }> = {
  live: { label: 'Production', dot: 'bg-status-live', text: 'text-status-live' },
  current: { label: 'Actual', dot: 'bg-status-live', text: 'text-status-live' },
  wip: { label: 'En progreso', dot: 'bg-status-wip', text: 'text-status-wip' },
  archived: { label: 'Archivado', dot: 'bg-status-archived', text: 'text-status-archived' },
};

interface StatusPillProps {
  status: Status;
  label?: string;
  pulse?: boolean;
}

export function StatusPill({ status, label, pulse = true }: StatusPillProps) {
  const config = statusMap[status];

  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide">
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span
            className={clsx('absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping', config.dot)}
          />
        )}
        <span className={clsx('relative inline-flex h-2 w-2 rounded-full', config.dot)} />
      </span>
      <span className={config.text}>{label ?? config.label}</span>
    </span>
  );
}
