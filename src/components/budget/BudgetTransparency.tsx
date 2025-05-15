import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, LineChart, Download } from 'lucide-react';

interface BudgetItem {
  id: number;
  category: string;
  amount: number;
  percentage: number;
  description: string;
}

const incomeSources: BudgetItem[] = [
  {
    id: 1,
    category: 'Dana Desa',
    amount: 802305000,
    percentage: 54.2,
    description: 'Alokasi Dana Desa dari pemerintah pusat'
  },
  {
    id: 2,
    category: 'Alokasi Dana Desa',
    amount: 388272000,
    percentage: 26.2,
    description: 'Dana dari kabupaten untuk operasional pemerintahan desa'
  },
  {
    id: 3,
    category: 'Bagi Hasil Pajak',
    amount: 94218000,
    percentage: 6.4,
    description: 'Dana bagi hasil pajak dan retribusi daerah'
  },
  {
    id: 4,
    category: 'Bantuan Keuangan',
    amount: 180000000,
    percentage: 12.2,
    description: 'Bantuan keuangan dari provinsi dan kabupaten'
  },
  {
    id: 5,
    category: 'Pendapatan Asli Desa',
    amount: 15000000,
    percentage: 1.0,
    description: 'Pendapatan dari aset dan usaha desa'
  }
];

const expenditures: BudgetItem[] = [
  {
    id: 1,
    category: 'Bidang Penyelenggaraan Pemerintahan',
    amount: 371600000,
    percentage: 25.1,
    description: 'Operasional pemerintahan desa dan pembayaran gaji perangkat desa'
  },
  {
    id: 2,
    category: 'Bidang Pelaksanaan Pembangunan',
    amount: 712415000,
    percentage: 48.1,
    description: 'Pembangunan infrastruktur dan fasilitas desa'
  },
  {
    id: 3,
    category: 'Bidang Pembinaan Kemasyarakatan',
    amount: 214680000,
    percentage: 14.5,
    description: 'Program pemberdayaan masyarakat dan kegiatan sosial'
  },
  {
    id: 4,
    category: 'Bidang Pemberdayaan Masyarakat',
    amount: 156100000,
    percentage: 10.5,
    description: 'Pelatihan keterampilan dan pengembangan ekonomi desa'
  },
  {
    id: 5,
    category: 'Bidang Penanggulangan Bencana',
    amount: 25000000,
    percentage: 1.7,
    description: 'Dana untuk penanggulangan bencana dan keadaan darurat'
  }
];

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

const BudgetTransparency: React.FC = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-10"
      >
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                <PieChart size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">APBDes Desa Kersik 2024</h3>
                <p className="text-gray-600">Total Anggaran: {formatCurrency(1479795000)}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Income Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Pendapatan Desa</h4>
                <div className="space-y-4">
                  {incomeSources.map((item) => (
                    <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-medium">{item.category}</h5>
                        <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {item.percentage}%
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="font-semibold text-primary-700">{formatCurrency(item.amount)}</div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expenditure Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Belanja Desa</h4>
                <div className="space-y-4">
                  {expenditures.map((item) => (
                    <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-medium">{item.category}</h5>
                        <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {item.percentage}%
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="font-semibold text-primary-700">{formatCurrency(item.amount)}</div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-secondary-100 text-secondary-600 flex items-center justify-center mr-4">
                <LineChart size={20} />
              </div>
              <h3 className="text-xl font-semibold">Laporan Realisasi APBDes</h3>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <div className="bg-gray-50 p-4 rounded-lg sm:flex-1">
                  <h4 className="font-medium mb-2">Triwulan I (Jan-Mar 2024)</h4>
                  <div className="font-semibold text-primary-700 mb-2">{formatCurrency(369950000)}</div>
                  <div className="text-sm text-gray-600">Realisasi 25% dari anggaran</div>
                  <a href="#" className="mt-3 inline-flex items-center text-sm font-medium text-secondary-600 hover:text-secondary-800">
                    <Download size={14} className="mr-1" /> 
                    Unduh Laporan
                  </a>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg sm:flex-1">
                  <h4 className="font-medium mb-2">Triwulan II (Apr-Jun 2024)</h4>
                  <div className="font-semibold text-primary-700 mb-2">{formatCurrency(665907000)}</div>
                  <div className="text-sm text-gray-600">Realisasi 45% dari anggaran</div>
                  <a href="#" className="mt-3 inline-flex items-center text-sm font-medium text-secondary-600 hover:text-secondary-800">
                    <Download size={14} className="mr-1" /> 
                    Unduh Laporan
                  </a>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mt-4">
                * Laporan yang tersedia diperbarui setiap triwulan. Laporan Triwulan III dan IV akan diunggah setelah periode tersebut berakhir.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BudgetTransparency;