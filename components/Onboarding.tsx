import React from 'react';
import { ArrowRight, Upload, BatteryCharging, Rocket } from 'lucide-react';

const Onboarding: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 mb-6 text-xs font-bold tracking-wide uppercase">
            🚀 Onboarding Express
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Vende en <span className="text-orange-500">48 Horas.</span> <br />
            Nosotros hacemos el trabajo pesado.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Olvídate de configuraciones técnicas infinitas.
            Tu única tarea es darnos la información de tus cursos. LIA se encarga de lo demás.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-1 bg-gradient-to-r from-gray-200 via-blue-200 to-gray-200 -z-10"></div>

          {/* Step 1 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center justify-center mx-auto mb-6 transition-transform text-6xl">
              📤
            </div>
            <div className="absolute top-6 right-6 text-5xl font-black text-blue-50 select-none">01</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Subes tu Info</h3>
            <p className="text-gray-500 text-center text-sm leading-relaxed">
              Carga tus PDFs, página web o simplemente cuéntanos sobre tu oferta. LIA lee y estructura todo en minutos.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-2xl shadow-blue-900/10 relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center justify-center mx-auto mb-6 transition-transform text-6xl">
              ⚡
            </div>
            <div className="absolute top-6 right-6 text-5xl font-black text-blue-50 select-none">02</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Entrenamos a LIA</h3>
            <p className="text-gray-500 text-center text-sm leading-relaxed">
              Personalizamos el tono de voz, las reglas de descuento y la estrategia de cierre. LIA se convierte en tu mejor vendedora.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center justify-center mx-auto mb-6 transition-transform text-6xl">
              🚀
            </div>
            <div className="absolute top-6 right-6 text-5xl font-black text-blue-50 select-none">03</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Despegamos</h3>
            <p className="text-gray-500 text-center text-sm leading-relaxed">
              Conectamos tu WhatsApp y lanzamos campañas. LIA empieza a recibir chats y cerrar ventas inmediatamente.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mx-auto">
            Quiero mi Lanzamiento Express <ArrowRight size={20} className="inline ml-2" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Onboarding;
