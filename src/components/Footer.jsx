import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center py-8 text-on-surface-variant font-code-sm text-[12px] opacity-60 z-40 relative border-t border-white/5 mt-10">
      <div className="hidden md:block font-headline-lg text-primary tracking-widest uppercase text-sm mb-4 md:mb-0">
        NEURAL_ARCHITECT
      </div>
      
      <div className="mb-4 md:mb-0 tracking-widest">
        © 2026 NEURAL_ARCHITECT [ALL_RIGHTS_RESERVED]
      </div>
      
      <nav className="flex gap-6 tracking-widest">
        <a className="text-outline hover:text-primary transition-all" href="#">ENCRYPTION_PROTOCOL</a>
        <a className="text-outline hover:text-primary transition-all" href="#">DATA_PRIVACY</a>
        <a className="text-outline hover:text-primary transition-all" href="#">STATUS_PAGE</a>
      </nav>
    </footer>
  );
};

export default Footer;
