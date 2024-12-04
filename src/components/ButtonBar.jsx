import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importar los iconos de react-icons

const ButtonBar = () => {
  return (
    <div className="fixed right-0 bottom-64 transform flex flex-col gap-3 p-3 z-50 bg-black bg-opacity-40 rounded-lg shadow-lg">
      {/* Botón de GitHub */}
      <a
        href="https://github.com/maticarrera12"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 sm:p-2 rounded-full bg-orange-600 text-white hover:bg-orange-500 transition duration-200 transform hover:scale-110"
      >
        <FaGithub className="sm:text-lg text-xl" /> {/* Tamaño ajustado */}
      </a>

      {/* Separador con efecto */}
      <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent my-2 sm:w-8" />

      {/* Botón de LinkedIn */}
      <a
        href="https://www.linkedin.com/in/matias-carrera-761b45328"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 sm:p-2 rounded-full bg-blue-700 text-white hover:bg-blue-600 transition duration-200 transform hover:scale-110"
      >
        <FaLinkedin className="sm:text-lg text-xl" /> {/* Tamaño ajustado */}
      </a>
    </div>
  );
};

export default ButtonBar;
