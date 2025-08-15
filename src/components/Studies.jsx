import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useScrollTriggerRefresh } from "../hooks/useScrollTriggerRefresh";

gsap.registerPlugin(ScrollTrigger);

const Studies = () => {
  const textRefsStudies = useRef([]);
  const textRefsCourses = useRef([]);
  const progressRefStudies = useRef(null);
  const progressRefCourses = useRef(null);
  const scrollTriggersRef = useRef([]);

  // Usar el hook personalizado para refrescar ScrollTriggers
  useScrollTriggerRefresh([]);

  const slides = [
    "https://res.cloudinary.com/ddhkdbavs/image/upload/v1747082741/Professional_Developer_-_Matias_Carrera_te2rzs.jpg",
    "https://res.cloudinary.com/ddhkdbavs/image/upload/v1747082741/Back_End_en_JAVA_-_Matias_Carrera_yx6sga.jpg",
    "https://res.cloudinary.com/ddhkdbavs/image/upload/v1747082741/Certificado_Web_Designer_-_Matias_Carrera_ti7di3.jpg",
    "https://res.cloudinary.com/ddhkdbavs/image/upload/v1747082741/certificado-carrera_qjkke3.png",
  ];

  const studies = [
    {
      title: "Ingeniería en Inteligencia Artificial - Universidad de Palermo",
      date: "2025 - Presente",
    },
    {
      title: "Ingeniería Informática - UBA",
      date: "2024",
    },
    {
      title: "Diseño Gráfico y Multimedia - UADE",
      date: "2021 - 2023",
    },
  ];

  const courses = [
    {
      title: "Professional Developer - Digital House",
      date: "2025",
    },
    {
      title: "Desarrollador FrontEnd ReactJS - CoderHouse",
      date: "2024",
    },
    {
      title: "Diseño UX/UI - CoderHouse",
      date: "2024",
    },
  ];

  textRefsStudies.current = [];
  textRefsCourses.current = [];

  useEffect(() => {
    const animateTexts = (texts) => {
      texts.forEach((text) => {
        const trigger = gsap.to(text, {
          color: "#FF3500",
          scrollTrigger: {
            trigger: text,
            start: "top center",
            toggleActions: "play none none reverse",
            refreshPriority: 1,
          },
        });
        scrollTriggersRef.current.push(trigger.scrollTrigger);
      });
    };

    const sectionStudies = document.getElementById("section-studies");
    const sectionCourses = document.getElementById("section-courses");

    // Configuración mejorada para la animación de progreso
    const setupProgressAnimation = (progressRef, triggerElement) => {
      const trigger = gsap.fromTo(progressRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "sine.inOut", 
          scrollTrigger: {
            trigger: triggerElement,
            start: "top center", 
            end: "bottom center", 
            scrub: 1, 
            markers: false,
            refreshPriority: 1,
          }
        }
      );
      scrollTriggersRef.current.push(trigger.scrollTrigger);
    };

    setupProgressAnimation(progressRefStudies, sectionStudies);
    setupProgressAnimation(progressRefCourses, sectionCourses);

    animateTexts(textRefsStudies.current);
    animateTexts(textRefsCourses.current);

    // Limpieza
    return () => {
      scrollTriggersRef.current.forEach(trigger => trigger?.kill());
      scrollTriggersRef.current = [];
    };
  }, []);

  return (
    <div id="formacion" className="py-20 bg-white">
      {/* Sección de Educación */}
      <AnimatedTitle
        title="Formacion"
        containerClass="text-4xl pt-5 !text-black text-center"
      />

      <div
        id="section-studies"
        className="relative font-robert-medium max-w-4xl mx-auto py-12"
      >
        <div className="absolute top-0 left-4 w-1 h-full bg-gray-100 rounded-full"></div>
        <div
          ref={progressRefStudies}
          className="absolute top-0 left-4 w-1 bg-flame rounded-full origin-top"
          style={{ height: "0%" }}
        ></div>

        <ul className="space-y-12 ml-10">
          {studies.map((item, index) => (
            <li key={index} className="relative">
              <div>
                <h3
                  ref={(el) => el && (textRefsStudies.current[index] = el)}
                  className="text-lg font-bold  text-black"
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Sección de Cursos */}
      <AnimatedTitle
        title="Cursos"
        containerClass="text-4xl pt-5 !text-black text-center"
      />

      <div
        id="section-courses"
        className="relative font-robert-medium max-w-4xl mx-auto py-16"
      >
        <div className="absolute top-0 left-4 w-1 h-full bg-gray-100 rounded-full"></div>
        <div
          ref={progressRefCourses}
          className="absolute top-0 left-4 w-1 bg-flame rounded-full origin-top"
          style={{ height: "0%" }}
        ></div>

        <ul className="space-y-12 ml-10">
          {courses.map((item, index) => (
            <li key={index} className="relative">
              <div>
                <h3
                  ref={(el) => el && (textRefsCourses.current[index] = el)}
                  className="text-lg font-bold text-black"
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Slider de certificados */}
      <div className="w-full max-w-3xl mx-auto mt-12">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          className="rounded-xl overflow-hidden"
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Studies;