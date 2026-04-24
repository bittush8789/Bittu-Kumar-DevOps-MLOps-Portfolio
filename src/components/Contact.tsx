import React, { useState, useEffect } from 'react';
import { Send, User, Mail, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isSuccess || isError) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, isError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      
      if (!accessKey) {
        throw new Error('Access key is missing. Please check your environment variables.');
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: 'Bittu Kumar Portfolio'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setIsError(true);
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-liquid relative overflow-hidden transition-all duration-500">
      {/* Toast Notifications */}
      {(isSuccess || isError) && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-6 animate-in fade-in slide-in-from-bottom-10 duration-500">
          <div className={`glass-panel p-6 rounded-[32px] border-white/10 shadow-2xl flex items-center gap-6 ${isSuccess ? 'bg-emerald-500/20' : 'bg-rose-500/20'}`}>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${isSuccess ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
              {isSuccess ? <CheckCircle2 size={28} /> : <AlertCircle size={28} />}
            </div>
            <div>
              <p className="font-black text-xs uppercase tracking-widest mb-1">{isSuccess ? 'Success' : 'Error'}</p>
              <p className="text-foreground/80 font-medium text-sm">
                {isSuccess ? 'Your message has been sent successfully!' : errorMessage}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Static Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-liquid relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header - Centered */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[12px] font-black tracking-[0.4em] text-primary uppercase mb-8 flex items-center justify-center gap-6">
              <span className="w-12 h-px bg-primary/50" />
              Contact
              <span className="w-12 h-px bg-primary/50" />
            </h2>
            <h3 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
              Get in <span className="italic font-light text-neutral-500">Touch</span>
            </h3>
            <p className="text-neutral-500 font-medium max-w-xl mx-auto text-xl leading-relaxed">
              Have a project in mind? Let's build something <span className="text-foreground">extraordinary</span> together.
            </p>
          </div>

          {/* Form - Centered */}
          <div className="relative z-10 max-w-2xl mx-auto">
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
                  className="w-full bg-transparent border-none px-0 py-4 outline-none transition-all duration-300 font-medium text-foreground placeholder:text-neutral-400 focus:placeholder:opacity-0"
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
                  className="w-full bg-transparent border-none px-0 py-4 outline-none transition-all duration-300 font-medium text-foreground placeholder:text-neutral-400 focus:placeholder:opacity-0"
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
                  className="w-full bg-transparent border-none px-0 py-4 outline-none transition-all duration-300 font-medium text-foreground placeholder:text-neutral-400 focus:placeholder:opacity-0 resize-none"
                />
              </div>
              
              <div className="pt-8">
                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full py-6 md:py-8 bg-primary text-black font-black rounded-full text-sm md:text-base tracking-[0.4em] uppercase hover:bg-white transition-all duration-300 shadow-2xl flex items-center justify-center gap-4 group/btn disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  <Send size={20} className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
