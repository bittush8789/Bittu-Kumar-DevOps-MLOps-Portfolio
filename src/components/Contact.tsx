import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 relative bg-background overflow-hidden transition-colors duration-700">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel w-full max-w-2xl p-8 md:p-14 rounded-[40px] border-white/5 relative overflow-hidden"
        >
          {/* Top orange glow effect */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
          
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-4">
              <label className="text-[11px] font-black tracking-[0.3em] uppercase text-neutral-500 ml-1">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-neutral-900/50 border border-white/5 rounded-full px-8 py-5 outline-none focus:border-primary/50 transition-all duration-300 font-medium text-white placeholder:text-neutral-700"
              />
            </div>
            
            <div className="space-y-4">
              <label className="text-[11px] font-black tracking-[0.3em] uppercase text-neutral-500 ml-1">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-neutral-900/50 border border-white/5 rounded-full px-8 py-5 outline-none focus:border-primary/50 transition-all duration-300 font-medium text-white placeholder:text-neutral-700"
              />
            </div>
            
            <div className="space-y-4">
              <label className="text-[11px] font-black tracking-[0.3em] uppercase text-neutral-500 ml-1">Your Message</label>
              <textarea 
                required
                rows={4}
                placeholder="How can I help you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-neutral-900/50 border border-white/5 rounded-[32px] px-8 py-6 outline-none focus:border-primary/50 transition-all duration-300 font-medium text-white placeholder:text-neutral-700 resize-none"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full h-16 bg-primary hover:bg-primary/90 text-black font-black tracking-[0.2em] uppercase rounded-full transition-all duration-500 hover:scale-[1.01] flex items-center justify-center gap-3 active:scale-95 shadow-[0_20px_40px_-15px_rgba(255,179,25,0.3)]"
            >
              SEND MESSAGE
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
