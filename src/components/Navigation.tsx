import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Inicio',
    href: '#home'
  },
  {
    name: 'Nosotros',
    href: '#about'
  },
  {
    name: 'Historia',
    href: '#historia'
  },
  {
    name: 'Galería',
    href: '#galeria'
  },
  {
    name: 'Apadrinar',
    href: '#apadrinar'
  },
  {
    name: 'Contacto',
    href: '#contact'
  }];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div>
              <img src='../../public/images/logo.png' alt='Logo - Granja Los Pibes' className="h-10 w-10" />
            </div>
            <span
              className={`font-font text-2xl font-bold tracking-wide transition-colors ${isScrolled ? 'text-forest-dark' : 'text-white'}`}> Granja Los Pibes
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-green-500 ${isScrolled ? 'text-earth' : 'text-white/90'}`}>

                {link.name}
              </a>
            )}
            <Button
              variant={isScrolled ? 'primary' : 'secondary'}
              className='bg-green-500 hover:bg-green-700'
              size="sm"
              onClick={() =>
              document.getElementById('apadrinar')?.scrollIntoView({
                behavior: 'smooth'
              })
              }>

              Donar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${isScrolled ? 'text-earth hover:bg-cream-dark' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle menu">

              {isMobileMenuOpen ?
              <X className="h-6 w-6" /> :

              <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="lg:hidden bg-cream border-t border-cream-dark overflow-hidden">

            <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-earth hover:text-forest hover:bg-cream-dark rounded-md transition-colors">

                  {link.name}
                </a>
            )}
              <div className="pt-4">
                <Button
                className="w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}>

                  Donar
                </Button>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}