import { FaGithub, FaLink } from "react-icons/fa"; // Importar los iconos de react-icons
import { useState } from "react";
import { projects, technologies } from "../assets/assets";

const ProjectCard = ({ title, image, description, projectLink, codeLink, technologies }) => {
  return (
    <div className="w-full min-w-[300px] mx-auto bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden p-6 mb-8 flex flex-col">
      <div className="relative w-full h-96 mb-6">
        <img
          src={image}
          alt={`Imagen del proyecto ${title}`}
          className="w-full h-full object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300 ease-in-out"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-black hover:text-flame transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-black mt-4 flex-grow">{description}</p>
        <p className="text-sm text-black mt-2">Tecnologías: {technologies.join(", ")}</p>
        <div className="flex gap-6 mt-6 justify-start">
          <a
            href={projectLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center text-sm font-medium transition duration-200 ${
              projectLink
                ? "text-blue-600 hover:text-blue-500"
                : "text-gray-400 cursor-not-allowed pointer-events-none"
            }`}
          >
            <FaLink className="mr-2" size={18} />
            Ver Proyecto
          </a>

          {/* Botón para ver el código */}
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-flame hover:text-orange-500 transition duration-200"
          >
            <FaGithub className="mr-2" size={18} />
            Ver Código
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  // Filtrar proyectos por la tecnología seleccionada
  const filteredProjects = selectedTech
    ? projects.filter((project) => project.technologies.includes(selectedTech))
    : projects;

  return (
    <div className="min-h-screen bg-black py-10 px-4 sm:p-8 md:p-12" id="proyectos">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-center font-semibold text-soft-white mb-8 sm:mb-12">
        Mis Proyectos
      </h2>
      {/* Botones de tecnología */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-[900px] mx-auto px-4">
        {technologies.map((tech, index) => (
          <button
            key={index}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
              selectedTech === tech.name ? "bg-flame  text-soft-white": "bg-soft-white text-[#1E1E1E]"
            } hover:bg-flame hover:text-soft-white transition duration-300 ease-in-out`}
            onClick={() => setSelectedTech(selectedTech === tech.name ? null : tech.name)} // Toggle selección
          >
            <img src={tech.image} alt={tech.name} className="w-6 h-6" />
            {tech.name}
          </button>
        ))}
      </div>

      {/* Contenedor de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center px-4 sm:px-0">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              projectLink={project.projectLink}
              codeLink={project.codeLink}
              technologies={project.technologies}
            />
          ))
        ) : (
          <p className="text-soft-white text-center col-span-full">
            Todavía no hay proyectos que utilicen la tecnología seleccionada, pero los habrá😉.
          </p>
        )}
      </div>
      </div>
      
    </div>
  );
};

export default Projects;
