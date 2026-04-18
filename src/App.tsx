/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { CustomCursor } from './components/CustomCursor';
import { Experience } from './components/Experience';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Scene3D } from './components/Scene3D';
import { motion, useScroll, useSpring } from 'motion/react';

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
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Scene3D />
      
      {/* Large Background Text */}
      <div className="fixed inset-0 pointer-events-none select-none -z-40 flex flex-col justify-around opacity-[0.06] font-black leading-none uppercase">
        <motion.div 
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[25vw] tracking-tighter -ml-10"
        >
          DevOps
        </motion.div>
        <motion.div 
          animate={{ x: [20, -20, 20] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="text-[25vw] tracking-tighter ml-auto -mr-10"
        >
          MLOps
        </motion.div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Certificates />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
