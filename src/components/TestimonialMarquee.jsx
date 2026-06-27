import React, { useState, useEffect } from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { DATA_TESTIMONI } from '../data/index.js';

export const TestimonialMarquee = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const SCRIPT_URL_ULASAN = 'https://script.google.com/macros/s/AKfycbwpkb5U9UgP1ei9x8wqfXB3hBnmaDVuzQ4BY2sfUNXSPEickC5YtjAJhjp_UPx5VI5guQ/exec';

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const urlDenganAntiCache = `${SCRIPT_URL_ULASAN}?t=${new Date().getTime()}`;
        const response = await fetch(urlDenganAntiCache);
        const data = await response.json();

        if (data.result === 'success' && data.data && data.data.length > 0) {
          const filteredReviews = data.data
            .filter(review => parseInt(review.rating) >= 4)
            .map(review => ({
              ...review,
              tahun: review.tahun || 'TA 2025/2026'
            }));

          const filteredStatic = DATA_TESTIMONI.filter(r => r.rating >= 4);
          setTestimonials([...filteredReviews, ...filteredStatic]);
        } else {
          setTestimonials(DATA_TESTIMONI.filter(r => r.rating >= 4));
        }
      } catch (error) {
        console.error("Gagal menarik ulasan dari Google Sheet:", error);
        setTestimonials(DATA_TESTIMONI.filter(r => r.rating >= 4));
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const displayData = testimonials.length > 0 ? testimonials : DATA_TESTIMONI.filter(r => r.rating >= 4);
  const duplicatedTestimonials = [...displayData, ...displayData];

  return (
    <section className="w-full bg-huda-dark py-8 sm:py-12 border-t-4 border-huda-yellow">
      <div className="text-center mb-6 sm:mb-8 px-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Apa Kata Orang Tua Murid?</h3>
        <div className="w-16 h-1 bg-huda-yellow mx-auto rounded-full mb-4"></div>
        {isLoading && <p className="text-gray-400 text-sm animate-pulse">Menarik ulasan terbaru...</p>}
      </div>

      {/* Viewport: overflow hidden untuk clip kartu yang keluar */}
      <div className="marquee-viewport overflow-hidden w-full">
        {/* Track: flex row, animasi jalan dari kanan ke kiri */}
        <div className="marquee-track flex w-max gap-6 px-4">
          {duplicatedTestimonials.map((testimoni, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl w-72 sm:w-80 flex-shrink-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-huda-yellow mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={i < (testimoni.rating || 5) ? "fill-current" : "text-gray-300"} />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4 text-sm leading-relaxed line-clamp-4">"{testimoni.teks}"</p>
              </div>
              <div>
                <p className="font-bold text-huda-green border-t border-gray-100 pt-3 flex items-center gap-2">
                  <CheckCircle size={16} className="flex-shrink-0" />
                  <span className="truncate text-sm">{testimoni.nama}</span>
                </p>
                <div className="flex justify-between items-center mt-2 gap-2">
                  {testimoni.layanan && (
                    <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded-md truncate">
                      {testimoni.layanan}
                    </span>
                  )}
                  {testimoni.tahun && (
                    <span className="text-[10px] font-extrabold bg-yellow-100 text-huda-dark px-2 py-1 rounded-md whitespace-nowrap">
                      {testimoni.tahun}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};