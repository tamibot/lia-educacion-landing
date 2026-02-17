import React, { useState } from 'react';
import { Check, Star, Zap, Building } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6 animate-pulse">
            🔥 Oferta de Lanzamiento (Solo 3 Meses)
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Invierte en Resultados. <br />
            <span className="text-blue-600">No en promesas.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            Precios especiales para early adopters. Cancela cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

          {/* Plan 1: Solo Bot (Entry) */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-lg hover:shadow-xl transition-all relative">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-4xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Solo Bot IA</h3>
              <p className="text-gray-500 text-sm mt-2">Automatiza tu atención y ventas por WhatsApp.</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through text-lg">$900</span>
                <span className="text-4xl font-black text-gray-900">$500</span>
              </div>
              <span className="text-gray-400 text-sm font-medium">/mes</span>
            </div>

            <button onClick={() => window.location.hash = '#dashboard'} className="w-full btn-outline mb-8 border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-gray-300">
              Contratar Bot
            </button>

            <ul className="space-y-3 text-sm font-medium text-gray-600">
              <li className="flex items-center gap-3"><Check size={16} className="text-blue-500" /> Respuestas 24/7</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-blue-500" /> Cualificación de Leads</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-blue-500" /> Agenda de Citas</li>
              <li className="flex items-center gap-3 text-gray-400"><span className="text-gray-300">•</span> Sin LMS ni Comunidad</li>
            </ul>
          </div>

          {/* Plan 2: Bundle (Hero) */}
          <div className="bg-gray-900 p-8 rounded-[2.5rem] border border-gray-800 shadow-2xl relative overflow-hidden transform scale-105 z-10">
            <div className="absolute top-0 right-0 bg-brand-secondary text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl z-20">
              MEJOR VALOR
            </div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary rounded-full blur-[80px] opacity-20"></div>

            <div className="mb-8 relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 shadow-lg backdrop-blur-sm">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Full Suite + Agente</h3>
              <p className="text-gray-400 text-sm mt-2">Todo el poder de LIA. Ventas automáticas y gestión total.</p>
            </div>

            <div className="mb-8 relative z-10">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 line-through text-xl">$1200</span>
                <span className="text-5xl font-black text-white">$700</span>
              </div>
              <span className="text-gray-500 text-sm font-medium">/mes</span>
            </div>

            <button onClick={() => window.location.hash = '#dashboard'} className="w-full btn-primary mb-8 bg-brand-secondary hover:opacity-90 shadow-lg text-white border-none">
              Quiero el Pack Completo
            </button>

            <ul className="space-y-4 text-sm font-medium text-gray-300 relative z-10">
              <li className="flex items-center gap-3"><Check size={18} className="text-brand-secondary" /> <b>Todo lo del plan Agente</b></li>
              <li className="flex items-center gap-3"><Check size={18} className="text-brand-secondary" /> <b>Todo lo del plan Plataforma</b></li>
              <li className="flex items-center gap-3"><Check size={18} className="text-brand-secondary" /> Setup Prioritario</li>
              <li className="flex items-center gap-3"><Check size={18} className="text-brand-secondary" /> Auditoría Mensual</li>
            </ul>
          </div>

          {/* Plan 3: Platform Only */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-lg hover:shadow-xl transition-all relative">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-4xl">🏫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Solo Plataforma</h3>
              <p className="text-gray-500 text-sm mt-2">Hosting de cursos, comunidad y email marketing.</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through text-lg">$500</span>
                <span className="text-4xl font-black text-gray-900">$300</span>
              </div>
              <span className="text-gray-400 text-sm font-medium">/mes</span>
            </div>

            <button onClick={() => window.location.hash = '#dashboard'} className="w-full btn-outline mb-8">
              Comenzar Ahora
            </button>

            <ul className="space-y-3 text-sm font-medium text-gray-600">
              <li className="flex items-center gap-3"><Check size={16} className="text-green-500" /> Hosting Ilimitado</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-green-500" /> Comunidad (Skool style)</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-green-500" /> Email Marketing</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Pricing;
