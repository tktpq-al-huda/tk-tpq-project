import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle, BookOpen, Heart, Activity, ArrowRight, 
  MessageCircle, MapPin, Phone, Hash, Award, Clock, Quote, Mail
} from 'lucide-react';

// SVG Icon Instagram Manual untuk mengatasi error lucide-react
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function TKProfil() {
  const navigate = useNavigate();

  // Fungsi untuk membuka WhatsApp khusus Admin TK
  const handleWhatsApp = () => {
    window.open('https://wa.me/6282125640715?text=Assalamu%27alaikum%20Admin%20TK%20Islam%20Al-Huda,%20saya%20ingin%20bertanya%20seputar%20pendaftaran%20dan%20program%20TK.', '_blank');
  };

  // Komponen Helper untuk Kotak Info Profil (Versi lebih ringkas)
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
          <h2 className="text-5xl font-extrabold text-huda-dark mb-6">Profil TK Islam Al-Huda</h2>
          <div className="w-32 h-2 bg-huda-yellow mx-auto rounded-full"></div>
        </div>

        {/* Section 1: Sejarah, Pendekatan & Identitas Inti */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="relative group lg:sticky lg:top-32">
            <div className="absolute inset-0 bg-huda-yellow rounded-[3rem] transform translate-x-6 translate-y-6 transition-transform group-hover:translate-x-8 group-hover:translate-y-8 duration-500"></div>
            <img src="/logo/tk-islam-al-huda.jpeg" alt="Kegiatan TK Islam Al-Huda" className="relative rounded-[3rem] shadow-2xl border-8 border-white object-contain bg-white p-6 w-full h-[300px] md:h-[500px]" />
          </div>
          
          <div>
            <div className="bg-huda-yellow/20 border-l-8 border-huda-yellow p-6 rounded-r-3xl mb-8">
              <Quote className="text-huda-yellow w-10 h-10 mb-3 opacity-50" />
              <h4 className="text-3xl font-extrabold text-huda-dark italic leading-tight">"Mandiri, Kreatif, Berakhlak Islami"</h4>
              <p className="text-gray-600 font-bold mt-2">- Motto TK Islam Al-Huda</p>
            </div>

            <p className="text-gray-600 mb-6 text-lg leading-relaxed text-justify">
              <strong className="text-huda-green">TK Islam Al-Huda</strong> merupakan lembaga pendidikan anak usia dini yang berkomitmen untuk memberikan layanan pendidikan berkualitas dengan pendekatan IMTAQ dan Pembelajaran Mendalam. Kami berdiri pada tahun 2013 di kawasan komplek Jl. Bambu Apus Raya Pondok Bambu, Duren Sawit, Jakarta Timur.
            </p>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed text-justify">
              Sebagai Taman Kanak-kanak berstatus swasta di bawah naungan Dinas Pendidikan Provinsi DKI Jakarta, dan kami <strong p>melayani anak-anak usia 3–6 tahun</strong> dalam program pendidikan <strong p>Kelompok Bermain, kelompok A dan kelompok B.</strong> Sekolah ini lahir dari kebutuhan masyarakat akan pendidikan anak usia dini yang berkualitas dan agamis di tengah dinamika perkotaan yang semakin kompleks.
            </p>

            <div className="bg-green-50 border-2 border-green-100 p-6 rounded-3xl mt-8 mb-8">
              <h3 className="text-xl font-extrabold text-huda-dark mb-3">✨ Transformasi 2025</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                Sekolah mengadopsi pendekatan <strong>IMTAQ</strong> dan <strong>Pembelajaran Mendalam</strong> sebagai fondasi utama dalam meningkatkan mutu pembelajaran. Perubahan ini bukan sekadar pergantian metode, melainkan transformasi paradigma yang menempatkan anak sebagai pembelajar aktif yang memiliki potensi luar biasa untuk berkembang dalam pengenalan IMTAQ, suasana yang berkesadaran, bermakna, dan menggembirakan.
              </p>
            </div>

            {/* Kolom Info Identitas Langsung di bawah Sejarah */}
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard icon={<Hash size={24} />} label="No. NPSN" value="20111944" />
              <InfoCard icon={<Award size={24} />} label="Status Akreditasi" value="Terakreditasi – B" />
              <InfoCard icon={<Clock size={24} />} label="Hari & Jam Belajar" value="Senin s/d Jum'at (08.00 - 11.00 WIB)" className="sm:col-span-2" />
            </div>
          </div>
        </div>

        {/* Section 2: Program Unggulan */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-extrabold text-huda-dark mb-4">Program Unggulan TK Kami</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Mendukung pendekatan <strong p> Pembelajaran Mendalam</strong> untuk mengoptimalkan masa <strong p>Golden Age anak</strong> Anda.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-huda-green hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="text-huda-green w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Pembiasaan Kemandirian</h4>
              <p className="text-gray-600 leading-relaxed">Membiasakan anak usia dini dalam bersikap dan perilaku dengan tidak bergantung pada orang lain dan selalu berusaha menyelesaikan tugas dan tanggung jawabnya sendiri.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-huda-yellow hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="text-huda-yellow w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Eksplorasi Kreatif</h4>
              <p className="text-gray-600 leading-relaxed">Memaksimalkan sensor motorik halus dan kasar melalui aktivitas seni, kerajinan tangan, dan permainan fisik edukatif.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-huda-green hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="text-huda-green w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Karakter Islami</h4>
              <p className="text-gray-600 leading-relaxed">Menanamkan kecintaan pada Al-Qur'an sejak dini dengan hafalan surat pendek, doa harian, dan pengenalan hijaiyah serta membiasakan adab harian seperti etika makan, berbagi, hingga tata cara shalat dan wudhu yang benar.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-huda-yellow hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="text-huda-yellow w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Calistung Asyik</h4>
              <p className="text-gray-600 leading-relaxed">Pengenalan dasar membaca, menulis, dan berhitung tanpa paksaan, melalui metode bermain interaktif yang menyenangkan.</p>
            </div>
          </div>
        </div>

        {/* Section 3: Call to Action (CTA) & Informasi Kontak */}
        <div className="bg-huda-yellow/20 rounded-[3rem] p-10 md:p-14 text-center text-black/80 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-huda-yellow rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-huda-yellow rounded-full opacity-10 transform -translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Kembangkan Potensi Anak Anda Bersama Kami!</h3>
            <p className="text-xl md:text-2xl text-black-300 font-semibold mb-10 max-w-3xl mx-auto">
              Berikan pendidikan usia dini terbaik yang memadukan nilai Islam dan ilmu pengetahuan. Kuota pendaftaran terbatas!
            </p>
            
            <button 
              onClick={() => navigate('/daftar-tk')} 
              className="bg-huda-yellow text-huda-dark font-extrabold text-2xl px-12 py-5 rounded-full shadow-2xl hover:bg-yellow-500 transform hover:-translate-y-2 transition-all flex items-center gap-3 mx-auto border-b-4 border-yellow-600 active:border-b-0 active:translate-y-0 mb-16"
            >
              Klik Untuk Daftar <ArrowRight className="w-8 h-8" />
            </button>

            <div className="pt-12 border-t border-gray-700 flex flex-col items-center">
              <p className="text-xl font-extrabold text-huda-black mb-8">Informasi Kontak & Lokasi Resmi TK</p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full text-left">
                <div className="bg-white border border-grey-500/20 p-6 rounded-3xl flex items-start gap-4 hover:bg-grey-500/20 transition-colors shadow-lg">
                  <MapPin className="w-8 h-8 text-huda-yellow flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-extrabold text-grey/20 mb-2 text-lg">Alamat Lengkap</p>
                    <p className="text-gray font-semibold leading-relaxed">Jl. Bambu Apus Raya No.85, Kel. Pondok Bambu, Kec. Duren Sawit, Jakarta Timur. 13430</p>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <a href="tel:0218616313" className="bg-white border border-yellow-500/20 hover:bg-yellow-500/20 transition-colors shadow-lg p-5 rounded-3xl flex flex-col gap-3">
                    <Phone className="w-6 h-6 text-huda-yellow" />
                    <div>
                      <p className="font-extrabold text-black text-sm mb-1">Telepon Sekolah</p>
                      <p className="text-gray font-bold">021 8616313</p>
                    </div>
                  </a>
                  
                  <a href="mailto:tkislamalhuda313@gmail.com" className="bg-white border border-yellow-500/20 hover:bg-yellow-500/20 transition-colors shadow-lg p-5 rounded-3xl flex flex-col gap-3">
                    <Mail className="w-6 h-6 text-huda-yellow" />
                    <div>
                      <p className="font-extrabold text-black text-sm mb-1">Email Resmi</p>
                      <p className="text-gray text-sm break-all font-bold">tkislamalhuda313<br/>@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href="https://www.instagram.com/tkialhuda.pondokbambu/" target="_blank" rel="noreferrer" className="sm:col-span-2 bg-white border border-yellow-500/20 hover:bg-yellow-500/20 transition-colors shadow-lg p-5 rounded-3xl flex items-center gap-4">
                    <InstagramIcon className="w-7 h-7 text-huda-yellow" />
                    <div>
                      <p className="font-extrabold text-black text-sm mb-1">Instagram</p>
                      <p className="text-gray font-bold">@tkialhuda.pondokbambu</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <button 
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] flex items-center gap-3 hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="font-bold text-lg tracking-wide hidden sm:block">Tanya Admin TK</span>
        
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
        </span>
      </button>

    </div>
  );
}