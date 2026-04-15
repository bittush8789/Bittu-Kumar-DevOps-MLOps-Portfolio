import { motion } from 'motion/react';
import { REMOTE_SERVICES } from '../constants';
import { Card, CardContent } from './ui/card';
import { 
  Workflow, 
  Cloud, 
  Infinity, 
  Cpu, 
  Globe,
  CheckCircle2
} from 'lucide-react';
import { Badge } from './ui/badge';

const iconMap: Record<string, any> = {
  'Workflow': Workflow,
  'Cloud': Cloud,
  'Infinity': Infinity,
  'Cpu': Cpu,
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Collaboration</h2>
            <h3 className="text-4xl font-bold tracking-tight mb-6">Remote Services & Expertise</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am available for remote roles and freelance projects worldwide. 
              I specialize in building production-grade infrastructure that enables 
              distributed teams to collaborate effectively and ship code faster.
            </p>
          </div>
          
          <div className="flex items-center gap-4 bg-card p-6 rounded-3xl border border-border shadow-xl">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
              <Globe className="w-6 h-6 text-green-500 animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Availability</p>
              <p className="text-foreground font-bold">Open to Remote Roles</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {REMOTE_SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all group h-full overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="pt-4 flex items-center gap-2 text-sm font-medium text-primary">
                          <CheckCircle2 className="w-4 h-4" />
                          Remote-Ready Solution
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
