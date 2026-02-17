import React from 'react';
import { Target, Users, Zap, Building2, BarChart3, Database, ArrowRight } from 'lucide-react';

const AudienceSplit: React.FC = () => {
    return (
        <div className="py-16 bg-[#FBFBFD] border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Diseñada para tu <span className="text-blue-600">Escala.</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Soluciones específicas para cada etapa de crecimiento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* CREATORS CARD (Static) */}
                    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden group hover:border-orange-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">

                        <div className="relative z-10 flex flex-col items-center h-full w-full">
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                <span className="text-7xl">⚡️</span>
                            </div>

                            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6 tracking-wide">
                                Para Creadores
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Automatización Total.</h3>
                            <p className="text-gray-500 mb-8 text-lg leading-relaxed font-medium max-w-md">
                                Tu equipo de 1 persona. LIA gestiona tus redes, hostea tus cursos y vende por ti 24/7.
                            </p>

                            <ul className="space-y-4 mb-10 text-left inline-block w-full max-w-xs">
                                <li className="flex items-center gap-3">
                                    <div className="bg-orange-50 p-2 rounded-full text-orange-500 min-w-[36px]"><Target size={18} /></div>
                                    <span className="font-medium text-gray-700">Respuesta auto en IG/WhatsApp</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-orange-50 p-2 rounded-full text-orange-500 min-w-[36px]"><Database size={18} /></div>
                                    <span className="font-medium text-gray-700">Hosting de Cursos y Comunidad</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-orange-50 p-2 rounded-full text-orange-500 min-w-[36px]"><BarChart3 size={18} /></div>
                                    <span className="font-medium text-gray-700">Sin equipo de ventas</span>
                                </li>
                            </ul>

                            <button onClick={() => window.location.hash = '#dashboard'} className="w-full text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-auto" style={{ backgroundColor: 'var(--color-secondary)' }}>
                                Empezar Ahora <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* UNIVERSITIES CARD (Static) */}
                    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden group hover:border-blue-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">

                        <div className="relative z-10 flex flex-col items-center h-full w-full">
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                <span className="text-7xl">🏛️</span>
                            </div>

                            <div className="inline-flex items-center gap-2 bg-brand-light text-brand-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6 tracking-wide">
                                Para Universidades
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Control y Escala Masiva.</h3>
                            <p className="text-gray-500 mb-8 text-lg leading-relaxed font-medium max-w-md">
                                Gestiona miles de leads. LIA cualifica el tráfico y agenda citas para tu equipo humano.
                            </p>

                            <ul className="space-y-4 mb-10 text-left inline-block w-full max-w-xs">
                                <li className="flex items-center gap-3">
                                    <div className="bg-brand-light p-2 rounded-full text-brand-primary min-w-[36px]"><Users size={18} /></div>
                                    <span className="font-medium text-gray-700">Gestión de +50k leads</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-brand-light p-2 rounded-full text-brand-primary min-w-[36px]"><Target size={18} /></div>
                                    <span className="font-medium text-gray-700">Integración CRM (Salesforce)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-brand-light p-2 rounded-full text-brand-primary min-w-[36px]"><Database size={18} /></div>
                                    <span className="font-medium text-brand-primary">API Dedicada y Reportes</span>
                                </li>
                            </ul>

                            <button className="w-full text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-auto" style={{ backgroundColor: 'var(--color-primary)' }}>
                                Contactar Ventas <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AudienceSplit;
