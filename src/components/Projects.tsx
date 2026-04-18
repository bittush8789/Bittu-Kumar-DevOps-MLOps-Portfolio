import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { Github, ArrowRight } from 'lucide-react';
import { Tilt } from './ui/tilt';
import { Project3DIcon } from './Project3DIcon';

// Static config — allocated once at module scope
const FILTER_TYPES = ['All', 'DevOps', 'MLOps', 'LLMOps'] as const;
const cardTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as const;

export function Projects() {
  const [filter, setFilter] = useState<'All' | 'DevOps' | 'MLOps' | 'LLMOps'>('All');

  // O(n) filter — only recomputes when filter changes, not every render
  const filteredProjects = useMemo(
    () => filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.type === filter),
    [filter]
  );

  // Stable callback reference — no new function on every render
  const handleFilter = useCallback((f: typeof filter) => setFilter(f), []);

  return (
    <section id="projects" className="section-liquid relative overflow-hidden transition-colors duration-700">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      
      <div className="container-liquid relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <h2 className="text-[11px] md:text-[13px] font-black tracking-[0.4em] text-primary uppercase mb-6 flex items-center gap-4">
                <span className="w-6 md:w-8 h-px bg-primary/50" />
                Selected Works
              </h2>
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-balance leading-[0.9]">
                Architecting the <br className="hidden md:block" />
                <span className="italic font-light text-neutral-500">Future of Scale</span>
              </h3>
            </motion.div>
          </motion.div>
          
          <div className="flex flex-wrap gap-2 glass-panel p-1.5 md:p-2 rounded-2xl border-white/10 self-start">
            {FILTER_TYPES.map((f) => (
              <button
                key={f}
                onClick={() => handleFilter(f as any)}
                className={`flex-1 md:flex-none px-4 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase rounded-xl transition-all duration-500 ${
                  filter === f 
                    ? 'bg-primary text-black shadow-[0_0_20px_rgba(255,179,25,0.3)]' 
                    : 'text-neutral-500 hover:text-foreground hover:bg-white/5'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-liquid" style={{ perspective: '2000px' }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50, rotateX: 25, z: -100 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
                viewport={{ once: true }}
                transition={{ ...cardTransition, delay: i * 0.1 }}
                className="group h-full"
              >
                <Tilt className="h-full">
                  <div className="glass-panel h-full rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col border-white/5 hover:border-primary/20 hover:bg-white/[0.03] transition-all duration-700 glow-hover relative shadow-2xl">
                  <div className="aspect-[16/10] relative overflow-hidden group/img-container">
                    {/* 3D Animated Icon Layer */}
                    <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <Project3DIcon type={project.type as any} />
                    </div>
                    
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:blur-md"
                    />
                    
                    <div className="absolute inset-0 bg-primary/20 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 pointer-events-none" />
                    
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 flex gap-2 z-20">
                       <span className="px-4 py-1.5 md:px-6 md:py-2.5 bg-black/60 backdrop-blur-xl rounded-full text-[9px] md:text-[11px] font-black tracking-[0.2em] uppercase border border-white/10 text-primary shadow-xl">
                         {project.type}
                       </span>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col flex-grow relative z-10">
                    <div className="flex items-start justify-between gap-6 mb-8">
                      <h4 className="text-2xl md:text-4xl font-black tracking-tighter leading-[1.1] group-hover:text-primary transition-colors duration-500">
                        {project.title}
                      </h4>
                      <motion.a 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3.5 md:p-4 bg-white/5 rounded-2xl hover:bg-primary hover:text-black transition-all duration-500 shadow-2xl ring-1 ring-white/10" 
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                    
                    <p className="text-neutral-400 text-base md:text-xl leading-relaxed mb-10 flex-grow font-medium">
                      {project.problem}
                    </p>
                    
                    <div className="space-y-8 mt-auto">
                      <div className="flex flex-wrap gap-2.5">
                        {project.stack.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-4 py-2 bg-white/5 rounded-xl text-[10px] md:text-[11px] font-black text-neutral-500 border border-white/5 uppercase tracking-[0.2em]">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <motion.button 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 text-[11px] md:text-[12px] font-black tracking-[0.3em] uppercase text-primary group/link border-t border-white/5 pt-8 w-full hover:text-foreground transition-all duration-500"
                      >
                        Explore Pipeline
                        <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-2" />
                      </motion.button>
                    </div>
                  </div>
                </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
