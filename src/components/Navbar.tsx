import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [theme, setTheme] = useState<'amber' | 'blue' | 'purple' | 'emerald'>('amber');

  const toggleTheme = () => {
    const themes: ('amber' | 'blue' | 'purple' | 'emerald')[] = ['amber', 'blue', 'purple', 'emerald'];
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme === 'amber' ? '' : nextTheme);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass-panel rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'bg-black/60 border-white/10' : 'bg-transparent border-transparent'}`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-black text-lg transition-transform group-hover:rotate-12">
              B
            </div>
            <span className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">BITTU<span className="text-primary">.</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 pr-4 border-r border-white/10">
              <a href="https://github.com/bittush8789" target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-400 hover:text-primary transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/bittu-kumar-mlops/" target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-400 hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center border-white/10 hover:border-primary/50 transition-all duration-300 group"
                aria-label="Toggle Theme"
              >
                <div className={`w-4 h-4 rounded-full transition-colors duration-500 ${
                  theme === 'amber' ? 'bg-[#FFB319]' : 
                  theme === 'blue' ? 'bg-[#38bdf8]' : 
                  theme === 'purple' ? 'bg-[#c084fc]' : 'bg-[#34d399]'
                } shadow-[0_0_10px_currentColor]`} />
              </button>

              <a 
                href="#contact" 
                className="px-6 py-2 bg-white text-black font-bold rounded-full text-xs hover:bg-primary transition-colors transition-transform active:scale-95"
              >
                HIRE ME
              </a>
            </div>

            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-6 right-6 mt-4 glass-panel rounded-3xl p-8 z-50 bordr-white/10"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-black italic hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 border-t border-white/10 flex gap-6">
                <a href="#" className="flex items-center gap-2 text-sm font-bold text-neutral-400">
                   <Mail size={16} /> bittukumar@example.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
