import React, { useState } from 'react';
import { Palette, Heart, Activity, BookOpen, Users, Star, X, Image as ImageIcon, Award } from 'lucide-react';

// Memasukkan data langsung ke sini agar mudah mengatur galeri foto
const DATA_KEGIATAN_TK = [
  { 
    id: 1, 
    title: 'Seni & Kreativitas', 
    desc: 'Melatih motorik halus dan imajinasi anak melalui kegiatan mewarnai, melukis, membuat prakarya, dan eksperimen.', 
    icon: 'palette',
    gallery: [
      '/foto-profil-kegiatan-tk/seni-kreativitas.jpg',
      '/foto-profil-kegiatan-tk/seni-kreativitas-1.jpg',
      '/foto-profil-kegiatan-tk/seni-kreativitas-2.jpg'
    ]
  },
  { 
    id: 2, 
    title: 'Praktik Ibadah', 
    desc: 'Pengenalan rukun Islam sejak dini, praktik wudhu, gerakan sholat, serta hafalan hadits dan doa harian.', 
    icon: 'heart',
    gallery: [
      '/foto-profil-kegiatan-tk/praktik-ibadah.jpg', 
      '/foto-profil-kegiatan-tk/praktik-ibadah-1.jpg',
      '/foto-profil-kegiatan-tk/praktik-ibadah-2.jpg'
    ]
  },
  { 
    id: 3, 
    title: 'Olahraga Gembira', 
    desc: 'Senam ceria, permainan ketangkasan untuk melatih keseimbangan dan kesehatan fisik.', 
    icon: 'activity',
    gallery: [
      '/foto-profil-kegiatan-tk/foto-olahraga-gembira.jpg',
      '/foto-profil-kegiatan-tk/kegiatan-berenang.jpg',
      '/foto-profil-kegiatan-tk/foto-olahraga-gembira-1.jpg'
    ]
  },
  { 
    id: 4, 
    title: 'Ekstrakurikuler', 
    desc: 'Kegiatan tambahan yang bertujuan mengembangkan minat, bakat, dan keterampilan siswa secara lebih luas.', 
    icon: 'extracurricular-activities',
    gallery: [
      '/foto-profil-kegiatan-tk/foto-olahraga-gembira.jpg', 
      '/foto-profil-kegiatan-tk/kegiatan-berenang.jpg',
      '/foto-profil-kegiatan-tk/foto-olahraga-gembira-1.jpg'
    ]
  },
];

// Helper untuk Icons
const getIcon = (iconName, size = 48) => {
  switch (iconName) {
    case 'palette': return <Palette size={size} />;
    case 'heart': return <Heart size={size} />;
    case 'activity': return <Activity size={size} />;
    case 'book': return <BookOpen size={size} />;
    case 'users': return <Users size={size} />;
    case 'extracurricular-activities': return <Award size={size} />; // Icon baru untuk ekskul
    default: return <Star size={size} />;
  }
};

export default function TKKegiatan() {
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Mengunci scroll body saat popup terbuka
  if (selectedActivity) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen animate-[fadeIn_0.5s_ease-out]">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-huda-dark mb-6">Kegiatan Seru di TK</h2>
        <div className="w-32 h-2 bg-huda-yellow mx-auto rounded-full"></div>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">Kami merancang berbagai aktivitas yang menstimulasi kreativitas dan perkembangan otak anak di masa <strong>Golden Age</strong>.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {DATA_KEGIATAN_TK.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedActivity(item)}
            className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-3 transition-all duration-300 border-b-8 border-huda-yellow hover:shadow-2xl cursor-pointer group flex flex-col h-full"
          >
            {/* Icon Besar */}
            <div className="w-20 h-20 rounded-2xl bg-yellow-100 text-huda-yellow flex items-center justify-center mb-6 mx-auto transform rotate-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shrink-0">
              {getIcon(item.icon, 40)}
            </div>
            
            <h3 className="text-2xl font-extrabold text-center text-huda-dark mb-3 group-hover:text-huda-yellow transition-colors">{item.title}</h3>
            
            {/* flex-grow membuat deskripsi mengisi ruang kosong agar gambar selalu di bawah */}
            <p className="text-center text-gray-600 text-base leading-relaxed mb-6 flex-grow">{item.desc}</p>
            
            {/* Preview Gambar Kecil di Bawah */}
            <div className="w-full h-36 rounded-2xl overflow-hidden relative mb-5 shadow-sm border-2 border-gray-50">
              <img 
                src={item.gallery[0]} // Mengambil gambar pertama dari array gallery
                alt={`Preview ${item.title}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/400x300/facc15/000000?text=Preview+Kegiatan";
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            {/* Tombol Lihat Detail Teks */}
            <div className="text-center text-huda-yellow font-extrabold text-sm flex items-center justify-center gap-2 group-hover:scale-105 transition-transform">
              <ImageIcon size={18} /> Lihat Detail
            </div>
          </div>
        ))}
      </div>

      {/* POP-UP / MODAL GALERI TK */}
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

            {/* Header Pop-up TK */}
            <div className="p-6 sm:p-8 border-b border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 bg-yellow-50/50">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-huda-yellow text-huda-dark flex items-center justify-center shadow-lg transform -rotate-3">
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
                  <ImageIcon className="text-huda-yellow" size={24} /> Dokumentasi {selectedActivity.title}
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
                          e.target.src = "https://placehold.co/800x600/facc15/000000?text=Foto+Menyusul";
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