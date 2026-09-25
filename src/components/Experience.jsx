import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="relative z-10 py-24">
      <div className="mb-16">
        <motion.span 
          className="font-code-sm text-[11px] text-primary-fixed-dim uppercase tracking-widest block mb-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          [ 05 // SYSTEM CHRONOLOGY ]
        </motion.span>
        <motion.h2 
          className="font-headline-lg text-[32px] md:text-[40px] text-primary font-bold"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & Engineering Track
        </motion.h2>
      </div>

      <div className="relative pl-6 sm:pl-10 md:pl-12 border-l border-white/10 space-y-12 py-2">
        
        {/* Timeline Node 1 */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Glowing Node Point */}
          <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-2 h-3.5 w-3.5 rounded-full bg-primary-fixed shadow-[0_0_15px_rgba(0,242,255,0.8)] border-2 border-[#070b0c]" />
          
          <div className="rounded-2xl p-6 sm:p-8 bg-[#091114]/90 border border-white/10 hover:border-primary-fixed/30 transition-all duration-300 backdrop-blur-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 relative z-10">
              <div>
                <h3 className="font-headline-lg text-lg sm:text-xl text-primary font-bold">
                  AI & Machine Learning Engineer
                </h3>
                <div className="font-code-sm text-xs text-primary-fixed-dim mt-1 font-mono tracking-wider">
                  Applied Deep Learning & Autonomous Agent Architectures
                </div>
              </div>
              <div className="font-code-sm text-[10px] text-primary-fixed border border-primary-fixed/30 px-3 py-1 rounded-full bg-primary-fixed/10 self-start tracking-wider font-mono">
                2025 - PRESENT
              </div>
            </div>
            
            <p className="font-body-md text-on-surface-variant mb-5 leading-relaxed relative z-10 text-xs sm:text-sm">
              Architecting stateful multi-agent workflows with LangGraph and hybrid retrieval systems (RAG). Training and evaluating neural audio transformers (Audio Spectrogram Transformers) and convolutional architectures in PyTorch, while optimizing high-throughput tabular models with ensemble Gradient Boosted Trees.
            </p>
            
            <div className="flex flex-wrap gap-2 relative z-10 font-mono text-[11px]">
              {['PyTorch', 'LangGraph', 'Transformers (AST)', 'Multi-Source RAG', 'Scikit-Learn', 'Librosa'].map(tech => (
                <span key={tech} className="text-on-surface/90 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline Node 2 */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Node Point */}
          <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-2 h-3.5 w-3.5 rounded-full bg-secondary-container shadow-[0_0_12px_rgba(2,102,255,0.6)] border-2 border-[#070b0c]" />
          
          <div className="rounded-2xl p-6 sm:p-8 bg-[#091114]/90 border border-white/10 hover:border-secondary-container/30 transition-all duration-300 backdrop-blur-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 relative z-10">
              <div>
                <h3 className="font-headline-lg text-lg sm:text-xl text-primary font-bold">
                  Full-Stack Software Developer
                </h3>
                <div className="font-code-sm text-xs text-secondary-container mt-1 font-mono tracking-wider">
                  Production Web Platforms & Scalable Backends
                </div>
              </div>
              <div className="font-code-sm text-[10px] text-on-surface-variant border border-white/10 px-3 py-1 rounded-full bg-white/[0.03] self-start tracking-wider font-mono">
                2024 - 2025
              </div>
            </div>
            
            <p className="font-body-md text-on-surface-variant mb-5 leading-relaxed relative z-10 text-xs sm:text-sm">
              Engineered end-to-end web applications with Flask, Redis caching, Celery distributed tasks, and SQLAlchemy relational models (HealthHub, Parkify). Developed responsive, interactive single-page frontends using React.js and real-time WebSocket communications with Socket.IO.
            </p>
            
            <div className="flex flex-wrap gap-2 relative z-10 font-mono text-[11px]">
              {['Flask', 'Celery & Redis', 'React.js', 'SQLAlchemy', 'Socket.IO', 'Firebase'].map(tech => (
                <span key={tech} className="text-on-surface/90 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
