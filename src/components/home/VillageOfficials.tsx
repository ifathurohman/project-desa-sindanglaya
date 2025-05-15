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

const divisions = [
  {
    id: 'leadership',
    title: 'Pimpinan Desa',
    icon: Users,
    officials: officials.filter(o => !o.division && ['Kepala Desa', 'Sekretaris Desa'].includes(o.position))
  },
  {
    id: 'sections',
    title: 'Kepala Seksi',
    icon: FileText,
    officials: officials.filter(o => o.position.includes('Kepala Seksi'))
  },
  {
    id: 'secretariat',
    title: 'Sekretariat Desa',
    icon: Building2,
    officials: officials.filter(o => o.division === 'Sekretariat Desa')
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

        <div className="space-y-12">
          {divisions.map((division, divIndex) => (
            <motion.div
              key={division.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: divIndex * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                  <division.icon size={24} />
                </div>
                <h3 className="text-2xl font-semibold">{division.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {division.officials.map((official, index) => (
                  <motion.div
                    key={official.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-white rounded-xl shadow-sm overflow-hidden group"
                  >
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={official.image}
                        alt={official.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-white font-semibold">{official.name}</h4>
                        <p className="text-white/90 text-sm">{official.position}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 pt-12 border-t"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-2xl font-semibold">Kepala Wilayah</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((dusun) => (
              <div key={dusun} className="bg-white rounded-xl shadow-sm p-6">
                <h4 className="text-lg font-semibold mb-2">Kepala Wilayah Dusun {dusun}</h4>
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