import React from 'react';
import { motion } from 'framer-motion';
import { Users, Home, TrendingUp, ArrowRight, ArrowLeft, MapPin } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

interface PopulationData {
  year: number;
  total: number;
  male?: number;
  female?: number;
  growthRate: number;
}

interface RegionData {
  year: number;
  cisitu: number;
  nagrog: number;
  tugu: number;
}

interface MigrationData {
  year: number;
  population: number;
  inMigration: number;
  outMigration: number;
  inRate: number;
  outRate: number;
  netMigration: number;
}

const populationData: PopulationData[] = [
  { year: 2019, total: 4614, male: 2327, female: 2287, growthRate: 2.08 },
  { year: 2020, total: 4662, male: 2357, female: 2305, growthRate: 1.04 },
  { year: 2021, total: 4736, male: 2384, female: 2352, growthRate: 1.59 },
  { year: 2022, total: 4759, male: 2413, female: 2346, growthRate: 0.49 },
  { year: 2023, total: 4784, male: 2427, female: 2357, growthRate: 0.53 },
  { year: 2024, total: 4797, male: 2452, female: 2345, growthRate: 0.27 }
];

const regionData: RegionData[] = [
  { year: 2019, cisitu: 2011, nagrog: 1349, tugu: 1254 },
  { year: 2020, cisitu: 2016, nagrog: 1396, tugu: 1312 },
  { year: 2021, cisitu: 2022, nagrog: 1455, tugu: 1326 },
  { year: 2022, cisitu: 2048, nagrog: 1457, tugu: 1255 },
  { year: 2023, cisitu: 2049, nagrog: 1464, tugu: 1271 },
  { year: 2024, cisitu: 2037, nagrog: 1497, tugu: 1262 }
];

const migrationData: MigrationData[] = [
  { year: 2019, population: 4614, inMigration: 0, outMigration: 0, inRate: 0.00, outRate: 0.00, netMigration: 0 },
  { year: 2020, population: 4662, inMigration: 6, outMigration: 0, inRate: 0.13, outRate: 0.00, netMigration: 6 },
  { year: 2021, population: 4736, inMigration: 2, outMigration: 1, inRate: 0.04, outRate: 0.02, netMigration: 1 },
  { year: 2022, population: 4759, inMigration: 5, outMigration: 0, inRate: 0.11, outRate: 0.00, netMigration: 5 },
  { year: 2023, population: 4784, inMigration: 7, outMigration: 3, inRate: 0.15, outRate: 0.06, netMigration: 4 },
  { year: 2024, population: 4797, inMigration: 9, outMigration: 2, inRate: 0.19, outRate: 0.04, netMigration: 7 }
];

const housingData = [
  { name: 'Rumah Mewah', units: 9, area: 1788, type: 'TIPE 70/200', percentage: 10, color: '#4F46E5' },
  { name: 'Rumah Menengah', units: 27, area: 2413.8, type: 'TIPE 45/90', percentage: 30, color: '#059669' },
  { name: 'Rumah Sederhana', units: 54, area: 3218.4, type: 'TIPE 27/60', percentage: 60, color: '#DC2626' }
];

const PopulationStats: React.FC = () => {
  const currentYear = 2024;
  const currentData = populationData.find(d => d.year === currentYear)!;
  const previousYearData = populationData.find(d => d.year === currentYear - 1)!;

  const totalHousingUnits = housingData.reduce((sum, item) => sum + item.units, 0);
  const totalArea = housingData.reduce((sum, item) => sum + item.area, 0);

  const formatNumber = (num: number) => num.toLocaleString('id-ID');

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
          <h2 className="section-title">Statistik Kependudukan</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Data pertumbuhan penduduk dan persebaran hunian di Desa Sindangjaya
          </p>
        </motion.div>

        {/* Population Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Jumlah Penduduk</h3>
                <p className="text-gray-600">Tahun {currentYear}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Total</p>
                <p className="text-2xl font-bold text-primary-600">{formatNumber(currentData.total)}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Laki-laki</p>
                <p className="text-2xl font-bold text-blue-600">{formatNumber(currentData.male!)}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Perempuan</p>
                <p className="text-2xl font-bold text-pink-600">{formatNumber(currentData.female!)}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Pertumbuhan</p>
                <div className="flex items-center">
                  <TrendingUp size={20} className={currentData.growthRate >= 0 ? 'text-green-500' : 'text-red-500'} />
                  <p className={`text-2xl font-bold ml-2 ${currentData.growthRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {currentData.growthRate.toFixed(2)}%
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
                    name="Total"
                    dataKey="total" 
                    stroke="#4F46E5" 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    name="Laki-laki"
                    dataKey="male" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    name="Perempuan"
                    dataKey="female" 
                    stroke="#EC4899" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Regional Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Distribusi per Dusun</h3>
                <p className="text-gray-600">Tahun {currentYear}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {Object.entries(regionData[regionData.length - 1])
                .filter(([key]) => key !== 'year')
                .map(([region, population], index) => (
                  <div key={region} className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Dusun {region.charAt(0).toUpperCase() + region.slice(1)}</p>
                    <p className="text-2xl font-bold text-primary-600">{formatNumber(population)}</p>
                    <p className="text-sm text-gray-500">
                      {((population / currentData.total) * 100).toFixed(1)}% dari total
                    </p>
                  </div>
                ))}
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={regionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis domain={['dataMin - 100', 'dataMax + 100']} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    name="Dusun Cisitu"
                    dataKey="cisitu" 
                    stroke="#4F46E5" 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    name="Dusun Nagrog"
                    dataKey="nagrog" 
                    stroke="#059669" 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    name="Dusun Tugu"
                    dataKey="tugu" 
                    stroke="#DC2626" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Migration Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-xl shadow-sm p-6 mb-8"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
              <Users size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Statistik Migrasi</h3>
              <p className="text-gray-600">Perpindahan Penduduk {currentYear}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                    <h4 className="font-medium">Penduduk Masuk</h4>
                  </div>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {migrationData[migrationData.length - 1].inRate.toFixed(2)}%
                  </span>
                </div>
                <p className="text-2xl font-bold text-green-600">
                  {migrationData[migrationData.length - 1].inMigration} orang
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <ArrowLeft className="w-5 h-5 text-red-500 mr-2" />
                    <h4 className="font-medium">Penduduk Keluar</h4>
                  </div>
                  <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded-full">
                    {migrationData[migrationData.length - 1].outRate.toFixed(2)}%
                  </span>
                </div>
                <p className="text-2xl font-bold text-red-600">
                  {migrationData[migrationData.length - 1].outMigration} orang
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 text-primary-500 mr-2" />
                  <h4 className="font-medium">Migrasi Netto</h4>
                </div>
                <p className="text-2xl font-bold text-primary-600">
                  {migrationData[migrationData.length - 1].netMigration} orang
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={migrationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar name="Penduduk Masuk" dataKey="inMigration" fill="#059669" />
                    <Bar name="Penduduk Keluar" dataKey="outMigration" fill="#DC2626" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            * Data migrasi menunjukkan perpindahan penduduk masuk dan keluar dari Desa Sindangjaya
          </div>
        </motion.div>

        {/* Housing Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
              <Home size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Statistik Hunian</h3>
              <p className="text-gray-600">Total {totalHousingUnits} Unit</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left">Tipe Rumah</th>
                      <th className="px-4 py-3 text-center">Jumlah Unit</th>
                      <th className="px-4 py-3 text-center">Tipe</th>
                      <th className="px-4 py-3 text-center">Luas (m²)</th>
                      <th className="px-4 py-3 text-center">Proporsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {housingData.map((house, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-3">{house.name}</td>
                        <td className="px-4 py-3 text-center">{house.units}</td>
                        <td className="px-4 py-3 text-center">{house.type}</td>
                        <td className="px-4 py-3 text-center">{house.area.toFixed(1)}</td>
                        <td className="px-4 py-3 text-center">{house.percentage}%</td>
                      </tr>
                    ))}
                    <tr className="border-t font-medium">
                      <td className="px-4 py-3">Total</td>
                      <td className="px-4 py-3 text-center">{totalHousingUnits}</td>
                      <td className="px-4 py-3 text-center">-</td>
                      <td className="px-4 py-3 text-center">{totalArea.toFixed(1)}</td>
                      <td className="px-4 py-3 text-center">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={housingData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="units"
                      label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    >
                      {housingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PopulationStats;