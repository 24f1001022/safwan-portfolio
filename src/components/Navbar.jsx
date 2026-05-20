import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Terminal, Network, GitBranch, Activity, Radio, Code, Menu, X, Binary } from 'lucide-react';
import DecrambleText from './DecrambleText';

const Navbar = ({ isCertificateOpen }) => {
  if (isCertificateOpen) return null;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isUplinkOpen, setIsUplinkOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Setup Intersection Observer for ScrollSpy
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjusted to trigger when section is nicely in view
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['skills', 'projects', 'experience', 'contact'].map(id => document.getElementById(id));
    
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* Top Navbar (Desktop) */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className={`hidden md:flex justify-between items-center px-8 py-4 fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[1440px] rounded-full border border-white/10 backdrop-blur-xl z-50 transition-all duration-300 ${scrolled ? 'bg-surface/30 shadow-[0_0_30px_rgba(0,219,231,0.15)] py-3' : 'bg-surface/10 shadow-[0_0_20px_rgba(0,219,231,0.2)]'}`}
      >
        <div className="font-headline-lg text-primary tracking-widest uppercase flex items-center gap-2">
          <Terminal size={20} className="text-primary-container" />
          <DecrambleText text="NEURAL_ARCHITECT" delay={200} />
        </div>
        
        <div className="flex space-x-6 font-label-caps text-[12px] tracking-[0.2em] font-bold">
          <a className={`${activeSection === 'skills' ? 'text-primary-fixed border-b border-primary-fixed-dim pb-1 drop-shadow-[0_0_10px_rgba(116,245,255,0.8)]' : 'text-on-surface-variant opacity-60 hover:text-primary-fixed hover:opacity-100'} transition-all duration-300`} href="#skills">
            <DecrambleText text="SYNAPSE" delay={300} />
          </a>
          <a className={`${activeSection === 'projects' ? 'text-primary-fixed border-b border-primary-fixed-dim pb-1 drop-shadow-[0_0_10px_rgba(116,245,255,0.8)]' : 'text-on-surface-variant opacity-60 hover:text-primary-fixed hover:opacity-100'} transition-all duration-300`} href="#projects">
            <DecrambleText text="ARCHIVE" delay={400} />
          </a>
          <a className={`${activeSection === 'experience' ? 'text-primary-fixed border-b border-primary-fixed-dim pb-1 drop-shadow-[0_0_10px_rgba(116,245,255,0.8)]' : 'text-on-surface-variant opacity-60 hover:text-primary-fixed hover:opacity-100'} transition-all duration-300`} href="#experience">
            <DecrambleText text="LABS" delay={500} />
          </a>
          <a className={`${activeSection === 'contact' ? 'text-primary-fixed border-b border-primary-fixed-dim pb-1 drop-shadow-[0_0_10px_rgba(116,245,255,0.8)]' : 'text-on-surface-variant opacity-60 hover:text-primary-fixed hover:opacity-100'} transition-all duration-300`} href="#contact">
            <DecrambleText text="LOGS" delay={600} />
          </a>
        </div>
        
        <div className="flex items-center space-x-4 relative">
          <button 
            onClick={() => setIsUplinkOpen(!isUplinkOpen)}
            className={`text-primary-fixed-dim hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-white/5 relative ${isUplinkOpen ? 'text-primary scale-110 drop-shadow-[0_0_10px_rgba(0,242,255,0.8)] bg-white/5' : ''}`}
            title="UPLINK CORE"
          >
            <Share2 size={20} className={isUplinkOpen ? "animate-pulse" : ""} />
            {/* Soft pulsing indicator dot */}
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-primary-fixed animate-ping" />
          </button>
          
          <AnimatePresence>
            {isUplinkOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-14 right-0 w-80 glass-panel border border-primary-fixed/30 rounded-2xl p-4 shadow-[0_0_30px_rgba(0,242,255,0.25)] z-[60] overflow-hidden"
              >
                {/* Futuristic scanning line effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <motion.div 
                    className="w-full h-1/2 bg-gradient-to-b from-transparent via-primary-fixed/5 to-transparent"
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                  />
                </div>

                <div className="flex items-center justify-between border-b border-primary-fixed/20 pb-2 mb-3">
                  <div className="font-code-sm text-[10px] font-bold text-primary-fixed tracking-[0.2em] uppercase drop-shadow-[0_0_5px_rgba(116,245,255,0.8)]">
                    [ UPLINK_CORE_ONLINE ]
                  </div>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-fixed"></span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {/* GitHub (Main) */}
                  <a 
                    href="https://github.com/24f1001022" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface/50 border border-primary-fixed/20 hover:border-primary-fixed hover:bg-primary-fixed/10 hover:shadow-[0_0_15px_rgba(116,245,255,0.3)] transition-all duration-300 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-fixed group-hover:scale-110 transition-transform mb-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <span className="font-code-sm text-[9px] text-primary-fixed-dim/70 group-hover:text-primary-fixed tracking-wider uppercase text-center">GitHub (Main)</span>
                  </a>

                  {/* GitHub (Alt) */}
                  <a 
                    href="https://github.com/SAFWANHUMAYUN" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface/50 border border-primary-fixed/20 hover:border-primary-fixed hover:bg-primary-fixed/10 hover:shadow-[0_0_15px_rgba(116,245,255,0.3)] transition-all duration-300 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-fixed group-hover:scale-110 transition-transform mb-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <span className="font-code-sm text-[9px] text-primary-fixed-dim/70 group-hover:text-primary-fixed tracking-wider uppercase text-center">GitHub (Alt)</span>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/safwan-humayun-82a08423a" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface/50 border border-secondary-container/20 hover:border-secondary-container hover:bg-secondary-container/10 hover:shadow-[0_0_15px_rgba(2,102,255,0.3)] transition-all duration-300 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-container group-hover:scale-110 transition-transform mb-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    <span className="font-code-sm text-[9px] text-secondary-fixed-dim/70 group-hover:text-secondary tracking-wider uppercase">LinkedIn</span>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/safwan_humayun/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface/50 border border-tertiary-fixed-dim/20 hover:border-tertiary-fixed-dim hover:bg-tertiary-fixed-dim/10 hover:shadow-[0_0_15px_rgba(235,178,255,0.3)] transition-all duration-300 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tertiary-fixed-dim group-hover:scale-110 transition-transform mb-2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <span className="font-code-sm text-[9px] text-tertiary-fixed-dim/70 group-hover:text-tertiary-fixed-dim tracking-wider uppercase">Instagram</span>
                  </a>

                  {/* Kaggle */}
                  <a 
                    href="https://www.kaggle.com/safwanhumayun" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface/50 border border-[#20BEFF]/20 hover:border-[#20BEFF] hover:bg-[#20BEFF]/10 hover:shadow-[0_0_15px_rgba(32,190,255,0.3)] transition-all duration-300 col-span-2 group"
                  >
                    <Binary size={20} className="text-[#20BEFF] group-hover:scale-110 transition-transform mb-2" />
                    <span className="font-code-sm text-[9px] text-[#20BEFF]/70 group-hover:text-[#20BEFF] tracking-wider uppercase">Kaggle</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button className="font-label-caps text-[12px] font-bold tracking-[0.2em] px-4 py-2 border border-primary-fixed-dim text-primary-fixed-dim rounded-full hover:bg-primary-fixed-dim/10 hover:shadow-[0_0_15px_rgba(0,219,231,0.4)] transition-all duration-300" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            INIT_CONTACT
          </button>
        </div>
      </motion.nav>

      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-6 right-6 z-[60]">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-full bg-surface/50 border border-white/10 backdrop-blur-md text-primary-fixed-dim"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Side Navbar (Mobile / Secondary) */}
      <AnimatePresence>
        {(isMobileMenuOpen || window.innerWidth >= 768) && (
          <motion.aside 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`md:hidden fixed left-4 top-1/2 -translate-y-1/2 rounded-xl h-[80vh] w-16 bg-surface/10 backdrop-blur-md border border-white/10 flex flex-col justify-between items-center py-6 z-50 ${isMobileMenuOpen ? 'flex' : 'hidden md:flex'}`}
          >
            <div className="text-center group">
              <img alt="AI Architect" className="w-10 h-10 rounded-full mb-2 group-hover:scale-110 transition-transform duration-300 border border-primary-container/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ3YLqYpJt9XV8MVgDwb8KtaPssJk-HaqR8wniH-J1mldiG0cnRnWIY7Krr_bnoO3Ed678S6thwImZv47YQK_2vZOkXzbwl1IUpdmCf5StQiS5z6MB1srKaeoA5ycZ4wiclO5Im-61yj1u7v1fcvJt5aGbTpZfupffLrfwl-1YpEeIanIhPtMAkqhWPMhUglDNpIcC6tzqoAWuiBtEnIQdUrqWhxM4AsUqJqKnsws_Gq6XJncGW8GsqcSEpY3R6r1uFINqFWCptWI" />
            </div>
            
            <div className="flex flex-col space-y-8">
              <a className={`${activeSection === 'skills' ? 'bg-primary-container/20 text-primary border-l-2 border-primary-fixed opacity-100' : 'text-outline opacity-40'} hover:bg-white/5 hover:text-primary hover:opacity-100 transition-all p-2 rounded-r-md flex justify-center w-full relative group`} href="#skills" title="CORE">
                <Network size={20} className={activeSection === 'skills' ? "animate-pulse drop-shadow-[0_0_5px_rgba(116,245,255,0.8)]" : ""} />
              </a>
              <a className={`${activeSection === 'projects' ? 'bg-primary-container/20 text-primary border-l-2 border-primary-fixed opacity-100' : 'text-outline opacity-40'} hover:bg-white/5 hover:text-primary hover:opacity-100 transition-all p-2 rounded-r-md flex justify-center w-full relative group`} href="#projects" title="NEURAL_MAP">
                <GitBranch size={20} className={activeSection === 'projects' ? "animate-pulse drop-shadow-[0_0_5px_rgba(116,245,255,0.8)]" : ""} />
              </a>
              <a className={`${activeSection === 'experience' ? 'bg-primary-container/20 text-primary border-l-2 border-primary-fixed opacity-100' : 'text-outline opacity-40'} hover:bg-white/5 hover:text-primary hover:opacity-100 transition-all p-2 rounded-r-md flex justify-center w-full relative group`} href="#experience" title="DATA_STREAM">
                <Activity size={20} className={activeSection === 'experience' ? "animate-pulse drop-shadow-[0_0_5px_rgba(116,245,255,0.8)]" : ""} />
              </a>
              <a className={`${activeSection === 'contact' ? 'bg-primary-container/20 text-primary border-l-2 border-primary-fixed opacity-100' : 'text-outline opacity-40'} hover:bg-white/5 hover:text-primary hover:opacity-100 transition-all p-2 rounded-r-md flex justify-center w-full relative group`} href="#contact" title="LOGS">
                <Radio size={20} className={activeSection === 'contact' ? "animate-pulse drop-shadow-[0_0_5px_rgba(116,245,255,0.8)]" : ""} />
              </a>
            </div>
            
            <div className="flex flex-col space-y-4 relative w-full items-center">
              <button 
                onClick={() => setIsUplinkOpen(!isUplinkOpen)}
                className={`text-outline hover:bg-white/5 hover:text-primary transition-all p-2 rounded flex justify-center w-full relative ${isUplinkOpen ? 'text-primary bg-white/5 drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]' : 'opacity-40'}`}
                title="UPLINK CORE"
              >
                <Share2 size={20} className={isUplinkOpen ? "animate-pulse" : ""} />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-primary-fixed animate-ping" />
              </button>

              <AnimatePresence>
                {isUplinkOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: -10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-20 bottom-10 w-56 glass-panel border border-primary-fixed/30 rounded-xl p-3 shadow-[0_0_20px_rgba(0,242,255,0.2)] z-[60]"
                  >
                    <div className="font-code-sm text-[8px] font-bold text-primary-fixed tracking-[0.2em] uppercase border-b border-primary-fixed/20 pb-1 mb-2">
                      [ UPLINK_CORE ]
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      {/* GitHub (Main) */}
                      <a href="https://github.com/24f1001022" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-surface/50 border border-primary-fixed/10 hover:border-primary-fixed hover:bg-primary-fixed/5 transition-all text-primary-fixed-dim hover:text-primary-fixed text-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        GITHUB (MAIN)
                      </a>

                      {/* GitHub (Alt) */}
                      <a href="https://github.com/SAFWANHUMAYUN" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-surface/50 border border-primary-fixed/10 hover:border-primary-fixed hover:bg-primary-fixed/5 transition-all text-primary-fixed-dim hover:text-primary-fixed text-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        GITHUB (ALT)
                      </a>
                      
                      {/* LinkedIn */}
                      <a href="https://www.linkedin.com/in/safwan-humayun-82a08423a" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-surface/50 border border-secondary-container/10 hover:border-secondary-container hover:bg-secondary-container/5 transition-all text-secondary-container hover:text-secondary text-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        LINKEDIN
                      </a>
                      
                      {/* Instagram */}
                      <a href="https://www.instagram.com/safwan_humayun/" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-surface/50 border border-tertiary-fixed-dim/10 hover:border-tertiary-fixed-dim hover:bg-tertiary-fixed-dim/5 transition-all text-tertiary-fixed-dim hover:text-tertiary-fixed text-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        INSTAGRAM
                      </a>
                      
                      {/* Kaggle */}
                      <a href="https://www.kaggle.com/safwanhumayun" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-surface/50 border border-[#20BEFF]/10 hover:border-[#20BEFF] hover:bg-[#20BEFF]/5 transition-all text-[#20BEFF] text-[10px]">
                        <Binary size={14} />
                        KAGGLE
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button className="text-outline opacity-40 hover:bg-white/5 hover:text-primary hover:opacity-100 transition-all p-2 rounded flex justify-center w-full">
                <Code size={20} />
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
