import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useScrollTriggerRefresh = (dependencies = []) => {
  useEffect(() => {
    // Refrescar ScrollTriggers cuando cambien las dependencias
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, dependencies);

  const refreshNow = () => {
    ScrollTrigger.refresh();
  };

  return { refreshNow };
};
