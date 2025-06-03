const CallToAction = () => {
  return (
    <div className="bg-flame h-72 flex items-center justify-center">
      <div className="w-full max-w-[800px] md:flex-row mx-auto flex flex-col items-center justify-center space-y-8">
        <div>
          <h2>
            <span className="text-4xl sm:text-5xl font-semibold text-white text-left">
              ¿Querés trabajar conmigo?
            </span>
          </h2>
          <p className="text-white font-semibold text-3xl sm:text-4xl mt-2 text-left">
            ¡Trabajemos Juntos!
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/matias-carrera"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-transparent text-white font-bold shadow hover:bg-white hover:text-flame border-2 border-white transition-colors duration-200"
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
