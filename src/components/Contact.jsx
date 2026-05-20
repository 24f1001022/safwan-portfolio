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
    <section id="contact" className="relative z-10 mb-32 pt-20">
      <div className="mb-12">
        <motion.span 
          className="font-code-sm text-[12px] text-primary-fixed-dim uppercase tracking-widest"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          [ INITIATE_HANDSHAKE ]
        </motion.span>
        <motion.h2 
          className="font-headline-lg text-[32px] md:text-[40px] text-primary mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          COMMUNICATION_TERMINAL
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div 
          className="hud-panel rounded-xl p-8 border border-white/5 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative Corner Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-fixed/30 rounded-tl-lg" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-fixed/30 rounded-br-lg" />
          
          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-error font-code-sm text-[12px] tracking-widest border border-error/50 bg-error/10 p-3 rounded flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">warning</span>
                {error}
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary-fixed font-code-sm text-[12px] tracking-widest border border-primary-fixed/50 bg-primary-fixed/10 p-3 rounded flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                DATA_TRANSMISSION_SUCCESSFUL. AWAIT_REPLY.
              </motion.div>
            )}

            <div className="space-y-2 group">
              <label className="font-code-sm text-[10px] tracking-widest text-outline block group-focus-within:text-primary-fixed transition-colors">TARGET_IDENTIFIER [NAME]</label>
              <input 
                className="w-full bg-surface-container-low/50 border-b border-white/10 px-4 py-3 text-on-surface font-code-sm scanline-input transition-all placeholder:text-outline/30 focus:bg-surface-container/50 disabled:opacity-50" 
                placeholder="Enter identification..." 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                disabled={status === 'sending'}
              />
            </div>
            
            <div className="space-y-2 group">
              <label className="font-code-sm text-[10px] tracking-widest text-outline block group-focus-within:text-primary-fixed transition-colors">ROUTING_ADDRESS [EMAIL]</label>
              <input 
                className="w-full bg-surface-container-low/50 border-b border-white/10 px-4 py-3 text-on-surface font-code-sm scanline-input transition-all placeholder:text-outline/30 focus:bg-surface-container/50 disabled:opacity-50" 
                placeholder="Enter routing coordinate..." 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                disabled={status === 'sending'}
              />
            </div>
            
            <div className="space-y-2 group">
              <label className="font-code-sm text-[10px] tracking-widest text-outline block group-focus-within:text-primary-fixed transition-colors">PAYLOAD [MESSAGE]</label>
              <textarea 
                className="w-full bg-surface-container-low/50 border-b border-white/10 px-4 py-3 text-on-surface font-code-sm scanline-input transition-all placeholder:text-outline/30 focus:bg-surface-container/50 resize-none disabled:opacity-50" 
                placeholder="Encrypt message payload..." 
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
              className={`mt-8 flex items-center justify-center gap-3 w-full px-8 py-4 bg-transparent border rounded transition-all group relative overflow-hidden ${
                status === 'sending' 
                  ? 'border-outline/50 text-outline cursor-wait' 
                  : 'border-primary-fixed/50 hover:bg-primary-container/10 hover:border-primary-fixed hover:shadow-[0_0_20px_rgba(0,219,231,0.3)] text-primary-fixed'
              }`} 
              type="button"
            >
              {status === 'idle' && <div className="absolute inset-0 w-full h-[1px] bg-primary-container/30 -translate-y-full group-hover:translate-y-[400px] transition-transform duration-1000 ease-linear"></div>}
              <span className="font-code-sm text-label-caps tracking-widest z-10 text-[12px] font-bold">
                {status === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT_DATA'}
              </span>
              {status === 'sending' ? (
                <div className="w-4 h-4 border-2 border-outline border-t-transparent rounded-full animate-spin z-10"></div>
              ) : (
                <Send size={18} className="z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              )}
            </motion.button>
          </form>
        </motion.div>

        <motion.div 
          className="hidden lg:flex items-center justify-center h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-64 h-64 flex items-center justify-center group">
            {/* Abstract decorative rings for the terminal */}
            <motion.div 
              className="absolute inset-0 rounded-full border border-primary-fixed/20 shadow-[0_0_30px_rgba(116,245,255,0.1)_inset]"
              animate={{ rotateZ: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-4 rounded-full border border-secondary-container/30"
              animate={{ rotateZ: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-8 rounded-full border border-tertiary-fixed-dim/20 border-dashed"
              animate={{ rotateZ: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            />
            
            <div className="text-center">
              <Satellite size={48} className="text-primary-fixed-dim opacity-50 group-hover:text-primary-fixed group-hover:opacity-100 transition-all group-hover:scale-110 duration-500 mx-auto drop-shadow-[0_0_15px_rgba(116,245,255,0.5)]" />
              <motion.div 
                className="font-code-sm text-[10px] tracking-widest text-outline mt-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                AWAITING_CONNECTION
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
