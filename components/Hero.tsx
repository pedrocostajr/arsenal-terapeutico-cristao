
import React from 'react';
import { MOCKUP_IMAGE } from '../constants';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-8 border border-blue-500/30">
          <ShieldCheck size={18} />
          O MAIOR ARSENAL DA TERAPIA CRISTÃ
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Arsenal Terapêutico <span className="text-blue-400">Cristão (ATC)</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12">
          Um conjunto profissional com ferramentas práticas para terapeutas e psicólogos que desejam unir ciência emocional e uma visão cristocêntrica sólida no acompanhamento clínico.
        </p>

        <div className="max-w-4xl mx-auto mb-16 shadow-2xl rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
          <img 
            src={MOCKUP_IMAGE} 
            alt="Arsenal Terapêutico Cristão Mockup" 
            className="w-full h-auto object-cover"
          />
        </div>

        <a 
          href="#pricing"
          className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xl rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 group"
        >
          QUERO MEU ACESSO AGORA
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
        
        <p className="mt-4 text-slate-400 text-sm flex items-center justify-center gap-2">
          <ShieldCheck size={16} className="text-emerald-500" />
          Acesso imediato e 100% seguro
        </p>
      </div>
    </section>
  );
};
