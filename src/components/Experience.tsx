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
    <section id="experience" className="py-32 relative overflow-hidden transition-colors duration-700">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-[13px] font-black tracking-[0.4em] text-primary uppercase mb-6 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-primary/50" />
            Career
            <span className="w-8 h-px bg-primary/50" />
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em]">
            Work <span className="italic font-light text-neutral-500 font-sans">History</span>
          </h3>
          <p className="text-neutral-500 font-medium mt-6 max-w-lg mx-auto text-lg">
            A timeline of my professional journey in the world of high-scale engineering.
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: idx * 0.2 }}
      className="group h-full"
    >
      <div className="glass-panel h-full p-10 rounded-[40px] border-black/5 hover:border-primary/20 transition-all duration-700 hover:-translate-y-2 relative overflow-hidden flex flex-col">
        {/* Background watermark */}
        <div className="absolute -top-6 -right-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700">
          <Icon size={160} />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-black/5 border border-black/5 flex items-center justify-center group-hover:bg-primary group-hover:border-primary/30 transition-all duration-500 shadow-2xl shrink-0">
            <Icon size={28} className="text-primary group-hover:text-black transition-colors duration-500" />
          </div>
          <span className="px-4 py-2 glass-panel rounded-full text-[10px] font-black tracking-widest uppercase border-primary/20 text-primary shrink-0">
            {exp.period}
          </span>
        </div>

        {/* Role & Company */}
        <h4 className="text-3xl font-black mb-2 leading-tight group-hover:text-primary transition-colors duration-500">
          {exp.role}
        </h4>
        <p className="text-primary/50 font-black uppercase tracking-widest text-[11px] mb-6">
          {exp.company}
        </p>

        {/* Description */}
        <p className="text-foreground mb-8 leading-relaxed italic text-[15px] border-l-2 border-primary/20 pl-4">
          {exp.description}
        </p>

        {/* Achievements */}
        <ul className="space-y-4 mb-8">
          {displayedAchievements.map((achievement: string, i: number) => (
            <motion.li 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-3 group/item"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
              <p className="text-sm text-neutral-500 font-medium leading-relaxed group-hover/item:text-foreground transition-colors">
                {achievement}
              </p>
            </motion.li>
          ))}
        </ul>

        {exp.achievements.length > 3 && (
          <button 
            onClick={() => setShowAll(!showAll)}
            className="mt-auto text-[11px] font-black tracking-widest uppercase text-primary hover:text-foreground transition-colors flex items-center gap-2"
          >
            {showAll ? 'Show Less' : `View All ${exp.achievements.length} Achievements`}
            <div className="w-4 h-px bg-primary/30" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
