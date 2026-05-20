import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="relative z-10 py-20">
      <div className="mb-16">
        <motion.span 
          className="font-code-sm text-[12px] text-primary-fixed-dim uppercase tracking-widest"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          [ SYSTEM_LOGS ]
        </motion.span>
        <motion.h2 
          className="font-headline-lg text-[32px] md:text-[40px] text-primary mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          EXPERIENCE
        </motion.h2>
      </div>

      <div className="relative pl-8 md:pl-12 border-l border-white/10 space-y-16 py-4">
        
        {/* Timeline Node 1 */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Glowing Node Point */}
          <motion.div 
            className="absolute -left-[41px] md:-left-[57px] top-2 h-4 w-4 rounded-full bg-primary-fixed shadow-[0_0_15px_rgba(116,245,255,0.8)] border-2 border-surface"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.3 }}
          />
          {/* Connection Line Highlight */}
          <div className="absolute -left-[33px] md:-left-[49px] top-4 h-[calc(100%+4rem)] w-[2px] bg-gradient-to-b from-primary-fixed/50 to-transparent group-hover:from-primary-fixed transition-colors duration-500" />
          
          <div className="hud-panel rounded-xl p-5 sm:p-6 md:p-8 neon-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-fixed/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 sm:mb-6 gap-3 sm:gap-4 relative z-10">
              <div>
                <h3 className="font-headline-lg-mobile text-xl sm:text-2xl text-primary leading-tight">Machine Learning Engineer</h3>
                <div className="font-code-sm text-[11px] sm:text-[12px] text-primary-fixed-dim mt-2 tracking-widest">Neurolab AI Systems</div>
              </div>
              <div className="font-code-sm text-[9px] sm:text-[10px] text-primary-fixed border border-primary-fixed/30 px-3 py-1.5 rounded bg-primary-fixed/10 self-start tracking-widest shadow-[0_0_10px_rgba(116,245,255,0.1)]">
                2025 - PRESENT
              </div>
            </div>
            
            <p className="font-body-md text-on-surface-variant mb-5 sm:mb-6 leading-relaxed relative z-10 text-[14px] sm:text-[15px]">
              Architected and deployed distributed training pipelines for large-scale language models. Optimized inference latency by 40% using TensorRT and custom CUDA kernels. Led a team of 4 engineers in migrating core predictive services to a microservices architecture on AWS EKS.
            </p>
            
            <div className="flex flex-wrap gap-2 relative z-10">
              {['PyTorch', 'Librosa', 'Pandas', 'Matplotlib'].map(tech => (
                <span key={tech} className="font-code-sm text-[10px] sm:text-[11px] tracking-wider text-on-surface bg-white/5 border border-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md hover:bg-white/10 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline Node 2 */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Node Point */}
          <motion.div 
            className="absolute -left-[41px] md:-left-[57px] top-2 h-4 w-4 rounded-full bg-secondary-container opacity-50 border-2 border-surface group-hover:bg-primary-fixed group-hover:opacity-100 transition-all shadow-[0_0_10px_rgba(2,102,255,0.4)]"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.5 }}
          />
          
          <div className="hud-panel rounded-xl p-5 sm:p-6 md:p-8 neon-card opacity-80 group-hover:opacity-100 transition-opacity duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 sm:mb-6 gap-3 sm:gap-4 relative z-10">
              <div>
                <h3 className="font-headline-lg-mobile text-xl sm:text-2xl text-primary leading-tight">Web Developer</h3>
                <div className="font-code-sm text-[11px] sm:text-[12px] text-primary-fixed-dim mt-2 tracking-widest">Synthetix Analytics</div>
              </div>
              <div className="font-code-sm text-[9px] sm:text-[10px] text-outline border border-white/10 px-3 py-1.5 rounded bg-surface-container/50 self-start tracking-widest">
                2023 - 2025
              </div>
            </div>
            
            <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed relative z-10 text-[15px]">
              Developed and maintained high-performance web applications using modern frontend and backend frameworks. Specialized in building responsive user interfaces and robust server-side logic with a focus on scalability and clean code.
            </p>
            
            <div className="flex flex-wrap gap-2 relative z-10">
              {['React', 'Vue', 'Flask', 'SQL', 'Jinja2'].map(tech => (
                <span key={tech} className="font-code-sm text-[11px] tracking-wider text-on-surface bg-white/5 border border-white/10 px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors cursor-default">
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
