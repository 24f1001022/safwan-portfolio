import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Spotify Clone",
    date: "03/2024 - 04/2024",
    desc: "Responsive music streaming UI using HTML5 and CSS.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSZcE4xBWEPdKSctonwLEEo1i9CzvTdh_8rp_p0mzRJ2rUjw359Qs5fLmNjae0hgRYMp7G-5lsZnEhePiTADHSKUgrSaCO7fQ9CMizGoziGSCSXxpXywyY1ieSXlQVUqJJrzWmg6p6otcuT7aW6BQfMAS5TzjXeWpRWUo4IishetUvyEnMqgf2l06glyUErsOhLVrh3GT7zlIQoZoyi9yY9g3a3hXob8JO7sWQsSEXo6m3db8IhmBtqlgX7E8onrU9fscmPEdgOfo",
    github: "https://github.com/SAFWANHUMAYUN/Spotify-Clone",
    live: null
  },
  {
    id: 2,
    title: "E-commerce Website",
    date: "10/2024 - 11/2024",
    desc: "Full-stack platform with React.js and Firebase.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk_d9SErYETwHCYBRZ1hCH_gCXw0WibDr5Bpkg9fcQPtfbhVTy_Ne2kumcr6jdF3k_45N8fGXyYWiSOq51LJfnQ9IUO5h_fMeocrTvZDiOvCVUV9ZWK4-bTh4Vi0VC-AGxRJjxumC5uQ4ZQGc3cM0XU_cZrrC_JV13Vsb2Vg3KboY5Oc81VTU4zLSzGr6sq8WCezdraoh2vwjTOH7HFHukYkJ48c3RPARmkMQ6xEZtPodIgjSjx-l-Xcl3xbnBne10bCCCtAUXGhc",
    github: "https://github.com/SAFWANHUMAYUN/eCommerce-SHOPEYWAVE",
    live: null
  },
  {
    id: 3,
    title: "Talk Space",
    date: "01/2025 - 02/2025",
    desc: "Real-time chat app using MERN stack and Socket.IO.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClsDSG6Q9NDaU47i200XzWtKa1Iwa3m5PZ_2UBjCQ62qI5DR_CsGNro4EcN-VqRzstYkiG4tl0-bvG5hSxOPDJ-otOYwPGWShwzmUDQ0voYq0z5S8MQq8vCa3CGHLOc63v_B8dYHuzuRueb-Z3xCCRmaUt8oVAAyPqdBG2HC94McHld2o9dyIYIw_dvW2lNzzseQUPIh-YMwi1xARMC2gNY7iynW0rC8okYWqfDvsaERRPg6jONXJfFZxFXUrAUVIsvOx9p3CLP6Y",
    github: "https://github.com/SAFWANHUMAYUN/TalkSpace",
    live: null
  },
  {
    id: 4,
    title: "Parkify",
    date: "05/2025 - 06/2025",
    desc: "Parking reservation system using Flask, Jinja2, and Chart.js.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnlJ3GSEVvsIOFYoHHlgHEl94TwZYOZ98z8wPrtB1VEngy-mdZD1rtOfcs13UMvqk5-lz7Ow6txMt2eQxS61UV7lAHm0Lyil2YnKYIMsVMEQJxo0TGCYfXKXTV_lgcZHFdovmeLR_Kmw2F7P3F76hotWPVEk4Kp3P1NstIGE0rkZvQpGtus1sIA4S-Mrp9eL23JyaLPu9I1gzgP3O14zRRiv5T2J92R752VItz5Qj3KJDyx-5JOe_3iLl-x4MQjJz7amr2nknqpw8",
    github: "https://github.com/24f1001022/parkify",
    live: null
  },
  {
    id: 5,
    title: "HealthHub",
    date: "12/2025",
    desc: "Flask-based platform with SQLAlchemy, Celery, and Redis.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk_ttfjB9nSSoXcpEItmwQlUClBOOzXo-gX1VLI_J3V483juDUaz9Na7O6xvrf9WOs7uwP2S5oCP8xLfgspIwnPA4soyObWtVX_9MxkDx2D1pmmTp51Qf6ZaQLyA5KfrdDlvirkXhyqL6Qj3MxXwUSU6Amv4lfXrklGSnrpZ__KTZM2eencd2SjackCdudFTspd3xHPvmS2Rt60EQIKMxzHRfao2MiQS4v7hhfmuzgOVxB3r2acS9ieEpIBNBBKiSbPKAQYvw8BHk",
    github: "https://github.com/24f1001022/HealthHub",
    live: null
  },
  {
    id: 6,
    title: "Music Genre Prediction",
    date: "01/2026 - 04/2026",
    desc: "Deep Learning project using CNN/CRNN and Audio Spectrogram Transformers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuEP8kjhp7eClf5US7rg7uQiJ-9fHV7ZWy6QBIYH710UyE1hqH-UAqxDmj99HoDDzpu-o46NI0aa6K1S1gTZH9QrszbY77N4ijD7emJdg8aH7p3_8CJ2nY4EI_FaYgRmLWtfN77XTC7JZdLg-iSCY0CpZboOiTbxr_quu9ll-AzzPh-7W8XMxYYwiXaGyVNA_o0YbxyAbWKKwkC_GhEjoj7IRhMPt59wftJYXjgQ02TFSsrhE7EE7EfzFRjZXiDt7n71DZsqxZCCw",
    github: "https://github.com/24f1001022/DL-24f1001022-notebook-t12026",
    live: null
  },
  {
    id: 7,
    title: "Comment Category Prediction",
    date: "01/2026 - 04/2026",
    desc: "Machine Learning project using Scikit-learn, XGBoost, LightGBM, and ensemble-based Voting Classifiers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk_d9SErYETwHCYBRZ1hCH_gCXw0WibDr5Bpkg9fcQPtfbhVTy_Ne2kumcr6jdF3k_45N8fGXyYWiSOq51LJfnQ9IUO5h_fMeocrTvZDiOvCVUV9ZWK4-bTh4Vi0VC-AGxRJjxumC5uQ4ZQGc3cM0XU_cZrrC_JV13Vsb2Vg3KboY5Oc81VTU4zLSzGr6sq8WCezdraoh2vwjTOH7HFHukYkJ48c3RPARmkMQ6xEZtPodIgjSjx-l-Xcl3xbnBne10bCCCtAUXGhc",
    github: "https://github.com/24f1001022/ML---Comment-Category-Prediction",
    live: null
  }
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  
  // Track mouse position for dynamic 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="group relative h-[400px] w-full cursor-pointer z-10"
    >
      {/* Animated Neon Border Base */}
      <div className="absolute -inset-[3px] bg-gradient-to-r from-primary-fixed via-secondary-container to-tertiary-fixed-dim rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[15px] bg-[length:200%_200%] animate-gradient -z-10" style={{ transform: "translateZ(-10px)" }} />
      <div className="absolute -inset-[1px] bg-gradient-to-r from-primary-fixed via-secondary-container to-tertiary-fixed-dim rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_200%] animate-gradient -z-10" />
      
      {/* Actual Glassmorphism Card */}
      <div className="absolute inset-0 hud-panel rounded-xl overflow-hidden border border-white/5 transition-colors transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
        
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent z-10 pointer-events-none" />
        
        <motion.img 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700" 
          src={project.image}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
        />
        
        {/* Floating Content Layer */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 pointer-events-none" style={{ transform: 'translateZ(40px)' }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary-container/10 border border-primary-fixed/30 rounded-full font-code-sm text-[10px] text-primary-fixed backdrop-blur-sm shadow-[0_0_10px_rgba(116,245,255,0.2)]">
              {project.date}
            </span>
          </div>
          <h3 className="font-headline-lg-mobile text-2xl text-primary mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">{project.title}</h3>
          <p className="font-body-md text-on-surface-variant mb-6 max-w-md drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">{project.desc}</p>
          
          <div className="flex items-center justify-between border-t border-white/20 pt-4 pointer-events-auto">
            <div className="flex gap-4">
              {project.github ? (
                <motion.a 
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, color: "#74f5ff" }}
                  className="text-outline cursor-pointer transition-colors" 
                  title="Source Code"
                >
                  <Code size={20} />
                </motion.a>
              ) : (
                <span className="text-outline/30 cursor-not-allowed" title="Source Code Offline">
                  <Code size={20} />
                </span>
              )}
              {project.live ? (
                <motion.a 
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, color: "#74f5ff" }}
                  className="text-outline cursor-pointer transition-colors" 
                  title="Live Deployment"
                >
                  <ExternalLink size={20} />
                </motion.a>
              ) : (
                <span className="text-outline/30 cursor-not-allowed" title="Deployment Offline">
                  <ExternalLink size={20} />
                </span>
              )}
            </div>
            <span className="font-code-sm text-[10px] text-primary-fixed-dim/70 tracking-widest">[ SYS_ONLINE ]</span>
          </div>
        </div>
        
        {/* Sublayer Hover Glow Effect inside card */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,242,255,0.15)_0%,_transparent_70%)] pointer-events-none transition-opacity duration-500 mix-blend-screen z-10" />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 py-20">
      <div className="mb-16">
        <motion.span 
          className="font-code-sm text-[12px] text-primary-fixed-dim uppercase tracking-widest"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          [ NEURAL_DEPLOYMENTS ]
        </motion.span>
        <motion.h2 
          className="font-headline-lg text-[32px] md:text-[40px] text-primary mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          PROJECTS
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000" style={{ perspective: '1500px' }}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
