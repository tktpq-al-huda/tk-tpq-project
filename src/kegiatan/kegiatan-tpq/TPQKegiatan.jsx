import React from 'react';
import { BookOpen, Mic, Users, Star, Activity, Heart } from 'lucide-react';

// Data Kegiatan TPQ diletakkan langsung di sini agar tidak terjadi error import
const DATA_KEGIATAN_TPQ = [
  { id: 1, title: 'Klasikal & Privat', desc: 'Belajar membaca Iqro dan Al-Qur\'an secara tartil dengan bimbingan langsung (privat) oleh asatidz.', icon: 'book' },
  { id: 2, title: 'Muroja\'ah Bersama', desc: 'Kegiatan mengulang hafalan surat-surat pendek (Juz 30) secara bersama-sama agar hafalan semakin kuat.', icon: 'mic' },
  { id: 3, title: 'Kisah Islami & Akhlak', desc: 'Penyampaian sirah Nabawiyah, kisah para sahabat, dan penanaman adab serta akhlakul karimah.', icon: 'users' },
];

// Helper untuk Icons
const getIcon = (iconName, size = 48) => {
  switch (iconName) {
    case 'book': return <BookOpen size={size} />;
    case 'mic': return <Mic size={size} />;
    case 'users': return <Users size={size} />;
    case 'activity': return <Activity size={size} />;
    case 'heart': return <Heart size={size} />;
    default: return <Star size={size} />;
  }
};

export default function TPQKegiatan() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen animate-[fadeIn_0.5s_ease-out]">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-huda-dark mb-6">Kegiatan Harian TPQ</h2>
        <div className="w-32 h-2 bg-huda-green mx-auto rounded-full"></div>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">Kami merancang metode pembelajaran yang interaktif dan berjenjang, memastikan setiap santri mendapatkan perhatian penuh dalam proses belajarnya memahami Al-Qur'an.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {DATA_KEGIATAN_TPQ.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl shadow-xl p-10 transform hover:-translate-y-3 transition-all duration-300 border-t-8 border-huda-green hover:shadow-2xl">
            <div className="w-24 h-24 bg-green-50 text-huda-green rounded-2xl flex items-center justify-center mb-8 mx-auto transform -rotate-3 hover:-rotate-12 transition-transform">
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