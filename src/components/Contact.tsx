import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Linkedin, Github, User, MessageSquare, Instagram, PenTool } from 'lucide-react';
import { Button } from './ui/button';
import { CONTACT_INFO } from '../constants';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare data for Web3Forms
    const submissionData = {
      ...formData,
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, // Loaded from .env file
      subject: `New Portfolio Message from ${formData.name}`,
      from_name: "Bittu Portfolio"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Submission Error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden transition-colors duration-700">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Side: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-sm font-bold tracking-[0.5em] text-primary uppercase mb-6 flex items-center gap-4">
                  <span className="w-10 h-px bg-primary" />
                  Contact
                </h2>
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-none">
                  Let's <span className="text-primary italic font-light">Scale</span><br />Together.
                </h3>
                <p className="text-neutral-500 text-xl font-medium leading-relaxed max-w-md">
                  Have a complex engineering challenge? Let's build a solution that scales.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center border-black/5 group-hover:bg-primary group-hover:border-primary/50 transition-all duration-500">
                    <Mail size={24} className="text-primary group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-primary/70 tracking-widest uppercase mb-1">Email Me</p>
                    <p className="text-lg font-bold">{CONTACT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center border-black/5 group-hover:bg-primary group-hover:border-primary/50 transition-all duration-500">
                    <MapPin size={24} className="text-primary group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-primary/70 tracking-widest uppercase mb-1">Location</p>
                    <p className="text-lg font-bold">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-black/5 max-w-sm">
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="p-4 glass-panel rounded-2xl border-black/5 hover:bg-primary hover:text-black transition-all duration-500" title="GitHub">
                  <Github size={20} />
                </a>
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 glass-panel rounded-2xl border-black/5 hover:bg-primary hover:text-black transition-all duration-500" title="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="p-4 glass-panel rounded-2xl border-black/5 hover:bg-primary hover:text-black transition-all duration-500" title="Instagram">
                  <Instagram size={20} />
                </a>
                <a href={CONTACT_INFO.hashnode} target="_blank" rel="noopener noreferrer" className="p-4 glass-panel rounded-2xl border-black/5 hover:bg-primary hover:text-black transition-all duration-500" title="Hashnode Blog">
                  <PenTool size={20} />
                </a>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass-panel p-10 md:p-14 rounded-[48px] border-black/5 relative overflow-hidden shadow-2xl">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
                
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-4">
                    <label className="text-[11px] font-black tracking-[0.3em] uppercase text-neutral-500 ml-1 flex items-center gap-2">
                      <User size={12} className="text-primary" /> Full Name
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/5 border border-black/5 rounded-2xl px-8 py-5 outline-none focus:border-primary/50 transition-all duration-300 font-medium text-foreground placeholder:text-neutral-400"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-[11px] font-black tracking-[0.3em] uppercase text-neutral-500 ml-1 flex items-center gap-2">
                      <Mail size={12} className="text-primary" /> Email Address
                    </label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/5 border border-black/5 rounded-2xl px-8 py-5 outline-none focus:border-primary/50 transition-all duration-300 font-medium text-foreground placeholder:text-neutral-400"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-[11px] font-black tracking-[0.3em] uppercase text-neutral-500 ml-1 flex items-center gap-2">
                      <MessageSquare size={12} className="text-primary" /> Your Message
                    </label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="How can I help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black/5 border border-black/5 rounded-[32px] px-8 py-6 outline-none focus:border-primary/50 transition-all duration-300 font-medium text-foreground placeholder:text-neutral-400 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`w-full h-16 ${isSuccess ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-primary hover:bg-black'} text-black font-black tracking-[0.2em] uppercase rounded-full transition-all duration-500 hover:scale-[1.02] flex items-center justify-center gap-3 active:scale-95 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <>SENDING... <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" /></>
                    ) : isSuccess ? (
                      <>MESSAGE SENT! ✅</>
                    ) : (
                      <>SEND MESSAGE <Send className="w-4 h-4" /></>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
