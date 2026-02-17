import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Producto', href: '#producto' },
    { name: 'Cómo Funciona', href: '#process' },
    { name: 'Resultados', href: '#solutions' },
    { name: 'Precios', href: '#precios' },
    { name: 'Plataforma', href: '#dashboard' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3 lg:py-4'}`}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className={`transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-gray-200/50 shadow-sm' : 'bg-transparent border-transparent'} border rounded-full px-5 py-2 md:px-8 md:py-3 flex items-center justify-between`}>

            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer z-50 relative" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-lg shadow-blue-500/20">L</div>
              <span className="text-lg font-black tracking-tighter text-gray-900">LIA<span className="text-blue-600">.AI</span></span>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3 z-50 relative">
              <button className="hidden sm:flex text-white px-5 py-2.5 rounded-full text-sm font-bold items-center gap-2 hover:opacity-90 transition-opacity shadow-lg" style={{ backgroundColor: 'var(--color-secondary)', boxShadow: '0 4px 14px rgba(255, 90, 31, 0.25)' }}>
                Agendar Demo
              </button>

              <button
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors bg-gray-100 rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <div className="flex-1 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-between text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
                <ChevronRight size={20} className="text-gray-400" />
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2">
              Empezar Ahora <ArrowRight size={20} />
            </button>
            <p className="text-center text-gray-400 text-sm">
              ¿Tienes dudas? <span className="text-blue-600 font-bold">Hablemos por WhatsApp</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
