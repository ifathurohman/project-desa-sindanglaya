export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'Pembukaan Objek Wisata Pantai Biru Kersik',
    excerpt: 'Desa Kersik secara resmi membuka objek wisata Pantai Biru yang telah direvitalisasi untuk umum.',
    content: `<p>Desa Kersik, Kecamatan Paloh - Pemerintah Desa Kersik hari ini secara resmi membuka objek wisata Pantai Biru Kersik yang telah direvitalisasi untuk umum. Peresmian dilakukan langsung oleh Bupati Sambas yang didampingi oleh Camat Paloh dan Kepala Desa Kersik.</p>

    <p>Pantai Biru Kersik telah mengalami proses revitalisasi selama enam bulan terakhir dengan dana yang bersumber dari dana desa dan bantuan provinsi. Revitalisasi meliputi pembangunan gazebo, area parkir, toilet umum, dan beberapa spot foto yang instagramable.</p>
    
    <p>"Kami berharap dengan dibukanya kembali Pantai Biru Kersik, sektor pariwisata desa akan semakin berkembang dan dapat meningkatkan ekonomi masyarakat sekitar," ujar Kepala Desa Kersik, Bapak Suparman.</p>
    
    <p>Dalam sambutannya, Bupati Sambas menyatakan dukungannya terhadap pengembangan wisata desa dan berjanji akan terus mendukung inovasi-inovasi yang dilakukan oleh pemerintah desa.</p>
    
    <p>Pantai Biru Kersik akan dibuka setiap hari mulai pukul 08.00 hingga 18.00 WIB dengan tiket masuk Rp10.000 per orang. Pendapatan dari tiket masuk akan digunakan untuk pemeliharaan dan pengembangan objek wisata.</p>`,
    image: 'https://images.pexels.com/photos/1268082/pexels-photo-1268082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '15 April 2024',
    author: 'Admin Desa',
    category: 'tourism'
  },
  {
    id: 2,
    title: 'Pelatihan Pembuatan Kerajinan Tangan untuk Ibu-ibu PKK',
    excerpt: 'Program pelatihan keterampilan untuk ibu-ibu PKK dalam membuat kerajinan tangan dari bahan daur ulang.',
    content: `<p>Desa Kersik, Kecamatan Paloh - Pemerintah Desa Kersik bekerjasama dengan Dinas Pemberdayaan Perempuan dan Perlindungan Anak Kabupaten Sambas menyelenggarakan pelatihan pembuatan kerajinan tangan untuk ibu-ibu PKK. Pelatihan ini diikuti oleh 30 peserta dan dilaksanakan selama tiga hari di balai desa.</p>

    <p>Pelatihan difokuskan pada pembuatan kerajinan dari bahan daur ulang seperti botol plastik, koran bekas, dan kain perca. Para peserta diajari berbagai teknik untuk mengubah bahan-bahan tersebut menjadi produk kerajinan yang bernilai ekonomis seperti tas, tempat pensil, dan hiasan rumah.</p>
    
    <p>"Pelatihan ini bertujuan untuk memberikan keterampilan tambahan bagi ibu-ibu agar dapat menghasilkan produk yang bernilai jual sekaligus mengajarkan pentingnya daur ulang untuk lingkungan," jelas Ibu Suryani, Sekretaris Desa sekaligus koordinator kegiatan.</p>
    
    <p>Setelah pelatihan selesai, hasil kerajinan tangan tersebut akan dipamerkan dan dijual di pasar desa, serta dipromosikan melalui media sosial. Pemerintah desa juga berencana untuk membentuk kelompok usaha bersama agar produksi dan pemasaran kerajinan tangan tersebut dapat berkelanjutan.</p>
    
    <p>"Kami sangat senang dengan adanya pelatihan ini. Selain mendapatkan keterampilan baru, kami juga bisa menambah penghasilan keluarga," ujar Ibu Marni, salah satu peserta pelatihan.</p>`,
    image: 'https://images.pexels.com/photos/950241/pexels-photo-950241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '10 April 2024',
    author: 'Admin Desa',
    category: 'community'
  },
  {
    id: 3,
    title: 'Peresmian Jalan Desa yang Baru Diaspal',
    excerpt: 'Jalan utama Desa Kersik sepanjang 2,5 kilometer telah selesai diaspal dan diresmikan penggunaannya.',
    content: `<p>Desa Kersik, Kecamatan Paloh - Pemerintah Desa Kersik meresmikan jalan utama desa yang baru selesai diaspal. Jalan sepanjang 2,5 kilometer ini menghubungkan pusat desa dengan jalan kabupaten dan memudahkan akses warga menuju fasilitas publik seperti sekolah dan puskesmas.</p>

    <p>Proyek pengaspalan jalan ini menggunakan dana dari APBDes 2024 dengan total anggaran sebesar Rp350 juta. Pengerjaan dilakukan selama tiga bulan dan melibatkan warga desa sebagai tenaga kerja.</p>
    
    <p>"Pengaspalan jalan ini merupakan salah satu program prioritas kami tahun ini. Dengan jalan yang lebih baik, mobilitas warga akan meningkat dan diharapkan dapat mendorong pertumbuhan ekonomi desa," kata Kepala Desa Kersik dalam sambutannya.</p>
    
    <p>Selain pengaspalan, proyek ini juga meliputi pembuatan saluran drainase di sepanjang jalan untuk mencegah banjir saat musim hujan. Pemerintah desa juga telah memasang rambu-rambu jalan dan penerangan jalan untuk keamanan pengguna jalan, terutama di malam hari.</p>
    
    <p>Warga desa menyambut baik peresmian jalan ini. "Dulu kalau hujan jalan ini becek dan sulit dilalui. Sekarang sudah bagus, anak-anak bisa berangkat sekolah dengan lebih nyaman," ujar Pak Darmawan, salah satu warga desa.</p>`,
    image: 'https://images.pexels.com/photos/5792815/pexels-photo-5792815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '5 April 2024',
    author: 'Admin Desa',
    category: 'infrastructure'
  },
  {
    id: 4,
    title: 'Festival Budaya Tahunan Desa Kersik',
    excerpt: 'Desa Kersik menyelenggarakan festival budaya tahunan untuk melestarikan warisan budaya lokal.',
    content: `<p>Desa Kersik, Kecamatan Paloh - Desa Kersik kembali menyelenggarakan Festival Budaya Tahunan yang digelar selama tiga hari, mulai 28-30 Maret 2024. Festival yang diselenggarakan di lapangan desa ini menampilkan berbagai pertunjukan seni tradisional, pameran kerajinan, dan kuliner khas daerah.</p>

    <p>Festival ini dibuka oleh tarian Selamat Datang yang dibawakan oleh siswa-siswi SDN 01 Kersik, dilanjutkan dengan pertunjukan musik tradisional dan pertunjukan silat. Selain itu, ada juga berbagai lomba tradisional seperti lomba makan kerupuk, balap karung, dan tarik tambang yang diikuti oleh seluruh warga desa.</p>
    
    <p>"Festival Budaya Tahunan ini bertujuan untuk melestarikan dan memperkenalkan budaya lokal kepada generasi muda. Kami juga berharap festival ini dapat menjadi daya tarik wisata dan menambah pemasukan bagi warga," ujar Kepala Seksi Pelayanan, Ibu Indah.</p>
    
    <p>Pada hari terakhir festival, diadakan karnaval budaya yang diikuti oleh semua lapisan masyarakat desa. Mereka mengenakan pakaian adat dan membawa atribut tradisional dalam pawai keliling desa. Festival ditutup dengan pertunjukan kembang api dan doa bersama untuk kesejahteraan desa.</p>
    
    <p>Festival Budaya Tahunan Desa Kersik berhasil menarik perhatian tidak hanya warga desa tetapi juga pengunjung dari desa tetangga dan bahkan wisatawan dari luar daerah. "Tahun depan kami akan membuat festival yang lebih meriah dan melibatkan lebih banyak komunitas seni," janji panitia penyelenggara.</p>`,
    image: 'https://images.pexels.com/photos/7725952/pexels-photo-7725952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '1 April 2024',
    author: 'Admin Desa',
    category: 'culture'
  },
  {
    id: 5,
    title: 'Program Vaksinasi COVID-19 untuk Lansia',
    excerpt: 'Desa Kersik bekerjasama dengan Puskesmas setempat menyelenggarakan program vaksinasi untuk lansia.',
    content: `<p>Desa Kersik, Kecamatan Paloh - Pemerintah Desa Kersik bekerja sama dengan Puskesmas Paloh menyelenggarakan program vaksinasi COVID-19 untuk lansia. Program ini berlangsung selama dua hari di Balai Desa Kersik dan berhasil memberikan vaksin kepada 120 lansia.</p>

    <p>Program vaksinasi ini merupakan bagian dari upaya Pemerintah Desa untuk melindungi kelompok rentan dari virus COVID-19. Tim kesehatan dari Puskesmas Paloh dibantu oleh relawan dari karang taruna desa dalam pelaksanaan vaksinasi.</p>
    
    <p>"Kami memprioritaskan lansia dalam program vaksinasi ini karena mereka termasuk kelompok risiko tinggi. Alhamdulillah, antusiasme warga cukup baik," kata Bapak Rahmat, Kepala Urusan Keuangan yang juga menjadi koordinator program.</p>
    
    <p>Sebelum vaksinasi dilakukan, tim kesehatan melakukan pengecekan kesehatan awal untuk memastikan kondisi lansia dalam keadaan sehat dan layak untuk divaksin. Para lansia yang telah divaksin juga dipantau selama 30 menit untuk mengamati kemungkinan efek samping.</p>
    
    <p>"Saya senang bisa ikut vaksinasi. Awalnya takut, tapi setelah dijelaskan oleh petugasnya, jadi lebih tenang. Semoga dengan vaksin ini saya bisa lebih terlindungi," ujar Nenek Asiah (75), salah satu warga yang mendapatkan vaksin.</p>
    
    <p>Pemerintah Desa berencana akan menyelenggarakan program vaksinasi lanjutan untuk memastikan semua warga desa yang memenuhi syarat mendapatkan vaksin COVID-19.</p>`,
    image: 'https://images.pexels.com/photos/5863363/pexels-photo-5863363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '25 Maret 2024',
    author: 'Admin Desa',
    category: 'health'
  },
  {
    id: 6,
    title: 'Peluncuran Produk UMKM Desa Kersik',
    excerpt: 'Kelompok UMKM Desa Kersik meluncurkan berbagai produk baru yang telah tersertifikasi halal dan BPOM.',
    content: `<p>Desa Kersik, Kecamatan Paloh - Kelompok UMKM Desa Kersik meluncurkan berbagai produk baru hasil olahan lokal yang telah mendapatkan sertifikasi halal dan izin edar dari BPOM. Peluncuran produk ini dihadiri oleh Kepala Desa, perwakilan Dinas Koperasi dan UMKM Kabupaten Sambas, serta masyarakat umum.</p>

    <p>Produk yang diluncurkan meliputi keripik tempoyak, kopi robusta khas Kersik, madu kelulut, dan aneka kerajinan tangan dari purun. Semua produk ini dikemas dengan desain yang menarik dan modern, serta telah memiliki barcode yang memudahkan penjualan secara online.</p>
    
    <p>"Produk-produk ini adalah hasil kerja keras kelompok UMKM kita yang telah mendapatkan pendampingan dan pelatihan dari pemerintah desa dan dinas terkait. Dengan adanya sertifikasi dan izin edar, produk kita bisa bersaing di pasar yang lebih luas," kata Kepala Desa Kersik.</p>
    
    <p>Salah satu pengusaha UMKM, Ibu Titin, mengatakan bahwa sertifikasi halal dan izin BPOM sangat membantu meningkatkan kepercayaan konsumen terhadap produk mereka. "Proses sertifikasi memang tidak mudah, tapi hasilnya sangat memuaskan. Sekarang kami lebih percaya diri untuk memasarkan produk kami ke berbagai daerah," ujarnya.</p>
    
    <p>Pemerintah Desa Kersik juga telah menyediakan tempat khusus di pasar desa untuk memasarkan produk-produk UMKM tersebut. Selain itu, produk-produk ini juga dipasarkan secara online melalui marketplace dan media sosial resmi desa.</p>`,
    image: 'https://images.pexels.com/photos/6152103/pexels-photo-6152103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '20 Maret 2024',
    author: 'Admin Desa',
    category: 'economy'
  }
];