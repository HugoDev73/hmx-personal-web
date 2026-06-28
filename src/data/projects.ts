export type Project = {
  title: string;
  slug: string;
  summary: string;
  type: string;
  role: string;
  date: string;
  displayDate: string;
  duration: string;
  category: 'Web' | 'Mobile' | 'UI/UX' | 'Android';
  featured: boolean;
  technologies: string[];
  links: {
    live: string;
    github: string;
  };
  images: {
    cover: string;
    hero: string;
    gallery: string[];
  };
  about: string[];
  features: string[];
};

const mockupProjects = '/assets/mockups/pages-projects.png';
const mockupHome = '/assets/mockups/home.png';
const mockupMobile = '/assets/mockups/main-mobile.png';

export const projects: Project[] = [
  {
    title: 'TaskFlow',
    slug: 'taskflow',
    summary: 'Aplicación web para gestión de tareas y proyectos con colaboración en equipo.',
    type: 'Aplicación Web',
    role: 'Frontend Developer',
    date: '2024-03-01',
    displayDate: 'Mar 2024',
    duration: '3 meses',
    category: 'Web',
    featured: true,
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    links: { live: '#', github: '#' },
    images: { cover: mockupProjects, hero: mockupProjects, gallery: [mockupProjects, mockupHome, mockupMobile] },
    about: [
      'TaskFlow nació con el objetivo de simplificar la gestión de tareas en equipos de trabajo. Permite crear proyectos, asignar tareas, establecer fechas límite y hacer seguimiento del progreso en tiempo real.',
      'La aplicación cuenta con tableros personalizables, notificaciones y una interfaz enfocada en productividad y experiencia de usuario.',
    ],
    features: [
      'Gestión de proyectos y tareas.',
      'Tableros Kanban personalizables.',
      'Asignación de tareas a colaboradores.',
      'Notificaciones en tiempo real.',
      'Comentarios y adjuntos en tareas.',
      'Diseño responsivo y accesible.',
    ],
  },
  {
    title: 'TrackYour',
    slug: 'trackyour',
    summary: 'App de finanzas personales para visualizar gastos, metas y hábitos de ahorro.',
    type: 'Aplicación Web',
    role: 'Frontend Developer',
    date: '2024-02-01',
    displayDate: 'Feb 2024',
    duration: '2 meses',
    category: 'Web',
    featured: true,
    technologies: ['Angular', 'TypeScript', 'UI/UX', 'Firebase'],
    links: { live: '#', github: '#' },
    images: { cover: mockupHome, hero: mockupHome, gallery: [mockupHome, mockupProjects] },
    about: ['TrackYour explora una experiencia clara para consultar movimientos, presupuestos y tendencias financieras sin saturar al usuario.'],
    features: ['Panel de métricas.', 'Visualización de gastos.', 'Objetivos de ahorro.', 'Diseño adaptable.'],
  },
  {
    title: 'GreenStay',
    slug: 'greenstay',
    summary: 'Aplicación mobile para descubrir y reservar alojamientos con una experiencia visual ligera.',
    type: 'Aplicación Mobile',
    role: 'Android Developer',
    date: '2024-01-01',
    displayDate: 'Ene 2024',
    duration: '6 semanas',
    category: 'Android',
    featured: true,
    technologies: ['Android', 'Kotlin', 'UI/UX', 'REST API'],
    links: { live: '#', github: '#' },
    images: { cover: mockupMobile, hero: mockupMobile, gallery: [mockupMobile, mockupHome] },
    about: ['GreenStay propone una navegación mobile enfocada en exploración rápida, fichas visuales y acciones simples para reservar.'],
    features: ['Exploración de alojamientos.', 'Reservas mobile.', 'Filtros por categoría.', 'Interfaz accesible.'],
  },
  {
    title: 'FinanzIA',
    slug: 'finanzia',
    summary: 'Plataforma de finanzas personales con análisis inteligente de gastos.',
    type: 'Dashboard Web',
    role: 'Frontend Developer',
    date: '2023-11-01',
    displayDate: 'Nov 2023',
    duration: '2 meses',
    category: 'Web',
    featured: false,
    technologies: ['Angular', 'Chart.js', 'Supabase'],
    links: { live: '#', github: '#' },
    images: { cover: mockupProjects, hero: mockupProjects, gallery: [mockupProjects] },
    about: ['FinanzIA organiza información financiera en vistas escaneables para apoyar mejores decisiones personales.'],
    features: ['Análisis de gastos.', 'Gráficas interactivas.', 'Categorización automática.', 'Reportes mensuales.'],
  },
  {
    title: 'TrackMyFit',
    slug: 'trackmyfit',
    summary: 'Aplicación Android para seguimiento de entrenamientos, progreso y hábitos.',
    type: 'Aplicación Android',
    role: 'Android Developer',
    date: '2023-09-01',
    displayDate: 'Sep 2023',
    duration: '8 semanas',
    category: 'Mobile',
    featured: false,
    technologies: ['Kotlin', 'Jetpack Compose', 'Room'],
    links: { live: '#', github: '#' },
    images: { cover: mockupMobile, hero: mockupMobile, gallery: [mockupMobile] },
    about: ['TrackMyFit concentra rutinas, métricas y hábitos en una experiencia mobile rápida de consultar.'],
    features: ['Registro de rutinas.', 'Historial de progreso.', 'Base de datos local.', 'Modo oscuro.'],
  },
  {
    title: 'DevMetrics',
    slug: 'devmetrics',
    summary: 'Dashboard para monitoreo de métricas y rendimiento de aplicaciones.',
    type: 'Dashboard Web',
    role: 'Frontend Developer',
    date: '2023-07-01',
    displayDate: 'Jul 2023',
    duration: '5 semanas',
    category: 'Web',
    featured: false,
    technologies: ['React', 'TypeScript', 'Recharts'],
    links: { live: '#', github: '#' },
    images: { cover: mockupProjects, hero: mockupProjects, gallery: [mockupProjects] },
    about: ['DevMetrics traduce información técnica en paneles visuales para detectar problemas con rapidez.'],
    features: ['Monitoreo de métricas.', 'Filtros por periodo.', 'Alertas visuales.', 'Panel responsivo.'],
  },
];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);
