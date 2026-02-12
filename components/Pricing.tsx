
import React from 'react';
import { CHECKOUT_LINK, PRODUCT_PRICE } from '../constants';
import { CreditCard, ShieldCheck, CheckCircle, Gift, Sparkles, Clock } from 'lucide-react';

export const Pricing: React.FC = () => {
  const reinforcementItems = [
    {
      icon: <Sparkles className="text-yellow-400" size={24} />,
      text: "62 Ferramentas Terapêuticas Autorais e Exclusivas"
    },
    {
      icon: <Clock className="text-blue-400" size={24} />,
      text: "Acesso Vitalício (pague uma vez, use para sempre)"
    },
    {
      icon: <Gift className="text-purple-400" size={24} />,
      text: "Todas as Atualizações Futuras Inclusas Grátis"
    },
    {
      icon: <CheckCircle className="text-emerald-400" size={24} />,
      text: "Aula de Boas-Vindas e Guia de Aplicação Clínica"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
            
            {/* Reinforcement Section */}
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Resumo do seu Investimento</h2>
              <div className="grid grid-cols-1 gap-4 text-left max-w-lg mx-auto mb-10">
                {reinforcementItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-slate-800/50 p-5 rounded-2xl border border-slate-700/50">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span className="text-lg font-medium text-slate-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Card */}
            <div className="bg-white text-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl mb-12 relative text-center">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg">
                    Oferta de Lançamento
                </div>
                
                <p className="text-slate-500 font-medium mb-4 uppercase tracking-widest">Apenas hoje por:</p>
                <div className="flex items-center justify-center gap-1 mb-8">
                    <span className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">{PRODUCT_PRICE}</span>
                </div>
                
                <p className="text-slate-600 text-lg mb-8 italic">"Menos que o valor de uma única sessão para transformar todos os seus próximos atendimentos."</p>
                
                <a 
                    href={CHECKOUT_LINK}
                    className="flex items-center justify-center gap-3 w-full py-6 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-2xl rounded-2xl transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
                >
                    <CreditCard />
                    QUERO MEU ACESSO AGORA
                </a>
                
                <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-slate-400 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="text-blue-500" size={18} />
                        Pagamento Seguro
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="text-blue-500" size={18} />
                        Acesso Imediato
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="text-blue-500" size={18} />
                        Satisfação Garantida
                    </div>
                </div>
            </div>

            <div className="space-y-4 text-lg text-slate-300 text-center">
                <p>O terapeuta não precisa de mais teoria. Ele precisa de ferramentas.</p>
                <p>O paciente não precisa de mais conselhos. Ele precisa de consciência, direção e integração.</p>
                <p className="text-xl font-bold text-white uppercase tracking-wider mt-6">Isso é o Arsenal Terapêutico Cristão.</p>
            </div>
        </div>
      </div>
    </section>
  );
};
