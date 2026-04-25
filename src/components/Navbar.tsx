import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Instagram, PenTool, Sun, Moon } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };



  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass-panel rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center justify-between ${isScrolled ? 'bg-background/60 border-black/10 shadow-lg' : 'bg-transparent border-transparent'}`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-black text-lg transition-all duration-300 group-hover:rotate-[10deg]">
              B
            </div>
            <span className="font-bold text-lg tracking-tight group-hover:text-primary transition-all duration-300">BITTU<span className="text-primary">.</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold tracking-widest uppercase text-neutral-400 hover:text-white transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 pr-4 border-r border-black/10">
              <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-400 hover:text-primary transition-all duration-300 hover:scale-110">
                <Github size={18} />
              </a>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-400 hover:text-primary transition-none" title="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-400 hover:text-primary transition-none" title="Instagram">
                <Instagram size={18} />
              </a>
              <a href={CONTACT_INFO.hashnode} target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-400 hover:text-primary transition-none" title="Hashnode Blog">
                <PenTool size={18} />
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <a 
                  href="#contact" 
                  className="px-6 py-2 bg-primary text-black font-black rounded-full text-xs hover:bg-white transition-all duration-300 shadow-lg border border-white/10"
                >
                  HIRE ME
                </a>
              </div>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full transition-all duration-500 shadow-lg border border-white/10 group flex items-center justify-center overflow-hidden relative ${
                  theme === 'dark' 
                  ? 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white' 
                  : 'bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-300 text-black'
                }`}
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                <div className="relative z-10 transition-transform duration-500 group-hover:rotate-12">
                  {theme === 'dark' ? <Moon size={18} fill="currentColor" /> : <Sun size={18} fill="currentColor" />}
                </div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Static */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden absolute top-full left-6 right-6 mt-4 glass-panel rounded-3xl p-8 z-50 border border-white/10"
        >
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-black italic hover:text-primary transition-none"
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
        </div>
      )}
    </nav>
  );
}
