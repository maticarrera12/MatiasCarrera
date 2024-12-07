import reactLogo from "../assets/images/react.png";
import nodeLogo from "../assets/images/node.png";
import githubLogo from "../assets/images/git.png";
import cssLogo from "../assets/images/css.png";
import figmaLogo from "../assets/images/figma.png";
import htmlLogo from "../assets/images/html.png";
import javaLogo from "../assets/images/java.png";
import jsLogo from "../assets/images/js.png";
import mongodbLogo from "../assets/images/mongodb.png";
import mysqlLogo from "../assets/images/mysql.png";
import pythonLogo from "../assets/images/python.png";
import springbootLogo from "../assets/images/springboot.png";
import tailwindLogo from "../assets/images/tailwind.png";
import ssfilmtrailers from "../assets/images/ssfilmtrailers.png";
import ssmedreserva from "../assets/images/ssmedreserva.png";
import expressjsLogo from "../assets/images/expressjs.png"

export const technologies = [
  {
    name: "HTML",
    image: htmlLogo,
    category: "front-end",
  },
  {
    name: "CSS",
    image: cssLogo,
    category: "front-end",
  },
  {
    name: "JavaScript",
    image: jsLogo,
    category: "front-end",
  },
  {
    name: "ReactJS",
    image: reactLogo,
    category: "front-end",
  },
  {
    name: "TailwindCSS",
    image: tailwindLogo,
    category: "front-end",
  },
  {
    name: "Node.js",
    image: nodeLogo,
    category: "back-end",
  },
  {
    name: "MYSQL",
    image: mysqlLogo,
    category: "back-end",
  },
  {
    name: "MongoDB",
    image: mongodbLogo,
    category: "back-end",
  },
  {
    name: "Java",
    image: javaLogo,
    category: "back-end",
  },
  {
    name: "SpringBoot",
    image: springbootLogo,
    category: "back-end",
  },
  {
    name: "Python",
    image: pythonLogo,
    category: "back-end",
  },
  {
    name: "Express.js",
    image: expressjsLogo,
    category: "back-end",
  },
  {
    name: "Git",
    image: githubLogo,
    category: "Herramientas",
  },
  {
    name: "Figma",
    image: figmaLogo,
    category: "Herramientas",
  },
];

export const projects = [
  {
    title: "MedReserva",
    image: ssmedreserva,
    description:
      "Una moderna página MERN de turnos. Cuenta con cuenta para pacientes, médicos y administrador. Integrado a MercadoPago",
    projectLink: "https://med-reserva.vercel.app/",
    codeLink: "https://github.com/maticarrera12/MedReserva",
    technologies: ["ReactJS", "Node.js", "MongoDB", "TailwindCSS", "HTML", "CSS", "JavaScript" ,"Express.js"],
  },
  {
    title: "Carrito de Compras",
    image: ssmedreserva,
    description:
      "Un carrito de compras realizado con ReactJS, Bootstrap 5 y MaterialUI",
    projectLink: "https://carritocompras.matiascarreadev.com/",
    codeLink: "https://github.com/maticarrera12/CarritoComprasReactJS",
    technologies: ["ReactJS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "FilmTrailers",
    image: ssfilmtrailers,
    description:
    "Clon de una plataforma de series y peliculas muy famosa",
    projectLink: "https://film-trailers.vercel.app/",
    codeLink: "https://github.com/maticarrera12/FilmTrailers",
    technologies: ["ReactJS", "HTML", "CSS","TailwindCSS", "JavaScript"],
  },
]

