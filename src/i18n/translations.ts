interface NavTranslations {
  about: string;
  skills: string;
  projects: string;
  workspace: string;
  contact: string;
}

interface CardTranslation {
  title: string;
  description: string;
}

interface ProjectTranslation {
  title: string;
  description: string;
  details: string;
}

interface GearTranslation {
  id: string;
  name: string;
  detail: string;
  category: string;
  specs: string[];
}

export interface Translations {
  nav: NavTranslations;
  hero: {
    subtitle: string;
    tagline: string;
    downloadCV: string;
    learnMore: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
    cards: CardTranslation[];
  };
  skills: {
    label: string;
    title: string;
    description: string;
  };
  projects: {
    label: string;
    title: string;
    description: string;
    liveDemo: string;
    items: ProjectTranslation[];
  };
  workspace: {
    label: string;
    title: string;
    description: string;
    intro: string;
    backLabel: string;
    toc: string;
    scrollTop: string;
    categories: { id: string; label: string }[];
    gear: GearTranslation[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
  };
  footer: {
    rights: string;
    builtWith: string;
    downloadCV: string;
  };
}

export type Language = "es" | "en";

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      workspace: "Espacio de trabajo",
      contact: "Contacto",
    },
    hero: {
      subtitle: "Desarrollador Full Stack",
      tagline: "Desarrollador con experiencia impulsando soluciones web, convirtiendo procesos manuales en flujos automatizados y creando interfaces eficientes.",
      downloadCV: "Descargar CV",
      learnMore: "Conocer más",
    },
    about: {
      label: "Sobre mí",
      title: "Código, Creación & Conexión",
      description: "Mi trabajo se encuentra en la intersección de la precisión en ingeniería y la visión creativa.",
      cards: [
        { title: "Código", description: "Escribiendo código limpio, escalable y con arquitectura orientada al rendimiento." },
        { title: "Creación", description: "Diseñando interfaces que son funcionales y visualmente atractivas." },
        { title: "Conexión", description: "Construyendo puentes entre ideas, personas y tecnología." },
        { title: "Performance", description: "Optimizando cada milisegundo para la mejor experiencia de usuario." },
        { title: "Pasión", description: "Impulsado por la curiosidad y el amor por resolver problemas complejos." },
        { title: "Impacto", description: "Creando software que hace una diferencia real en la vida de las personas." },
      ],
    },
    skills: {
      label: "Habilidades",
      title: "Tech Stack",
      description: "Herramientas y tecnologías que uso para dar vida a las ideas.",
    },
    projects: {
      label: "Trabajo",
      title: "Proyectos",
      description: "Proyectos seleccionados que muestran mis habilidades y pasión.",
      liveDemo: "Ver Sitio",
      items: [
        { title: "Brío", description: "App de comida, gym y hábitos que funciona sin internet.", details: "Producto propio con React, TypeScript y Supabase: registro de comida con buscador y escáner, menú semanal, rutinas de gym, hábitos y avisos push." },
        { title: "Nexus-TIC", description: "Orientador para elegir empresa de residencia.", details: "Proyecto escolar con React y TypeScript: diagnóstico de cinco preguntas que ordena empresas por compatibilidad, con voz opcional y en dos idiomas." },
        { title: "Lupac Industrial", description: "Catálogo de maquinaria con dominio propio.", details: "Sitio para un cliente con React, Vite y Tailwind CSS: catálogo por modelos, enfoque en SEO y publicado en lu-pac.com." },
        { title: "Minea Company", description: "Tienda de gomitas artesanales.", details: "Sitio para una microempresa con React y Tailwind CSS: catálogo y carrito que arma el pedido para WhatsApp (hoy se conserva como muestra)." },
      ],
    },
    workspace: {
      label: "Setup",
      title: "Mi Espacio de Trabajo",
      description: "Las herramientas y el entorno donde las ideas se hacen realidad.",
      intro: "Un buen espacio de trabajo es la base de cada proyecto. Cada herramienta fue elegida pensando en productividad, comodidad y rendimiento. Aquí es donde las ideas cobran vida.",
      backLabel: "Volver al workspace",
      toc: "Contenido",
      scrollTop: "Volver arriba",
      categories: [
        { id: "computer", label: "Computadora" },
        { id: "display", label: "Pantalla" },
        { id: "peripherals", label: "Periféricos" },
        { id: "smart", label: "Dispositivos Inteligentes" },
      ],
      gear: [
        {
          id: "laptop",
          name: "Laptop de desarrollo",
          detail: "Laptop principal de desarrollo",
          category: "computer",
          specs: [
            "Pantalla 15.6\" Full HD IPS 144Hz",
            "Procesador Intel Core i5 / Ryzen 5",
            "16 GB RAM DDR5",
            "SSD NVMe 512 GB + HDD 1 TB",
            "GPU NVIDIA GeForce RTX 4050",
            "Teclado retroiluminado RGB",
          ],
        },
        {
          id: "keyboard",
          name: "Teclado mecánico",
          detail: "Teclado mecánico 75%",
          category: "peripherals",
          specs: [
            "Layout 75% compacto",
            "Switches mecánicos Hot-swappable",
            "Iluminación RGB personalizable",
            "Conexión USB-C / Bluetooth / 2.4G",
            "Estructura de aluminio premium",
            "Foam de silenciamiento integrado",
          ],
        },
        {
          id: "mouse",
          name: "Mouse inalámbrico",
          detail: "Mouse gaming ergonómico",
          category: "peripherals",
          specs: [
            "Sensor óptico de alta precisión",
            "Hasta 26,000 DPI ajustable",
            "Conexión inalámbrica 2.4G / Bluetooth / USB-C",
            "Peso ultraligero ~55g",
            "Switches de larga duración",
            "Iluminación RGB",
          ],
        },
        {
          id: "monitor",
          name: "Monitor Full HD",
          detail: "Pantalla principal externa",
          category: "display",
          specs: [
            "Pantalla 24\" Full HD 1920x1080",
            "Panel IPS con amplio ángulo de visión",
            "75Hz tasa de refresco",
            "Conexión HDMI / VGA",
            "Modo de baja luz azul",
            "Soporte VESA compatible",
          ],
        },
        {
          id: "speaker",
          name: "Bocina inteligente",
          detail: "Asistente inteligente de escritorio",
          category: "smart",
          specs: [
            "Bocina compacta con asistente de voz",
            "Asistente de voz integrado",
            "Altavoz con sonido envolvente",
            "Control de música y podcasts",
            "Automatización del hogar inteligente",
            "Temporizadores y recordatorios por voz",
          ],
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "Conectemos",
      description: "Abierto a oportunidades, colaboraciones y conversaciones interesantes.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Hecho con React, Tailwind & Framer Motion",
      downloadCV: "Descargar CV",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      workspace: "Workspace",
      contact: "Contact",
    },
    hero: {
      subtitle: "Full Stack Developer",
      tagline: "Developer with experience driving web solutions, converting manual processes into automated workflows, and creating efficient interfaces.",
      downloadCV: "Download CV",
      learnMore: "Learn more",
    },
    about: {
      label: "About",
      title: "Code, Creation & Connection",
      description: "My work sits at the intersection of engineering precision and creative vision.",
      cards: [
        { title: "Code", description: "Writing clean, scalable code with performance-driven architecture." },
        { title: "Creation", description: "Designing interfaces that are both functional and beautiful." },
        { title: "Connection", description: "Building bridges between ideas, people, and technology." },
        { title: "Performance", description: "Optimizing every millisecond for the best user experience." },
        { title: "Passion", description: "Driven by curiosity and the love of solving complex problems." },
        { title: "Impact", description: "Creating software that makes a real difference in people's lives." },
      ],
    },
    skills: {
      label: "Skills",
      title: "Tech Stack",
      description: "Tools and technologies I use to bring ideas to life.",
    },
    projects: {
      label: "Work",
      title: "Projects",
      description: "Selected projects that showcase my skills and passion.",
      liveDemo: "Live Demo",
      items: [
        { title: "Brío", description: "Food, gym and habits app that works offline.", details: "Own product built with React, TypeScript and Supabase: food logging with search and barcode scanner, weekly menu, gym routines, habits and push notifications." },
        { title: "Nexus-TIC", description: "Advisor to choose an internship company.", details: "School project with React and TypeScript: a five-question assessment that ranks companies by match, with optional voice and two languages." },
        { title: "Lupac Industrial", description: "Machinery catalog on its own domain.", details: "Client site with React, Vite and Tailwind CSS: model-based catalog, SEO focus, live at lu-pac.com." },
        { title: "Minea Company", description: "Artisan gummy candy store.", details: "Small-business site with React and Tailwind CSS: catalog and a cart that builds the WhatsApp order (now kept as a showcase)." },
      ],
    },
    workspace: {
      label: "Setup",
      title: "My Workspace",
      description: "The tools and environment where ideas become reality.",
      intro: "A good workspace is the foundation of every project. Each tool was chosen with productivity, comfort, and performance in mind. This is where ideas come to life.",
      backLabel: "Back to workspace",
      toc: "Contents",
      scrollTop: "Scroll to top",
      categories: [
        { id: "computer", label: "Computer" },
        { id: "display", label: "Display" },
        { id: "peripherals", label: "Peripherals" },
        { id: "smart", label: "Smart Devices" },
      ],
      gear: [
        {
          id: "laptop",
          name: "Development laptop",
          detail: "Main development laptop",
          category: "computer",
          specs: [
            "15.6\" Full HD IPS 144Hz Display",
            "Intel Core i5 / Ryzen 5 Processor",
            "16 GB DDR5 RAM",
            "512 GB NVMe SSD + 1 TB HDD",
            "NVIDIA GeForce RTX 4050 GPU",
            "RGB Backlit Keyboard",
          ],
        },
        {
          id: "keyboard",
          name: "Mechanical keyboard",
          detail: "75% Mechanical Keyboard",
          category: "peripherals",
          specs: [
            "Compact 75% Layout",
            "Hot-swappable Mechanical Switches",
            "Customizable RGB Lighting",
            "USB-C / Bluetooth / 2.4G Connection",
            "Premium Aluminum Structure",
            "Built-in Sound Dampening Foam",
          ],
        },
        {
          id: "mouse",
          name: "Wireless mouse",
          detail: "Ergonomic gaming mouse",
          category: "peripherals",
          specs: [
            "High-precision Optical Sensor",
            "Up to 26,000 Adjustable DPI",
            "Wireless 2.4G / Bluetooth / USB-C",
            "Ultra-light ~55g Weight",
            "Long-lasting Switches",
            "RGB Lighting",
          ],
        },
        {
          id: "monitor",
          name: "Full HD Monitor",
          detail: "Main external display",
          category: "display",
          specs: [
            "24\" Full HD 1920x1080 Display",
            "IPS Panel with Wide Viewing Angle",
            "75Hz Refresh Rate",
            "HDMI / VGA Connection",
            "Low Blue Light Mode",
            "VESA Mount Compatible",
          ],
        },
        {
          id: "speaker",
          name: "Smart speaker",
          detail: "Smart desktop assistant",
          category: "smart",
          specs: [
            "Compact speaker with voice assistant",
            "Built-in Voice Assistant",
            "Surround Sound Speaker",
            "Music & Podcast Control",
            "Smart Home Automation",
            "Voice Timers & Reminders",
          ],
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's Connect",
      description: "Open to opportunities, collaborations, and interesting conversations.",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with React, Tailwind & Framer Motion",
      downloadCV: "Download CV",
    },
  },
};
