import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["Inicio", "Proyectos", "Tecnologias","Formacion", "Contacto"];
const Navbar = () => {
  const navContainerRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setisNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setisNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setisNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setisNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 mx-1 sm:mx-0 h-16 border-none transition-all duration-700 sm:inset-x-10"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-center sm:justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="img/logo.gif" alt="logo"  className="w-10 hidden sm:block" />
          </div>
          <div className="flex h-full items-center">
            <div className="">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`} // Corregido
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
