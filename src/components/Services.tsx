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
    <section className="py-20 md:py-32 relative overflow-hidden transition-colors duration-700">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[12px] font-black tracking-[0.5em] text-primary uppercase mb-6">Solutions</h2>
            <h3 className="text-4xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 md:mb-10 leading-[0.85] italic">
              Transforming <span className="text-neutral-500 line-through decoration-primary/50 opacity-40">Chaos</span><br />
              <span className="not-italic text-foreground">Into Scale</span>
            </h3>
            <p className="text-neutral-500 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              Scalable infrastructure and intelligent automation for <span className="text-foreground">modern enterprises</span>.
            </p>
          </motion.div>
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
                  hidden: { opacity: 0, y: 50, rotateX: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
                whileHover={{ y: -10 }}
                className="glass-panel p-12 rounded-[56px] border-white/5 hover:border-primary/20 hover:bg-white/[0.03] group transition-all duration-700 overflow-hidden relative shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-bl-full opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-1000" />
                
                <div className="w-20 h-20 rounded-[24px] bg-white/5 flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-110 shadow-xl ring-1 ring-white/10">
                  <Icon size={36} className="text-primary group-hover:text-black transition-colors duration-700" />
                </div>
                
                <h4 className="text-4xl font-black mb-6 tracking-tight group-hover:text-primary transition-colors duration-500">{service.title}</h4>
                <p className="text-neutral-400 leading-relaxed text-xl mb-12 font-medium">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {service.tags.map((tag, tIdx) => (
                    <motion.span 
                      key={tag} 
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-6 py-2.5 glass-panel rounded-full text-[10px] font-black tracking-[0.2em] uppercase border-white/5 group-hover:border-primary/20 transition-all duration-500 bg-black/20"
                    >
                      {tag}
                    </motion.span>
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
