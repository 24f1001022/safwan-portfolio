import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Cpu, Network, ShieldCheck, Terminal, Sparkles, Layers } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  const [activeNode, setActiveNode] = useState('agent');

  const nodes = [
    { id: 'agent', label: 'LANGGRAPH AGENT', desc: 'Cyclic state machine orchestrating tools & reasoning', icon: Cpu, latency: '12ms', status: 'ACTIVE' },
    { id: 'rag', label: 'HYBRID RAG PIPELINE', desc: 'Vector embeddings + dense reranking across multi-source docs', icon: Layers, latency: '24ms', status: 'SYNCHRONIZED' },
    { id: 'dl', label: 'DEEP LEARNING CORE', desc: 'CNN/CRNN & Audio Spectrogram Transformers in PyTorch', icon: Network, latency: '8ms', status: 'READY' },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col lg:flex-row items-center justify-between pt-24 md:pt-32 pb-16 lg:pb-8 gap-12 lg:gap-8 z-10">
      
      {/* Background Subtle Tech Watermark */}
      <div className="absolute top-10 right-4 font-mono text-[80px] sm:text-[140px] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
        AUTONOMOUS
      </div>

      {/* Left Column: Hero Text & Call to Actions */}
      <motion.div 
        className="lg:w-7/12 flex flex-col gap-6 z-20 items-start w-full"
        style={{ y: y1, opacity }}
      >
        {/* Status Chip */}
        <motion.div 
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0a1215] border border-primary-fixed/30 text-primary-fixed font-code-sm text-[11px] tracking-wider shadow-[0_0_15px_rgba(0,242,255,0.15)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-on-surface/90">SAFWAN HUMAYUN</span>
          <span className="text-primary-fixed-dim/40">//</span>
          <span className="text-primary-fixed-dim font-bold">IIT MADRAS ALUM</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          className="font-headline-lg text-[36px] sm:text-[46px] md:text-[56px] lg:text-[62px] text-primary font-extrabold leading-[1.1] tracking-tight drop-shadow-[0_0_40px_rgba(0,242,255,0.15)] relative w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Engineering Autonomous <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-fixed via-primary-container to-secondary-container animate-gradient">
            Agentic AI & Machine Learning
          </span> <br className="hidden sm:block" />
          Systems
        </motion.h1>
        
        {/* Grounded Realistic Bio */}
        <motion.p 
          className="font-body-md text-on-surface-variant text-base sm:text-lg max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Specializing in <span className="text-primary font-semibold">LangGraph & LangChain multi-agent workflows</span>, deep neural networks, and scalable full-stack production services. Holding double diplomas in <span className="text-primary-fixed-dim font-medium">Data Science & Programming from IIT Madras</span>.
        </motion.p>
        
        {/* Core Competency Tags */}
        <motion.div 
          className="flex flex-wrap gap-2 pt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {['LangGraph', 'Multi-Agent Systems', 'PyTorch', 'Multi-Source RAG', 'Transformers', 'FastAPI & Flask', 'React.js'].map((tag) => (
            <span key={tag} className="font-code-sm text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-on-surface/80">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-wrap items-center gap-4 mt-3 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button 
            className="holo-btn px-6 sm:px-8 py-3.5 rounded-xl text-primary font-code-sm font-bold tracking-[0.15em] text-[12px] uppercase group flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(0,242,255,0.2)]" 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Explore Deployed Projects</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button 
            className="px-6 py-3.5 rounded-xl border border-white/10 hover:border-primary-fixed/40 bg-white/[0.03] hover:bg-white/[0.07] text-on-surface font-code-sm font-semibold tracking-wider text-[12px] transition-all cursor-pointer"
            onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Verify IITM Credentials
          </button>
        </motion.div>

        {/* Live Telemetry Bar */}
        <motion.div 
          className="pt-4 border-t border-white/10 w-full flex flex-wrap items-center gap-6 font-code-sm text-[11px] text-outline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-fixed/60"></span>
            <span>LOCATION: CHENNAI / REMOTE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
            <span>FOCUS: AGENTIC GRAPH & RAG</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span className="text-emerald-400/90">CREDENTIALS VERIFIED</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Column: Futuristic Interactive Neural Node HUD */}
      <motion.div 
        className="lg:w-5/12 flex justify-center items-center relative z-20 w-full"
        style={{ y: y2 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="relative w-full max-w-[440px] rounded-3xl p-6 bg-[#091013]/90 border border-primary-fixed/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,242,255,0.15)] overflow-hidden">
          
          {/* Subtle Cyber Radar Sweep Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(0,242,255,0.08)_0%,_transparent_70%)] pointer-events-none" />
          
          {/* Window Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5 font-mono text-[10px] tracking-widest text-primary-fixed-dim">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-primary-fixed" />
              <span>LANGGRAPH_ORCHESTRATION_CORE</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold">
              SYS_STABLE
            </span>
          </div>

          {/* Interactive DAG Nodes */}
          <div className="space-y-3 relative z-10 mb-6">
            {nodes.map((node) => {
              const Icon = node.icon;
              const isSelected = activeNode === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isSelected 
                      ? 'bg-primary-fixed/10 border-primary-fixed shadow-[0_0_20px_rgba(0,242,255,0.2)]' 
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-primary-fixed text-black' : 'bg-surface-container text-primary-fixed-dim'}`}>
                        <Icon size={14} />
                      </div>
                      <span className={`font-mono text-xs font-bold tracking-wider ${isSelected ? 'text-primary' : 'text-on-surface'}`}>
                        {node.label}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-primary-fixed-dim/70">
                      {node.latency}
                    </span>
                  </div>
                  <p className="font-body-md text-xs text-on-surface-variant leading-relaxed pl-8">
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Real Telemetry Readout Box */}
          <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] space-y-2">
            <div className="flex justify-between text-outline">
              <span>// ARCHITECTURE</span>
              <span className="text-primary-fixed">STATEGRAPH_DAG</span>
            </div>
            <div className="flex justify-between text-outline">
              <span>// MODEL_CHECKPOINT</span>
              <span className="text-on-surface">GPT-4o / Claude 3.5 / Llama 3</span>
            </div>
            <div className="flex justify-between text-outline">
              <span>// PIPELINE_STATE</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                AUTONOMOUS_READY
              </span>
            </div>
          </div>

          {/* Ambient Corner Decors */}
          <div className="absolute bottom-2 right-3 font-mono text-[8px] text-outline/40">
            LOC_MEM: 16.4GB // CUDA_V12.4
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
