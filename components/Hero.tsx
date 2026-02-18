import React from 'react';
import { Play, ArrowRight, TrendingUp, Users, FileText, Smile } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const Hero: React.FC = () => {
  // Simple hook for counting up animation
  const useCountUp = (end: number, duration: number = 2000, start: number = 0) => {
    const [count, setCount] = React.useState(start);

    React.useEffect(() => {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function (easeOutExpo)
        const easeOut = (x: number): number => {
          return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
        };

        setCount(Math.floor(easeOut(progress) * (end - start) + start));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration, start]);

    return count;
  };

  const countRoi = useCountUp(4, 2500);
  const countRate = useCountUp(30, 2500);
  const countLeads = useCountUp(500, 2500);

  return (
    <div className="relative pt-28 pb-10 md:pt-40 md:pb-12 overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-blue-50/80 via-indigo-50/40 to-white rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-5 md:px-12 max-w-6xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8 items-center">

          {/* Left Column: Copy & CTAs */}
          <div className="text-center lg:text-left z-20">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-5 md:mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              ⚡IA que Vende y Atiende 24/7
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter leading-[1.1]">
              El Chatbot con IA que <br className="hidden md:block" />
              Cierra Ventas <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Educativas por WhatsApp.</span>
            </h1>

            <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Automatiza tu equipo de admisiones. LIA atiende aspirantes, califica perfiles y cierra matrículas 24/7.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button
                onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quisiera%20mas%20informaci%C3%B3n%20de%20LIA%20Bot', '_blank')}
                className="group relative overflow-hidden text-white px-5 py-2.5 rounded-full font-bold text-base hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap shadow-[0_4px_14px_rgba(255,90,31,0.25)]"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                Contratar Agente
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quisiera%20mas%20informaci%C3%B3n%20de%20LIA%20Bot', '_blank')}
                className="group bg-white text-gray-800 border-2 border-gray-100 px-5 py-2.5 rounded-full font-bold text-base hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <div className="bg-blue-50 p-1 rounded-full group-hover:bg-blue-100 transition-colors">
                  <Play className="w-3 h-3 text-blue-600 fill-current ml-0.5" />
                </div>
                Ver Demo en Vivo
              </button>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1 flex items-baseline">
                  <span className="text-blue-600 mr-1">x</span>
                  <span>{countRoi}</span>
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">ROI en Ads</div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1 flex items-baseline">
                  <span>{countRate}</span>
                  <span className="text-blue-600 text-2xl ml-1">%</span>
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Tasa de Cierre</div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1 flex items-baseline">
                  <span className="text-blue-600 mr-1">+</span>
                  <span>{countLeads}</span>
                  <span className="text-xl ml-0.5">k</span>
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Leads Gestionados</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-scale-in perspective-1000">

            {/* Mockup Wrapper: Constrains width so absolute items align relative to the phone, preventing overlap/drift */}
            <div className="relative w-[250px] mx-auto z-10 transform transition-transform duration-700 hover:rotate-y-12 hover:rotate-x-12">

              <PhoneMockup className="shadow-2xl">

                {/* Custom Chat UI inside Mockup */}
                <div className="bg-[#E5DDD5] h-full flex flex-col font-sans relative overflow-hidden">

                  {/* Header - Increased height/padding for Notch */}
                  <div className="bg-[#075E54] h-20 pt-8 px-3 flex items-center justify-between shadow-md shrink-0 z-20 relative">
                    <div className="flex items-center gap-3 text-white">
                      <div className="text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer">
                        <ArrowRight className="w-5 h-5 rotate-180" />
                      </div>

                      {/* Avatar: Emoji as requested */}
                      <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center relative shadow-sm">
                        <span className="text-lg">🤖</span>
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#075E54]"></div>
                      </div>

                      <div className="flex flex-col -space-y-0.5">
                        <span className="font-bold text-sm leading-tight">LIA Agente</span>
                        <span className="text-[10px] text-green-100 opacity-90">En línea</span>
                      </div>
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-opacity-10 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] scrollbar-thin scrollbar-thumb-gray-300">

                    {/* Bot Message */}
                    <div className="flex justify-start animate-fade-in-right">
                      <div className="bg-white rounded-2xl rounded-tl-none p-2.5 max-w-[90%] shadow-sm text-xs relative">
                        <span className="text-gray-800 leading-snug">Hola, quiero info sobre el Diplomado en Marketing. 🎓</span>
                        <span className="text-[9px] text-gray-400 absolute bottom-0.5 right-2">10:42 AM</span>
                      </div>
                    </div>

                    {/* LIA Message (File) - Restored */}
                    <div className="flex justify-end animate-fade-in-left delay-400">
                      <div className="bg-[#dcf8c6] rounded-2xl rounded-tr-none p-2 max-w-[90%] shadow-sm text-xs relative min-w-[180px]">
                        <div className="flex items-center gap-2 bg-green-50/50 p-2 rounded-xl mb-1">
                          <div className="bg-red-100 p-1.5 rounded-lg text-red-500">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-medium text-gray-900 text-[10px]">Brochure_2024.pdf</span>
                            <span className="text-[9px] text-gray-500">3.2 MB • PDF</span>
                          </div>
                        </div>
                        <span className="text-[9px] text-gray-500 flex justify-end gap-1 items-center">
                          10:42 AM <span className="text-blue-400"><TrendingUp className="w-3 h-3" /></span>
                        </span>
                      </div>
                    </div>

                    {/* LIA Sales Pitch */}
                    <div className="flex justify-end animate-fade-in-left delay-700">
                      <div className="bg-[#dcf8c6] rounded-2xl rounded-tr-none p-2.5 max-w-[90%] shadow-sm text-xs relative">
                        <span className="text-gray-800 leading-snug">Te comparto el temario. 🚀 Si te inscribes hoy, accedes a un <b>30% de dscto</b>.</span>
                        <span className="text-[9px] text-gray-500 absolute bottom-0.5 right-2">10:42 AM</span>
                      </div>
                    </div>

                    {/* User Reply */}
                    <div className="flex justify-start animate-fade-in-right delay-1000">
                      <div className="bg-white rounded-2xl rounded-tl-none p-2.5 max-w-[90%] shadow-sm text-xs relative">
                        <span className="text-gray-800 leading-snug">Me interesa, quiero aprovechar el descuento.</span>
                        <span className="text-[9px] text-gray-400 absolute bottom-0.5 right-2">10:43 AM</span>
                      </div>
                    </div>

                    {/* Typing Animation */}
                    <div className="flex justify-end animate-fade-in-left delay-[1200ms] duration-500 fade-out-after-2s" style={{ animationFillMode: 'forwards' }}>
                      <div className="bg-[#dcf8c6] rounded-2xl rounded-tr-none p-2 w-12 shadow-sm relative flex items-center justify-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-bounce delay-75"></div>
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-bounce delay-150"></div>
                      </div>
                    </div>

                    {/* LIA Answer (Advisor Handoff) */}
                    <div className="flex justify-end animate-fade-in-left delay-[2000ms]">
                      <div className="bg-[#dcf8c6] rounded-2xl rounded-tr-none p-2.5 max-w-[90%] shadow-sm text-xs relative">
                        <span className="text-gray-800 leading-snug">Perfecto. Te estoy agendando una <b>cita prioritaria</b> con un asesor educativo para validar tu perfil. 👨‍💼📅</span>
                        <span className="text-[9px] text-gray-500 absolute bottom-0.5 right-2">10:43 AM</span>
                      </div>
                    </div>

                  </div>

                  {/* Input Area - Rounded & Polished */}
                  <div className="bg-[#F0F2F5] p-2 flex items-center gap-2 z-20 relative">
                    <div className="flex-1 bg-white rounded-full px-3 py-2 text-xs text-gray-400 shadow-sm border border-gray-100 flex items-center justify-between whitespace-nowrap overflow-hidden">
                      <span>Escribe un mensaje...</span>
                      <Smile className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                    </div>
                    <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center text-white p-2 shadow-md hover:scale-105 transition-transform cursor-pointer shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full opacity-50 z-30"></div>
                </div>
              </PhoneMockup>

              {/* Floating Elements - Positioned absolute relative to the 250px phone wrapper */}
              {/* "Tasa de respuesta" - Left */}
              <div className="hidden md:flex absolute top-[20%] -left-[180px] bg-white/90 backdrop-blur-md p-3 pr-5 rounded-2xl shadow-xl border border-white/50 items-center gap-3 animate-float delay-100 z-30 w-max hover:scale-105 transition-transform">
                <div className="bg-green-100/80 p-2.5 rounded-xl text-green-600 shadow-inner">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Tasa de Respuesta</div>
                  <div className="text-base font-black text-gray-900 leading-none">Inmediata</div>
                </div>
              </div>

              {/* "Productividad" - Right */}
              <div className="hidden md:flex absolute bottom-[25%] -right-[160px] bg-white/90 backdrop-blur-md p-3 pr-5 rounded-2xl shadow-xl border border-white/50 items-center gap-3 animate-float delay-500 z-30 w-max hover:scale-105 transition-transform">
                <div className="bg-blue-100/80 p-2.5 rounded-xl text-blue-600 shadow-inner">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Productividad</div>
                  <div className="text-base font-black text-gray-900 leading-none">x4 vs Humano</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
