import React, { useState, useEffect } from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { DATA_TESTIMONI } from '../data/index.js'; 

export const TestimonialMarquee = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // URL GOOGLE SCRIPT ULASAN MILIKMU
  const SCRIPT_URL_ULASAN = 'https://script.google.com/macros/s/AKfycbwpkb5U9UgP1ei9x8wqfXB3hBnmaDVuzQ4BY2sfUNXSPEickC5YtjAJhjp_UPx5VI5guQ/exec';

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const urlDenganAntiCache = `${SCRIPT_URL_ULASAN}?t=${new Date().getTime()}`;
        const response = await fetch(urlDenganAntiCache);
        const data = await response.json();
        
        if (data.result === 'success' && data.data && data.data.length > 0) {
          // ========================================================
          // FILTER RAHASIA: HANYA TAMPILKAN RATING 4 ATAU 5 SAJA
          // ========================================================
          const filteredReviews = data.data
            .filter(review => parseInt(review.rating) >= 4) // Hanya ambil yang bintang 4 ke atas
            .map(review => ({
              ...review,
              tahun: review.tahun || 'TA 2025/2026'
            }));
          
          // Gabungkan data dari Sheet (yang sudah difilter) dengan data statis (yang juga difilter)
          const filteredStatic = DATA_TESTIMONI.filter(r => r.rating >= 4);
          setTestimonials([...filteredReviews, ...filteredStatic]);
        } else {
           // Jika sheet kosong, gunakan data statis yang positif
           setTestimonials(DATA_TESTIMONI.filter(r => r.rating >= 4));
        }
      } catch (error) {
        console.error("Gagal menarik ulasan dari Google Sheet:", error);
        // Jika gagal konek, tetap tampilkan data statis yang positif
        setTestimonials(DATA_TESTIMONI.filter(r => r.rating >= 4));
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Jika data masih kosong setelah loading (jaga-jaga), gunakan data dummy
  const displayData = testimonials.length > 0 ? testimonials : DATA_TESTIMONI.filter(r => r.rating >= 4);
  const duplicatedTestimonials = [...displayData, ...displayData];

  return (
    <div className="w-full bg-huda-dark py-12 overflow-hidden relative border-t-4 border-huda-yellow">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Apa Kata Orang Tua Murid?</h3>
        <div className="w-16 h-1 bg-huda-yellow mx-auto rounded-full mb-4"></div>
        {isLoading && <p className="text-gray-400 text-sm animate-pulse">Menarik ulasan terbaru...</p>}
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
              <p className="font-bold text-huda-green border-t border-gray-100 pt-3 flex items-center gap-2">
                <CheckCircle size={16} className="flex-shrink-0" /> 
                <span className="truncate">{testimoni.nama}</span>
              </p>
              <div className="flex justify-between items-center mt-2">
                {testimoni.layanan && (
                  <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded-md">
                    {testimoni.layanan}
                  </span>
                )}
                {testimoni.tahun && (
                  <span className="text-[10px] font-extrabold bg-yellow-100 text-huda-dark px-2 py-1 rounded-md">
                    {testimoni.tahun}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};