export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  status: 'current' | 'past';
  summary: string;
  achievements: string[];
  stack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'LATAM Airlines',
    role: 'Backend Developer',
    period: '2024 — Presente',
    location: 'Chile · Remoto',
    status: 'current',
    summary:
      'Desarrollo de integraciones y servicios backend para el área de compliance, sobre Google Cloud Platform, con foco en validación e integridad de datos regulatorios.',
    achievements: [
      'Diseño de servicios para datos operacionales con bajo tiempo de respuesta y gran volumen, usando gRPC y Go.',
      'Diseño e implementación de servicios sobre Cloud Run desplegados con pipelines de CI/CD en Cloud Build / GitLab CI.',
      'Automatización de procesos de validación de datos regulatorios, reduciendo intervención manual.',
      'Modelado y consultas analíticas sobre BigQuery y Bigtable para datos de gran volumen y reportería de compliance.',
      'Definición de infraestructura como código con Terraform para entornos reproducibles.',
    ],
    stack: ['Go', 'gRPC', 'Python', 'GCP', 'Cloud Run', 'Bigtable', 'BigQuery', 'Terraform', 'GitLab CI/CD', 'Docker'],
  },
  {
    company: 'Kuantaz',
    role: 'Fullstack Developer',
    period: '2024',
    location: 'Chile',
    status: 'past',
    summary:
      'Diseño e implementación de módulos para sistemas gubernamentales — ChileAtiende y el sistema de monitoreo de Chile Crece Contigo.',
    achievements: [
      'Desarrollo de módulos de seguimiento y monitoreo para programas de alcance nacional.',
      'Integración entre servicios backend en Laravel/Python y frontend en React.js.',
      'Trabajo con bases de datos Oracle SQL y MySQL sobre datos sensibles de organismos públicos.',
    ],
    stack: ['Laravel', 'Python', 'React', 'Oracle SQL', 'MySQL'],
  },
  {
    company: 'RedCapital',
    role: 'Software Architect',
    period: '2023 — 2024',
    location: 'Chile',
    status: 'past',
    summary:
      'Automatización e integración con servicios externos críticos (SUNAT, CAVALI, DICOM, Tesorería General de la República, Poder Judicial, SII) sobre infraestructura AWS.',
    achievements: [
      'Diseño de integraciones serverless con AWS Lambda, API Gateway y S3.',
      'Administración y versionado de imágenes de servicio en Elastic Container Registry.',
      'Automatización de infraestructura y despliegues para reducir tiempo de entrega.',
    ],
    stack: ['AWS Lambda', 'API Gateway', 'S3', 'ECR', 'Python'],
  },
  {
    company: 'RedCapital',
    role: 'Backend Developer',
    period: '2021 — 2023',
    location: 'Chile',
    status: 'past',
    summary:
      'Diseño, desarrollo e integración de módulos para automatizar procesos de Factoring y Crédito, mejorando la eficiencia de la gestión financiera de la compañía.',
    achievements: [
      'Construcción de módulos backend en Laravel para automatización de procesos financieros.',
      'Integración de flujos de aprobación de crédito con servicios internos.',
    ],
    stack: ['PHP', 'Laravel', 'MySQL'],
  },
  {
    company: 'SEREMI de Salud Antofagasta',
    role: 'Software Engineer',
    period: '2021',
    location: 'Chile',
    status: 'past',
    summary:
      'Desarrollo de soluciones para agilizar la estrategia TTA (Testing, Tracing and Isolation) durante la contingencia sanitaria por COVID-19.',
    achievements: [
      'Construcción de scrapers y herramientas de automatización con Python y Selenium.',
      'Análisis de datos con Dataframes y visualización en Google Data Studio.',
    ],
    stack: ['Python', 'Selenium', 'Data Studio'],
  },
  {
    company: 'Ferrocarril de Antofagasta a Bolivia (FCAB)',
    role: 'Práctica Profesional',
    period: '2020',
    location: 'Chile',
    status: 'past',
    summary:
      'Desarrollo e implementación de módulos para la evaluación de operadores ferroviarios mediante análisis de datos.',
    achievements: ['Construcción de módulos sobre OctoberCMS para evaluación operativa.'],
    stack: ['OctoberCMS', 'PHP'],
  },
];
