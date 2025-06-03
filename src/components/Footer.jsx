import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black p-4">
      <div className="text-center mb-2">
        <p className="text-xs  text-soft-white">
          Matías Carrera <br />
          FullStack Dev
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <a 
          href="https://github.com/maticarrera12" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub className="text-flame text-2xl hover:text-orange-400" />
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

