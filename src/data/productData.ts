export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  seller: string;
  contact: string;
}

export const productData: Product[] = [
  {
    id: 1,
    name: 'Kopi Robusta Kersik',
    description: 'Kopi robusta asli yang ditanam di perbukitan desa. Diolah dengan metode natural dan menghasilkan cita rasa khas dengan aroma yang kuat.',
    price: 50000,
    image: 'https://images.pexels.com/photos/4820714/pexels-photo-4820714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'kuliner',
    seller: 'Kelompok Tani Kopi Kersik',
    contact: '081234567890'
  },
  {
    id: 2,
    name: 'Keripik Tempoyak',
    description: 'Keripik pisang dengan rasa tempoyak (durian fermentasi) yang unik. Renyah dan gurih dengan sentuhan asam khas tempoyak.',
    price: 25000,
    image: 'https://images.pexels.com/photos/2067624/pexels-photo-2067624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'kuliner',
    seller: 'UMKM Karya Ibu',
    contact: '082345678901'
  },
  {
    id: 3,
    name: 'Madu Kelulut',
    description: 'Madu asli dari lebah kelulut (stingless bee) yang dibudidayakan di Desa Kersik. Memiliki rasa yang khas dengan keasaman ringan dan manfaat kesehatan yang tinggi.',
    price: 85000,
    image: 'https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'kuliner',
    seller: 'Kelompok Tani Madu Alam',
    contact: '083456789012'
  },
  {
    id: 4,
    name: 'Anyaman Purun',
    description: 'Kerajinan tangan berupa tas, tikar, dan wadah serbaguna yang dibuat dari tanaman purun dengan motif tradisional khas Kalimantan.',
    price: 75000,
    image: 'https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'kerajinan',
    seller: 'Kelompok Pengrajin Purun Kreatif',
    contact: '084567890123'
  },
  {
    id: 5,
    name: 'Dodol Durian',
    description: 'Dodol dengan rasa durian yang kental dan aroma yang khas. Dibuat dari buah durian lokal pilihan dengan resep tradisional turun-temurun.',
    price: 35000,
    image: 'https://images.pexels.com/photos/136745/pexels-photo-136745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'kuliner',
    seller: 'Rumah Dodol Bu Tina',
    contact: '085678901234'
  },
  {
    id: 6,
    name: 'Batik Kersik',
    description: 'Kain batik dengan motif khas Desa Kersik yang menggambarkan flora dan fauna lokal. Dibuat dengan pewarna alami dan proses tradisional.',
    price: 150000,
    image: 'https://images.pexels.com/photos/4960250/pexels-photo-4960250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'kerajinan',
    seller: 'Sanggar Batik Indah',
    contact: '086789012345'
  },
  {
    id: 7,
    name: 'Beras Merah Organik',
    description: 'Beras merah organik yang ditanam dengan metode pertanian organik. Kaya akan nutrisi dan memiliki tekstur pulen saat dimasak.',
    price: 60000,
    image: 'https://images.pexels.com/photos/7310221/pexels-photo-7310221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pertanian',
    seller: 'Kelompok Tani Organik Sejahtera',
    contact: '087890123456'
  },
  {
    id: 8,
    name: 'Minyak Kelapa Murni',
    description: 'Minyak kelapa murni (VCO) yang dibuat dengan metode pengolahan tradisional. Cocok untuk memasak dan perawatan kulit.',
    price: 45000,
    image: 'https://images.pexels.com/photos/6308981/pexels-photo-6308981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pertanian',
    seller: 'Kelompok Wanita Tani Mandiri',
    contact: '088901234567'
  }
];