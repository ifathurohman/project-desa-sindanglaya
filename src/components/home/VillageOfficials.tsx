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
    <section className="section bg-gray-50 relative overflow-hidden">
      <div className="container relative z-10">
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

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Lines */}
          <div className="absolute inset-0 z-0">
            {/* Vertical Lines */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[180px] w-[2px] h-[120px] bg-gradient-to-b from-primary-400/50 to-primary-600/50"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-[420px] w-[2px] h-[120px] bg-gradient-to-b from-primary-600/50 to-primary-400/50"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-[860px] w-[2px] h-[120px] bg-gradient-to-b from-primary-600/50 to-primary-400/50"></div>
            
            {/* Horizontal Lines */}
            <div className="absolute left-[10%] right-[10%] top-[540px] h-[2px] bg-gradient-to-r from-primary-400/50 via-primary-600/50 to-primary-400/50"></div>
            <div className="absolute left-[10%] right-[10%] top-[980px] h-[2px] bg-gradient-to-r from-primary-400/50 via-primary-600/50 to-primary-400/50"></div>
            
            {/* Vertical Lines to Sections */}
            <div className="absolute left-[25%] top-[540px] w-[2px] h-[60px] bg-gradient-to-b from-primary-600/50 to-primary-400/50"></div>
            <div className="absolute right-[25%] top-[540px] w-[2px] h-[60px] bg-gradient-to-b from-primary-600/50 to-primary-400/50"></div>
            
            {/* Vertical Lines to Kepala Dusun */}
            <div className="absolute left-[25%] top-[980px] w-[2px] h-[60px] bg-gradient-to-b from-primary-600/50 to-primary-400/50"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-[980px] w-[2px] h-[60px] bg-gradient-to-b from-primary-600/50 to-primary-400/50"></div>
            <div className="absolute right-[25%] top-[980px] w-[2px] h-[60px] bg-gradient-to-b from-primary-600/50 to-primary-400/50"></div>
          </div>

          {/* Kepala Desa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative z-10 flex justify-center mb-20"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary-100">
                <img
                  src={officials[0].image}
                  alt={officials[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{officials[0].name}</h3>
              <p className="text-lg text-primary-600 font-medium">{officials[0].position}</p>
            </div>
          </motion.div>

          {/* Sekretaris Desa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 flex justify-center mb-20"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary-100">
                <img
                  src={officials[1].image}
                  alt={officials[1].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{officials[1].name}</h3>
              <p className="text-lg text-primary-600 font-medium">{officials[1].position}</p>
            </div>
          </motion.div>

          {/* Lower Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Kepala Seksi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-6"
            >
              <h3 className="text-xl font-semibold text-center mb-8 bg-gradient-to-r from-primary-600 to-primary-400 text-white py-4 rounded-xl shadow-md">
                Kepala Seksi
              </h3>
              <div className="space-y-4">
                {officials.slice(2, 5).map((official) => (
                  <div
                    key={official.id}
                    className="bg-white rounded-xl shadow-lg p-4 transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary-100">
                        <img
                          src={official.image}
                          alt={official.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">{official.name}</h4>
                        <p className="text-primary-600">{official.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Kaur */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-6"
            >
              <h3 className="text-xl font-semibold text-center mb-8 bg-gradient-to-r from-primary-400 to-primary-600 text-white py-4 rounded-xl shadow-md">
                Kepala Urusan
              </h3>
              <div className="space-y-4">
                {officials.slice(5).map((official) => (
                  <div
                    key={official.id}
                    className="bg-white rounded-xl shadow-lg p-4 transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary-100">
                        <img
                          src={official.image}
                          alt={official.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">{official.name}</h4>
                        <p className="text-primary-600">{official.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Kepala Dusun */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="flex justify-center mb-12">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-primary-600 to-primary-400 text-white px-8 py-4 rounded-xl shadow-md inline-flex items-center">
                <MapPin className="mr-2" size={24} />
                Kepala Dusun
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[1, 2, 3].map((dusun) => (
                <motion.div
                  key={dusun}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                    <MapPin size={24} className="text-primary-600" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Kepala Dusun {dusun}</h4>
                  <p className="text-primary-600">Dusun {dusun}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VillageOfficials;