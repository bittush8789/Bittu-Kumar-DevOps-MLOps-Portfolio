import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Journey</h2>
            <h3 className="text-4xl font-bold tracking-tight">Professional Experience</h3>
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-border"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground text-xs font-bold">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
