import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "🤖 ¿Qué diferencia a LIA de un chatbot convencional?",
      a: "LIA no es un bot de soporte, es un Agente de Ventas. Mientras un chatbot normal espera preguntas, LIA persigue la venta, maneja objeciones, usa gatillos mentales de urgencia y hace seguimiento por días hasta cerrar. Además, vive dentro de un ecosistema que incluye LMS y CRM."
    },
    {
      q: "🛠️ ¿Necesito mantener mis suscripciones de Teachable, Kajabi o ClickFunnels?",
      a: "Probablemente no. LIA incluye un LMS completo (alojamiento de cursos), herramientas de Email Marketing y construcción de Landing Pages. La mayoría de nuestros clientes cancelan sus otras herramientas y se ahorran cientos de dólares al mes centralizando todo en LIA."
    },
    {
      q: "💸 ¿Cómo funciona el cobro de WhatsApp y la IA?",
      a: "Funcionamos con transparencia total. LIA no te cobra markup. Tú conectas tu tarjeta directamente a Meta (WhatsApp) y OpenAI. Pagas exactamente lo que consumes. Un usuario promedio gasta entre $15-$30 USD extras al mes por miles de conversaciones."
    },
    {
      q: "🧠 ¿Qué tengo que hacer yo y qué hace LIA?",
      a: "Tú eres el experto en tu tema: grabas tus cursos y defines tu oferta. LIA es tu equipo técnico y comercial: configura el bot, crea tus páginas de venta, gestiona los alumnos y procesa los pagos. Tú pones el contenido, LIA pone el sistema."
    },
    {
      q: "🎨 ¿Qué es el Content Studio IA?",
      a: "Es nuestra suite de creatividad artificial. LIA analiza tu contenido y crea automáticamente los assets de marketing que necesitas: posts para Instagram/TikTok, correos de venta persuasivos y estructuras de anuncios, todo entrenado con tu estilo y la información real de tu curso."
    },
    {
      q: "⚡ ¿Realmente puedo empezar en 48 horas?",
      a: "Sí. Nuestro sistema de 'Onboarding Express' está diseñado para velocidad. Si ya tienes tu material listo (temario y videos), nuestro equipo configura tu agente y tu plataforma en 2 días hábiles para que lances campañas el fin de semana."
    },
    {
      q: "💰 ¿LIA cobra comisiones por mis ventas?",
      a: "Cero. 0%. Nada. A diferencia de Hotmart o Udemy que se llevan un 10-50%, en LIA tú conectas tu propia pasarela (Stripe o MercadoPago). El dinero va directo de tu alumno a tu cuenta bancaria. Tu éxito es 100% tuyo."
    },
    {
      q: "📞 ¿Qué pasa si un usuario hace una pregunta muy difícil?",
      a: "LIA es inteligente, pero conoce sus límites. Si detecta una situación compleja o frustración en el usuario, transfiere el chat inmediatamente a un humano (ti o tu equipo) y te notifica por WhatsApp/Email para que intervengas al instante."
    },
    {
      q: "💳 ¿Puedo usar mi propia pasarela de pagos?",
      a: "Sí. Nos integramos nativamente con Stripe y MercadoPago para cobros automáticos. También puedes configurar transferencias bancarias manuales o Yape/Plin, y LIA puede enviar los datos y validar los comprobantes (con supervisión)."
    },
    {
      q: "♾️ ¿Tengo límite de alumnos o contactos?",
      a: "No. Creemos que no se debe castigar el crecimiento. Tu plan incluye usuarios, contactos y cursos ilimitados. Escala de 100 a 100,000 alumnos sin que tu mensualidad de LIA suba de precio."
    },
    {
      q: "🏛️ ¿Sirve para Universidades o solo para cursos online?",
      a: "LIA es modular. Para infoproductores, automatiza todo el negocio. Para Universidades e Institutos, LIA actúa como un cualificador masivo de leads que se integra con CRMs corporativos (Salesforce/HubSpot) para limpiar el tráfico antes de pasarlo a asesores humanos."
    }
  ];

  return (
    <div className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase mb-6 tracking-wide">
            <HelpCircle size={14} /> Dudas Frecuentes
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Todo lo que necesitas saber
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre costos, implementación y tecnología.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === i ? 'border-blue-500 ring-4 ring-blue-50 bg-white shadow-lg' : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'}`}
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

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 font-medium">¿Tienes una duda específica?</p>
          <button className="bg-[#007AFF] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
            <span>Hablar con un Experto</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
