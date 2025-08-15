import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TiLocationArrow } from "react-icons/ti";
import portfolioIllustration from "../assets/images/portfolio-illustration.png";


const Hero = () => {
  useGSAP(() => {
    gsap.set("#hero-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#hero-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#hero-frame",
        start: "center center",
        end: "bottom center",
        scrub: 1, // Cambiar de true a 1 para mejor rendimiento
      },
    });
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-x-hidden" id="inicio">
      <div
        id="hero-frame"
        className="relative z-10 w-screen h-screen overflow-hidden rounded-lg bg-flame flex"
      >
        {/* Contenido a la izquierda */}
        <div className="flex flex-1 gap-5 lg:justify-around flex-col mt-24 px-5 sm:px-10 z-20">
          <p className="mt-5 max-w-64 leading-6 text-soft-white text-2xl">
            Full-Stack <br /> Developer
          </p>
          <div>
            <h2 className="font-otbrut hero-heading text-black">REACTJS</h2>
            <h2 className="font-otbrut hero-heading text-black">JAVA</h2>
            <h2 className="font-otbrut hero-heading text-black">SPRINGBOOT</h2>
          </div>
          <div>
             <p className="mb-5 max-w-96 text-md sm:text-lg text-soft-white">
            Hola, soy Matías Carrera, estudiante de Ingeniería en Inteligencia
            Artificial en la Universidad de Palermo, con 3 años de formación en
            Diseño Gráfico y Multimedia en la UADE. Apasionado por la
            programación y el diseño UX/UI, busco combinar mi creatividad y
            habilidades técnicas para crear soluciones innovadoras y centradas
            en el usuario.
          </p>

          <button 
            onClick={() => {
              document.getElementById('contacto')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="group mb-10 relative overflow-hidden w-fit rounded-full px-7 py-3 bg-black text-white flex items-center justify-center gap-1 hover:bg-gray-950 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <TiLocationArrow className="transition-transform duration-300" />
            <span className="relative z-50 inline-flex overflow-hidden text-xs uppercase font-medium">
              Contactame
            </span>
          </button>
          </div>
         
        </div>

        {/* Imagen a la derecha */}
        <div className="flex-1 flex justify-center items-center relative h-full">
          <img
            src={portfolioIllustration}
            alt="portfolio illustration"
            className="hidden lg:block min-w-[300px] max-w-[600px] mr-8 w-full h-auto object-contain z-30"
          />
        </div>
        
        <h2 className="font-otbrut hero-heading absolute bottom-5 right-5 z-40 text-soft-white">
          UX/UI
        </h2>
      </div>
      
      <h2 className="font-otbrut hero-heading absolute bottom-5 right-5 bg-black text-transparent bg-clip-text">
        UX/UI
      </h2>
    </div>
  );
};
export default Hero;
