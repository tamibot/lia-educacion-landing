
import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Send, Signal, Wifi, Battery, ChevronLeft, MoreHorizontal, ChevronRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
    const [activeTab, setActiveTab] = useState('filtra');
    const containerRef = useRef<HTMLDivElement>(null);

    // IPhone Frame (Ultra Premium - duplicated from ContentShowcase)
    const IPhoneFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <div className="bg-black rounded-[2.5rem] md:rounded-[3rem] p-2.5 w-full max-w-[280px] h-[560px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] mx-auto border-[5px] border-gray-900 relative ring-1 ring-white/10 flex-shrink-0 transition-all duration-500 scale-90 lg:scale-100">
            {/* Action Button */}
            <div className="absolute top-24 -left-[2px] h-8 w-[3px] bg-gray-700 rounded-l-md"></div>
            {/* Volume Buttons */}
            <div className="absolute top-36 -left-[2px] h-12 w-[3px] bg-gray-700 rounded-l-md"></div>
            <div className="absolute top-52 -left-[2px] h-12 w-[3px] bg-gray-700 rounded-l-md"></div>
            {/* Power Button */}
            <div className="absolute top-40 -right-[2px] h-16 w-[3px] bg-gray-700 rounded-r-md"></div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-20">
                {/* Dynamic Island Elements */}
                <div className="absolute top-[6px] right-5 w-2 h-2 bg-gray-800 rounded-full"></div>
            </div>

            <div className="bg-white w-full h-full rounded-[2.5rem] overflow-hidden relative font-sans text-gray-900 flex flex-col">
                {children}

                {/* Home Indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-20 z-50"></div>
            </div>
        </div>
    );

    const steps = [
        {
            id: 'filtra',
            icon: "🔍",
            title: "1. Filtra",
            desc: "LIA califica a tus leads con preguntas profundas. Identifica experiencia, objetivos y presupuesto antes de pasártelos.",
            detail: "Realiza un perfilado automático. Si el lead no cumple con tus requisitos (ej. sin presupuesto o experiencia), LIA lo descalifica amablemente para proteger tu tiempo.",
            chat: [
                { type: 'bot', text: "¡Hola! 👋 Veo que quieres aplicar al Master. ¿Ya terminaste la universidad? 🎓" },
                { type: 'user', text: "Sí, soy egresado de Ingeniería.", time: "10:42 AM" },
                { type: 'bot', text: "Perfecto. ✅ ¿Y cuentas con los 3 años de experiencia laboral que solicita el programa? 💼", time: "10:42 AM" },
                { type: 'user', text: "Sí, tengo 3 años en desarrollo.", time: "10:43 AM" },
                { type: 'bot', text: "Excelente perfil. 🌟 Última pregunta: ¿Podrías iniciar clases este 26 de Agosto?", time: "10:43 AM" },
                { type: 'user', text: "Claro que sí.", time: "10:44 AM" },
                { type: 'bot', text: "Genial, cumples con todo. Te paso con un asesor para finalizar tu matrícula. 👇", time: "10:44 AM" }
            ]
        },
        {
            id: 'educa',
            icon: "🧠",
            title: "2. Educa",
            desc: "Responde dudas al instante. Envía temarios en PDF, explica módulos específicos y maneja objeciones.",
            detail: "No solo responde, sino que persuade. Envía casos de éxito, brochures y audios explicativos para aumentar la confianza y autoridad de tu marca.",
            chat: [
                { type: 'user', text: "¿Qué precio tiene?", time: "11:15 AM" },
                { type: 'bot', text: "El precio regular es de $497 USD, pero si te inscribes antes del viernes tienes un **40% OFF** ($297 USD). 🎁", time: "11:15 AM" },
                { type: 'user', text: "¿Me puedes enviar el temario completo?", time: "11:16 AM" },
                { type: 'file', text: "Syllabus_Data_2024.pdf", size: "2.4 MB", pages: "14 páginas", time: "11:16 AM" },
                { type: 'bot', text: "Aquí tienes. Revisa la página 8, ahí detallamos los proyectos de portafolio que crearás.", time: "11:16 AM" },
                { type: 'user', text: "¿Incluye certificado?", time: "11:17 AM" },
                { type: 'bot', text: "Sí, emitimos un certificado verificable en Blockchain al completar el 100%. 🎓", time: "11:17 AM" }
            ]
        },
        {
            id: 'persigue',
            icon: "🏃",
            title: "3. Persigue",
            desc: "LIA no se cansa. Si alguien no compra, le hace seguimiento por días con una secuencia estratégica.",
            detail: "Recupera hasta el 40% de las ventas perdidas. LIA detecta si el lead dejó de responder y activa disparadores psicológicos de urgencia y escasez.",
            chat: [
                { type: 'system', text: "📅 Día 1 (24h después)" },
                { type: 'bot', text: "Hola Carlos, vi que descargaste el temario pero no finalizaste tu inscripción. 👀", time: "09:30 AM" },
                { type: 'bot', text: "¿Te quedó alguna duda sobre el contenido?", time: "09:30 AM" },
                { type: 'system', text: "📅 Día 2" },
                { type: 'bot', text: "Carlos, solo quería recordarte que la beca del 40% expira mañana. ⏳", time: "11:00 AM" },
                { type: 'system', text: "📅 Día 3 (Cierre)" },
                { type: 'bot', text: "¿Te detiene el precio? Acabamos de habilitar **3 cuotas sin interés**. 👇", time: "16:00 PM" },
                { type: 'link', text: "lia.ai/checkout/cuotas", time: "16:00 PM" }
            ]
        },
        {
            id: 'cierra',
            icon: "🤝",
            title: "4. Cierra",
            desc: "LIA cierra la venta sola o agenda una llamada con tu equipo cuando el lead está hirviendo.",
            detail: "Tú decides el objetivo: Agendar en Calendly o enviar Link de Pago (Stripe/MercadoPago). LIA lo ejecuta cuando detecta la señal de compra.",
            chat: [
                { type: 'user', text: "Listo, ya hice el pago de la primera cuota.", time: "10:00 AM" },
                { type: 'bot', text: "¡Recibido! 🎉 Bienvenido a la academia.", time: "10:00 AM" },
                { type: 'bot', text: "Un asesor de éxito estudiantil te llamará en breve para tu onboarding.", time: "10:00 AM" },
                { type: 'system', text: "🔄 Chat transferido a Javier Gomez (Success Manager)" },
                { type: 'advisor', text: "Hola Carlos, soy Javier. ¿Tienes 5 minutos para configurar tu acceso? 👨‍💻", time: "10:05 AM" },
                { type: 'user', text: "Sí, claro.", time: "10:06 AM" },
                { type: 'advisor', text: "Te estoy llamando... 📞", time: "10:06 AM" }
            ]
        }
    ];

    // Sticky Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const visibleHeight = windowHeight * 0.9;
            const containerHeight = containerRef.current.offsetHeight - visibleHeight;

            let progress = (-rect.top + 20) / containerHeight;
            progress = Math.max(0, Math.min(1, progress));

            const stepIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length));
            setActiveTab(steps[stepIndex].id);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleStepClick = (index: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const absoluteContainerTop = window.scrollY + rect.top;
        const windowHeight = window.innerHeight;
        const containerPaddingTop = 48; // Adjust based on pt-12 in container

        // Calculate the position for each step within the 150vh container
        // steps.length - 1 because we want the last step to be at the bottom of the scrollable area
        const containerScrollHeight = containerRef.current.offsetHeight - windowHeight;
        const stepScrollPosition = (index / (steps.length - 1)) * containerScrollHeight;

        window.scrollTo({
            top: absoluteContainerTop + stepScrollPosition,
            behavior: 'smooth'
        });
    };

    const ChatScreen = ({ chat }: { chat: any[] }) => (
        <div className="bg-[#E5DDD5] h-full flex flex-col font-sans relative overflow-hidden">
            {/* Status Bar */}
            <div className="h-11 flex items-center justify-between px-6 pt-2 select-none shrink-0 z-30 bg-[#075E54]">
                <div className="text-[15px] font-semibold w-10 text-center tracking-tight text-white">9:41</div>
                <div className="flex gap-1.5 opacity-90">
                    <Signal size={16} fill="white" stroke="white" />
                    <Wifi size={16} stroke="white" />
                    <Battery size={20} fill="white" stroke="white" />
                </div>
            </div>

            {/* Whatsapp Header */}
            <div className="bg-[#075E54] h-14 p-3 flex items-center justify-between shadow-md shrink-0 z-20 relative">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xl border border-white/20 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">L</div>
                    </div>
                    <div className="text-white">
                        <div className="font-bold text-sm leading-none">LIA Agente</div>
                        <div className="text-[10px] opacity-80 mt-0.5">En línea</div>
                    </div>
                </div>
                <div className="flex gap-4 text-white opacity-90 mr-2">
                    <Signal size={18} className="rotate-90" />
                    <MoreHorizontal size={20} />
                </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 pt-4 bg-opacity-10 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d936a207d7.png')] bg-repeat scroll-smooth no-scrollbar">

                <div className="flex justify-center my-2">
                    <div className="bg-[#E1F3FB] text-gray-600 text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">
                        HOY
                    </div>
                </div>

                {chat.map((msg, i) => (
                    <div key={i} className="flex flex-col animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                        {/* SYSTEM MSG */}
                        {msg.type === 'system' && (
                            <div className="flex justify-center my-2">
                                <div className="bg-[#FFF5C4] text-gray-600 text-[9px] font-bold px-2 py-0.5 rounded-lg uppercase tracking-wide shadow-sm text-center max-w-[80%]">
                                    {msg.text}
                                </div>
                            </div>
                        )}

                        {/* BOT & ADVISOR MSG */}
                        {(msg.type === 'bot' || msg.type === 'advisor') && (
                            <div className={`self-start max-w-[90%] ${msg.type === 'advisor' ? 'bg-[#FFF3CD]' : 'bg-white'} p-2 px-2.5 rounded-lg shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] text-[11px] leading-snug relative rounded-tl-none mb-1`}>
                                {msg.type === 'advisor' && <div className="text-[9px] text-orange-600 font-bold mb-1">~ Javier Gomez</div>}
                                <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                <div className="text-[9px] text-gray-400 mt-0.5 flex justify-end gap-1 min-w-[30px]">{msg.time}</div>
                                <div className="absolute top-0 -left-2 w-0 h-0 border-[8px] border-transparent border-t-white border-r-white transform rotate-0 z-0 drop-shadow-sm"></div>
                            </div>
                        )}

                        {/* USER MSG */}
                        {msg.type === 'user' && (
                            <div className="self-end ml-auto max-w-[90%] bg-[#DCF8C6] p-2 px-2.5 rounded-lg shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] text-[11px] leading-snug relative rounded-tr-none mb-1">
                                {msg.text}
                                <div className="text-[9px] text-green-800 mt-0.5 flex justify-end gap-1 opacity-60 min-w-[40px]">{msg.time} <span className="text-blue-500 font-bold">✓✓</span></div>
                                <div className="absolute top-0 -right-2 w-0 h-0 border-[8px] border-transparent border-t-[#DCF8C6] border-l-[#DCF8C6] transform rotate-0 z-0"></div>
                            </div>
                        )}

                        {/* FILE MSG */}
                        {msg.type === 'file' && (
                            <div className="self-start max-w-[85%] bg-white p-1 rounded-lg shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] rounded-tl-none mb-1">
                                <div className="bg-gray-100 p-2 rounded-md flex items-center gap-2 mb-1 cursor-pointer hover:bg-gray-200 transition-colors">
                                    <div className="w-6 h-8 bg-red-500 rounded flex items-center justify-center text-white text-[7px] font-bold">PDF</div>
                                    <div className="overflow-hidden">
                                        <div className="text-[10px] font-medium text-gray-800 truncate">{msg.text}</div>
                                        <div className="text-[8px] text-gray-500">{msg.pages} • {msg.size}</div>
                                    </div>
                                </div>
                                <div className="text-[9px] text-gray-400 px-1 pb-0.5 flex justify-end gap-1">{msg.time}</div>
                            </div>
                        )}

                        {/* LINK MSG */}
                        {msg.type === 'link' && (
                            <div className="self-start max-w-[85%] bg-white p-2 rounded-lg shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] rounded-tl-none mb-1 cursor-pointer hover:bg-gray-50">
                                <div className="text-blue-500 font-bold underline text-xs">{msg.text}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Footer Input */}
            <div className="bg-[#F0F0F0] p-2 flex items-center gap-2 shrink-0 pb-4">
                <div className="bg-white h-8 flex-1 rounded-full px-3 flex items-center text-gray-400 text-xs shadow-sm border border-gray-200">
                    Escribe un mensaje...
                </div>
                <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center text-white shadow-md">
                    <Send size={14} />
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-white relative" id="how-it-works">
            {/* Title Section (Outside Sticky) */}
            <div className="container mx-auto px-6 md:px-12 max-w-5xl mb-12 pt-12">
                <div className="text-center animate-fade-up">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 border border-blue-100">
                        <Smartphone size={14} /> El Motor de Ventas
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                        Así Vende LIA por Ti.
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
                        Automatiza el 90% del proceso comercial. Tus asesores solo hablan con quienes ya quieren comprar.
                    </p>
                </div>
            </div>

            {/* Sticky Container Area */}
            <div ref={containerRef} className="relative h-[150vh] pb-12">

                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">

                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center h-full">

                            {/* Left: Step List */}
                            <div className="w-full lg:w-1/2 space-y-3 pt-6 lg:pt-0">
                                {steps.map((step, i) => {
                                    const isActive = activeTab === step.id;
                                    return (
                                        <div
                                            key={step.id}
                                            onClick={() => handleStepClick(i)}
                                            className={`p-4 rounded-xl cursor-pointer border transition-all duration-300 group ${isActive
                                                ? 'bg-white border-blue-200 shadow-lg shadow-blue-900/5 ring-1 ring-blue-50 scale-[1.02] relative z-10'
                                                : 'bg-transparent border-transparent hover:bg-white hover:border-gray-100 hover:shadow-sm opacity-60 hover:opacity-100'}`}
                                        >
                                            <h3 className={`text-lg font-bold mb-1.5 flex items-center gap-3 ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
                                                <span className={`text-xl transition-transform duration-300 ${isActive ? 'scale-110' : 'grayscale opacity-70'}`}>
                                                    {step.icon}
                                                </span>
                                                {step.title}
                                            </h3>
                                            <p className={`text-xs md:text-sm leading-relaxed transition-colors pl-[40px] ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                                                {step.desc}
                                            </p>

                                            <div className={`overflow-hidden transition-all duration-300 pl-[40px] ${isActive ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                                <p className="text-[11px] bg-blue-50 text-blue-700 p-2 rounded-lg border border-blue-100 font-medium leading-relaxed">
                                                    ✨ {step.detail}
                                                </p>
                                            </div>

                                            {isActive && (
                                                <div className="ml-[40px] mt-2 flex items-center text-blue-600 text-[11px] font-bold uppercase tracking-wide animate-fade-in group-hover:underline">
                                                    Ver Detalles <ChevronRight size={12} className="ml-1" />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right: Sticky Mockup */}
                            <div className="w-full lg:w-1/2 flex justify-center sticky top-24 lg:top-0 h-full items-center">
                                {/* Bg Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -z-10"></div>

                                {/* Render Active Mockup */}
                                <div className="transition-all duration-500 transform animate-fade-in-up">
                                    <IPhoneFrame>
                                        <ChatScreen chat={steps.find(s => s.id === activeTab)?.chat || []} />
                                    </IPhoneFrame>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
