export const ui = {
  locale: 'es-MX',
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Contacto', href: 'mailto:hola@hmx.dev' },
  ],
  hero: {
    wordmark: 'Hugo Mendoza',
    title: 'Angular, Android y UI/UX.',
    description: 'Desarrollo experiencias digitales claras, escalables y centradas en el usuario.',
    primaryCta: 'Ver proyectos',
    secondaryCta: 'Contactar',
    availabilityTitle: 'Disponible para proyectos',
    availabilityMeta: 'Freelance · Remoto',
  },
  projects: {
    eyebrow: 'Mi trabajo',
    title: 'Proyectos',
    description: 'Una selección de proyectos enfocados en experiencia de usuario, rendimiento y código limpio.',
    featuredTitle: 'Proyectos destacados',
    allProjects: 'Ver todos los proyectos',
    talk: 'Hablemos de tu proyecto',
    moreGithub: 'Ver más proyectos en GitHub',
    filters: ['Todos', 'Web', 'Mobile', 'UI/UX', 'Android'],
    sort: 'Más recientes',
  },
  specialties: {
    title: 'Áreas de enfoque',
  },
  detail: {
    back: 'Volver a proyectos',
    featured: 'Proyecto destacado',
    live: 'Ver proyecto en vivo',
    github: 'Ver código en GitHub',
    about: 'Sobre el proyecto',
    features: 'Características',
    gallery: 'Galería de capturas',
  },
  footer: {
    text: 'Desarrollando experiencias digitales modernas, funcionales y centradas en el usuario.',
  },
} as const;
