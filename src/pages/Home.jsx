import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { TestimonialMarquee } from '../components/TestimonialMarquee'; // Import komponen testimoni yang udah dibuat sebelumnya

export default function Home() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Munculkan pop-up guru setelah 1.5 detik
    const timer = setTimeout(() => setShowPopup(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animate-[fadeIn_0.5s_ease-out]">
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)] mt-20">
        
              {/* Sisi TK */}
              <div className="w-full md:w-1/2 min-h-[50vh] flex flex-col justify-center items-center p-6 sm:p-8 relative overflow-hidden group bg-[#fefce8] border-b-4 md:border-b-0 md:border-r-4 border-white">
                <div className="absolute inset-0 bg-[radial-gradient(#fef08a_2px,transparent_2px)] [background-size:30px_30px] opacity-40"></div>
                <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
          
                <div className="z-10 flex flex-col items-center text-center transform transition-transform duration-700 group-hover:scale-105">
                  <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-white rounded-full p-3 sm:p-4 shadow-2xl mb-6 sm:mb-8 flex items-center justify-center border-4 border-huda-yellow overflow-hidden relative">
                    {/* Gambar akan diambil dari folder public/logo/ */}
                    <img src="/logo/tk-islam-al-huda.webp" alt="Logo TK Islam Al-Huda" className="w-full h-full object-contain" onError={(e) => {e.target.src="https://placehold.co/400x400/facc15/000000?text=TK+Al-Huda"}} />
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-huda-dark mb-4 drop-shadow-sm">TK Islam Al-Huda</h1>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-8 sm:mb-10 max-w-md leading-relaxed">"Menjadi Wadah Penyelenggara Pendidikan TK Unggulan Guna Membina anak-anak Muslim yang Mandiri, Kreatif, dan Berakhlak Islami."</p>
                  <button onClick={() => navigate('/tk')} className="bg-huda-yellow text-huda-dark font-extrabold text-lg sm:text-xl px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-xl hover:bg-yellow-500 hover:shadow-2xl transform hover:-translate-y-2 transition-all flex items-center gap-3 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-0 touch-manipulation">
                    Profil TK <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>

              {/* Sisi TPQ */}
              <div className="w-full md:w-1/2 min-h-[50vh] flex flex-col justify-center items-center p-6 sm:p-8 relative overflow-hidden group bg-[#f0fdf4]">
                <div className="absolute inset-0 bg-[radial-gradient(#bbf7d0_2px,transparent_2px)] [background-size:30px_30px] opacity-40"></div>
                <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
          
                <div className="z-10 flex flex-col items-center text-center transform transition-transform duration-700 group-hover:scale-105">
                  <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-white rounded-full p-3 sm:p-4 shadow-2xl mb-6 sm:mb-8 flex items-center justify-center border-4 border-huda-green overflow-hidden relative">
                    {/* Gambar akan diambil dari folder public/logo/ */}
                    <img src="/logo/tpq-al-huda.webp" alt="Logo TPQ Al-Huda" className="w-full h-full object-contain" onError={(e) => {e.target.src="https://placehold.co/400x400/16a34a/ffffff?text=TPQ+Al-Huda"}} />
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-huda-dark mb-4 drop-shadow-sm">TPQ Al-Huda</h1>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-8 sm:mb-10 max-w-md leading-relaxed">"Mencetak Generasi Pecinta Al-Qur'an yang Berakhlakul Karimah."</p>
                  <button onClick={() => navigate('/tpq')} className="bg-huda-green text-white font-extrabold text-lg sm:text-xl px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-xl hover:bg-huda-dark hover:shadow-2xl transform hover:-translate-y-2 transition-all flex items-center gap-3 border-b-4 border-green-800 active:border-b-0 active:translate-y-0 touch-manipulation">
                    Profil TPQ <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>

            </div>
      
      {/* Memanggil Komponen Testimoni */}
      <TestimonialMarquee />

      {/* Pop-up Sapaan Guru */}
            {showPopup && (
              <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 animate-[bounceIn_0.8s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]">
                <div className="flex items-end gap-2 sm:gap-3 relative">
                  <button onClick={() => setShowPopup(false)} className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-red-500 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-red-600 shadow-lg z-10 border-2 border-white transition-colors touch-manipulation">
                    <X size={16} strokeWidth={3} />
                  </button>
                  <div className="bg-white text-gray-800 p-4 sm:p-5 rounded-3xl rounded-br-none shadow-2xl border-4 border-huda-green max-w-[220px] sm:max-w-[280px]">
                    <p className="text-sm sm:text-base font-bold leading-relaxed">
                      <span className="text-huda-green text-base sm:text-lg">Assalamu'alaikum!</span> 👋<br/>
                      Selamat datang di website TK Islam-TPQ Al-Huda. Yuk intip kegiatan seru kami!
                    </p>
                  </div>
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-yellow-100 rounded-full border-4 border-white shadow-2xl overflow-hidden flex-shrink-0">
                    {/* Avatar Guru (SVG) */}
                    <svg viewBox="0 0 100 100" className="w-full h-full pt-2">
                      <circle cx="50" cy="40" r="18" fill="#fcd34d" />
                      <path d="M 25 90 Q 50 45 75 90 Z" fill="#16a34a" />
                      <circle cx="43" cy="38" r="2.5" fill="#374151" />
                      <circle cx="57" cy="38" r="2.5" fill="#374151" />
                      <path d="M 44 46 Q 50 52 56 46" stroke="#374151" strokeWidth="2.5" fill="transparent" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}
    </div>
  );
}