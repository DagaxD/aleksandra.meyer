import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Jeśli jest hash (#cennik, #kontakt, itp.)
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Jeśli nie ma hash – scroll na górę
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

