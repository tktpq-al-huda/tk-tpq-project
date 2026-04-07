import React, { useState } from 'react';
import { User, Calendar, MapPin, Phone, CheckCircle, Send, Users, FileText, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DaftarTK() {
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success
  const [formData, setFormData] = useState({
    namaAnak: '',
    namaPanggilan: '',
    jenisKelamin: 'Laki-laki',
    tempatLahir: '',
    tanggalLahir: '',
    namaAyah: '',
    namaIbu: '',
    noWhatsApp: '',
    alamatLengkap: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ==========================================================
  // LOGIKA PENGIRIMAN DATA KE GOOGLE SCRIPT (EXCEL)
  // ==========================================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // URL Web App Google Script kamu yang asli
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyakU-Fum-M-N9vlCmnmmMiO71LiNv4tHHcbN5rcmUC0mXhmdwVqlWlN8chprHHG0Qd/exec'; 

    // MENGGUNAKAN URLSearchParams: Ini adalah format paling stabil 
    // agar data bisa dibaca oleh e.parameter di Google Apps Script
    const dataToSend = new URLSearchParams(formData);

    try {
      // Mengirim POST Request ke Google Script
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: dataToSend,
        mode: 'no-cors', // Wajib agar tidak diblokir browser karena beda domain
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      // Karena 'no-cors', browser tidak tahu balasan aslinya, jadi kita asumsikan sukses
      setFormStatus('success');

    } catch (error) {
      console.error('Error saat mengirim data:', error);
      alert('Maaf, gagal mengirim data. Pastikan koneksi internet Anda stabil.');
      setFormStatus('idle');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6 animate-[fadeIn_0.5s_ease-out]">
      <div className="max-w-4xl mx-auto">
        
        {/* Tombol Kembali */}
        <button 
          onClick={() => navigate('/tk')}
          className="flex items-center gap-2 text-gray-500 hover:text-huda-dark font-bold mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Kembali ke Profil TK
        </button>

        {/* Header Form */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-huda-dark mb-4">Pendaftaran Santri TK</h2>
          <div className="w-24 h-2 bg-huda-yellow mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600">Lengkapi formulir di bawah ini untuk mendaftarkan putra-putri Anda ke TK Islam Al-Huda.</p>
        </div>

        {/* Status Sukses */}
        {formStatus === 'success' ? (
          <div className="bg-white rounded-[2rem] shadow-2xl p-10 md:p-16 text-center animate-[bounceIn_0.5s_ease-out] border-t-8 border-huda-green">
            <CheckCircle className="w-24 h-24 text-huda-green mx-auto mb-6" />
            <h3 className="text-4xl font-extrabold text-gray-800 mb-4">Alhamdulillah!</h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Data pendaftaran ananda <strong className="text-huda-dark">{formData.namaAnak}</strong> telah berhasil kami terima.
            </p>
            <div className="bg-yellow-50 p-6 rounded-2xl mb-8 inline-block text-left">
              <p className="font-bold text-gray-800 mb-2">Langkah Selanjutnya:</p>
              <ol className="list-decimal ml-5 text-gray-700 space-y-2">
                <li>Simpan nomor pendaftaran (akan dikirim via WA).</li>
                <li>Tunggu pesan dari Admin kami dalam 1x24 jam.</li>
                <li>Siapkan dokumen (FC Akte Kelahiran & KK).</li>
              </ol>
            </div>
            <br/>
            <button 
              onClick={() => navigate('/')}
              className="bg-huda-dark text-white font-extrabold px-8 py-4 rounded-full hover:bg-huda-green shadow-xl transition-all"
            >
              Kembali ke Beranda
            </button>
          </div>
        ) : (
          
          /* Form Input */
          <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border-t-8 border-huda-yellow relative overflow-hidden">
            
            {/* Ornamen Latar */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-50 rounded-full transform translate-x-10 -translate-y-10"></div>
            
            <div className="relative z-10">
              {/* Bagian 1: Data Anak */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6 border-b-2 border-gray-100 pb-4">
                  <div className="bg-yellow-100 p-2 rounded-lg text-huda-yellow"><User size={24} /></div>
                  <h3 className="text-2xl font-bold text-gray-800">A. Data Calon Santri</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-bold mb-2 ml-1">Nama Lengkap Anak</label>
                    <input type="text" name="namaAnak" required value={formData.namaAnak} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-huda-yellow transition-all" placeholder="Contoh: Muhammad Fathan Al-Farizi" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-bold mb-2 ml-1">Nama Panggilan</label>
                    <input type="text" name="namaPanggilan" required value={formData.namaPanggilan} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-huda-yellow transition-all" placeholder="Contoh: Fathan" />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2 ml-1">Jenis Kelamin</label>
                    <select name="jenisKelamin" value={formData.jenisKelamin} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-huda-yellow transition-all appearance-none cursor-pointer">
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2 ml-1">Tempat Lahir</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 text-gray-400" size={20} />
                      <input type="text" name="tempatLahir" required value={formData.tempatLahir} onChange={handleChange} className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-huda-yellow transition-all" placeholder="Contoh: Jakarta" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2 ml-1">Tanggal Lahir</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-4 text-gray-400" size={20} />
                      <input type="date" name="tanggalLahir" required value={formData.tanggalLahir} onChange={handleChange} className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-huda-yellow transition-all text-gray-700" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bagian 2: Data Orang Tua */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6 border-b-2 border-gray-100 pb-4">
                  <div className="bg-green-100 p-2 rounded-lg text-huda-green"><Users size={24} /></div>
                  <h3 className="text-2xl font-bold text-gray-800">B. Data Orang Tua / Wali</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2 ml-1">Nama Ayah</label>
                    <input type="text" name="namaAyah" required value={formData.namaAyah} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-huda-yellow transition-all" placeholder="Nama Lengkap Ayah" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-bold mb-2 ml-1">Nama Ibu</label>
                    <input type="text" name="namaIbu" required value={formData.namaIbu} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-huda-yellow transition-all" placeholder="Nama Lengkap Ibu" />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-bold mb-2 ml-1">No. WhatsApp Aktif</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-4 text-gray-400" size={20} />
                      <input type="tel" name="noWhatsApp" required value={formData.noWhatsApp} onChange={handleChange} className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-huda-yellow transition-all" placeholder="Contoh: 081234567890" />
                    </div>
                    <p className="text-sm text-gray-500 mt-2 ml-2">*Nomor ini akan digunakan Admin untuk menghubungi Anda.</p>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-bold mb-2 ml-1">Alamat Lengkap Domisili</label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-4 text-gray-400" size={20} />
                      <textarea rows="3" name="alamatLengkap" required value={formData.alamatLengkap} onChange={handleChange} className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-huda-yellow transition-all" placeholder="Tuliskan nama jalan, RT/RW, kelurahan..."></textarea>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tombol Submit */}
              <button 
                type="submit" 
                disabled={formStatus === 'loading'}
                className="w-full bg-huda-yellow text-huda-dark font-extrabold text-xl py-5 rounded-2xl hover:bg-yellow-500 shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {formStatus === 'loading' ? (
                  'Memproses Data...'
                ) : (
                  <><Send size={24} /> Kirim Formulir Pendaftaran</>
                )}
              </button>
              
              <p className="text-center text-sm text-gray-400 mt-6">
                Dengan menekan tombol di atas, Anda menyatakan bahwa data yang diisi adalah benar.
              </p>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}