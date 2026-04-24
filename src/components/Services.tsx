import React from 'react';
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
    <section className="py-20 md:py-32 relative overflow-hidden transition-none">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div>
            <h2 className="text-[12px] font-black tracking-[0.5em] text-primary uppercase mb-6">Solutions</h2>
            <h3 className="text-4xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 md:mb-10 leading-[0.85]">
              Scaling <br />
              <span className="italic font-light text-neutral-500">Innovation</span>
            </h3>
            <p className="text-neutral-500 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              Scalable infrastructure and intelligent automation for <span className="text-foreground">modern enterprises</span>.
            </p>
          </div>
        </div>

        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {REMOTE_SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Server;
            return (
              <div
                key={service.title}
                className="glass-panel p-12 rounded-[56px] border-white/5 hover:border-primary/20 hover:bg-white/[0.03] group transition-none overflow-hidden relative shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-bl-full opacity-0 group-hover:opacity-100 blur-[80px] transition-none" />
                
                <div className="w-20 h-20 rounded-[24px] bg-white/5 flex items-center justify-center mb-10 group-hover:bg-primary transition-none group-hover:scale-105 shadow-xl ring-1 ring-white/10">
                  <Icon size={36} className="text-primary group-hover:text-black transition-none" />
                </div>
                
                <h4 className="text-4xl font-black mb-6 tracking-tight group-hover:text-primary transition-none">{service.title}</h4>
                <p className="text-neutral-400 leading-relaxed text-xl mb-12 font-medium">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {service.tags.map((tag, tIdx) => (
                    <span 
                      key={tag} 
                      className="px-6 py-2.5 glass-panel rounded-full text-[10px] font-black tracking-[0.2em] uppercase border-white/5 group-hover:border-primary/20 transition-none bg-black/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
