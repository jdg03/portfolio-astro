import { TAGS } from "./Tags.js";

export const projects = [
  {
    id: 1,
    title: "Sistema de Inventario",
    image:
      "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/projects/inventorySystem/imagen6.png",
    description:
      "Plataforma web para gestionar los productos de un taller, seguimiendo de compras y ventas, y dashboard interactivo como soporte para la toma de decisiones.",
    github: "https://github.com/amos18g/taller",
    technologies: [TAGS.NEXT, TAGS.TAILWIND, TAGS.SUPABASE],
    is_active: false,
  },
  {
    id: 2,
    title: "Sistema de Matrícula",
    image: "/projects/matricula1.webp",
    description:
      "Sistema de de matrícula para llevar el control de los estudiantes y expedientes estudiantiles.",
    github: "https://github.com/jdg03/educaTodos",
    technologies: [TAGS.SQLSERVER, TAGS.NODEJS, TAGS.REACT, TAGS.TAILWIND],
    is_active: false,
  },
  {
    id: 3,
    title: "Blog informativo",
    image: "/projects/blog1.webp",
    description:
      "Blog informativo para un bufete de abogados donde los clientes pueden buscar información sobre tramites legales junto con panel administrativo para gestionar las entradas.",
    github: "https://github.com/jdg03/angular-blog-app",
    technologies: [TAGS.ANGULAR, TAGS.TAILWIND, TAGS.FIREBASE],
    is_active: false,
  },
  {
    id: 4,
    title: "Detector de lenguaje de señas",
    image:
      "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/projects/signLanguageDetector/imagen2.PNG",
    description:
      "Proyecto de inteligencia artificial para reconocer gestos del lenguaje de señas mediante visión computacional y aprendizaje automático.",
    github:
      "https://github.com/jdg03/python_tensorFlow_letterDetectorSignLanguage",
    technologies: [TAGS.PYTHON, TAGS.TENSORFLOW],
    is_active: false,
  },
  {
    id: 5,
    title: "Backend de Ecommerce web",
    image:
      "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/projects/ecommerceAspNet/Imagen1.png",
    description:
      "Arquitectura del backend de un ecommerce wep, siguiendo patrones de clean arquitecture, CQRS, Mediator, Fluent Validation y autenticación con identity y JWT.",
    github: "https://github.com/jdg03/aspnet-core-react-ecommerce",
    technologies: [TAGS.SQLSERVER, TAGS.NET, TAGS.JWT],
    is_active: false,
  },
  {
    id: 6,
    title: "Portafolio con animaciones 3d",
    image: "/projects/porfolio.webp",
    description:
      "Portafolio web con animaciones 3d usando librerias como motion y three.js",
    github: "",
    technologies: [TAGS.REACT, TAGS.TAILWIND],
    link: "https://portfolio-jose-gonzalez.vercel.app/",
    is_active: true,
  },
];
