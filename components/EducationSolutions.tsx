import React from 'react';
import { Video, Calendar, BookOpen, Users } from 'lucide-react';

const EducationSolutions: React.FC = () => {
    const solutions = [
        {
            icon: "📹",
            title: "Lanzamientos y Webinars",
            desc: "LIA calienta a la audiencia, envía recordatorios de asistencia y persigue a los que no compraron en vivo.",
            color: "text-red-500",
            bg: "bg-red-50"
        },
        {
            icon: "🗓️",
            title: "Talleres en Vivo",
            desc: "Automatiza la confirmación de asistencia, envía la ubicación por Maps y gestiona los cupos disponibles.",
            color: "text-purple-500",
            bg: "bg-purple-50"
        },
        {
            icon: "📚",
            title: "Cursos Grabados / Libres",
            desc: "Vende tus cursos grabados 24/7. LIA resuelve dudas del temario y envía el link de pago al instante.",
            color: "text-green-500",
            bg: "bg-green-50"
        },
        {
            icon: "🤝",
            title: "Agendamiento de Citas",
            desc: "Para mentorías High-Ticket. LIA califica al prospecto y solo agenda a quienes tienen el presupuesto.",
            color: "text-blue-500",
            bg: "bg-blue-50"
        }
    ];

    return (
        <div className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Sabemos Cómo Vender <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Educación.</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        No importa tu modelo de negocio. LIA está entrenada para adaptarse a tu estrategia de venta.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((sol, i) => (
                        <div key={i} className="group p-8 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                            <div className={`w-14 h-14 rounded-2xl ${sol.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-2xl`}>
                                {sol.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{sol.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                {sol.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default EducationSolutions;
