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

// Lazy load non-critical sections to speed up initial load
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Certificates = lazy(() => import('./components/Certificates').then(m => ({ default: m.Certificates })));
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Blog = lazy(() => import('./components/Blog').then(m => ({ default: m.Blog })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary transition-none duration-0 overflow-x-hidden">
      {/* Large Background Text - Static version */}
      <div className="fixed inset-0 pointer-events-none select-none -z-40 flex flex-col justify-around opacity-[0.04] font-black leading-none uppercase overflow-hidden">
        <div className="text-[30vw] md:text-[25vw] tracking-tighter -ml-10">
          DevOps
        </div>
        <div className="text-[30vw] md:text-[25vw] tracking-tighter ml-auto -mr-10">
          MLOps
        </div>
      </div>

      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Suspense fallback={<div className="h-screen flex items-center justify-center font-black tracking-widest text-primary">LOADING...</div>}>
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
