import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Users, Building, Briefcase, Globe, FileText, BookOpen, Heart } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import Papa from 'papaparse';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

interface StatCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  subcategories: string[];
  chartType?: 'bar' | 'pie' | 'line';
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const categories: StatCategory[] = [
  {
    id: 'demographics',
    title: 'Demografi & Kependudukan',
    icon: Users,
    subcategories: ['PROPORSI', 'KEPENDUDUKAN', 'MIGRASI', 'DISTRIBUSI PENDUDUK', 'JENIS PEKERJAAN', 'JENIS AGAMA'],
    chartType: 'pie'
  },
  {
    id: 'economy',
    title: 'Ekonomi',
    icon: Briefcase,
    subcategories: ['EKONOMI', 'BELANJA DESA', 'KEUANGAN', 'KEUANGAN (2)'],
    chartType: 'bar'
  },
  {
    id: 'infrastructure',
    title: 'Infrastruktur & Utilitas',
    icon: Building,
    subcategories: ['HUNIAN', 'AIR', 'Prasarana Air Limbah', 'Prasarana Kelistrikan', 'Prasana Air Bersih', 'Prasana Drainase', 'Prasana Telekomunikasi'],
    chartType: 'bar'
  },
  {
    id: 'facilities',
    title: 'Fasilitas & Layanan Publik',
    icon: Heart,
    subcategories: ['Sarana Pendidikan', 'Sarana Kesehatan', 'Sarana Peribadatan', 'Sarana Perdangan dan Jasa', 'SARANA REKREASI, RTH, LAPANGAN', 'JUMLAH SARANA', 'Prasana Persampahan'],
    chartType: 'bar'
  },
  {
    id: 'social',
    title: 'Sosial & Budaya',
    icon: Globe,
    subcategories: ['SOSIAL BUDAYA', 'HUBUNGAN EKSTERNALITAS'],
    chartType: 'pie'
  },
  {
    id: 'governance',
    title: 'Pemerintahan & Kelembagaan',
    icon: FileText,
    subcategories: ['KELEMBAGAAN', 'LPP DUSUN', 'LPP RW', 'ANALISIS KEBIJAKAN'],
    chartType: 'line'
  },
  {
    id: 'programs',
    title: 'Program & Perencanaan',
    icon: BookOpen,
    subcategories: ['INDIKASI PROGRAM'],
    chartType: 'bar'
  }
];

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQHcVtU-HGxICiVkrJBGi7YKWUqwkB-0v8qxBsqY_BKyB-J9ZQ2b_lZYXXN_Vtk5Q/pub?output=csv';

const VillageStats: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null);

  const { data: sheetData, isLoading, error } = useQuery({
    queryKey: ['villageStats'],
    queryFn: async () => {
      try {
        const response = await fetch(SHEET_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const csvText = await response.text();
        return new Promise((resolve, reject) => {
          Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
              console.log('Parsed data:', results.data); // For debugging
              resolve(results.data);
            },
            error: (error) => reject(error)
          });
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  });

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setExpandedSubcategory(null);
  };

  const toggleSubcategory = (subcategory: string) => {
    setExpandedSubcategory(expandedSubcategory === subcategory ? null : subcategory);
  };

  const getSubcategoryData = (subcategory: string) => {
    if (!sheetData) return [];
    return (sheetData as any[]).filter(row => row.Category === subcategory);
  };

  const formatChartData = (data: any[]) => {
    return data.map(item => ({
      name: item.Indicator,
      value: parseFloat(item.Value) || 0
    }));
  };

  const renderChart = (category: StatCategory, data: any[]) => {
    const chartData = formatChartData(data);
    const height = 300;

    switch (category.chartType) {
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'line':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
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
                      <div className="px-6 pb-4 space-y-4">
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
                                    {/* Chart Section */}
                                    <div className="mb-6">
                                      {renderChart(category, getSubcategoryData(subcategory))}
                                    </div>

                                    {/* Data Table Section */}
                                    <div className="space-y-2">
                                      {getSubcategoryData(subcategory).map((row: any, index: number) => (
                                        <div key={index} className="flex justify-between items-center py-2 border-b">
                                          <span className="text-gray-700">{row.Indicator}</span>
                                          <span className="font-medium">{row.Value}</span>
                                        </div>
                                      ))}
                                    </div>
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