import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Github, Linkedin, Mail, MapPin, Send, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Contact</h2>
            <h3 className="text-4xl font-bold tracking-tight mb-6">Let's build something <span className="text-muted-foreground italic">extraordinary</span>.</h3>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Whether you have a question about DevOps, MLOps, or just want to say hi, 
              my inbox is always open. I'm currently looking for new opportunities 
              and collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email</p>
                  <p className="text-foreground font-medium">bittush9534@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Location</p>
                  <p className="text-foreground font-medium">India / Remote</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { icon: Github, href: 'https://github.com/bittush8789' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/bittu-kumar-54ab13254/' },
                { icon: Instagram, href: 'https://www.instagram.com/bittush8789/' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-3xl border border-border"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Name</label>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-muted border-border focus:border-primary/50 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-muted border-border focus:border-primary/50 h-12"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Subject</label>
                <Input 
                  placeholder="Project Inquiry" 
                  className="bg-muted border-border focus:border-primary/50 h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  className="bg-muted border-border focus:border-primary/50 min-h-[150px] resize-none"
                />
              </div>
              <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
