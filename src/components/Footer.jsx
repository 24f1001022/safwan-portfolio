import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center py-10 text-on-surface-variant font-code-sm text-xs z-40 relative border-t border-white/10 mt-12 gap-6 md:gap-4">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-md bg-surface-container border border-primary-fixed/30 flex items-center justify-center text-primary-fixed font-bold text-[10px] font-mono">
          SH
        </div>
        <div>
          <span className="font-headline-lg text-primary text-xs font-bold tracking-wider">
            SAFWAN HUMAYUN
          </span>
          <span className="text-outline text-[10px] block font-mono">
            © 2026 // Chennai, India
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
        <span>DEPLOYMENTS & REPOSITORIES LIVE</span>
      </div>
      
      <nav className="flex items-center gap-6 font-mono text-[11px]">
        <a className="text-outline hover:text-primary-fixed transition-colors" href="#skills">Skills</a>
        <a className="text-outline hover:text-primary-fixed transition-colors" href="#projects">Projects</a>
        <a className="text-outline hover:text-primary-fixed transition-colors" href="#certificates">Credentials</a>
        <a className="text-outline hover:text-primary-fixed transition-colors" href="#contact">Contact</a>
      </nav>
    </footer>
  );
};

export default Footer;
