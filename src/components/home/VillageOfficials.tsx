import React from 'react';
import { motion } from 'framer-motion';
import { Tree, TreeNode } from 'react-organizational-chart';
import { MapPin, Users, Phone, Mail } from 'lucide-react';

interface Official {
  id: number;
  name: string;
  position: string;
  division?: string;
  image: string;
  contact?: {
    phone?: string;
    email?: string;
  };
}

const officials: Official[] = [
  {
    id: 1,
    name: 'Bapak Suparman',
    position: 'Kepala Desa',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: {
      phone: '081234567890',
      email: 'kades@desasindangjaya.id'
    }
  },
  {
    id: 2,
    name: 'Ibu Suryani',
    position: 'Sekretaris Desa',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: {
      phone: '081234567891',
      email: 'sekdes@desasindangjaya.id'
    }
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
  <div className="bg-white rounded-xl shadow-lg p-6 min-w-[240px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
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
      {official.contact && (
        <div className="pt-2 space-y-1">
          {official.contact.phone && (
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Phone size={14} className="mr-1" />
              <span>{official.contact.phone}</span>
            </div>
          )}
          {official.contact.email && (
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Mail size={14} className="mr-1" />
              <span className="truncate">{official.contact.email}</span>
            </div>
          )}
        </div>
      )}
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

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[900px] max-w-[1200px] mx-auto">
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
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Dusun 1', 'Dusun 2', 'Dusun 3'].map((dusun, index) => (
            <motion.div
              key={dusun}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Kepala {dusun}</h3>
                <p className="text-gray-600">Koordinator Wilayah</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    <span>Wilayah {dusun}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillageOfficials;