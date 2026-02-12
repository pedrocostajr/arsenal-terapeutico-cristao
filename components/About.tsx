
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const points = [
    "Se entender com mais profundidade",
    "Se expressar com mais clareza",
    "Desenvolver consciência emocional",
    "Avançar com estrutura e sentido",
    "Integrar fé e cura de forma saudável"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">O que é o ATC?</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              O Arsenal Terapêutico Cristão é um pacote com <strong>62 ferramentas autorais</strong>, desenvolvidas para serem usadas antes e depois das sessões terapêuticas, ajudando o paciente a:
            </p>
            <ul className="space-y-4">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={24} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/2 bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="space-y-6">
              <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-blue-500">
                <p className="text-xl font-bold text-slate-800">É terapia aplicada.</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-blue-500">
                <p className="text-xl font-bold text-slate-800">É cristianismo com maturidade emocional.</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-blue-500">
                <p className="text-xl font-bold text-slate-800">É ferramenta pronta, não teoria vazia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
