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
    <section className="relative mt-20 mb-32 z-10">
      <motion.div 
        className="absolute -top-10 right-0 font-code-sm text-primary-fixed-dim/50 tracking-widest text-[12px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        [ METRICS_OVERVIEW ]
      </motion.div>
      
      <motion.div 
        className="glass-panel glow-border rounded-xl p-6 sm:p-8 md:p-12 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-between items-center gap-6 sm:gap-8 relative z-10 w-full">
          
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-6 bg-surface/30 rounded-lg border border-white/5 hover:border-primary-container/50 hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:-translate-y-2 transition-all duration-300 group flex-1 w-full min-h-[140px] sm:min-h-[160px]">
            <Rocket size={40} className="text-primary-container mb-3 sm:mb-4 w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" />
            <div className="font-headline-lg text-[32px] sm:text-[40px] text-primary leading-none mb-2">7</div>
            <div className="font-label-caps text-[10px] sm:text-[12px] text-on-surface-variant tracking-[0.2em] text-center uppercase">Projects Completed</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-6 bg-surface/30 rounded-lg border border-white/5 hover:border-primary-container/50 hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:-translate-y-2 transition-all duration-300 group flex-1 w-full min-h-[140px] sm:min-h-[160px]">
            <Cpu size={40} className="text-primary-container mb-3 sm:mb-4 w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" />
            <div className="font-headline-lg text-[32px] sm:text-[40px] text-primary leading-none mb-2">10+</div>
            <div className="font-label-caps text-[10px] sm:text-[12px] text-on-surface-variant tracking-[0.2em] text-center uppercase">Technologies</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-6 bg-surface/30 rounded-lg border border-white/5 hover:border-primary-container/50 hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:-translate-y-2 transition-all duration-300 group flex-1 w-full min-h-[140px] sm:min-h-[160px]">
            <Award size={40} className="text-primary-container mb-3 sm:mb-4 w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" />
            <div className="font-headline-lg text-[32px] sm:text-[40px] text-primary leading-none mb-2">4</div>
            <div className="font-label-caps text-[10px] sm:text-[12px] text-on-surface-variant tracking-[0.2em] text-center uppercase">Certificates</div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-6 bg-surface/30 rounded-lg border border-white/5 hover:border-primary-container/50 hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:-translate-y-2 transition-all duration-300 group flex-1 w-full min-h-[140px] sm:min-h-[160px]">
            <GraduationCap size={40} className="text-primary-container mb-3 sm:mb-4 w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" />
            <div className="font-headline-lg text-[32px] sm:text-[40px] text-primary leading-none mb-2">8+</div>
            <div className="font-label-caps text-[10px] sm:text-[12px] text-on-surface-variant tracking-[0.2em] text-center uppercase">CGPA</div>
          </motion.div>
          
        </div>
        
        {/* Animated Background Gradient inside Card */}
        <motion.div 
          className="absolute -inset-1/2 bg-gradient-to-r from-primary-container/0 via-primary-container/10 to-primary-container/0 rotate-45 z-0"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        />
      </motion.div>
    </section>
  );
};

export default About;
