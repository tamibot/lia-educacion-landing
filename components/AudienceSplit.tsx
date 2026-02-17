import React from 'react';
import { Target, Users, Zap, Building2, BarChart3, Database, ArrowRight, MessageSquare, Share2, Layers } from 'lucide-react';

const AudienceSplit: React.FC = () => {
    return (
        <div className="py-16 bg-[#FBFBFD] border-t border-gray-100 font-sans" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                        Diseñada para tu <span className="text-blue-600">Escala.</span>
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Soluciones específicas para cada etapa de crecimiento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

                    {/* INFOPRODUCTORES CARD */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 relative overflow-hidden group hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">

                        <div className="relative z-10 flex flex-col items-center h-full w-full">
                            <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300">
                                <span className="text-6xl">🙋</span>
                            </div>

                            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase mb-5 tracking-wide">
                                Infoproductores
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Automatización Total.</h3>
                            <p className="text-gray-500 mb-6 text-sm leading-relaxed font-medium max-w-xs">
                                Tu equipo de 1 persona. LIA gestiona tus redes, hostea tus cursos y vende por ti 24/7.
                            </p>

                            <ul className="space-y-4 mb-8 text-center w-full">
                                <li className="flex items-center justify-center gap-3">
                                    <div className="bg-orange-50 p-1.5 rounded-full text-orange-500 flex justify-center w-8 h-8 items-center shrink-0"><Share2 size={16} /></div>
                                    <span className="font-medium text-gray-700 text-sm text-center">Integración con todas tus redes</span>
                                </li>
                                <li className="flex items-center justify-center gap-3">
                                    <div className="bg-orange-50 p-1.5 rounded-full text-orange-500 flex justify-center w-8 h-8 items-center shrink-0"><MessageSquare size={16} /></div>
                                    <span className="font-medium text-gray-700 text-sm text-center">Automatizaciones de DM</span>
                                </li>
                                <li className="flex items-center justify-center gap-3">
                                    <div className="bg-orange-50 p-1.5 rounded-full text-orange-500 flex justify-center w-8 h-8 items-center shrink-0"><Database size={16} /></div>
                                    <span className="font-medium text-gray-700 text-sm text-center">Hosting de curso y comunidad</span>
                                </li>
                            </ul>

                            <button onClick={() => window.location.hash = '#dashboard'} className="w-full text-white px-5 py-3 rounded-xl font-bold text-base shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-auto" style={{ backgroundColor: 'var(--color-secondary)' }}>
                                Empezar Ahora <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* UNIVERSITIES CARD */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 relative overflow-hidden group hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">

                        <div className="relative z-10 flex flex-col items-center h-full w-full">
                            <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300">
                                <span className="text-6xl">🏛️</span>
                            </div>

                            <div className="inline-flex items-center gap-2 bg-brand-light text-brand-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase mb-5 tracking-wide">
                                Universidades e Institutos
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Control y Escala Masiva.</h3>
                            <p className="text-gray-500 mb-6 text-sm leading-relaxed font-medium max-w-xs">
                                Gestiona miles de leads. LIA cualifica el tráfico y agenda citas para tu equipo humano.
                            </p>

                            <ul className="space-y-4 mb-8 text-center w-full">
                                <li className="flex items-center justify-center gap-3">
                                    <div className="bg-brand-light p-1.5 rounded-full text-brand-primary flex justify-center w-8 h-8 items-center shrink-0"><Users size={16} /></div>
                                    <span className="font-medium text-gray-700 text-sm text-center">Usuarios y contactos ilimitados</span>
                                </li>
                                <li className="flex items-center justify-center gap-3">
                                    <div className="bg-brand-light p-1.5 rounded-full text-brand-primary flex justify-center w-8 h-8 items-center shrink-0"><Layers size={16} /></div>
                                    <span className="font-medium text-gray-700 text-sm text-center">Integración con tu CRM</span>
                                </li>
                                <li className="flex items-center justify-center gap-3">
                                    <div className="bg-brand-light p-1.5 rounded-full text-brand-primary flex justify-center w-8 h-8 items-center shrink-0"><Database size={16} /></div>
                                    <span className="font-medium text-brand-primary text-sm text-center">API Dedicada y Reportes</span>
                                </li>
                            </ul>

                            <button className="w-full text-white px-5 py-3 rounded-xl font-bold text-base shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-auto" style={{ backgroundColor: 'var(--color-primary)' }}>
                                Contactar Ventas <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AudienceSplit;
