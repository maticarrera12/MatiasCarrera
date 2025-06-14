import reactLogo from "../assets/images/react.png";
import nodeLogo from "../assets/images/node.png";
import cssLogo from "../assets/images/css.png";
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
import ssawwwardwinner from "../assets/images/ssawwwardwinner.png"
import ssquetedebo from "../assets/images/quetedebo.png"
import ssvelyo from "../assets/images/ssvelyo.png"
import typescriptLogo from "../assets/images/typescript.png";
export const technologies = [
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
    name: "JavaScript",
    image: jsLogo,
    category: "front-end",
  },
  {
    name: "TypeScript",
    image: typescriptLogo,
    category: "front-end",
  },
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

];

export const projects = [
  {
    title: "Velyo",
    image: ssvelyo,
    description:
      "Velyo es una aplicación web de reservas de alojamientos desarrollada como proyecto fullstack. Permite a los usuarios explorar, buscar y reservar distintos tipos de alojamientos, como habitaciones y casas completas. La aplicación incluye funcionalidades como filtrado por características, carga de imágenes, gestión de reservas y panel de administración. El frontend está desarrollado con ReactJS, utilizando librerías como Ant Design, Formik y Yup para la construcción de formularios y validaciones. El backend está construido con Java Spring Boot, siguiendo una arquitectura basada en controladores, servicios y repositorios.La persistencia de datos se realiza mediante una base de datos MySQL.",
    codeLink: "https://github.com/maticarrera12/velyo-professional-developer",
    technologies: ["ReactJS", "HTML", "CSS", "JavaScript" , "Java", "SpringBoot", "MYSQL",],
  },
  {
    title: "MedReserva",
    image: ssmedreserva,
    description:
      "MedReserva es una aplicación web desarrollada con el stack MERN (MongoDB, Express.js, ReactJS y Node.js) para la gestión de turnos médicos. Permite a pacientes reservar turnos, a médicos administrar su disponibilidad y a administradores gestionar usuarios y especialidades. La app incluye autenticación por roles y está integrada con Mercado Pago para la gestión de pagos. El diseño está construido con TailwindCSS, y se utilizan librerías como React Router y Axios para la navegación y consumo de APIs.",
    projectLink: "https://med-reserva.vercel.app",
    codeLink: "https://github.com/maticarrera12/MedReserva",
    technologies: ["ReactJS", "Node.js", "MongoDB", "TailwindCSS", "HTML", "CSS", "JavaScript" ,"Express.js"],
  },
  {
    title: "QueTeDebo?",
    image: ssquetedebo,
    description: "¿Saliste con amigos y uno terminó pagando todo? Con esta app no hace falta hacer cuentas raras ni pelearse con la calculadora. Cargás quién pagó qué y te dice al toque cuánto tiene que poner cada uno para que todos queden a mano. ¡Ideal para cenas, birras o viajes!",
    projectLink: "https://quetedebo.vercel.app",
    codeLink: "https://github.com/maticarrera12/quetedebo",
    technologies: ["ReactJS", "TypeScript", "TailwindCSS", "JavaScript"]
  },
  {
    title: "FilmTrailers",
    image: ssfilmtrailers,
    description:
    "Clon de una plataforma de series y peliculas muy famosa.",
    projectLink: "https://film-trailers.vercel.app",
    codeLink: "https://github.com/maticarrera12/FilmTrailers",
    technologies: ["ReactJS", "HTML", "CSS","TailwindCSS", "JavaScript"],
  },
  {
    title: "Awwward-winner",
    image: ssawwwardwinner,
    description:
    "Clon de una pagina awwward-winner.",
    projectLink: "https://awwwards-winner.vercel.app/",
    codeLink: "https://github.com/maticarrera12/awwwards-winner",
    technologies: ["ReactJS", "HTML", "CSS","TailwindCSS", "JavaScript"],
  },
]

