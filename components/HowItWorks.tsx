
import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Send } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const steps = [
    {
        icon: "🔍", // Emojis instead of Lucide components
        title: "1. Filtra",
        desc: "LIA califica a tus leads con preguntas profundas. Identifica experiencia, objetivos y presupuesto antes de pasártelos.",
        detail: "Realiza un perfilado automático. Si el lead no cumple con tus requisitos (ej. sin presupuesto o experiencia), LIA lo descalifica amablemente para proteger tu tiempo.",
        color: "bg-blue-100 text-blue-600 border-blue-200",
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
        icon: "🧠",
        title: "2. Educa",
        desc: "Responde dudas al instante. Envía temarios en PDF, explica módulos específicos y maneja objeciones.",
        detail: "No solo responde, sino que persuade. Envía casos de éxito, brochures y audios explicativos para aumentar la confianza y autoridad de tu marca.",
        color: "bg-orange-100 text-orange-600 border-orange-200",
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
        icon: "🏃",
        title: "3. Persigue",
        desc: "LIA no se cansa. Si alguien no compra, le hace seguimiento por días con una secuencia estratégica.",
        detail: "Recupera hasta el 40% de las ventas perdidas. LIA detecta si el lead dejó de responder y activa disparadores psicológicos de urgencia y escasez.",
        color: "bg-blue-100 text-blue-600 border-blue-200",
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
        icon: "🤝",
        title: "4. Cierra",
        desc: "LIA cierra la venta sola o agenda una llamada con tu equipo cuando el lead está hirviendo.",
        detail: "Tú decides el objetivo: Agendar en Calendly o enviar Link de Pago (Stripe/MercadoPago). LIA lo ejecuta cuando detecta la señal de compra.",
        color: "bg-green-100 text-green-600 border-green-200",
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

const HowItWorks: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll chat to bottom when step changes
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [activeStep]);

    // Sticky Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const containerHeight = containerRef.current.offsetHeight;

            // Calculate progress (0 to 1) based on how much of the container has been scrolled through
            // We start calculating when the top of the container hits the top of the viewport
            let progress = -rect.top / (containerHeight - windowHeight);

            // Clamp progress
            progress = Math.max(0, Math.min(1, progress));

            // Map progress to steps (0 to 3)
            const stepIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length));

            setActiveStep(stepIndex);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Manual Click Handler
    const handleStepClick = (index: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const absoluteContainerTop = window.scrollY + rect.top;
        const windowHeight = window.innerHeight;
        const containerHeight = containerRef.current.offsetHeight;

        // Calculate the scrollable height (total height - viewport height)
        const scrollableHeight = containerHeight - windowHeight;

        // Calculate the target scroll position for this step
        // We add a small buffer (0.01) to ensure we get *into* the step's range
        const targetProgress = (index / steps.length) + 0.001;
        const targetScrollY = absoluteContainerTop + (targetProgress * scrollableHeight);

        window.scrollTo({
            top: targetScrollY,
            behavior: 'smooth'
        });
    };

    return (
        // Container is tall to allow scrolling
        <div ref={containerRef} className="relative h-[400vh] bg-white">

            {/* Sticky Content */}
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl pt-8 pb-8">

                    <div className="text-center mb-8 md:mb-12 animate-fade-up">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 tracking-wide border border-blue-100">
                            <Smartphone size={14} className="animate-pulse" /> El Motor de Ventas
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                            Así Vende LIA por Ti.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Automatiza el 90% del proceso comercial. Tus asesores solo hablan con quienes ya quieren comprar.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:h-[600px] items-center">

                        {/* Left: Phone Mockup (WhatsApp Style) */}
                        <div className="relative flex justify-center lg:justify-end perspective-1000 order-2 lg:order-1">
                            {/* Phone Mockup Wrapper */}
                            <div className="relative mx-auto w-full flex justify-center">
                                <PhoneMockup className="shadow-2xl ring-4 ring-gray-100/50">
                                    <div className="bg-[#E5DDD5] h-full flex flex-col font-sans relative overflow-hidden rounded-[1.6rem]">

                                        {/* Whatsapp Header */}
                                        <div className="bg-[#075E54] h-16 p-3 flex items-end justify-between shadow-md shrink-0 z-20 relative">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xl border border-white/20 overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">L</div>
                                                </div>
                                                <div className="text-white">
                                                    <div className="font-bold text-sm leading-none">LIA Agente</div>
                                                    <div className="text-[10px] opacity-80 mt-0.5">En línea</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 text-white p-1">
                                                <div className="w-1 h-3 bg-white/60 rounded-full"></div>
                                            </div>
                                        </div>

                                        {/* Chat Body */}
                                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 pt-6 bg-opacity-10 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d936a207d7.png')] bg-repeat scroll-smooth no-scrollbar">

                                            {/* Date Divider */}
                                            <div className="flex justify-center my-4">
                                                <div className="bg-[#E1F3FB] text-gray-600 text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wide shadow-sm">
                                                    HOY
                                                </div>
                                            </div>

                                            {steps[activeStep].chat.map((msg, i) => (
                                                <div key={i} className={`flex flex-col animate-fade-in-up`} style={{ animationDelay: `${i * 0.15}s` }}>

                                                    {/* SYSTEM MSG */}
                                                    {msg.type === 'system' && (
                                                        <div className="flex justify-center my-3">
                                                            <div className="bg-[#FFF5C4] text-gray-600 text-[9px] font-bold px-2 py-0.5 rounded-lg uppercase tracking-wide shadow-sm text-center max-w-[80%]">
                                                                {msg.text}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* BOT & ADVISOR MSG */}
                                                    {(msg.type === 'bot' || msg.type === 'advisor') && (
                                                        <div className={`self-start max-w-[90%] ${msg.type === 'advisor' ? 'bg-[#FFF3CD]' : 'bg-white'} p-2 px-3 rounded-lg shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] text-[12px] leading-snug relative rounded-tl-none mb-1`}>
                                                            {msg.type === 'advisor' && <div className="text-[9px] text-orange-600 font-bold mb-1">~ Javier Gomez</div>}
                                                            <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                                            <div className="text-[9px] text-gray-400 mt-1 flex justify-end gap-1 min-w-[40px]">{msg.time}</div>
                                                            {/* Tail */}
                                                            <div className="absolute top-0 -left-2 w-0 h-0 border-[8px] border-transparent border-t-white border-r-white transform rotate-0 z-0 drop-shadow-sm"></div>
                                                        </div>
                                                    )}

                                                    {/* USER MSG */}
                                                    {msg.type === 'user' && (
                                                        <div className="self-end ml-auto max-w-[90%] bg-[#DCF8C6] p-2 px-3 rounded-lg shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] text-[12px] leading-snug relative rounded-tr-none mb-1">
                                                            {msg.text}
                                                            <div className="text-[9px] text-green-800 mt-1 flex justify-end gap-1 opacity-60 min-w-[50px]">{msg.time} <span className="text-blue-500 font-bold">✓✓</span></div>
                                                            {/* Tail */}
                                                            <div className="absolute top-0 -right-2 w-0 h-0 border-[8px] border-transparent border-t-[#DCF8C6] border-l-[#DCF8C6] transform rotate-0 z-0"></div>
                                                        </div>
                                                    )}

                                                    {/* FILE MSG */}
                                                    {msg.type === 'file' && (
                                                        <div className="self-start max-w-[85%] bg-white p-1 rounded-lg shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] rounded-tl-none mb-1">
                                                            <div className="bg-gray-100 p-2 rounded-md flex items-center gap-3 mb-1 cursor-pointer hover:bg-gray-200 transition-colors">
                                                                <div className="w-8 h-10 bg-red-500 rounded flex items-center justify-center text-white text-[8px] font-bold">PDF</div>
                                                                <div className="overflow-hidden">
                                                                    <div className="text-xs font-medium text-gray-800 truncate">{msg.text}</div>
                                                                    <div className="text-[10px] text-gray-500">{msg.pages} • {msg.size} • PDF</div>
                                                                </div>
                                                            </div>
                                                            <div className="text-[10px] text-gray-400 px-2 pb-1 flex justify-end gap-1">{msg.time}</div>
                                                            {/* Tail */}
                                                            <div className="absolute top-0 -left-2 w-0 h-0 border-[8px] border-transparent border-t-white border-r-white transform rotate-0 z-0"></div>
                                                        </div>
                                                    )}

                                                    {/* LINK MSG */}
                                                    {msg.type === 'link' && (
                                                        <div className="self-start max-w-[85%] bg-white p-3 rounded-lg shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] rounded-tl-none mb-1 cursor-pointer hover:bg-gray-50">
                                                            <div className="text-blue-500 font-bold underline text-sm">{msg.text}</div>
                                                            <div className="text-[10px] text-gray-400 mt-1 flex justify-end gap-1">{msg.time}</div>
                                                            {/* Tail */}
                                                            <div className="absolute top-0 -left-2 w-0 h-0 border-[8px] border-transparent border-t-white border-r-white transform rotate-0 z-0"></div>
                                                        </div>
                                                    )}

                                                </div>
                                            ))}
                                            <div className="h-12"></div> {/* Spacer */}
                                        </div>

                                        {/* Footer Input */}
                                        <div className="bg-[#F0F0F0] p-2 flex items-center gap-2 shrink-0 pb-6">
                                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
                                                <span className="text-xl">+</span>
                                            </div>
                                            <div className="bg-white h-9 flex-1 rounded-full px-4 flex items-center text-gray-400 text-sm shadow-sm border border-gray-200">
                                                Escribe un mensaje...
                                            </div>
                                            <div className="w-9 h-9 bg-[#075E54] rounded-full flex items-center justify-center text-white shadow-md">
                                                <Send size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </PhoneMockup>
                            </div>
                        </div>

                        {/* Right: Steps List (Control) */}
                        <div className="space-y-4 order-1 lg:order-2">
                            {steps.map((step, i) => {
                                const isActive = activeStep === i;
                                return (
                                    <div
                                        key={i}
                                        className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden ${isActive
                                            ? 'bg-gradient-to-br from-white to-blue-50 shadow-xl border-blue-200 scale-105 ring-1 ring-blue-100 z-10'
                                            : 'bg-white border-transparent hover:bg-gray-50 hover:shadow-lg hover:scale-[1.02] opacity-70 hover:opacity-100'
                                            } border`}
                                        onClick={() => handleStepClick(i)}
                                    >
                                        <div className="flex items-start gap-5 relative z-10">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg transition-transform duration-500 ${isActive ? `${step.color} scale-110 rotate-3` : 'bg-gray-100 text-gray-400 grayscale group-hover:grayscale-0'}`}>
                                                {/* Render Emoji directly */}
                                                <span role="img" aria-label={step.title}>{step.icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 ${isActive ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                                    {step.title}
                                                </h3>
                                                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-gray-600' : 'text-gray-400 group-hover:text-gray-500'}`}>
                                                    {step.desc}
                                                </p>

                                                {/* Expanded Details */}
                                                <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                                    <div className="overflow-hidden">
                                                        <div className="bg-blue-50/50 rounded-lg p-3 border border-blue-100/50">
                                                            <p className="text-xs text-blue-700 font-medium leading-relaxed">
                                                                💡 <span className="font-bold text-blue-800">El detalle:</span> {step.detail}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        {/* Progress Bar for Active Step */}
                                        {isActive && (
                                            <div className="absolute bottom-0 left-0 h-1 bg-blue-500 animate-slide-right w-full opacity-20"></div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
