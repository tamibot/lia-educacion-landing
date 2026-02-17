
import React from 'react';
import { LayoutGrid, Database, Zap, Settings, User } from 'lucide-react';

const Dashboard: React.FC = () => {
  const tools = [
    { title: "Homogenizador de Cursos", icon: <Database className="text-iosBlue" />, status: "Activo" },
    { title: "Creador de Sílabos", icon: <Zap className="text-iosOrange" />, status: "Próximamente" },
    { title: "Generador de Anuncios", icon: <LayoutGrid className="text-purple-500" />, status: "Próximamente" }
  ];

  return (
    <div className="flex h-screen bg-appleGray">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-black/5 p-6 flex flex-col">
        <div className="mb-10 px-2 font-black text-2xl tracking-tighter">LIA.APP 🧡</div>
        <nav className="space-y-2 flex-grow">
          <a href="#" className="flex items-center gap-3 p-3 bg-iosBlue/10 text-iosBlue rounded-xl font-bold transition-all">
            <LayoutGrid size={20} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-500 hover:bg-black/5 rounded-xl font-medium transition-all text-sm">
            <Database size={20} /> Mis Herramientas
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-500 hover:bg-black/5 rounded-xl font-medium transition-all text-sm">
            <Settings size={20} /> Configuración
          </a>
        </nav>
        <div className="mt-auto flex items-center gap-3 p-3 border-t border-black/5 pt-6">
           <div className="w-10 h-10 rounded-full bg-iosOrange/20 flex items-center justify-center text-iosOrange font-bold">U</div>
           <div className="text-sm font-bold truncate">Mi Cuenta</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-10 overflow-auto">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">Panel de Herramientas</h1>
            <p className="text-gray-500 font-medium">Bienvenido a tu ecosistema de IA académica.</p>
          </div>
          <button className="btn-ios-blue text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 text-sm">
             Nueva Automatización <Zap size={16} />
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {tools.map((tool, idx) => (
             <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-black/5 ios-shadow ios-card flex flex-col group">
                <div className="w-14 h-14 rounded-2xl bg-appleGray flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-black mb-2">{tool.title}</h3>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit ${tool.status === 'Activo' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                  {tool.status}
                </span>
                <p className="text-gray-400 text-sm mt-6 font-medium leading-relaxed">
                  Accede a la potencia de la IA para este proceso específico.
                </p>
                <div className="mt-auto pt-8 flex items-center text-iosBlue font-black text-xs gap-1 group-hover:gap-2 transition-all">
                  IR A LA HERRAMIENTA <span>→</span>
                </div>
             </div>
           ))}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
