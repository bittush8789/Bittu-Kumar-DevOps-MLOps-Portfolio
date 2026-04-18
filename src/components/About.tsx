import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';
import { Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section-liquid relative transition-colors duration-700 overflow-hidden">
      <div className="container-liquid relative z-10">
        <div className="grid lg:grid-cols-2 gap-liquid items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Animated Decorative Elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 inset-y-0 rounded-[60px] border border-primary/20" 
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-10 inset-y-10 rounded-[50px] border border-accent/10" 
              />
              
              <motion.div 
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="relative w-full h-full rounded-[48px] overflow-hidden glass-panel border-white/10 group shadow-2xl"
              >
                <img 
                  src="/profile.jpg" 
                  alt="Bittu Kumar" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-10 left-10">
                   <motion.p 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5 }}
                     className="text-4xl font-black tracking-tighter text-white"
                   >
                     Bittu Kumar
                   </motion.p>
                   <motion.p 
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.7 }}
                     className="text-primary text-[11px] font-black tracking-[0.4em] uppercase mt-2"
                   >
                     Associate Analyst – MLOps
                   </motion.p>
                </div>
              </motion.div>

              {/* Stats Overlay */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.8, x: 20 }}
                 whileInView={{ opacity: 1, scale: 1, x: 0 }}
                 viewport={{ once: true }}
                 animate={{ y: [0, -15, 0] }}
                 transition={{ 
                   opacity: { duration: 0.8 },
                   y: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
                 }}
                 className="absolute -right-12 top-1/2 -translate-y-1/2 glass-panel p-8 rounded-[32px] border-primary/20 shadow-2xl z-20"
              >
                <p className="text-4xl font-black text-primary mb-1">100%</p>
                <p className="text-[10px] font-black text-neutral-400 tracking-[0.2em] uppercase leading-none">Automation<br/>Driven</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[12px] font-black tracking-[0.4em] text-primary uppercase mb-8 flex items-center gap-4">
                 <span className="w-10 h-px bg-primary/50" />
                 About Me
              </h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 md:mb-10 leading-[1.1]">
                Solving Complex <span className="italic font-light text-neutral-500">Engineering</span> Problems
              </h3>
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-12 font-medium max-w-xl opacity-80">
                I am a DevOps and MLOps Engineer passionate about building scalable, 
                high-performance infra that empowers intelligent applications. 
                With deep expertise in cloud architectures and model orchestration, 
                I bridge the gap between code, data, and production.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: MapPin, title: 'Based in', value: 'Noida, India' },
                  { icon: Briefcase, title: 'Experience', value: 'EXL Service (Present)' }
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="glass-panel p-8 rounded-[32px] border-white/5 group hover:bg-white/[0.05] transition-all duration-500 shadow-xl"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                      <item.icon size={28} />
                    </div>
                    <h4 className="text-xs font-black text-neutral-500 uppercase tracking-widest mb-2">{item.title}</h4>
                    <p className="text-lg font-black text-foreground">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Text with Scroll-based Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.04] pointer-events-none select-none">
        <motion.p 
          style={{ x: '-10%' }}
          animate={{ x: '-30%' }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[25vw] font-black leading-none tracking-tighter text-foreground"
        >
          DEVOPS•MLOPS•CLOUD•AI•DEVOPS•MLOPS•CLOUD•AI•
        </motion.p>
      </div>
    </section>
  );
}
