import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { BrainCircuit, Workflow, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: BrainCircuit,
      title: 'MLOps Expertise',
      description: 'Automating machine learning workflows from data preparation to model deployment and monitoring.'
    },
    {
      icon: Workflow,
      title: 'DevOps Automation',
      description: 'Streamlining CI/CD pipelines and infrastructure provisioning to accelerate software delivery.'
    },
    {
      icon: ShieldCheck,
      title: 'Scalability & Security',
      description: 'Designing resilient systems that scale horizontally while maintaining high security standards.'
    },
    {
      icon: Zap,
      title: 'Performance Tuning',
      description: 'Optimizing cloud infrastructure and application performance to reduce latency and costs.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">About Me</h2>
            <h3 className="text-4xl font-bold mb-6 tracking-tight">
              Bridging the gap between <span className="text-muted-foreground italic">Intelligence</span> and <span className="text-muted-foreground italic">Operations</span>.
            </h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a DevOps and MLOps Engineer with over 2 years of experience in building and managing 
                large-scale distributed systems. My passion lies in creating automated environments 
                where developers and data scientists can deploy their work with confidence and speed.
              </p>
              <p>
                I specialize in container orchestration with Kubernetes, infrastructure as code with Terraform, 
                and end-to-end machine learning pipelines. My goal is always to build systems that are 
                not just functional, but highly observable, secure, and cost-efficient.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden group"
            >
              <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Featured Resource
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Master MLOps from scratch with my comprehensive guide: <strong>MLOps Zero to Hero</strong>.
              </p>
              <a 
                href="https://github.com/bittush8789/mlops-zero-to-hero-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
              >
                Start Learning <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto mb-12 lg:mb-0"
            >
              <div className="absolute inset-0 bg-primary rounded-3xl rotate-3 opacity-10" />
              <div className="absolute inset-0 bg-primary rounded-3xl -rotate-3 opacity-10" />
              <div className="relative w-full h-full rounded-3xl border border-border overflow-hidden bg-muted">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQH62lVf6HzTaQ/profile-displayphoto-scale_400_400/B56ZrQmDwuI0Ag-/0/1764436231313?e=1777507200&v=beta&t=ySyudiR1P5Xg8r1AaNiXzLbKf0TxCA--AaEL_2Vhuow" 
                  alt="Bittu Kumar" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:col-span-2">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-colors group">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
