import React, { memo } from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import { 
  Box, 
  Cloud, 
  Github, 
  Terminal, 
  Database, 
  Cpu, 
  Layers, 
  Workflow, 
  Infinity,
  Server,
  Code2,
  ShieldCheck,
  Lock,
} from 'lucide-react';

// Module-level constants — created ONCE, never re-allocated on re-renders
const iconMap: Record<string, any> = {
  'Box': Box, 'Infinity': Infinity, 'Server': Server, 'Github': Github,
  'Layers': Layers, 'Cloud': Cloud, 'Workflow': Workflow, 'Cpu': Cpu,
  'Database': Database, 'Code2': Code2, 'Terminal': Terminal,
  'ShieldCheck': ShieldCheck, 'Lock': Lock,
};

// Static variants — defined once at module scope, O(1) memory
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

// Memoized skill row — only re-renders if skill prop changes
const SkillItem = memo(({ skill }: { skill: { name: string; icon: string } }) => {
  const Icon = iconMap[skill.icon] || Terminal;
  return (
    <motion.div
      variants={skillVariants}
      whileHover={{ x: 10 }}
      className="flex items-center gap-6 group/item cursor-default"
    >
      <div className="w-16 h-16 rounded-[24px] glass-panel flex items-center justify-center border-white/5 group-hover/item:border-primary/40 group-hover/item:bg-primary/5 transition-all duration-700 shadow-xl relative overflow-hidden ring-1 ring-white/5">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }} className="relative z-10">
          <Icon size={26} className="text-neutral-500 group-hover/item:text-primary transition-all duration-500" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-700" />
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-black tracking-tight text-neutral-400 group-hover/item:text-foreground transition-colors duration-500">{skill.name}</p>
        <div className="w-0 h-[2px] bg-primary/40 group-hover/item:w-full transition-all duration-700 mt-2 rounded-full" />
      </div>
    </motion.div>
  );
});

export function Skills() {
  return (
    <section id="skills" className="section-liquid relative overflow-hidden transition-colors duration-700">
      {/* Enhanced Layered Background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none opacity-50" />
      
      <div className="container-liquid relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl text-center md:text-left"
          >
            <h2 className="text-[12px] font-black tracking-[0.4em] text-primary uppercase mb-6 flex items-center justify-center md:justify-start gap-4">
              <span className="w-10 h-px bg-primary/50" />
              Expertise
            </h2>
            <h3 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              Tech <span className="italic font-light text-neutral-500">Stack &</span><br />Tooling
            </h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-neutral-500 max-w-sm text-center md:text-left leading-relaxed font-medium text-lg"
          >
            Pioneering production-grade solutions with a curated toolkit of <span className="text-foreground">Cloud-Native</span>, <span className="text-foreground">MLOps</span>, and <span className="text-foreground">LLMOps</span> technologies.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-liquid"
        >
          {SKILLS.map((category) => (
            <motion.div key={category.category} variants={itemVariants} className="group">
              <h4 className="text-[13px] font-black tracking-[0.4em] uppercase text-neutral-400 mb-12 pb-6 border-b border-white/5 flex items-center justify-between group-hover:text-primary transition-colors">
                {category.category}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2.5 h-2.5 rounded-full bg-primary/20 group-hover:bg-primary shadow-[0_0_15px_rgba(255,179,25,0.4)]" 
                />
              </h4>
              <motion.div variants={containerVariants} className="space-y-8">
                {category.items.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
