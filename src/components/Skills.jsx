import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Network, Layers, Terminal, Sparkles, GitGraph, Code2, ArrowRight } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('agentic');

  const categories = [
    {
      id: 'agentic',
      label: 'Agentic AI & RAG',
      icon: GitGraph,
      skills: [
        { name: 'LangGraph', highlight: true, note: 'Multi-Agent Workflows & Cyclic Graphs' },
        { name: 'LangChain', highlight: true, note: 'RAG Pipelines & Tools' },
        { name: 'Multi-Source RAG', highlight: true, note: 'Hybrid Vector + Dense Retrieval' },
        { name: 'Vector Embeddings', note: 'FAISS & Semantic Search' },
        { name: 'Prompt Engineering', note: 'Structured Few-shot & COT' },
        { name: 'Tool Calling / MCP', note: 'Autonomous API Execution' },
      ]
    },
    {
      id: 'ml',
      label: 'ML & Deep Learning',
      icon: Network,
      skills: [
        { name: 'PyTorch', highlight: true, note: 'Neural Net Training & Inference' },
        { name: 'Audio Spectrogram Transformers', highlight: true, note: 'AST Audio Modeling' },
        { name: 'CNN & CRNN', note: 'Spatial & Temporal Feature Extraction' },
        { name: 'Scikit-Learn', note: 'Supervised & Unsupervised Modeling' },
        { name: 'XGBoost & LightGBM', note: 'Gradient Boosted Decision Trees' },
        { name: 'Librosa', note: 'Acoustic Signal Processing' },
        { name: 'Pandas & NumPy', note: 'High-Throughput Vectorized Compute' },
      ]
    },
    {
      id: 'systems',
      label: 'Backend & Systems',
      icon: Terminal,
      skills: [
        { name: 'Python (Primary)', highlight: true, note: 'Core Language of Choice' },
        { name: 'Flask', note: 'Lightweight REST APIs & Microservices' },
        { name: 'Celery & Redis', highlight: true, note: 'Asynchronous Task Queues & Caching' },
        { name: 'SQL & SQLAlchemy', note: 'Relational Modeling & Migrations' },
        { name: 'Node.js & Express', note: 'Event-driven Services' },
        { name: 'Socket.IO', note: 'Real-time Bidirectional WebSockets' },
        { name: 'Firebase', note: 'Realtime Document DB & Auth' },
      ]
    },
    {
      id: 'frontend',
      label: 'Frontend & UI',
      icon: Code2,
      skills: [
        { name: 'React.js', highlight: true, note: 'Component Architecture & Hooks' },
        { name: 'JavaScript (ES6+)', note: 'Modern Async Client Logic' },
        { name: 'Tailwind CSS', note: 'Utility-first Responsive Systems' },
        { name: 'Framer Motion', note: 'GPU-accelerated Micro-interactions' },
        { name: 'Chart.js', note: 'Data Telemetry & Visual Analytics' },
        { name: 'HTML5 & CSS3', note: 'Semantic Responsive Layouts' },
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 z-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <motion.span 
            className="font-code-sm text-[11px] text-primary-fixed-dim uppercase tracking-widest block mb-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            [ 02 // TECHNICAL MATRIX & ACTIVE RESEARCH ]
          </motion.span>
          <motion.h2 
            className="font-headline-lg text-[32px] md:text-[40px] text-primary font-bold"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Engineering Stack & Research
          </motion.h2>
        </div>
        <div className="font-code-sm text-xs text-outline font-mono">
          PRIMARY ENGINE: <span className="text-primary-fixed">PYTHON 3.11+ / PYTORCH / LANGGRAPH</span>
        </div>
      </div>

      {/* FEATURED: Currently Learning & Active Research (Prominent & Futuristic) */}
      <motion.div 
        className="mb-16 p-6 sm:p-8 rounded-3xl bg-[#091114]/90 border border-primary-fixed/30 backdrop-blur-2xl relative overflow-hidden shadow-[0_0_40px_rgba(0,242,255,0.12)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
          
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed/10 border border-primary-fixed/30 font-code-sm text-[10px] text-primary-fixed font-bold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-ping" />
              CURRENT RESEARCH & ACTIVE LEARNING
            </div>
            <h3 className="font-headline-lg text-2xl sm:text-3xl text-primary font-bold mb-3">
              LangGraph & Agentic Multi-Agent Frameworks
            </h3>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-4">
              Focusing on stateful, multi-actor applications with LLMs. Orchestrating cyclic graph execution, human-in-the-loop validation, and persistent agent state machines alongside LangChain tool integrations.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="px-3.5 py-1.5 rounded-xl bg-primary-fixed/15 border border-primary-fixed/50 font-mono text-xs text-primary-fixed font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(0,242,255,0.25)]">
                <GitGraph size={14} />
                <span>LangGraph (StateGraph & Multi-Agent)</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface flex items-center gap-2">
                <Layers size={14} className="text-secondary-container" />
                <span>LangChain (Chains & Retrieval)</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-outline flex items-center gap-2">
                <Terminal size={14} />
                <span>Tool Orchestration & MCP</span>
              </div>
            </div>
          </div>

          {/* Interactive Agentic Architecture Mini-Diagram */}
          <div className="w-full lg:w-auto p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-3 shrink-0">
            <div className="text-[10px] text-primary-fixed-dim/80 tracking-widest uppercase pb-2 border-b border-white/10 flex items-center justify-between">
              <span>// AGENTIC_EXECUTION_GRAPH</span>
              <span className="text-emerald-400">STATUS: RUNNING</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-on-surface text-[11px]">User Query</span>
              <span className="text-primary-fixed">→</span>
              <span className="px-2 py-1 rounded bg-primary-fixed/20 border border-primary-fixed text-primary-fixed font-bold text-[11px]">Planner Agent</span>
              <span className="text-primary-fixed">→</span>
              <span className="px-2 py-1 rounded bg-secondary-container/20 border border-secondary-container text-secondary text-[11px]">Tool Node</span>
            </div>

            <div className="flex items-center justify-between text-[10px] text-outline pt-1">
              <span>Cycles: Infinite/Controlled</span>
              <span className="text-primary-fixed font-semibold">Graph: Cyclic State</span>
            </div>
          </div>

        </div>

        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-fixed/50 to-transparent" />
      </motion.div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2.5 rounded-xl font-code-sm text-xs font-semibold tracking-wider flex items-center gap-2.5 transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-primary-fixed/15 border border-primary-fixed text-primary-fixed shadow-[0_0_15px_rgba(0,242,255,0.2)]'
                  : 'bg-white/[0.02] border border-white/10 text-on-surface-variant hover:text-primary hover:bg-white/[0.05]'
              }`}
            >
              <Icon size={14} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Skills Grid */}
      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {categories.find(c => c.id === activeTab)?.skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
              skill.highlight
                ? 'bg-[#091013]/90 border-primary-fixed/30 hover:border-primary-fixed hover:shadow-[0_0_20px_rgba(0,242,255,0.15)]'
                : 'bg-[#080d0f]/60 border-white/10 hover:border-white/20 hover:bg-[#0a1215]'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className={`font-mono text-sm font-bold tracking-wide ${skill.highlight ? 'text-primary' : 'text-on-surface'}`}>
                {skill.name}
              </h4>
              {skill.highlight && (
                <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-primary-fixed/10 border border-primary-fixed/30 text-primary-fixed">
                  CORE
                </span>
              )}
            </div>
            <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
              {skill.note}
            </p>
          </div>
        ))}
      </motion.div>

    </section>
  );
};

export default Skills;
