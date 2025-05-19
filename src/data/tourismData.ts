export interface TourismSpot {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
  hours: string;
  ticketPrice: string;
  facilities: string[];
  activities: string[];
  gallery: string[];
}

export const tourismData: TourismSpot[] = [
  {
    id: 1,
    name: 'Curug Ngebul',
    description: 'Curug Ngebul adalah air terjun unik yang memiliki fenomena "asap" yang muncul dari tekanan air yang menghantam bebatuan dasar. Menurut mitos lokal, nama ini berasal dari kejadian ketika seorang putri mandi di kolamnya dan mengeluarkan asap. Namun secara ilmiah, efek asap ini terjadi karena tekanan air yang menghantam bebatuan dasar, menciptakan percikan yang menyerupai asap.',
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Desa Bunijaya, Kecamatan Pagelaran, Kabupaten Cianjur, Provinsi Jawa Barat',
    hours: 'Setiap hari, 07.00 - 17.00 WIB',
    ticketPrice: 'Tiket masuk: Rp7.500/orang, Berkemah: Rp15.000/orang, Parkir motor: Rp5.000',
    facilities: [
      'Area parkir',
      'Toilet',
      'Saung dan gazebo',
      'Area berkemah',
      'Kedai dan warung makan'
    ],
    activities: [
      'Trekking',
      'Fotografi',
      'Berkemah',
      'Berenang',
      'Menikmati pemandangan alam'
    ],
    gallery: [
      'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1451076/pexels-photo-1451076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2042092/pexels-photo-2042092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 2,
    name: 'Pantai Biru Kersik',
    description: 'Pantai Biru Kersik merupakan destinasi wisata utama di desa ini. Dengan hamparan pasir putih yang bersih dan air laut yang jernih, pantai ini menawarkan pemandangan matahari terbenam yang memukau. Suasana pantai yang tenang dan belum terlalu ramai pengunjung menjadikannya tempat ideal untuk bersantai dan menikmati keindahan alam.',
    image: 'https://images.pexels.com/photos/1268082/pexels-photo-1268082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Jalan Pantai Kersik, 2 km dari pusat desa',
    hours: 'Setiap hari, 06.00 - 18.00 WIB',
    ticketPrice: 'Rp10.000 per orang',
    facilities: [
      'Area parkir',
      'Toilet umum',
      'Gazebo',
      'Warung makan',
      'Spot foto',
      'Tempat ibadah'
    ],
    activities: [
      'Berenang',
      'Snorkeling',
      'Memancing',
      'Bersepeda pantai',
      'Camping',
      'Menikmati sunset'
    ],
    gallery: [
      'https://images.pexels.com/photos/1268082/pexels-photo-1268082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 3,
    name: 'Hutan Mangrove Kersik',
    description: 'Hutan Mangrove Kersik merupakan ekosistem penting yang menjadi rumah bagi berbagai flora dan fauna. Pengunjung dapat menjelajahi hutan mangrove melalui jembatan kayu yang telah dibangun untuk memudahkan akses. Selain sebagai destinasi wisata, hutan mangrove ini juga berfungsi sebagai pelindung pantai dari abrasi dan habitat bagi berbagai jenis kepiting, ikan, dan burung.',
    image: 'https://images.pexels.com/photos/2827096/pexels-photo-2827096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Muara Sungai Kersik, 3 km dari pusat desa',
    hours: 'Setiap hari, 08.00 - 17.00 WIB',
    ticketPrice: 'Rp8.000 per orang',
    facilities: [
      'Jembatan kayu',
      'Menara pengamatan',
      'Pusat informasi',
      'Toilet umum',
      'Area parkir'
    ],
    activities: [
      'Susur mangrove',
      'Pengamatan burung',
      'Fotografi',
      'Memancing',
      'Edukasi lingkungan'
    ],
    gallery: [
      'https://images.pexels.com/photos/2827096/pexels-photo-2827096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1586755/pexels-photo-1586755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2307635/pexels-photo-2307635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 4,
    name: 'Kampung Budaya Kersik',
    description: 'Kampung Budaya Kersik menawarkan pengalaman budaya yang otentik. Pengunjung dapat menyaksikan pertunjukan seni tradisional, mempelajari kerajinan tangan lokal, dan mencicipi kuliner khas desa. Rumah-rumah tradisional yang dipertahankan memberikan gambaran tentang kehidupan masyarakat desa pada masa lalu. Kampung ini juga sering menjadi tempat penyelenggaraan festival budaya tahunan.',
    image: 'https://images.pexels.com/photos/7725952/pexels-photo-7725952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Dusun Tua, 1 km dari pusat desa',
    hours: 'Selasa - Minggu, 09.00 - 16.00 WIB (Senin tutup)',
    ticketPrice: 'Rp12.000 per orang',
    facilities: [
      'Panggung pertunjukan',
      'Galeri seni',
      'Restoran tradisional',
      'Toko suvenir',
      'Toilet umum',
      'Area parkir'
    ],
    activities: [
      'Menonton pertunjukan seni',
      'Workshop kerajinan tangan',
      'Belajar memasak makanan tradisional',
      'Foto dengan pakaian adat',
      'Mengikuti upacara tradisional'
    ],
    gallery: [
      'https://images.pexels.com/photos/7725952/pexels-photo-7725952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7725959/pexels-photo-7725959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7725984/pexels-photo-7725984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  }
];