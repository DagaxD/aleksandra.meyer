import React from 'react';
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


const theme = createTheme({
  typography: {
    fontFamily: "Mulish, sans-serif",
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
      <ScrollHandler />
        <div>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/online" element={<LekcjeOnline />} />
                <Route path="/z-dojazdem" element={<LekcjeZDojazdem />} />
                <Route path="/o-mnie" element={<OMnie />} />
                <Route path="/kontakt" element={<Kontakt />} />
            </Routes>
            <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
