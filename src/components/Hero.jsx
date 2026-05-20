import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Generate random particles
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between pt-24 md:pt-32 pb-12 lg:pb-0 gap-12 lg:gap-0">
      
      {/* Cinematic Glowing Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary-fixed blur-[1px]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              boxShadow: '0 0 10px rgba(116, 245, 255, 0.8)',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, Math.random() * 0.8 + 0.2, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: p.duration,
              delay: p.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="absolute top-12 md:top-20 lg:top-40 left-4 lg:left-0 font-code-sm text-[12px] md:text-[14px] text-primary-fixed-dim/70 tracking-widest z-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        [ OPERATOR: SAFWAN HUMAYUN | AGE: 23 ]
      </motion.div>

      <motion.div 
        className="lg:w-1/2 flex flex-col gap-6 z-20 items-start w-full"
        style={{ y: y1, opacity }}
      >
        <motion.h1 
          className="font-display-xl text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] text-primary font-extrabold leading-[1.1] tracking-tight drop-shadow-[0_0_30px_rgba(0,242,255,0.2)] relative w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Building Intelligent Solutions for a <br className="hidden md:block" /><span className="text-primary-container bg-clip-text text-transparent bg-gradient-to-r from-primary-container to-tertiary-fixed-dim animate-gradient relative z-10">Smarter Tomorrow</span>
          {/* Subtle glow behind the gradient text */}
          <span className="absolute bottom-0 left-0 w-full h-1/2 bg-primary-container/20 blur-[40px] -z-10 rounded-full mix-blend-screen"></span>
        </motion.h1>
        
        <motion.p 
          className="font-body-md text-on-surface-variant text-base sm:text-lg max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I am <span className="text-primary font-bold">Safwan Humayun</span>, a 23-year-old AI & ML Engineer passionate about Machine Learning, Deep Learning, Full Stack Development, and futuristic AI experiences.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-4 mt-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="holo-btn px-6 sm:px-8 py-3 rounded text-primary-container font-label-caps font-bold tracking-[0.2em] text-[11px] sm:text-[12px] uppercase group w-full sm:w-auto" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore My Work
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">-&gt;</span>
          </button>
        </motion.div>


      </motion.div>

      <motion.div 
        className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 relative z-10 w-full"
        style={{ y: y2 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] flex items-center justify-center shrink-0">
          
          {/* Animated Holographic Rings */}
          <motion.div 
            className="absolute inset-2 md:inset-4 rounded-full border border-primary-fixed/20 shadow-[0_0_50px_rgba(0,242,255,0.1)_inset] mix-blend-screen"
            animate={{ rotateZ: 360, scale: [1, 1.05, 1] }}
            transition={{ rotateZ: { repeat: Infinity, duration: 25, ease: "linear" }, scale: { repeat: Infinity, duration: 8, ease: "easeInOut" } }}
          />
          <motion.div 
            className="absolute inset-8 md:inset-12 rounded-full border border-secondary-container/30 border-dashed mix-blend-screen"
            animate={{ rotateZ: -360 }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-14 md:inset-20 rounded-full border-t-2 border-r-2 border-primary-fixed-dim/40 mix-blend-screen"
            animate={{ rotateZ: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          />

          {/* Glowing Platform Base */}
          <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 md:h-16 bg-primary-container/20 rounded-[100%] blur-[20px] md:blur-[30px] animate-pulse"></div>
          
          {/* Holographic Brain Main Image */}
          <motion.img 
            alt="Holographic Brain" 
            className="w-[75%] h-[75%] md:w-[80%] md:h-[80%] object-contain mix-blend-screen drop-shadow-[0_0_40px_rgba(0,242,255,0.8)] relative z-10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu12Fbb3iKAdCpfzPSTqKK5Rm9SKf70aHmuDOFN6y-BRbLfINIU3mKFd1WbPFUnKZM-3_rKH2dexfXC91MfZAKM_Mo1_hxTu6nCCKQ90IuhvGzavc7Xd0G5H_XbgPUjFZMWqmlV_pUUcjoX6adagBQDvJ72v5DN7qhO-XdAP_RoYWmM94nmGqQ6KIwGeZr8EGjxW0egBfRObz01XdzaAJJzLq14rlUDfO0kxPUCCfqzLEmouWfSRM1ssqzapo-GShwfvsObk7ptMc"
            animate={{ 
              y: [0, -15, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut"
            }}
          />
          
          {/* Decorative Floating Elements / Nodes */}
          <motion.div 
            className="absolute top-4 md:top-10 right-0 md:right-10 text-primary-container font-code-sm text-[8px] md:text-[10px] tracking-widest backdrop-blur-md border border-primary-container/30 px-2 md:px-3 py-1 md:py-1.5 rounded bg-surface/40 shadow-[0_0_15px_rgba(0,242,255,0.2)] z-20"
            animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            SYS_LOAD: 98.4%
          </motion.div>
          
          <motion.div 
            className="absolute bottom-12 md:bottom-20 left-0 md:left-4 text-secondary-container font-code-sm text-[8px] md:text-[10px] tracking-widest border border-secondary-container/30 px-2 md:px-3 py-1 md:py-1.5 rounded backdrop-blur-md bg-surface/40 shadow-[0_0_15px_rgba(2,102,255,0.2)] z-20"
            animate={{ y: [0, -15, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
          >
            NEURAL_LINK_ESTABLISHED
          </motion.div>

          <motion.div 
            className="absolute top-1/2 right-0 md:-right-4 text-tertiary-fixed-dim font-code-sm text-[8px] md:text-[10px] tracking-widest border-l-2 border-tertiary-fixed-dim/50 pl-1.5 md:pl-2 opacity-50 z-20"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ repeat: Infinity, duration: 3, delay: 2, ease: "linear" }}
          >
            DATA_STREAM_ACTIVE<br/>
            [|||||||||||| ]
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
