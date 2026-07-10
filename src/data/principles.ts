export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: 'Escalabilidad antes que complejidad',
    description: 'Diseño sistemas que puedan crecer sin tener que reescribirse cada seis meses.',
  },
  {
    title: 'Automatizar siempre que sea posible',
    description: 'Si una tarea se repite, intento convertirla en un proceso automatizado.',
  },
  {
    title: 'La observabilidad es una característica',
    description: 'Logs, métricas y trazabilidad forman parte del diseño desde el primer día.',
  },
  {
    title: 'La IA potencia al ingeniero',
    description: 'Utilizo IA para acelerar el desarrollo, no para reemplazar el criterio técnico.',
  },
];
