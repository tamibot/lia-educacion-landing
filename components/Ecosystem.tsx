import React, { useState } from 'react';
import { Users, BarChart3, GraduationCap, Globe, CreditCard, Zap, Layout, CheckCircle2, Play, Pause, SkipForward, Maximize2, MessageCircle, Heart, Share2, Search, Bell, Settings } from 'lucide-react';

const Ecosystem: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'lms' | 'community' | 'crm'>('lms');

    const features = [
        {
            id: 'lms',
            icon: GraduationCap,
            title: "Plataforma LMS",
            desc: "Tus cursos, PDFs y exámenes.",
            detail: "Aloja videos ilimitados, crea quizes y entrega certificados automáticos. Todo bajo tu propia marca y dominio.",
            color: "bg-blue-600 text-white shadow-blue-500/30",
            border: "border-blue-500/20"
        },
        {
            id: 'community',
            icon: Users,
            title: "Comunidad VIP",
            desc: "Red social privada interna.",
            detail: "Fomenta el networking entre alumnos. Reemplaza grupos de Facebook/WhatsApp con un espacio profesional y gamificado.",
            color: "bg-orange-500 text-white shadow-orange-500/30",
            border: "border-orange-500/20"
        },
        {
            id: 'crm',
            icon: BarChart3,
            title: "CRM de Ventas",
            desc: "Control de alumnos y pagos.",
            detail: "Gestiona tu base de datos, envía emails masivos y visualiza tus ingresos en tiempo real. Cero integraciones complejas.",
            color: "bg-green-500 text-white shadow-green-500/30",
            border: "border-green-500/20"
        }
    ];

    return (
        <>
            <div className="py-12 md:py-32 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">

                    <div className="text-center mb-20 animate-fade-up">
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                            Tu Imperio Digital. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Un solo lugar.</span>
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                            Olvídate de conectar 5 herramientas diferentes. LIA es tu LMS, tu Comunidad y tu CRM.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">

                        {/* Left: Interactive Tabs (Checklist) - Now Order 2 (Right) */}
                        <div className="w-full lg:w-1/3 space-y-4 order-2 lg:order-2">
                            {features.map((f) => (
                                <button
                                    key={f.id}
                                    onClick={() => setActiveTab(f.id as any)}
                                    className={`w-full p-5 rounded-2xl border transition-all duration-300 group relative overflow-hidden text-left ${activeTab === f.id ? 'bg-white shadow-xl shadow-gray-200/50 border-gray-100 scale-100' : 'bg-transparent border-transparent hover:bg-white/60'}`}
                                >
                                    {/* Selection Indicator */}
                                    {activeTab === f.id && <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl ${f.color.split(' ')[0]}`}></div>}

                                    <div className="flex items-start gap-5 pl-2">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 shrink-0 ${activeTab === f.id ? f.color + ' scale-110' : 'bg-white text-gray-300 shadow-sm'}`}>
                                            <f.icon size={22} className={activeTab === f.id ? 'text-white' : ''} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`text-lg font-bold mb-0.5 ${activeTab === f.id ? 'text-gray-900' : 'text-gray-400'}`}>{f.title}</h3>
                                            <p className={`text-sm font-medium transition-colors ${activeTab === f.id ? 'text-gray-500' : 'text-gray-300'}`}>
                                                {f.desc}
                                            </p>

                                            {/* DETAIL TEXT (User Requested) */}
                                            <div className={`grid transition-all duration-300 ease-in-out ${activeTab === f.id ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                                <div className="overflow-hidden">
                                                    <div className={`text-xs p-2.5 rounded-lg border border-opacity-50 font-medium leading-relaxed ${f.id === 'lms' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                                        f.id === 'community' ? 'bg-orange-50 text-orange-700 border-orange-100' :
                                                            'bg-green-50 text-green-700 border-green-100'
                                                        }`}>
                                                        ✨ {f.detail}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Right: The Premium Dashboard - Now Order 1 (Left) */}
                        <div className="w-full lg:w-2/3 animate-fade-in-right flex justify-center perspective-1000 order-1 lg:order-1">
                            <div className="relative w-full max-w-5xl rounded-[1.5rem] bg-gray-900 p-2 shadow-2xl ring-1 ring-gray-900/10">
                                <div className="absolute top-0 left-1/2 h-4 w-1/3 -translate-x-1/2 rounded-b-xl bg-gray-800/50 blur-[2px]"></div>
                                <div className="aspect-[16/10] w-full overflow-hidden rounded-[1rem] bg-white shadow-inner">

                                    {/* The "Stripe-Style" Dashboard UI */}
                                    <div className="flex h-full font-sans bg-[#f7f9fc] text-gray-600 antialiased overflow-hidden select-none" style={{ zoom: '0.8' }}>

                                        {/* Sidebar (Clean & Dark/Light) */}
                                        <div className="w-64 bg-white border-r border-gray-100 flex flex-col p-6 hidden md:flex shrink-0 z-20 shadow-sm">
                                            {/* Logo Area */}
                                            <div className="flex items-center gap-3 mb-10">
                                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-blue-200 shadow-lg">L</div>
                                                <div className="font-bold text-gray-900 tracking-tight">LIA Academy</div>
                                            </div>

                                            {/* Nav Links */}
                                            <div className="space-y-1">
                                                <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'lms' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}>
                                                    <GraduationCap size={18} /> Cursos
                                                </div>
                                                <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'community' ? 'bg-orange-50 text-orange-600' : 'text-gray-500 hover:bg-gray-50'}`}>
                                                    <Users size={18} /> Comunidad
                                                </div>
                                                <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'crm' ? 'bg-green-50 text-green-600' : 'text-gray-500 hover:bg-gray-50'}`}>
                                                    <BarChart3 size={18} /> Analytics
                                                </div>
                                            </div>

                                            {/* Bottom User Profile */}
                                            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-200 border border-white shadow-sm overflow-hidden">
                                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-xs font-bold text-gray-900">Felix G.</div>
                                                    <div className="text-[10px] text-gray-400">Admin</div>
                                                </div>
                                                <Settings size={14} className="text-gray-400" />
                                            </div>
                                        </div>

                                        {/* Main Content Area */}
                                        <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#f7f9fc] relative">

                                            {/* Top Header */}
                                            <div className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
                                                <div className="flex items-center gap-4 text-gray-400 bg-gray-100/50 px-3 py-1.5 rounded-lg w-64 border border-transparent focus-within:border-blue-200 focus-within:bg-white transition-all">
                                                    <Search size={14} />
                                                    <span className="text-xs font-medium">Buscar...</span>
                                                </div>
                                                <div className="flex items-center gap-5">
                                                    <div className="relative">
                                                        <Bell size={18} className="text-gray-400" />
                                                        <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* DYNAMIC CONTENT VIEWS */}
                                            <div className="p-8 overflow-y-auto flex-1">

                                                {/* 1. LMS VIEW (Course Player Style) */}
                                                {activeTab === 'lms' && (
                                                    <div className="animate-fade-in space-y-6">
                                                        {/* Hero Video Player */}
                                                        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 aspect-video relative group border border-gray-900/5">
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                                                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Course" loading="lazy" />

                                                            {/* Video Controls Overlay */}
                                                            <div className="absolute bottom-6 left-6 right-6 z-20 text-white flex items-center justify-between">
                                                                <div className="flex items-center gap-4">
                                                                    <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                                                        <Pause size={18} fill="black" />
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-sm font-bold opacity-90">1.2 Introducción a React</div>
                                                                        <div className="text-xs opacity-60">04:23 / 12:00</div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex gap-4 opacity-80">
                                                                    <Maximize2 size={18} />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Next Lessons List */}
                                                        <div className="grid grid-cols-1 gap-3">
                                                            <div className="font-bold text-gray-900 text-sm mb-1">Siguientes Lecciones</div>
                                                            {[1, 2].map((i) => (
                                                                <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between hover:shadow-sm cursor-pointer transition-all">
                                                                    <div className="flex items-center gap-4">
                                                                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold text-xs">{i + 2}</div>
                                                                        <div>
                                                                            <div className="text-xs font-bold text-gray-800">Advanced Hooks Patterns</div>
                                                                            <div className="text-[10px] text-gray-400">15 min • Video</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-6 h-6 rounded-full border border-gray-200"></div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* 2. COMMUNITY VIEW (Feed Style) */}
                                                {activeTab === 'community' && (
                                                    <div className="animate-fade-in max-w-xl mx-auto space-y-5">
                                                        {/* Composer */}
                                                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                                            <div className="flex gap-3">
                                                                <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                                                                <div className="flex-1 bg-gray-50 rounded-lg h-8 px-3 flex items-center text-xs text-gray-400">Comparte algo con la comunidad...</div>
                                                            </div>
                                                        </div>

                                                        {/* Post 1 */}
                                                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                            <div className="flex justify-between items-start mb-3">
                                                                <div className="flex gap-3">
                                                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Avatar" loading="lazy" />
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-bold text-sm text-gray-900">Sarah Design</div>
                                                                        <div className="text-[10px] text-gray-400">hace 2 horas • <span className="text-orange-500 font-bold">#Showcase</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                                                ¡Acabo de terminar mi portfolio usando lo aprendido en el Módulo 4! 🚀 Aquí les dejo el link, acepto feedback constructivo. 👇
                                                            </p>
                                                            <div className="h-40 bg-gray-100 rounded-xl mb-4 overflow-hidden relative border border-gray-200">
                                                                <img src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Portfolio" loading="lazy" />
                                                            </div>
                                                            <div className="flex items-center gap-6 border-t border-gray-50 pt-3 text-gray-400">
                                                                <div className="flex items-center gap-2 text-xs font-bold hover:text-red-500 transition-colors cursor-pointer"><Heart size={14} /> 24</div>
                                                                <div className="flex items-center gap-2 text-xs font-bold hover:text-blue-500 transition-colors cursor-pointer"><MessageCircle size={14} /> 8</div>
                                                                <div className="ml-auto"><Share2 size={14} /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* 3. CRM VIEW (Analytics Style) */}
                                                {activeTab === 'crm' && (
                                                    <div className="animate-fade-in space-y-6">
                                                        {/* Metric Cards Row */}
                                                        <div className="grid grid-cols-3 gap-4">
                                                            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
                                                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">MRR (Total)</div>
                                                                <div className="text-2xl font-black text-gray-900">$12,450</div>
                                                                <div className="text-[10px] text-green-600 font-bold flex items-center gap-1 mt-2">
                                                                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">↑</div>
                                                                    15.3%
                                                                </div>
                                                            </div>
                                                            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Nuevos Leads</div>
                                                                <div className="text-2xl font-black text-gray-900">843</div>
                                                                <div className="text-[10px] text-green-600 font-bold flex items-center gap-1 mt-2">
                                                                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">↑</div>
                                                                    8.1%
                                                                </div>
                                                            </div>
                                                            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Churn Rate</div>
                                                                <div className="text-2xl font-black text-gray-900">1.2%</div>
                                                                <div className="text-[10px] text-green-600 font-bold flex items-center gap-1 mt-2">
                                                                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">↓</div>
                                                                    -0.5%
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Big Chart */}
                                                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-64 flex flex-col">
                                                            <div className="flex justify-between items-center mb-6">
                                                                <div className="font-bold text-sm text-gray-900">Tendencia de Ventas</div>
                                                                <div className="flex gap-2">
                                                                    <div className="px-2 py-1 rounded bg-gray-100 text-[10px] font-bold text-gray-600 border border-gray-200">7D</div>
                                                                    <div className="px-2 py-1 rounded bg-white text-[10px] font-bold text-gray-400 border border-transparent">30D</div>
                                                                </div>
                                                            </div>

                                                            {/* CSS Bar Chart */}
                                                            <div className="flex-1 flex items-end justify-between gap-2">
                                                                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                                                                    <div key={i} className="w-full bg-blue-50 rounded-t-sm relative group overflow-hidden">
                                                                        <div
                                                                            className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-sm transition-all duration-700 group-hover:bg-blue-600"
                                                                            style={{ height: `${h}%` }}
                                                                        ></div>
                                                                        {/* Tooltip on hover */}
                                                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                                                            ${h * 100}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="flex justify-between mt-2 text-[9px] text-gray-400 font-medium uppercase pt-2 border-t border-gray-50">
                                                                <span>01 Oct</span>
                                                                <span>15 Oct</span>
                                                                <span>30 Oct</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Ecosystem;
