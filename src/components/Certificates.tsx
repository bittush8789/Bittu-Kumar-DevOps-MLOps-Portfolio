import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CERTIFICATES } from '../constants';
import { Card, CardContent } from './ui/card';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';

export function Certificates() {
  const categories = ['All', ...new Set(CERTIFICATES.map(c => c.category))];
  const [filter, setFilter] = useState('All');

  const filteredCertificates = CERTIFICATES.filter(
    (c) => filter === 'All' || c.category === filter
  );

  return (
    <section id="certificates" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Credentials</h2>
            <h3 className="text-4xl font-bold tracking-tight mb-4">Certifications</h3>
            <p className="text-muted-foreground max-w-xl">
              Professional certifications that validate my expertise in cloud architecture, 
              container orchestration, and machine learning.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 bg-card p-1 rounded-lg border border-border">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                  filter === cat 
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, i) => (
              <motion.div
                key={cert.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all group h-full">
                  <CardContent className="p-6 flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Award className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors leading-tight">
                          {cert.title}
                        </h4>
                        <Badge variant="secondary" className="text-[10px] uppercase tracking-wider whitespace-nowrap">
                          {cert.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {cert.date}
                        </div>
                        <a 
                          href={cert.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-primary hover:underline font-bold"
                        >
                          Verify <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
