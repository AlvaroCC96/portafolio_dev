export interface StackCategory {
  category: string;
  items: string[];
}

export const stack: StackCategory[] = [
  { category: 'Backend', items: ['Python', 'Go', 'gRPC', 'REST APIs', 'JWT', 'PHP / Laravel'] },
  {
    category: 'Cloud',
    items: [
      'Google Cloud Platform',
      'AWS',
      'Cloud Run',
      'Pub/Sub',
      'IAM',
      'Dataflow',
      'Cloud Armor',
      'Load Balancer',
      'Lambda',
      'API Gateway',
      'S3',
    ],
  },
  { category: 'DevOps', items: ['Docker', 'Terraform', 'GitLab CI/CD', 'Cloud Build'] },
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Bases de datos', items: ['BigQuery', 'Bigtable', 'Cloud Spanner', 'MySQL', 'Oracle SQL'] },
  { category: 'Herramientas', items: ['Git', 'Jira Cloud', 'Postman', 'VS Code'] },
  { category: 'IA', items: ['LLM APIs', 'Prompt Engineering', 'Automatización con IA'] },
];
