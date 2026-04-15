import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Insights</h2>
            <h3 className="text-4xl font-bold tracking-tight">Latest Articles</h3>
          </div>
          <a 
            href="https://bittublog.hashnode.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All Posts <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <Card className="bg-card border-border h-full flex flex-col hover:border-primary/30 transition-all group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <div className="text-primary text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
