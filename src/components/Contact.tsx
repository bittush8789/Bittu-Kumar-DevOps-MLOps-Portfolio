import React, { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, User, MessageSquare, Instagram, PenTool, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { CONTACT_INFO } from '../constants';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      ...formData,
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
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
        setShowToast(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Hide toast and reset success button state after 5 seconds
        setTimeout(() => {
          setShowToast(false);
          setIsSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Submission Error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-liquid relative transition-none overflow-hidden">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-32 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm">
          <div className="glass-panel p-6 rounded-[32px] border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(16,185,129,0.2)] flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="text-black" size={24} />
            </div>
            <div>
              <p className="text-white font-black tracking-tight text-lg">Message Sent!</p>
              <p className="text-neutral-400 text-xs font-medium">I'll get back to you soon.</p>
            </div>
          </div>
        </div>
      )}

      {/* Static Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-liquid relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left Side: Info */}
            <div className="space-y-10 md:space-y-12">
              <div>
                <h2 className="text-[12px] font-black tracking-[0.5em] text-primary uppercase mb-6 flex items-center gap-4">
                  <span className="w-10 h-px bg-primary/50" />
                  Contact
                </h2>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 leading-[0.85] italic">
                  Let's <span className="text-neutral-500 font-light not-italic">Scale</span><br />
                  <span className="not-italic text-foreground">Together.</span>
                </h3>
                <p className="text-neutral-500 text-lg md:text-2xl font-medium leading-relaxed max-w-md">
                  Have a complex engineering challenge? Let's build a solution that scales.
                </p>
              </div>

              <div className="space-y-6 md:space-y-10">
                <div className="flex items-center gap-6 md:gap-8 group cursor-default">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-[20px] md:rounded-[24px] glass-panel flex items-center justify-center border-white/5 group-hover:bg-primary group-hover:border-primary/40 transition-none shadow-xl ring-1 ring-white/10">
                    <Mail size={22} className="text-primary group-hover:text-black transition-none" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-[11px] font-black text-primary/70 tracking-[0.4em] uppercase mb-1 md:mb-2">Email Me</p>
                    <p className="text-lg md:text-xl font-black tracking-tight group-hover:text-primary transition-none">{CONTACT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 md:gap-8 group cursor-default">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-[20px] md:rounded-[24px] glass-panel flex items-center justify-center border-white/5 group-hover:bg-primary group-hover:border-primary/40 transition-none shadow-xl ring-1 ring-white/10">
                    <MapPin size={22} className="text-primary group-hover:text-black transition-none" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-[11px] font-black text-primary/70 tracking-[0.4em] uppercase mb-1 md:mb-2">Location</p>
                    <p className="text-lg md:text-xl font-black tracking-tight group-hover:text-primary transition-none">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 md:gap-5 pt-10 md:pt-12 border-t border-white/5 max-w-sm">
                {[
                  { icon: Github, href: CONTACT_INFO.github, label: 'GitHub' },
                  { icon: Linkedin, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
                  { icon: Instagram, href: CONTACT_INFO.instagram, label: 'Instagram' },
                  { icon: PenTool, href: CONTACT_INFO.hashnode, label: 'Hashnode' }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 md:p-5 glass-panel rounded-2xl border-white/5 hover:bg-primary hover:text-black transition-none shadow-2xl ring-1 ring-white/10" 
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="relative mt-12 lg:mt-0">
              <div className="glass-panel p-6 md:p-12 rounded-[40px] md:rounded-[64px] border-white/5 relative overflow-hidden shadow-2xl group/form">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-bl-full opacity-0 group-hover/form:opacity-100 blur-[80px] transition-none" />
                
                <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12 relative z-10">
                  <div className="space-y-4 md:space-y-5">
                    <label className="text-[11px] font-black tracking-[0.4em] uppercase text-neutral-500 ml-1 flex items-center gap-3">
                      <User size={14} className="text-primary" /> Full Name
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 md:px-8 py-5 md:py-6 outline-none focus:border-primary/40 transition-none font-medium text-foreground placeholder:text-neutral-600 focus:bg-white/[0.05]"
                    />
                  </div>
                  
                  <div className="space-y-4 md:space-y-5">
                    <label className="text-[11px] font-black tracking-[0.4em] uppercase text-neutral-500 ml-1 flex items-center gap-3">
                      <Mail size={14} className="text-primary" /> Email Address
                    </label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 md:px-8 py-5 md:py-6 outline-none focus:border-primary/40 transition-none font-medium text-foreground placeholder:text-neutral-600 focus:bg-white/[0.05]"
                    />
                  </div>
                  
                  <div className="space-y-4 md:space-y-5">
                    <label className="text-[11px] font-black tracking-[0.4em] uppercase text-neutral-500 ml-1 flex items-center gap-3">
                      <MessageSquare size={14} className="text-primary" /> Your Message
                    </label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="How can I help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/5 rounded-[24px] md:rounded-[32px] px-6 md:px-8 py-6 md:py-8 outline-none focus:border-primary/40 transition-none font-medium text-foreground placeholder:text-neutral-600 focus:bg-white/[0.05] resize-none"
                    />
                  </div>
                  
                  <div>
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full h-16 md:h-20 ${isSuccess ? 'bg-emerald-500 text-white' : 'bg-primary text-black'} font-black tracking-[0.3em] uppercase rounded-full transition-none flex items-center justify-center gap-4 shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed text-xs md:text-sm`}
                    >
                      {isSubmitting ? (
                        <>SENDING... <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" /></>
                      ) : isSuccess ? (
                        <>MESSAGE SENT! ✅</>
                      ) : (
                        <>SEND MESSAGE <Send className="w-5 h-5" /></>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
