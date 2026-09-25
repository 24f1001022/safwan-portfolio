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
    const sections = ['skills', 'projects', 'certificates', 'experience', 'contact'].map(id => document.getElementById(id));
    
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

  const navLinks = [
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'CERTIFICATES', href: '#certificates', id: 'certificates' },
    { name: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Navbar (Desktop) */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className={`hidden md:flex justify-between items-center px-8 py-3.5 fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[1440px] rounded-2xl border border-white/10 backdrop-blur-2xl z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0f12]/80 shadow-[0_4px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(0,242,255,0.12)] border-primary-fixed/20' : 'bg-[#0a0f12]/40 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'}`}
      >
        {/* Brand with live status badge */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-surface-container border border-primary-fixed/30 flex items-center justify-center text-primary-fixed font-bold text-xs font-mono group-hover:border-primary-fixed group-hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-all">
            SH
          </div>
          <div className="flex flex-col">
            <span className="font-headline-lg text-primary text-sm font-bold tracking-wider group-hover:text-primary-fixed transition-colors">
              SAFWAN HUMAYUN
            </span>
            <div className="flex items-center gap-1.5 font-code-sm text-[9px] text-primary-fixed-dim/70 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
              <span>AI & ML ENGINEER</span>
            </div>
          </div>
        </a>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-1 lg:space-x-2 font-code-sm text-[11px] tracking-[0.15em] font-semibold">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href}
              className={`px-3 py-1.5 rounded-md transition-all duration-200 relative ${
                activeSection === link.id 
                  ? 'text-primary-fixed bg-primary-fixed/10 border border-primary-fixed/30 shadow-[0_0_12px_rgba(0,242,255,0.2)]' 
                  : 'text-on-surface-variant hover:text-primary hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Actions & Uplink */}
        <div className="flex items-center space-x-3 relative">
          <button 
            onClick={() => setIsUplinkOpen(!isUplinkOpen)}
            className={`text-primary-fixed-dim hover:text-primary transition-all duration-300 p-2 rounded-xl border border-white/10 hover:border-primary-fixed/30 hover:bg-white/5 relative ${isUplinkOpen ? 'text-primary border-primary-fixed bg-primary-fixed/10 shadow-[0_0_15px_rgba(0,242,255,0.3)]' : ''}`}
            title="CONNECT / SOCIAL LINKS"
          >
            <Share2 size={16} className={isUplinkOpen ? "animate-pulse" : ""} />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary-fixed animate-ping" />
          </button>
          
          <AnimatePresence>
            {isUplinkOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-14 right-0 w-80 glass-panel border border-primary-fixed/30 rounded-2xl p-4 shadow-[0_0_35px_rgba(0,242,255,0.25)] z-[60] overflow-hidden bg-[#0c1214]/95 backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <div className="font-code-sm text-[10px] font-bold text-primary-fixed tracking-[0.2em] uppercase">
                    [ VERIFIED_PROFILES ]
                  </div>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 relative z-10">
                  {/* GitHub (Main) */}
                  <a 
                    href="https://github.com/24f1001022" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface/50 border border-white/10 hover:border-primary-fixed/50 hover:bg-primary-fixed/10 transition-all duration-200 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-fixed group-hover:scale-110 transition-transform mb-1.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <span className="font-code-sm text-[9px] text-on-surface-variant group-hover:text-primary-fixed tracking-wider uppercase text-center">GitHub (IITM)</span>
                  </a>

                  {/* GitHub (Personal) */}
                  <a 
                    href="https://github.com/SAFWANHUMAYUN" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface/50 border border-white/10 hover:border-primary-fixed/50 hover:bg-primary-fixed/10 transition-all duration-200 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-fixed group-hover:scale-110 transition-transform mb-1.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <span className="font-code-sm text-[9px] text-on-surface-variant group-hover:text-primary-fixed tracking-wider uppercase text-center">GitHub (Personal)</span>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/safwan-humayun-82a08423a" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface/50 border border-white/10 hover:border-secondary-container/50 hover:bg-secondary-container/10 transition-all duration-200 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-container group-hover:scale-110 transition-transform mb-1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    <span className="font-code-sm text-[9px] text-on-surface-variant group-hover:text-secondary-container tracking-wider uppercase">LinkedIn</span>
                  </a>

                  {/* Kaggle */}
                  <a 
                    href="https://www.kaggle.com/safwanhumayun" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface/50 border border-white/10 hover:border-[#20BEFF]/50 hover:bg-[#20BEFF]/10 transition-all duration-200 group"
                  >
                    <Binary size={18} className="text-[#20BEFF] group-hover:scale-110 transition-transform mb-1.5" />
                    <span className="font-code-sm text-[9px] text-on-surface-variant group-hover:text-[#20BEFF] tracking-wider uppercase">Kaggle</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-code-sm text-[11px] font-bold tracking-[0.15em] px-4 py-2 border border-primary-fixed/40 text-primary-fixed rounded-xl hover:bg-primary-fixed/10 hover:border-primary-fixed hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all duration-200 cursor-pointer"
          >
            LET'S TALK
          </button>
        </div>
      </motion.nav>

      {/* Mobile Header Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#070b0c]/90 border-b border-white/10 backdrop-blur-xl px-5 flex items-center justify-between z-[60]">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-surface-container border border-primary-fixed/30 flex items-center justify-center text-primary-fixed font-bold text-xs font-mono">
            SH
          </div>
          <span className="font-headline-lg text-primary text-xs font-bold tracking-wider">
            SAFWAN HUMAYUN
          </span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg bg-surface-container border border-white/10 text-primary-fixed"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 left-0 right-0 bg-[#0a0f12]/98 border-b border-white/10 p-6 z-[59] backdrop-blur-2xl flex flex-col gap-4 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-3 rounded-xl font-code-sm text-xs tracking-wider flex items-center justify-between border ${
                    activeSection === link.id
                      ? 'bg-primary-fixed/10 border-primary-fixed/30 text-primary-fixed'
                      : 'border-white/5 text-on-surface-variant hover:text-primary hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] text-outline opacity-60">→</span>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between gap-3">
              <a 
                href="https://github.com/24f1001022" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-lg border border-white/10 text-center font-code-sm text-[10px] text-on-surface-variant"
              >
                GITHUB
              </a>
              <a 
                href="https://www.linkedin.com/in/safwan-humayun-82a08423a" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-lg border border-white/10 text-center font-code-sm text-[10px] text-secondary-container"
              >
                LINKEDIN
              </a>
              <a 
                href="https://www.kaggle.com/safwanhumayun" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-lg border border-white/10 text-center font-code-sm text-[10px] text-[#20BEFF]"
              >
                KAGGLE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
