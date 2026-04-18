import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, Instagram, PenTool } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import { Magnetic } from './ui/magnetic';

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

  const [theme, setTheme] = useState<'amber' | 'blue' | 'purple' | 'emerald' | 'rose' | 'cyan' | 'orange' | 'silver' | 'indigo' | 'teal' | 'yellow' | 'crimson' | 'lime' | 'fuchsia' | 'gold' | 'ruby' | 'coral' | 'mint' | 'lavender' | 'topaz'>('amber');

  const toggleTheme = () => {
    const themes: ('amber' | 'blue' | 'purple' | 'emerald' | 'rose' | 'cyan' | 'orange' | 'silver' | 'indigo' | 'teal' | 'yellow' | 'crimson' | 'lime' | 'fuchsia' | 'gold' | 'ruby' | 'coral' | 'mint' | 'lavender' | 'topaz')[] = 
      ['amber', 'blue', 'purple', 'emerald', 'rose', 'cyan', 'orange', 'silver', 'indigo', 'teal', 'yellow', 'crimson', 'lime', 'fuchsia', 'gold', 'ruby', 'coral', 'mint', 'lavender', 'topaz'];
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme === 'amber' ? '' : nextTheme);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass-panel rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'bg-background/60 border-black/10 shadow-lg' : 'bg-transparent border-transparent'}`}>
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
            <div className="hidden md:flex items-center gap-3 pr-4 border-r border-black/10">
              <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-400 hover:text-primary transition-colors">
                <Github size={18} />
              </a>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-400 hover:text-primary transition-colors" title="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-400 hover:text-primary transition-colors" title="Instagram">
                <Instagram size={18} />
              </a>
              <a href={CONTACT_INFO.hashnode} target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-400 hover:text-primary transition-colors" title="Hashnode Blog">
                <PenTool size={18} />
              </a>
            </div>
            
            <div className="flex items-center gap-1 md:gap-2">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center border-white/10 hover:border-primary/50 transition-all duration-300 group"
                aria-label="Toggle Theme"
              >
                <div className={`w-4 h-4 rounded-full transition-colors duration-500 shadow-[0_0_10px_currentColor] ${
                  theme === 'amber' ? 'bg-[#FFB319]' : 
                  theme === 'blue' ? 'bg-[#38bdf8]' : 
                  theme === 'purple' ? 'bg-[#c084fc]' : 
                  theme === 'emerald' ? 'bg-[#34d399]' :
                  theme === 'rose' ? 'bg-[#fb7185]' :
                  theme === 'cyan' ? 'bg-[#22d3ee]' :
                  theme === 'orange' ? 'bg-[#fb923c]' :
                  theme === 'silver' ? 'bg-[#94a3b8]' : 
                  theme === 'indigo' ? 'bg-[#818cf8]' :
                  theme === 'teal' ? 'bg-[#2dd4bf]' :
                  theme === 'yellow' ? 'bg-[#facc15]' :
                  theme === 'crimson' ? 'bg-[#dc2626]' :
                  theme === 'lime' ? 'bg-[#a3e635]' : 
                  theme === 'fuchsia' ? 'bg-[#d946ef]' :
                  theme === 'gold' ? 'bg-[#fbbf24]' :
                  theme === 'ruby' ? 'bg-[#e11d48]' :
                  theme === 'coral' ? 'bg-[#ff7f50]' :
                  theme === 'mint' ? 'bg-[#10b981]' :
                  theme === 'lavender' ? 'bg-[#a78bfa]' : 'bg-[#ffc87c]'
                }`} />
              </button>

              <div className="hidden sm:block">
                <Magnetic>
                  <a 
                    href="#contact" 
                    className="px-6 py-2 bg-black text-white font-bold rounded-full text-xs hover:bg-primary hover:text-black transition-all active:scale-95 shadow-lg border border-white/10"
                  >
                    HIRE ME
                  </a>
                </Magnetic>
              </div>
            </div>

            <button
              className="lg:hidden p-2 text-foreground"
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
            className="lg:hidden absolute top-full left-6 right-6 mt-4 glass-panel rounded-3xl p-8 z-50 border border-white/10"
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
              <div className="pt-6 border-t border-black/10 flex gap-6">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 text-sm font-bold text-neutral-400">
                   <Mail size={16} /> {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
