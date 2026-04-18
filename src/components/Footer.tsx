import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Instagram, PenTool, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden transition-colors duration-700 section-liquid">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container-liquid relative">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-sm font-bold tracking-[0.6em] text-primary uppercase mb-8">Get in Touch</h2>
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="text-[clamp(1.2rem,7vw,4rem)] md:text-5xl lg:text-6xl font-black tracking-tighter hover:text-primary transition-colors duration-500 underline decoration-primary/30 underline-offset-[12px] hover:underline-offset-[20px] break-all px-4 block w-full"
            >
              {CONTACT_INFO.email}
            </a>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center border-black/5 hover:bg-primary hover:text-black transition-all duration-500 group" title="GitHub">
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center border-black/5 hover:bg-primary hover:text-black transition-all duration-500 group" title="LinkedIn">
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center border-black/5 hover:bg-primary hover:text-black transition-all duration-500 group" title="Instagram">
              <Instagram size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href={CONTACT_INFO.hashnode} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center border-black/5 hover:bg-primary hover:text-black transition-all duration-500 group" title="Hashnode Blog">
              <PenTool size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center border-black/5 hover:bg-primary hover:text-black transition-all duration-500 group" title="Email Me">
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 py-16 border-t border-black/5 items-start">
          <div className="md:col-span-5">
             <a href="#" className="flex items-center gap-3 mb-8 group">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black font-black text-2xl shadow-lg transition-transform group-hover:rotate-12">
                  B
                </div>
                <span className="font-bold text-3xl tracking-tighter uppercase">BITTU<span className="text-primary">.</span></span>
              </a>
              <p className="text-neutral-500 text-base font-medium leading-relaxed max-w-sm">
                Engineering high-performance cloud infrastructure and intelligent AI systems.
              </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-black tracking-[0.4em] uppercase text-neutral-400 mb-8 border-l-2 border-primary/30 pl-4">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[12px] font-black tracking-widest uppercase text-neutral-500 hover:text-primary transition-all duration-300">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-black tracking-[0.4em] uppercase text-neutral-400 mb-8 border-l-2 border-primary/30 pl-4">Platform</h4>
            <ul className="space-y-4">
              {NAV_LINKS.slice(4).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[12px] font-black tracking-widest uppercase text-neutral-500 hover:text-primary transition-all duration-300">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 flex justify-end">
             <button 
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full glass-panel flex items-center justify-center border-black/5 hover:bg-primary hover:text-black transition-all duration-500 group shadow-lg"
            >
              <ArrowUp size={22} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-black/5">
          <p className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase">
            © {new Date().getFullYear()} BITTU KUMAR • ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-black tracking-[0.2em] text-neutral-400 hover:text-primary transition-colors uppercase">Privacy Policy</a>
            <a href="#" className="text-[10px] font-black tracking-[0.2em] text-neutral-400 hover:text-primary transition-colors uppercase">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
