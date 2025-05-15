import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { tourismData } from '../data/tourismData';
import { MapPin, Clock, Ticket, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const TourismPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Wisata Desa" 
        description="Jelajahi keindahan alam dan kekayaan budaya Desa Kersik"
        image="https://images.pexels.com/photos/1268082/pexels-photo-1268082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        height="large"
      />

      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Destinasi Wisata</h2>
            <p className="text-gray-600">
              Desa Kersik menawarkan berbagai destinasi wisata menarik, dari pantai yang indah hingga kampung budaya yang kaya akan tradisi. Mari jelajahi keindahan desa kami!
            </p>
          </div>

          <div className="space-y-16 mt-12">
            {tourismData.map((spot, index) => (
              <motion.div 
                key={spot.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-lg h-full">
                    <img 
                      src={spot.image} 
                      alt={spot.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{spot.name}</h3>
                  <p className="text-gray-700 mb-6">{spot.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span>{spot.location}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span>{spot.hours}</span>
                    </div>
                    <div className="flex items-start">
                      <Ticket className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span>{spot.ticketPrice}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Info className="w-4 h-4 mr-2" />
                      Fasilitas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {spot.facilities.map((facility, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Info className="w-4 h-4 mr-2" />
                      Aktivitas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {spot.activities.map((activity, idx) => (
                        <span 
                          key={idx} 
                          className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="section-title">Paket Wisata</h2>
            <p className="text-gray-600">
              Nikmati pengalaman berwisata di Desa Kersik dengan paket wisata yang telah kami siapkan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="h-2 bg-primary-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Paket Sehari</h3>
                <div className="text-2xl font-bold text-primary-600 mb-4">Rp250.000<span className="text-sm font-normal text-gray-500">/orang</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Kunjungan ke Pantai Biru Kersik</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Wisata Hutan Mangrove</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Makan siang di restoran lokal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Transportasi lokal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Pemandu wisata</span>
                  </li>
                </ul>
                <button className="w-full btn btn-primary">Pesan Sekarang</button>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="h-2 bg-secondary-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Paket Menginap</h3>
                <div className="text-2xl font-bold text-primary-600 mb-4">Rp450.000<span className="text-sm font-normal text-gray-500">/orang</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Semua yang ada di Paket Sehari</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Penginapan 1 malam di homestay</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Makan malam dengan hidangan lokal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Pertunjukan budaya tradisional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Sarapan pagi</span>
                  </li>
                </ul>
                <button className="w-full btn btn-primary">Pesan Sekarang</button>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="h-2 bg-accent-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Paket Keluarga</h3>
                <div className="text-2xl font-bold text-primary-600 mb-4">Rp850.000<span className="text-sm font-normal text-gray-500">/keluarga</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Untuk 2 dewasa dan 2 anak</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Kunjungan ke semua objek wisata</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Workshop kerajinan untuk anak</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>2x makan (siang dan malam)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Foto keluarga dengan pakaian adat</span>
                  </li>
                </ul>
                <button className="w-full btn btn-primary">Pesan Sekarang</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourismPage;