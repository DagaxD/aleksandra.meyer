import { useEffect, useState } from "react";

export const useLanguageChanger = () => {
    const [language, setLanguage] = useState('angielskiego');
    const languages = ['angielskiego', 'niemieckiego', 'włoskiego']; 
  
    useEffect(() => {
      const interval = setInterval(() => {
        setLanguage((prevLanguage) => {
          const currentIndex = languages.indexOf(prevLanguage);
          const nextIndex = (currentIndex + 1) % languages.length;
          return languages[nextIndex];
        });
      }, 3000); // Co 2 sekund
      return () => clearInterval(interval); // Wyczyść interwał przy unmount
    }, []);

    return language;
  }