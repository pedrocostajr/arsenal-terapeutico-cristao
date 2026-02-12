
import React from 'react';
import { Brain, Zap, Target, Cross, Search } from 'lucide-react';

export const Differentials: React.FC = () => {
  const pillars = [
    {
      icon: <Search className="text-blue-500" />,
      title: "Psicanálise",
      desc: "Profundidade e raiz emocional"
    },
    {
      icon: <Brain className="text-purple-500" />,
      title: "Neurociência",
      desc: "Base real do funcionamento humano"
    },
    {
      icon: <Zap className="text-yellow-500" />,
      title: "PNL",
      desc: "Resultados em curto e médio prazo"
    },
    {
      icon: <Target className="text-red-500" />,
      title: "TCC",
      desc: "Estrutura prática e aplicável"
    },
    {
      icon: <Cross className="text-emerald-500" />,
      title: "Visão Cristã",
      desc: "Identidade, propósito e integração espiritual"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O Diferencial</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          Uma abordagem que não é religiosa, nem fria. É completa e integra 5 pilares essenciais:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="mb-4 bg-slate-50 p-4 rounded-full">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{pillar.title}</h3>
              <p className="text-sm text-slate-500">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
