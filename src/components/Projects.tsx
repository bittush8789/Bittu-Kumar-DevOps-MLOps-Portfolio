import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowRight, Layers, Box, Cpu } from 'lucide-react';
import { Tilt } from './ui/tilt';

export function Projects() {
  const [filter, setFilter] = useState<'All' | 'DevOps' | 'MLOps'>('All');

  const filteredProjects = PROJECTS.filter(
    (p) => filter === 'All' || p.type === filter
  );

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Selected Works
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-balance">
              Architecting the <span className="italic font-light text-neutral-400">Future of Scale</span>
            </h3>
          </motion.div>
          
          <div className="flex glass-panel p-1.5 rounded-2xl border-white/10 self-start">
            {['All', 'DevOps', 'MLOps'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-8 py-3 text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-500 ${
                  filter === f 
                    ? 'bg-white text-black shadow-2xl' 
                    : 'text-neutral-500 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="glass-panel h-full rounded-[32px] overflow-hidden flex flex-col border-white/5 hover:border-primary/20 hover:bg-white/[0.05] transition-all duration-700 glow-hover">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute top-6 left-6 flex gap-2">
                       <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10">
                         {project.type}
                       </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <h4 className="text-2xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors duration-500">
                        {project.title}
                      </h4>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-2xl hover:bg-primary hover:text-black transition-all duration-500">
                        <Github size={20} />
                      </a>
                    </div>
                    
                    <p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">
                      {project.problem}
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-neutral-300 border border-white/5 uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <button className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-primary group/link">
                        Details
                        <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
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
