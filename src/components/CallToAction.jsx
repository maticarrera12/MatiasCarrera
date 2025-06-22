import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

const CallToAction = () => {
  useGSAP(() => {
    const textSplit = SplitText.create("#callToAction h2, #callToAction p", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#callToAction",
        start: "top 70%",
        end: "bottom center",
        scrub: true,
      },
    });
    scrollTimeline.from(textSplit.words, {
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.08,
      opacity: 0,
    });
  });

  return (
    <div
      className="bg-flame h-72 flex items-center justify-center"
      id="callToAction"
    >
      <div className="w-full max-w-[800px] md:flex-row mx-auto flex flex-col text-center items-center md:text-left justify-center space-y-8">
        <div>
          <h2>
            <span className="text-4xl sm:text-5xl font-semibold text-white">
              ¿Querés trabajar conmigo?
            </span>
          </h2>
          <p className="text-white font-semibold text-3xl sm:text-4xl mt-2">
            ¡Trabajemos Juntos!
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/matias-carrera"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-transparent text-white font-bold shadow hover:bg-white hover:text-flame border-2 border-white transition-colors duration-200 link"
          >
            Linkedin
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=mcarreradev12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-transparent text-white font-bold shadow hover:bg-white hover:text-flame border-2 border-white transition-colors duration-200"
          >
            Gmail
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
