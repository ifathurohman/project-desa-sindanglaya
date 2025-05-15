import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sprout, DollarSign, TrendingUp, Filter } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface AgricultureData {
  year: number;
  commodity: string;
  harvestedArea: number;
  production: number;
  productionValue: number;
  productionCost: number;
  productionBalance: number;
}

const agricultureData: AgricultureData[] = [
  {
    year: 2015,
    commodity: "Buncis",
    harvestedArea: 1.5,
    production: 12,
    productionValue: 200000000,
    productionCost: 3900000,
    productionBalance: 196100000
  },
  {
    year: 2015,
    commodity: "Mentimun",
    harvestedArea: 2.5,
    production: 70,
    productionValue: 15000000,
    productionCost: 2750000,
    productionBalance: 12250000
  },
  // ... add all other data items here
];

const categories = [
  { id: 'overview', title: 'Ringkasan', icon: Sprout },
  { id: 'production', title: 'Produksi', icon: TrendingUp },
  { id: 'financial', title: 'Keuangan', icon: DollarSign },
];

const years = [...new Set(agricultureData.map(item => item.year))].sort();

const AgricultureStats: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [expandedCommodity, setExpandedCommodity] = useState<string | null>(null);

  const filteredData = useMemo(() => {
    return selectedYear === 'all' 
      ? agricultureData 
      : agricultureData.filter(item => item.year === selectedYear);
  }, [selectedYear]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const getTotalStats = () => {
    return filteredData.reduce((acc, item) => ({
      harvestedArea: acc.harvestedArea + item.harvestedArea,
      production: acc.production + item.production,
      productionValue: acc.productionValue + item.productionValue,
      productionCost: acc.productionCost + item.productionCost,
      productionBalance: acc.productionBalance + item.productionBalance
    }), {
      harvestedArea: 0,
      production: 0,
      productionValue: 0,
      productionCost: 0,
      productionBalance: 0
    });
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
          <h2 className="section-title">Statistik Pertanian</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Data produksi dan nilai ekonomi komoditas pertanian di Desa Kersik
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Filter Bar */}
          <div className="p-4 border-b bg-gray-50">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-500" />
                <select
                  className="form-select rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                >
                  <option value="all">Semua Tahun</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b">
            <div className="overflow-x-auto">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView="auto"
                spaceBetween={0}
                navigation
                className="py-2"
              >
                {categories.map((category, index) => (
                  <SwiperSlide key={category.id} style={{ width: 'auto' }}>
                    <button
                      onClick={() => setActiveTab(index)}
                      className={`px-6 py-3 flex items-center whitespace-nowrap transition-colors ${
                        activeTab === index
                          ? 'text-primary-600 border-b-2 border-primary-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <category.icon className="w-5 h-5 mr-2" />
                      <span className="font-medium">{category.title}</span>
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-green-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-2">Total Luas Panen</h3>
                      <p className="text-3xl font-bold text-green-600">
                        {getTotalStats().harvestedArea.toFixed(2)} Ha
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-2">Total Produksi</h3>
                      <p className="text-3xl font-bold text-blue-600">
                        {getTotalStats().production.toFixed(2)} Ton
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-2">Total Nilai Produksi</h3>
                      <p className="text-3xl font-bold text-purple-600">
                        {formatCurrency(getTotalStats().productionValue)}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="space-y-4">
                    {filteredData.map((item) => (
                      <div key={`${item.year}-${item.commodity}`} className="border rounded-lg">
                        <button
                          onClick={() => setExpandedCommodity(
                            expandedCommodity === `${item.year}-${item.commodity}` 
                              ? null 
                              : `${item.year}-${item.commodity}`
                          )}
                          className="w-full px-4 py-3 flex items-center justify-between text-left"
                        >
                          <div>
                            <span className="font-medium">{item.commodity}</span>
                            <span className="text-sm text-gray-500 ml-2">({item.year})</span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              expandedCommodity === `${item.year}-${item.commodity}` ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {expandedCommodity === `${item.year}-${item.commodity}` && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-medium mb-2">Luas Panen</h4>
                                    <p className="text-2xl font-semibold text-primary-600">
                                      {item.harvestedArea.toFixed(2)} Ha
                                    </p>
                                  </div>
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-medium mb-2">Produksi</h4>
                                    <p className="text-2xl font-semibold text-primary-600">
                                      {item.production.toFixed(2)} Ton
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-4">
                    {filteredData.map((item) => (
                      <div key={`${item.year}-${item.commodity}`} className="border rounded-lg">
                        <button
                          onClick={() => setExpandedCommodity(
                            expandedCommodity === `${item.year}-${item.commodity}` 
                              ? null 
                              : `${item.year}-${item.commodity}`
                          )}
                          className="w-full px-4 py-3 flex items-center justify-between text-left"
                        >
                          <div>
                            <span className="font-medium">{item.commodity}</span>
                            <span className="text-sm text-gray-500 ml-2">({item.year})</span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              expandedCommodity === `${item.year}-${item.commodity}` ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {expandedCommodity === `${item.year}-${item.commodity}` && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-medium mb-2">Nilai Produksi</h4>
                                    <p className="text-xl font-semibold text-green-600">
                                      {formatCurrency(item.productionValue)}
                                    </p>
                                  </div>
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-medium mb-2">Biaya Produksi</h4>
                                    <p className="text-xl font-semibold text-red-600">
                                      {formatCurrency(item.productionCost)}
                                    </p>
                                  </div>
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-medium mb-2">Saldo Produksi</h4>
                                    <p className={`text-xl font-semibold ${
                                      item.productionBalance >= 0 ? 'text-blue-600' : 'text-red-600'
                                    }`}>
                                      {formatCurrency(item.productionBalance)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgricultureStats;