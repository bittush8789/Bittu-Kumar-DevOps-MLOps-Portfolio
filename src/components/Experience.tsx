import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';

export function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-6">Career</h2>
            <h3 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-8 leading-tight">
              Work <span className="not-italic text-neutral-400">History</span>
            </h3>
            <p className="text-neutral-500 font-medium">A timeline of my professional journey in the world of high-scale engineering.</p>
          </div>

          <div className="lg:w-2/3 space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-10 rounded-[32px] border-white/5 hover:border-primary/20 transition-all duration-500 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</h4>
                    <p className="text-neutral-400 font-bold uppercase tracking-widest text-xs mt-1">{exp.company}</p>
                  </div>
                  <span className="px-5 py-2 glass-panel rounded-full text-xs font-black tracking-widest uppercase border-white/10 text-primary">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-neutral-300 mb-8 leading-relaxed italic">{exp.description}</p>
                
                <ul className="grid md:grid-cols-2 gap-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-4 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 animate-pulse" />
                      <p className="text-sm text-neutral-400 font-medium leading-relaxed group-hover/item:text-neutral-200 transition-colors">
                        {achievement}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
