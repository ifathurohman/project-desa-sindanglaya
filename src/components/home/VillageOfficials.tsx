import React from 'react';
import { motion } from 'framer-motion';
import { Tree, TreeNode } from 'react-organizational-chart';

interface Official {
  id: number;
  name: string;
  position: string;
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
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 7,
    name: 'Bapak Dedi',
    position: 'Kaur Keuangan',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 8,
    name: 'Ibu Maya',
    position: 'Kaur Perencanaan',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const OfficialCard: React.FC<{ official: Official }> = ({ official }) => (
  <div className="bg-white rounded-xl shadow-lg p-4 min-w-[200px]">
    <div className="relative w-24 h-24 mx-auto mb-3">
      <img
        src={official.image}
        alt={official.name}
        className="w-full h-full object-cover rounded-full border-4 border-primary-100"
      />
    </div>
    <div className="text-center">
      <h4 className="font-semibold text-gray-900">{official.name}</h4>
      <p className="text-sm text-primary-600">{official.position}</p>
    </div>
  </div>
);

const VillageOfficials: React.FC = () => {
  return (
    <section className="section bg-gray-50 overflow-x-auto">
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

        <div className="min-w-[1200px] px-8">
          <Tree
            lineWidth="2px"
            lineColor="#4F46E5"
            lineBorderRadius="10px"
            label={<OfficialCard official={officials[0]} />}
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
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
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