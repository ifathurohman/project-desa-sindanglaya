import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sprout, Fish, Tree, Mountain, Beaker, Factory } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Data interfaces
interface BaseProductionData {
  year: number;
  commodity: string;
  harvestedArea?: number;
  production: number;
  productionValue?: number;
  productionCost?: number;
  productionBalance?: number;
}

interface AquacultureData {
  year: number;
  facility: string;
  area: number;
  production: number;
}

interface MiningData {
  year: number;
  material: string;
  scale: string;
}

// Agriculture Data
const agricultureData: BaseProductionData[] = [
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
  // Add all agriculture data...
];

// Plantation Data
const plantationData: BaseProductionData[] = [
  {
    year: 2022,
    commodity: "Alpukat",
    harvestedArea: 0.5,
    production: 2.5
  },
  {
    year: 2015,
    commodity: "Jeruk",
    harvestedArea: 1,
    production: 4
  },
  // Add all plantation data...
];

// Biopharmaca Data
const biopharmacaData: BaseProductionData[] = [
  {
    year: 2025,
    commodity: "Daun Sereh",
    harvestedArea: 358,
    production: 358
  },
  {
    year: 2022,
    commodity: "Jahe",
    harvestedArea: 12.5,
    production: 200
  },
  // Add all biopharmaca data...
];

// Forest Products Data
const forestData: BaseProductionData[] = [
  {
    year: 2015,
    commodity: "Gula Enau",
    production: 3.5
  },
  {
    year: 2025,
    commodity: "Bambu",
    production: 17000
  }
];

// Mining Data
const miningData: MiningData[] = [
  {
    year: 2013,
    material: "Batu Apung",
    scale: "Kecil"
  },
  {
    year: 2025,
    material: "Batu cadas",
    scale: "Kecil"
  },
  // Add all mining data...
];

// Aquaculture Data
const aquacultureData: AquacultureData[] = [
  {
    year: 2025,
    facility: "Sawah (M²)",
    area: 1.25,
    production: 4
  },
  {
    year: 2025,
    facility: "Empang/Kolam (M²)",
    area: 2.5,
    production: 3.5
  }
];

const categories = [
  { id: 'agriculture', title: 'Pertanian', icon: Sprout },
  { id: 'plantation', title: 'Perkebunan', icon: Tree },
  { id: 'biopharmaca', title: 'Biofarmaka', icon: Beaker },
  { id: 'forest', title: 'Hasil Hutan', icon: Tree },
  { id: 'mining', title: 'Galian', icon: Mountain },
  { id: 'aquaculture', title: 'Budidaya Air', icon: Fish },
];

const AgricultureStats: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const renderProductionData = (data: BaseProductionData[]) => (
    <div className="space-y-4">
      {data.map((item) => (
        <div key={`${item.year}-${item.commodity}`} className="border rounded-lg">
          <button
            onClick={() => setExpandedItem(
              expandedItem === `${item.year}-${item.commodity}` 
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
                expandedItem === `${item.year}-${item.commodity}` ? 'rotate-180' : ''
              }`}
            />
          </button>

          <AnimatePresence>
            {expandedItem === `${item.year}-${item.commodity}` && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {item.harvestedArea !== undefined && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Luas Panen</h4>
                        <p className="text-xl font-semibold text-primary-600">
                          {item.harvestedArea.toFixed(2)} Ha
                        </p>
                      </div>
                    )}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Produksi</h4>
                      <p className="text-xl font-semibold text-primary-600">
                        {item.production.toFixed(2)} Ton
                      </p>
                    </div>
                    {item.productionValue !== undefined && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Nilai Produksi</h4>
                        <p className="text-xl font-semibold text-green-600">
                          {formatCurrency(item.productionValue)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return renderProductionData(agricultureData);
      case 1:
        return renderProductionData(plantationData);
      case 2:
        return renderProductionData(biopharmacaData);
      case 3:
        return renderProductionData(forestData);
      case 4:
        return (
          <div className="space-y-4">
            {miningData.map((item) => (
              <div key={`${item.year}-${item.material}`} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium">{item.material}</h4>
                <p className="text-sm text-gray-600">Skala: {item.scale}</p>
                <p className="text-sm text-gray-600">Tahun: {item.year}</p>
              </div>
            ))}
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            {aquacultureData.map((item) => (
              <div key={`${item.year}-${item.facility}`} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium">{item.facility}</h4>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <p className="text-sm text-gray-600">Luas</p>
                    <p className="text-lg font-semibold">{item.area} m²</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Produksi</p>
                    <p className="text-lg font-semibold">{item.production} ton</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="section bg-white">
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
            Data produksi pertanian, perkebunan, dan hasil alam lainnya di Desa Sindangjaya
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
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
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgricultureStats;