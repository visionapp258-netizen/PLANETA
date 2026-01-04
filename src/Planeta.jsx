import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, Users, Home, Plus, Instagram, ArrowRight, X } from 'lucide-react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Mock Data
  const products = [
    { id: 1, name: 'ECOS DE MAPUTO V.1', price: '2.500 MZN', description: 'Algodão cru que carrega as frequências das ruas. Um manifesto tátil.', category: 'VESTUÁRIO' },
    { id: 2, name: 'FRAGMENTOS (ZINE)', price: '800 MZN', description: 'Registo visual da cultura urbana moçambicana.', category: 'EDITORIAL' },
    { id: 3, name: 'PLANETA TOTEM', price: '4.200 MZN', description: 'Escultura minimalista em madeira negra.', category: 'ARTE' },
  ];

  const events = [
    { id: 1, date: '25', month: 'JAN', title: 'NOITE DE JAZZ E POESIA "EU E TU"', local: 'Centro Franco-Moçambicano', status: 'PRÓXIMO' },
    { id: 2, date: '02', month: 'FEV', title: 'WORKSHOP: AUDIOVISUAL INDEPENDENTE', local: 'Estúdio Planeta', status: 'ESGOTADO' },
    { id: 3, date: '10', month: 'FEV', title: 'LANÇAMENTO EP "FORASTEIROS"', local: 'Online / Maputo', status: 'MEMÓRIA' },
  ];

  const community = [
    { id: 1, name: 'Nadir S.', role: 'Realizador', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=400&auto=format&fit=crop' },
    { id: 2, name: 'Maya C.', role: 'Curadora', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=400&auto=format&fit=crop' },
    { id: 3, name: 'Elisio B.', role: 'Músico', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=400&auto=format&fit=crop' },
    { id: 4, name: 'Sarah L.', role: 'Designer', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&h=400&auto=format&fit=crop' },
  ];

  const NavItem = ({ id, icon: Icon, label }) => (
    <div 
      className="relative flex items-center justify-end mb-8 cursor-pointer group"
      onClick={() => setActiveTab(id)}
      onMouseEnter={() => setHoveredIcon(id)}
      onMouseLeave={() => setHoveredIcon(null)}
    >
      {hoveredIcon === id && (
        <span className="absolute right-12 text-[10px] tracking-[0.2em] text-white uppercase transition-all duration-300 opacity-100 mr-2">
          {label}
        </span>
      )}
      <div className={`p-2 transition-all duration-300 ${activeTab === id ? 'text-white scale-125' : 'text-zinc-600 group-hover:text-zinc-300'}`}>
        <Icon size={20} strokeWidth={1.5} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-white selection:text-black">
      
      {/* HEADER FIXO */}
      <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-start z-50 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center">
          <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center overflow-hidden">
             {/* Simulação do Astronauta */}
             <div className="w-6 h-6 bg-zinc-800 rounded-full border border-white/20 relative">
                <div className="absolute top-1 left-1 w-2 h-1 bg-white/40 rounded-full"></div>
             </div>
          </div>
        </div>

        <div className="pointer-events-auto text-center">
          <h1 className="text-[10px] tracking-[0.4em] uppercase font-light text-zinc-400">
            BEM VINDOS A | <span className="text-white">MEDIA</span>
          </h1>
        </div>

        <div className="w-10"></div> {/* Spacer */}
      </header>

      {/* NAVEGAÇÃO LATERAL DIREITA */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <NavItem id="home" icon={Home} label="Início" />
        <NavItem id="shop" icon={ShoppingBag} label="O Espólio" />
        <NavItem id="agenda" icon={Calendar} label="O Ritmo" />
        <NavItem id="community" icon={Users} label="Forasteiros" />
      </nav>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="pt-32 pb-20 px-10 md:px-24 max-w-7xl mx-auto">
        
        {/* SECÇÃO: HOME (Mimetizando o seu print) */}
        {activeTab === 'home' && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-in fade-in duration-700">
             <div className="mb-12">
               {/* Simulação de um Logo desenhado à mão */}
               <svg viewBox="0 0 200 100" className="w-64 h-32 stroke-white fill-none opacity-80">
                 <path d="M20,50 Q50,10 80,50 T140,50" strokeWidth="1" />
                 <text x="50%" y="60%" textAnchor="middle" className="text-2xl font-serif italic" fill="white">Planeta</text>
               </svg>
             </div>
             <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Olá forasteiros,</h2>
             <p className="max-w-md text-zinc-400 leading-relaxed font-light tracking-wide">
               A nossa casa é o universo. Criamos conexões entre marcas, arte e pessoas através de experiências audiovisuais e culturais em Maputo.
             </p>
             <button 
              onClick={() => setActiveTab('shop')}
              className="mt-12 px-8 py-3 border border-white/20 text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-colors"
             >
               Explorar Órbita
             </button>
          </div>
        )}

        {/* SECÇÃO: LOJA */}
        {activeTab === 'shop' && (
          <div className="animate-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 mb-16">/ O ESPÓLIO</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Produto Destaque */}
              <div className="lg:col-span-8 group cursor-crosshair">
                <div className="aspect-[16/9] bg-zinc-900 overflow-hidden relative border border-white/5">
                  <img 
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale group-hover:grayscale-0"
                    alt="Destaque"
                  />
                  <div className="absolute bottom-8 left-8">
                    <span className="text-[9px] tracking-[0.2em] bg-white text-black px-2 py-1 uppercase mb-2 inline-block">Edição Limitada</span>
                    <h3 className="text-3xl font-serif italic">{products[0].name}</h3>
                  </div>
                </div>
              </div>

              {/* Detalhes Destaque */}
              <div className="lg:col-span-4 flex flex-col justify-center">
                <p className="text-zinc-400 font-light leading-relaxed mb-6">
                  {products[0].description}
                </p>
                <span className="text-xl mb-8 block font-mono">{products[0].price}</span>
                <button className="flex items-center justify-between w-full p-4 border border-white text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all">
                  Coletar Artefacto <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Grid Secundário */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              {products.slice(1).map(product => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="aspect-square bg-zinc-900 border border-white/5 mb-4 overflow-hidden">
                     <div className="w-full h-full bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <ShoppingBag size={40} strokeWidth={0.5} className="opacity-20" />
                     </div>
                  </div>
                  <h4 className="text-[11px] tracking-[0.2em] uppercase mb-1">{product.name}</h4>
                  <p className="text-zinc-500 text-[10px] uppercase font-mono">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECÇÃO: AGENDA */}
        {activeTab === 'agenda' && (
          <div className="animate-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto">
            <h2 className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 mb-16">/ O RITMO</h2>
            
            <div className="space-y-0 border-l border-white/10 ml-4 md:ml-0">
              {events.map((event) => (
                <div key={event.id} className="relative pl-12 pb-16 group">
                  {/* Ponto na timeline */}
                  <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-white scale-0 group-hover:scale-125 transition-transform border border-black ring-4 ring-black"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex flex-col items-start min-w-[80px]">
                      <span className="text-4xl font-serif italic leading-none">{event.date}</span>
                      <span className="text-[10px] tracking-widest text-zinc-500 uppercase">{event.month}</span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className={`text-[8px] tracking-[0.2em] px-2 py-0.5 border ${
                          event.status === 'PRÓXIMO' ? 'border-white text-white' : 
                          event.status === 'ESGOTADO' ? 'border-zinc-700 text-zinc-600' : 
                          'border-zinc-500 text-zinc-500'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif mb-2 group-hover:translate-x-2 transition-transform duration-300">
                        {event.title}
                      </h3>
                      <p className="text-zinc-500 text-xs tracking-wide uppercase">{event.local}</p>
                    </div>

                    <button className="self-end md:self-center p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECÇÃO: COMUNIDADE */}
        {activeTab === 'community' && (
          <div className="animate-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 mb-4">/ OS FORASTEIROS</h2>
                <h3 className="text-4xl font-serif italic max-w-md">O ecossistema que move o Planeta.</h3>
              </div>
              <button className="text-[10px] tracking-[0.2em] border-b border-white/20 pb-1 hover:border-white transition-all uppercase">
                Tornar-se um Forasteiro
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] bg-white/5 border border-white/5">
              {community.map((member) => (
                <div key={member.id} className="relative aspect-[3/4] group overflow-hidden bg-black">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs font-serif italic mb-1">{member.name}</p>
                    <p className="text-[8px] tracking-[0.2em] uppercase text-zinc-400 mb-2">{member.role}</p>
                    <div className="flex gap-2">
                      <Instagram size={12} className="cursor-pointer hover:text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-12 border border-dashed border-white/10 text-center">
              <p className="text-zinc-500 italic font-serif text-lg">"Não somos uma agência, somos um destino criativo."</p>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="fixed bottom-0 left-0 w-full p-8 flex justify-between items-end pointer-events-none text-[8px] tracking-[0.3em] text-zinc-600 uppercase z-50">
        <div className="pointer-events-auto">MAPUTO, MZ</div>
        <div className="pointer-events-auto">© 2024 PLANETA MEDIA</div>
      </footer>

      <SpeedInsights />
    </div>
  );
};

export default App;


