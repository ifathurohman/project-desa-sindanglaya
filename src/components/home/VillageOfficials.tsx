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

        <div className="relative">
          {/* Organizational Chart */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-px h-full bg-gray-200"></div>
          </div>

          <div className="relative z-10 space-y-20">
            {/* Kepala Desa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 w-64 text-center relative">
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-px h-8 bg-gray-200"></div>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={officials[0].image}
                    alt={officials[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">{officials[0].name}</h3>
                <p className="text-primary-600">{officials[0].position}</p>
              </div>
            </motion.div>

            {/* Sekretaris Desa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 w-64 text-center relative">
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-px h-8 bg-gray-200"></div>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={officials[1].image}
                    alt={officials[1].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">{officials[1].name}</h3>
                <p className="text-primary-600">{officials[1].position}</p>
              </div>
            </motion.div>

            {/* Kepala Seksi & Kaur */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Kepala Seksi */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-xl font-semibold text-center mb-6">Kepala Seksi</h3>
                {officials.slice(2, 5).map((official, index) => (
                  <div
                    key={official.id}
                    className="bg-white rounded-xl shadow-lg p-6 text-center"
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={official.image}
                        alt={official.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold">{official.name}</h4>
                    <p className="text-primary-600 text-sm">{official.position}</p>
                  </div>
                ))}
              </motion.div>

              {/* Kaur */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8 lg:col-span-2"
              >
                <h3 className="text-xl font-semibold text-center mb-6">Kepala Urusan</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {officials.slice(5).map((official, index) => (
                    <div
                      key={official.id}
                      className="bg-white rounded-xl shadow-lg p-6 text-center"
                    >
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                        <img
                          src={official.image}
                          alt={official.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold">{official.name}</h4>
                      <p className="text-primary-600 text-sm">{official.position}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Kepala Dusun */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-2xl font-semibold">Kepala Dusun</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((dusun) => (
              <div key={dusun} className="bg-white rounded-xl shadow-sm p-6">
                <h4 className="text-lg font-semibold mb-2">Kepala Dusun {dusun}</h4>
                <p className="text-gray-600">Bertanggung jawab atas pengelolaan dan pengembangan Dusun {dusun}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VillageOfficials;