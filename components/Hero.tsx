import React from 'react';
import { ArrowRight, CheckCircle2, Play, Star, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-50/50 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-orange-50/50 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-5 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold mb-8 animate-fade-in shadow-sm">
              <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
              <span>La IA que Cierra Ventas por Ti</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] text-gray-900 mb-8 tracking-tight font-display">
              Vende tu Curso <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Mientras Duermes.</span>
            </h1>
            
            <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              LIA es el primer <span className="text-gray-900 font-bold">Agente de Ventas con IA</span> que prospecta, califica y cierra alumnos por WhatsApp, 24/7. Sin sueldos. Sin descansos.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <button 
                onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quisiera%20mas%20informaci%C3%B3n%20de%20LIA%20Bot', '_blank')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 text-white shadow-xl shadow-orange-500/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-orange-500 to-red-500"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2">
                  Contratar Agente <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quisiera%20mas%20informaci%C3%B3n%20de%20LIA%20Bot', '_blank')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group"
              >
                <div className="bg-blue-50 p-1.5 rounded-full group-hover:bg-blue-100 transition-colors">
                  <Play className="w-4 h-4 text-blue-600 fill-current ml-0.5" />
                </div>
                Ver Demo en Vivo
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-semibold text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Instalación en 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Sin Comisiones por Venta</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Soporte Dedicado</span>
              </div>
            </div>
          </div>

          {/* Image/Mockup Content */}
          <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none animate-fade-in-up delay-200">
            <div className="relative z-10 bg-white rounded-[2.5rem] p-4 shadow-2xl border-8 border-gray-900 mx-auto w-full max-w-[340px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-2xl z-20"></div>
              
              <div className="bg-[#E5DDD5] rounded-[1.8rem] overflow-hidden h-[600px] relative flex flex-col">
                {/* WhatsApp Header */}
                <div className="bg-[#075E54] p-4 pt-12 text-white flex items-center gap-3 shadow-md z-10">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold relative">
                    L
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#075E54]"></div>
                  </div>
                  <div>
                    <div className="font-bold text-base">LIA Agente 🤖</div>
                    <div className="text-[11px] opacity-80">En línea</div>
                  </div>
                  <div className="ml-auto flex gap-4 text-white/80">
                    <span className="sr-only">Menu</span>
                    <MessageCircle size={20} />
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[url('https://camo.githubusercontent.com/854a93c27d64274c4f8f5a0b6ec36ee1d053cfcd934eac6c63bed9eaef9764bd/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131303234303838396634342e706e67')] opacity-90">
                  <div className="flex justify-center mb-4">
                    <span className="bg-[#DCF8C6] text-gray-600 text-[10px] px-2 py-1 rounded-md shadow-sm uppercase font-bold">Hoy</span>
                  </div>

                  {/* Message 1 (User) */}
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] text-sm text-gray-800 relative">
                      <p>Hola, quiero información sobre el curso de React ⚛️</p>
                      <span className="text-[10px] text-gray-500 block text-right mt-1">10:42 AM <span className="text-blue-500">✓✓</span></span>
                    </div>
                  </div>

                  {/* Message 2 (LIA) */}
                  <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-sm text-gray-800">
                      <p>¡Hola! 👋 Claro que sí. El curso de <strong>React Pro</strong> es ideal para developers que quieren escalar a Senior.</p>
                      <p className="mt-2">🎯 <strong>Aprenderás:</strong> Hooks, Redux, Next.js y Patrones de Diseño.</p>
                      <p className="mt-2 text-xs italic text-gray-500">¿Te gustaría ver el temario completo?</p>
                      <span className="text-[10px] text-gray-500 block text-right mt-1">10:42 AM</span>
                    </div>
                  </div>

                   {/* Message 3 (User) */}
                   <div className="flex justify-end mt-2">
                    <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] text-sm text-gray-800 relative">
                      <p>Sí, por favor.</p>
                      <span className="text-[10px] text-gray-500 block text-right mt-1">10:43 AM <span className="text-blue-500">✓✓</span></span>
                    </div>
                  </div>

                   {/* Message 4 (LIA - PDF) */}
                   <div className="flex justify-start">
                    <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-sm text-gray-800">
                       <div className="flex items-center gap-3 bg-red-50 p-2 rounded-md border border-red-100 mb-2 cursor-pointer hover:bg-red-100 transition-colors">
                            <div className="bg-red-500 text-white p-2 rounded-lg font-bold text-xs">PDF</div>
                            <div>
                                <div className="font-bold text-gray-900 text-xs">Temario_React_Pro.pdf</div>
                                <div className="text-[10px] text-gray-500">1.2 MB • 14 Páginas</div>
                            </div>
                       </div>
                      <p>Aquí tienes el archivo 📄. Revisa la página 5, ahí están los bonos exclusivos.</p>
                      <p className="mt-2">💡 <strong>Dato:</strong> Quedan solo <strong>3 cupos</strong> con el precio de preventa ($49 USD).</p>
                       
                       <div className="mt-3 grid grid-cols-2 gap-2">
                            <button className="bg-white border border-gray-200 text-blue-600 font-bold py-2 rounded-lg text-xs hover:bg-gray-50">Ver Precio</button>
                            <button className="bg-green-500 text-white font-bold py-2 rounded-lg text-xs hover:bg-green-600 shadow-sm">Inscribirme</button>
                       </div>

                      <span className="text-[10px] text-gray-500 block text-right mt-1">10:43 AM</span>
                    </div>
                  </div>

                </div>

                 {/* Input Area */}
                 <div className="bg-white p-3 flex items-center gap-2 border-t border-gray-200 z-20">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <span className="text-lg">+</span>
                    </div>
                    <div className="flex-1 bg-white border border-gray-200 rounded-full h-9 flex items-center px-4 text-sm text-gray-400">
                        Escribe un mensa...
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#075E54] flex items-center justify-center text-white shadow-sm">
                         <span className="text-xs">🎤</span>
                    </div>
                 </div>

              </div>
            </div>

            {/* Floating Elements (Decorative) */}
            <div className="absolute top-[20%] -right-12 md:-right-4 bg-white p-4 rounded-xl shadow-xl animate-float z-20 hidden md:block">
               <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <div className="font-bold text-gray-900 text-sm">Venta Cerrada</div>
                        <div className="text-xs text-gray-500">Hace 2 min • $97.00 USD</div>
                    </div>
               </div>
            </div>

             <div className="absolute bottom-[20%] -left-12 md:-left-4 bg-white p-4 rounded-xl shadow-xl animate-float-delayed z-20 hidden md:block">
               <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                        <MessageCircle size={24} />
                    </div>
                    <div>
                        <div className="font-bold text-gray-900 text-sm">30+ Chats Activos</div>
                        <div className="text-xs text-gray-500">LIA está respondiendo...</div>
                    </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
