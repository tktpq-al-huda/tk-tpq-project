import React, { useEffect, Component } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Import Komponen & Halaman Utama
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Kontak from './pages/Kontak';

// Halaman TK
import TKProfil from './pages/tk/TKProfil';
import TKKegiatan from './kegiatan/kegiatan-tk/TKKegiatan';
import DaftarTK from './pages/tk/DaftarTK';

// Halaman TPQ
import TPQProfil from './pages/tpq/TPQProfil';
import TPQKegiatan from './kegiatan/kegiatan-tpq/TPQKegiatan';
import DaftarTPQ from './pages/tpq/DaftarTPQ';

// ==========================================
// PENDETEKSI ERROR (MENCEGAH LAYAR PUTIH)
// ==========================================
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Error detail:", error, errorInfo);
    this.setState({ errorInfo: errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 m-10 bg-red-50 border-2 border-red-500 rounded-2xl text-red-800 font-sans">
          <h2 className="text-3xl font-bold mb-4">Oops! Ada Error di React 🐛</h2>
          <p className="font-bold mb-2">Pesan Error:</p>
          <code className="block bg-white p-4 rounded-lg shadow mb-4 text-red-600 font-mono">
            {this.state.error && this.state.error.toString()}
          </code>
          <p className="mt-6 text-gray-600 font-bold">👉 Silakan cek tab Console atau perbaiki file yang bermasalah.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// Fitur otomatis scroll ke atas saat ganti halaman
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <ErrorBoundary>
            <Routes>
              {/* Rute Utama */}
              <Route path="/" element={<Home />} />
              <Route path="/kontak" element={<Kontak />} />
              
              {/* Rute TK */}
              <Route path="/tk" element={<TKProfil />} />
              <Route path="/kegiatan-tk" element={<TKKegiatan />} />
              <Route path="/daftar-tk" element={<DaftarTK />} />
              
              {/* Rute TPQ */}
              <Route path="/tpq" element={<TPQProfil />} />
              <Route path="/kegiatan-tpq" element={<TPQKegiatan />} />
              <Route path="/daftar-tpq" element={<DaftarTPQ />} />
              
              {/* Fallback 404 (Halaman tidak ditemukan) */}
              <Route path="*" element={
                <div className="pt-40 pb-20 px-6 text-center min-h-[60vh] flex flex-col items-center justify-center">
                  <h2 className="text-3xl font-bold text-gray-400 mb-4">Halaman sedang dalam tahap pembuatan... 🚀</h2>
                  <p className="text-gray-500">Silakan kembali ke Home.</p>
                </div>
              } />
            </Routes>
          </ErrorBoundary>
        </main>

        <footer className="bg-gray-900 text-gray-400 text-center py-10 mt-auto z-10">
          <p className="text-2xl font-extrabold text-white mb-3">TK-TPQ Islam Al-Huda</p>
          <p className="mb-4 text-sm max-w-md mx-auto">Mencetak Generasi Pecinta Al-Qur'an yang Cerdas dan Berakhlak Mulia.</p>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Hak Cipta Dilindungi.</p>
        </footer>

        {/* Style Global untuk Animasi */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-scroll { display: flex; width: max-content; animation: scroll 35s linear infinite; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
          @keyframes bounceIn { 0% { transform: scale(0.3); opacity: 0; } 50% { transform: scale(1.05); opacity: 1; } 70% { transform: scale(0.9); } 100% { transform: scale(1); } }
        `}} />
      </div>
    </BrowserRouter>
  );
}