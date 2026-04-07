import React, { useState } from 'react';
import { MapPin, Phone, Mail, Star, Send, CheckCircle, MessageCircle, Camera } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function Kontak() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedbackStatus, setFeedbackStatus] = useState('');
  const [formData, setFormData] = useState({ nama: '', layanan: 'TK Islam Al-Huda', pesan: '' });

  const SCRIPT_URL_ULASAN = 'https://script.google.com/macros/s/AKfycbwpkb5U9UgP1ei9x8wqfXB3hBnmaDVuzQ4BY2sfUNXSPEickC5YtjAJhjp_UPx5VI5guQ/exec';

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) { 
      alert("Mohon berikan rating bintang terlebih dahulu."); 
      return; 
    }
    setFeedbackStatus('loading');
    const dataToSend = new URLSearchParams({ ...formData, rating: rating.toString() });

    try {
      await fetch(SCRIPT_URL_ULASAN, {
        method: 'POST',
        body: dataToSend,
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      setFeedbackStatus('success');
      setFormData({ nama: '', layanan: 'TK Islam Al-Huda', pesan: '' });
      setRating(0);
      setTimeout(() => setFeedbackStatus(''), 5000);
    } catch (error) {
      console.error('Error:', error);
      alert("Gagal mengirim ulasan. Coba lagi nanti.");
      setFeedbackStatus('');
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen animate-[fadeIn_0.5s_ease-out]">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-huda-dark mb-6">Hubungi Kami</h2>
        <div className="w-32 h-2 bg-huda-green mx-auto rounded-full"></div>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Pusat informasi, pendaftaran, galeri fasilitas, dan layanan pengaduan wali murid TK-TPQ Islam Al-Huda.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 mb-24">
        {/* Kolom Kiri: Informasi Kontak */}
        <div className="lg:col-span-2 bg-huda-dark rounded-[3rem] shadow-2xl p-10 text-white relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-huda-green rounded-full opacity-20 transform translate-x-20 -translate-y-20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-extrabold text-huda-yellow mb-8">Informasi Layanan</h3>
            <div className="space-y-8 text-lg">
              {/* Alamat */}
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-2xl shrink-0"><MapPin className="text-huda-yellow" size={28} /></div>
                <div>
                  <p className="text-sm text-gray-400 font-bold mb-1">Alamat Lengkap</p>
                  <p className="font-semibold leading-relaxed text-gray-100 text-base">
                    Jl. Bambu Apus Raya No.85, RT.14/RW.10, Pd. Bambu, Kec. Duren Sawit, Jakarta Timur, 13890.
                  </p>
                </div>
              </div>
              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-2xl shrink-0"><Phone className="text-huda-yellow" size={28} /></div>
                <div>
                  <p className="text-sm text-gray-400 font-bold mb-1">Telepon / WhatsApp</p>
                  <p className="font-semibold text-gray-100">+62 812-1111-2222</p>
                </div>
              </div>
              {/* Email - SUDAH KEMBALI */}
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-2xl shrink-0"><Mail className="text-huda-yellow" size={28} /></div>
                <div>
                  <p className="text-sm text-gray-400 font-bold mb-1">Email Resmi</p>
                  <p className="font-semibold text-gray-100">info@tktpq-alhuda.sch.id</p>
                </div>
              </div>
              {/* Instagram */}
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-2xl shrink-0"><InstagramIcon /></div>
                <div>
                  <p className="text-sm text-gray-400 font-bold mb-1">Sosial Media</p>
                  <p className="font-semibold text-gray-100">@tktpq_alhuda</p>
                </div>
              </div>
            </div>
            <a href="https://wa.me/6281211112222" target="_blank" rel="noreferrer" className="mt-10 w-full bg-huda-yellow text-huda-dark font-extrabold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-yellow-500 transition-all">
              <MessageCircle size={24} /> Chat Admin Sekarang
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Google Maps */}
        <div className="lg:col-span-3 bg-white rounded-[3rem] p-6 shadow-xl border-4 border-gray-100 flex flex-col">
          <div className="flex items-center gap-3 mb-6 px-4 pt-2">
            <MapPin className="text-red-500" size={32} />
            <h3 className="text-2xl font-bold text-gray-800">Lokasi Google Maps</h3>
          </div>
          <div className="w-full flex-grow min-h-[400px] bg-gray-200 rounded-[2rem] overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.197368541812!2d106.91896747475073!3d-6.237691893750567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698cac47b663b7%3A0x6b801539f041f021!2sJl.%20Bambu%20Apus%20Raya%20No.85%2C%20RT.14%2FRW.10%2C%20Pd.%20Bambu%2C%20Kec.%20Duren%20Sawit%2C%20Kota%20Jakarta%20Timur!5e0!3m2!1sid!2sid!4v1711234567890!5m2!1sid!2sid"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Form Penilaian */}
      <div className="bg-white border border-gray-100 rounded-[3rem] p-10 md:p-16 shadow-2xl">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-extrabold text-huda-dark mb-4">Beri Kami Penilaian</h3>
            <p className="text-lg text-gray-600">Masukan dan testimoni Anda akan kami tampilkan di halaman utama website.</p>
          </div>
          {feedbackStatus === 'success' ? (
            <div className="bg-green-50 border-2 border-green-200 p-8 rounded-[2rem] text-center">
              <CheckCircle className="w-20 h-20 text-huda-green mx-auto mb-6" />
              <h4 className="text-3xl font-extrabold text-gray-800 mb-3">Terima Kasih!</h4>
              <p className="text-lg text-gray-600">Feedback Anda telah tersimpan dan akan segera tampil di halaman Home.</p>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-8 bg-gray-50 p-8 md:p-10 rounded-[2rem] border border-gray-200">
              <div className="text-center">
                <label className="block text-gray-700 font-bold mb-4 text-lg">Seberapa puas Anda dengan pelayanan kami?</label>
                <div className="flex justify-center gap-3">
                  {[1,2,3,4,5].map((star) => (
                    <button type="button" key={star}
                      className={`transition-all duration-200 hover:scale-110 focus:outline-none ${star <= (hoverRating || rating) ? 'text-huda-yellow drop-shadow-md' : 'text-gray-300'}`}
                      onClick={() => setRating(star)} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)}>
                      <Star size={48} fill={star <= (hoverRating || rating) ? 'currentColor' : 'none'} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-3 text-sm ml-2">Nama Wali Murid</label>
                  <input type="text" required value={formData.nama} onChange={(e) => setFormData({...formData, nama: e.target.value})}
                    className="w-full px-5 py-4 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:border-huda-green transition-all"
                    placeholder="Contoh: Bunda Fathan" />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-3 text-sm ml-2">Layanan yang dinilai</label>
                  <select value={formData.layanan} onChange={(e) => setFormData({...formData, layanan: e.target.value})}
                    className="w-full px-5 py-4 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:border-huda-green transition-all appearance-none cursor-pointer">
                    <option value="TK Islam Al-Huda">TK Islam Al-Huda</option>
                    <option value="TPQ Al-Huda">TPQ Al-Huda</option>
                    <option value="Fasilitas Umum">Fasilitas Umum / Lainnya</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-3 text-sm ml-2">Ulasan / Testimoni</label>
                <textarea rows="4" required value={formData.pesan} onChange={(e) => setFormData({...formData, pesan: e.target.value})}
                  className="w-full px-5 py-4 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:border-huda-green transition-all"
                  placeholder="Tuliskan pengalaman luar biasa anak Anda..."></textarea>
              </div>
              <button type="submit" disabled={feedbackStatus === 'loading'}
                className="w-full bg-huda-green text-white font-extrabold text-xl py-5 rounded-2xl hover:bg-huda-dark shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-70">
                {feedbackStatus === 'loading' ? 'Mengirim Data...' : <><Send size={24} /> Kirim Testimoni</>}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}