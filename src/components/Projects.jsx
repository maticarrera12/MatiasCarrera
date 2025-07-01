import { FaGithub, FaLink } from "react-icons/fa"; // Importar los iconos de react-icons
import { useEffect, useRef, useState } from "react";
import { projects, technologies } from "../assets/assets";
import { technologies as allTechnologies } from "../assets/assets";
import PaginationComponent from "./PaginationComponent";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectCard = ({
  title,
  image,
  description,
  projectLink,
  codeLink,
  technologies,
}) => {
  const getTechnologyImage = (techName) => {
    const tech = allTechnologies.find((t) => t.name === techName);
    return tech ? tech.image : null;
  };

  return (
    <div className="w-full min-w-[300px] mx-auto bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden p-6 mb-8 flex flex-col project-card">
      <div className="relative w-full mb-10">
        <img
          src={image}
          alt={`Imagen del proyecto ${title}`}
          className="object-fit rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300 ease-in-out"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-black hover:text-flame transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-black mt-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-1 mt-4 items-center">
          {technologies.map((techName) => {
            const techImage = getTechnologyImage(techName);
            return (
              <div key={techName} className="w-8 h-8">
                {techImage && (
                  <img
                    src={techImage}
                    alt={techName}
                    title={techName}
                    className="w-full h-full object-contain border rounded-full hover:-translate-y-3 transition-all duration-500"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="flex gap-6 mt-6 justify-start">
          <a
            href={projectLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center text-sm font-semibold transition duration-200 ${
              projectLink
                ? "text-blue-600 hover:text-blue-500"
                : "text-gray-400 cursor-not-allowed pointer-events-none"
            }`}
          >
            <FaLink className="mr-2" size={18} />
            Ver Proyecto
          </a>

          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-semibold text-flame hover:text-orange-500 transition duration-200"
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
  const topRef = useRef();
  const [selectedTech, setSelectedTech] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const hasInteracted = useRef(false); 

  const filteredProjects = selectedTech
    ? projects.filter((project) => project.technologies.includes(selectedTech))
    : projects;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  useEffect(() => {
    if (hasInteracted.current) {
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage, selectedTech]);

  const handleTechChange = (techName) => {
    hasInteracted.current = true;
    setCurrentPage(1);
    setSelectedTech((prev) => (prev === techName ? null : techName));
  };

  const handlePageChange = (page) => {
    hasInteracted.current = true;
    setCurrentPage(page);
  };

  return (
    <section
      className="min-h-screen bg-white py-10 px-4 sm:p-8 md:p-12"
      id="proyectos"
      ref={topRef}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-8xl text-center font-semibold text-black mb-8 sm:mb-12">
          Proyectos
        </h2>

        {/* Botones de tecnología */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-[900px] mx-auto px-4">
          {technologies.map((tech, index) => (
            <button
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                selectedTech === tech.name
                  ? "bg-flame text-white"
                  : "bg-transparent text-flame border border-flame"
              } hover:bg-flame hover:text-soft-white transition duration-300 ease-in-out`}
              onClick={() => handleTechChange(tech.name)}
            >
              <img src={tech.image} alt={tech.name} className="w-7 h-7 rounded-full" />
              {tech.name}
            </button>
          ))}
        </div>

        {/* Tarjetas de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center px-4 sm:px-0">
          {currentProjects.length > 0 ? (
            currentProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))
          ) : (
            <p className="text-black text-center col-span-full">
              Todavía no hay proyectos que utilicen la tecnología seleccionada,
              pero los habrá 😉.
            </p>
          )}
        </div>

        {/* Paginación */}
        {filteredProjects.length > itemsPerPage && (
          <PaginationComponent
            totalItems={filteredProjects.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
