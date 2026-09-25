import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Cpu, Award, GraduationCap } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="relative mt-12 mb-28 z-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <motion.span 
            className="font-code-sm text-[11px] text-primary-fixed-dim uppercase tracking-widest block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            [ 01 // METRICS & BACKGROUND ]
          </motion.span>
          <motion.h2 
            className="font-headline-lg text-[28px] md:text-[36px] text-primary font-bold mt-1"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Engineering Dossier
          </motion.h2>
        </div>
      </div>

      {/* Metrics Row */}
      <motion.div 
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="p-6 bg-[#0a1012]/80 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-primary-fixed/40 hover:shadow-[0_0_25px_rgba(0,242,255,0.15)] transition-all duration-300 group">
          <Rocket size={32} className="text-primary-fixed mb-4 group-hover:scale-110 transition-transform" />
          <div className="font-headline-lg text-[32px] sm:text-[40px] text-primary font-extrabold leading-none mb-1">8+</div>
          <div className="font-code-sm text-[11px] text-on-surface-variant tracking-wider uppercase">Projects Deployed</div>
          <div className="text-[10px] text-primary-fixed-dim/60 font-mono mt-2">Full Stack, AI & Deep Learning</div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="p-6 bg-[#0a1012]/80 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-primary-fixed/40 hover:shadow-[0_0_25px_rgba(0,242,255,0.15)] transition-all duration-300 group">
          <Award size={32} className="text-primary-fixed mb-4 group-hover:scale-110 transition-transform" />
          <div className="font-headline-lg text-[32px] sm:text-[40px] text-primary font-extrabold leading-none mb-1">4</div>
          <div className="font-code-sm text-[11px] text-on-surface-variant tracking-wider uppercase">Credentials</div>
          <div className="text-[10px] text-primary-fixed-dim/60 font-mono mt-2">IIT Madras & Microsoft x PW</div>
        </motion.div>

        <motion.div variants={itemVariants} className="p-6 bg-[#0a1012]/80 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-secondary-container/40 hover:shadow-[0_0_25px_rgba(2,102,255,0.15)] transition-all duration-300 group">
          <Cpu size={32} className="text-secondary-container mb-4 group-hover:scale-110 transition-transform" />
          <div className="font-headline-lg text-[32px] sm:text-[40px] text-primary font-extrabold leading-none mb-1">15+</div>
          <div className="font-code-sm text-[11px] text-on-surface-variant tracking-wider uppercase">Core Technologies</div>
          <div className="text-[10px] text-secondary-container/80 font-mono mt-2">LangGraph, PyTorch, React, Flask</div>
        </motion.div>

        <motion.div variants={itemVariants} className="p-6 bg-[#0a1012]/80 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-primary-fixed/40 hover:shadow-[0_0_25px_rgba(0,242,255,0.15)] transition-all duration-300 group">
          <GraduationCap size={32} className="text-primary-fixed mb-4 group-hover:scale-110 transition-transform" />
          <div className="font-headline-lg text-[32px] sm:text-[40px] text-primary font-extrabold leading-none mb-1">8.0+</div>
          <div className="font-code-sm text-[11px] text-on-surface-variant tracking-wider uppercase">Cumulative CGPA</div>
          <div className="text-[10px] text-primary-fixed-dim/60 font-mono mt-2">IIT Madras BS Program</div>
        </motion.div>
      </motion.div>

      {/* Realistic Academic & Engineering Profile Card */}
      <motion.div 
        className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#090f12]/90 border border-white/10 backdrop-blur-2xl relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-code-sm text-xs text-primary-fixed font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-primary-fixed" />
              BACKGROUND & ACADEMIC PEDIGREE
            </div>
            <h3 className="font-headline-lg text-xl sm:text-2xl text-primary font-bold leading-snug">
              Rigorous Mathematical Foundations & Practical Machine Learning from IIT Madras
            </h3>
            <p className="font-body-md text-on-surface-variant text-sm sm:text-base leading-relaxed">
              Pursuing the Bachelor of Science in Data Science and Applications at the Indian Institute of Technology Madras (IIT Madras), having earned the Diploma in Programming and the Diploma in Data Science. My work bridges empirical machine learning theory with robust, containerized software systems.
            </p>
          </div>

          <div className="space-y-4 md:border-l md:border-white/10 md:pl-8 flex flex-col justify-center">
            <div className="font-code-sm text-[11px] text-outline uppercase tracking-wider">// SPECIALIZED DOMAINS</div>
            <div className="space-y-2.5 font-code-sm text-xs text-on-surface">
              <div className="flex items-center gap-2">
                <span className="text-primary-fixed">▹</span>
                <span>Autonomous Agentic Workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-fixed">▹</span>
                <span>Deep Learning & Transformers (AST/CNN)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-fixed">▹</span>
                <span>Multi-Source RAG & Vector Embeddings</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-fixed">▹</span>
                <span>Distributed Flask & Celery Backends</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient Subtle Accent Border Glow */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-fixed/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default About;
