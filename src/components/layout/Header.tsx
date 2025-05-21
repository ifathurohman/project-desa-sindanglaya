import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  name: string;
  path?: string;
  description?: string;
  icon?: React.ElementType;
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
        name: 'Informasi Umum',
        children: [
          { name: 'Sejarah Desa', path: '/profile/history', description: 'Sejarah terbentuknya Desa Kersik' },
          { name: 'Visi & Misi', path: '/profile/vision', description: 'Visi dan misi pembangunan desa' },
          { name: 'Wilayah Desa', path: '/profile/area', description: 'Informasi wilayah dan batas desa' }
        ]
      },
      {
        name: 'Pemerintahan',
        children: [
          { name: 'Struktur Organisasi', path: '/profile/organization', description: 'Struktur organisasi pemerintah desa' },
          { name: 'Perangkat Desa', path: '/profile/officials', description: 'Profil perangkat desa' },
          { name: 'BPD', path: '/profile/bpd', description: 'Badan Permusyawaratan Desa' }
        ]
      },
      {
        name: 'Potensi Desa',
        children: [
          { name: 'Sumber Daya Alam', path: '/profile/natural-resources', description: 'Potensi alam desa' },
          { name: 'Sumber Daya Manusia', path: '/profile/human-resources', description: 'Potensi SDM desa' },
          { name: 'Ekonomi', path: '/profile/economy', description: 'Potensi ekonomi desa' }
        ]
      }
    ]
  },
  { 
    name: 'Layanan',
    children: [
      { 
        name: 'Administrasi',
        children: [
          { name: 'Surat Keterangan', path: '/services/letters/certificate', description: 'Pembuatan surat keterangan' },
          { name: 'Surat Pengantar', path: '/services/letters/cover', description: 'Pembuatan surat pengantar' },
          { name: 'Surat Domisili', path: '/services/letters/domicile', description: 'Pembuatan surat domisili' }
        ]
      },
      { name: 'Pengaduan', path: '/services/complaints', description: 'Layanan pengaduan masyarakat' }
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
          <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      )}

      {item.children && isOpen && depth === 0 && (
        <div className="absolute left-0 top-full pt-2 w-screen max-w-screen-lg">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
            <div className="grid grid-cols-3 gap-8">
              {item.children.map((child, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 mb-3">{child.name}</h3>
                  {child.children && (
                    <ul className="space-y-2">
                      {child.children.map((grandchild, idx) => (
                        <li key={idx}>
                          <Link
                            to={grandchild.path || '#'}
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-gray-900">{grandchild.name}</span>
                            {grandchild.description && (
                              <p className="text-sm text-gray-500 mt-1">{grandchild.description}</p>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {item.children && isOpen && depth > 0 && (
        <div className="absolute left-full top-0 ml-1 w-56">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
            {item.children.map((child, index) => (
              <Link
                key={index}
                to={child.path || '#'}
                className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
              >
                <span>{child.name}</span>
                {child.children && <ChevronRight size={14} />}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MobileMenuItem: React.FC<{ 
  item: MenuItem; 
  depth?: number;
  onNavigate: () => void;
}> = ({ item, depth = 0, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = item.path === location.pathname || 
                  (item.children?.some(child => 
                    child.path === location.pathname || 
                    child.children?.some(grandchild => grandchild.path === location.pathname)
                  ));

  const handleClick = (e: React.MouseEvent) => {
    if (item.children) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (item.path) {
      onNavigate();
    }
  };

  return (
    <div>
      {item.path ? (
        <NavLink
          to={item.path}
          onClick={handleClick}
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
            />
          )}
        </NavLink>
      ) : (
        <button
          onClick={handleClick}
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
              <MobileMenuItem 
                key={index} 
                item={child} 
                depth={depth + 1}
                onNavigate={onNavigate}
              />
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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleMobileNavigation = () => {
    setIsMenuOpen(false);
  };

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
                <MobileMenuItem 
                  key={index} 
                  item={item}
                  onNavigate={handleMobileNavigation}
                />
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;