import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Star, BookOpen, Mic, Heart, Award, ArrowRight, 
  MessageCircle, MapPin, Phone, Hash, Clock, Quote, Mail 
} from 'lucide-react';

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
    window.open('https://wa.me/6287869974676?text=Assalamu%27alaikum%20Admin%20TPQ%20Al-Huda,%20saya%20ingin%20bertanya%20seputar%20pendaftaran%20TPQ.', '_blank');
  };

  // Komponen Helper untuk Kotak Info Profil (Tema Hijau)
  const InfoCard = ({ icon, label, value, className = "" }) => (
    <div className={`flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${className}`}>
      <div className="bg-green-100 p-3 rounded-xl text-huda-green flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 font-bold mb-1">{label}</p>
        <p className="text-gray-800 font-semibold leading-snug">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gray-50 animate-[fadeIn_0.5s_ease-out]">
      
      {/* Container Utama */}
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-huda-dark mb-6">Profil TPQ Al-Huda</h2>
          <div className="w-32 h-2 bg-huda-green mx-auto rounded-full"></div>
        </div>

        {/* Section 1: Sejarah & Pendekatan TPQ */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="relative group lg:sticky lg:top-32">
            <div className="absolute inset-0 bg-huda-green rounded-[3rem] transform translate-x-6 translate-y-6 transition-transform group-hover:translate-x-8 group-hover:translate-y-8 duration-500"></div>
            
            {/* Foto Ilustrasi Belajar Mengaji / Logo TPQ */}
            <img 
              src="/logo/tpq-al-huda.jpeg" 
              alt="Logo TPQ Al-Huda" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/1000x500/16a34a/ffffff?text=Ilustrasi+Anak+Mengaji";
              }}
              className="relative rounded-[3rem] shadow-2xl border-8 border-white object-contain bg-white p-6 w-full h-[300px] md:h-[500px]" 
            />
          </div>
          
          <div>
            {/* Kotak Visi / Motto */}
            <div className="bg-huda-green/10 border-l-8 border-huda-green p-6 rounded-r-3xl mb-8">
              <Quote className="text-huda-green w-10 h-10 mb-3 opacity-50" />
              <h4 className="text-3xl font-extrabold text-huda-dark italic leading-tight">" Generasi Qur'ani dan Berakhlak Mulia"</h4>
              <p className="text-gray-600 font-bold mt-2">- Visi TPQ Al-Huda</p>
            </div>

            <p className="text-gray-600 mb-6 text-lg leading-relaxed text-justify">
              Taman Pendidikan Al-Qur'an (TPQ) adalah sebuah tempat yang indah dan nyaman. Oleh karena itu proses belajar dan mengajar TPQ harus mampu mencerminkan, menciptakan suasana yang indah, nyaman dan menyenangkan. TPQ Al Huda adalah <strong p>Lembaga Pendidikan dan Pengajaran Iqro sampai dengan Al Quran untuk anak usia 3 s/d 17 tahun.”</strong>.
            </p>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed text-justify">
              Keberadaan <strong className="text-huda-green">TPQ Al Huda</strong> merupakan langkah strategis sebagai upaya bebas buta al-Qur'an bagi ummat Islam. Hal ini perlu adanya proses KBM (Kegiatan Belajar Mengajar) atau sistem pengelolaan yang professional. Sesuai dengan namanya, maka tujuan finalnya adalah mencetak lulusan yang bertaqwa kepada Allah Swt., fasih membaca al-Qur'an, tekun beribadah dan berakhlaqul karimah.
            </p>

            {/* Kolom Info Identitas TPQ */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <InfoCard icon={<Hash size={24} />} label="No. Statistik (Kemenag)" value="411231759065" className="sm:col-span-2" />
              <InfoCard icon={<Clock size={24} />} label="Hari & Jam Belajar" value="Senin s/d Jum'at (15.00 - 17.00 WIB)" className="sm:col-span-2" />
            </div>

            {/* Misi TPQ */}
            <h3 className="text-3xl font-extrabold text-huda-green mb-6">Misi Kami</h3>
            <ul className="space-y-4 text-gray-700 text-lg font-medium">
              <li className="flex items-start gap-4">
                <div className="bg-green-100 p-1.5 rounded-full mt-1"><Star className="text-huda-green w-5 h-5 flex-shrink-0 fill-current" /></div>
                Menjadikan santri bisa membaca Al Quran dengan fashih.
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-green-100 p-1.5 rounded-full mt-1"><Star className="text-huda-green w-5 h-5 flex-shrink-0 fill-current" /></div>
                Menanamkan dasar-dasar aqidah islamiyah kepada santri secara baik dan benar.
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-green-100 p-1.5 rounded-full mt-1"><Star className="text-huda-green w-5 h-5 flex-shrink-0 fill-current" /></div>
                Menanamkan dasar-dasar akhlak islamiyah kepada santri secara baik dan benar.
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-green-100 p-1.5 rounded-full mt-1"><Star className="text-huda-green w-5 h-5 flex-shrink-0 fill-current" /></div>
                Menanamkan dasar-dasar adab islamiyah kepada santri secara baik dan benar.
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-green-100 p-1.5 rounded-full mt-1"><Star className="text-huda-green w-5 h-5 flex-shrink-0 fill-current" /></div>
                Menanamkan dasar-dasar ibadah kepada santri secara baik dan benar.
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
              <p className="text-gray-600 leading-relaxed">Metode pembelajaran klasikal dan privat yang efektif untuk mempercepat kelancaran membaca Al-Qur'an sesuai tajwid.</p>
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
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Fikih & Akidah</h4>
              <p className="text-gray-600 leading-relaxed">Materi tambahan yang disisipkan melalui metode bercerita, meliputi rukun iman, rukun Islam, tata cara wudhu, gerakan sholat, serta do'a dan hadits pilihan.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-huda-yellow hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="text-huda-yellow w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Wisuda Tahfizh dan Haflah Akhirussanah</h4>
              <p className="text-gray-600 leading-relaxed">Acara wisuda dan uji publik bagi santri yang telah menyelesaikan target pembelajaran dan hafalan sebagai bentuk apresiasi. Serta penampilan kreatifitas Santri TPQ.</p>
            </div>
          </div>
        </div>

        {/* Section 3: Call to Action (CTA) & Informasi Kontak Gabungan */}
        <div className="bg-huda-dark rounded-[3rem] p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
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

            {/* Area Informasi Kontak & Lokasi Baru (Khusus TPQ) */}
            <div className="pt-12 border-t border-gray-600/50 flex flex-col items-center">
              <p className="text-xl font-bold text-huda-green mb-8">Informasi Kontak & Lokasi Resmi TPQ</p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full text-left">
                {/* Kiri: Alamat Lengkap */}
                <div className="bg-white/10 p-6 rounded-3xl flex items-start gap-4 hover:bg-white/20 transition-colors">
                  <MapPin className="w-8 h-8 text-huda-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white mb-2 text-lg">Alamat Lengkap</p>
                    <p className="text-gray-300 leading-relaxed">Jl. Bambu Apus Raya No. 85, Pondok Bambu, Kec. Duren Sawit, Jakarta Timur</p>
                  </div>
                </div>
                
                {/* Kanan: Telepon, Email, Sosmed */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <a href="https://wa.me/6287869974676" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 transition-colors p-5 rounded-3xl flex flex-col gap-3">
                    <Phone className="w-6 h-6 text-huda-green" />
                    <div>
                      <p className="font-bold text-white text-sm mb-1">WhatsApp Admin</p>
                      <p className="text-gray-300 font-semibold">0878 6997 4676</p>
                    </div>
                  </a>
                  
                  <a href="mailto:tpqalhuda.pondokbambu@gmail.com" className="bg-white/10 hover:bg-white/20 transition-colors p-5 rounded-3xl flex flex-col gap-3">
                    <Mail className="w-6 h-6 text-huda-green" />
                    <div>
                      <p className="font-bold text-white text-sm mb-1">Email Resmi</p>
                      <p className="text-gray-300 text-sm break-all font-semibold">tpqalhuda.pondokbambu<br/>@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href="https://instagram.com/tpqalhuda.pondokbambu" target="_blank" rel="noreferrer" className="sm:col-span-2 bg-white/10 hover:bg-white/20 transition-colors p-5 rounded-3xl flex items-center gap-4">
                    <InstagramIcon className="w-7 h-7 text-huda-green" />
                    <div>
                      <p className="font-bold text-white text-sm mb-1">Instagram</p>
                      <p className="text-gray-300 font-semibold">@tpqalhuda.pondokbambu</p>
                    </div>
                  </a>
                </div>
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