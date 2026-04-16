import { motion } from 'motion/react';
import { CERTIFICATES } from '../constants';
import { Award, ExternalLink } from 'lucide-react';

export function Certificates() {
  return (
    <section id="certificates" className="py-32 relative bg-background overflow-hidden transition-colors duration-700">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
          <div>
            <h2 className="text-[13px] font-black tracking-[0.4em] text-primary uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/50" />
              Credentials
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-[-0.03em]">
              Verified <span className="italic font-light text-neutral-400 font-sans">Expertise</span>
            </h3>
          </div>
          <p className="max-w-xs text-neutral-400 font-black uppercase tracking-widest text-[11px] leading-relaxed">
            Continuously evolving with industry-leading certifications and specialized training from top-tier providers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-[40px] border-white/5 hover:border-primary/30 transition-all duration-700 group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                < Award size={80} />
              </div>

              <div className="flex items-center justify-between mb-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:rotate-6 transition-all duration-500 border border-white/5 shadow-2xl">
                  <Award size={32} className="text-primary group-hover:text-black transition-colors" />
                </div>
                <span className="px-4 py-2 bg-white/5 rounded-full text-[10px] font-black tracking-widest uppercase text-primary border border-primary/20">
                  {cert.category}
                </span>
              </div>
              
              <h4 className="text-2xl font-black mb-6 leading-tight group-hover:text-primary transition-colors pr-8">
                {cert.title}
              </h4>

              <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase text-primary/50 mb-1">Issued by</p>
                  <p className="text-[15px] font-black text-neutral-300">{cert.issuer}</p>
                </div>
                {cert.link !== '#' && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="p-3.5 bg-white/5 rounded-2xl hover:bg-primary hover:text-black transition-all duration-500 shadow-xl" aria-label="Verify Certificate">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
