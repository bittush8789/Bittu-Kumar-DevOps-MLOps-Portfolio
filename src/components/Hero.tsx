import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Tilt } from './ui/tilt';
import { Magnetic } from './ui/magnetic';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden transition-colors duration-700">
      {/* Liquid Organic Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Liquid Mesh Pattern */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:items-center">
          {/* Image - Appears first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0] 
            }}
            transition={{ 
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative perspective-1000 order-first lg:order-last mb-8 lg:mb-0"
          >
            <Tilt>
              <div className="relative w-[280px] h-[350px] md:w-[400px] md:h-[500px] lg:w-full lg:max-w-[520px] mx-auto glass-panel rounded-[48px] overflow-hidden border-black/5 group ring-1 ring-black/10 hover:ring-primary/30 transition-all duration-700 shadow-2xl">
               <img 
                 src="/profile.jpg" 
                 alt="Bittu Kumar" 
                 className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
            </Tilt>
            
            {/* Floating Status Card */}
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-4 -right-4 lg:-top-6 lg:-right-12 glass-panel p-4 lg:p-6 rounded-[24px] border-white/10 backdrop-blur-2xl transition-all duration-500 shadow-2xl z-20"
            >
              <div className="flex items-center gap-3 lg:gap-4">
                 <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                   <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/></svg>
                 </div>
                 <div>
                   <p className="text-[9px] lg:text-[11px] font-black text-primary/70 tracking-widest uppercase mb-0.5">Engine Status</p>
                   <p className="text-[12px] lg:text-[14px] font-black tracking-tight">PROD READY</p>
                 </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="inline-flex items-center gap-2 py-2 px-5 rounded-full glass-panel text-[12px] font-black tracking-[0.3em] uppercase mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for new opportunities
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block text-primary"
              >
                Bittu
              </motion.span>
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block mt-1 md:mt-2"
              >
                Kumar
              </motion.span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl text-neutral-500 font-light mb-8 max-w-xl leading-relaxed">
                DevOps & <span className="text-foreground font-medium">MLOps Engineer</span> bridging the gap between intelligent systems and production operations.
              </h2>
              
              <div className="flex flex-wrap gap-6 items-center">
                <Magnetic>
                  <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-black font-bold rounded-2xl group transition-all duration-500 hover:scale-105">
                    <a href="#projects" className="flex items-center gap-2">
                      Latest Projects
                      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </Magnetic>
                
                <Magnetic>
                  <Button size="lg" variant="outline" className="h-14 px-8 glass-panel border-white/10 hover:border-primary/50 text-foreground font-bold rounded-2xl group transition-all duration-500">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Download CV
                    </a>
                  </Button>
                </Magnetic>

                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-neutral-800 overflow-hidden">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} alt="User" />
                    </div>
                  ))}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black bg-neutral-900 text-[12px] font-black">
                    10+
                  </div>
                </div>
                <span className="text-sm text-neutral-500 font-medium">Trusted by leading tech teams</span>
              </div>
            </motion.div>
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


