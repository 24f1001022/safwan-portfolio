import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#070b0c]">
      {/* Precision Engineering Cyber Grid */}
      <div 
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(116, 245, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(116, 245, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Secondary Micro-dot Matrix */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(rgba(116, 245, 255, 0.25) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Cursor Follow Ambient Spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(0, 242, 255, 0.4) 0%, rgba(2, 102, 255, 0.15) 50%, transparent 70%)',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      />

      {/* Floating Ambient Atmosphere Orbs */}
      <motion.div 
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[160px] bg-primary-container/10 pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[180px] bg-secondary-container/15 pointer-events-none"
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      {/* Subtle Vignette & Depth Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#070b0c_85%)] opacity-80" />
      
      {/* Top subtle horizon glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-fixed/30 to-transparent" />
    </div>
  );
};

export default Background;
