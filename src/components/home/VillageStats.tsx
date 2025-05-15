import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Users, Home, Briefcase, GraduationCap, Building, Heart, Church, ShoppingBag, TreePine, FileText, Globe, BookOpen } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import CountUp from '../../utils/CountUp';

interface StatCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  subcategories: string[];
}

const categories: StatCategory[] = [
  {
    id: 'demographics',
    title: 'Demografi & Kependudukan',
    icon: Users,
    subcategories: ['PROPORSI', 'KEPENDUDUKAN', 'MIGRASI', 'DISTRIBUSI PENDUDUK', 'JENIS PEKERJAAN', 'JENIS AGAMA']
  },
  {
    id: 'economy',
    title: 'Ekonomi',
    icon: Briefcase,
    subcategories: ['EKONOMI', 'BELANJA DESA', 'KEUANGAN', 'KEUANGAN (2)']
  },
  {
    id: 'infrastructure',
    title: 'Infrastruktur & Utilitas',
    icon: Building,
    subcategories: ['HUNIAN', 'AIR', 'Prasarana Air Limbah', 'Prasarana Kelistrikan', 'Prasana Air Bersih', 'Prasana Drainase', 'Prasana Telekomunikasi']
  },
  {
    id: 'facilities',
    title: 'Fasilitas & Layanan Publik',
    icon: Heart,
    subcategories: ['Sarana Pendidikan', 'Sarana Kesehatan', 'Sarana Peribadatan', 'Sarana Perdangan dan Jasa', 'SARANA REKREASI, RTH, LAPANGAN', 'JUMLAH SARANA', 'Prasana Persampahan']
  },
  {
    id: 'social',
    title: 'Sosial & Budaya',
    icon: Globe,
    subcategories: ['SOSIAL BUDAYA', 'HUBUNGAN EKSTERNALITAS']
  },
  {
    id: 'governance',
    title: 'Pemerintahan & Kelembagaan',
    icon: FileText,
    subcategories: ['KELEMBAGAAN', 'LPP DUSUN', 'LPP RW', 'ANALISIS KEBIJAKAN']
  },
  {
    id: 'programs',
    title: 'Program & Perencanaan',
    icon: BookOpen,
    subcategories: ['INDIKASI PROGRAM']
  }
];

const SHEET_ID = '1Kcpdx_2zS1RZWxj9SWhh3qX-Qy1mUtjoW37K_8MrzR4';
const API_KEY = '85da650159f799dcf7828dbdda799fc4d083332f'; // You'll need to provide this

const VillageStats: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null);

  const { data: sheetData, isLoading, error } = useQuery({
    queryKey: ['villageStats'],
    queryFn: async () => {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A:Z?key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  });

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setExpandedSubcategory(null);
  };

  const toggleSubcategory = (subcategory: string) => {
    setExpandedSubcategory(expandedSubcategory === subcategory ? null : subcategory);
  };

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Infografis Desa Kersik</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Data statistik dan informasi terkini mengenai berbagai aspek di Desa Kersik
          </p>
        </motion.div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Memuat data...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-error-600">
            <p>Terjadi kesalahan saat memuat data. Silakan coba lagi nanti.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={false}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center">
                    <category.icon className="w-5 h-5 text-primary-600 mr-3" />
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedCategory === category.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 space-y-2">
                        {category.subcategories.map((subcategory) => (
                          <div key={subcategory} className="border rounded-lg">
                            <button
                              onClick={() => toggleSubcategory(subcategory)}
                              className="w-full px-4 py-3 flex items-center justify-between text-left"
                            >
                              <span className="font-medium">{subcategory}</span>
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  expandedSubcategory === subcategory ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {expandedSubcategory === subcategory && (
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: 'auto' }}
                                  exit={{ height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-4 pb-4">
                                    {/* Here you would render the actual data from the Google Sheet */}
                                    <p className="text-gray-600">
                                      Data untuk {subcategory} akan ditampilkan di sini
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VillageStats;