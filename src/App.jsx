import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCert, setActiveCert] = useState(null);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <CustomCursor />
            <Background />
            <Navbar isCertificateOpen={!!activeCert} />
            <main className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto flex flex-col gap-16 md:gap-24 lg:gap-32 overflow-hidden pt-12">
              <Hero />
              <About />
              <Skills />
              <Certificates activePdf={activeCert} setActivePdf={setActiveCert} />
              <Projects />
              <Experience />
              <Contact />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
