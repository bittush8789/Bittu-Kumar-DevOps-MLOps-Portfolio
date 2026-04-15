import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import { 
  Box, 
  Cloud, 
  Github, 
  Terminal, 
  Database, 
  Cpu, 
  Layers, 
  Workflow, 
  Infinity,
  Server,
  Code2,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  'Box': Box,
  'Infinity': Infinity,
  'Server': Server,
  'Github': Github,
  'Layers': Layers,
  'Cloud': Cloud,
  'Workflow': Workflow,
  'Cpu': Cpu,
  'Database': Database,
  'Code2': Code2,
  'Terminal': Terminal,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Image Effect */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] grayscale pointer-events-none">
        <img 
          src="https://media.licdn.com/dms/image/v2/D5603AQH62lVf6HzTaQ/profile-displayphoto-scale_400_400/B56ZrQmDwuI0Ag-/0/1764436231313?e=1777507200&v=beta&t=ySyudiR1P5Xg8r1AaNiXzLbKf0TxCA--AaEL_2Vhuow" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Expertise</h2>
          <h3 className="text-4xl font-bold tracking-tight mb-4">Technical Skillset</h3>
          <p className="text-muted-foreground">
            A comprehensive toolkit of technologies and methodologies I use to build 
            and maintain modern infrastructure and ML systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.category}
              </h4>
              <div className="space-y-3">
                {category.items.map((skill) => {
                  const Icon = iconMap[skill.icon] || Terminal;
                  return (
                    <div 
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
