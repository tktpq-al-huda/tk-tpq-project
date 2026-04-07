import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, CheckCircle, BookOpen, Heart, Activity, ArrowRight, MessageCircle } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function TKProfil() {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open('https://wa.me/6281234567890?text=Assalamu%27alaikum%20Admin%20TK%20Islam%20Al-Huda,%20saya%20ingin%20bertanya%20seputar%20pendaftaran%20dan%20program%20TK.', '_blank');
  };

  return (
    <div className="relative min-h-screen bg-gray-50 animate-[fadeIn_0.5s_ease-out]">
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-huda-dark mb-6">Profil TK Islam Al-Huda</h2>
          <div className="w-32 h-2 bg-huda-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute inset-0 bg-huda-yellow rounded-[3rem] transform translate-x-6 translate-y-6 transition-transform group-hover:translate-x-8 group-hover:translate-y-8 duration-500"></div>
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80" alt="Kegiatan TK Islam Al-Huda" className="relative rounded-[3rem] shadow-2xl border-8 border-white object-cover w-full h-[500px]" />
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-huda-green mb-6">Masa Depan Gemilang Dimulai Dari Sini</h3>
            <p className="text-gray-600 mb-10 text-xl leading-relaxed">
              TK Islam Al-Huda adalah lembaga pendidikan anak usia dini yang berdedikasi untuk memberikan fondasi terbaik bagi masa depan buah hati Anda. Kami menggabungkan kurikulum modern dengan penanaman nilai-nilai akidah, akhlak, dan kemandirian sejak dini.
            </p>
            <h3 className="text-3xl font-extrabold text-huda-green mb-6">Visi & Misi</h3>
            <ul className="space-y-6 text-gray-700 text-xl font-medium">
              {[
                "Membentuk generasi Islami yang cerdas, ceria, dan bertakwa kepada Allah SWT.",
                "Mengembangkan potensi kognitif, motorik, bahasa, dan sosial emosional anak secara seimbang.",
                "Menyelenggarakan pembelajaran aktif, kreatif, dan menyenangkan melalui metode \"Bermain Sambil Belajar\"."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-full mt-1">
                    <Star className="text-huda-yellow w-6 h-6 flex-shrink-0 fill-current" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-extrabold text-huda-dark mb-4">Program Unggulan TK Kami</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Kami merancang program khusus untuk mengoptimalkan masa golden age anak Anda.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <BookOpen className="text-huda-green w-8 h-8" />, bg: "bg-green-100", border: "border-huda-green", title: "Tahfidz Cilik", desc: "Menanamkan kecintaan pada Al-Qur'an sejak dini dengan hafalan surat pendek dan doa harian." },
              { icon: <Activity className="text-huda-yellow w-8 h-8" />, bg: "bg-yellow-100", border: "border-huda-yellow", title: "Eksplorasi Kreatif", desc: "Memaksimalkan sensor motorik melalui aktivitas seni, kerajinan tangan, dan permainan fisik edukatif." },
              { icon: <Heart className="text-huda-green w-8 h-8" />, bg: "bg-green-100", border: "border-huda-green", title: "Karakter Islami", desc: "Pembiasaan adab harian seperti kemandirian, etika makan, berbagi, hingga tata cara sholat." },
              { icon: <CheckCircle className="text-huda-yellow w-8 h-8" />, bg: "bg-yellow-100", border: "border-huda-yellow", title: "Calistung Asyik", desc: "Pengenalan dasar membaca, menulis, dan berhitung tanpa paksaan melalui metode bermain interaktif." },
            ].map((item, i) => (
              <div key={i} className={`bg-white p-8 rounded-3xl shadow-xl border-t-8 ${item.border} hover:-translate-y-2 transition-transform duration-300`}>
                <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>{item.icon}</div>
                <h4 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-huda-dark rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-huda-green rounded-full opacity-30 transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-huda-yellow rounded-full opacity-20 transform -translate-x-16 translate-y-16"></div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Kembangkan Potensi Buah Hati Anda Bersama Kami!</h3>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Berikan pendidikan usia dini terbaik yang memadukan nilai Islam dan ilmu pengetahuan. Kuota terbatas!
            </p>
            <button onClick={() => navigate('/daftar-tk')}
              className="bg-huda-yellow text-huda-dark font-extrabold text-2xl px-12 py-5 rounded-full shadow-xl hover:bg-yellow-500 transform hover:-translate-y-2 transition-all flex items-center gap-3 mx-auto border-b-4 border-yellow-600 mb-16">
              Klik Untuk Daftar <ArrowRight className="w-8 h-8" />
            </button>
            <div className="pt-10 border-t border-gray-600/50 flex flex-col items-center">
              <p className="text-lg font-semibold text-gray-300 mb-6">Ikuti Keseruan Kami di Sosial Media</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="https://instagram.com/tk_islam_alhuda" target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-2xl transition-colors text-white">
                  <InstagramIcon />
                  <span className="font-bold text-lg">@tk_islam_alhuda</span>
                </a>
                <a href="https://tiktok.com/@tk_islam_alhuda" target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-2xl transition-colors text-white">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                  <span className="font-bold text-lg">@tk_islam_alhuda</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] flex items-center gap-3 hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300">
        <MessageCircle className="w-8 h-8" />
        <span className="font-bold text-lg tracking-wide hidden sm:block">Tanya langsung ke Whatsapp</span>
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
        </span>
      </button>
    </div>
  );
}