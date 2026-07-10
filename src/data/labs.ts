export interface LabItem {
  title: string;
  category: string;
  description: string;
  stack: string[];
  highlights: string[];
  status?: 'production';
  repoUrl?: string;
  demoUrl?: string;
}

/** Repos reales de github.com/AlvaroCC96 — pendiente agregar repoUrl de cada uno. */
export const labs: LabItem[] = [
  {
    title: '🍽️ Menú de Matrimonio',
    category: 'Web · Eventos',
    description:
      'Plataforma web desarrollada para gestionar la planificación gastronómica de un matrimonio, permitiendo administrar invitados, selección de platos, conteo automático por categoría y generación de estadísticas en tiempo real para facilitar la coordinación del evento.',
    stack: ['React', 'Vite', 'JavaScript'],
    highlights: ['Responsive', 'Estadísticas', 'Exportación', 'Gestión de invitados', 'UX personalizada'],
    status: 'production',
    repoUrl: 'https://github.com/AlvaroCC96/menu-matrimonio',
  },
  {
    title: '📱 PassHub',
    category: 'IoT · NFC · Cloud',
    description:
      'Plataforma que digitaliza la documentación de vehículos mediante tarjetas NFC. Cada escaneo abre una página personalizada con información del vehículo, documentos vigentes y acceso rápido desde cualquier dispositivo, eliminando la necesidad de portar documentación física.',
    stack: ['Python', 'FastAPI', 'Cloud Run', 'NFC', 'Google Cloud'],
    highlights: ['NFC', 'Cloud Run', 'Google Login', 'Responsive', 'Mobile First'],
    status: 'production',
    repoUrl: 'https://github.com/AlvaroCC96/PassHub',
  },
  {
    title: '🐜 ANTWallet',
    category: 'FinTech · IA · Gamificación',
    description:
      'Proyecto personal construido para uso real —llevo mis propias finanzas ahí— que convierte el seguimiento de gastos en un RPG: los gastos hormiga atacan tu billetera, las deudas son jefes con barra de vida que derrotas pagando, y subes de nivel acumulando buenas decisiones financieras. Tiene su propio backend, autenticación con control de acceso por invitación, y un consejero con IA generativa que comenta tu progreso.',
    stack: ['React', 'TypeScript', 'Firebase', 'OpenAI API'],
    highlights: ['Gamificación RPG', 'IA Generativa', 'Multi-usuario', 'Dark Mode', 'Import/Export'],
    status: 'production',
    repoUrl: 'https://github.com/AlvaroCC96/ANTWallet',
  },
  {
    title: '✈️ Flight Operations Dashboard',
    category: 'Aviación · Analítica',
    description:
      'Dashboard desarrollado para centralizar y visualizar información operacional de vuelos mediante indicadores, filtros y métricas en tiempo real, facilitando el seguimiento y análisis de operaciones aeronáuticas desde una única plataforma.',
    stack: ['Python', 'React', 'Charts'],
    highlights: ['Dashboards', 'KPIs', 'Filtros', 'Visualización', 'Tiempo Real'],
    repoUrl: 'https://github.com/AlvaroCC96/flight-diary-3D',
  },
];
