import { motion } from 'motion/react';
import { REMOTE_SERVICES } from '../constants';
import { Workflow, Cloud, Infinity, Cpu, Server, Code2, Layers, Box } from 'lucide-react';

const iconMap: Record<string, any> = {
  'Workflow': Workflow,
  'Cloud': Cloud,
  'Infinity': Infinity,
  'Cpu': Cpu,
  'Server': Server,
  'Code2': Code2,
  'Layers': Layers,
  'Box': Box,
};

export function Services() {
  return (
    <section className="py-32 relative overflow-hidden transition-colors duration-700">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-sm font-bold tracking-[0.5em] text-primary uppercase mb-6">Solutions</h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 italic">
            Transforming <span className="text-neutral-500 line-through decoration-primary/50">Chaos</span> Into <span className="not-italic text-foreground">Scale</span>
          </h3>
          <p className="text-neutral-500 text-xl font-light">
            Scalable infrastructure and intelligent automation for modern enterprises.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {REMOTE_SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Server;
            return (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="glass-panel p-12 rounded-[40px] border-black/5 hover:border-primary/20 hover:bg-black/[0.02] group transition-all duration-700 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="w-16 h-16 rounded-3xl bg-black/5 flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Icon size={32} className="text-primary group-hover:text-black transition-colors" />
                </div>
                
                <h4 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-foreground leading-relaxed text-lg mb-10">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-5 py-2 glass-panel rounded-full text-xs font-bold tracking-widest uppercase border-black/5 group-hover:border-primary/20 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
