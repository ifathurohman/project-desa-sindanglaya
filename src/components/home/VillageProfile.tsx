import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, ArrowUp, ArrowDown, Building2, Compass } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const boundaries = {
  north: 'Desa Cilangari',
  east: 'Desa Bunijaya',
  south: 'Desa Sirnajaya',
  west: 'Desa Gununghalu'
};

const areaStats = {
  area: 20.25,
  population: 4580,
  density: 226
};

const populationData = [
  { year: 2019, total: 4614 },
  { year: 2020, total: 4662 },
  { year: 2021, total: 4736 },
  { year: 2022, total: 4759 },
  { year: 2023, total: 4784 },
  { year: 2024, total: 4797 }
];

const VillageProfile: React.FC = () => {
  const formatNumber = (num: number) => num.toLocaleString('id-ID');

  const getGrowthRate = (current: number, previous: number) => {
    const rate = ((current - previous) / previous) * 100;
    return rate.toFixed(2);
  };

  const currentYear = populationData[populationData.length - 1];
  const previousYear = populationData[populationData.length - 2];
  const growthRate = getGrowthRate(currentYear.total, previousYear.total);

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
          <h2 className="section-title">Profil Desa Sindangjaya</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Informasi mengenai wilayah dan kependudukan Desa Sindangjaya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Map and Boundaries Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Batas Wilayah</h3>
                <p className="text-gray-600">Luas Total: {areaStats.area} Km²</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.entries(boundaries).map(([direction, village]) => (
                <div key={direction} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Compass size={16} className="text-gray-500 mr-2" />
                    <p className="font-medium capitalize">{direction}</p>
                  </div>
                  <p className="text-gray-700">{village}</p>
                </div>
              ))}
            </div>

            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31678.8802059115!2d107.19736885912606!3d-7.025734550454537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e685eb54a60622d%3A0xbaa410fbc2298484!2sSindangjaya%2C%20Kec.%20Gununghalu%2C%20Kabupaten%20Bandung%20Barat%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1747322272935!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Population Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Kependudukan</h3>
                <p className="text-gray-600">Data Tahun {currentYear.year}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Total Penduduk</p>
                <p className="text-2xl font-bold text-primary-600">
                  {formatNumber(areaStats.population)}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Kepadatan</p>
                <p className="text-2xl font-bold text-primary-600">
                  {areaStats.density}
                </p>
                <p className="text-xs text-gray-500">Jiwa/Km²</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Pertumbuhan</p>
                <div className="flex items-center">
                  {parseFloat(growthRate) >= 0 ? (
                    <ArrowUp size={20} className="text-green-500" />
                  ) : (
                    <ArrowDown size={20} className="text-red-500" />
                  )}
                  <p className={`text-2xl font-bold ml-2 ${
                    parseFloat(growthRate) >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {growthRate}%
                  </p>
                </div>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={populationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis domain={['dataMin - 100', 'dataMax + 100']} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    name="Total Penduduk"
                    dataKey="total" 
                    stroke="#4F46E5" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VillageProfile;