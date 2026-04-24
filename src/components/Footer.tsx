import React from 'react';
import { Github, Linkedin, Mail, Instagram, PenTool, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 md:pt-24 pb-12 overflow-hidden transition-all duration-500 section-liquid">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container-liquid relative">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="mb-10 md:mb-12">
            <h2 className="text-[10px] md:text-sm font-bold tracking-[0.6em] text-primary uppercase mb-6 md:mb-8">Get in Touch</h2>
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="text-xl md:text-3xl lg:text-4xl font-black tracking-tighter hover:text-primary transition-all duration-500 underline decoration-primary/30 underline-offset-[8px] md:underline-offset-[12px] hover:underline-offset-[16px] md:hover:underline-offset-[20px] break-all px-4 block w-full"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass-panel flex items-center justify-center border-black/5 hover:bg-primary hover:text-black transition-none group" title="GitHub">
              <Github size={18} className="transition-none md:w-5 md:h-5" />
            </a>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass-panel flex items-center justify-center border-black/5 hover:bg-primary hover:text-black transition-none group" title="LinkedIn">
              <Linkedin size={18} className="transition-none md:w-5 md:h-5" />
            </a>
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass-panel flex items-center justify-center border-black/5 hover:bg-primary hover:text-black transition-none group" title="Instagram">
              <Instagram size={18} className="transition-none md:w-5 md:h-5" />
            </a>
            <a href={CONTACT_INFO.hashnode} target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass-panel flex items-center justify-center border-black/5 hover:bg-primary hover:text-black transition-none group" title="Hashnode Blog">
              <PenTool size={18} className="transition-none md:w-5 md:h-5" />
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass-panel flex items-center justify-center border-black/5 hover:bg-primary hover:text-black transition-none group" title="Email Me">
              <Mail size={18} className="transition-none md:w-5 md:h-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 py-12 md:py-16 border-t border-black/5 items-start">
          <div className="md:col-span-5">
             <a href="#" className="flex items-center gap-3 mb-6 md:mb-8 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center text-black font-black text-xl md:text-2xl shadow-lg transition-none">
                  B
                </div>
                <span className="font-bold text-2xl md:text-3xl tracking-tighter uppercase">BITTU<span className="text-primary">.</span></span>
              </a>
              <p className="text-neutral-500 text-sm md:text-base font-medium leading-relaxed max-w-sm">
                Engineering high-performance cloud infrastructure and intelligent AI systems.
              </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase text-neutral-400 mb-6 md:mb-8 border-l-2 border-primary/30 pl-4">Navigation</h4>
            <ul className="space-y-3 md:space-y-4">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[10px] md:text-[12px] font-black tracking-widest uppercase text-neutral-500 hover:text-primary transition-none">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase text-neutral-400 mb-6 md:mb-8 border-l-2 border-primary/30 pl-4">Platform</h4>
            <ul className="space-y-3 md:space-y-4">
              {NAV_LINKS.slice(4).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[10px] md:text-[12px] font-black tracking-widest uppercase text-neutral-500 hover:text-primary transition-none">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 flex justify-center md:justify-end mt-8 md:mt-0">
             <button 
              onClick={scrollToTop}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full glass-panel flex items-center justify-center border-black/5 hover:bg-primary hover:text-black transition-none group shadow-lg"
            >
              <ArrowUp size={20} className="transition-none md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        <div className="pt-10 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-black/5 text-center md:text-left">
          <p className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase">
            © {new Date().getFullYear()} BITTU KUMAR • ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="text-[9px] md:text-[10px] font-black tracking-[0.2em] text-neutral-400 hover:text-primary transition-none uppercase">Privacy Policy</a>
            <a href="#" className="text-[9px] md:text-[10px] font-black tracking-[0.2em] text-neutral-400 hover:text-primary transition-none uppercase">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
