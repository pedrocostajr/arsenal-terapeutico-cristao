
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 text-slate-500 text-center text-sm border-t border-slate-900">
      <div className="container mx-auto px-4">
        <p className="mb-4 text-slate-300 font-bold uppercase tracking-widest">Arsenal Terapêutico Cristão (ATC)</p>
        <p className="mb-8 max-w-lg mx-auto leading-relaxed">
          Unindo ciência emocional e visão cristocêntrica para transformar o atendimento clínico de psicólogos e terapeutas.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs uppercase tracking-widest font-semibold">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Suporte</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Arsenal Terapêutico Cristão. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
