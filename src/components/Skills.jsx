import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-[80vh] flex flex-col items-center justify-center py-20 z-10">
      <motion.div 
        className="absolute top-0 left-0 font-code-sm text-[12px] text-primary-fixed-dim/50 tracking-widest uppercase"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        [ NEURAL_NETWORK / SKILL_MATRIX ]
      </motion.div>
      
      <motion.h2 
        className="font-headline-lg text-[32px] md:text-[40px] text-primary mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skill Galaxy
      </motion.h2>

      {/* Main Grid for Matrix View (from the "other" HTML snippet) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-32">
        <motion.div 
          className="hud-panel hud-border-glow rounded-xl p-6 relative overflow-hidden group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h3 className="font-headline-lg-mobile text-xl text-primary mb-4 border-b border-white/10 pb-2 relative z-10">Languages & Frameworks</h3>
          <div className="flex flex-wrap gap-2 relative z-10">
            {['Python', 'JavaScript', 'Java', 'SQL', 'React.js', 'Vue.js', 'Flask', 'Node.js', 'Express.js'].map((lang, i) => (
              <motion.span 
                key={lang}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="px-3 py-1 bg-surface-container border border-white/10 rounded font-code-sm text-sm text-on-surface cursor-pointer"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="hud-panel rounded-xl p-6 neon-card relative overflow-hidden group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h3 className="font-headline-lg-mobile text-xl text-primary mb-4 border-b border-white/10 pb-2 relative z-10">Currently Learning</h3>
          <div className="flex flex-wrap gap-2 relative z-10">
            <motion.span 
              animate={{ boxShadow: ['0 0 0px rgba(116,245,255,0)', '0 0 10px rgba(116,245,255,0.5)', '0 0 0px rgba(116,245,255,0)'] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="px-3 py-1 bg-primary-container/10 border border-primary-fixed/30 rounded font-code-sm text-sm text-primary-fixed"
            >
              LangChain
            </motion.span>
          </div>
        </motion.div>

        <motion.div 
          className="hud-panel hud-border-glow rounded-xl p-6 relative overflow-hidden group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h3 className="font-headline-lg-mobile text-xl text-primary mb-4 border-b border-white/10 pb-2 relative z-10">Technologies</h3>
          <div className="flex flex-wrap gap-2 relative z-10">
            {['Git', 'GitHub', 'Firebase', 'Redis', 'Celery', 'Socket.IO', 'Chart.js', 'Redux Toolkit', 'Mongoose'].map((tech) => (
              <motion.span 
                key={tech}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="px-3 py-1 bg-surface-container border border-white/10 rounded font-code-sm text-sm text-on-surface cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Interactive Floating Nodes Area */}
      <div className="relative w-full max-w-3xl h-[500px] flex items-center justify-center hidden md:flex">
        {/* Center Node */}
        <motion.div 
          className="absolute z-20 w-32 h-32 rounded-full border-2 border-primary-container bg-surface-container/80 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_30px_rgba(0,242,255,0.4)] glow-border cursor-pointer"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 50px rgba(0,242,255,0.8)" }}
        >
          <span className="font-label-caps font-bold text-primary text-[10px] tracking-widest text-center px-2">AI/ML<br/>Expertise</span>
        </motion.div>

        {/* Orbiting Nodes Generator */}
        {[
          { name: 'Python', top: '15%', left: '25%', rotate: '-45deg' },
          { name: 'Vuejs', top: '25%', right: '15%', rotate: '-12deg' },
          { name: 'PyTorch', bottom: '20%', right: '25%', rotate: '45deg' },
          { name: 'NLP', bottom: '25%', left: '25%', rotate: '120deg' },
          { name: 'React', top: '40%', left: '10%', rotate: '160deg' },
          { name: 'Machine Learning', top: '50%', right: '5%', rotate: '15deg', size: 'w-24 h-24' },
          { name: 'Deep Learning', bottom: '10%', right: '45%', rotate: '75deg', size: 'w-24 h-24' },
          { name: 'Data Science', top: '75%', left: '15%', rotate: '210deg' },
        ].map((skill, index) => (
          <React.Fragment key={skill.name}>
            <div className="absolute bg-primary-fixed/20 h-[1px] w-48 top-1/2 left-1/2 origin-left z-10 hidden" style={{ transform: `rotate(${skill.rotate})` }}></div>
            <motion.div 
              className={`absolute z-20 ${skill.size || 'w-20 h-20'} rounded-full border border-primary-fixed/30 bg-surface/60 backdrop-blur-md flex items-center justify-center cursor-pointer`}
              style={{ top: skill.top, left: skill.left, right: skill.right, bottom: skill.bottom }}
              animate={{ 
                y: [0, Math.random() * 20 - 10, 0],
                x: [0, Math.random() * 20 - 10, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4 + Math.random() * 3,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
              whileHover={{ 
                scale: 1.2, 
                borderColor: '#00f2ff', 
                boxShadow: '0 0 20px rgba(0,242,255,0.5)',
                zIndex: 30 
              }}
            >
              <span className="font-code-sm text-secondary-fixed-dim text-xs text-center px-1">{skill.name}</span>
            </motion.div>
          </React.Fragment>
        ))}

        {/* Background rings */}
        <motion.div 
          className="absolute w-[300px] h-[300px] rounded-full border border-white/5 z-0"
          animate={{ rotateZ: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full border border-white/5 border-dashed z-0 opacity-50"
          animate={{ rotateZ: -360 }}
          transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
        />
      </div>
    </section>
  );
};

export default Skills;
