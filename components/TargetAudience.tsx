
import React from 'react';
import { UserCheck } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const targets = [
    "Psicólogos cristãos",
    "Terapeutas cristãos",
    "Mentores emocionais com base clínica",
    "Profissionais que querem unir fé e ciência",
    "Quem deseja ferramentas prontas para aplicar"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">Para quem é o ATC?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targets.map((target, i) => (
            <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:translate-y-[-4px] transition-transform">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <UserCheck size={24} />
              </div>
              <span className="text-slate-800 font-semibold">{target}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
