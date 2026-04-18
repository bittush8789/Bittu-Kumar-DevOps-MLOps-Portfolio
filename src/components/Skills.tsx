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

const iconMap: Record<string, any> = {
  'Box': Box,
  'Infinity': Infinity,
  'Server': Server,
  'Github': Github,
  'Layers': Layers,
  'Cloud': Cloud,
  'Workflow': Workflow,
  'Cpu': Cpu,
  'Database': Database,
  'Code2': Code2,
  'Terminal': Terminal,
  'ShieldCheck': ShieldCheck,
  'Lock': Lock,
};

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden transition-colors duration-700">
      {/* Enhanced Layered Background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none opacity-50" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-6 flex items-center justify-center md:justify-start gap-4">
              <span className="w-8 h-[1px] bg-primary/50" />
              Expertise
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
              Tech <span className="italic font-light text-neutral-500">Stack &</span><br />Tooling
            </h3>
          </div>
          <div className="hidden lg:block">
             <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
          </div>
          <p className="text-neutral-500 max-w-sm text-center md:text-left leading-relaxed font-medium">
            Pioneering production-grade solutions with a curated toolkit of <span className="text-foreground">Cloud-Native</span>, <span className="text-foreground">MLOps</span>, and <span className="text-foreground">LLMOps</span> technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group"
            >
              <h4 className="text-[13px] font-black tracking-[0.4em] uppercase text-neutral-500 mb-12 pb-5 border-b border-black/10 flex items-center justify-between">
                {category.category}
                <div className="w-2.5 h-2.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors shadow-[0_0_15px_currentColor]" />
              </h4>
              <div className="space-y-7">
                {category.items.map((skill, sIdx) => {
                  const Icon = iconMap[skill.icon] || Terminal;
                  return (
                    <motion.div 
                      key={sIdx}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-6 group/item cursor-default"
                    >
                      <div className="w-14 h-14 rounded-[20px] glass-panel flex items-center justify-center border-white/5 group-hover/item:border-primary/40 group-hover/item:bg-primary/5 transition-all duration-500 shadow-md relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        <Icon size={22} className="text-neutral-500 group-hover/item:text-primary transition-all duration-500 z-10" />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-base md:text-lg font-bold tracking-tight text-neutral-500 group-hover/item:text-foreground transition-colors">{skill.name}</p>
                        <div className="w-0 h-[2px] bg-primary/40 group-hover/item:w-full transition-all duration-500 mt-1.5" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
