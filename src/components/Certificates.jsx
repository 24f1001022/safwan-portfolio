import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Cpu, Terminal, LineChart, ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';
import DecrambleText from './DecrambleText';

const certificates = [
  {
    id: "01",
    icon: Award,
    title: "Foundation in Data Science and Programming",
    desc: "IIT Madras. Rigorous training in mathematical foundations, statistical inference, and Python programming for data-centric solutions.",
    pdfUrl: "/certificates/foundation_ds.pdf",
    issuer: "IIT Madras",
    credentialId: "IITM-FDSP-9382"
  },
  {
    id: "02",
    icon: Cpu,
    title: "Generative AI",
    desc: "Microsoft x PhysicsWallah. Mastery of LLM architectures, prompt engineering, and building agentic workflows with Azure OpenAI services.",
    pdfUrl: "/certificates/gen_ai.pdf",
    issuer: "Microsoft x PW",
    credentialId: "MSFT-GENAI-1049"
  },
  {
    id: "03",
    icon: Terminal,
    title: "Diploma in Programming",
    desc: "IIT Madras. Advanced software development principles, data structures, and algorithmic complexity in large-scale systems.",
    pdfUrl: "/certificates/diploma_prog.pdf",
    issuer: "IIT Madras",
    credentialId: "IITM-DIPPROG-4820"
  },
  {
    id: "04",
    icon: LineChart,
    title: "Diploma in Data Science",
    desc: "IIT Madras. Specialized training in machine learning, business analytics, and deep learning for predictive modeling.",
    pdfUrl: "/certificates/diploma_ds.pdf",
    issuer: "IIT Madras",
    credentialId: "IITM-DIPDS-5712"
  }
];

const Certificates = ({ activePdf, setActivePdf }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActivePdf(null);
      }
    };
    if (activePdf) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activePdf]);

  return (
    <section id="certificates" className="relative z-10 py-20">
      <div className="flex justify-between items-end mb-16">
        <div>
          <motion.span 
            className="font-code-sm text-[12px] text-primary-fixed-dim uppercase tracking-widest"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            [ <DecrambleText text="SECURITY_CLEARANCE" delay={300} /> ]
          </motion.span>
          <motion.h2 
            className="font-headline-lg text-[32px] md:text-[40px] text-primary mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <DecrambleText text="CERTIFICATES" delay={150} />
          </motion.h2>
        </div>
      </div>

      {/* Grid of Futuristic Floating Cyber Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
        {certificates.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              
              // Infinite out-of-sync floating vertical drift
              animate={{
                y: [0, -12, 0]
              }}
              transition={{
                y: {
                  duration: 4 + index * 0.5, // out-of-sync drift
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{
                scale: 1.04,
                y: -15, // extra lift on hover
                boxShadow: "0 0 30px rgba(0, 242, 255, 0.25)",
                borderColor: "rgba(0, 242, 255, 0.4)"
              }}
              onClick={() => setActivePdf(cert)}
              className={`rounded-2xl p-6 relative group transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-[320px] bg-surface-container-low border border-white/10 ${
                index === 0 ? 'hud-panel hud-border-glow' : 'hud-panel neon-card'
              }`}
            >
              {/* Laser scanning line effect on hover */}
              <motion.div 
                className="absolute left-0 w-full h-[2px] bg-primary-fixed shadow-[0_0_12px_#00f2ff] z-20 pointer-events-none"
                initial={{ top: 0, opacity: 0 }}
                whileHover={{ 
                  top: ["0%", "100%", "0%"], 
                  opacity: [0, 1, 1, 0] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.0, 
                  ease: "linear" 
                }}
              />

              {/* Sub-Header ID indicator */}
              <div className="flex justify-between items-center mb-6 z-10">
                <span className="font-code-sm text-[9px] text-primary-fixed/40 tracking-[0.2em] uppercase">
                  [ UNIT_0{cert.id} ]
                </span>
                <span className="text-[10px] text-primary-fixed-dim/60 font-mono tracking-widest font-semibold">
                  DEC_SECURE
                </span>
              </div>
              
              {/* Floating Icon */}
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 border transition-all duration-300 bg-surface-container/60 z-10 ${index === 0 ? 'border-primary-fixed/20 group-hover:border-primary-fixed shadow-[0_0_10px_rgba(0,242,255,0.1)]' : 'border-white/5 group-hover:border-secondary-container'}`}>
                <Icon size={20} className={`transition-transform duration-500 group-hover:rotate-[360deg] ${index === 0 ? "text-primary-fixed" : "text-primary-fixed-dim"}`} />
              </div>
              
              <h3 className="font-headline-lg-mobile text-base text-primary mb-2 leading-tight tracking-wide font-bold group-hover:text-primary-fixed transition-colors z-10">
                {cert.title}
              </h3>
              <p className="font-body-md text-on-surface-variant text-[11px] leading-relaxed opacity-75 group-hover:opacity-95 transition-opacity mb-4 z-10">
                {cert.desc}
              </p>
              
              {/* Footer details */}
              <div className="font-code-sm text-[10px] text-outline flex items-center justify-between mt-auto pt-4 border-t border-white/5 z-10">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-primary-fixed-dim/70">verified</span>
                  <span className="tracking-widest text-[9px] text-primary-fixed-dim/70">VERIFIED</span>
                </div>
                <span className="text-[9px] text-primary-fixed/40 group-hover:text-primary-fixed group-hover:underline transition-all flex items-center gap-1 font-mono uppercase">
                  ACCESS <ExternalLink size={10} />
                </span>
              </div>
              
              {/* Background Cyber Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </motion.div>
          );
        })}
      </div>

      {/* Cinematic Cyber Terminal Dossier Modal */}
      <AnimatePresence>
        {activePdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 backdrop-blur-md bg-black/75"
            onClick={() => setActivePdf(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[85vh] md:h-[80vh] rounded-2xl border border-primary-fixed/30 bg-[#0d1515] shadow-[0_0_50px_rgba(0,242,255,0.15)] flex flex-col overflow-hidden"
            >
              {/* Scanline overlay effect for high-tech look */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] opacity-20" />

              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-6 py-4 bg-surface-container border-b border-primary-fixed/20 z-10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-fixed shadow-[0_0_8px_rgba(116,245,255,1)] animate-pulse" />
                  <span className="font-code-sm text-[12px] text-primary-fixed tracking-wider font-mono">
                    [ SYSTEM_DOSSIER: DEC_0{activePdf.id}_SECURE ]
                  </span>
                </div>
                <button
                  onClick={() => setActivePdf(null)}
                  className="p-1 rounded border border-primary-fixed/20 text-outline hover:text-primary-fixed hover:border-primary-fixed hover:bg-primary-fixed/10 transition-all cursor-pointer font-mono text-xs flex items-center gap-1.5 px-2 py-1"
                >
                  <X size={14} /> ESC
                </button>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
                
                {/* Left Side: Metadata and Actions */}
                <div className="w-full md:w-80 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-primary-fixed/10 bg-surface-container-lowest shrink-0 z-10">
                  <div className="space-y-6">
                    <div>
                      <span className="font-code-sm text-[10px] text-primary-fixed-dim/70 uppercase tracking-widest block mb-1">
                        // SECURE_CREDENTIAL
                      </span>
                      <h3 className="font-headline-lg text-lg text-primary leading-tight font-bold">
                        {activePdf.title}
                      </h3>
                    </div>

                    <div className="space-y-3 font-mono text-xs text-on-surface-variant border-t border-primary-fixed/10 pt-4">
                      <div>
                        <span className="text-outline uppercase block text-[9px] tracking-wider">// ISSUER</span>
                        <span className="text-primary font-semibold">{activePdf.issuer}</span>
                      </div>
                      <div>
                        <span className="text-outline uppercase block text-[9px] tracking-wider">// STATUS</span>
                        <span className="text-primary-fixed-dim font-semibold flex items-center gap-1.5 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim animate-ping" />
                          VERIFIED & VALIDATED
                        </span>
                      </div>
                      <div>
                        <span className="text-outline uppercase block text-[9px] tracking-wider">// DECRYPTION_KEY</span>
                        <span className="text-primary-fixed-dim/80 font-mono tracking-wider font-bold">
                          {activePdf.credentialId}
                        </span>
                      </div>
                    </div>

                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed opacity-85 border-t border-primary-fixed/10 pt-4">
                      {activePdf.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-primary-fixed/10 space-y-3">
                    <a
                      href={activePdf.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full holo-btn flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-mono font-bold tracking-widest text-primary-fixed hover:shadow-[0_0_15px_rgba(116,245,255,0.4)] transition-all uppercase"
                    >
                      <ExternalLink size={14} /> Fullscreen
                    </a>
                  </div>
                </div>

                {/* Right Side: PDF Viewer Frame */}
                <div className="flex-1 bg-[#050505] relative overflow-hidden flex items-center justify-center p-2 sm:p-4">
                  {/* Subtle Grid Pattern background for the PDF zone */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(116,245,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(116,245,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                  
                  {/* Dynamic digital scanned frame */}
                  <div className="w-full h-full border border-primary-fixed/10 rounded-lg overflow-hidden bg-black/60 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] relative z-10 flex flex-col">
                    <iframe
                      src={`${activePdf.pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                      className="w-full h-full border-none bg-white/5 opacity-95 group-hover:opacity-100 transition-opacity"
                      title={activePdf.title}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
