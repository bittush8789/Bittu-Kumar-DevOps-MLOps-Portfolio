/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { CustomCursor } from './components/CustomCursor';
import { Scene3D } from './components/Scene3D';
import { motion, useScroll, useSpring } from 'motion/react';

// Lazy load non-critical sections to speed up initial load
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Certificates = lazy(() => import('./components/Certificates').then(m => ({ default: m.Certificates })));
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Blog = lazy(() => import('./components/Blog').then(m => ({ default: m.Blog })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary transition-colors duration-700 bg-grain overflow-x-hidden">
      <CustomCursor />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Scene3D />
      
      {/* Large Background Text - Responsive scaling */}
      <div className="fixed inset-0 pointer-events-none select-none -z-40 flex flex-col justify-around opacity-[0.04] font-black leading-none uppercase overflow-hidden">
        <motion.div 
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[30vw] md:text-[25vw] tracking-tighter -ml-10"
        >
          DevOps
        </motion.div>
        <motion.div 
          animate={{ x: [20, -20, 20] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="text-[30vw] md:text-[25vw] tracking-tighter ml-auto -mr-10"
        >
          MLOps
        </motion.div>
      </div>

      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Suspense fallback={<div className="h-screen flex items-center justify-center font-black tracking-widest text-primary animate-pulse">LOADING...</div>}>
          <Projects />
          <Certificates />
          <Experience />
          <Blog />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
