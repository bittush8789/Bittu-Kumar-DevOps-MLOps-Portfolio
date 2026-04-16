import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';
import { Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 relative bg-background transition-colors duration-700">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated Rings */}
              <div className="absolute inset-x-0 inset-y-0 rounded-full border border-primary/20 animate-spin-slow" />
              <div className="absolute inset-x-10 inset-y-10 rounded-full border border-primary/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden glass-panel border-white/10 group">
                <img 
                  src="/profile.jpg" 
                  alt="Bittu Kumar" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-8 left-8">
                   <p className="text-3xl font-bold tracking-tighter">Bittu Kumar</p>
                   <p className="text-primary text-[12px] font-black tracking-[0.3em] uppercase">Associate Analyst – MLOps</p>
                </div>
              </div>

              {/* Stats Overlay */}
              <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 5, repeat: Infinity }}
                 className="absolute -right-8 top-1/2 glass-panel p-6 rounded-3xl border-primary/20 shadow-2xl"
              >
                <p className="text-3xl font-black text-primary">100%</p>
                <p className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase">Automation</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-6 flex items-center gap-3">
                 <span className="w-8 h-px bg-primary" />
                 About Me
              </h2>
              <h3 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
                Solving Complex <span className="italic font-light text-neutral-400">Engineering</span> Problems
              </h3>
              <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                I am a DevOps and MLOps Engineer passionate about building scalable, 
                high-performance infra that empowers intelligent applications. 
                With deep expertise in cloud architectures and model orchestration, 
                I bridge the gap between code, data, and production.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="glass-panel p-6 rounded-3xl border-white/5 group hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <h4 className="font-bold text-neutral-200 mb-1">Based in</h4>
                  <p className="text-sm text-neutral-500 font-medium">Noida, India</p>
                </div>
                <div className="glass-panel p-6 rounded-3xl border-white/5 group hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <h4 className="font-bold text-neutral-200 mb-1">Experience</h4>
                  <p className="text-sm text-neutral-500 font-medium">EXL Service (Present)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-5 pointer-events-none select-none">
        <p className="text-[20vw] font-black leading-none tracking-tighter text-white">DEVOPS•MLOPS•CLOUD•AI•</p>
      </div>
    </section>
  );
}
