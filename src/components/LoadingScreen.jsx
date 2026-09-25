import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 8;
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070b0c]"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-primary-fixed/20 border-t-primary-fixed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute inset-3 rounded-full border border-secondary-container/20 border-b-secondary-container"
          />
          <span className="font-mono text-xs text-primary-fixed font-bold">
            SH
          </span>
        </div>
        
        <div className="mt-8 font-code-sm text-primary-fixed tracking-[0.2em] flex flex-col items-center gap-2">
          <span className="text-xs text-primary-fixed font-mono">INITIALIZING SYSTEM // SAFWAN HUMAYUN</span>
          <div className="flex items-center gap-4 w-60 h-1 bg-white/10 rounded-full overflow-hidden mt-1">
            <motion.div 
              className="h-full bg-primary-fixed shadow-[0_0_12px_rgba(0,242,255,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[11px] text-primary-fixed-dim/80 font-mono mt-1">
            [ {Math.min(progress, 100).toString().padStart(3, '0')}% ]
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
