import React from 'react';
import { Users, Home, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from '../../utils/CountUp';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const ageData = [
  { age: '0-4', male: 45, female: 42 },
  { age: '5-9', male: 48, female: 45 },
  { age: '10-14', male: 52, female: 49 },
  { age: '15-19', male: 55, female: 51 },
  { age: '20-24', male: 58, female: 54 },
  { age: '25-29', male: 61, female: 57 },
  { age: '30-34', male: 64, female: 60 },
  { age: '35-39', male: 67, female: 63 },
  { age: '40-44', male: 70, female: 66 },
  { age: '45-49', male: 73, female: 69 },
  { age: '50-54', male: 76, female: 72 },
  { age: '55-59', male: 79, female: 75 },
  { age: '60-64', male: 82, female: 78 },
  { age: '65+', male: 85, female: 81 }
];

const educationData = [
  { name: 'Tidak Sekolah', value: 45 },
  { name: 'SD/Sederajat', value: 198 },
  { name: 'SLTP/Sederajat', value: 287 },
  { name: 'SLTA/Sederajat', value: 425 },
  { name: 'Diploma/Sarjana', value: 243 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const VillageStats: React.FC = () => {
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
            Data demografi dan statistik terkini mengenai penduduk Desa Kersik
          </p>
        </motion.div>

        {/* Demografi Penduduk */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h3 className="text-xl font-semibold mb-6">Demografi Penduduk</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-sm font-medium">Total Penduduk</span>
              </div>
              <div className="text-2xl font-bold text-red-700">
                <CountUp end={1153} /> Jiwa
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium">Laki-laki</span>
              </div>
              <div className="text-2xl font-bold text-blue-700">
                <CountUp end={607} /> Jiwa
              </div>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-pink-600 mr-2" />
                <span className="text-sm font-medium">Perempuan</span>
              </div>
              <div className="text-2xl font-bold text-pink-700">
                <CountUp end={546} /> Jiwa
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Home className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm font-medium">Kepala Keluarga</span>
              </div>
              <div className="text-2xl font-bold text-green-700">
                <CountUp end={304} /> KK
              </div>
            </div>
          </div>
        </div>

        {/* Piramida Penduduk */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h3 className="text-xl font-semibold mb-6">Berdasarkan Kelompok Umur</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={ageData}
                margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="age" type="category" />
                <Tooltip />
                <Bar dataKey="male" fill="#3b82f6" name="Laki-laki" />
                <Bar dataKey="female" fill="#ec4899" name="Perempuan" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Berdasarkan Pendidikan */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h3 className="text-xl font-semibold mb-6">Berdasarkan Pendidikan</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={educationData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {educationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {educationData.map((item, index) => (
                <div key={item.name} className="p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    <CountUp end={item.value} />
                  </div>
                  <p className="text-sm text-gray-600">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Berdasarkan Pekerjaan */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-6">Berdasarkan Pekerjaan</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 border rounded-lg text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">
                <CountUp end={323} />
              </div>
              <p className="text-sm text-gray-600">Pegawai/Karyawan</p>
            </div>
            
            <div className="p-4 border rounded-lg text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">
                <CountUp end={270} />
              </div>
              <p className="text-sm text-gray-600">Mengurus Rumah Tangga</p>
            </div>
            
            <div className="p-4 border rounded-lg text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">
                <CountUp end={177} />
              </div>
              <p className="text-sm text-gray-600">Pelajar/Mahasiswa</p>
            </div>
            
            <div className="p-4 border rounded-lg text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">
                <CountUp end={51} />
              </div>
              <p className="text-sm text-gray-600">Wiraswasta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillageStats;