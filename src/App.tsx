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
import { Experience } from './components/Experience';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Scene3D } from './components/Scene3D';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-primary transition-colors duration-700 bg-grain">
      <Scene3D />
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
