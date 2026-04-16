import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Tilt } from './ui/tilt';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background transition-colors duration-700">
      {/* Liquid Organic Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10 animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Liquid Mesh Pattern */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter">
              <span className="block italic font-light text-primary">Bittu</span>
              <span className="block mt-2">Kumar</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl text-neutral-400 font-light mb-8 max-w-xl">
                DevOps & <span className="text-white font-medium">MLOps Engineer</span> bridging the gap between intelligent systems and production operations.
              </h2>
              
              <div className="flex flex-wrap gap-6 items-center">
                <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-black font-bold rounded-2xl group transition-all duration-500 hover:scale-105">
                  <a href="#projects" className="flex items-center gap-2">
                    Latest Projects
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative perspective-1000"
          >
            <Tilt>
              <div className="relative w-full aspect-[4/5] glass-panel rounded-[40px] overflow-hidden border-white/5 group ring-1 ring-white/10 hover:ring-primary/30 transition-all duration-700">
               <img 
                 src="/profile.jpg" 
                 alt="Bittu Kumar" 
                 className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
               
               <div className="absolute bottom-10 left-10 right-10">
                 <div className="glass-panel p-6 rounded-3xl border-white/10 backdrop-blur-3xl">
                   <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">Featured Project</p>
                   <h3 className="text-xl font-bold mb-4">MLOps Zero to Hero</h3>
                   <div className="flex gap-2">
                     <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold">DOCKER</span>
                     <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold">K8S</span>
                     <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold">MLFLOW</span>
                   </div>
                 </div>
               </div>
            </div>
            </Tilt>
            
            {/* Floating Glass Cards */}
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-10 -right-10 glass-panel p-6 rounded-3xl border-white/20 blur-sm hover:blur-none transition-all duration-500"
            >
              <div className="flex items-center gap-3">
                 <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/></svg>
                 </div>
                 <div>
                   <p className="text-[10px] font-bold text-neutral-400">STATUS</p>
                   <p className="text-sm font-bold">PROD READY</p>
                 </div>
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
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
           <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
