import React from 'react';
import { Palette, Heart, Activity, BookOpen, Users, Star } from 'lucide-react';
import { DATA_KEGIATAN_TK } from '../../data/index.js';

// Helper untuk Icons
const getIcon = (iconName, size = 48) => {
  switch (iconName) {
    case 'palette': return <Palette size={size} />;
    case 'heart': return <Heart size={size} />;
    case 'activity': return <Activity size={size} />;
    case 'book': return <BookOpen size={size} />;
    case 'users': return <Users size={size} />;
    default: return <Star size={size} />;
  }
};

export default function TKKegiatan() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen animate-[fadeIn_0.5s_ease-out]">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-huda-dark mb-6">Kegiatan Seru di TK</h2>
        <div className="w-32 h-2 bg-huda-yellow mx-auto rounded-full"></div>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">Kami merancang berbagai aktivitas yang merangsang kreativitas dan perkembangan otak anak di masa *golden age*.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {DATA_KEGIATAN_TK.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl shadow-xl p-10 transform hover:-translate-y-3 transition-all duration-300 border-b-8 border-huda-yellow hover:shadow-2xl">
            <div className="w-24 h-24 rounded-2xl bg-yellow-100 text-huda-yellow flex items-center justify-center mb-8 mx-auto transform rotate-3 hover:rotate-12 transition-transform">
              {getIcon(item.icon, 48)}
            </div>
            <h3 className="text-2xl font-extrabold text-center text-huda-dark mb-4">{item.title}</h3>
            <p className="text-center text-gray-600 text-lg leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}