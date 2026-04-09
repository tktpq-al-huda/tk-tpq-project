import React, { useState } from 'react';
import { BookOpen, Mic, Users, Star, Activity, Heart, X, Image as ImageIcon } from 'lucide-react';

const DATA_KEGIATAN_TPQ = [
  { 
    id: 1, 
    title: 'Klasikal & Privat', 
    desc: 'Belajar membaca Iqro dan Al-Qur\'an secara tartil dengan bimbingan langsung (privat) oleh asatidz.', 
    icon: 'book',
    gallery: [
      'https://images.unsplash.com/photo-1609599006353-e629aaab21fc?auto=format&fit=crop&w=800&q=80',
      'https://img.freepik.com/premium-photo/group-muslim-children-reading-holy-books-quran-together-mosque_603656-4176.jpg?w=800&q=80',
      'https://images.unsplash.com/photo-1576769267415-9642010aa962?auto=format&fit=crop&w=800&q=80'
    ]
  },
  { 
    id: 2, 
    title: 'Muroja\'ah Bersama', 
    desc: 'Kegiatan mengulang hafalan surat-surat pendek (Juz 30) secara bersama-sama agar hafalan semakin kuat.', 
    icon: 'mic',
    gallery: [
      'https://img.freepik.com/free-photo/muslim-family-reading-quran-together_53876-20967.jpg?w=800&q=80',
      'https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&w=800&q=80',
      'https://img.freepik.com/free-photo/kids-learning-about-islam_23-2149025816.jpg?w=800&q=80'
    ]
  },
  { 
    id: 3, 
    title: 'Kisah Islami & Akhlak', 
    desc: 'Penyampaian sirah Nabawiyah, kisah para sahabat, dan penanaman adab serta akhlakul karimah.', 
    icon: 'users',
    gallery: [
      'https://img.freepik.com/free-photo/teacher-teaching-kids-about-islam_23-2149025811.jpg?w=800&q=80',
      'https://images.unsplash.com/photo-1584598173971-b7cc2b0a5fa3?auto=format&fit=crop&w=800&q=80',
      'https://img.freepik.com/free-photo/arab-boys-studying_53876-20959.jpg?w=800&q=80'
    ]
  },
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
  const [selectedActivity, setSelectedActivity] = useState(null);

  if (selectedActivity) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen animate-[fadeIn_0.5s_ease-out]">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-huda-dark mb-6">Kegiatan Harian TPQ</h2>
        <div className="w-32 h-2 bg-huda-green mx-auto rounded-full"></div>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">Kami merancang metode pembelajaran yang interaktif dan berjenjang. Klik kegiatan di bawah untuk melihat dokumentasi foto kami!</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {DATA_KEGIATAN_TPQ.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedActivity(item)}
            className="bg-white rounded-3xl shadow-xl p-10 transform hover:-translate-y-3 transition-all duration-300 border-t-8 border-huda-green hover:shadow-2xl cursor-pointer group"
          >
            <div className="w-24 h-24 bg-green-50 text-huda-green rounded-2xl flex items-center justify-center mb-8 mx-auto transform -rotate-3 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300">
              {getIcon(item.icon, 48)}
            </div>
            <h3 className="text-2xl font-extrabold text-center text-huda-dark mb-4 group-hover:text-huda-green transition-colors">{item.title}</h3>
            <p className="text-center text-gray-600 text-lg leading-relaxed mb-4">{item.desc}</p>
            <div className="text-center text-huda-green font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <ImageIcon size={16} /> Lihat Galeri
            </div>
          </div>
        ))}
      </div>

      {/* POP-UP / MODAL GALERI TPQ */}
      {selectedActivity && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
            onClick={() => setSelectedActivity(null)}
          ></div>
          
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl relative z-10 flex flex-col animate-[bounceIn_0.4s_ease-out] overflow-hidden">
            
            <button 
              onClick={() => setSelectedActivity(null)}
              className="absolute top-4 right-4 z-20 bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-800 p-2 rounded-full transition-colors shadow-sm"
            >
              <X size={24} />
            </button>

            {/* Header Pop-up TPQ */}
            <div className="p-6 sm:p-8 border-b border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 bg-green-50/50">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-huda-green text-white flex items-center justify-center shadow-lg transform rotate-3">
                  {getIcon(selectedActivity.icon, 40)}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-3xl font-extrabold text-huda-dark mb-2">{selectedActivity.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-2xl">{selectedActivity.desc}</p>
              </div>
            </div>

            {/* Area Galeri Foto */}
            <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar bg-white flex-grow">
               <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <ImageIcon className="text-huda-green" size={24} /> Dokumentasi {selectedActivity.title}
               </h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {selectedActivity.gallery.map((img, idx) => (
                    <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-md border-4 border-gray-50 aspect-[4/3] bg-gray-100">
                      <img 
                        src={img} 
                        alt={`${selectedActivity.title} ${idx + 1}`} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://placehold.co/800x600/16a34a/ffffff?text=Foto+Menyusul";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}