import React from 'react';
import { motion } from 'framer-motion';
import { Tree, TreeNode } from 'react-organizational-chart';

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
    division: 'Pelaksana Teknis',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'Ibu Siti',
    position: 'Kepala Seksi Kesejahteraan',
    division: 'Pelaksana Teknis',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    name: 'Bapak Rahmat',
    position: 'Kepala Seksi Pelayanan',
    division: 'Pelaksana Teknis',
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
  <div className="bg-white rounded-xl shadow-lg p-6 sm:w-60 h-60 transition-all duration-300 mx-auto">
    <div className="relative w-24 h-24 mx-auto mb-4">
      <img
        src={official.image}
        alt={official.name}
        className="w-full h-full object-cover rounded-full border-4 border-primary-100"
      />
      {official.division && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
          {official.division}
        </div>
      )}
    </div>
    <div className="text-center space-y-2">
      <h4 className="font-semibold text-gray-900">{official.name}</h4>
      <p className="text-sm font-medium text-primary-600 bg-primary-50 rounded-full py-1">
        {official.position}
      </p>
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
          viewport={{ once: true, margin: "100px" }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Struktur Pemerintahan Desa</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mengenal para pemimpin yang mengabdi untuk kemajuan Desa Sindangjaya
          </p>
        </motion.div>

        <div
          className="p-8 mb-12 flex justify-center"
        >
          <div className="transform origin-top scale-100 md:scale-90 lg:scale-100 transition-transform duration-300">
            <div className="w-full mx-auto">
              <Tree
                lineWidth="4px"
                lineColor="#4F46E5"
                lineBorderRadius="0"
                label={<OfficialCard official={officials[0]} />}
              >
                {/* Pelaksana Teknis */}
                <TreeNode label={<OfficialCard official={officials[2]} />} />
                <TreeNode label={<OfficialCard official={officials[3]} />} />
                <TreeNode label={<OfficialCard official={officials[4]} />} />

                {/* Wilayah Dusun */}
                <TreeNode label={<div className="text-indigo-600 font-semibold">Wilayah Dusun</div>}>
                  <Tree
                    lineWidth="4px"
                    lineColor="#4F46E5"
                    lineBorderRadius="0"
                    lineHeight="15.5rem"
                    label=''
                  >
                    <TreeNode label={<OfficialCard official={officials[2]} />} />
                    <TreeNode label={<OfficialCard official={officials[2]} />} />
                    <TreeNode label={<OfficialCard official={officials[2]} />} />
                  </Tree>
                </TreeNode>

                {/* Sekretaris Desa */}
                <TreeNode label={<OfficialCard official={officials[1]} />}>
                  <TreeNode label={<OfficialCard official={officials[5]} />} />
                  <TreeNode label={<OfficialCard official={officials[6]} />}>
                    <TreeNode label={<OfficialCard official={officials[2]} />} />
                  </TreeNode>
                  <TreeNode label={<OfficialCard official={officials[7]} />} />
                </TreeNode>
              </Tree>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillageOfficials;