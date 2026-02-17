import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white border-t border-white/10 pt-12" style={{ backgroundColor: 'var(--color-primary)' }}>
      {/* Final CTA */}
      <div className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            ¿Lista para dejar de perder ventas? 🚀
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
            Activa tu Agente LIA hoy mismo. Tu primera venta automática podría ser esta misma semana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-blue-900 font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-white/20 hover:-translate-y-1 transition-all flex items-center gap-2">
              <Zap size={20} className="fill-blue-600 text-blue-600" /> Contratar a LIA <ArrowRight size={20} />
            </button>
            <button className="border border-blue-700/50 bg-blue-800/50 text-white font-medium text-lg px-8 py-4 rounded-xl hover:bg-blue-800 transition-colors flex items-center gap-2">
              💬 Hablar con Ventas
            </button>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-blue-800 py-10 bg-blue-950">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-lg">L</div>
              <span className="text-xl font-bold tracking-tight text-white">LIA<span className="text-blue-400">.AI</span></span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-blue-300">
              <a href="#producto" className="hover:text-white transition-colors">Producto</a>
              <a href="#herramientas" className="hover:text-white transition-colors">Herramientas</a>
              <a href="#proceso" className="hover:text-white transition-colors">Proceso</a>
              <a href="#precios" className="hover:text-white transition-colors">Precios</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>

            {/* Copyright */}
            <p className="text-sm font-medium text-blue-400/60">
              © {new Date().getFullYear()} LIA.AI. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
