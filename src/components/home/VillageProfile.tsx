import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, ArrowUp, ArrowDown, Building2, Compass } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface DensityLevel {
    level: string;
    range: string;
    color: string;
}

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

const densityLevels: DensityLevel[] = [
    { level: 'Rendah', range: '1-3 Jiwa/Ha', color: '#22C55E' },
    { level: 'Sedang', range: '4-6 Jiwa/Ha', color: '#F59E0B' },
    { level: 'Tinggi', range: '7-10 Jiwa/Ha', color: '#EF4444' }
];

const populationData = [
    { year: 2019, total: 4614, cisitu: 2011, nagrog: 1349, tugu: 1254, distribution: 13.90 },
    { year: 2020, total: 4662, cisitu: 2016, nagrog: 1396, tugu: 1312, distribution: 14.05 },
    { year: 2021, total: 4736, cisitu: 2022, nagrog: 1455, tugu: 1326, distribution: 14.27 },
    { year: 2022, total: 4759, cisitu: 2048, nagrog: 1457, tugu: 1255, distribution: 14.34 },
    { year: 2023, total: 4784, cisitu: 2049, nagrog: 1464, tugu: 1271, distribution: 14.42 },
    { year: 2024, total: 4797, cisitu: 2037, nagrog: 1497, tugu: 1262, distribution: 14.46 }
];

const currentYearData = {
    year: 2024,
    regions: [
        {
            name: 'Cisitu',
            population: 2037,
            area: 292,
            density: 7,
            distribution: 44.15,
            level: 'Tinggi'
        },
        {
            name: 'Nagrog',
            population: 1497,
            area: 395,
            density: 4,
            distribution: 32.44,
            level: 'Rendah'
        },
        {
            name: 'Tugu',
            population: 1262,
            area: 199,
            density: 6,
            distribution: 27.35,
            level: 'Sedang'
        }
    ]
};

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
                                <p className="text-gray-600">Tahun {currentYear.year}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">Total Penduduk</p>
                                <p className="text-2xl font-bold text-primary-600">
                                    {formatNumber(currentYear.total)}
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">Pertumbuhan</p>
                                <div className="flex items-center">
                                    {parseFloat(growthRate) >= 0 ? (
                                        <ArrowUp size={20} className="text-green-500" />
                                    ) : (
                                        <ArrowDown size={20} className="text-red-500" />
                                    )}
                                    <p className={`text-2xl font-bold ml-2 ${parseFloat(growthRate) >= 0 ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {growthRate}%
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="h-64 mb-6">
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
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Distribusi per Dusun</h4>
                            <div className="space-y-4">
                                {currentYearData.regions.map((region) => (
                                    <div key={region.name} className="bg-gray-50 p-4 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center">
                                                <Building2 size={16} className="text-gray-500 mr-2" />
                                                <h5 className="font-medium">{region.name}</h5>
                                            </div>
                                            <span className={`text-sm font-medium px-2 py-1 rounded-full ${region.level === 'Rendah' ? 'bg-green-100 text-green-800' :
                                                region.level === 'Sedang' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'
                                                }`}>
                                                {region.level}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                                            <span>Populasi: {formatNumber(region.population)}</span>
                                            <span>Kepadatan: {region.density} Jiwa/Ha</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="h-2 rounded-full"
                                                style={{
                                                    width: `${region.distribution}%`,
                                                    backgroundColor:
                                                        region.level === 'Rendah' ? '#22C55E' :
                                                            region.level === 'Sedang' ? '#F59E0B' :
                                                                '#EF4444'
                                                }}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {region.distribution.toFixed(2)}% dari total penduduk
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Density Levels Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-white rounded-xl shadow-sm p-6"
                >
                    <h4 className="font-semibold mb-4">Tingkat Kepadatan Penduduk</h4>
                    <div className="flex flex-wrap gap-6">
                        {densityLevels.map((level) => (
                            <div key={level.level} className="flex items-center">
                                <div
                                    className="w-4 h-4 rounded-full mr-2"
                                    style={{ backgroundColor: level.color }}
                                />
                                <div>
                                    <p className="font-medium">{level.level}</p>
                                    <p className="text-sm text-gray-600">{level.range}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VillageProfile;