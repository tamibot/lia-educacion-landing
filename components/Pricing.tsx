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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Plan 1: Solo Bot (Entry) */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-lg hover:shadow-xl transition-all relative flex flex-col items-center text-center">
            <div className="mb-6 flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-4xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Solo Bot IA</h3>
              <p className="text-gray-500 text-sm mt-2">Automatiza tu atención y ventas por WhatsApp.</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-center gap-2">
                <span className="text-gray-400 line-through text-lg">$900</span>
                <span className="text-4xl font-black text-gray-900">$500</span>
              </div>
              <span className="text-gray-400 text-sm font-medium">USD / mes</span>
            </div>

            <button onClick={() => window.location.hash = '#dashboard'} className="w-full py-4 rounded-full font-bold text-lg mb-8 transition-all duration-300 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:scale-[1.02] shadow-sm">
              Contratar Bot
            </button>

            <ul className="space-y-4 text-sm font-medium text-gray-600 min-h-[220px] w-full">
              <li className="flex items-center justify-center gap-3"><Check size={20} className="text-blue-600 shrink-0" /> Respuestas 24/7</li>
              <li className="flex items-center justify-center gap-3"><Check size={20} className="text-blue-600 shrink-0" /> Cualificación de Leads</li>
              <li className="flex items-center justify-center gap-3"><Check size={20} className="text-blue-600 shrink-0" /> Agenda de Citas</li>
              <li className="flex items-center justify-center gap-3"><Check size={20} className="text-blue-600 shrink-0" /> Seguimiento automático</li>
              <li className="flex items-center justify-center gap-3"><Check size={20} className="text-blue-600 shrink-0" /> Derivación con asesores</li>
              <li className="flex items-center justify-center gap-3"><Check size={20} className="text-blue-600 shrink-0" /> Usuarios y contactos ilimitados</li>
              <li className="flex items-center justify-center gap-3"><Check size={20} className="text-blue-600 shrink-0" /> Integración con CRM</li>
              <li className="flex items-center justify-center gap-3"><Check size={20} className="text-blue-600 shrink-0" /> Reportes y Analíticas</li>
            </ul>
          </div>

          {/* Plan 2: Bundle (Hero) */}
          <div className="bg-[#007AFF] p-8 rounded-[2.5rem] border border-blue-500 shadow-2xl relative overflow-hidden transform scale-105 z-10 transition-transform duration-500 hover:scale-[1.07] flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 bg-white text-blue-600 text-xs font-bold px-4 py-1.5 rounded-bl-xl z-20 shadow-sm">
              MEJOR VALOR
            </div>

            {/* Animated glowing effect */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-[80px] opacity-20 animate-pulse"></div>

            <div className="mb-8 relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg backdrop-blur-sm">
                <span className="text-4xl text-white">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Full Suite + Agente</h3>
              <p className="text-white/90 text-sm mt-2">Todo el poder de LIA. Ventas automáticas y gestión total.</p>
            </div>

            <div className="mb-8 relative z-10">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white/60 line-through text-xl">$1200</span>
                <span className="text-5xl font-black text-white">$700</span>
              </div>
              <span className="text-white/80 text-sm font-medium">USD / mes</span>
            </div>

            <button onClick={() => window.location.hash = '#dashboard'} className="w-full py-4 rounded-full font-bold text-lg mb-8 transition-all duration-300 bg-white text-blue-600 hover:bg-gray-50 hover:scale-[1.02] shadow-lg border-2 border-transparent">
              Quiero el Pack Completo
            </button>

            <ul className="space-y-4 text-sm font-medium text-white relative z-10 min-h-[220px] w-full">
              <li className="flex items-center justify-center gap-3"><div className="bg-white/20 p-1 rounded-full"><Check size={14} className="text-white" /></div> <b>Todo lo del plan Agente</b></li>
              <li className="flex items-center justify-center gap-3"><div className="bg-white/20 p-1 rounded-full"><Check size={14} className="text-white" /></div> <b>Todo lo del plan Plataforma</b></li>
              <li className="flex items-center justify-center gap-3"><div className="bg-white/20 p-1 rounded-full"><Check size={14} className="text-white" /></div> Setup Prioritario</li>
              <li className="flex items-center justify-center gap-3"><div className="bg-white/20 p-1 rounded-full"><Check size={14} className="text-white" /></div> Auditoría Mensual</li>
            </ul>
          </div>

          {/* Plan 3: Platform Only */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-lg hover:shadow-xl transition-all relative flex flex-col items-center text-center">
            <div className="mb-6 flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-4xl">🏫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Solo Plataforma</h3>
              <p className="text-gray-500 text-sm mt-2">Hosting de cursos, comunidad y email marketing.</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-center gap-2">
                <span className="text-gray-400 line-through text-lg">$500</span>
                <span className="text-4xl font-black text-gray-900">$300</span>
              </div>
              <span className="text-gray-400 text-sm font-medium">USD / mes</span>
            </div>

            <button onClick={() => window.location.hash = '#dashboard'} className="w-full py-4 rounded-full font-bold text-lg mb-8 transition-all duration-300 bg-gray-50 text-gray-800 hover:bg-gray-100 hover:scale-[1.02] shadow-sm border border-gray-200">
              Comenzar Ahora
            </button>

            <ul className="space-y-4 text-sm font-medium text-gray-600 min-h-[220px] w-full">
              <li className="flex items-center justify-center gap-3"><Check size={20} className="text-green-500 shrink-0" /> Hosting Ilimitado</li>
              <li className="flex items-center justify-center gap-3"><Check size={20} className="text-green-500 shrink-0" /> Cursos Ilimitados</li>
              <li className="flex items-center justify-center gap-3"><Check size={20} className="text-green-500 shrink-0" /> Comunidad (Skool style)</li>
              <li className="flex items-center justify-center gap-3"><Check size={20} className="text-green-500 shrink-0" /> Email Marketing</li>
              <li className="flex items-center justify-center gap-3"><Check size={20} className="text-green-500 shrink-0" /> 0% Comisiones por venta</li>
              <li className="flex items-center justify-center gap-3"><Check size={20} className="text-green-500 shrink-0" /> Certificados Automáticos</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm bg-gray-50 inline-block px-6 py-3 rounded-xl border border-gray-100">
            ⚠️ <b>Nota:</b> Los costos de la <span className="text-gray-700 font-bold">API de WhatsApp</span> (Meta) y los <span className="text-gray-700 font-bold">tokens de IA</span> (OpenAI/Gemini) no están incluidos y se pagan según consumo.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
