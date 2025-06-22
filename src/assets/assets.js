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
import nextlogo from "../assets/images/next.png";
import ssinquirai from "../assets/images/ssinquirai.png";
import ssvelvetpour from "../assets/images/ssvelvetpour.png";

export const technologies = [
  {
    name: "Next.js",
    image: nextlogo,
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
    name: "JavaScript",
    image: jsLogo,
    category: "front-end",
  },
  {
    name:'GSAP',
    image: "https://jsmastery.com/_next/image?url=https%3A%2F%2Fjavascript-mastery.s3.amazonaws.com%2Fassets%2Fcontent%2Fcourses%2F1746581370764%2Ficon%2FGSAP%2520Pro%253A%2520Animate%2520Like%2520a%2520Boss%2520%25F0%259F%259A%2580.png&w=128&q=75",
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

export const projects = [{
  title: "InquirAi",
  image: ssinquirai,
  description:
    "InquirAi es una aplicación web que permite a los usuarios realizar preguntas y recibir respuestas generadas por inteligencia artificial. Utiliza la API de OpenAI para procesar las preguntas y generar respuestas. La aplicación cuenta con un diseño responsivo, una interfaz de usuario intuitiva y un sistema de autenticación para usuarios registrados. Los usuarios pueden hacer preguntas, ver respuestas anteriores y gestionar su perfil.",
  projectLink: "https://inquirai.vercel.app",
  codeLink: "https://github.com/maticarrera12/inquirai",
  technologies:["Next.js", "TailwindCSS","TypeScript", "JavaScript",  "MongoDB"],
},
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
    title: "VelvetPour",
    image: ssvelvetpour,
    description:
      "Velvet Pour es una landing page diseñada para un bar ficticio, pensada para transmitir una experiencia visual envolvente y moderna. Este proyecto destaca por el uso intensivo de animaciones fluidas y creativas implementadas con GSAP (GreenSock Animation Platform), que aportan dinamismo e interacción a cada sección del sitio. Este proyecto fue una exploración en motion design web, centrada en microinteracciones, transiciones suaves y scroll animations usando GSAP.",
    projectLink: "https://velvetpour.vercel.app",
    codeLink: "https://github.com/maticarrera12/mojito-landing",
    technologies: [ "GSAP", "ReactJS", "TailwindCSS", "JavaScript",],
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
    title: "Awwward-winner",
    image: ssawwwardwinner,
    description:
    "Clon de una pagina awwward-winner.",
    projectLink: "https://awwwards-winner.vercel.app/",
    codeLink: "https://github.com/maticarrera12/awwwards-winner",
    technologies: ["ReactJS", "HTML", "CSS","TailwindCSS", "JavaScript"],
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

]

