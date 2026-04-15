import { Terminal, Github, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2 font-mono text-lg font-bold tracking-tighter">
            <div className="bg-muted p-1 rounded">
              <Terminal className="w-4 h-4 text-primary" />
            </div>
            <span>BITTU<span className="text-primary">.</span>KUMAR</span>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Github, href: 'https://github.com/bittush8789' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/bittu-kumar-54ab13254/' },
              { icon: Instagram, href: 'https://www.instagram.com/bittush8789/' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} Bittu Kumar. Built with React, Tailwind & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
