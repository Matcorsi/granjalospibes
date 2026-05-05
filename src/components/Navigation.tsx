import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [targetSection, setTargetSection] = useState(null);

  // Detect scroll navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 👇 SCROLL después de cerrar menú (LA CLAVE)
  useEffect(() => {
    if (!isMobileMenuOpen && targetSection) {
      const el = document.querySelector(targetSection) as HTMLElement | null;

      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      setTargetSection(null);
    }
  }, [isMobileMenuOpen, targetSection]);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Historia', href: '#historia' },
    { name: 'Novedades', href: '#novedades' },
    { name: 'Padrinos', href: '#apadrinar' },
    { name: 'Equipo', href: '#team' },
    { name: 'Contacto', href: '#contact' }
  ];

  const handleMobileClick = (e, href) => {
    e.preventDefault();
    setTargetSection(href);       // guardo destino
    setIsMobileMenuOpen(false);  // cierro menú
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <img src="/images/logo.jpg" className="h-10 w-auto" />
            <span
              className={`font-serif text-1xl font-bold ${
                isScrolled ? 'text-earth' : 'text-white'
              }`}
            >
              GRANJA LOS PIBES
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-verde ${
                  isScrolled ? 'text-earth' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}

            <Button
              className="bg-verde hover:bg-green-700"
              size="sm"
              onClick={() =>
                document
                  .getElementById('apadrinar')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Donar
            </Button>
          </div>

          {/* Mobile button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${
                isScrolled ? 'text-earth' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-cream border-t overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleMobileClick(e, link.href)}
                  className="block px-3 py-3 text-earth hover:bg-cream-dark rounded-md"
                >
                  {link.name}
                </a>
              ))}

              <Button
                className="w-full mt-3"
                onClick={(e) => handleMobileClick(e, '#apadrinar')}
              >
                Donar
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}