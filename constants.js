export const METADATA = {
  author: "Elias Huc",
  title: "Portfolio | Elias Huc",
  description:
      "Shubh Porwal is a Frontend Developer from Kuwait, interested in crafting beautiful and functional applications.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubh731",
  keywords: [
    "Shubh Porwal",
    "Frontend Developer",
    "Web Developer",
    "React Native Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
      "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
  language: "English",
};

export const CV_LINK = "/pdf/cvelias.pdf";

export const TABLE_LINK = "/pdf/tableaucomp.pdf";


export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Compétences",
    ref: "skills",
  },
  {
    name: "Projets",
    ref: "projects",
  },
  {
    name: "Entreprise",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "BackEnd et FrontEnd développeur",
  "Etudiant créatif et passioné",
  "Alternant ambitieux et motivé",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: elias.huc@gmail.com ",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/elias-huc-87365b184/",
  },
  {
    name: "github",
    url: "https://github.com/GucciELias",
  },
  {
    name: "instagram",
    url: "",
  },
  {
    name: "twitter",
    url: "",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "sass",
    "php",
    "java",
    "python",
    "nodejs",
    "webpack",
    "php",
  ],

  librariesAndFrameworks: [
    "react",
    "nextjs",
    "chakra-ui",
    "symfony",
  ],
  databases: ["mysql","mariadb"],
  other: ["git"],
};

export const PROJECTS = [

  {
    name: "HelpOrt",
    image: "/projects/helport.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Web App réalisé pendant la formation",
    gradient: ["#000066", "#6699FF"],
    url: "/htmlprojet/helport.html",
    tech: ["php", "html", "symfony", "javascript", "css"],
  },

  {
    name: "Bibliotheque BienVu",
    image: "/projects/bvlogo.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Developpement d'un index pour gerer des clients et des prestataires",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "/htmlprojet/bienvu.html",
    tech: ["java", "mysql"],
  },

  {
    name: "WebApp Casino",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
        "Projet personnel de WebApp de Casino en ligne",
    gradient: ["#F14658", "#DC2537"],
    url: "/htmlprojet/casino.html",
    tech: ["symfony", "javascript", "nodejs","php","mysql"],
  },

];


export const COMPANY = [


  {
    name: "Alten",
    image: "/projects/alten.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "ALTERNANCE",
    gradient: ["#F14658", "#DC2537"],
    url: "/htmlcompany/altencompany.html",
    tech: [],
  },

  {
    name: "Bureau Bien Vu",
    image: "/projects/bvlogo.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "STAGE",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "/htmlcompany/bienvucompay.html",
    tech: [],
  },

  {
    name: "...",
    image: "/projects/pi.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "ALTERNANCE",
    gradient: ["#000066", "#6699FF"],
    url: "https://shubh73-medium.vercel.app/",
    tech: [],
  },


];

export const WORK = [
  {
    id: 1,
    company: "Bureau BienVu",
    title: "Frontend Developer",
    location: "Bangalore, Karnataka",
    range: "December - Current",
    responsibilities: [
      "Led creation of a captivating cross-platform e-commerce solution.",
      "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
      "The app boasts a DAU base of 13k and an extensive MAU count of 170k.",
    ],
    url: "https://mydukaan.io/",
    video: "/work/dukaan.mp4",
  },
  {
    id: 2,
    company: "Alten",
    title: "Frontend Developer Intern",
    location: "Goa",
    range: "May - October 2022",
    responsibilities: [
      "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
      "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
      "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
    ],
    url: "https://www.aviate.jobs/",
    video: "/work/aviate.mp4",
  },



];

export const GTAG = "G-5HCTL2TJ5W";
