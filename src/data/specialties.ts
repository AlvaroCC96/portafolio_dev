import { Server, Cloud, Workflow, Database, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Specialty {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export const specialties: Specialty[] = [
  {
    icon: Server,
    title: 'Backend & APIs',
    description:
      'Diseño de servicios backend robustos y contratos de API claros, pensados para escalar y para que otros equipos los consuman sin fricción.',
    tags: ['Python', 'Go', 'gRPC', 'REST', 'JWT'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Infraestructura',
    description:
      'Arquitecturas serverless y administradas sobre Google Cloud Platform y AWS, priorizando costo, escalabilidad y bajo mantenimiento operativo.',
    tags: ['GCP', 'AWS', 'Cloud Run', 'Pub/Sub', 'IAM', 'Dataflow', 'Cloud Armor', 'Load Balancer'],
  },
  {
    icon: Workflow,
    title: 'DevOps & Automatización',
    description:
      'Infraestructura como código y pipelines de integración/despliegue continuo que hacen que llevar cambios a producción sea rutinario, no un evento.',
    tags: ['Terraform', 'Docker', 'GitLab CI/CD', 'Cloud Build'],
  },
  {
    icon: Database,
    title: 'Datos a gran escala',
    description:
      'Datos operacionales de bajo tiempo de respuesta y gran volumen sobre bases no relacionales, además de analítica a escala.',
    tags: ['Bigtable', 'Spanner', 'BigQuery'],
  },
  {
    icon: Sparkles,
    title: 'Integración de IA',
    description:
      'Incorporación de modelos e IA en flujos de trabajo reales — automatización de procesos, validación de datos y asistencia a decisiones.',
    tags: ['LLM APIs', 'Automatización con IA', 'Data Pipelines'],
  },
];
