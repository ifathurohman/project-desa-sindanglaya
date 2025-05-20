import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  name: string;
  path?: string;
  children?: MenuItem[];
}

const navLinks: MenuItem[] = [
  { 
    name: 'Beranda', 
    path: '/' 
  },
  { 
    name: 'Profil Desa',
    children: [
      { 
        name: 'Sejarah Desa',
        path: '/profile/history'
      },
      { 
        name: 'Visi & Misi',
        path: '/profile/vision'
      },
      {
        name: 'Pemerintahan',
        children: [
          { name: 'Struktur Organisasi', path: '/profile/organization' },
          { name: 'Perangkat Desa', path: '/profile/officials' },
          { name: 'BPD', path: '/profile/bpd' }
        ]
      },
      {
        name: 'Potensi Desa',
        children: [
          { name: 'Sumber Daya Alam', path: '/profile/natural-resources' },
          { name: 'Sumber Daya Manusia', path: '/profile/human-resources' },
          { name: 'Ekonomi', path: '/profile/economy' }
        ]
      }
    ]
  },
  { 
    name: 'Layanan',
    children: [
      { name: 'Administrasi', path: '/services/administration' },
      { 
        name: 'Surat Online',
        children: [
          { name: 'Surat Keterangan', path: '/services/letters/certificate' },
          { name: 'Surat Pengantar', path: '/services/letters/cover' },
          { name: 'Surat Domisili', path: '/services/letters/domicile' }
        ]
      },
      { name: 'Pengaduan', path: '/services/complaints' }
    ]
  },
  { name: 'Wisata', path: '/tourism' },
  { name: 'Produk Lokal', path: '/products' },
  { name: 'Transparansi APBDes', path: '/budget' },
  { name: 'Galeri', path: '/gallery' },
  { name: 'Berita', path: '/news' },
];

const DesktopMenuItem: React.FC<{ item: MenuItem; depth?: number }> = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = item.path === location.pathname || 
                  (item.children?.some(child => 
                    child.path === location.pathname || 
                    child.children?.some(grandchild => grandchild.path === location.pathname)
                  ));

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {item.path ? (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary-600 ${
              isActive ? 'text-primary-600' : 'text-gray-700'
            }`
          }
        >
          {item.name}
          {item.children && (
            <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          )}
        </NavLink>
      ) : (
        <button
          className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary-600 ${
            isActive ? 'text-primary-600' : 'text-gray-700'
          }`}
        >
          {item.name}
          {item.children && (
            <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          )}
        </button>
      )}

      {item.children && isOpen && (
        <div className={`absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 ${
          depth === 0 ? 'top-full' : 'top-0 left-full ml-0.5'
        }`}>
          {item.children.map((child, index) => (
            <DesktopMenuItem key={index} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const MobileMenuItem: React.FC<{ item: MenuItem; depth?: number }> = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = item.path === location.pathname || 
                  (item.children?.some(child => 
                    child.path === location.pathname || 
                    child.children?.some(grandchild => grandchild.path === location.pathname)
                  ));

  return (
    <div>
      {item.path ? (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `flex items-center justify-between py-3 px-4 text-sm font-medium transition-colors duration-200 ${
              isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:bg-gray-50'
            }`
          }
          style={{ paddingLeft: `${depth * 1 + 1}rem` }}
        >
          {item.name}
          {item.children && (
            <ChevronDown 
              size={16} 
              className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
            />
          )}
        </NavLink>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between w-full py-3 px-4 text-sm font-medium transition-colors duration-200 ${
            isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:bg-gray-50'
          }`}
          style={{ paddingLeft: `${depth * 1 + 1}rem` }}
        >
          {item.name}
          <ChevronDown 
            size={16} 
            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      )}

      <AnimatePresence>
        {item.children && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-gray-50"
          >
            {item.children.map((child, index) => (
              <MobileMenuItem key={index} item={child} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/src/assets/images/logo.svg" alt="Logo Desa Kersik" className="w-10 h-10" />
          <div>
            <h1 className="text-lg font-bold text-primary-700">Desa Kersik</h1>
            <p className="text-xs text-gray-600">Kabupaten Sambas, Kalimantan Barat</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((item, index) => (
            <DesktopMenuItem key={index} item={item} />
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-[57px] bg-white z-40 overflow-y-auto"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container py-4">
              {navLinks.map((item, index) => (
                <MobileMenuItem key={index} item={item} />
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;