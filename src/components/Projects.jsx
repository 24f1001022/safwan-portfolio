import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, AlertTriangle, X, Sparkles, Filter } from 'lucide-react';

const projects = [
  {
    id: 8,
    title: "Multi Source RAG Chat Bot",
    category: "ai",
    date: "06/2026",
    desc: "Autonomous retrieval-augmented generation chatbot querying multi-format documents using vector embeddings and dense semantic search.",
    tags: ["RAG", "LangChain", "Vector DB", "React.js", "Python"],
    platform: "Vercel Cloud",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSZcE4xBWEPdKSctonwLEEo1i9CzvTdh_8rp_p0mzRJ2rUjw359Qs5fLmNjae0hgRYMp7G-5lsZnEhePiTADHSKUgrSaCO7fQ9CMizGoziGSCSXxpXywyY1ieSXlQVUqJJrzWmg6p6otcuT7aW6BQfMAS5TzjXeWpRWUo4IishetUvyEnMqgf2l06glyUErsOhLVrh3GT7zlIQoZoyi9yY9g3a3hXob8JO7sWQsSEXo6m3db8IhmBtqlgX7E8onrU9fscmPEdgOfo",
    github: "https://github.com/24f1001022/multi-source-chatbot",
    live: "https://multi-source-chatbot.vercel.app/"
  },
  {
    id: 6,
    title: "Music Genre Prediction",
    category: "ai",
    date: "01/2026 - 04/2026",
    desc: "Deep Learning acoustic classification leveraging CNN/CRNN architectures and Audio Spectrogram Transformers (AST) for high-accuracy spectrogram analysis.",
    tags: ["PyTorch", "AST", "CNN/CRNN", "Librosa", "Audio ML"],
    platform: "Hugging Face Spaces",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuEP8kjhp7eClf5US7rg7uQiJ-9fHV7ZWy6QBIYH710UyE1hqH-UAqxDmj99HoDDzpu-o46NI0aa6K1S1gTZH9QrszbY77N4ijD7emJdg8aH7p3_8CJ2nY4EI_FaYgRmLWtfN77XTC7JZdLg-iSCY0CpZboOiTbxr_quu9ll-AzzPh-7W8XMxYYwiXaGyVNA_o0YbxyAbWKKwkC_GhEjoj7IRhMPt59wftJYXjgQ02TFSsrhE7EE7EfzFRjZXiDt7n71DZsqxZCCw",
    github: "https://github.com/24f1001022/DL-24f1001022-notebook-t12026",
    live: "https://huggingface.co/spaces/Safwan011/music-genre-spectrograph"
  },
  {
    id: 7,
    title: "Comment Category Prediction",
    category: "ai",
    date: "01/2026 - 04/2026",
    desc: "High-accuracy text classification system utilizing Scikit-learn, XGBoost, LightGBM, and weighted ensemble Voting Classifiers for automated moderation.",
    tags: ["NLP", "XGBoost", "LightGBM", "Scikit-Learn", "Ensemble ML"],
    platform: "Hugging Face Spaces",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk_d9SErYETwHCYBRZ1hCH_gCXw0WibDr5Bpkg9fcQPtfbhVTy_Ne2kumcr6jdF3k_45N8fGXyYWiSOq51LJfnQ9IUO5h_fMeocrTvZDiOvCVUV9ZWK4-bTh4Vi0VC-AGxRJjxumC5uQ4ZQGc3cM0XU_cZrrC_JV13Vsb2Vg3KboY5Oc81VTU4zLSzGr6sq8WCezdraoh2vwjTOH7HFHukYkJ48c3RPARmkMQ6xEZtPodIgjSjx-l-Xcl3xbnBne10bCCCtAUXGhc",
    github: "https://github.com/24f1001022/ML---Comment-Category-Prediction",
    live: "https://huggingface.co/spaces/Safwan011/comment-classifier-hud"
  },
  {
    id: 5,
    title: "HealthHub Hospital Management",
    category: "fullstack",
    date: "12/2025",
    desc: "Enterprise healthcare management portal featuring asynchronous celery queues, Redis caching, and relational patient-doctor appointment workflows.",
    tags: ["Flask", "SQLAlchemy", "Celery", "Redis", "Jinja2"],
    platform: "Vercel Cloud",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk_ttfjB9nSSoXcpEItmwQlUClBOOzXo-gX1VLI_J3V483juDUaz9Na7O6xvrf9WOs7uwP2S5oCP8xLfgspIwnPA4soyObWtVX_9MxkDx2D1pmmTp51Qf6ZaQLyA5KfrdDlvirkXhyqL6Qj3MxXwUSU6Amv4lfXrklGSnrpZ__KTZM2eencd2SjackCdudFTspd3xHPvmS2Rt60EQIKMxzHRfao2MiQS4v7hhfmuzgOVxB3r2acS9ieEpIBNBBKiSbPKAQYvw8BHk",
    github: "https://github.com/24f1001022/HealthHub",
    live: "https://health-hub-gilt.vercel.app/login"
  },
  {
    id: 4,
    title: "Parkify Smart Parking",
    category: "fullstack",
    date: "05/2025 - 06/2025",
    desc: "Real-time parking space allocation and reservation web engine with automated billing, analytics graphs, and role-based access control.",
    tags: ["Flask", "Chart.js", "SQLite", "Jinja2", "Responsive UI"],
    platform: "Vercel Cloud",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnlJ3GSEVvsIOFYoHHlgHEl94TwZYOZ98z8wPrtB1VEngy-mdZD1rtOfcs13UMvqk5-lz7Ow6txMt2eQxS61UV7lAHm0Lyil2YnKYIMsVMEQJxo0TGCYfXKXTV_lgcZHFdovmeLR_Kmw2F7P3F76hotWPVEk4Kp3P1NstIGE0rkZvQpGtus1sIA4S-Mrp9eL23JyaLPu9I1gzgP3O14zRRiv5T2J92R752VItz5Qj3KJDyx-5JOe_3iLl-x4MQjJz7amr2nknqpw8",
    github: "https://github.com/24f1001022/parkify",
    live: "https://parkify-vuf8.vercel.app/login"
  },
  {
    id: 3,
    title: "Talk Space Real-time Messenger",
    category: "fullstack",
    date: "01/2025 - 02/2025",
    desc: "High-concurrency instant communication platform powered by MERN stack, WebSockets, and encrypted peer messaging rooms.",
    tags: ["MERN", "Socket.IO", "React.js", "Node.js", "MongoDB"],
    platform: "Web Application",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClsDSG6Q9NDaU47i200XzWtKa1Iwa3m5PZ_2UBjCQ62qI5DR_CsGNro4EcN-VqRzstYkiG4tl0-bvG5hSxOPDJ-otOYwPGWShwzmUDQ0voYq0z5S8MQq8vCa3CGHLOc63v_B8dYHuzuRueb-Z3xCCRmaUt8oVAAyPqdBG2HC94McHld2o9dyIYIw_dvW2lNzzseQUPIh-YMwi1xARMC2gNY7iynW0rC8okYWqfDvsaERRPg6jONXJfFZxFXUrAUVIsvOx9p3CLP6Y",
    github: "https://github.com/SAFWANHUMAYUN/TalkSpace",
    live: null
  },
  {
    id: 2,
    title: "ShopeyWave E-Commerce",
    category: "fullstack",
    date: "10/2024 - 11/2024",
    desc: "Complete storefront with catalog browsing, shopping cart synchronization, Firebase authentication, and transaction processing.",
    tags: ["React.js", "Firebase", "State Management", "Tailwind CSS"],
    platform: "Web Application",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk_d9SErYETwHCYBRZ1hCH_gCXw0WibDr5Bpkg9fcQPtfbhVTy_Ne2kumcr6jdF3k_45N8fGXyYWiSOq51LJfnQ9IUO5h_fMeocrTvZDiOvCVUV9ZWK4-bTh4Vi0VC-AGxRJjxumC5uQ4ZQGc3cM0XU_cZrrC_JV13Vsb2Vg3KboY5Oc81VTU4zLSzGr6sq8WCezdraoh2vwjTOH7HFHukYkJ48c3RPARmkMQ6xEZtPodIgjSjx-l-Xcl3xbnBne10bCCCtAUXGhc",
    github: "https://github.com/SAFWANHUMAYUN/eCommerce-SHOPEYWAVE",
    live: null
  },
  {
    id: 1,
    title: "Spotify Player Experience",
    category: "fullstack",
    date: "03/2024 - 04/2024",
    desc: "Pixel-accurate music streaming client interface emphasizing smooth transitions, audio controls, and responsive grid layouts.",
    tags: ["HTML5", "CSS3", "JavaScript", "Audio UI"],
    platform: "Web UI",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSZcE4xBWEPdKSctonwLEEo1i9CzvTdh_8rp_p0mzRJ2rUjw359Qs5fLmNjae0hgRYMp7G-5lsZnEhePiTADHSKUgrSaCO7fQ9CMizGoziGSCSXxpXywyY1ieSXlQVUqJJrzWmg6p6otcuT7aW6BQfMAS5TzjXeWpRWUo4IishetUvyEnMqgf2l06glyUErsOhLVrh3GT7zlIQoZoyi9yY9g3a3hXob8JO7sWQsSEXo6m3db8IhmBtqlgX7E8onrU9fscmPEdgOfo",
    github: "https://github.com/SAFWANHUMAYUN/Spotify-Clone",
    live: null
  }
];

const ProjectCard = ({ project, index, onLiveClick }) => {
  const ref = useRef(null);
  
  // Track mouse position for dynamic 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="group relative min-h-[420px] w-full z-10"
    >
      {/* Sleek Gradient Border on Hover */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-primary-fixed/40 via-secondary-container/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
      
      {/* Glassmorphic Project Card */}
      <div className="absolute inset-0 bg-[#091114]/90 rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary-fixed/30 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
        
        {/* Top Header Layer */}
        <div className="relative z-20">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="font-code-sm text-[10px] text-primary-fixed-dim/80 font-mono tracking-wider">
              {project.date}
            </span>
            <span className="font-code-sm text-[9px] uppercase px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-on-surface-variant font-mono">
              {project.platform}
            </span>
          </div>

          <h3 className="font-headline-lg text-xl sm:text-2xl text-primary font-bold mb-2.5 group-hover:text-primary-fixed transition-colors">
            {project.title}
          </h3>

          <p className="font-body-md text-on-surface-variant text-xs sm:text-sm leading-relaxed mb-4">
            {project.desc}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="font-code-sm text-[10px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-on-surface/90">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-20">
          <div className="flex items-center gap-3">
            {project.github ? (
              <motion.a 
                href={project.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-on-surface hover:text-primary-fixed hover:border-primary-fixed/40 transition-all flex items-center gap-1.5 font-code-sm text-xs" 
                title="View Source Code"
              >
                <Code size={16} />
                <span>Code</span>
              </motion.a>
            ) : (
              <span className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-outline/40 cursor-not-allowed flex items-center gap-1.5 font-code-sm text-xs" title="Source Code Archived">
                <Code size={16} />
                <span>Code</span>
              </span>
            )}

            {project.live ? (
              <motion.button 
                onClick={() => onLiveClick(project.live)}
                whileHover={{ scale: 1.05 }}
                className="px-3.5 py-2 rounded-lg bg-primary-fixed/15 border border-primary-fixed/50 text-primary-fixed hover:bg-primary-fixed/25 hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all flex items-center gap-1.5 font-code-sm text-xs font-bold cursor-pointer" 
                title="Open Live Deployment"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </motion.button>
            ) : (
              <span className="px-3 py-1.5 rounded-lg border border-white/5 text-outline/40 font-code-sm text-xs flex items-center gap-1 cursor-default">
                <span>Local Only</span>
              </span>
            )}
          </div>

          <div className="font-code-sm text-[10px] font-mono text-outline/60 flex items-center gap-1">
            <span className={`w-1.5 h-1.5 rounded-full ${project.live ? 'bg-emerald-400' : 'bg-outline/40'}`} />
            <span>{project.live ? 'DEPLOYED' : 'OFFLINE'}</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [disclaimerLink, setDisclaimerLink] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative z-10 py-24">
      {/* Disclaimer Modal */}
      <AnimatePresence>
        {disclaimerLink && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#0b1215] rounded-3xl p-6 sm:p-8 max-w-lg w-full relative border border-primary-fixed/40 shadow-[0_0_50px_rgba(0,242,255,0.2)]"
            >
              <button 
                onClick={() => setDisclaimerLink(null)}
                className="absolute top-5 right-5 text-outline hover:text-primary-fixed transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-4 text-primary-fixed">
                <AlertTriangle size={24} />
                <h3 className="font-headline-lg text-lg font-bold">DEPLOYMENT ACCESS NOTICE</h3>
              </div>

              <p className="font-body-md text-on-surface-variant mb-6 text-sm leading-relaxed">
                You are about to navigate to an external live deployment. Please note:
                <br/><br/>
                <span className="text-primary-fixed-dim block mb-2 font-mono text-xs">
                  • Some features may not work as stated because it is hosted on a trial tier.
                </span>
                <span className="text-primary-fixed-dim block font-mono text-xs">
                  • Some projects may take time to start due to spinning down / going to sleep on free tiers.
                </span>
              </p>

              <div className="flex gap-4">
                <button 
                  onClick={() => setDisclaimerLink(null)}
                  className="flex-1 border border-white/10 hover:border-white/30 text-outline py-2.5 rounded-xl font-code-sm uppercase tracking-widest text-[11px] transition-colors cursor-pointer"
                >
                  ABORT
                </button>
                <a 
                  href={disclaimerLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setDisclaimerLink(null)}
                  className="flex-1 holo-btn text-primary py-2.5 rounded-xl font-code-sm font-bold uppercase tracking-widest text-[11px] flex items-center justify-center hover:shadow-[0_0_20px_rgba(116,245,255,0.4)] transition-all cursor-pointer"
                >
                  PROCEED TO DEMO
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <motion.span 
            className="font-code-sm text-[11px] text-primary-fixed-dim uppercase tracking-widest block mb-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            [ 03 // PRODUCTION SYSTEMS & DEPLOYMENTS ]
          </motion.span>
          <motion.h2 
            className="font-headline-lg text-[32px] md:text-[40px] text-primary font-bold"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Projects (8)' },
            { id: 'ai', label: 'AI & Machine Learning (3)' },
            { id: 'fullstack', label: 'Full-Stack Systems (5)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl font-code-sm text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                filter === tab.id
                  ? 'bg-primary-fixed/20 border border-primary-fixed text-primary-fixed shadow-[0_0_12px_rgba(0,242,255,0.2)]'
                  : 'bg-white/[0.02] border border-white/10 text-on-surface-variant hover:text-primary hover:bg-white/[0.05]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000" style={{ perspective: '1500px' }}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} onLiveClick={setDisclaimerLink} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
