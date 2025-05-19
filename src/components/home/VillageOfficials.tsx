import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, Building2, MapPin } from 'lucide-react';

interface Official {
  id: number;
  name: string;
  position: string;
  division?: string;
  image: string;
}

const officials: Official[] = [
  {
    id: 1,
    name: 'Bapak Suparman',
    position: 'Kepala Desa',
    image: 'https://images.pexels.com/photos/5439455/pexels-photo-5439455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Ibu Suryani',
    position: 'Sekretaris Desa',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Bapak Ahmad',
    position: 'Kepala Seksi Pemerintahan',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'Ibu Siti',
    position: 'Kepala Seksi Kesejahteraan',
    image: 'https://images.pexels.com/photos/3810756/pexels-photo-3810756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    name: 'Bapak Rahmat',
    position: 'Kepala Seksi Pelayanan',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    name: 'Ibu Rina',
    position: 'Kaur Umum',
    division: 'Sekretariat Desa',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 7,
    name: 'Bapak Dedi',
    position: 'Kaur Keuangan',
    division: 'Sekretariat Desa',
    image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 8,
    name: 'Ibu Maya',
    position: 'Kaur Perencanaan',
    division: 'Sekretariat Desa',
    image: 'https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const VillageOfficials: React.FC = () => {
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
          <h2 className="section-title">Struktur Pemerintahan Desa</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mengenal para pemimpin yang mengabdi untuk kemajuan Desa Sindangjaya
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Kepala Desa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm w-full transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-48">
                <img
                  src={officials[0].image}
                  alt={officials[0].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{officials[0].name}</h3>
                  <p className="text-white/90">{officials[0].position}</p>
                </div>
              </div>
              <div className="p-6 bg-primary-50">
                <p className="text-primary-700 font-medium text-center">Pimpinan Tertinggi Desa</p>
              </div>
            </div>
          </motion.div>

          {/* Sekretaris Desa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm w-full transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-48">
                <img
                  src={officials[1].image}
                  alt={officials[1].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{officials[1].name}</h3>
                  <p className="text-white/90">{officials[1].position}</p>
                </div>
              </div>
              <div className="p-6 bg-secondary-50">
                <p className="text-secondary-700 font-medium text-center">Koordinator Administrasi</p>
              </div>
            </div>
          </motion.div>

          {/* Kepala Seksi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-center">Kepala Seksi</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {officials.slice(2, 5).map((official) => (
                <div
                  key={official.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative h-40">
                    <img
                      src={official.image}
                      alt={official.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="text-lg font-bold">{official.name}</h4>
                      <p className="text-white/90 text-sm">{official.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Kepala Urusan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-center">Kepala Urusan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {officials.slice(5).map((official) => (
                <div
                  key={official.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative h-40">
                    <img
                      src={official.image}
                      alt={official.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="text-lg font-bold">{official.name}</h4>
                      <p className="text-white/90 text-sm">{official.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Kepala Dusun */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-center">Kepala Dusun</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((dusun) => (
                <div
                  key={dusun}
                  className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                    <MapPin size={24} className="text-primary-600" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Kepala Dusun {dusun}</h4>
                  <p className="text-primary-600">Koordinator Wilayah {dusun}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VillageOfficials;