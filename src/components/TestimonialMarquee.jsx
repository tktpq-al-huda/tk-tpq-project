import React, { useState, useEffect } from 'react';
import { Star, CheckCircle } from 'lucide-react';

const DATA_TESTIMONI = [
  { id: 1, nama: 'Bunda Fathan', rating: 5, teks: 'Alhamdulillah sejak di TK Al-Huda, Fathan jadi lebih mandiri dan hafal banyak doa sehari-hari.' },
  { id: 2, nama: 'Ayah Aisyah', rating: 5, teks: 'Guru-gurunya sangat sabar dan penyayang. TPQ-nya juga bagus, bacaan Aisyah makin tartil sesuai tajwid.' },
  { id: 3, nama: 'Bunda Rafa', rating: 4, teks: 'Fasilitas sangat lengkap, bersih, dan aman. Anak saya selalu bersemangat kalau waktunya berangkat sekolah.' },
  { id: 4, nama: 'Ayah Bima', rating: 5, teks: 'Program unggulannya sangat terasa dampaknya pada adab dan akhlak anak di rumah. Sangat direkomendasikan!' },
  { id: 5, nama: 'Bunda Kirana', rating: 5, teks: 'Lingkungannya asri dan kondusif untuk anak-anak bermain dan belajar agama.' },
];

export const TestimonialMarquee = () => {
  const [testimonials, setTestimonials] = useState(DATA_TESTIMONI);
  const [isLoading, setIsLoading] = useState(true);

  // MENGGUNAKAN URL GOOGLE SCRIPT ULASAN MILIKMU
  const SCRIPT_URL_ULASAN = 'https://script.google.com/macros/s/AKfycbwpkb5U9UgP1ei9x8wqfXB3hBnmaDVuzQ4BY2sfUNXSPEickC5YtjAJhjp_UPx5VI5guQ/exec';

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(SCRIPT_URL_ULASAN);
        const data = await response.json();
        
        if (data.result === 'success' && data.data && data.data.length > 0) {
          // Menggabungkan data dari Google Sheet (terbaru) dengan data statis dari web
          setTestimonials([...data.data, ...DATA_TESTIMONI]);
        }
      } catch (error) {
        console.error("Gagal menarik ulasan dari Google Sheet:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Menggandakan array agar efek berjalannya (marquee) tidak terputus
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="w-full bg-huda-dark py-12 overflow-hidden relative border-t-4 border-huda-yellow">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Apa Kata Orang Tua Murid?</h3>
        <div className="w-16 h-1 bg-huda-yellow mx-auto rounded-full mb-4"></div>
        {isLoading && <p className="text-gray-400 text-sm animate-pulse">Memperbarui ulasan terbaru...</p>}
      </div>

      <div className="animate-scroll flex gap-6 px-4 hover:[animation-play-state:paused]">
        {duplicatedTestimonials.map((testimoni, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-xl w-80 flex-shrink-0 flex flex-col justify-between transform transition-transform hover:scale-105">
            <div>
              <div className="flex text-huda-yellow mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className={i < (testimoni.rating || 5) ? "fill-current" : "text-gray-300"} />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimoni.teks}"</p>
            </div>
            <div>
              <p className="font-bold text-huda-green border-t pt-3 flex items-center gap-2">
                <CheckCircle size={16} className="flex-shrink-0" /> 
                <span className="truncate">{testimoni.nama}</span>
              </p>
              {testimoni.layanan && (
                <p className="text-xs text-gray-400 ml-6">{testimoni.layanan}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};