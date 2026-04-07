import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, BookOpen, Mic, Heart, Award, ArrowRight, MessageCircle } from 'lucide-react';

// SVG Icon Instagram Manual untuk mengatasi error lucide-react
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function TPQProfil() {
  const navigate = useNavigate();

  // Fungsi untuk membuka WhatsApp khusus Admin TPQ
  const handleWhatsApp = () => {
    window.open('https://wa.me/6281299998888?text=Assalamu%27alaikum%20Admin%20TPQ%20Al-Huda,%20saya%20ingin%20bertanya%20seputar%20pendaftaran%20TPQ.', '_blank');
  };

  return (
    <div className="relative min-h-screen bg-gray-50 animate-[fadeIn_0.5s_ease-out]">
      
      {/* Container Utama */}
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-huda-dark mb-6">Profil TPQ Al-Huda</h2>
          <div className="w-32 h-2 bg-huda-green mx-auto rounded-full"></div>
        </div>

        {/* Section 1: Tentang Kami & Visi Misi */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute inset-0 bg-huda-green rounded-[3rem] transform translate-x-6 translate-y-6 transition-transform group-hover:translate-x-8 group-hover:translate-y-8 duration-500"></div>
            
            {/* Foto Ilustrasi Belajar Mengaji yang Baru dengan Fallback Anti-Blank */}
            <img 
              src="https://img.freepik.com/premium-photo/group-muslim-children-reading-holy-books-quran-together-mosque_603656-4176.jpg" 
              alt="Anak-anak belajar mengaji TPQ Al-Huda" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/1000x500/16a34a/ffffff?text=Ilustrasi+Anak+Mengaji";
              }}
              className="relative rounded-[3rem] shadow-2xl border-8 border-white object-cover w-full h-[500px]" 
            />
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-huda-dark mb-6">Mencetak Generasi Qur'ani yang Berakhlakul Karimah</h3>
            <p className="text-gray-600 mb-10 text-xl leading-relaxed">
              Taman Pendidikan Al-Qur'an (TPQ) Al-Huda hadir sebagai wadah pembinaan keagamaan Islam bagi anak-anak di luar jam sekolah formal. Kami berkomitmen untuk memberantas buta huruf Al-Qur'an dan menanamkan pemahaman agama yang lurus sejak dini, dengan metode pengajaran yang menyenangkan dan asatidz yang berkompeten di bidangnya.
            </p>
            
            <h3 className="text-3xl font-extrabold text-huda-dark mb-6">Visi & Misi</h3>
            <ul className="space-y-6 text-gray-700 text-xl font-medium">
              <li className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full mt-1">
                  <Star className="text-huda-green w-6 h-6 flex-shrink-0 fill-current" />
                </div>
                Menjadikan Al-Qur'an sebagai pedoman hidup generasi penerus bangsa.
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full mt-1">
                  <Star className="text-huda-green w-6 h-6 flex-shrink-0 fill-current" />
                </div>
                Membekali santri dengan kemampuan membaca Al-Qur'an secara tartil sesuai kaidah ilmu Tajwid.
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full mt-1">
                  <Star className="text-huda-green w-6 h-6 flex-shrink-0 fill-current" />
                </div>
                Menyelenggarakan pembinaan akidah, ibadah, dan akhlak melalui pembiasaan sehari-hari.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Program Unggulan */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-extrabold text-huda-dark mb-4">Program Unggulan TPQ Kami</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Kami menyediakan kurikulum berjenjang yang disesuaikan dengan tingkat kemampuan santri, memastikan setiap anak mendapatkan bimbingan yang optimal.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-huda-green hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="text-huda-green w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Tuntas Iqro & Al-Qur'an</h4>
              <p className="text-gray-600 leading-relaxed">Metode pembelajaran klasikal dan privat (sorogan) yang efektif untuk mempercepat kelancaran membaca Al-Qur'an sesuai tajwid.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-huda-yellow hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Mic className="text-huda-yellow w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Tahfidz Juz 30</h4>
              <p className="text-gray-600 leading-relaxed">Program hafalan surat-surat pendek pilihan yang diujikan secara berkala untuk menjaga kualitas hafalan (muroja'ah) santri.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-huda-green hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="text-huda-green w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Bina Fikih & Akidah</h4>
              <p className="text-gray-600 leading-relaxed">Materi tambahan yang disisipkan melalui metode bercerita, meliputi rukun iman, rukun Islam, tata cara wudhu, dan gerakan sholat.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-huda-yellow hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="text-huda-yellow w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Khotmil Qur'an & Imtihan</h4>
              <p className="text-gray-600 leading-relaxed">Acara wisuda dan uji publik bagi santri yang telah menyelesaikan target pembelajaran dan hafalan sebagai bentuk apresiasi.</p>
            </div>
          </div>
        </div>

        {/* Section 3: Call to Action (CTA) & Sosial Media Spesifik TPQ */}
        <div className="bg-huda-dark rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Efek Ornamen Latar Belakang */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-huda-green rounded-full opacity-30 transform -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-huda-yellow rounded-full opacity-20 transform translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Ayo Mengaji dan Mengkaji Bersama Kami!</h3>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Jadikan putra-putri Anda generasi yang dekat dengan Al-Qur'an. Pendaftaran santri baru TPQ Al-Huda kini telah dibuka.
            </p>
            
            <button 
              onClick={() => navigate('/daftar-tpq')} 
              className="bg-huda-green text-white font-extrabold text-2xl px-12 py-5 rounded-full shadow-xl hover:bg-green-600 hover:shadow-2xl transform hover:-translate-y-2 transition-all flex items-center gap-3 mx-auto border-b-4 border-green-800 active:border-b-0 active:translate-y-0 mb-16"
            >
              Klik Untuk Mendaftar <ArrowRight className="w-8 h-8" />
            </button>

            {/* Profil Sosial Media TPQ */}
            <div className="pt-10 border-t border-gray-600/50 flex flex-col items-center">
              <p className="text-lg font-semibold text-gray-300 mb-6">Ikuti Dokumentasi Kegiatan TPQ di Sosial Media Kami</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="https://instagram.com/tpq_alhuda" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-2xl transition-colors text-white">
                  <InstagramIcon className="w-6 h-6" />
                  <span className="font-bold text-lg">@tpq_alhuda</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Button WhatsApp khusus TPQ */}
      <button 
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] flex items-center gap-3 hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="font-bold text-lg tracking-wide hidden sm:block">Tanya Admin TPQ</span>
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
        </span>
      </button>

    </div>
  );
}