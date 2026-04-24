import React from 'react';
import { Github, Linkedin, Mail, Instagram, PenTool, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export function Contact() {
  const SOCIAL_LINKS = [
    { icon: Mail, href: `mailto:${CONTACT_INFO.email}`, label: 'Email', value: CONTACT_INFO.email },
    { icon: Linkedin, href: CONTACT_INFO.linkedin, label: 'LinkedIn', value: 'Professional Profile' },
    { icon: Github, href: CONTACT_INFO.github, label: 'GitHub', value: 'Open Source' },
    { icon: Instagram, href: CONTACT_INFO.instagram, label: 'Instagram', value: 'Life & Shots' },
    { icon: PenTool, href: CONTACT_INFO.hashnode, label: 'Blog', value: 'Technical Articles' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden transition-all duration-500">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container-liquid relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[12px] font-black tracking-[0.4em] text-primary uppercase mb-8 flex items-center justify-center gap-6">
            <span className="w-12 h-px bg-primary/50" />
            Connect
            <span className="w-12 h-px bg-primary/50" />
          </h2>
          <h3 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-12">
            Get in <span className="italic font-light text-neutral-500">Touch</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-8 rounded-[32px] border-white/5 hover:border-primary/40 hover:bg-white/[0.03] transition-all duration-500 group relative overflow-hidden shadow-xl text-left"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-lg">
                    <link.icon size={28} />
                  </div>
                  <ExternalLink size={18} className="text-neutral-600 group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-xs font-black text-neutral-500 uppercase tracking-widest mb-1">{link.label}</h4>
                <p className="text-lg font-black tracking-tight group-hover:text-primary transition-colors truncate">{link.value}</p>
                
                {/* Visual accent */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
