import React from 'react';
import { CERTIFICATES } from '../constants';
import { Award, ExternalLink } from 'lucide-react';

export function Certificates() {
  return (
    <section id="certificates" className="py-20 md:py-32 relative overflow-hidden transition-all duration-500">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      {/* Section Background Text */}
      <div className="absolute inset-0 pointer-events-none select-none -z-20 flex flex-col justify-center gap-40 opacity-[0.04] font-black leading-none uppercase overflow-hidden">
        <div className="text-[15vw] tracking-tighter -ml-10">Certified</div>
        <div className="text-[15vw] tracking-tighter ml-auto -mr-10">Expert</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
          <div>
            <h2 className="text-[12px] font-black tracking-[0.4em] text-primary uppercase mb-6 flex items-center gap-4">
              <span className="w-10 h-px bg-primary/50" />
              Credentials
            </h2>
            <h3 className="text-4xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]">
              Verified <span className="italic font-light text-neutral-500">Expertise</span>
            </h3>
          </div>
          <p 
            className="max-w-xs text-neutral-500 font-black uppercase tracking-[0.2em] text-[11px] leading-relaxed opacity-80"
          >
            Continuously evolving with industry-leading certifications and specialized training from top-tier providers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CERTIFICATES.map((cert, idx) => (
            <div
              key={cert.title}
              className="glass-panel p-10 rounded-[56px] border-white/5 hover:border-primary/40 hover:bg-white/[0.03] transition-all duration-500 group relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:opacity-[0.1] transition-all duration-500">
                < Award size={120} />
              </div>

              <div className="flex items-center justify-between mb-12">
                <div className="w-20 h-20 rounded-[24px] bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all duration-500 border border-white/5 shadow-xl">
                  <Award size={36} className="text-primary group-hover:text-black transition-colors duration-500" />
                </div>
                <span 
                  className="px-5 py-2.5 bg-black/40 backdrop-blur-md rounded-full text-[9px] font-black tracking-widest uppercase text-primary border border-primary/20 shadow-lg"
                >
                  {cert.category}
                </span>
              </div>
              
              <h4 className="text-3xl font-black mb-10 leading-tight group-hover:text-primary transition-colors duration-500 pr-4">
                {cert.title}
              </h4>

              <div className="flex items-center justify-between mt-auto pt-10 border-t border-white/5">
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase text-neutral-500 mb-2">Issued by</p>
                  <p className="text-[17px] font-black text-foreground">{cert.issuer}</p>
                </div>
                {cert.link !== '#' && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 bg-white/5 rounded-2xl hover:bg-primary hover:text-black transition-all duration-300 shadow-2xl ring-1 ring-white/10" 
                    aria-label="Verify Certificate"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
