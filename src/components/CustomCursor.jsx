import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw cursor position values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for trailing outer ring
  const springConfig = { stiffness: 220, damping: 24, mass: 0.8 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on mobile/touch screens
    const touchQuery = window.matchMedia('(pointer: coarse)');
    if (touchQuery.matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Track active hover over links, buttons, or interactive cyber panels
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    // Hide native cursor for extremely premium immersive feel
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* 1. Core Target Point (1:1 Tracking) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary-fixed rounded-full pointer-events-none z-[9999] mix-blend-screen -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />

      {/* 2. Cybernetic Brackets / Target Ring (Spring Lag Trailing) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary-fixed/30 pointer-events-none z-[9998] mix-blend-screen flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? 'rgba(0, 242, 255, 0.8)' : 'rgba(116, 245, 255, 0.3)',
          boxShadow: isHovered 
            ? '0 0 15px rgba(0, 242, 255, 0.5), inset 0 0 10px rgba(0, 242, 255, 0.3)' 
            : '0 0 0px rgba(0, 242, 255, 0)',
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Holographic Crosshair corner bracket indicators */}
        <span 
          className="absolute w-1 h-1 border-t border-l border-primary-fixed transition-all duration-300 pointer-events-none" 
          style={{
            top: isHovered ? '-2px' : '2px',
            left: isHovered ? '-2px' : '2px',
            borderColor: isHovered ? '#00f2ff' : 'rgba(116, 245, 255, 0.5)'
          }}
        />
        <span 
          className="absolute w-1 h-1 border-t border-r border-primary-fixed transition-all duration-300 pointer-events-none" 
          style={{
            top: isHovered ? '-2px' : '2px',
            right: isHovered ? '-2px' : '2px',
            borderColor: isHovered ? '#00f2ff' : 'rgba(116, 245, 255, 0.5)'
          }}
        />
        <span 
          className="absolute w-1 h-1 border-b border-l border-primary-fixed transition-all duration-300 pointer-events-none" 
          style={{
            bottom: isHovered ? '-2px' : '2px',
            left: isHovered ? '-2px' : '2px',
            borderColor: isHovered ? '#00f2ff' : 'rgba(116, 245, 255, 0.5)'
          }}
        />
        <span 
          className="absolute w-1 h-1 border-b border-r border-primary-fixed transition-all duration-300 pointer-events-none" 
          style={{
            bottom: isHovered ? '-2px' : '2px',
            right: isHovered ? '-2px' : '2px',
            borderColor: isHovered ? '#00f2ff' : 'rgba(116, 245, 255, 0.5)'
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
