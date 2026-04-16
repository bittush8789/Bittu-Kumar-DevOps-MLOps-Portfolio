import { motion } from 'motion/react';
import { CERTIFICATES } from '../constants';
import { Award, ExternalLink } from 'lucide-react';

export function Certificates() {
  return (
    <section id="certificates" className="py-32 relative bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
          <div>
            <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Credentials
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Verified <span className="italic font-light text-neutral-400">Expertise</span>
            </h3>
          </div>
          <p className="max-w-xs text-neutral-500 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
            Continuously evolving with industry-leading certifications and specialized training.
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
              className="glass-panel p-8 rounded-[32px] border-white/5 hover:border-primary/30 transition-all duration-700 group hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                  <Award size={28} className="text-primary group-hover:text-black transition-colors" />
                </div>
                <span className="px-4 py-1 bg-white/5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400">
                  {cert.category}
                </span>
              </div>
              
              <h4 className="text-xl font-bold mb-4 leading-snug group-hover:text-primary transition-colors">{cert.title}</h4>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase text-neutral-500">Issued by</p>
                  <p className="text-sm font-bold text-neutral-300">{cert.issuer}</p>
                </div>
                {cert.link !== '#' && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <ExternalLink size={16} className="text-primary" />
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
