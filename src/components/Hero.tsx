import { ChevronRight, Zap, Terminal, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { ResumeModal } from './ResumeModal';
import React, { useState } from 'react';

export function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-20 overflow-hidden section-liquid">
      {/* Background Glows - Static */}
      <div 
        className="absolute w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50 z-0 hidden lg:block -top-20 -left-20"
      />
      <div 
        className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10 opacity-50" 
      />
      
      {/* Liquid Mesh Pattern - Static */}
      <div 
        className="absolute inset-0 -z-20 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:items-center">
          {/* Text Content */}
          <div className="order-last lg:order-first">
            <div>
              <div 
                className="inline-flex items-center gap-3 py-2 px-6 rounded-full glass-panel text-[11px] font-black tracking-[0.4em] uppercase mb-10 border-white/5 shadow-xl"
              >
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new opportunities
              </div>
              
              <h1 className="text-[clamp(2.5rem,12vw,10rem)] font-black mb-8 leading-[0.85] tracking-tighter">
                <div className="overflow-hidden py-1 md:py-2">
                  <span className="block text-primary">
                    Bittu
                  </span>
                </div>
                <div className="overflow-hidden py-1 md:py-2">
                  <span className="block">
                    Kumar
                  </span>
                </div>
              </h1>
              
              <div>
                <h2 className="text-lg md:text-3xl lg:text-4xl text-neutral-500 font-light mb-10 md:mb-12 max-w-2xl leading-[1.4] px-1 md:px-0">
                  <span className="text-foreground font-black italic">DevOps, MLOps & LLMOps</span> Engineer with <span className="text-primary font-medium">2+ Years</span> of Experience specialized in scaling <span className="text-foreground font-black">Production AI</span>.
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-stretch sm:items-center">
                  <div className="w-full sm:w-auto">
                    <Button size="lg" className="h-16 w-full sm:w-auto px-10 bg-primary hover:bg-black text-black hover:text-white font-black tracking-widest uppercase rounded-[24px] group transition-none shadow-[0_20px_40px_rgba(255,179,25,0.2)]">
                      <a href="#projects" className="flex items-center justify-center gap-3">
                        Explore Works
                        <ChevronRight className="w-5 h-5 transition-none" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => setIsResumeModalOpen(true)}
                      className="h-16 w-full sm:w-auto px-10 glass-panel border-white/10 hover:border-primary/50 text-foreground font-black tracking-widest uppercase rounded-[24px] group transition-none"
                    >
                      Download CV
                    </Button>
                  </div>
                </div>

                <div className="mt-16 flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div 
                        key={i} 
                        className="w-12 h-12 rounded-full border-[3px] border-black bg-neutral-800 overflow-hidden ring-4 ring-primary/5"
                      >
                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 789}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-black tracking-widest uppercase">10+ Global Teams</p>
                    <p className="text-[11px] text-neutral-500 font-medium uppercase tracking-[0.2em]">Scale • Performance • Reliability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Side - Stacked on Mobile */}
          <div
            className="relative perspective-2000 block mt-12 lg:mt-0"
          >
            <div 
              className="relative w-full aspect-[4/5] max-w-[550px] mx-auto"
            >
              {/* 3D Frame Effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-[64px] blur-[100px] -z-10" />
              
              <div className="glass-panel w-full h-full rounded-[64px] overflow-hidden border-white/10 group shadow-2xl relative">
                <img 
                  src="/profile.jpg" 
                  alt="Bittu Kumar" 
                  className="w-full h-full object-cover transition-none group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                {/* Internal UI elements on image */}
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-none">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">System Status</p>
                    <p className="text-lg font-black text-white">ACTIVE NODES: 24</p>
                  </div>
                  <Activity className="text-primary w-8 h-8" />
                </div>
              </div>

              {/* Floating Status Cards - Static */}
              <div 
                  className="absolute -top-6 -right-6 md:-top-10 md:-right-10 glass-panel p-4 md:p-8 rounded-[24px] md:rounded-[32px] border-white/20 backdrop-blur-3xl shadow-2xl z-20 group/card scale-75 md:scale-100"
              >
                <div className="flex items-center gap-3 md:gap-5">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary flex items-center justify-center text-black shadow-lg transition-none">
                      <Zap size={20} className="md:w-7 md:h-7" />
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[11px] font-black text-primary tracking-[0.4em] uppercase mb-1 leading-none">Infrastructure</p>
                      <p className="text-sm md:text-xl font-black tracking-tight">PROD READY</p>
                    </div>
                </div>
              </div>

              <div 
                  className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 glass-panel p-4 md:p-8 rounded-[24px] md:rounded-[32px] border-white/20 backdrop-blur-3xl shadow-2xl z-20 group/card scale-75 md:scale-100"
              >
                <div className="flex items-center gap-3 md:gap-5">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-black flex items-center justify-center text-primary shadow-lg transition-none">
                      <Terminal size={20} className="md:w-7 md:h-7" />
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[11px] font-black text-neutral-400 tracking-[0.4em] uppercase mb-1 leading-none">Last Deploy</p>
                      <p className="text-sm md:text-xl font-black tracking-tight">SUCCESSFUL</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down - Static */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-black/20 flex justify-center p-2">
           <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>

      {/* Resume Selection Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </section>
  );
}
