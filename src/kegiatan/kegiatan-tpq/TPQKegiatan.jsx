import React, { useState } from 'react';
import { BookOpen, Mic, Users, Star, Activity, Heart, X, Image as ImageIcon, Award, CheckCircle } from 'lucide-react';

const DATA_KEGIATAN_TPQ = [
  { 
    id: 1, 
    title: 'Klasikal & Privat serta Muroja\'ah Bersama', 
    desc: 'Belajar membaca iqro dan Al Quran secara tartil dgn bimbingan langsung (privat) oleh Asatidz serta Kegiatan Murajaah Bersama mengulang hafalan surat pendek (Juz 30).', 
    icon: 'book',
    gallery: [
      '/foto-profil-kegiatan-tpq/klasikal-privat.jpg',
      '/foto-profil-kegiatan-tpq/muroja-ah-bersama.jpg',
    ]
  },
  { 
    id: 2, 
    title: 'Kegiatan fiqih & Tauhid', 
    desc: 'Fondasi utama pendidikan Islam yang berfokus pada pengetahuan akidah (tauhid) dan tata cara ibadah (fiqih).', 
    icon: 'users',
    gallery: [
      '/foto-profil-kegiatan-tpq/kisah-islami-akhlak.jpg',
    ]
  },
  { 
    id: 3, 
    title: 'Praktik Ibadah', 
    desc: 'Pengenalan rukun Islam sejak dini, praktik wudhu, gerakan sholat, serta hafalan hadits dan doa harian.', 
    icon: 'half-moon',
    gallery: [
      '/foto-profil-kegiatan-tpq/praktik-ibadah-tpq.jpg',
    ]
  },
  { 
    id: 4, 
    title: 'Ekstrakurikuler', 
    desc: 'Kegiatan Tambahan yang bertujuan mengembangkan minat, bakat dan keterampilan santri TPQ.', 
    icon: 'mic',
    // TAMBAHAN: subItems untuk TPQ
    subItems: [
      { name: 'Seni Rebana / Hadroh', desc: 'Melatih kekompakan, rasa percaya diri, dan kecintaan pada kesenian Islam melalui lantunan shalawat.', img: '/foto-profil-kegiatan-tpq/eksul-rebana.jpeg' },
      { name: 'Seni Islami Lainnya', desc: 'Pengembangan bakat seni santri untuk persiapan lomba maupun pementasan akhir tahun.', img: '/foto-profil-kegiatan-tpq/eskul-rebana-2.jpg' }
    ],
    gallery: [
      '/foto-profil-kegiatan-tpq/eksul-rebana.jpeg',
      '/foto-profil-kegiatan-tpq/eskul-rebana-2.jpg'
    ]
  },
];

const getIcon = (iconName, size = 48) => {
  switch (iconName) {
    case 'book': return <BookOpen size={size} />;
    case 'mic': return <Mic size={size} />;
    case 'users': return <Users size={size} />;
    case 'activity': return <Activity size={size} />;
    case 'half-moon': return <Heart size={size} />;
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
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">Kami merancang metode pembelajaran yang interaktif dan berjenjang.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {DATA_KEGIATAN_TPQ.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedActivity(item)}
            className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-3 transition-all duration-300 border-t-8 border-huda-green hover:shadow-2xl cursor-pointer group flex flex-col h-full"
          >
            <div className="w-20 h-20 shrink-0 bg-green-50 text-huda-green rounded-2xl flex items-center justify-center mb-6 mx-auto transform -rotate-3 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300">
              {getIcon(item.icon, 40)}
            </div>
            
            <h3 className="text-2xl font-extrabold text-center text-huda-dark mb-3 group-hover:text-huda-green transition-colors">{item.title}</h3>
            <p className="text-center text-gray-600 text-base leading-relaxed mb-6 flex-grow">{item.desc}</p>
            
            <div className="w-full h-36 rounded-2xl overflow-hidden relative mb-5 shadow-sm border-2 border-gray-50">
              <img 
                src={item.gallery[0]} 
                alt={`Preview ${item.title}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/400x300/16a34a/ffffff?text=Preview+Kegiatan";
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            <div className="text-center text-huda-green font-extrabold text-sm flex items-center justify-center gap-2 group-hover:scale-105 transition-transform">
              <ImageIcon size={18} /> Lihat Detail
            </div>
          </div>
        ))}
      </div>

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

            <div className="p-6 sm:p-8 border-b border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 bg-green-50/50">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-huda-green text-white flex items-center justify-center shadow-lg transform rotate-3">
                  {getIcon(selectedActivity.icon, 40)}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-3xl font-extrabold text-huda-dark mb-2">{selectedActivity.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-2xl">{selectedActivity.desc}</p>
              </div>
            </div>

            <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar bg-white flex-grow">
               
               {/* LOGIKA BARU: Jika ada subItems (Ekstrakurikuler), tampilkan list detail */}
               {selectedActivity.subItems ? (
                 <>
                   <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                      <Award className="text-huda-green" size={24} /> Macam-macam {selectedActivity.title}
                   </h4>
                   <div className="flex flex-col gap-6">
                     {selectedActivity.subItems.map((sub, idx) => (
                       <div key={idx} className="flex flex-col sm:flex-row gap-5 bg-gray-50 p-5 rounded-2xl border border-gray-100 items-center sm:items-start hover:shadow-md transition-shadow">
                         <div className="w-full sm:w-48 h-32 shrink-0 rounded-xl overflow-hidden shadow-sm">
                           <img src={sub.img} alt={sub.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
                         </div>
                         <div className="w-full">
                           <h5 className="text-lg font-bold text-huda-dark mb-2 flex items-center gap-2">
                             <CheckCircle size={18} className="text-huda-green" /> {sub.name}
                           </h5>
                           <p className="text-gray-600 text-sm leading-relaxed">{sub.desc}</p>
                         </div>
                       </div>
                     ))}
                   </div>
                 </>
               ) : (
                 /* LOGIKA LAMA: Jika tidak ada subItems, tampilkan galeri foto biasa */
                 <>
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
                 </>
               )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}