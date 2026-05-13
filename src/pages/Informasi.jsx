import React, { useState } from 'react';
import { Calendar, Megaphone, Building, X, ArrowRight, Clock, MapPin, Image as ImageIcon } from 'lucide-react';

// --- DATA DUMMY FASILITAS ---
const FASILITAS = [
  { id: 1, title: 'Gedung Sekolah Nyaman', desc: 'Bangunan permanen, sirkulasi udara baik, dan lingkungan yang aman untuk anak-anak.', image: '/foto-sarana-prasarana/gedung-sekolah-nyaman.jpg' },
  { id: 2, title: 'Taman Bermain (Playground)', desc: 'Area bermain outdoor dan indoor yang dilengkapi alat permainan edukatif dan aman.', image: '/foto-sarana-prasarana/taman-bermain.jpg' },
  { id: 3, title: 'Ruang Kelas & Sentra', desc: 'Kelas dengan perlengkapan multimedia dan alat peraga edukatif lengkap.', image: '/foto-sarana-prasarana/ruang-kelas-sentra.jpg' },
];

// --- DATA DUMMY BERITA & ACARA ---
const BERITA = [
  {
    id: 1, // ID baru untuk ditaruh di paling atas
    kategori: 'Acara',
    tanggal: '4 Mei 2026',
    judul: 'Keseruan Field Trip TK Islam Al-Huda ke Pelita Desa Ciseeng',
    snippet: 'Anak-anak belajar kemandirian dan kerja sama melalui berbagai wahana outbound yang sangat menyenangkan...',
    fullText: 'Alhamdulillah, kegiatan Field Trip TK Islam Al-Huda ke Pelita Desa Ciseeng telah berjalan dengan lancar dan penuh kegembiraan. Dalam kegiatan ini, anak-anak diajak untuk berinteraksi langsung dengan alam dan melatih kemandirian serta keberanian mereka.\n\nBerbagai wahana seru dan menantang diikuti oleh para siswa dengan antusias, mulai dari meniti jembatan jaring di atas persawahan, bekerja sama memindahkan air dengan pipa, hingga menyusuri danau menggunakan rakit bambu. Kegiatan outbound ini sangat bermanfaat untuk melatih motorik kasar, kekompakan tim, dan rasa percaya diri anak-anak. Terima kasih kepada para guru dan orang tua murid yang telah mendukung suksesnya acara ini!',
    thumbnail: '/foto-berita-pengumuman-acara/field trip-1.png',
    gallery: [
      '/foto-berita-pengumuman-acara/field trip-4.png',
      '/foto-berita-pengumuman-acara/field-trip-3.png',
      '/foto-berita-pengumuman-acara/field-trip-2.png'
    ]
  },
  {
    id: 2,
    kategori: 'Acara',
    tanggal: '17 Agustus 2025',
    judul: 'Peringatan Hari Kemerdekaan & Lomba Mewarnai',
    snippet: 'TK Islam Al-Huda mengadakan berbagai lomba seru untuk memeriahkan HUT RI...',
    fullText: 'Alhamdulillah, acara peringatan Hari Kemerdekaan Republik Indonesia di TK Islam Al-Huda berjalan dengan sangat meriah. Anak-anak sangat antusias mengikuti berbagai lomba seperti lomba mewarnai, lomba membawa kelereng, dan lomba menyanyi lagu nasional. Acara ini bertujuan untuk menanamkan rasa cinta tanah air sejak dini kepada anak-anak kita.',
    thumbnail: '/foto-berita-pengumuman-acara/hut-ri-1.jpg',
    gallery: [
      '/foto-berita-pengumuman-acara/hut-ri-2.jpg',
      '/foto-berita-pengumuman-acara/hut-ri-3.jpg'
    ]
  },
  {
    id: 3,
    kategori: 'Pengumuman',
    tanggal: '01 September 2026',
    judul: 'Pembagian Raport Bayangan Semester Ganjil',
    snippet: 'Diberitahukan kepada seluruh wali murid bahwa pembagian raport bayangan akan dilaksanakan pada...',
    fullText: 'Assalamu\'alaikum Wr. Wb. Diberitahukan kepada seluruh wali murid TK dan TPQ Al-Huda, bahwa evaluasi tengah semester telah selesai. Pembagian raport bayangan akan dilaksanakan pada hari Sabtu, 12 September 2026 pukul 08.00 WIB s/d selesai. Kehadiran wali murid sangat kami harapkan untuk berkonsultasi langsung dengan wali kelas mengenai perkembangan ananda. Terima kasih.',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    gallery: []
  },
  {
    id: 4,
    kategori: 'Acara',
    tanggal: '20 Oktober 2026',
    judul: 'Haflah Akhirussanah dan Wisuda Tahfizh',
    snippet: 'Momen mengharukan saat para santri TPQ Al-Huda melaksanakan ujian publik dan wisuda...',
    fullText: 'Masya Allah Tabarakallah. Ratusan pasang mata wali murid berkaca-kaca saat melihat putra-putrinya melantunkan ayat suci Al-Qur\'an dengan fasih di atas panggung. Acara Khotmil Qur\'an dan Imtihan angkatan ke-12 ini merupakan bukti komitmen TPQ Al-Huda dalam memberantas buta huruf Al-Qur\'an. Selamat kepada para santri yang telah lulus!',
    thumbnail: '/foto-berita-pengumuman-acara/wisuda-tpq.jpg',
    gallery: [
      '/foto-berita-pengumuman-acara/wisuda-tpq.jpg'
    ]
  }
];

export default function Informasi() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Kunci scroll body saat popup terbuka
  if (selectedArticle) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen animate-[fadeIn_0.5s_ease-out]">
      
      {/* HEADER PAGE */}
      <div className="text-center mb-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-huda-dark mb-6">Informasi & Fasilitas</h2>
        <div className="w-32 h-2 bg-huda-yellow mx-auto rounded-full"></div>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Temukan berita terbaru, pengumuman sekolah, serta intip sarana prasarana yang ada di TK-TPQ Al-Huda.
        </p>
      </div>

      {/* SECTION 1: SARANA PRASARANA */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-3 mb-8">
          <Building className="w-8 h-8 text-huda-green" />
          <h3 className="text-3xl font-extrabold text-gray-800">Sarana & Prasarana</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {FASILITAS.map((fas) => (
            <div key={fas.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
              <div className="h-56 overflow-hidden">
                <img src={fas.image} alt={fas.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{fas.title}</h4>
                <p className="text-gray-600 leading-relaxed">{fas.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: BERITA, ACARA & PENGUMUMAN */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Megaphone className="w-8 h-8 text-huda-yellow" />
          <h3 className="text-3xl font-extrabold text-gray-800">Berita & Pengumuman Terbaru</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BERITA.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedArticle(item)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer group hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-huda-dark flex items-center gap-1 shadow-sm">
                  {item.kategori === 'Berita' ? <Megaphone size={12}/> : item.kategori === 'Acara' ? <Calendar size={12}/> : <Clock size={12}/>}
                  {item.kategori}
                </div>
                <img src={item.thumbnail} alt={item.judul} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-400 font-semibold mb-2">{item.tanggal}</p>
                <h4 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-huda-green transition-colors">{item.judul}</h4>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2 flex-grow">{item.snippet}</p>
                
                <div className="flex items-center gap-2 text-huda-green font-bold text-sm mt-auto">
                  Baca Selengkapnya <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL / POP-UP ARTIKEL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Background Overlay Gelap */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
            onClick={() => setSelectedArticle(null)}
          ></div>
          
          {/* Konten Pop-up */}
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl relative z-10 flex flex-col animate-[bounceIn_0.4s_ease-out] overflow-hidden">
            
            {/* Tombol Tutup */}
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-20 bg-white/50 hover:bg-white text-gray-800 p-2 rounded-full backdrop-blur transition-colors shadow-sm"
            >
              <X size={24} />
            </button>

            {/* Area Konten Scrollable */}
            <div className="overflow-y-auto w-full h-full pb-8 custom-scrollbar">
              {/* Cover Image */}
              <div className="h-64 sm:h-80 w-full relative">
                <img src={selectedArticle.thumbnail} alt={selectedArticle.judul} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <span className="bg-huda-yellow text-huda-dark text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                    {selectedArticle.kategori}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">{selectedArticle.judul}</h2>
                  <p className="text-gray-300 mt-2 flex items-center gap-2 text-sm sm:text-base">
                    <Calendar size={16} /> {selectedArticle.tanggal}
                  </p>
                </div>
              </div>

              {/* Isi Teks */}
              <div className="p-6 sm:p-8">
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-8">
                  {selectedArticle.fullText}
                </p>

                {/* Galeri Foto (Muncul jika ada foto tambahan) */}
                {selectedArticle.gallery && selectedArticle.gallery.length > 0 && (
                  <div className="border-t border-gray-100 pt-8 mt-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <ImageIcon size={20} className="text-huda-green" /> Dokumentasi Kegiatan
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {selectedArticle.gallery.map((img, idx) => (
                        <div key={idx} className="rounded-xl overflow-hidden h-32 sm:h-40 shadow-sm border border-gray-100">
                          <img src={img} alt={`Galeri ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
}