import { Github, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 relative bg-background border-t border-white/5 overflow-hidden font-sans transition-colors duration-700">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-6">
            <a href="#" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-black text-xl shadow-[0_0_20px_rgba(255,179,25,0.4)]">
                B
              </div>
              <span className="font-bold text-2xl tracking-tighter uppercase">BITTU<span className="text-primary text-4xl leading-[0]">.</span></span>
            </a>
            <p className="text-neutral-500 text-lg max-w-sm font-medium leading-relaxed">
              Designing and building the next generation of cloud infrastructure and intelligent systems.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-black tracking-[0.4em] uppercase text-neutral-400 mb-8 border-l-2 border-primary/30 pl-4">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-neutral-500 hover:text-primary font-bold tracking-[0.2em] text-[11px] uppercase transition-all duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-black tracking-[0.4em] uppercase text-neutral-400 mb-8 border-l-2 border-primary/30 pl-4">Social</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://github.com/bittush8789" className="text-neutral-500 hover:text-white font-bold tracking-[0.2em] text-[11px] uppercase transition-all duration-300 flex items-center gap-3">
                  <Github size={14} className="text-primary" /> Github
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/bittu-kumar-mlops/" className="text-neutral-500 hover:text-white font-bold tracking-[0.2em] text-[11px] uppercase transition-all duration-300 flex items-center gap-3">
                  <Linkedin size={14} className="text-primary" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
          <p className="text-[10px] font-black tracking-[0.3em] text-neutral-700 uppercase">
            © {new Date().getFullYear()} BITTU KUMAR • ALL RIGHTS RESERVED
          </p>
          
          <button 
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border-white/5 hover:bg-primary hover:text-black transition-all duration-500 group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <ArrowUp size={20} className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
