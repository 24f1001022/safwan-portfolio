import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Satellite } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleTransmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError('ERR: INCOMPLETE_DATA_PAYLOAD. ALL FIELDS REQUIRED.');
      return;
    }
    setError('');
    setStatus('sending');
    
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          service_id: "service_00evi8m",
          template_id: "template_349z5ll",
          user_id: "E8CCzeWBmbD5ONWxN",
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: "Neural Admin"
          }
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setError('ERR: TRANSMISSION_FAILED. API_REJECTED.');
        setStatus('idle');
      }
    } catch (err) {
      setError('ERR: TRANSMISSION_FAILED. NETWORK_INTERRUPTED.');
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="relative z-10 mb-28 pt-16">
      <div className="mb-12">
        <motion.span 
          className="font-code-sm text-[11px] text-primary-fixed-dim uppercase tracking-widest block mb-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          [ 06 // CONNECT & COLLABORATE ]
        </motion.span>
        <motion.h2 
          className="font-headline-lg text-[32px] md:text-[40px] text-primary font-bold"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Initiate Discussion
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Form */}
        <motion.div 
          className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-[#091114]/90 border border-white/10 backdrop-blur-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-error font-code-sm text-xs tracking-wider border border-error/40 bg-error/10 p-3.5 rounded-xl flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">warning</span>
                {error}
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary-fixed font-code-sm text-xs tracking-wider border border-primary-fixed/40 bg-primary-fixed/10 p-3.5 rounded-xl flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                MESSAGE TRANSMITTED SUCCESSFULLY. I WILL REPLY SHORTLY.
              </motion.div>
            )}

            <div className="space-y-2">
              <label className="font-code-sm text-[11px] tracking-wider text-outline block font-mono">
                NAME // IDENTIFIER
              </label>
              <input 
                className="w-full bg-[#050809] border border-white/10 focus:border-primary-fixed/50 rounded-xl px-4 py-3.5 text-on-surface font-code-sm text-xs transition-all placeholder:text-outline/30 focus:outline-none focus:ring-1 focus:ring-primary-fixed/30 disabled:opacity-50" 
                placeholder="Your name or company..." 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                disabled={status === 'sending'}
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-code-sm text-[11px] tracking-wider text-outline block font-mono">
                EMAIL // CONTACT ROUTE
              </label>
              <input 
                className="w-full bg-[#050809] border border-white/10 focus:border-primary-fixed/50 rounded-xl px-4 py-3.5 text-on-surface font-code-sm text-xs transition-all placeholder:text-outline/30 focus:outline-none focus:ring-1 focus:ring-primary-fixed/30 disabled:opacity-50" 
                placeholder="name@example.com" 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                disabled={status === 'sending'}
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-code-sm text-[11px] tracking-wider text-outline block font-mono">
                MESSAGE // PROJECT BRIEF
              </label>
              <textarea 
                className="w-full bg-[#050809] border border-white/10 focus:border-primary-fixed/50 rounded-xl px-4 py-3.5 text-on-surface font-code-sm text-xs transition-all placeholder:text-outline/30 focus:outline-none focus:ring-1 focus:ring-primary-fixed/30 resize-none disabled:opacity-50" 
                placeholder="Tell me about the engineering challenge, ML project, or role..." 
                rows="4" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={status === 'sending'}
              />
            </div>
            
            <motion.button 
              whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
              whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
              onClick={handleTransmit}
              disabled={status === 'sending'}
              className={`mt-6 flex items-center justify-center gap-3 w-full py-4 rounded-xl font-code-sm text-xs font-bold tracking-[0.15em] transition-all cursor-pointer ${
                status === 'sending' 
                  ? 'border border-outline/30 text-outline cursor-wait bg-white/[0.02]' 
                  : 'holo-btn text-primary shadow-[0_0_25px_rgba(0,242,255,0.25)]'
              }`} 
              type="button"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-fixed border-t-transparent rounded-full animate-spin"></div>
                  <span>TRANSMITTING DATA...</span>
                </>
              ) : (
                <>
                  <span>TRANSMIT MESSAGE</span>
                  <Send size={15} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Right Column: Direct Telemetry & Quick Contact Details */}
        <motion.div 
          className="lg:col-span-5 space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-2xl p-6 bg-[#091114]/90 border border-white/10 backdrop-blur-2xl space-y-4 font-mono text-xs">
            <div className="text-[10px] text-primary-fixed tracking-widest uppercase pb-2 border-b border-white/10 flex items-center justify-between">
              <span>// DISPATCH_TERMINAL</span>
              <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ONLINE
              </span>
            </div>

            <div className="space-y-3 pt-1">
              <div>
                <span className="text-outline text-[10px] block">// DIRECT INBOX</span>
                <a href="mailto:sahil.humayun95575@gmail.com" className="text-primary hover:text-primary-fixed transition-colors font-semibold">
                  sahil.humayun95575@gmail.com
                </a>
              </div>

              <div>
                <span className="text-outline text-[10px] block">// ACADEMIC ID (IIT MADRAS)</span>
                <span className="text-on-surface">
                  24f1001022@ds.study.iitm.ac.in
                </span>
              </div>

              <div>
                <span className="text-outline text-[10px] block">// GEOGRAPHIC BASE</span>
                <span className="text-on-surface">Chennai, India [IST // UTC+5:30]</span>
              </div>

              <div>
                <span className="text-outline text-[10px] block">// AVAILABILITY</span>
                <span className="text-primary-fixed font-semibold">Open to AI/ML Engineering & Agentic Roles</span>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-3">
            <a 
              href="https://github.com/24f1001022" 
              target="_blank" 
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#091114]/80 border border-white/10 hover:border-primary-fixed/40 transition-all font-mono text-xs text-on-surface hover:text-primary-fixed flex items-center justify-between"
            >
              <span>GitHub</span>
              <span className="text-outline text-[10px]">↗</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/safwan-humayun-82a08423a" 
              target="_blank" 
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#091114]/80 border border-white/10 hover:border-secondary-container/40 transition-all font-mono text-xs text-on-surface hover:text-secondary-container flex items-center justify-between"
            >
              <span>LinkedIn</span>
              <span className="text-outline text-[10px]">↗</span>
            </a>
            <a 
              href="https://www.kaggle.com/safwanhumayun" 
              target="_blank" 
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#091114]/80 border border-white/10 hover:border-[#20BEFF]/40 transition-all font-mono text-xs text-on-surface hover:text-[#20BEFF] flex items-center justify-between"
            >
              <span>Kaggle</span>
              <span className="text-outline text-[10px]">↗</span>
            </a>
            <a 
              href="https://www.instagram.com/safwan_humayun/" 
              target="_blank" 
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#091114]/80 border border-white/10 hover:border-tertiary-fixed-dim/40 transition-all font-mono text-xs text-on-surface hover:text-tertiary-fixed-dim flex items-center justify-between"
            >
              <span>Instagram</span>
              <span className="text-outline text-[10px]">↗</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
