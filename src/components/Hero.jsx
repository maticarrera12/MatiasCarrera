import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

import { TiLocationArrow } from "react-icons/ti";

gsap.registerPlugin(_ScrollTrigger);

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
        scrub: true,
      },
    });
  });

  return (
    <div className="relative !h-dvh w-screen overflow-x-hidden" id="inicio">
      <div
        id="hero-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
        style={{
          backgroundImage: "url(/img/backgroundverde.jpg)", // Ruta a la imagen de fondo
          backgroundSize: "cover",                 // Asegura que la imagen cubra todo el div
          backgroundPosition: "center",
          filter: "brightness(0.9)"         // Centra la imagen          // Fija la imagen de fondo al hacer scroll (opcional)
        }}
      >
        <div>
          <div className="mt-24 px-5 sm:px-10">
            <p className="mb-5 max-w-64 font-robert-regular text-soft-white text-2xl">
              Full-Stack <br /> Developer
            </p>
            <h1 className="special-font hero-heading text-soft-white">
              rectjs <br />
              J<b>a</b>va <br />
              Spring Boot
            </h1>
            <p className="mb-5 max-w-80  font-robert-regular text-soft-white">
              Hola, soy Matías Carrera, estudiante de Ingeniería Informática en
              la UBA, con 3 años de formación en Diseño Gráfico y Multimedia en
              la UADE. Apasionado por la programación y el diseño UX/UI, busco
              combinar mi creatividad y habilidades técnicas para crear
              soluciones innovadoras y centradas en el usuario.
            </p>
            <a href="#contacto" className="cursor-pointer">
              <button className="group relative overflow-hidden w-fit rounded-full px-7 py-3 bg-gradient-to-r from-[#01E363] to-[#65FCF6] text-gray-800 flex-center gap-1">
                <TiLocationArrow /> {/* Ícono izquierdo */}
                <span className="relative z-50 inline-flex overflow-hidden font-general text-xs uppercase">
                  Contactame
                </span>
              </button>
            </a>
          </div>
        </div>

        <h2 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-soft-white">
          <b>u</b>x/<b>u</b>i
        </h2>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10"></div>
        </div>
      </div>
      <h2 className="special-font hero-heading absolute bottom-5 right-5 bg-gradient-to-r from-[#01E363] to-[#65FCF6] text-transparent bg-clip-text">
  <b>u</b>x/<b>u</b>i
</h2>

    </div>
  );
};

export default Hero;
