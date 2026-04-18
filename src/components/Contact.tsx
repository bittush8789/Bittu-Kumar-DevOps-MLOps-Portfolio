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

  // Check session storage on mount
  React.useEffect(() => {
    const sent = sessionStorage.getItem('message_sent');
    if (sent === 'true') {
      setIsSuccess(true);
    }
  }, []);

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
        sessionStorage.setItem('message_sent', 'true');
        setFormData({ name: '', email: '', message: '' });
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    staggerChildren: 0.1,
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
              className="space-y-12"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <h2 className="text-[12px] font-black tracking-[0.5em] text-primary uppercase mb-6 flex items-center gap-4">
                  <span className="w-10 h-px bg-primary/50" />
                  Contact
                </h2>
                <h3 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 leading-[0.85] italic">
                  Let's <span className="text-neutral-500 font-light not-italic">Scale</span><br />
                  <span className="not-italic text-foreground">Together.</span>
                </h3>
                <p className="text-neutral-500 text-2xl font-medium leading-relaxed max-w-md">
                  Have a complex engineering challenge? Let's build a solution that scales.
                </p>
              </motion.div>

              <div className="space-y-10">
                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-8 group cursor-default">
                  <div className="w-16 h-16 rounded-[24px] glass-panel flex items-center justify-center border-white/5 group-hover:bg-primary group-hover:border-primary/40 transition-all duration-700 shadow-xl ring-1 ring-white/10">
                    <Mail size={28} className="text-primary group-hover:text-black transition-all duration-700 group-hover:rotate-12" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-primary/70 tracking-[0.4em] uppercase mb-2">Email Me</p>
                    <p className="text-xl font-black tracking-tight group-hover:text-primary transition-colors duration-500">{CONTACT_INFO.email}</p>
                  </div>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-8 group cursor-default">
                  <div className="w-16 h-16 rounded-[24px] glass-panel flex items-center justify-center border-white/5 group-hover:bg-primary group-hover:border-primary/40 transition-all duration-700 shadow-xl ring-1 ring-white/10">
                    <MapPin size={28} className="text-primary group-hover:text-black transition-all duration-700 group-hover:rotate-12" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-primary/70 tracking-[0.4em] uppercase mb-2">Location</p>
                    <p className="text-xl font-black tracking-tight group-hover:text-primary transition-colors duration-500">{CONTACT_INFO.location}</p>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap items-center gap-5 pt-12 border-t border-white/5 max-w-sm">
                {[
                  { icon: Github, href: CONTACT_INFO.github, label: 'GitHub' },
                  { icon: Linkedin, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
                  { icon: Instagram, href: CONTACT_INFO.instagram, label: 'Instagram' },
                  { icon: PenTool, href: CONTACT_INFO.hashnode, label: 'Hashnode' }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-5 glass-panel rounded-2xl border-white/5 hover:bg-primary hover:text-black transition-all duration-500 shadow-2xl ring-1 ring-white/10" 
                    title={social.label}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative perspective-2000"
            >
              <div className="glass-panel p-10 md:p-16 rounded-[48px] md:rounded-[64px] border-white/5 relative overflow-hidden shadow-2xl group/form">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-bl-full opacity-0 group-hover/form:opacity-100 blur-[80px] transition-opacity duration-1000" />
                
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20 relative z-10"
                  >
                    <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mb-8 border border-emerald-500/30">
                      <Send className="text-emerald-500 w-10 h-10" />
                    </div>
                    <h4 className="text-3xl font-black mb-4">Message Sent Successfully!</h4>
                    <p className="text-neutral-500 font-medium mb-10 max-w-xs">
                      Thanks for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => {
                        setIsSuccess(false);
                        sessionStorage.removeItem('message_sent');
                      }}
                      className="text-[10px] font-black tracking-[0.3em] uppercase text-primary hover:text-foreground transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-5"
                  >
                    <label className="text-[11px] font-black tracking-[0.4em] uppercase text-neutral-500 ml-1 flex items-center gap-3">
                      <User size={14} className="text-primary" /> Full Name
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-8 py-6 outline-none focus:border-primary/40 transition-all duration-500 font-medium text-foreground placeholder:text-neutral-600 focus:bg-white/[0.05]"
                    />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-5"
                  >
                    <label className="text-[11px] font-black tracking-[0.4em] uppercase text-neutral-500 ml-1 flex items-center gap-3">
                      <Mail size={14} className="text-primary" /> Email Address
                    </label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-8 py-6 outline-none focus:border-primary/40 transition-all duration-500 font-medium text-foreground placeholder:text-neutral-600 focus:bg-white/[0.05]"
                    />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-5"
                  >
                    <label className="text-[11px] font-black tracking-[0.4em] uppercase text-neutral-500 ml-1 flex items-center gap-3">
                      <MessageSquare size={14} className="text-primary" /> Your Message
                    </label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="How can I help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/5 rounded-[32px] px-8 py-8 outline-none focus:border-primary/40 transition-all duration-500 font-medium text-foreground placeholder:text-neutral-600 focus:bg-white/[0.05] resize-none"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button 
                      type="submit"
                      disabled={isSubmitting || isSuccess}
                      className={`w-full h-20 ${isSuccess ? 'bg-emerald-500 text-white' : 'bg-primary text-black'} font-black tracking-[0.3em] uppercase rounded-full transition-all duration-700 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-4 shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed text-xs md:text-sm`}
                    >
                      {isSubmitting ? (
                        <>SENDING... <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" /></>
                      ) : isSuccess ? (
                        <>MESSAGE SENT! ✅</>
                      ) : (
                        <>SEND MESSAGE <Send className="w-5 h-5" /></>
                      )}
                    </Button>
                  </motion.div>
                </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
