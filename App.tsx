import React, { useEffect, useState } from 'react';
import { MemoryRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { TechnologyPage } from './pages/TechnologyPage';
import { ElSalvadorPage } from './pages/ElSalvadorPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Footer } from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden text-white selection:bg-emerald-500/30 selection:text-emerald-200">
        <BackgroundEffects />
        <ScrollToTop />
        
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 flex flex-col w-full"
            >
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/technology" element={<TechnologyPage />} />
                  <Route path="/projects/el-salvador" element={<ElSalvadorPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;