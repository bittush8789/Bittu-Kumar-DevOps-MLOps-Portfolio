import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowRight, Layers, Box, Cpu } from 'lucide-react';
import { Tilt } from './ui/tilt';

export function Projects() {
  const [filter, setFilter] = useState<'All' | 'DevOps' | 'MLOps' | 'LLMOps'>('All');

  const filteredProjects = PROJECTS.filter(
    (p) => filter === 'All' || p.type === filter
  );

  return (
    <section id="projects" className="py-32 relative overflow-hidden transition-colors duration-700">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[13px] font-black tracking-[0.4em] text-primary uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/50" />
              Selected Works
            </h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-balance">
              Architecting the <span className="italic font-light text-neutral-500">Future of Scale</span>
            </h3>
          </motion.div>
          
          <div className="flex flex-wrap gap-2 glass-panel p-2 rounded-2xl border-white/10 self-start justify-center md:justify-start">
            {['All', 'DevOps', 'MLOps', 'LLMOps'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 md:px-8 py-3.5 text-xs md:text-sm font-black tracking-widest uppercase rounded-xl transition-all duration-500 ${
                  filter === f 
                    ? 'bg-primary text-black shadow-[0_0_20px_rgba(255,179,25,0.3)]' 
                    : 'text-neutral-500 hover:text-foreground'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group h-full"
              >
                <Tilt className="h-full">
                  <div className="glass-panel h-full rounded-[40px] overflow-hidden flex flex-col border-white/5 hover:border-primary/20 hover:bg-white/[0.05] transition-all duration-700 glow-hover relative">
                  <div className="aspect-video relative overflow-hidden group/img-container">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Theme-based Color Filter */}
                    <div className="absolute inset-0 bg-primary/20 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 pointer-events-none" />
                    <div className="absolute top-6 left-6 flex gap-2">
                       <span className="px-5 py-2 bg-black/60 backdrop-blur-md rounded-full text-[12px] font-black tracking-widest uppercase border border-white/10 text-white">
                         {project.type}
                       </span>
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <h4 className="text-3xl font-black tracking-tight leading-tight group-hover:text-primary transition-colors duration-500">
                        {project.title}
                      </h4>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3.5 bg-white/5 rounded-2xl hover:bg-primary hover:text-black transition-all duration-500 shadow-xl" aria-label="GitHub Repository">
                        <Github size={22} />
                      </a>
                    </div>
                    
                    <p className="text-foreground text-[17px] leading-relaxed mb-8 flex-grow font-medium">
                      {project.problem}
                    </p>
                    
                    <div className="space-y-8 mt-auto">
                      <div className="flex flex-wrap gap-2.5">
                        {project.stack.slice(0, 5).map((tech) => (
                          <span key={tech} className="px-3.5 py-1.5 bg-black/5 rounded-xl text-[11px] font-black text-neutral-500 border border-black/5 uppercase tracking-widest">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <button className="flex items-center gap-3 text-[12px] font-black tracking-[0.3em] uppercase text-primary group/link border-t border-black/5 pt-6 w-full hover:text-foreground transition-colors">
                        Explore Pipeline
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                      </button>
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
