import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
             <Link to="/" className="flex items-center gap-3 text-huda-green hover:text-huda-dark transition-colors" onClick={closeMenu}>
              <Home className="w-8 h-8" />
              <span className="font-extrabold text-2xl tracking-wide">Al-Huda</span>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/tk" className={`font-bold text-lg hover:text-huda-green transition-all ${path === '/tk' ? 'text-huda-green border-b-4 border-huda-yellow pb-1' : 'text-gray-600'}`}>TK Islam</Link>
            <Link to="/kegiatan-tk" className={`font-bold text-lg hover:text-huda-green transition-all ${path === '/kegiatan-tk' ? 'text-huda-green border-b-4 border-huda-yellow pb-1' : 'text-gray-600'}`}>Kegiatan TK</Link>
            <Link to="/tpq" className={`font-bold text-lg hover:text-huda-green transition-all ${path === '/tpq' ? 'text-huda-green border-b-4 border-huda-green pb-1' : 'text-gray-600'}`}>TPQ Al-Huda</Link>
            <Link to="/kegiatan-tpq" className={`font-bold text-lg hover:text-huda-green transition-all ${path === '/kegiatan-tpq' ? 'text-huda-green border-b-4 border-huda-green pb-1' : 'text-gray-600'}`}>Kegiatan TPQ</Link>
            <Link to="/kontak" className="font-extrabold text-lg bg-huda-green text-white px-8 py-2.5 rounded-full hover:bg-huda-dark hover:shadow-xl transform hover:-translate-y-1 transition-all">Kontak</Link>
          </div>

          {/* Tombol Hamburger Mobile */}
          <div className="flex items-center lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-huda-green">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col">
            <Link to="/tk" onClick={closeMenu} className="text-left px-4 py-3 rounded-lg font-bold text-gray-700 hover:text-huda-green hover:bg-yellow-50 text-lg">TK Islam Al-Huda</Link>
            <Link to="/kegiatan-tk" onClick={closeMenu} className="text-left px-4 py-3 rounded-lg font-bold text-gray-700 hover:text-huda-green hover:bg-yellow-50 text-lg">Kegiatan TK</Link>
            <Link to="/tpq" onClick={closeMenu} className="text-left px-4 py-3 rounded-lg font-bold text-gray-700 hover:text-huda-green hover:bg-green-50 text-lg">TPQ Al-Huda</Link>
            <Link to="/kegiatan-tpq" onClick={closeMenu} className="text-left px-4 py-3 rounded-lg font-bold text-gray-700 hover:text-huda-green hover:bg-green-50 text-lg">Kegiatan TPQ</Link>
            <Link to="/kontak" onClick={closeMenu} className="text-center px-4 py-4 mt-4 rounded-full font-extrabold text-white bg-huda-green hover:bg-huda-dark text-lg shadow-lg">Kontak Kami</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
