export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: 'Pantai Biru Kersik',
    description: 'Keindahan pantai dengan hamparan pasir putih dan air laut yang jernih.',
    image: 'https://images.pexels.com/photos/1268082/pexels-photo-1268082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'tourism',
    date: '15 April 2024'
  },
  {
    id: 2,
    title: 'Festival Budaya Tahunan',
    description: 'Penampilan tari tradisional oleh anak-anak desa dalam Festival Budaya Tahunan.',
    image: 'https://images.pexels.com/photos/7725952/pexels-photo-7725952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'culture',
    date: '30 Maret 2024'
  },
  {
    id: 3,
    title: 'Peresmian Jalan Desa',
    description: 'Warga desa dan aparat pemerintah dalam acara peresmian jalan desa yang baru diaspal.',
    image: 'https://images.pexels.com/photos/5792815/pexels-photo-5792815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'development',
    date: '5 April 2024'
  },
  {
    id: 4,
    title: 'Pelatihan Kerajinan Tangan',
    description: 'Ibu-ibu PKK sedang mengikuti pelatihan pembuatan kerajinan tangan dari bahan daur ulang.',
    image: 'https://images.pexels.com/photos/950241/pexels-photo-950241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'event',
    date: '10 April 2024'
  },
  {
    id: 5,
    title: 'Gotong Royong Membersihkan Sungai',
    description: 'Warga desa bergotong royong membersihkan sungai yang menjadi sumber air untuk pertanian dan perikanan.',
    image: 'https://images.pexels.com/photos/8851096/pexels-photo-8851096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'event',
    date: '12 Maret 2024'
  },
  {
    id: 6,
    title: 'Pelestarian Hutan Mangrove',
    description: 'Kegiatan penanaman pohon mangrove di pesisir pantai untuk mencegah abrasi dan melestarikan ekosistem.',
    image: 'https://images.pexels.com/photos/2827096/pexels-photo-2827096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'development',
    date: '8 Maret 2024'
  },
  {
    id: 7,
    title: 'Panen Raya Padi',
    description: 'Petani desa sedang melakukan panen raya padi dengan hasil yang melimpah.',
    image: 'https://images.pexels.com/photos/4947396/pexels-photo-4947396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'event',
    date: '2 Maret 2024'
  },
  {
    id: 8,
    title: 'Pertemuan Rutin Warga',
    description: 'Kegiatan pertemuan rutin warga untuk membahas program dan pembangunan desa.',
    image: 'https://images.pexels.com/photos/7356370/pexels-photo-7356370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'event',
    date: '25 Februari 2024'
  },
  {
    id: 9,
    title: 'Wisata Air Terjun Kersik',
    description: 'Keindahan air terjun di perbukitan Desa Kersik yang menjadi tujuan wisata alam.',
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'tourism',
    date: '18 Februari 2024'
  }
];