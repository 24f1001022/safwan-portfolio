import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait half a sec before hiding
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="absolute inset-0 bg-stars opacity-30 mix-blend-screen" />
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="w-32 h-32 rounded-full border border-primary-fixed/20 border-t-primary-fixed/80 border-r-primary-fixed/80"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute top-4 left-4 w-24 h-24 rounded-full border border-secondary-container/20 border-b-secondary-container/80 border-l-secondary-container/80"
        />
        
        <div className="mt-12 font-code-sm text-primary-fixed tracking-[0.3em] flex flex-col items-center gap-2">
          <span>SYS_LOAD_SEQUENCE</span>
          <div className="flex items-center gap-4 w-64 h-1 bg-surface-container-high rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary-fixed shadow-[0_0_10px_rgba(116,245,255,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-primary-fixed-dim mt-2">
            [ {Math.min(progress, 100).toString().padStart(3, '0')}% ]
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
