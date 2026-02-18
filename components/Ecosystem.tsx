import React, { useState, useEffect, useRef } from 'react';
import { Users, BarChart3, GraduationCap, Globe, CreditCard, Zap, Layout, CheckCircle2, Play, Pause, SkipForward, Maximize2, MessageCircle, Heart, Share2, Search, Bell, Settings, ChevronRight, Award, Download } from 'lucide-react';

const Ecosystem: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'lms' | 'community' | 'crm'>('lms');
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const features = [
        {
            id: 'lms',
            icon: "🎓",
            title: "Plataforma LMS",
            desc: "Tus cursos, exámenes y certificados en un solo lugar.",
            detail: "Centraliza tu material educativo. Comisión $0: Recibe el 100% de tus ventas sin intermediarios. Aloja videos HD y entrega certificados.",
            color: "text-blue-600",
            border: "border-blue-500/20",
        },
        {
            id: 'community',
            icon: "👥",
            title: "Comunidad VIP",
            desc: "Tu propia red social privada para networking.",
            detail: "Elimina distracciones de WhatsApp. Crea un espacio vibrante para que tus alumnos interactúen.",
            color: "text-orange-600",
            border: "border-orange-500/20",
        },
        {
            id: 'crm',
            icon: "📈",
            title: "CRM Inteligente",
            desc: "Control total de alumnos, leads y pagos.",
            detail: "Visualiza tus ventas en tiempo real. Gestiona suscripciones y recupera carritos sin complejidad.",
            color: "text-green-600",
            border: "border-green-500/20",
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const viewHeight = window.innerHeight;

            // Total scrollable height of the 250vh container relative to its sticky content
            const scrollDistance = -rect.top;
            const totalScrollable = containerRef.current.offsetHeight - viewHeight;
            const progress = Math.max(0, Math.min(1, scrollDistance / totalScrollable));

            if (progress < 0.33) setActiveTab('lms');
            else if (progress < 0.66) setActiveTab('community');
            else setActiveTab('crm');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleTabClick = (index: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const viewHeight = window.innerHeight;
        const totalScrollable = containerRef.current.offsetHeight - viewHeight;

        const targetScroll = absoluteTop + (index / (features.length - 1)) * totalScrollable;

        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    };

    return (
        <section
            id="ecosystem"
            ref={containerRef}
            className="relative h-auto md:h-[250vh] bg-white"
        >
            <div className="sticky top-0 md:h-screen h-auto w-full flex flex-col items-center justify-center overflow-hidden py-12 md:py-0 px-6">

                {/* Header Section */}
                <div className="max-w-4xl w-full text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                        <Zap size={10} className="fill-blue-600" /> Ecosistema Todo-en-Uno
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Tu Academia, <span className="text-blue-600">Todo en un Solo Lugar.</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        LIA centraliza LMS, Comunidad y CRM. Olvida el "Frankenstein" tecnológico de conectar 5 herramientas diferentes.
                    </p>
                </div>

                <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Left: The Premium Dashboard Mockup (Sticky) */}
                    <div className="w-full md:w-3/5 lg:w-2/3 perspective-1000 block">
                        <div className="relative group transition-all duration-700 hover:rotate-y-1">
                            {/* Decorative Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-3xl opacity-50 transition-opacity group-hover:opacity-80"></div>

                            <div className="relative w-full rounded-2xl bg-gray-900 p-1.5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] ring-1 ring-white/10 dark:ring-white/5">
                                <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-white shadow-inner relative">

                                    {/* Mockup Dashboard Header Overlay (Browser look) */}
                                    <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100/80 backdrop-blur-sm border-b border-gray-200/50 flex items-center px-4 gap-2 z-30">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/50"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/50"></div>
                                        </div>
                                        <div className="flex-1 max-w-[400px] h-5 bg-white rounded-md mx-auto border border-gray-200/50 flex items-center px-3 gap-2">
                                            <Globe size={10} className="text-gray-300" />
                                            <span className="text-[9px] text-gray-300 truncate">academia.tu-marca.com/dashboard/lia-ai</span>
                                        </div>
                                    </div>

                                    {/* INNER CONTENT TRANSITIONS */}
                                    <div className="h-full pt-8 font-sans bg-[#fcfdfe] text-gray-600 flex overflow-hidden">

                                        {/* Sidebar */}
                                        <div className="w-14 md:w-48 xl:w-56 bg-white border-r border-gray-100 flex flex-col p-2 md:p-5 shrink-0 transition-all duration-300">
                                            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-4 md:mb-8">
                                                <div className="w-6 h-6 md:w-7 md:h-7 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center text-white font-black text-[10px] md:text-xs shadow-lg shadow-blue-500/20">L</div>
                                                <div className="font-bold text-gray-900 text-sm tracking-tight truncate hidden md:block">LIA Academy</div>
                                            </div>
                                            <div className="space-y-1">
                                                {features.map((item) => (
                                                    <div
                                                        key={item.id}
                                                        className={`flex items-center justify-center md:justify-start gap-3 px-2 md:px-3 py-2 md:py-2.5 rounded-xl transition-all duration-300 ${activeTab === item.id ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-400 opacity-60'}`}
                                                    >
                                                        <span className="text-sm">{item.icon}</span>
                                                        <span className="text-[10px] font-bold tracking-tight hidden md:block">{item.title}</span>
                                                        {activeTab === item.id && <div className="hidden md:block ml-auto w-1 h-3 bg-blue-600 rounded-full animate-pulse"></div>}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Main View Area */}
                                        <div className="flex-1 p-3 md:p-6 overflow-hidden flex flex-col gap-6 bg-[#fcfdfe] relative">
                                            <div className="h-full w-full">
                                                {/* LMS VIEW */}
                                                <div className={`transition-all duration-500 absolute inset-0 pt-12 md:pt-16 pr-3 md:pr-6 pl-16 md:pl-54 xl:pl-62 pb-4 md:pb-6 ${activeTab === 'lms' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                                                    <div className="flex flex-col gap-4 h-full">
                                                        <div className="bg-gray-900 rounded-xl aspect-video relative overflow-hidden shadow-lg border border-white/10 group cursor-pointer shrink-0">
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105" alt="Video" />
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <div className="w-10 h-10 bg-blue-600/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-500/30 scale-100 group-hover:scale-110 transition-transform">
                                                                    <Pause size={18} className="fill-white" />
                                                                </div>
                                                            </div>
                                                            <div className="absolute bottom-3 left-3 right-3">
                                                                <p className="text-white text-[9px] font-bold mb-1.5 truncate">Módulo 4: Estrategias de Cierre con IA</p>
                                                                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                                                    <div className="h-full bg-blue-500 w-[75%] rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-3 flex-1 overflow-hidden">
                                                            <div className="bg-white rounded-xl border border-blue-50 p-3 shadow-sm hover:border-blue-200 transition-colors cursor-pointer group flex flex-col justify-center">
                                                                <div className="w-6 h-6 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center mb-1.5 group-hover:bg-blue-500 group-hover:text-white transition-all"><CheckCircle2 size={12} /></div>
                                                                <div className="text-[9px] font-bold text-gray-900">Quiz Aprobado</div>
                                                                <div className="text-[7px] text-green-600 font-bold">Puntaje: 95/100</div>
                                                            </div>
                                                            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl p-3 shadow-lg shadow-indigo-500/20 cursor-pointer hover:scale-[1.02] transition-transform group flex flex-col justify-center">
                                                                <div className="w-6 h-6 bg-white/20 text-white rounded-lg flex items-center justify-center mb-1.5"><Award size={12} /></div>
                                                                <div className="text-[9px] font-bold text-white">Certificado Listo</div>
                                                                <div className="text-[7px] text-blue-100 flex items-center gap-1 mt-1">Descargar PDF <Download size={8} /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* COMMUNITY VIEW */}
                                                <div className={`transition-all duration-500 absolute inset-0 pt-16 pr-6 pl-54 xl:pl-62 pb-6 ${activeTab === 'community' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                                                    <div className="space-y-4 h-full flex flex-col">
                                                        <div className="bg-white p-3 rounded-xl border border-orange-100 shadow-sm flex items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <div className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border border-orange-100/50"># Generador de Estudiantes</div>
                                                                <div className="text-gray-400 text-[9px] font-medium italic">42 alumnos activos ahora</div>
                                                            </div>
                                                            <div className="flex -space-x-1.5 overflow-hidden">
                                                                {[1, 2, 3].map(i => (
                                                                    <div key={i} className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-gray-200">
                                                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} alt="User" />
                                                                    </div>
                                                                ))}
                                                                <div className="h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center text-[7px] font-bold text-orange-700 ring-2 ring-white">+12</div>
                                                            </div>
                                                        </div>

                                                        {/* Post Thread */}
                                                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden flex-1 flex flex-col hover:border-orange-200 transition-colors">
                                                            <div className="flex gap-3 items-center mb-3">
                                                                <div className="w-8 h-8 rounded-full bg-blue-100 overflow-hidden ring-2 ring-blue-50">
                                                                    <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=JD" alt="User" />
                                                                </div>
                                                                <div>
                                                                    <div className="text-[10px] font-bold text-gray-900">Juan Diego M. <span className="text-gray-400 font-normal ml-1">hace 5 min</span></div>
                                                                    <div className="flex items-center gap-1.5">
                                                                        <span className="text-[7px] bg-orange-50 text-orange-600 font-bold px-1 rounded">ESTUDIANTE VIP</span>
                                                                        <span className="text-[7px] text-green-600 font-bold flex items-center gap-0.5"><Zap size={6} className="fill-green-600" /> RESULTADO BRUTAL</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="text-[11px] text-gray-700 mb-3 leading-relaxed font-semibold">
                                                                "¿Cómo configuro el bot para automatizar el cierre? ¡Me llegaron 20 leads en 1h! 💎"
                                                            </p>

                                                            {/* Nested Interaction */}
                                                            <div className="ml-4 pl-4 border-l-2 border-orange-100/50 space-y-3">
                                                                <div className="flex gap-2 items-start py-1">
                                                                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-[8px] font-black shrink-0">L</div>
                                                                    <div className="bg-blue-50 p-2.5 rounded-lg border border-blue-100/50">
                                                                        <p className="text-[9px] font-bold text-blue-900 mb-0.5">Admin LIA <span className="text-[7px] text-blue-500 font-normal ml-1">Official Support</span></p>
                                                                        <p className="text-[10px] text-blue-800 leading-snug">"Usa la plantilla 'Fast Close' en Configuraciones &gt; CRM. ¡Felicidades Juan!"</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="mt-auto pt-3 flex items-center gap-4 text-gray-400 border-t border-gray-50">
                                                                <div className="flex items-center gap-1.5 text-[9px] font-bold hover:text-orange-500 transition-colors cursor-pointer"><Heart size={10} className="fill-orange-100 text-orange-400" /> 12</div>
                                                                <div className="flex items-center gap-1.5 text-[9px] font-bold hover:text-blue-500 transition-colors cursor-pointer"><MessageCircle size={10} /> 5</div>
                                                                <div className="flex items-center gap-1.5 text-[9px] font-bold ml-auto opacity-60"><Share2 size={10} /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* CRM VIEW */}
                                                <div className={`transition-all duration-500 absolute inset-0 pt-16 pr-6 pl-54 xl:pl-62 pb-6 ${activeTab === 'crm' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                                                    <div className="grid grid-cols-2 gap-4 mb-5">
                                                        <div className="bg-white pt-5 pb-6 px-5 rounded-2xl border border-blue-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                                                            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-125"></div>
                                                            <div className="text-[9px] text-blue-600 font-bold uppercase mb-2 relative">Leads de Hoy</div>
                                                            <div className="text-3xl font-black text-gray-900 relative">148</div>
                                                            <div className="text-[8px] text-green-600 font-bold mt-2 flex items-center gap-1 animate-pulse">
                                                                <Zap size={8} className="fill-green-600" /> +32% vs promedio
                                                            </div>
                                                        </div>
                                                        <div className="bg-gradient-to-br from-green-600 to-emerald-700 pt-5 pb-6 px-5 rounded-2xl border border-green-500 shadow-lg shadow-green-500/10 relative overflow-hidden group hover:scale-[1.02] transition-transform">
                                                            <div className="text-[9px] text-green-100 font-bold uppercase mb-2">Inscripciones</div>
                                                            <div className="text-3xl font-black text-white">$4,250</div>
                                                            <div className="text-[8px] text-white/80 font-bold mt-2 flex items-center gap-1">
                                                                Recuperado por IA: $1,200
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Sales List */}
                                                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex-1 flex flex-col">
                                                        <div className="flex justify-between items-center mb-5">
                                                            <div className="text-[10px] font-black text-gray-900 tracking-tight">CIERRES EN TIEMPO REAL</div>
                                                            <div className="flex gap-1.5 items-center">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></div>
                                                                <span className="text-[8px] font-bold text-gray-400">EN VIVO</span>
                                                            </div>
                                                        </div>

                                                        <div className="space-y-3 flex-1 overflow-hidden">
                                                            {[
                                                                { name: "Carlos J. - IA Master", time: "hace 2 min", price: "$297", status: "Inscrito", color: "bg-green-100 text-green-700" },
                                                                { name: "Maria L. - Bot Pro", time: "hace 15 min", price: "$197", status: "Pago Pendiente", color: "bg-amber-100 text-amber-700" },
                                                                { name: "Admin - Lead Recuperado", time: "hace 1h", price: "$297", status: "Recuperado x IA", color: "bg-blue-100 text-blue-700" }
                                                            ].map((sale, i) => (
                                                                <div key={i} className="flex items-center justify-between p-3 bg-gray-50/50 rounded-xl border border-gray-100/50 hover:bg-white transition-colors group cursor-pointer">
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="w-7 h-7 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-[10px] shadow-sm transform group-hover:rotate-6 transition-transform">💰</div>
                                                                        <div>
                                                                            <p className="text-[10px] font-bold text-gray-900">{sale.name}</p>
                                                                            <p className="text-[8px] text-gray-400">{sale.time}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <p className="text-[10px] font-black text-gray-900">{sale.price}</p>
                                                                        <span className={`text-[7px] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-tighter ${sale.color}`}>{sale.status}</span>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Feature Cards (Scrollable) */}
                    <div className="w-full md:w-2/5 lg:w-1/3 flex flex-col gap-6 md:gap-10">
                        {features.map((feature, idx) => {
                            const isActive = activeTab === feature.id;
                            return (
                                <div
                                    key={feature.id}
                                    onClick={() => handleTabClick(idx)}
                                    className={`p-5 rounded-2xl cursor-pointer border transition-all duration-300 group relative ${isActive
                                        ? 'bg-white border-blue-200 shadow-xl shadow-blue-900/5 ring-1 ring-blue-50 scale-[1.05] z-10'
                                        : 'bg-transparent border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`text-2xl transition-transform duration-300 shrink-0 ${isActive ? 'scale-125' : 'grayscale opacity-70'}`}>
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold mb-1 flex items-center gap-2 transition-colors ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
                                                {feature.title}
                                            </h3>
                                            <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                                                {feature.desc}
                                            </p>

                                            {/* Details that only expand and show when active */}
                                            <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                                <p className="text-xs bg-blue-50 text-blue-700 p-2 rounded-lg border border-blue-100 font-medium leading-relaxed">
                                                    ✨ {feature.detail}
                                                </p>
                                            </div>

                                            {isActive && (
                                                <div className="mt-3 flex items-center text-blue-600 text-xs font-bold uppercase tracking-wide animate-fade-in group-hover:underline">
                                                    Ver Demo del Sistema <ChevronRight size={14} className="ml-1" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
