import React from 'react';
import { motion } from 'framer-motion';
import { Tree, TreeNode } from 'react-organizational-chart';
import { MapPin } from 'lucide-react';

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
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Ibu Suryani',
    position: 'Sekretaris Desa',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Bapak Ahmad',
    position: 'Kepala Seksi Pemerintahan',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'Ibu Siti',
    position: 'Kepala Seksi Kesejahteraan',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    name: 'Bapak Rahmat',
    position: 'Kepala Seksi Pelayanan',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    name: 'Ibu Rina',
    position: 'Kaur Umum',
    division: 'Sekretariat Desa',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 7,
    name: 'Bapak Dedi',
    position: 'Kaur Keuangan',
    division: 'Sekretariat Desa',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 8,
    name: 'Ibu Maya',
    position: 'Kaur Perencanaan',
    division: 'Sekretariat Desa',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const OfficialCard: React.FC<{ official: Official }> = ({ official }) => (
  <div className="bg-white rounded-xl shadow-lg p-4 min-w-[200px] transform transition-all duration-300 hover:scale-105">
    <div className="relative w-20 h-20 mx-auto mb-3">
      <img
        src={official.image}
        alt={official.name}
        className="w-full h-full object-cover rounded-full border-4 border-primary-100"
      />
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
        {official.division || 'Pimpinan Desa'}
      </div>
    </div>
    <div className="text-center">
      <h4 className="font-semibold text-gray-900 mb-1">{official.name}</h4>
      <p className="text-sm text-primary-600 font-medium">{official.position}</p>
    </div>
  </div>
);

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

        <div className="max-w-[1200px] mx-auto overflow-x-auto px-4 py-8 rounded-xl bg-white shadow-sm">
          <Tree
            lineWidth="2px"
            lineColor="#4F46E5"
            lineBorderRadius="10px"
            label={<OfficialCard official={officials[0]} />}
            className="min-w-[800px]"
          >
            <TreeNode label={<OfficialCard official={officials[1]} />}>
              <TreeNode label={<OfficialCard official={officials[5]} />} />
              <TreeNode label={<OfficialCard official={officials[6]} />} />
              <TreeNode label={<OfficialCard official={officials[7]} />} />
            </TreeNode>
            <TreeNode label={<OfficialCard official={officials[2]} />} />
            <TreeNode label={<OfficialCard official={officials[3]} />} />
            <TreeNode label={<OfficialCard official={officials[4]} />} />
          </Tree>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Dusun 1', 'Dusun 2', 'Dusun 3'].map((dusun, index) => (
              <motion.div
                key={dusun}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Kepala {dusun}</h3>
                  <p className="text-gray-600">Koordinator Wilayah</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillageOfficials;