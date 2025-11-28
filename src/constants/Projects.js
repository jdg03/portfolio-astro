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
    is_active: true,
  },
  {
    id: 2,
    title: "Sistema de Matrícula",
    image:
      "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/projects/registrationSystem/imagen1.png",
    description:
      "Sistema de de matrícula para llevar el control de los estudiantes y expedientes estudiantiles.",
    github: "https://github.com/jdg03/educaTodos",
    technologies: [TAGS.TAILWIND, TAGS.REACT, TAGS.NODEJS, TAGS.SQLSERVER],
    is_active: true,
  },
  {
    id: 3,
    title: "Blog informativo",
    image:
      "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/projects/informativeblog/imagen2.png",
    description:
      "Blog informativo para un bufete de abogados y panel administrativo para gestionar las entradas.",
    github: "https://github.com/jdg03/angular-blog-app",
    technologies: [TAGS.ANGULAR, TAGS.TAILWIND, TAGS.FIREBASE],
    is_active: true,
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
    is_active: true,
  },
  {
    id: 5,
    title: "Backend de Ecommerce web",
    image:
      "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/projects/ecommerceAspNet/Imagen1.png",
    description:
      "Arquitectura del backend de un ecommerce wep, siguiendo patrones de clean arquitecture, CQRS, Mediator, Fluent Validation y autenticación con identity y JWT.",
    github: "https://github.com/jdg03/aspnet-core-react-ecommerce",
    technologies: [TAGS.SQLSERVER, TAGS.CSHARP, TAGS.JWT],
    is_active: true,
  },
];
