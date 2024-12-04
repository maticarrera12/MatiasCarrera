import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-950 p-4">
      <div className="text-center mb-2">
        <p className="text-xs font-circular-web text-soft-white">
          &copy; 2024 Matías Carrera. Todos los derechos reservados.
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <a 
          href="https://github.com/maticarrera12" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub className="text-orange-600 text-2xl hover:text-orange-400" />
        </a>
        <a 
          href="https://www.linkedin.com/in/matias-carrera-761b45328" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-400" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

