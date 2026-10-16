export type Language = 'ESP' | 'ENG';

const ESP = {
  about: {
    title: 'Bienvenidos',
    text: 'Mi nombre es Santiago del Rivero, Ingeniero de Software con experiencia en el mundo del retail y retail media. Desarrollo software, servicios y sitios web estables y escalables, preparados para miles de usuarios por día, y los combino con estrategias de marketing digital: posicionamiento SEO para que tus clientes te encuentren en Google e integraciones de publicidad para monetizar tu tráfico. Tecnología y marketing trabajando juntos para que tu negocio crezca online.',
    textShort: 'Soy Santiago del Rivero, Ingeniero de Software con experiencia en retail y retail media. Desarrollo sitios y servicios escalables, y los potencio con SEO y publicidad digital para que tu negocio crezca online.',
    imageAlt: 'Ilustración de un desarrollador programando en su escritorio',
    contactButton: '¡Contactame!',
  },
  brochures: {
    frontend: {
      eyebrow: 'Frontend',
      title: 'Experiencias digitales que inspiran confianza.',
      description: 'Diseño y desarrollo de interfaces modernas, rápidas y accesibles usando tecnologías como React, Vite y Tailwind. Creá una presencia online sólida y atractiva para tu negocio.',
      points: [
        'Sitios y aplicaciones responsive, pensados primero para el celular',
        'Interfaces accesibles para todo tipo de usuarios',
        'Componentes reutilizables y fáciles de mantener',
      ],
    },
    seo: {
      eyebrow: 'SEO y posicionamiento',
      title: 'Que tus clientes te encuentren en Google.',
      description: 'Optimizo tu sitio para que aparezca entre los primeros resultados de búsqueda: estructura, contenido y rendimiento pensados para Google, para atraer visitas de calidad sin depender solo de la publicidad.',
      points: [
        'SEO técnico: metaetiquetas, sitemap, datos estructurados y URLs limpias',
        'Sitios rápidos que cumplen con las Core Web Vitals de Google',
        'Seguimiento de posiciones y visitas con Google Search Console y Analytics',
      ],
      searchQuery: 'local de comida rápida en Montevideo',
      trafficLabel: 'Visitas orgánicas',
    },
    adtech: {
      eyebrow: 'Marketing digital',
      title: 'Integraciones de publicidad que generan ingresos.',
      description: 'Conecto tu sitio con plataformas de publicidad digital como Google Ad Manager y Topsort para monetizar tu tráfico con anuncios display y productos patrocinados, sin sacrificar la experiencia del usuario.',
      points: [
        'Espacios publicitarios gestionados con Google Ad Manager',
        'Productos patrocinados y retail media con Topsort',
        'Medición de impresiones y clics de cada campaña',
      ],
      adLabel: 'Anuncio',
      sponsoredLabel: 'Patrocinado',
      impressionsLabel: 'Impresiones',
    },
  },
  theme: {
    toggle: 'Modo oscuro',
  },
  skills: {
    title: 'Habilidades',
  },
  contact: {
    title: 'Contacto',
    text: '¿Quieres trabajar conmigo? ¡Hablemos!',
    button: 'Enviame un correo',
  },
  contactForm: {
    title: 'Hablemos 👋',
    subtitle: 'Contame brevemente qué necesitás y te respondo por mail.',
    close: 'Cerrar',
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre',
    emailLabel: 'Email',
    emailPlaceholder: 'tu@email.com',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Contame un poco del proyecto...',
    cancel: 'Cancelar',
    send: 'Enviar',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
};

export type Translations = typeof ESP;

const ENG: Translations = {
  about: {
    title: 'Welcome',
    text: "I'm Santiago del Rivero, a Software Engineer with experience in retail and retail media. I build stable, scalable software, services and websites ready for thousands of users per day, and I combine them with digital marketing strategies: SEO so your customers find you on Google, and ad integrations to monetize your traffic. Technology and marketing working together to help your business grow online.",
    textShort: "I'm Santiago del Rivero, a Software Engineer with experience in retail and retail media. I build scalable websites and services, and boost them with SEO and digital advertising to help your business grow online.",
    imageAlt: 'Illustration of a developer coding at their desk',
    contactButton: 'Contact me',
  },
  brochures: {
    frontend: {
      eyebrow: 'Frontend',
      title: 'Digital experiences that inspire trust.',
      description: 'I design and develop modern, fast and accessible interfaces using technologies like React, Vite and Tailwind. Build a solid and attractive online presence for your business.',
      points: [
        'Responsive, mobile-first websites and apps',
        'Accessible interfaces for every kind of user',
        'Reusable, easy-to-maintain components',
      ],
    },
    seo: {
      eyebrow: 'SEO & search ranking',
      title: 'Get found by your customers on Google.',
      description: 'I optimize your site to rank among the top search results: structure, content and performance built for Google, to attract quality traffic without relying only on ads.',
      points: [
        'Technical SEO: meta tags, sitemap, structured data and clean URLs',
        "Fast sites that meet Google's Core Web Vitals",
        'Ranking and traffic tracking with Google Search Console and Analytics',
      ],
      searchQuery: 'fast food restaurant in Montevideo',
      trafficLabel: 'Organic traffic',
    },
    adtech: {
      eyebrow: 'Digital marketing',
      title: 'Ad integrations that drive revenue.',
      description: 'I connect your site with digital advertising platforms like Google Ad Manager and Topsort to monetize your traffic with display ads and sponsored products, without sacrificing user experience.',
      points: [
        'Ad placements managed with Google Ad Manager',
        'Sponsored products and retail media with Topsort',
        'Impression and click tracking for every campaign',
      ],
      adLabel: 'Ad',
      sponsoredLabel: 'Sponsored',
      impressionsLabel: 'Impressions',
    },
  },
  theme: {
    toggle: 'Dark mode',
  },
  skills: {
    title: 'Skills',
  },
  contact: {
    title: 'Contact me',
    text: 'Want to talk? Contact me!',
    button: 'Send me an email',
  },
  contactForm: {
    title: "Let's talk 👋",
    subtitle: "Tell me briefly what you need and I'll get back to you by email.",
    close: 'Close',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@email.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me a bit about the project...',
    cancel: 'Cancel',
    send: 'Send',
  },
  footer: {
    rights: 'All rights reserved.',
  },
};

export const translations: Record<Language, Translations> = { ESP, ENG };
