import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "💸 ¿Hay costos adicionales a la suscripción?",
      a: "Sí, la transparencia es clave. Tú cubres los costos de consumo de IA (Tokens de OpenAI/Gemini) y la API de WhatsApp (Meta). Estos se pagan directamente al proveedor según tu uso real. LIA no cobra comisiones ni sobreprecios sobre estos costos."
    },
    {
      q: "🏷️ ¿Por cuánto tiempo aplica el descuento de lanzamiento?",
      a: "La oferta especial es válida para tus primeros 3 meses de servicio. Después, tu plan se ajustará al precio regular de lista, que sigue siendo una fracción del costo de un empleado humano."
    },
    {
      q: "🤖 ¿El Agente IA realmente cierra ventas?",
      a: "Absolutamente. LIA no es un chatbot básico. Está entrenada con técnicas de cierre de ventas, manejo de objeciones y urgencia. Puede llevar una conversación desde 'info' hasta 'link de pago' de forma autónoma."
    },
    {
      q: "🎓 ¿Por qué debería migrar mi academia a LIA LMS?",
      a: "Por rentabilidad. Plataformas como Hotmart te cobran hasta un 10% por cada venta + costos de retiro. En LIA, tú usas tu propia pasarela de pagos (Stripe/MercadoPago) y el dinero es 100% tuyo. Si vendes $10k, te ahorras $1k cada mes."
    },
    {
      q: "🎨 ¿Cómo funciona el Content Studio?",
      a: "Es magia. Subes tus grabaciones crudas y LIA identifica los momentos 'virales', los recorta, subtitula y genera el copy para redes sociales. Ahorras horas de edición manual."
    },
    {
      q: "📞 ¿Puedo intervenir en las conversaciones?",
      a: "Siempre. Tienes un panel de control donde ves los chats en tiempo real. Si el alumno requiere soporte humano complejo, LIA te notifica y te pasa el control inmediatamente."
    },
    {
      q: "🛡️ ¿Cuál es la política de garantía?",
      a: "Ofrecemos 7 días de garantía de satisfacción total. Si en tu primera semana sientes que LIA no es para ti, te reembolsamos tu dinero. Queremos clientes felices y exitosos."
    },
    {
      q: "🚀 ¿Qué incluye el 'Setup Prioritario' del plan Full Suite?",
      a: "Nos encargamos de todo. Subimos tus cursos, configuramos tu agente, armamos los flujos de venta y conectamos tu WhatsApp. Te entregamos las llaves del auto encendido."
    }
  ];

  return (
    <div className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase mb-6">
            <HelpCircle size={14} /> Dudas Frecuentes
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">
            Resolvemos tus dudas.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === i ? 'border-blue-200 bg-blue-50/30' : 'border-gray-200 hover:border-blue-100'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-bold text-lg ${openIndex === i ? 'text-blue-700' : 'text-gray-900'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">¿Tienes más preguntas?</p>
          <button className="btn-secondary px-8 py-3 rounded-xl font-bold shadow-lg shadow-orange-200 hover:-translate-y-1 transition-transform">
            Hablar con un Asesor 👨‍💼
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
