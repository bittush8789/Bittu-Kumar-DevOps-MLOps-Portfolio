import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ChevronRight, Zap, Terminal, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { Tilt } from './ui/tilt';
import { Magnetic } from './ui/magnetic';
import React, { useState, useEffect } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-20 overflow-hidden transition-colors duration-700 section-liquid">
      {/* Dynamic Background Glows following Mouse */}
      <motion.div 
        animate={{ 
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        className="absolute w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50 z-0 hidden lg:block"
      />
      <motion.div 
        animate={{ 
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10 opacity-50" 
      />
      
      {/* Liquid Mesh Pattern with floating animation */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
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
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-3 py-2 px-6 rounded-full glass-panel text-[11px] font-black tracking-[0.4em] uppercase mb-10 border-white/5 shadow-xl"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new opportunities
              </motion.div>
              
              <h1 className="text-[clamp(3.5rem,15vw,10rem)] font-black mb-8 leading-[0.85] tracking-tighter">
                <div className="overflow-hidden py-1 md:py-2">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-primary"
                  >
                    Bittu
                  </motion.span>
                </div>
                <div className="overflow-hidden py-1 md:py-2">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    Kumar
                  </motion.span>
                </div>
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <h2 className="text-lg md:text-3xl lg:text-4xl text-neutral-500 font-light mb-10 md:mb-12 max-w-2xl leading-[1.4] px-1 md:px-0">
                  <span className="text-foreground font-black italic">DevOps & MLOps</span> Engineer with <span className="text-primary font-medium">2+ Years</span> of Experience specialized in scaling <span className="text-foreground font-black">Production AI</span>.
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-stretch sm:items-center">
                  <Magnetic>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                      <Button size="lg" className="h-16 w-full sm:w-auto px-10 bg-primary hover:bg-black text-black hover:text-white font-black tracking-widest uppercase rounded-[24px] group transition-all duration-700 shadow-[0_20px_40px_rgba(255,179,25,0.2)]">
                        <a href="#projects" className="flex items-center justify-center gap-3">
                          Explore Works
                          <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                        </a>
                      </Button>
                    </motion.div>
                  </Magnetic>
                  
                  <Magnetic>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                      <Button size="lg" variant="outline" className="h-16 w-full sm:w-auto px-10 glass-panel border-white/10 hover:border-primary/50 text-foreground font-black tracking-widest uppercase rounded-[24px] group transition-all duration-700">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          Download CV
                        </a>
                      </Button>
                    </motion.div>
                  </Magnetic>
                </div>

                <div className="mt-16 flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className="w-12 h-12 rounded-full border-[3px] border-black bg-neutral-800 overflow-hidden ring-4 ring-primary/5"
                      >
                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 789}`} alt="User" />
                      </motion.div>
                    ))}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-black tracking-widest uppercase">10+ Global Teams</p>
                    <p className="text-[11px] text-neutral-500 font-medium uppercase tracking-[0.2em]">Scale • Performance • Reliability</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Side - Hidden on Mobile/Tablet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative perspective-2000 hidden lg:block"
          >
            <Tilt>
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotateZ: [0, 2, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full aspect-[4/5] max-w-[550px] mx-auto"
              >
                {/* 3D Frame Effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-[64px] blur-[100px] -z-10 animate-pulse" />
                
                <div className="glass-panel w-full h-full rounded-[64px] overflow-hidden border-white/10 group shadow-2xl relative">
                  <img 
                    src="/profile.jpg" 
                    alt="Bittu Kumar" 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  
                  {/* Internal UI elements on image */}
                  <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">System Status</p>
                      <p className="text-lg font-black text-white">ACTIVE NODES: 24</p>
                    </div>
                    <Activity className="text-primary w-8 h-8 animate-pulse" />
                  </div>
                </div>

                {/* Floating Status Cards - Hidden on very small screens, resized on tablet */}
                <motion.div 
                   animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -top-6 -right-6 md:-top-10 md:-right-10 glass-panel p-4 md:p-8 rounded-[24px] md:rounded-[32px] border-white/20 backdrop-blur-3xl shadow-2xl z-20 group/card scale-75 md:scale-100"
                >
                  <div className="flex items-center gap-3 md:gap-5">
                     <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary flex items-center justify-center text-black shadow-lg transition-transform group-hover/card:rotate-12">
                       <Zap size={20} className="md:w-7 md:h-7" />
                     </div>
                     <div>
                       <p className="text-[9px] md:text-[11px] font-black text-primary tracking-[0.4em] uppercase mb-1 leading-none">Infrastructure</p>
                       <p className="text-sm md:text-xl font-black tracking-tight">PROD READY</p>
                     </div>
                  </div>
                </motion.div>

                <motion.div 
                   animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 glass-panel p-4 md:p-8 rounded-[24px] md:rounded-[32px] border-white/20 backdrop-blur-3xl shadow-2xl z-20 group/card scale-75 md:scale-100"
                >
                  <div className="flex items-center gap-3 md:gap-5">
                     <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-black flex items-center justify-center text-primary shadow-lg transition-transform group-hover/card:-rotate-12">
                       <Terminal size={20} className="md:w-7 md:h-7" />
                     </div>
                     <div>
                       <p className="text-[9px] md:text-[11px] font-black text-neutral-400 tracking-[0.4em] uppercase mb-1 leading-none">Last Deploy</p>
                       <p className="text-sm md:text-xl font-black tracking-tight">SUCCESSFUL</p>
                     </div>
                  </div>
                </motion.div>
              </motion.div>
            </Tilt>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-black/20 flex justify-center p-2">
           <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}


