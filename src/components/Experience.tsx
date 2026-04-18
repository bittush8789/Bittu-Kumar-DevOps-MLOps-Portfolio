import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Server, Brain } from 'lucide-react';

const ROLE_ICONS: Record<string, any> = {
  'MLOps Engineer': Brain,
  'DevOps Engineer': Server,
};

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden transition-colors duration-700">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-[12px] font-black tracking-[0.4em] text-primary uppercase mb-8 flex items-center justify-center gap-6">
            <span className="w-12 h-px bg-primary/50" />
            Career
            <span className="w-12 h-px bg-primary/50" />
          </h2>
          <h3 className="text-4xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]">
            Work <span className="italic font-light text-neutral-500">History</span>
          </h3>
          <p className="text-neutral-500 font-medium mt-10 max-w-xl mx-auto text-xl leading-relaxed">
            A timeline of my professional journey in the world of <span className="text-foreground">high-scale engineering</span>.
          </p>
        </motion.div>

        {/* Side by Side Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {EXPERIENCE.map((exp, idx) => <ExperienceCard key={exp.role + exp.company} exp={exp} idx={idx} />)}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, idx }: { exp: any, idx: number }) {
  const [showAll, setShowAll] = useState(false);
  const Icon = ROLE_ICONS[exp.role] || Briefcase;
  const displayedAchievements = showAll ? exp.achievements : exp.achievements.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateY: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10 }}
      className="group h-full"
    >
      <div className="glass-panel h-full p-8 md:p-12 rounded-[40px] md:rounded-[56px] border-white/5 hover:border-primary/20 transition-all duration-700 relative overflow-hidden flex flex-col shadow-2xl">
        {/* Background watermark */}
        <div className="absolute -top-10 -right-10 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 group-hover:scale-125">
          <Icon size={240} />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-12 relative z-10">
          <div className="w-20 h-20 rounded-[24px] bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-primary group-hover:border-primary/30 transition-all duration-700 shadow-xl shrink-0 group-hover:rotate-[10deg]">
            <Icon size={36} className="text-primary group-hover:text-black transition-colors duration-700" />
          </div>
          <motion.span 
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-black/40 backdrop-blur-md rounded-full text-[9px] font-black tracking-widest uppercase border border-primary/20 text-primary shrink-0 shadow-lg"
          >
            {exp.period}
          </motion.span>
        </div>

        {/* Role & Company */}
        <h4 className="text-3xl md:text-4xl font-black mb-3 leading-tight group-hover:text-primary transition-colors duration-500 relative z-10">
          {exp.role}
        </h4>
        <p className="text-primary/70 font-black uppercase tracking-[0.3em] text-[12px] mb-8 relative z-10">
          {exp.company}
        </p>

        {/* Description */}
        <p className="text-neutral-400 mb-10 leading-relaxed italic text-lg border-l-2 border-primary/30 pl-6 relative z-10">
          {exp.description}
        </p>

        {/* Achievements */}
        <ul className="space-y-6 mb-12 relative z-10">
          {displayedAchievements.map((achievement: string, i: number) => (
            <motion.li 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex gap-4 group/item"
            >
              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 shadow-[0_0_10px_rgba(255,179,25,0.5)]" />
              <p className="text-base text-neutral-500 font-medium leading-relaxed group-hover/item:text-foreground transition-all duration-300">
                {achievement}
              </p>
            </motion.li>
          ))}
        </ul>

        {exp.achievements.length > 3 && (
          <motion.button 
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="mt-auto text-[11px] font-black tracking-[0.3em] uppercase text-primary hover:text-foreground transition-all duration-500 flex items-center gap-4 relative z-10 w-fit"
          >
            {showAll ? 'Show Less' : `View All ${exp.achievements.length} Achievements`}
            <div className="w-8 h-[2px] bg-primary/20 group-hover:bg-primary transition-all duration-500" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
