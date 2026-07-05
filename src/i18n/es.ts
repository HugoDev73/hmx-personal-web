export const ui = {
  locale: 'es-MX',
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Contacto', href: 'mailto:' },
  ],
  hero: {
    wordmark: 'Hugo Mendoza',
    title: 'Frontend Developer',
    tagline: 'Diseño y código en equilibrio.',
    description: 'Desarrollo interfaces que no solo se ven bien, también funcionan bien: rápidas, accesibles y pensadas para las personas que las usan.',
    primaryCta: 'Ver proyectos',
    secondaryCta: 'Hablemos',
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
    text: 'Frontend Developer. Diseño y código en equilibrio para construir interfaces claras, rápidas y accesibles.',
  },
} as const;
