import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Calendar, Clock, ExternalLink } from 'lucide-react';

export function Blog() {
  return (
    <section id="blog" className="py-32 relative overflow-hidden transition-colors duration-700">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div>
            <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Journal
            </h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              Latest <span className="italic font-light text-neutral-500">Insights</span>
            </h3>
          </div>
          <a 
            href="https://bittublog.hashnode.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 glass-panel rounded-full text-xs font-black tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-500 flex items-center gap-3 border-black/5"
          >
            Explore All <ExternalLink size={14} />
          </a>
        </div>

        <div className="max-w-4xl">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="block border-b border-black/5 py-12 group-hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 text-[10px] font-black tracking-widest uppercase text-neutral-500 mb-4">
                      <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-800" />
                      <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                    </div>
                    <h4 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors mb-4">{post.title}</h4>
                    <p className="text-neutral-500 text-lg font-light leading-relaxed max-w-2xl">{post.excerpt}</p>
                  </div>
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center group-hover:bg-primary group-hover:rotate-45 transition-all duration-700">
                      <ArrowRight size={24} className="group-hover:text-black transition-colors" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
