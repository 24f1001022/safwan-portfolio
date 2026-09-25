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
            className="font-code-sm text-[11px] text-primary-fixed-dim uppercase tracking-widest block mb-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            [ 04 // ACCREDITED CREDENTIALS ]
          </motion.span>
          <motion.h2 
            className="font-headline-lg text-[32px] md:text-[40px] text-primary font-bold"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Verified Certifications
          </motion.h2>
        </div>
        <div className="hidden md:block font-code-sm text-xs text-outline font-mono">
          ISSUED BY: <span className="text-primary-fixed">IIT MADRAS & MICROSOFT</span>
        </div>
      </div>

      {/* Grid of Futuristic Floating Cyber Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
        {certificates.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow: "0 0 35px rgba(0, 242, 255, 0.2)",
                borderColor: "rgba(0, 242, 255, 0.5)"
              }}
              onClick={() => setActivePdf(cert)}
              className="rounded-2xl p-6 relative group transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-[340px] bg-[#091114]/90 border border-white/10 backdrop-blur-2xl"
            >
              {/* Card Sub-Header */}
              <div className="flex justify-between items-center mb-5 z-10">
                <span className="font-code-sm text-[10px] text-primary-fixed font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-primary-fixed/10 border border-primary-fixed/20">
                  {cert.issuer}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono tracking-wider flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  VERIFIED
                </span>
              </div>
              
              {/* Floating Icon */}
              <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-5 border border-white/10 bg-white/[0.03] group-hover:border-primary-fixed/50 group-hover:bg-primary-fixed/10 transition-all duration-300 z-10">
                <Icon size={22} className="text-primary-fixed group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="font-headline-lg text-base text-primary mb-2.5 leading-snug font-bold group-hover:text-primary-fixed transition-colors z-10">
                {cert.title}
              </h3>
              <p className="font-body-md text-on-surface-variant text-xs leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity mb-4 z-10">
                {cert.desc}
              </p>
              
              {/* Footer details */}
              <div className="font-code-sm text-[10px] text-outline flex items-center justify-between mt-auto pt-4 border-t border-white/10 z-10 font-mono">
                <span className="text-outline/70">{cert.credentialId}</span>
                <span className="text-primary-fixed-dim group-hover:text-primary-fixed transition-colors flex items-center gap-1 font-bold">
                  INSPECT <ExternalLink size={11} />
                </span>
              </div>
              
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 backdrop-blur-md bg-black/80"
            onClick={() => setActivePdf(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[85vh] md:h-[80vh] rounded-3xl border border-primary-fixed/40 bg-[#091114] shadow-[0_0_60px_rgba(0,242,255,0.2)] flex flex-col overflow-hidden"
            >
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-6 py-4 bg-surface-container border-b border-white/10 z-10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                  <span className="font-code-sm text-[12px] text-primary-fixed tracking-wider font-mono">
                    [ VERIFIED_ACADEMIC_DOSSIER: {activePdf.credentialId} ]
                  </span>
                </div>
                <button
                  onClick={() => setActivePdf(null)}
                  className="p-1 rounded-lg border border-white/10 text-outline hover:text-primary-fixed hover:border-primary-fixed hover:bg-primary-fixed/10 transition-all cursor-pointer font-mono text-xs flex items-center gap-1.5 px-3 py-1.5"
                >
                  <X size={14} /> ESC
                </button>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
                
                {/* Left Side: Metadata and Actions */}
                <div className="w-full md:w-80 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 bg-[#060a0c] shrink-0 z-10">
                  <div className="space-y-6">
                    <div>
                      <span className="font-code-sm text-[10px] text-primary-fixed-dim uppercase tracking-widest block mb-1">
                        // ACCREDITATION
                      </span>
                      <h3 className="font-headline-lg text-lg text-primary leading-tight font-bold">
                        {activePdf.title}
                      </h3>
                    </div>

                    <div className="space-y-3 font-mono text-xs text-on-surface-variant border-t border-white/10 pt-4">
                      <div>
                        <span className="text-outline uppercase block text-[9px] tracking-wider">// ACCREDITED INSTITUTION</span>
                        <span className="text-primary font-semibold">{activePdf.issuer}</span>
                      </div>
                      <div>
                        <span className="text-outline uppercase block text-[9px] tracking-wider">// VERIFICATION STATUS</span>
                        <span className="text-emerald-400 font-semibold flex items-center gap-1.5 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          VERIFIED & AUTHENTICATED
                        </span>
                      </div>
                      <div>
                        <span className="text-outline uppercase block text-[9px] tracking-wider">// RECORD ID</span>
                        <span className="text-primary-fixed font-mono tracking-wider font-bold">
                          {activePdf.credentialId}
                        </span>
                      </div>
                    </div>

                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed opacity-85 border-t border-white/10 pt-4">
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
