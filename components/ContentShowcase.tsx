
import React, { useState, useEffect, useRef } from 'react';
import { Mail, Layout, Image, FileText, Smartphone, Send, Signal, Wifi, Battery, ChevronLeft, MoreHorizontal, ArrowUp, Calendar, CheckCircle2, ChevronRight, Download, Share, BookOpen, User, ArrowLeft, MoreVertical, Heart, MessageCircle, Bookmark } from 'lucide-react';

const ContentShowcase: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'email' | 'poster' | 'landing' | 'pdf'>('email');
    const containerRef = useRef<HTMLDivElement>(null);

    // IPhone Frame (Ultra Premium)
    const IPhoneFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <div className="bg-black rounded-[3rem] md:rounded-[3.5rem] p-3 w-full max-w-[320px] h-[640px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] mx-auto border-[6px] border-gray-900 relative ring-1 ring-white/10 flex-shrink-0 transition-all duration-500 scale-[0.65] md:scale-90 lg:scale-100">
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
            id: 'email',
            icon: "✉️",
            title: "Email Marketing",
            desc: "Campañas de lanzamiento que generan urgencia.",
            detail: "Redacta asuntos virales, secuencias de jab-jab-hook y recupera carritos abandonados. Incluye A/B testing automático para maximizar aperturas.",
            color: "bg-blue-100 text-blue-600",
            mockup: (
                <IPhoneFrame>
                    <div className="bg-[#F2F2F7] h-full flex flex-col font-sans">
                        {/* Status Bar */}
                        <div className="h-11 flex items-center justify-between px-6 pt-2 select-none shrink-0 z-30">
                            <div className="text-[15px] font-semibold w-10 text-center tracking-tight">9:41</div>
                            <div className="flex gap-1.5 opacity-90">
                                <Signal size={16} fill="black" />
                                <Wifi size={16} />
                                <Battery size={20} fill="black" />
                            </div>
                        </div>

                        {/* Mail Top Bar (iOS Style) */}
                        <div className="px-4 py-2 flex items-center justify-between z-20 shrink-0">
                            <div className="flex items-center gap-1 text-blue-500">
                                <ChevronLeft size={24} />
                                <span className="text-[17px] font-normal">Bandeja</span>
                            </div>
                            <div className="flex gap-5 text-blue-500">
                                <ArrowUp size={20} />
                                <MoreHorizontal size={20} />
                            </div>
                        </div>

                        {/* Email Content Container */}
                        <div className="flex-1 overflow-y-auto px-4 pb-4">
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                                {/* Header */}
                                <div className="px-5 py-4 border-b border-gray-100">
                                    <div className="flex justify-between items-start mb-1">
                                        <h2 className="text-[20px] font-bold text-gray-900 leading-tight tracking-tight">🔥 Solo por 24h: Acceso Anticipado</h2>
                                        <span className="text-[13px] text-gray-400 font-normal whitespace-nowrap pt-1">08:00</span>
                                    </div>
                                    <div className="flex items-center gap-3 mt-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm">L</div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-semibold text-[15px] text-gray-900 leading-snug">LIA Launches <span className="text-gray-400 font-normal text-[13px] ml-1">&lt;hola@lia.ai&gt;</span></div>
                                            <div className="text-[13px] text-gray-500 truncate">Para: Juan Perez</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-5 text-gray-800 text-[16px] leading-relaxed space-y-5 font-sans">
                                    <p>Hola Juan,</p>
                                    <p>La espera terminó. Hemos abierto oficialmente las puertas de <span className="font-semibold text-blue-600">"IA para Abogados 2.0"</span>.</p>

                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 relative overflow-hidden text-center my-2">
                                        <div className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-1">Oferta Flash</div>
                                        <div className="text-4xl font-extrabold text-gray-900 mb-1">$49 <span className="text-lg font-medium text-gray-400 line-through decoration-red-400 decoration-2 ml-1">$197</span></div>
                                        <div className="text-[11px] text-gray-500 font-medium">+ 3 Bonos de Regalo Incluidos</div>
                                    </div>

                                    <p className="text-[15px]">Solo liberamos <strong>50 cupos</strong> con este descuento especial. Una vez se llenen, el precio subirá automáticamente.</p>

                                    <div className="pt-2 pb-2">
                                        <button className="w-full bg-[#007AFF] text-white py-3.5 rounded-xl font-semibold text-[16px] shadow-lg shadow-blue-200 hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
                                            Asegurar mi Cupo
                                            <ChevronRight size={16} />
                                        </button>
                                    </div>

                                    <div className="border-t border-gray-100 pt-4 text-center">
                                        <p className="text-xs text-gray-400">¿Deseas dejar de recibir correos? <span className="text-blue-500 underline">Darse de baja</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </IPhoneFrame>
            )
        },
        {
            id: 'poster',
            icon: "🖼️",
            title: "Flyers & Stories",
            desc: "Imagen + Copy para lanzamientos visuales.",
            detail: "Diseña stories, posts y portadas de Reels optimizadas para retener la atención. Adapta el contenido automáticamente a LinkedIn, Instagram y TikTok.",
            color: "bg-pink-100 text-pink-600",
            mockup: (
                <IPhoneFrame>
                    <div className="h-full bg-gray-900 relative text-white flex flex-col font-sans overflow-hidden">
                        {/* Background Image Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800&auto=format&fit=crop"
                                className="w-full h-full object-cover opacity-60"
                                alt="Background"
                                loading="lazy"
                            />
                            {/* Instagram Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
                        </div>

                        {/* Status Bar */}
                        <div className="h-11 flex items-center justify-between px-6 pt-2 select-none z-30 text-white relative shrink-0">
                            <div className="text-[15px] font-semibold w-10 text-center tracking-tight">9:41</div>
                            <div className="flex gap-1.5 opacity-90">
                                <Signal size={16} fill="white" />
                                <Wifi size={16} />
                                <Battery size={20} fill="white" />
                            </div>
                        </div>

                        {/* Story Progress */}
                        <div className="px-2 flex gap-1 z-30 mt-1 shrink-0">
                            <div className="h-0.5 bg-white/90 flex-1 rounded-full overflow-hidden"></div>
                            <div className="h-0.5 bg-white/30 flex-1 rounded-full"></div>
                        </div>

                        {/* User Header */}
                        <div className="px-4 py-4 flex items-center justify-between z-30 shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full border border-white/20 bg-gradient-to-tr from-yellow-400 to-purple-600 p-[1.5px]">
                                    <div className="bg-black w-full h-full rounded-full flex items-center justify-center font-bold text-[10px] overflow-hidden">
                                        <span className="text-white">AI</span>
                                    </div>
                                </div>
                                <div className="text-[13px] font-semibold shadow-black drop-shadow-md">Academia.ai <span className="opacity-60 font-normal ml-1">2h</span></div>
                            </div>
                            <MoreVertical size={20} className="drop-shadow-md" />
                        </div>

                        {/* STORY CONTENT (Instagram Style) */}
                        <div className="flex-1 z-20 px-6 flex flex-col items-center justify-center text-center -mt-6">

                            {/* Floating Elements (Stickers) */}
                            <div className="animate-float mb-6 transform rotate-[-3deg]">
                                <span className="bg-white text-black text-[12px] font-bold uppercase px-3 py-1 rounded-md tracking-wider shadow-xl">
                                    NUEVO CURSO 🚀
                                </span>
                            </div>

                            {/* Main Title with Typography */}
                            <h2 className="text-[34px] font-black text-white mb-2 leading-[1.1] drop-shadow-2xl font-display tracking-tight">
                                INTELIGENCIA <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">ARTIFICIAL</span>
                            </h2>
                            <p className="text-[18px] font-medium text-gray-200 mb-8 tracking-wide uppercase">Para Abogados</p>

                            {/* Date Pill (Glassmorphism) */}
                            <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 flex items-center gap-2 mb-8 shadow-lg">
                                <Calendar size={14} />
                                <span className="text-[13px] font-bold uppercase tracking-wide">Inicio: 14 Marzo</span>
                            </div>

                            {/* Poll / Interaction Interactive Element */}
                            <div className="w-full max-w-[240px] bg-white rounded-xl p-4 shadow-2xl transform rotate-[2deg] mb-8">
                                <div className="text-black text-[12px] font-bold mb-3 text-center">¿Qué quieres aprender?</div>
                                <div className="space-y-2">
                                    <div className="bg-gray-100 rounded-lg p-2 text-[11px] font-semibold text-gray-600 text-left px-3 hover:bg-gray-200 transition-colors cursor-pointer">📝 Redactar Contratos</div>
                                    <div className="bg-gray-100 rounded-lg p-2 text-[11px] font-semibold text-gray-600 text-left px-3 hover:bg-gray-200 transition-colors cursor-pointer">⚖️ Analizar Leyes</div>
                                </div>
                            </div>

                            {/* Link Sticker Interaction (CTA) */}
                            <div className="animate-bounce-slow mt-auto mb-12">
                                <div className="bg-white/90 backdrop-blur text-black px-6 py-3 rounded-full font-bold text-[14px] shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform cursor-pointer flex items-center gap-2">
                                    🔗 Inscribirme Ahora
                                </div>
                            </div>
                        </div>

                        {/* Instagram Footer */}
                        <div className="h-20 bg-gradient-to-t from-black/80 to-transparent flex items-center px-4 gap-4 z-30 shrink-0 pb-4">
                            <div className="flex-1 h-11 bg-white/0 border border-white/30 rounded-full px-4 flex items-center text-white/70 text-sm">
                                Enviar mensaje...
                            </div>
                            <Heart size={28} />
                            <Send size={28} className="rotate-0" />
                        </div>
                    </div>
                </IPhoneFrame>
            )
        },
        {
            id: 'landing',
            icon: "📱",
            title: "Landing Pages",
            desc: "Páginas de venta optimizadas para conversión.",
            detail: "Estructura persuasiva probada (Hero, Beneficios, Temario, Garantía). Incluye pasarela de pago (Stripe/PayPal) lista para recibir dinero.",
            color: "bg-orange-100 text-orange-600",
            mockup: (
                <IPhoneFrame>
                    <div className="h-full bg-white flex flex-col font-sans relative">
                        {/* Status Bar */}
                        <div className="h-11 flex items-center justify-between px-6 pt-2 select-none z-30 shrink-0 bg-white">
                            <div className="text-[15px] font-semibold w-10 text-center tracking-tight">9:41</div>
                            <div className="flex gap-1.5 opacity-90">
                                <Signal size={16} fill="black" />
                                <Wifi size={16} />
                                <Battery size={20} fill="black" />
                            </div>
                        </div>

                        {/* Safari Content */}
                        <div className="flex-1 overflow-y-auto relative no-scrollbar bg-white pb-20">

                            {/* Hero Section */}
                            <div className="relative h-[320px]">
                                <img
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
                                    className="w-full h-full object-cover"
                                    alt="Classroom"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded border border-white/20">
                                    LIA ACADEMY
                                </div>
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <div className="inline-block px-2.5 py-1 bg-blue-600 text-white rounded-md text-[10px] font-bold uppercase mb-3 tracking-wide shadow-sm">
                                        Nueva Carrera
                                    </div>
                                    <h1 className="text-[32px] font-black leading-[1.1] mb-2 shadow-sm font-display tracking-tight">
                                        Inglés para <br /> Developers
                                    </h1>
                                    <p className="text-[14px] text-gray-200 leading-relaxed font-medium line-clamp-2">
                                        Domina el vocabulario técnico en 4 semanas y consigue ese trabajo remoto.
                                    </p>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="px-5 py-6 space-y-6">
                                {/* Stats Row */}
                                <div className="flex gap-4 border-b border-gray-100 pb-6">
                                    <div className="flex-1 text-center">
                                        <div className="text-[18px] font-bold text-gray-900">4 sem</div>
                                        <div className="text-[10px] text-gray-400 font-medium uppercase">Duración</div>
                                    </div>
                                    <div className="w-px bg-gray-100"></div>
                                    <div className="flex-1 text-center">
                                        <div className="text-[18px] font-bold text-gray-900">Online</div>
                                        <div className="text-[10px] text-gray-400 font-medium uppercase">Formato</div>
                                    </div>
                                    <div className="w-px bg-gray-100"></div>
                                    <div className="flex-1 text-center">
                                        <div className="text-[18px] font-bold text-gray-900">Certif.</div>
                                        <div className="text-[10px] text-gray-400 font-medium uppercase">Incluido</div>
                                    </div>
                                </div>

                                {/* CTA Card */}
                                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center">
                                    <div className="text-sm font-semibold text-gray-600 mb-4">Próximo inicio: <span className="text-gray-900">Lunes 24</span></div>
                                    <button className="bg-[#FF5A1F] text-white w-full py-3.5 rounded-xl text-[15px] font-bold shadow-lg shadow-orange-200 transform active:scale-95 transition-transform flex items-center justify-center gap-2">
                                        Aplicar Ahora <ArrowRightSmall />
                                    </button>
                                    <div className="text-[10px] text-gray-400 mt-2 flex items-center justify-center gap-1">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                        Solo 3 cupos restantes
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="space-y-4">
                                    <h3 className="text-[16px] font-bold text-gray-900">Lo que aprenderás</h3>
                                    {[
                                        "Simulaciones de entrevista técnica",
                                        "Daily Standups en inglés",
                                        "Pair Programming sessions"
                                    ].map((feat, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                            <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px]">✓</div>
                                            {feat}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Safari Address Bar (Bottom) */}
                        <div className="border-t border-gray-200 bg-white/90 backdrop-blur-lg pb-5 pt-3 px-4 absolute bottom-0 w-full z-40">
                            <div className="flex items-center justify-between text-blue-500 mb-3 px-4">
                                <ChevronLeft size={24} />
                                <ChevronRight size={24} className="opacity-30" />
                                <Share size={22} />
                                <BookOpen size={22} />
                                <div className="relative">
                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                                    <Layout size={20} />
                                </div>
                            </div>
                            <div className="bg-gray-100/50 h-11 rounded-xl flex items-center justify-center gap-2 text-gray-900 shadow-sm border border-gray-200/50 mx-4">
                                <span className="text-[11px] font-medium opacity-50">AA</span>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 text-gray-400"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" /></svg></div>
                                    <span className="text-[15px] font-medium -mb-0.5">lia.ai</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </IPhoneFrame>
            )
        },
        {
            id: 'pdf',
            icon: "📄",
            title: "PDF de Venta",
            desc: "Documentos persuasivos listos para enviar.",
            detail: "LIA maquina el brochure perfecto (Temario + Precios + Casos de Éxito) en PDF profesional. Ideal para cerrar ventas corporativas por WhatsApp.",
            color: "bg-gray-100 text-gray-600",
            mockup: (
                <IPhoneFrame>
                    <div className="h-full bg-white flex flex-col font-sans overflow-hidden relative">
                        {/* Status Bar */}
                        <div className="h-11 flex items-center justify-between px-6 pt-2 select-none z-30 shrink-0 bg-white border-b border-gray-100">
                            <div className="text-[15px] font-semibold w-10 text-center tracking-tight">9:41</div>
                            <div className="flex gap-1.5 opacity-90">
                                <Signal size={16} fill="black" />
                                <Wifi size={16} />
                                <Battery size={20} fill="black" />
                            </div>
                        </div>

                        {/* PDF Viewer Header (iBooks Style) */}
                        <div className="bg-white/95 backdrop-blur border-b border-gray-100 px-4 py-3 flex items-center justify-between z-20 shrink-0">
                            <div className="flex items-center gap-1 text-blue-500 font-medium text-[15px]">
                                <ChevronLeft size={22} />
                                Librería
                            </div>
                            <div className="font-semibold text-sm text-gray-900">Brochure Growth.pdf</div>
                            <div className="flex items-center gap-4 text-gray-400">
                                <MoreHorizontal size={22} />
                            </div>
                        </div>

                        {/* PDF Content Area */}
                        <div className="flex-1 overflow-hidden bg-gray-50 flex items-center justify-center p-6 relative">
                            {/* Page Curl Effect Background */}
                            <div className="absolute w-[85%] h-[75%] bg-white shadow-2xl skew-y-1 rotate-1 rounded-sm opacity-40 top-[14%] border border-gray-200"></div>

                            {/* Main Document Page */}
                            <div className="w-full max-w-[280px] aspect-[0.7] bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] rounded-sm p-6 flex flex-col relative transform transition-transform hover:scale-[1.02] duration-300 border border-gray-100 z-10">
                                {/* Brand Logo */}
                                <div className="w-8 h-8 bg-blue-600 rounded-lg mb-6 flex items-center justify-center text-white font-bold text-sm">G</div>

                                <div className="uppercase tracking-widest text-[9px] font-bold text-gray-400 mb-2 font-mono">BROCHURE 2024</div>
                                <h1 className="text-[26px] font-black text-gray-900 leading-none mb-3 font-serif">Master en <br /><span className="text-blue-600 italic">Growth</span></h1>
                                <div className="h-0.5 w-10 bg-orange-400 mb-6"></div>

                                <p className="text-[10px] text-gray-500 leading-relaxed mb-6 font-serif opacity-80">
                                    El programa definitivo para escalar startups. Estrategias probadas de retención y adquisición.
                                </p>

                                <div className="space-y-2 mb-6">
                                    {[
                                        "Estrategias de Retención",
                                        "Funnels Automatizados",
                                        "Experimentación Rápida"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 border-b border-gray-50 pb-1.5">
                                            <span className="text-[8px] text-blue-500 font-bold">0{i + 1}</span>
                                            <span className="text-[9px] font-bold text-gray-700 uppercase tracking-wide">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto flex justify-between items-end border-t border-gray-100 pt-3">
                                    <div>
                                        <div className="text-[8px] uppercase font-bold text-gray-400">Inversión</div>
                                        <div className="text-[16px] font-bold text-gray-900 font-mono">$499</div>
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white">
                                        <ArrowRightSmall size={12} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PDF Viewer Footer (Slider) */}
                        <div className="h-14 bg-white border-t border-gray-100 flex items-center px-6 gap-4 z-20 shrink-0">
                            <div className="text-[10px] font-medium text-gray-400 w-6">p. 1</div>
                            <div className="flex-1 h-8 flex items-center">
                                <div className="w-full h-1 bg-gray-100 rounded-full relative overflow-hidden">
                                    <div className="absolute left-0 top-0 h-full w-[10%] bg-blue-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="text-[10px] font-medium text-gray-400 w-6 text-right">32</div>
                        </div>
                    </div>
                </IPhoneFrame>
            )
        }
    ];

    // Sticky Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Use visible height instead of full container height for calculation
            const visibleHeight = windowHeight * 0.9;
            const containerHeight = containerRef.current.offsetHeight - visibleHeight;

            // Calculate progress (0 to 1)
            // We add a small offset to start the animation slightly earlier
            let progress = (-rect.top + 20) / containerHeight;
            progress = Math.max(0, Math.min(1, progress));

            // Map progress to steps (0 to 3)
            const stepIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length));

            setActiveTab(steps[stepIndex].id as any);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Manual Click Handler
    const handleStepClick = (index: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const absoluteContainerTop = window.scrollY + rect.top;
        const windowHeight = window.innerHeight;
        const visibleHeight = windowHeight * 0.9;
        const containerHeight = containerRef.current.offsetHeight - visibleHeight;

        const targetProgress = (index / steps.length) + 0.05;
        const targetScrollY = absoluteContainerTop + (targetProgress * containerHeight);

        window.scrollTo({
            top: targetScrollY,
            behavior: 'smooth'
        });
    };

    return (
        <div className="bg-white relative">
            {/* Title Section (Outside Sticky) */}
            <div className="container mx-auto px-6 md:px-12 max-w-5xl mb-12 pt-12">
                <div className="text-center animate-fade-up">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 border border-blue-100">
                        <Smartphone size={14} /> Content Studio AI
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                        Tu Imperio de Contenido. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Todo generado por IA.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
                        Olvídate de contratar diseñadores. LIA crea todo tu material de venta en segundos.
                    </p>
                </div>
            </div>

            {/* Sticky Container Area - Reduced Height */}
            <div ref={containerRef} className="relative h-auto md:h-[150vh] pb-24 md:pb-12 overflow-x-hidden md:overflow-visible">

                <div className="relative h-auto md:sticky md:top-0 md:h-screen flex flex-col justify-center overflow-visible md:overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">

                        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-16 items-center h-full">

                            {/* Left: Step List */}
                            <div className="w-full lg:w-1/2 space-y-3 pt-4 lg:pt-0">
                                {steps.map((step, i) => {
                                    const isActive = activeTab === step.id;
                                    return (
                                        <div
                                            key={step.id}
                                            onClick={() => handleStepClick(i)}
                                            className={`p-5 rounded-2xl cursor-pointer border transition-all duration-300 group ${isActive
                                                ? 'bg-white border-blue-200 shadow-xl shadow-blue-900/5 ring-1 ring-blue-50 scale-105 relative z-20'
                                                : 'bg-transparent border-transparent hover:bg-white hover:border-gray-100 hover:shadow-md opacity-60 hover:opacity-100'}`}
                                        >
                                            <h3 className={`text-xl font-bold mb-2 flex items-center gap-3 ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
                                                <span className={`text-2xl transition-transform duration-300 ${isActive ? 'scale-125' : 'grayscale opacity-70'}`}>
                                                    {step.icon}
                                                </span>
                                                {step.title}
                                            </h3>
                                            <p className={`text-sm leading-relaxed transition-colors pl-[44px] ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                                                {step.desc}
                                            </p>

                                            {/* Extra Detail Text (User Request) */}
                                            <div className={`overflow-hidden transition-all duration-300 pl-[44px] ${isActive ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                                <p className="text-xs bg-blue-50 text-blue-700 p-2 rounded-lg border border-blue-100 font-medium leading-relaxed">
                                                    ✨ {step.detail}
                                                </p>
                                            </div>

                                            {isActive && (
                                                <div className="ml-[44px] mt-3 flex items-center text-blue-600 text-xs font-bold uppercase tracking-wide animate-fade-in group-hover:underline">
                                                    Ver Detalles <ChevronRight size={14} className="ml-1" />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right: Sticky Mockup */}
                            <div className="w-full lg:w-1/2 flex justify-center sticky top-0 md:top-24 lg:top-0 h-full items-center">
                                {/* Bg Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -z-10"></div>

                                {/* Render Active Mockup */}
                                <div className="transition-all duration-500 transform animate-fade-in-up">
                                    {steps.find(s => s.id === activeTab)?.mockup}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Start Helper Arrow
const ArrowRightSmall = ({ size = 16, className = "" }: { size?: number, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

export default ContentShowcase;
