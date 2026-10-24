import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GithubIcon, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling if navigating with a hash from another page
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const navLinks = [
    { name: 'Work', to: '/#work' },
    { name: 'Projects', to: '/projects' },
    { name: 'About', to: '/#about' },
    { name: 'Skills', to: '/#skills' },
    { name: 'Contact', to: '/#contact' },
  ];

  const handleNavClick = (to) => {
    setIsMobileMenuOpen(false);
    if (to.startsWith('/#')) {
      const id = to.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm' 
          : 'py-4 sm:py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link 
          to="/"
          className="text-2xl sm:text-3xl font-display font-extrabold tracking-tighter"
        >
          H<span className="text-accent-indigo">K</span>.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => handleNavClick(link.to)}
              className="nav-link group text-sm font-semibold text-secondary hover:text-slate-900 dark:hover:text-white transition-colors relative py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-indigo transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-2 pl-6 border-l border-slate-200 dark:border-slate-800">
            <a 
              href="https://github.com/harikarthick12" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-secondary hover:text-primary transition-colors p-1"
              aria-label="GitHub"
            >
              <GithubIcon size={19} />
            </a>
            <a 
              href="https://linkedin.com/in/harikarthick12" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-secondary hover:text-primary transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2.5 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 rounded-xl shadow-sm text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="text-2xl font-display font-bold text-secondary hover:text-primary transition-all"
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex items-center gap-5 pt-4 border-t border-slate-200 dark:border-slate-800 text-secondary">
                <a 
                  href="https://github.com/harikarthick12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold"
                >
                  <GithubIcon size={18} /> GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/harikarthick12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
