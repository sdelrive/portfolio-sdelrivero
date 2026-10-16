export type Language = 'ESP' | 'ENG';

const ESP = {
  about: {
    title: 'Bienvenidos',
    text: 'Mi nombre es Santiago del Rivero, soy desarrollador full-stack uruguayo viviendo en Montevideo, UY. Tengo experiencia en el desarrollo de software, desarrollo de servicios y sitios web de calidad con flujos de miles de personas por día, garantizando servicios estables, escalables, resilientes y aplicando las más modernas soluciones tecnológicas. También cuento con experiencia liderando personas para garantizar la mejor calidad del producto.',
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
        'Carga rápida y buenas prácticas de SEO',
        'Componentes reutilizables y fáciles de mantener',
      ],
    },
    backend: {
      eyebrow: 'Backend',
      title: 'Arquitecturas robustas para aplicaciones escalables.',
      description: 'Implemento servicios en Node.js y NestJS conectados a bases de datos como DynamoDB o MongoDB, asegurando rendimiento, seguridad y facilidad de mantenimiento.',
      points: [
        'APIs REST documentadas con Swagger',
        'Servicios preparados para miles de usuarios por día',
        'Despliegues con Docker, Kubernetes y AWS',
      ],
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
    text: "My name is Santiago del Rivero, I'm a full-stack developer from Uruguay currently living in Montevideo. I have experience building software, services, and high-traffic websites that handle thousands of users per day, ensuring stability, scalability, resilience, and the use of modern technological solutions. I also have experience leading teams to guarantee the highest product quality.",
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
        'Fast loading and SEO best practices',
        'Reusable, easy-to-maintain components',
      ],
    },
    backend: {
      eyebrow: 'Backend',
      title: 'Robust architectures for scalable applications.',
      description: 'I implement services in Node.js and NestJS connected to databases like DynamoDB or MongoDB, ensuring performance, security, and maintainability.',
      points: [
        'REST APIs documented with Swagger',
        'Services built to handle thousands of users per day',
        'Deployments with Docker, Kubernetes and AWS',
      ],
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
