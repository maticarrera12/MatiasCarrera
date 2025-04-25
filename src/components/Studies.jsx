import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const Studies = () => {
  const textRefsStudies = useRef([]);
  const textRefsCourses = useRef([]);

  textRefsStudies.current = [];
  textRefsCourses.current = [];

  useEffect(() => {
    const animateTexts = (texts) => {
      texts.forEach((text) => {
        gsap.to(text, {
          color: "#4f46e5", // Cambia el color del texto
          scrollTrigger: {
            trigger: text,
            start: "top center",
            end: "top center",
            toggleActions: "play none none reverse",
          },
        });
      });
    };

    // Animar textos en ambas listas
    animateTexts(textRefsStudies.current);
    animateTexts(textRefsCourses.current);
  }, []);

  return (
    <div id="formacion">
      {/* Sección de Educación */}
      <AnimatedTitle
        title="Formacion"
        containerClass="text-5xl pt-5 !text-gray-700 text-center"
      />
      <div className="relative font-robert-medium max-w-4xl mx-auto py-">
        <ul className="space-y-12">
          {[
            {
              title: "Ingeniería Informática - UBA",
              date: "2024 - Presente",
            },
            {
              title: "Diseño Gráfico y Multimedia - UADE",
              date: "2021 - 2023",
            },
          ].map((item, index) => (
            <li key={index}>
              <div className="ml-8">
                <h3
                  ref={(el) => el && (textRefsStudies.current[index] = el)}
                  className="text-lg font-bold text-gray-700"
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Sección de Cursos */}
      <AnimatedTitle
        title="Cursos"
        containerClass="text-5xl pt-5 !text-gray-700 text-center"
      />
      <div className="relative font-robert-medium max-w-4xl mx-auto py-16">
        <ul className="space-y-12">
          {[
            {
              title: "Profesional Developer - DigitalHouse",
              date: "Cursando Actualmente",
            },
            {
              title: "Desarrollador FrontEnd ReactJS - CoderHouse",
              date: "2024",
            },
            {
              title: "Diseño UX/UI - CoderHouse",
              date: "2024",
            },
          ].map((item, index) => (
            <li key={index}>
              <div className="ml-8">
                <h3
                  ref={(el) => el && (textRefsCourses.current[index] = el)}
                  className="text-lg font-bold text-gray-700"
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Studies;
