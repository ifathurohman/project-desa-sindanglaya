import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, LineChart, Download, TrendingUp, TrendingDown, Wallet, Building2, Users, Hammer, Shield } from 'lucide-react';
import { Cell, Pie, PieChart as RechartsPieChart, ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface BudgetCategory {
  name: string;
  amount: number;
  icon: React.ElementType;
  color: string;
}

const incomeData = [
  { year: 2021, amount: 2751508500 },
  { year: 2022, amount: 2071185900 },
  { year: 2023, amount: 2696734700 }
];

const expenditureData = [
  {
    year: 2021,
    "Penyelenggaraan Pemerintahan": 939386164,
    "Pembangunan Desa": 1612497000,
    "Pembinaan Kemasyarakatan": 84085000,
    "Pemberdayaan Masyarakat": 9500000,
    "Penanggulangan Bencana": 108000000
  },
  {
    year: 2022,
    "Penyelenggaraan Pemerintahan": 794954971,
    "Pembangunan Desa": 662700000,
    "Pembinaan Kemasyarakatan": 98679700,
    "Pemberdayaan Masyarakat": 16139000,
    "Penanggulangan Bencana": 457200000
  },
  {
    year: 2023,
    "Penyelenggaraan Pemerintahan": 895988857,
    "Pembangunan Desa": 1426525000,
    "Pembinaan Kemasyarakatan": 150835900,
    "Pemberdayaan Masyarakat": 19475000,
    "Penanggulangan Bencana": 154800000
  }
];

const categories2023: BudgetCategory[] = [
  {
    name: "Penyelenggaraan Pemerintahan",
    amount: 895988857,
    icon: Building2,
    color: "#4F46E5"
  },
  {
    name: "Pembangunan Desa",
    amount: 1426525000,
    icon: Hammer,
    color: "#059669"
  },
  {
    name: "Pembinaan Kemasyarakatan",
    amount: 150835900,
    icon: Users,
    color: "#D97706"
  },
  {
    name: "Pemberdayaan Masyarakat",
    amount: 19475000,
    icon: TrendingUp,
    color: "#DC2626"
  },
  {
    name: "Penanggulangan Bencana",
    amount: 154800000,
    icon: Shield,
    color: "#7C3AED"
  }
];

const BudgetTransparency: React.FC = () => {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const totalBudget2023 = categories2023.reduce((sum, category) => sum + category.amount, 0);

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
                <Wallet size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">APBDes Desa Sindangjaya 2023</h3>
                <p className="text-gray-600">Total Anggaran: {formatCurrency(totalBudget2023)}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Budget Distribution Chart */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Distribusi Anggaran 2023</h4>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={categories2023}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="amount"
                        nameKey="name"
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}
                      >
                        {categories2023.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value: number) => formatCurrency(value)}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Budget Categories */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Rincian Anggaran</h4>
                <div className="space-y-4">
                  {categories2023.map((category) => (
                    <div key={category.name} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: category.color + '20', color: category.color }}>
                            <category.icon size={18} />
                          </div>
                          <h5 className="font-medium">{category.name}</h5>
                        </div>
                        <span className="text-sm font-medium px-2 py-1 rounded-full" style={{ backgroundColor: category.color + '20', color: category.color }}>
                          {((category.amount / totalBudget2023) * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="font-semibold text-primary-700">{formatCurrency(category.amount)}</div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full" 
                          style={{ 
                            width: `${(category.amount / totalBudget2023) * 100}%`,
                            backgroundColor: category.color
                          }}
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

      {/* Budget Trends */}
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
              <h3 className="text-xl font-semibold">Tren Anggaran 2021-2023</h3>
            </div>
          </div>

          <div className="p-6">
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart
                  data={expenditureData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value) => `${(value / 1000000000).toFixed(1)} M`} />
                  <Tooltip formatter={(value: number) => formatCurrency(value)} />
                  <Legend />
                  <Line type="monotone" dataKey="Penyelenggaraan Pemerintahan" stroke="#4F46E5" />
                  <Line type="monotone" dataKey="Pembangunan Desa" stroke="#059669" />
                  <Line type="monotone" dataKey="Pembinaan Kemasyarakatan" stroke="#D97706" />
                  <Line type="monotone" dataKey="Pemberdayaan Masyarakat" stroke="#DC2626" />
                  <Line type="monotone" dataKey="Penanggulangan Bencana" stroke="#7C3AED" />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[2021, 2022, 2023].map((year, index) => {
                const yearData = expenditureData.find(d => d.year === year);
                const total = yearData ? Object.entries(yearData).reduce((sum, [key, value]) => 
                  key !== 'year' ? sum + value : sum, 0
                ) : 0;

                return (
                  <div key={year} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Tahun {year}</h4>
                    <div className="font-semibold text-primary-700 mb-2">{formatCurrency(total)}</div>
                    <div className="flex items-center text-sm">
                      {index > 0 && (
                        <>
                          {total > expenditureData[index - 1].year ? (
                            <TrendingUp size={16} className="text-green-500 mr-1" />
                          ) : (
                            <TrendingDown size={16} className="text-red-500 mr-1" />
                          )}
                          <span className={total > expenditureData[index - 1].year ? 'text-green-600' : 'text-red-600'}>
                            {Math.abs(((total - expenditureData[index - 1].year) / expenditureData[index - 1].year) * 100).toFixed(1)}% dari tahun sebelumnya
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-sm text-gray-600">
              * Data anggaran diperbarui setiap tahun sesuai dengan APBDes yang telah disahkan
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BudgetTransparency;