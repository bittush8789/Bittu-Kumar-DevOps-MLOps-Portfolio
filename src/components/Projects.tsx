import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

export function Projects() {
  const [filter, setFilter] = useState<'All' | 'DevOps' | 'MLOps'>('All');

  const filteredProjects = PROJECTS.filter(
    (p) => filter === 'All' || p.type === filter
  );

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold tracking-tight">Featured Projects</h3>
          </div>
          
          <div className="flex bg-card p-1 rounded-lg border border-border">
            {['All', 'DevOps', 'MLOps'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 text-sm font-bold rounded-md transition-all ${
                  filter === f 
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-card border-border h-full flex flex-col overflow-hidden group">
                  <div className="h-48 bg-muted relative overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-primary tracking-tighter uppercase whitespace-pre opacity-50">
                          {`ARCHITECTURE_DIAGRAM_V2.0\n[NODE_CLUSTER] -> [LOAD_BALANCER]\n[API_GATEWAY] -> [MICROSERVICES]\n[DATA_STORE] <- [ML_INFERENCE]`}
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      {(project as any).isFeatured && (
                        <Badge className="bg-primary text-primary-foreground border-none">
                          Featured Resource
                        </Badge>
                      )}
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm border-border">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow space-y-6">
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Problem</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Tech Stack</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span key={tech} className="px-2 py-1 rounded bg-muted border border-border text-[10px] font-mono text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Key Features</h5>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <ArrowRight className="w-3 h-3 text-primary mt-1 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <div className="p-6 pt-0 mt-auto flex gap-4">
                    <Button variant="outline" size="sm" className="w-full border-border hover:bg-muted gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                        <Github className="w-4 h-4" />
                        View Repository
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
