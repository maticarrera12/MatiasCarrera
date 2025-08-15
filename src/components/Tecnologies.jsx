import AnimatedTitle from "./AnimatedTitle";
import BentoTilt from "./BentoTilt";
import {technologies} from "../assets/assets.js";

// eslint-disable-next-line react/prop-types
const BentoCard = ({ image, title }) => {
  return (
    <div className="relative w-40 h-64 rounded-lg border-[0.5px] border-soft-white">
      {/* Contenedor de la imagen */}
      <div className="w-full h-3/4 flex justify-center items-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-auto h-full object-contain rounded-t-lg transform transition-transform duration-300 hover:scale-90"
        />
      </div>

      {/* Contenedor del texto */}
      <div className="relative z-10 flex flex-col justify-center items-center py-3 bg-opacity-50 rounded-b-lg">
        <h1 className="text-xs font-medium text-center text-blue-50">
          {title}
        </h1>
      </div>
    </div>
  );
};

const Tecnologies = () => {
  const renderTechnologies = (category) => {
    return technologies
      .filter((tech) => tech.category === category)
      .map((tech, index) => (
        <div key={index} className="relative w-40 h-64 overflow-hidden rounded-lg md:w-48 md:h-72">
          {/* En pantallas grandes (lg+) usar BentoTilt, en pantallas pequeñas solo la card */}
          <div className="hidden lg:block">
            <BentoTilt className="bento-tilt relative w-full h-full">
              <BentoCard image={tech.image} title={tech.name} />
            </BentoTilt>
          </div>
          
          {/* En pantallas pequeñas (md y menores) mostrar solo la card sin efectos */}
          <div className="lg:hidden">
            <BentoCard image={tech.image} title={tech.name} />
          </div>
        </div>
      ));
  };

  return (
    <div id="tecnologias" className="min-h-screen w-screen py-10 bg-black flex flex-col items-center justify-center">
      {/* Título de la sección */}
      <AnimatedTitle
        title="Tecnologías"
        containerClass="text-4xl py-5 !text-soft-white text-center"
      />

      {/* Front-end */}
      <AnimatedTitle
        title="Front-end"
        containerClass="mt-5 mb-10 text-3xl !text-soft-white text-center"
      />
      <div className="flex flex-wrap mb-5 gap-8 justify-center md:max-w-[800px]">
        {renderTechnologies("front-end")}
      </div>

      {/* Back-end */}
      <AnimatedTitle
        title="Back-end"
        containerClass="mt-5 mb-10 text-3xl !text-soft-white text-center"
      />
      <div className="flex flex-wrap mb-5 gap-8 justify-center md:max-w-[800px]">
        {renderTechnologies("back-end")}
      </div>

      {/* Herramientas
      <AnimatedTitle
        title="Herramientas"
        containerClass="mt-5 mb-10 text-3xl !text-soft-white text-center"
      />
      <div className="flex flex-wrap mb-5 gap-8 justify-center md:max-w-[800px]">
        {renderTechnologies("Herramientas")}

      </div> */}
    </div>
  );
};

export default Tecnologies;
