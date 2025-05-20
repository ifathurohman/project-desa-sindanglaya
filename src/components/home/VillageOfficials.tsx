import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, Building2, MapPin } from 'lucide-react';
import {
  DiagramComponent,
  Inject,
  DataBinding,
  HierarchicalTree,
  SnapConstraints,
  DiagramTools
} from '@syncfusion/ej2-react-diagrams';

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

const VillageOfficials: React.FC = () => {
  // Data for organizational chart
  const orgChartData = {
    id: 'root',
    dataSource: [
      { id: 'kades', Role: 'Kepala Desa', Employee: officials[0].name, parentId: '' },
      { id: 'sekdes', Role: 'Sekretaris Desa', Employee: officials[1].name, parentId: 'kades' },
      { id: 'kasi1', Role: 'Kepala Seksi Pemerintahan', Employee: officials[2].name, parentId: 'sekdes' },
      { id: 'kasi2', Role: 'Kepala Seksi Kesejahteraan', Employee: officials[3].name, parentId: 'sekdes' },
      { id: 'kasi3', Role: 'Kepala Seksi Pelayanan', Employee: officials[4].name, parentId: 'sekdes' },
      { id: 'kaur1', Role: 'Kaur Umum', Employee: officials[5].name, parentId: 'sekdes' },
      { id: 'kaur2', Role: 'Kaur Keuangan', Employee: officials[6].name, parentId: 'sekdes' },
      { id: 'kaur3', Role: 'Kaur Perencanaan', Employee: officials[7].name, parentId: 'sekdes' }
    ]
  };

  const getNodeDefaults = (obj: any) => {
    obj.height = 60;
    obj.width = 200;
    obj.style = {
      fill: '#ffffff',
      strokeColor: '#4F46E5',
      strokeWidth: 2,
      fontSize: 14,
      bold: true
    };
    return obj;
  };

  const getConnectorDefaults = (connector: any) => {
    connector.type = 'Orthogonal';
    connector.style = {
      strokeColor: '#4F46E5',
      strokeWidth: 2
    };
    return connector;
  };

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

        {/* Syncfusion Diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 overflow-hidden">
            <DiagramComponent
              id="diagram"
              width="100%"
              height="400px"
              snapSettings={{ constraints: SnapConstraints.None }}
              tool={DiagramTools.ZoomPan}
              layout={{
                type: 'HierarchicalTree',
                horizontalSpacing: 40,
                verticalSpacing: 40,
                orientation: 'TopToBottom'
              }}
              getNodeDefaults={getNodeDefaults}
              getConnectorDefaults={getConnectorDefaults}
              dataSourceSettings={{
                id: 'id',
                parentId: 'parentId',
                dataSource: orgChartData.dataSource,
                doBinding: (nodeModel: any, data: any) => {
                  nodeModel.annotations = [
                    { content: data.Role, style: { color: '#4F46E5' } },
                    { content: data.Employee, style: { color: '#1F2937' } }
                  ];
                }
              }}
            >
              <Inject services={[DataBinding, HierarchicalTree]} />
            </DiagramComponent>
          </div>
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