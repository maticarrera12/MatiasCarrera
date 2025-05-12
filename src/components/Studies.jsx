import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

const Studies = () => {
  const textRefsStudies = useRef([]);
  const textRefsCourses = useRef([]);
  const progressRefStudies = useRef(null);
  const progressRefCourses = useRef(null);

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
        gsap.to(text, {
          color: "#4f46e5",
          scrollTrigger: {
            trigger: text,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        });
      });
    };

    const sectionStudies = document.getElementById("section-studies");
    const sectionCourses = document.getElementById("section-courses");

    // Configuración mejorada para la animación de progreso
    const setupProgressAnimation = (progressRef, triggerElement) => {
      gsap.fromTo(progressRef.current,
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
          }
        }
      );
    };

    setupProgressAnimation(progressRefStudies, sectionStudies);
    setupProgressAnimation(progressRefCourses, sectionCourses);

    animateTexts(textRefsStudies.current);
    animateTexts(textRefsCourses.current);

    // Limpieza
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="formacion" className="pb-20">
      {/* Sección de Educación */}
      <AnimatedTitle
        title="Formacion"
        containerClass="text-5xl pt-5 !text-gray-700 text-center"
      />

      <div
        id="section-studies"
        className="relative font-robert-medium max-w-4xl mx-auto py-12"
      >
        <div className="absolute top-0 left-4 w-1 h-full bg-gray-300 rounded-full"></div>
        <div
          ref={progressRefStudies}
          className="absolute top-0 left-4 w-1 bg-indigo-600 rounded-full origin-top"
          style={{ height: "0%" }}
        ></div>

        <ul className="space-y-12 ml-10">
          {studies.map((item, index) => (
            <li key={index} className="relative">
              <div>
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

      <div
        id="section-courses"
        className="relative font-robert-medium max-w-4xl mx-auto py-16"
      >
        <div className="absolute top-0 left-4 w-1 h-full bg-gray-300 rounded-full"></div>
        <div
          ref={progressRefCourses}
          className="absolute top-0 left-4 w-1 bg-indigo-600 rounded-full origin-top"
          style={{ height: "0%" }}
        ></div>

        <ul className="space-y-12 ml-10">
          {courses.map((item, index) => (
            <li key={index} className="relative">
              <div>
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