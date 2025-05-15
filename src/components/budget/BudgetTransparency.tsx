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

const categories2023: BudgetCategory[] = [
  {
    name: "Penyelenggaraan Pemerintahan",
    amount: 895988857,
    icon: Building2,
    color: "#4F46E5"
  },
  {
    name: "Pembangunan",
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

  const totalBudget = categories2023.reduce((sum, category) => sum + category.amount, 0);

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
                <h3 className="text-xl font-semibold">Belanja Desa Sindangjaya 2023</h3>
                <p className="text-gray-600">Total Anggaran: {formatCurrency(totalBudget)}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Budget Distribution Chart */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Distribusi Anggaran</h4>
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
                          {((category.amount / totalBudget) * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="font-semibold text-primary-700">{formatCurrency(category.amount)}</div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full" 
                          style={{ 
                            width: `${(category.amount / totalBudget) * 100}%`,
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
    </div>
  );
};

export default BudgetTransparency;