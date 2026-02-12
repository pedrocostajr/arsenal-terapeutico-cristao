
import React from 'react';
import { FileText, RefreshCw, MonitorPlay, Check } from 'lucide-react';

export const WhatYouReceive: React.FC = () => {
  const tools = ["Ansiedade", "Bloqueios emocionais", "Identidade", "Perdão", "Autoconsciência", "Cura interior", "Integração emocional com fé"];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">O que você recebe</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Pack */}
          <div className="bg-white border-2 border-slate-100 rounded-3xl p-8 hover:border-blue-500 transition-colors shadow-xl">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <FileText size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">62 Ferramentas Autorais</h3>
            <p className="text-slate-600 mb-6">Tudo estruturado para uso terapêutico real em temas como:</p>
            <ul className="space-y-3">
              {tools.map((tool, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700">
                  <Check size={18} className="text-emerald-500" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* Updates */}
          <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
                <span className="bg-emerald-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Vitalício</span>
            </div>
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:rotate-180 transition-transform duration-700">
              <RefreshCw size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Atualizações Gratuitas</h3>
            <p className="text-slate-300 leading-relaxed">
              Comprou uma vez... Sempre que novas ferramentas forem criadas, você recebe automaticamente, sem custo adicional.
            </p>
            <div className="mt-8 p-4 bg-slate-800 rounded-xl">
                <p className="text-sm font-medium text-emerald-400">Sua biblioteca viva de ferramentas.</p>
            </div>
          </div>

          {/* Lesson */}
          <div className="bg-white border-2 border-slate-100 rounded-3xl p-8 hover:border-blue-500 transition-colors shadow-xl">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6">
              <MonitorPlay size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Aula de Boas-Vindas</h3>
            <p className="text-slate-600">Você não recebe apenas PDFs. Recebe uma aula guiada explicando:</p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-slate-700">
                <Check size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                <span>Como usar corretamente</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700">
                <Check size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                <span>Quando aplicar cada ferramenta</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700">
                <Check size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                <span>Como potencializar resultados</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
