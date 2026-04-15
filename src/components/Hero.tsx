import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />
      
      {/* Formula Background Overlay */}
      <div className="absolute inset-0 -z-20 opacity-[0.07] pointer-events-none mix-blend-screen">
        <img 
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2000" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20" />

      {/* Background Image Effect */}
      <div className="absolute inset-0 -z-30 opacity-[0.03] grayscale pointer-events-none">
        <img 
          src="https://media.licdn.com/dms/image/v2/D5603AQH62lVf6HzTaQ/profile-displayphoto-scale_400_400/B56ZrQmDwuI0Ag-/0/1764436231313?e=1777507200&v=beta&t=ySyudiR1P5Xg8r1AaNiXzLbKf0TxCA--AaEL_2Vhuow" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
              Available for new opportunities
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
              Bittu Kumar
              <span className="block text-neutral-500 text-4xl md:text-6xl mt-2">
                DevOps & MLOps Engineer
              </span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
              Building scalable, automated, and intelligent systems. 
              Specializing in bridging the gap between software development, 
              machine learning, and production operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-neutral-950 font-bold group">
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-cyan-500 rounded-3xl rotate-6 -z-10 opacity-20 blur-2xl" />
              <div className="absolute inset-0 bg-purple-500 rounded-3xl -rotate-6 -z-10 opacity-20 blur-2xl" />
              <div className="w-full h-full rounded-3xl border-2 border-neutral-800 overflow-hidden bg-neutral-900">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQH62lVf6HzTaQ/profile-displayphoto-scale_400_400/B56ZrQmDwuI0Ag-/0/1764436231313?e=1777507200&v=beta&t=ySyudiR1P5Xg8r1AaNiXzLbKf0TxCA--AaEL_2Vhuow" 
                  alt="Bittu Kumar" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-neutral-950 border border-neutral-800 p-4 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold tracking-wider">OPEN TO WORK</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
      </motion.div>
    </section>
  );
}
