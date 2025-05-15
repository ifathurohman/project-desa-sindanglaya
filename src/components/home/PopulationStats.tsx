import React from 'react';
import { motion } from 'framer-motion';
import { Users, Home, TrendingUp, BarChart } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const populationData = [
  { year: 2019, population: 4614 },
  { year: 2020, population: 4651 },
  { year: 2021, population: 4699 },
  { year: 2022, population: 4773 },
  { year: 2023, population: 4796 },
  { year: 2024, population: 4821 },
  { year: 2025, population: 4834 },
  { year: 2026, population: 4872 },
  { year: 2027, population: 4909 },
  { year: 2028, population: 4946 },
  { year: 2029, population: 4983 },
  { year: 2030, population: 5021 },
  { year: 2031, population: 5058 },
  { year: 2032, population: 5095 },
  { year: 2033, population: 5132 },
  { year: 2034, population: 5170 },
  { year: 2035, population: 5207 },
  { year: 2036, population: 5244 }
];

const housingData = [
  { name: 'Rumah Mewah', units: 8, area: 1600, type: 'TIPE 70/200', percentage: 10, color: '#4F46E5' },
  { name: 'Rumah Sedang', units: 24, area: 2160, type: 'TIPE 45/90', percentage: 30, color: '#059669' },
  { name: 'Rumah Sederhana', units: 48, area: 2880, type: 'TIPE 27/60', percentage: 60, color: '#DC2626' }
];

const PopulationStats: React.FC = () => {
  const calculateGrowthRate = (current: number, previous: number): number => {
    return ((current - previous) / previous) * 100;
  };

  const currentYear = new Date().getFullYear();
  const currentPopulation = populationData.find(d => d.year === currentYear)?.population || 4821;
  const previousYearPopulation = populationData.find(d => d.year === currentYear - 1)?.population || 4796;
  const growthRate = calculateGrowthRate(currentPopulation, previousYearPopulation);
  const totalHousingUnits = housingData.reduce((sum, item) => sum + item.units, 0);
  const totalArea = housingData.reduce((sum, item) => sum + item.area, 0);

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Population Overview Card */}
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
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Total Penduduk</p>
                <p className="text-2xl font-bold text-primary-600">{currentPopulation.toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Pertumbuhan</p>
                <div className="flex items-center">
                  <TrendingUp size={20} className={growthRate >= 0 ? 'text-green-500' : 'text-red-500'} />
                  <p className={`text-2xl font-bold ml-2 ${growthRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {growthRate.toFixed(2)}%
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
                  <Line 
                    type="monotone" 
                    dataKey="population" 
                    stroke="#4F46E5" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Housing Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Total Luas</p>
                <p className="text-2xl font-bold text-primary-600">{(totalArea / 10000).toFixed(2)} Ha</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Kepadatan</p>
                <p className="text-2xl font-bold text-primary-600">
                  {(currentPopulation / (totalArea / 10000)).toFixed(0)}/Ha
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={housingData}
                      cx="50%"
                      cy="50%"
                      outerRadius={70}
                      fill="#8884d8"
                      dataKey="units"
                      label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    >
                      {housingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-2">
                {housingData.map((house, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: house.color }}
                      />
                      <span className="text-sm">{house.name}</span>
                    </div>
                    <span className="text-sm font-medium">{house.units} unit</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Housing Types Detail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
              <BarChart size={24} />
            </div>
            <h3 className="text-xl font-semibold">Rincian Tipe Hunian</h3>
          </div>

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
                    <td className="px-4 py-3 text-center">{house.area}</td>
                    <td className="px-4 py-3 text-center">{house.percentage}%</td>
                  </tr>
                ))}
                <tr className="border-t font-medium">
                  <td className="px-4 py-3">Total</td>
                  <td className="px-4 py-3 text-center">{totalHousingUnits}</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">{totalArea}</td>
                  <td className="px-4 py-3 text-center">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PopulationStats;