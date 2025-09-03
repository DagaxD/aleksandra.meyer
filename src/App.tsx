import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { Menu } from './components/Menu'
import { Home } from './pages/Home';
import { LekcjeOnline } from './pages/LekcjeOnline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LekcjeZDojazdem } from './pages/LekcjeZDojazdem';
import { OMnie } from './pages/OMnie';
import { Kontakt } from './pages/Kontakt';
import Footer from './components/Footer';
import { ScrollHandler } from './ScrollHandler1';
import { MobileMenu } from './components/MobileMenu';
import FooterMobile from './components/FooterMobile';
import { Tlumaczenia } from './pages/Tlumaczenia';


const theme = createTheme({
  typography: {
    fontFamily: "Mulish, sans-serif",
  },
});

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768); // 768px = Tailwind md breakpoint
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <Router>
      <ScrollHandler />
        <div>
            {isMobile ? <MobileMenu /> : <Menu />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tlumaczenia" element={<Tlumaczenia />} />
                <Route path="/online" element={<LekcjeOnline />} />
                <Route path="/z-dojazdem" element={<LekcjeZDojazdem />} />
                <Route path="/o-mnie" element={<OMnie />} />
                <Route path="/kontakt" element={<Kontakt />} />
            </Routes>
            {isMobile ? <FooterMobile /> : <Footer /> }
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

