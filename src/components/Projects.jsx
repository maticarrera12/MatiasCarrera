import { FaGithub, FaLink } from "react-icons/fa"; // Importar los iconos de react-icons
import { useState } from "react";
import { projects, technologies } from "../assets/assets";

const ProjectCard = ({ title, image, description, projectLink, codeLink, technologies }) => {
  return (
    <div className="max-w-xl w-full bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden p-6 mb-8 flex flex-col">
      {/* Imagen del proyecto */}
      <div className="relative w-full h-40 mb-6">
        <img
          src={image}
          alt={`Imagen del proyecto ${title}`}
          className="w-full h-full object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300 ease-in-out"
        />
      </div>

      <div className="flex flex-col flex-grow">
        {/* Título del proyecto */}
        <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>
        {/* Descripción */}
        <p className="text-sm text-gray-600 mt-4 flex-grow">{description}</p>
        {/* Tecnologías */}
        <p className="text-sm text-gray-500 mt-2">Tecnologías: {technologies.join(", ")}</p>
        {/* Contenedor de los botones */}
        <div className="flex gap-6 mt-6 justify-start">
          {/* Botón para ver el proyecto */}
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 transition duration-200"
          >
            <FaLink className="mr-2" size={18} />
            Ver Proyecto
          </a>

          {/* Botón para ver el código */}
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-orange-600 hover:text-orange-500 transition duration-200"
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
    <div className="min-h-screen bg-[#5438DC] p-12" id="proyectos">
      <h2 className="text-4xl text-center font-general font-semibold text-soft-white mb-12">
        Mis Proyectos
      </h2>
      {/* Botones de tecnología */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-[900px] mx-auto">
        {technologies.map((tech, index) => (
          <button
            key={index}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
              selectedTech === tech.name ? "bg-gradient-to-r from-[#01E363] to-[#65FCF6]  text-soft-white": "bg-soft-white text-[#1E1E1E]"
            } hover:bg-gradient-to-r from-[#01E363] to-[#65FCF6]`}
            onClick={() => setSelectedTech(selectedTech === tech.name ? null : tech.name)} // Toggle selección
          >
            <img src={tech.image} alt={tech.name} className="w-6 h-6" />
            {tech.name}
          </button>
        ))}
      </div>

      {/* Contenedor de proyectos */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 !justify-around">
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
  );
};

export default Projects;
