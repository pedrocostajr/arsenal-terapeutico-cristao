
import React from 'react';

export const Benefits: React.FC = () => {
  const items = [
    "Pré e Pós-sessão",
    "Exercícios de consciência emocional",
    "Reflexão guiada durante a semana",
    "Cura e integração do paciente",
    "Apoio prático entre encontros terapêuticos"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Para que serve o ATC?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-4">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                      <span className="text-2xl">✅</span>
                      <span className="text-lg font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center md:text-left space-y-6">
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-emerald-400">Você entrega algo concreto.</p>
                  <p className="text-2xl font-bold text-emerald-400">O paciente volta melhor.</p>
                  <p className="text-2xl font-bold text-emerald-400">O processo acelera.</p>
                </div>
                
                <div className="pt-6">
                  <a 
                    href="#pricing"
                    className="inline-block px-10 py-5 bg-white text-slate-900 font-bold text-xl rounded-xl hover:bg-slate-100 transition-colors shadow-xl"
                  >
                    GARANTIR MEU ACESSO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
