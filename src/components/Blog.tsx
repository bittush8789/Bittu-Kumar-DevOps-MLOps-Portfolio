import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Calendar, Clock, ExternalLink } from 'lucide-react';

export function Blog() {
  return (
    <section id="blog" className="py-20 md:py-32 relative overflow-hidden transition-none">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div>
            <h2 className="text-[12px] font-black tracking-[0.4em] text-primary uppercase mb-6 flex items-center gap-4">
              <span className="w-10 h-px bg-primary/50" />
              Journal
            </h2>
            <h3 className="text-4xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]">
              Latest <span className="italic font-light text-neutral-500">Insights</span>
            </h3>
          </div>
          <a 
            href="https://bittublog.hashnode.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-4 glass-panel rounded-full text-[11px] font-black tracking-widest uppercase hover:bg-primary hover:text-black transition-none flex items-center gap-4 border-white/5 shadow-xl"
          >
            Explore All <ExternalLink size={16} />
          </a>
        </div>

        <div className="max-w-4xl">
          {BLOG_POSTS.map((post, i) => (
            <div
              key={post.title}
              className="group"
            >
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="block border-b border-white/5 py-10 md:py-14 group-hover:border-primary/40 transition-none">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-10">
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 md:gap-6 text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase text-neutral-500 mb-4 md:mb-6 group-hover:text-primary transition-none">
                      <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
                    </div>
                    <h4 className="text-2xl md:text-5xl font-black group-hover:text-primary transition-none mb-4 md:mb-6 leading-tight">{post.title}</h4>
                    <p className="text-neutral-500 text-base md:text-xl font-medium leading-relaxed max-w-3xl group-hover:text-neutral-400 transition-none">{post.excerpt}</p>
                  </div>
                  <div className="shrink-0 hidden md:block">
                    <div 
                      className="w-20 h-20 rounded-full glass-panel flex items-center justify-center border-white/10 group-hover:bg-primary group-hover:border-primary transition-none shadow-2xl ring-1 ring-white/10"
                    >
                      <ArrowRight size={32} className="text-neutral-500 group-hover:text-black transition-none" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
