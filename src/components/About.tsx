import React from 'react';
import { Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section-liquid relative transition-all duration-500 overflow-hidden">
      <div className="container-liquid relative z-10">
        <div className="grid lg:grid-cols-2 gap-liquid items-center">
          <div
            className="relative block mb-12 lg:mb-0"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Static Decorative Elements */}
              <div 
                className="absolute inset-x-0 inset-y-0 rounded-[60px] border border-primary/20" 
              />
              <div 
                className="absolute inset-x-10 inset-y-10 rounded-[50px] border border-accent/10" 
              />
              
              <div 
                className="relative w-full h-full rounded-[48px] overflow-hidden glass-panel border-white/10 group shadow-2xl"
              >
                <img 
                  src="/profile.jpg" 
                  alt="Bittu Kumar" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-10 left-10">
                   <p 
                     className="text-4xl font-black tracking-tighter text-white"
                   >
                     Bittu Kumar
                   </p>
                   <p 
                     className="text-primary text-[11px] font-black tracking-[0.4em] uppercase mt-2"
                   >
                     Associate Analyst – MLOps
                   </p>
                </div>
              </div>

              {/* Stats Overlay - Static */}
              <div 
                  className="absolute -right-12 top-1/2 -translate-y-1/2 glass-panel p-8 rounded-[32px] border-primary/20 shadow-2xl z-20"
              >
                <p className="text-4xl font-black text-primary mb-1">100%</p>
                <p className="text-[10px] font-black text-neutral-400 tracking-[0.2em] uppercase leading-none">Automation<br/>Driven</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-[12px] font-black tracking-[0.4em] text-primary uppercase mb-8 flex items-center gap-4">
                 <span className="w-10 h-px bg-primary/50" />
                 About Me
              </h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 md:mb-10 leading-[1.1]">
                Solving Complex <span className="italic font-light text-neutral-500">Engineering</span> Problems
              </h3>
              <p className="text-xl text-neutral-400 font-medium leading-relaxed mb-8">
                  Associate Analyst with <span className="text-white font-bold">2+ years</span> of expertise in building and scaling complex <span className="text-primary font-bold">DevOps, MLOps & LLMOps</span> infrastructure.
              </p>
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-12 font-medium max-w-xl opacity-80">
                I am a DevOps, MLOps, and LLMOps Engineer passionate about building scalable, 
                high-performance infra that empowers intelligent applications. 
                With deep expertise in cloud architectures and model orchestration, 
                I bridge the gap between code, data, and production.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: MapPin, title: 'Based in', value: 'Noida, India' },
                  { icon: Briefcase, title: 'Experience', value: 'EXL Service (Present)' }
                ].map((item, i) => (
                  <div 
                    key={item.title}
                    className="glass-panel p-8 rounded-[32px] border-white/5 group transition-all duration-300 shadow-xl hover:border-primary/30"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-all duration-300 group-hover:rotate-6">
                      <item.icon size={28} />
                    </div>
                    <h4 className="text-xs font-black text-neutral-500 uppercase tracking-widest mb-2">{item.title}</h4>
                    <p className="text-lg font-black text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Text - Static */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.04] pointer-events-none select-none">
        <p 
          className="text-[25vw] font-black leading-none tracking-tighter text-foreground"
        >
          DEVOPS•MLOPS•LLMOPS•CLOUD•AI•DEVOPS•MLOPS•LLMOPS•CLOUD•AI•
        </p>
      </div>
    </section>
  );
}
