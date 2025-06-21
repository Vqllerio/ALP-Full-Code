
const destinations = [
  {
    id: 1,
    title: "Pantai Punaga",
    location: "Takalar",
    description: "Pantai tebing alami dengan panorama karang menjulang dan laut jernih, dijuluki Tanah Lot versi Sulsel dan lokasi syuting film nasional.",
    image: "wisata/Pantai dan danau/takalar/Pantai Punaga.jpg",
    rating: 4.4,
    reviews: 980,
    userRating: 0,
    category: "pantai/Danau"
  },
  {
  id: 2,
  title: "Pulau Sanrobongi",
  location: "Takalar",
  description: "Pulau kecil eksotis dengan pasir putih dan air laut jernih, cocok untuk snorkeling, camping, serta dikenal dari kisah tabib malam Sanro Bengi.",
  image: "https://images.unsplash.com/photo-1545233273-3f10c2acb13c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", 
  rating: 4.7,
  reviews: 1230,
  userRating: 0,
  category: "Pantai/Danau"
},
{
id: 3, 
  title: "Waterboom Topejawa",
  location: "Topejawa, Takalar, Sulawesi Selatan",
  description: "Waterboom keluarga dengan panorama laut dan wahana modern, lengkap dengan fasilitas rekreasi dan penginapan di pesisir Takalar.",
  image: "https://images.unsplash.com/photo-1562088287-bde35a8be6f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 3.5,
  reviews: 1230,
  userRating: 0,
  category: "Kota"
},
{
  id: 4,
  title: "Padang Savana Ongkoa",
  location: "Laikang, Takalar, Sulawesi Selatan",
  description: "Hamparan savana tropis dengan padang rumput luas, bukit landai, dan panorama laut. Cocok untuk trekking, fotografi, dan menikmati sunrise/sunset.",
  image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", 
  reviews: 850,
  userRating: 0,
  category: "Pantai/Danau"
},
{
  id: 5,
  title: "Maudu Lompoa Cikoang",
  location: "Cikoang, Takalar, Sulawesi Selatan",
  description: "Upacara adat Maulid Nabi megah dengan perahu hias (Jolloro), barzanji, dan pembagian makanan berkat. Warisan budaya takbenda Sulsel.",
  image: "https://images.unsplash.com/photo-1585032224-45fb35fc0187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", 
  rating: 4.8,
  reviews: 1500,
  userRating: 0,
  category: "Pantai/Danau"
},
{
  id: 6,
  title: "Taman Nasional Taka Bonerate",
  location: "Kepulauan Selayar, Sulawesi Selatan",
  description: "Taman laut nasional dengan atol terbesar di Asia Tenggara, surga menyelam dengan kekayaan hayati dan budaya maritim masyarakat Bugis-Bajo.",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.8,
  reviews: 1700,
  userRating: 0,
  category: "Pantai/Danau"
},
{
  id: 7,
  title: "Pantai Sunari",
  location: "Dusun Tile-tile, Desa Patikarya, Bontosikuyu, Kepulauan Selayar",
  description: "Pantai alami yang mulai dikenal sejak 2019, menawarkan suasana tenang, pertunjukan budaya, dan potensi ekowisata yang tumbuh.",
  image: "https://images.unsplash.com/photo-1590490360182-03d88910e013?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.5,
  reviews: 850,
  userRating: 0,
  category: "Pantai/Danau"
},
{
  id: 8,
  title: "Pantai Pinang",
  location: "Pesisir Timur Pulau Selayar, Kecamatan Bontosikuyu",
  description: "Destinasi eksotis dengan pasir putih, snorkeling, dan konservasi alam. Terkenal dengan penginapan ramah lingkungan dan atmosfer privat.",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", 
  rating: 4.9,
  reviews: 1260,
  userRating: 0,
  category: "Pantai/Danau"
},
{
  id: 9,
  title: "Puncak Pusera",
  location: "Dusun Taipadada, Desa Bonea Makmur, Bontomanai, Kepulauan Selayar",
  description: "Titik tertinggi di Pulau Selayar dengan panorama 360 derajat, cocok untuk trekking, camping, dan stargazing.",
  image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.4,
  reviews: 970,
  userRating: 0,
  category: "Pegunungan"
},
{
  id: 10,
  title: "Benteng Tua Bitombang",
  location: "Desa Bontobangun, Kecamatan Bontoharu, Kepulauan Selayar, Sulawesi Selatan",
  description: "Kampung adat kuno di perbukitan Selayar yang dikenal dengan rumah panggung setinggi 10–15 meter, dibangun tanpa paku. Menawarkan nilai historis, budaya spiritual, dan arsitektur tradisional khas masyarakat pra-Islam.",
  image: "https://images.unsplash.com/photo-1570084031742-207c8435b9e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", 
  rating: 4.7,
  reviews: 1350,
  userRating: 0,
  category: "Wisata Kota"
},
{
  id: 11,
  title: "Air Terjun Bantimurung",
  location: "Bantimurung, Bone-Bone, Kabupaten Luwu Utara, Sulawesi Selatan",
  description: "Air terjun ikonik setinggi 15 meter dengan kolam alami dan taman kupu-kupu, terletak di kawasan karst Maros. Cocok untuk wisata keluarga dan edukatif.",
  image: "https://images.unsplash.com/photo-1556909219-ef4367934f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  rating: 4.6,
  reviews: 1880,
  userRating: 0,
  category: "Air Terjun"
},
{
  id: 12,
  title: "Air Terjun Sarambu Alla",
  location: "Dusun Tonangka, Desa Kalotok, Kecamatan Sabbang Selatan, Kabupaten Luwu Utara, Sulawesi Selatan",
  description: "Air terjun bertingkat dengan suasana hutan tropis liar dan spiritualitas lokal. Cocok untuk trekking dan ekowisata petualangan.",
  image: "https://images.unsplash.com/photo-1611142613016-d292af1e3482?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  rating: 4.3,
  reviews: 740,
  userRating: 0,
  category: "Air Terjun"
},
{
  id: 13,
  title: "Wisata Alam Sulili Baebunta",
  location: "Desa Baebunta, Kecamatan Baebunta, Kabupaten Luwu Utara, Sulawesi Selatan",
  description: "Destinasi wisata alam yang menawarkan aliran sungai Sulili yang jernih, pepohonan rindang, dan suasana pedesaan yang tenang. Cocok untuk berenang, river tubing, dan bersantai bersama keluarga.",
  image: "https://images.unsplash.com/photo-1570084031742-207c8435b9e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  rating: 4.9,
  reviews: 1350,
  userRating: 0,
  category: "Wisata Alam"
},
{
  id: 14,
  title: "Pemandian Air Panas Pincara",
  location: "Desa Pincara, Kecamatan Masamba, Kabupaten Luwu Utara, Sulawesi Selatan",
  description: "Pemandian air panas alami yang dipercaya memiliki khasiat untuk kesehatan, dikelilingi oleh pegunungan hijau dan suasana asri. Menawarkan kolam air panas, pancuran uap belerang, dan aktivitas seperti trekking dan river tubing.",
  image: "https://images.unsplash.com/photo-1589394815804-9648adb3d470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.1,
  reviews: 1350,
  userRating: 0,
  category: "Wisata Alam"
},
{
  id: 15,
  title: "Air Terjun Rema (Permandian Alam Tamboke)",
  location: "Desa Tamboke, Kec. Sukamaju, Kab. Luwu Utara, Sulawesi Selatan",
  description: "Air terjun alami setinggi 15–20 meter dengan kolam jernih dikelilingi hutan tropis. Menawarkan spot berenang, trekking ringan, dan budaya botram (makan bersama). Dikelola secara swadaya oleh masyarakat dengan fasilitas gazebo bambu dan warung tradisional.",
  image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.9,
  reviews: 890,
  userRating: 0,
  category: "Wisata Alam"
},
{
  id: 16,
  title: "Danau Matano",
  location: "Kec. Nuha, Kabupaten Luwu Timur, Sulawesi Selatan",
  description: "Danau tektonik purba terdalam di Asia Tenggara (590m), dengan air jernih dan ekosistem endemik. Menawarkan snorkeling, gua bawah air, festival budaya tahunan, dan desa wisata tradisional Molabu (penempaan besi).",
  image: "https://images.unsplash.com/photo-1628155930542-2c9c3d5b9c4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.6,
  reviews: 1200,
  userRating: 0,
  category: "Pantai/Danau"
},
{
  id: 17,
  title: "Danau Towuti",
  location: "Kec. Towuti, Kabupaten Luwu Timur, Sulawesi Selatan",
  description: "Danau tektonik purba terbesar kedua di Indonesia (561 km²), bagian dari Geopark Towuti-Matano-Mahalona. Menawarkan pulau eksotis (Pulau Loeha), spot memancing ikan endemik, dan budaya kearifan lokal 'Nenek Penjaga Danau'.",
  image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.4,
  reviews: 950,
  userRating: 0,
  category: "Pantai/Danau"
},
{
  id: 18,
  title: "Pantai Ide",
  location: "Dusun Magani, Kel. Magani, Kec. Nuha, Kab. Luwu Timur, Sulawesi Selatan",
  description: "Pantai air tawar di Danau Matano dengan air jernih kebiruan, dermaga kayu ikonik, dan suasana tenang. Menawarkan aktivitas banana boat, kano, dan spot foto matahari terbenam yang memukau.",
  image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.6,
  reviews: 850,
  userRating: 0,
  category: "Pantai/Danau"
},
{
  id: 19,
  title: "Permandian Air Panas & Arum Jeram",
  location: "Cendana, Burau, Kab. Luwu Timur, Sulawesi Selatan",
  description: "Wisata terpadu dengan kolam air panas alami bersuhu 40°C dan arum jeram Sungai Balambano. Menawarkan paket river tubing dengan pemandu profesional dan fasilitas mushola/warung.",
  image: "https://images.unsplash.com/photo-1582123450787-9fd9f5c9d6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 5.0,
  reviews: 720,
  userRating: 0,
  category: "Air Terjun"
},
{
  id: 20,
  title: "Pantai Lemo",
  location: "Desa Mabonta, Kec. Burau, Kab. Luwu Timur, Sulawesi Selatan",
  description: "Pantai pasir putih dengan air laut tenang, situs makam raja Kerajaan Lemo-Lemo, dan fenomena unik mata air tawar di tepi pantai. Dilengkapi dermaga foto & warung seafood.",
  image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.0,
  reviews: 600,
  userRating: 0,
  category: "Pantai/Danau"
},
{
  id: 21,
  title: "Bukit Cekong",
  location: "Tanete, Anggeraja, Kabupaten Enrekang, Sulawesi Selatan",
  description: "Destinasi petualangan di ketinggian 1.000 mdpl dengan ayunan ekstrem, flying fox, dan bekas sirkuit motor trail. Menawarkan area berkemah, pemandangan tebing spektakuler, dan kedai kopi Arabika Kalosi khas lokal.",
  image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.5,
  reviews: 720,
  userRating: 0,
  category: "Pegunungan"
},
{
  id: 22,
  title: "Air Terjun Lewaja",
  location: "Desa Lewaja, Kec. Enrekang, Kab. Enrekang, Sulawesi Selatan",
  description: "Air terjun setinggi 13m dengan kolam alami untuk berenang. Trekking 1km melewati lembah hijau. Dikelola warga dengan fasilitas mushola, gazebo, dan spot kuliner lokal.",
  image: "https://images.unsplash.com/photo-1588392382834-a8914b63b3af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.4,
  reviews: 520,
  userRating: 0,
  category: "Air Terjun"
},
{
  id: 23,
  title: "Mendatte Park",
  location: "Mendatte, Kec. Anggeraja, Kab. Enrekang, Sulawesi Selatan",
  description: "'Pegunungan Swiss'-nya Sulsel dengan karst Suruganna & Gunung Nona. Fasilitas lengkap: camping, paintball, kedai kopi lokal (Kedai Nona), dan spot foto Milky Way malam hari.",
  image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.7,
  reviews: 890,
  userRating: 0,
  category: "Pegunungan"
},
{
  id: 24,
  title: "Dante Pine",
  location: "Tanete, Kec. Anggeraja, Kab. Enrekang, Sulawesi Selatan",
  description: "Hutan pinus alami dengan wahana ekstrem (Zip Bike, Tarzan Swing) & spot foto estetik (rumah hobbit, sarang King Kong). Menyediakan glamping & kedai kopi Arabika Kalosi.",
  image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.4,
  reviews: 750,
  userRating: 0,
  category: "Pegunungan"
},
{
  id: 25,
  title: "Bukit Cekong",
  location: "Tanete, Anggeraja, Kabupaten Enrekang, Sulawesi Selatan",
  description: "Destinasi petualangan di ketinggian 1.000 mdpl dengan ayunan ekstrem, flying fox, dan bekas sirkuit motor trail. Menawarkan area berkemah, pemandangan tebing spektakuler, dan kedai kopi Arabika Kalosi khas lokal.",
  image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.5,
  reviews: 720,
  userRating: 0,
  category: "Pegunungan"
},
{
  id: 26,
  title: "Pantai Pasir Putih Tonrangeng (Paputo)",
  location: "Jl. Latassakka, Kel. Lumpue, Kec. Bacukiki Barat, Parepare",
  description: "Destinasi pantai hasil revitalisasi dengan pasir putih alami dan gazebo warna-warni. Pusat Festival Salo Karajae tahunan dan kuliner pesisir khas Bugis-Makassar.",
  image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.1,
  reviews: 850,
  userRating: 0,
  category: "Pantai/Danau"
},
{
  id: 27,
  title: "Kebun Raya Jompie",
  location: "Jl. Industri Kecil, Kel. Bukit Harapan, Kec. Soreang, Parepare",
  description: "Hutan kota dengan 17 blok tematik flora Wallacea. Menawarkan menara pandang, rumah kaca anggrek, dan program edukasi lingkungan berbasis kearifan lokal.",
  image: "https://images.unsplash.com/photo-1587135991058-8816a5360a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.4,
  reviews: 620,
  userRating: 0,
  category: "Pegunungan"
},
{
  id: 28,
  title: "Museum BJ Habibie",
  location: "Jl. Alwi Abdul Djalil Habibie No.1, Kel. Mallusetasi, Parepare",
  description: "Rumah masa kecil Presiden Habibie dengan koleksi pribadi dan replika pesawat N250. Menampilkan teknologi audiovisual interaktif trilingual (Indonesia-Inggris-Bugis).",
  image: "https://images.unsplash.com/photo-1587135991058-8816a5360a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.7,
  reviews: 930,
  userRating: 0,
  category: "Budaya/Edukasi/Sejarah"
},
{
  id: 29,
  title: "Tonrangeng Riverside",
  location: "Lumpue, Bacukiki Barat, Parepare",
  description: "Destinasi tepi sungai dengan jembatan pedestrian warna-warni dan kafe kontainer. Lokasi utama Festival Salo Karajae dan pertunjukan budaya Bugis.",
  image: "https://images.unsplash.com/photo-1604063058114-4d9842c7383f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.5,
  reviews: 780,
  userRating: 0,
  category: "Wisata Kota"
},
{
  id: 30,
  title: "Pantai Lumpue",
  location: "Jl. Pinggir Laut No.18, Lumpue, Parepare",
  description: "Pantai tradisional nelayan sejak 1950-an dengan gazebo bambu alami. Dijuluki 'Pantai Kupu-Kupu' karena barisan perahu warna-warni yang bersandar.",
  image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.0,
  reviews: 540,
  userRating: 0,
  category: "Pantai/Danau"
},
{
  id: 31,
  title: "Danau Tempe",
  location: "Desa Salotengnga, Kec. Sabbangparu, Kab. Wajo, Sulawesi Selatan",
  description: "Danau tektonik purba seluas 350 km² dengan komunitas rumah apung Bugis. Habitat 60+ spesies ikan dan lokasi Festival Maccera Tappareng tahunan.",
  image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.3,
  reviews: 1200,
  userRating: 0,
  category: "Pantai/Danau"
},
{
  id: 32,
  title: "Rumah Adat Atakkae",
  location: "Kel. Atakkae, Kec. Tempe, Kab. Wajo, Sulawesi Selatan",
  description: "Kompleks rumah panggung Bugis dengan Saoraja La Tenri Bali (istana 101 tiang). Pusat budaya dan edukasi arsitektur tradisional Wajo.",
  image: "https://images.unsplash.com/photo-1587135991058-8816a5360a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.4,
  reviews: 850,
  userRating: 0,
  category: "Sejarah/Budaya/Edukasi"
},
{
  id: 33,
  title: "Gelora Permata Hijau Waetuwo",
  location: "Desa Wae Tuwo, Kec. Tana Sitolo, Kab. Wajo, Sulawesi Selatan",
  description: "Desa wisata dengan kolam alami dari mata air jernih. Juara 1 ADWI 2023 kategori berkembang, menawarkan camping ground dan aktivitas budaya Bugis.",
  image: "https://images.unsplash.com/photo-1604063058114-4d9842c7383f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.6,
  reviews: 950,
  userRating: 0,
  category: "Wisata Kota"
},
{
  id: 34,
  title: "Gelora Wisata Desa Nepo",
  location: "Jl. Pelita, Desa Nepo, Kec. Tana Sitolo, Kab. Wajo",
  description: "Destinasi tepi Danau Tempe dengan gazebo dan spot sunset. 'Kampung Habibie Kecil' yang kaya tradisi Bugis seperti Maccera Tappareng.",
  image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.3,
  reviews: 700,
  userRating: 0,
  category: "Wisata Kota"
},
{
  id: 35,
  title: "Saoraja Wajo",
  location: "Kel. Atakkae, Kec. Tempe, Kab. Wajo, Sulawesi Selatan",
  description: "Istana tradisional Kerajaan Wajo dengan arsitektur Bugis megah. Menampilkan artefak kerajaan dan menjadi pusat festival budaya tahunan.",
  image: "https://images.unsplash.com/photo-1587135991058-8816a5360a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.5,
  reviews: 600,
  userRating: 0,
  category: "Sejarah/Budaya"
},
{
  id: 36,
  title: "Lembah Cinta",
  location: "Desa Mattabulu, Kecamatan Lalabata, Kabupaten Soppeng, Sulawesi Selatan",
  description: "Desa dengan akar budaya kuat, lokasi ritual Pattaungeng dan Mappadendang. Memiliki situs makam Petta Bulu Matanre peninggalan Kerajaan Bulu Matanre.",
  image: "https://images.unsplash.com/photo-1587135991058-8816a5360a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.7,
  reviews: 600,
  userRating: 0,
  category: "Wisata Kota"
},
{
  id: 37,
  title: "Pemandian Air Panas Lejja",
  location: "Desa Bulue, Kecamatan Marioriawa, Kabupaten Soppeng, Sulawesi Selatan",
  description: "Kawasan air panas belerang yang sejak zaman pra-Islam digunakan untuk ritual sesaji dan pengobatan tradisional. Memiliki kepercayaan magis seperti 'sumur jodoh'.",
  image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  rating: 4.4,
  reviews: 450,
  userRating: 0,
  category: "Air Terjun"
},

];

const historyData = {
  1: {
    title: "Pantai Punaga",
    location: "Makassar, Sulawesi Selatan",
    image: "wisata/Pantai dan danau/takalar/Pantai Punaga.jpg",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Pantai Losari</h3>
      <p class="text-liver mb-6">
      Pantai Punaga memiliki nilai budaya yang semakin dikenal setelah menjadi salah satu lokasi syuting film nasional Tenggelamnya Kapal Van der Wijck pada tahun 2013. Keindahan tebing karang dan suasana eksotisnya memperkuat daya tarik visual film tersebut, sehingga lokasi ini kini memiliki ikatan simbolik sebagai bagian dari memori budaya populer Indonesia. <br>
      <br>
      Masyarakat lokal pun turut mengangkat citra pantai ini sebagai "Tanah Lot versi Sulawesi Selatan." Julukan ini mencerminkan bagaimana warga membangun narasi budaya untuk mengaitkan identitas lokal dengan ikon wisata nasional. Hal ini menjadi bentuk ekspresi kreatif sekaligus strategi promosi berbasis budaya.<br
      <br>
      Pantai Punaga juga menjadi ruang sosial yang penting bagi warga. Aktivitas gotong royong seperti menjaga kebersihan pantai, menjual makanan tradisional, dan menyewakan gazebo menunjukkan partisipasi aktif komunitas dalam memanfaatkan ruang alam sebagai bagian dari kehidupan ekonomi dan sosial sehari-hari.<br>
      <br>
      Secara spiritual, pantai ini menjadi tempat pelaksanaan ritual kecil masyarakat seperti mandi bersama saat Ramadan atau doa bersama menjelang kegiatan penting. Tradisi ini memperlihatkan keterkaitan kuat antara masyarakat, waktu keagamaan, dan alam sekitar.<br>
      <br>
      Namun demikian, abrasi pantai yang terus terjadi telah mengancam keberadaan makam-makam adat di sekitar tebing. Makam leluhur yang dulunya menjadi simbol ikatan sejarah dan spiritualitas komunitas mulai rusak dan tergerus air laut. Kondisi ini memunculkan keprihatinan akan hilangnya warisan budaya tak benda yang penting bagi identitas lokal.<br>
      </p>
      
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya dan Tradisi</h3>
      <p class="text-liver mb-6">
        Pantai Punaga dikenal memiliki potensi budaya lokal yang menarik interaksi langsung antara wisatawan dan masyarakat setempat. Pengembangan kawasan wisata di desa ini menekankan pengalaman budaya, di mana pengunjung dapat melihat langsung aktivitas warga seperti menjual kuliner lokal dari gazebo, membersihkan area pantai secara kolektif, hingga santai bersama warga dalam nuansa desa pesisir yang khas.
Identitas Pantai Punaga semakin melekat pada masyarakat setelah dijadikan lokasi syuting film “Tenggelamnya Kapal Van der Wijck” (2013). Hal ini menciptakan hubungan budaya baru antara masyarakat lokal dan produksi film nasional, mengangkat citra pantai sebagai "Tanah Lot versi Sulsel" dan memicu kebanggaan serta strategi branding wisata berbasis budaya pop .
Permukiman dan lingkungan pantai ini sarat dengan nilai spiritual dan ritual lokal, meski tidak berskala tinggi, seperti kebiasaan mandi pagi bersama saat Ramadan atau doa bersama yang dilakukan warga. Tradisi informal semacam ini memperlihatkan hubungan kuat antara masyarakat, waktu keagamaan, dan ruang publik di kawasan pesisir .
Namun, budaya lokal Punaga juga tengah menghadapi tantangan serius—abrasi pantai telah menggerus puluhan makam adat masyarakat, termasuk makam keluarga bangsawan Raja Gowa. Fenomena ini menimbulkan keprihatinan karena makam leluhur dan situs budaya mengalami kerusakan, menunjukkan kerentanan budaya lokal terhadap perubahan alam dan kebutuhan mitigasi bencana berbasis budaya.
      </p>
    `
  },
  2: {
    title: "Pulau Sanrobongi",
    location: "Takalar, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1545233273-3f10c2acb13c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", 
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Pulau Sanrobongi</h3>
      <p class="text-liver mb-6">
        Secara historis, Pulau Sanrobongi memiliki kisah menarik di balik penamaannya. Nama "Sanrobongi" berasal dari bahasa Makassar: 
        "Sanro" berarti dukun atau tabib, dan "Bengi" berarti malam. Menurut cerita masyarakat, pada masa lampau pulau ini pernah dilanda wabah. 
        Seorang tabib bernama Mappaonri Daeng Passallang muncul secara misterius pada malam hari dan berhasil menyembuhkan wabah tersebut. 
        Sebagai bentuk penghormatan, masyarakat menamai pulau ini "Sanrobengi", yang kemudian dilafalkan menjadi "Sanrobongi".
      </p>

      <h3 class="text-2xl font-bold text-midnight-green mb-4">Aspek Budaya</h3>
      <p class="text-liver mb-6">
        Pulau Sanrobongi memiliki nilai budaya penting dalam pelestarian tradisi dan kearifan lokal. Festival Pulau Sanrobengi yang digelar pada tahun 2016 dan 2017 
        menjadi ajang untuk memperkenalkan potensi wisata serta budaya Takalar. Festival ini menampilkan seni tradisional, lomba perahu, dan kegiatan lingkungan.
      </p>
    `
},
  3: {
  title: "Waterboom Topejawa",
  location: "Topejawa, Takalar, Sulawesi Selatan",
  image: "https://images.unsplash.com/photo-1562088287-bde35a8be6f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  content: `
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Waterboom</h3>
    <p class="text-liver mb-6">
      Waterboom Topejawa, atau dikenal juga sebagai Takalar Beach Waterboom, diresmikan sekitar tahun 2015–2016 sebagai wujud pengembangan wisata desa di kawasan pesisir. 
      Tempat ini dirancang untuk memadukan keindahan alam seperti panorama laut, sungai buatan, dan area hijau, dengan fasilitas rekreasi air modern. 
      Sejak awal, Waterboom ini diharapkan menjadi simbol kemajuan pariwisata desa dan berhasil menarik wisatawan lokal maupun luar daerah.
    </p>
    <p class="text-liver mb-6">
      Selain menjadi destinasi favorit, Waterboom ini juga berperan dalam meningkatkan perekonomian lokal dengan membuka lapangan kerja, memfasilitasi UMKM, 
      dan memperkenalkan potensi lokal Topejawa ke khalayak luas.
    </p>

    <h3 class="text-2xl font-bold text-midnight-green mb-4">Aspek Budaya</h3>
    <p class="text-liver mb-6">
      Waterboom Topejawa tidak hanya menjadi tempat bermain air, tetapi juga ruang sosial yang mempererat hubungan antarwarga. 
      Area seperti kolam renang, gazebo, kafe, dan aula sering digunakan untuk acara keluarga, reuni, hingga kegiatan komunitas. 
      Nilai-nilai gotong royong dan kebersamaan tetap hidup di tempat ini meskipun dalam nuansa wisata modern.
    </p>
    <p class="text-liver mb-6">
      Dengan menyediakan fasilitas terjangkau namun lengkap, Waterboom Topejawa ikut melestarikan nilai kekeluargaan dan kearifan lokal di tengah aktivitas wisata modern, 
      menjadikannya bukan hanya tempat rekreasi tetapi juga pusat budaya sosial masyarakat setempat.
    </p>
  `
},
 4: {
  title: "Padang Savana Ongkoa",
  location: "Takalar, Sulawesi Selatan",
  image: "https://images.unsplash.com/photo-1587731346642-20d42c61f43a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  content: `
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Padang Savana Ongkoa</h3>
    <p class="text-liver mb-6">
      Padang Savana Ongkoa awalnya bukan kawasan wisata resmi, melainkan lahan alami yang digunakan masyarakat sekitar untuk menggembala ternak seperti kambing dan sapi. Keberadaan padang rumput ini telah menjadi bagian dari kehidupan agraris masyarakat pesisir Laikang selama bertahun-tahun. Namun, sejak populernya media sosial dan keterlibatan mahasiswa KKN dari universitas lokal, tempat ini mulai dikelola secara informal sebagai destinasi wisata berbasis komunitas. Warga setempat turut serta dalam penataan jalur trekking, titik foto, dan pelestarian lingkungan, menjadikan Ongkoa memiliki potensi besar sebagai kawasan ekowisata berkelanjutan.
    </p>
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya di Sekitar Padang Savana Ongkoa</h3>
    <p class="text-liver mb-6">
      Budaya masyarakat di kawasan ini erat kaitannya dengan alam pesisir dan pertanian. Warga mayoritas adalah petani rumput laut dan peternak. Savana dimanfaatkan sebagai padang penggembalaan yang dijaga dengan nilai-nilai kearifan lokal. Tradisi gotong royong untuk menjaga kebersihan dan upacara syukuran kecil saat panen menjadi bagian dari kehidupan mereka. Dalam budaya Bugis-Makassar yang mendominasi, savana ini juga berfungsi sebagai ruang berkumpul pemuda untuk aktivitas sosial seperti sepak bola atau lari pagi, menjadikannya bagian penting dari kehidupan komunitas desa.
    </p>
  `
},
5: {
  title: "Maudu Lompoa Cikoang",
  location: "Takalar, Sulawesi Selatan",
  image: "https://images.unsplash.com/photo-1596421544961-9c5c9de61b20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  content: `
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Maudu Lompoa Cikoang</h3>
    <p class="text-liver mb-6">
      Maudu Lompoa Cikoang berasal dari abad ke-17, saat Islam masuk ke wilayah ini melalui Syekh Yusuf Tajul Khalwati. Tradisi ini berkembang melalui keluarga Karaeng Cikoang sebagai bentuk akulturasi antara ajaran Islam dan budaya lokal Bugis-Makassar. Sejak awal, perayaan ini dimaksudkan sebagai penghormatan kepada Nabi Muhammad SAW dalam bentuk upacara besar tahunan, yang menjadi unik dan khas dibandingkan perayaan Maulid di tempat lain di Indonesia.
    </p>
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya dalam Maudu Lompoa</h3>
    <p class="text-liver mb-6">
      Upacara ini memiliki nilai spiritual, sosial, dan budaya yang tinggi. Jolloro atau perahu hias dihias dengan makanan, hasil bumi, dan simbol keislaman sebagai representasi kehidupan maritim Bugis-Makassar. Acara diiringi dengan pembacaan barzanji, tabuhan rebana, dan doa bersama. Warga juga mengenakan pakaian adat dan memainkan musik tradisional sebagai bagian dari pelestarian budaya. Maudu Lompoa memperkuat solidaritas sosial dan menjadikan Cikoang sebagai pusat spiritual dan budaya terbuka yang menggambarkan harmoni antara Islam dan tradisi lokal.
    </p>
  `
},
6: {
  title: "Taman Nasional Taka Bonerate",
  location: "Kepulauan Selayar, Sulawesi Selatan",
  image: "https://images.unsplash.com/photo-1586086081785-b5cf0b63743d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  content: `
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Taman Nasional Taka Bonerate</h3>
    <p class="text-liver mb-6">
      Taman Nasional Taka Bonerate pertama kali ditetapkan sebagai Cagar Alam Laut pada tahun 1989 dan diresmikan sebagai taman nasional pada 1992. Kawasan ini dikenal memiliki gugusan atol terbesar di Asia Tenggara dan ketiga terbesar di dunia, dengan luas ±530.765 hektare. Selain kekayaan hayati seperti penyu, hiu, ikan karang, dan moluska, Taka Bonerate penting sebagai kawasan konservasi laut. Sejak 2015, wilayah ini ditetapkan sebagai Cagar Biosfer UNESCO karena nilai ekologis dan keanekaragaman hayatinya yang tinggi.
    </p>
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya dalam Taman Nasional Taka Bonerate</h3>
    <p class="text-liver mb-6">
      Taka Bonerate dihuni oleh masyarakat Bugis dan Bajo yang memelihara budaya maritim kuat, seperti membuat joldang (jala), memasak gula merah, dan menjalankan ritual adat kelautan. Tradisi spiritual seperti Maulid Nabi, rukyah Ramadan, serta pernikahan adat khas Bajo dan Bugis masih dijaga. Festival budaya seperti Festival Cagar Biosfer Taka Bonerate juga rutin digelar, menampilkan seni lokal, lomba perahu, dan karnaval. Nilai kearifan laut dan aturan adat pelayaran memperkuat identitas masyarakat sebagai penjaga laut yang harmonis dengan alam.
    </p>
  `
},
  7: {
    title: "Pantai Sunari",
    location: "Dusun Tile-tile, Desa Patikarya, Bontosikuyu, Kepulauan Selayar",
    image: "https://images.unsplash.com/photo-1590490360182-03d88910e013?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Pantai Sunari</h3>
      <p class="text-liver mb-6">
        Pantai Sunari mulai mendapatkan perhatian sebagai objek wisata potensial sejak tahun 2019. Dulu hanya dikenal oleh masyarakat lokal, kini kawasan ini perlahan berkembang menjadi destinasi wisata berkat dukungan pemerintah dan komunitas pemuda. Lokasinya yang relatif tersembunyi memberi kesan alami, cocok bagi wisatawan yang mencari ketenangan dan pengalaman pesisir yang otentik.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya di Pantai Sunari</h3>
      <p class="text-liver mb-6">
        Pantai Sunari kerap difungsikan sebagai panggung terbuka untuk pertunjukan seni budaya tradisional, seperti tari Padendang dan musik tradisional. Komunitas lokal juga menjadikan kawasan ini sebagai ruang pelatihan seni bagi generasi muda. Kehadiran aktivitas budaya ini menambah daya tarik Sunari sebagai destinasi wisata budaya sekaligus edukatif.
      </p>
    `
  },

  8: {
    title: "Pantai Pinang",
    location: "Pesisir Timur Pulau Selayar, Kecamatan Bontosikuyu",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Pantai Pinang</h3>
      <p class="text-liver mb-6">
        Pantai Pinang mulai dikenal lebih luas sejak tahun 2012 seiring pembangunan akses jalan ke kawasan pesisir timur Selayar. Nama "Pinang" diambil dari banyaknya pohon pinang yang tumbuh di sekitar area pantai. Pemerintah daerah mulai membangun kawasan ini sebagai destinasi unggulan dengan pendekatan berbasis lingkungan.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya di Pantai Pinang</h3>
      <p class="text-liver mb-6">
        Masyarakat lokal mengembangkan ekowisata dengan mempertahankan nilai-nilai budaya pesisir, seperti gotong royong dalam membersihkan pantai dan tradisi menyambut tamu wisatawan dengan tarian lokal. Pantai ini juga sering digunakan untuk kegiatan ritual adat pelarungan laut sebagai bentuk penghormatan terhadap alam.
      </p>
    `
  },
 9: {
    title: "Puncak Pusera",
    location: "Dusun Taipadada, Desa Bonea Makmur, Bontomanai, Kepulauan Selayar",
    image: "https://images.unsplash.com/photo-1550517164-3f0f5f56bcdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Puncak Pusera</h3>
      <p class="text-liver mb-6">
        Meskipun tidak memiliki catatan sejarah tertulis yang panjang, Puncak Pusera telah lama dikenal masyarakat lokal sebagai titik tertinggi di Pulau Selayar. Popularitasnya meningkat beberapa tahun terakhir berkat promosi desa digital, komunitas pecinta alam, serta media sosial yang menampilkan keindahan panorama dari ketinggian. Kini, Pusera menjadi simbol wisata alam pegunungan di Selayar yang berkembang melalui semangat swadaya dan kolaborasi.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya di Puncak Pusera</h3>
      <p class="text-liver mb-6">
        Puncak Pusera tidak hanya menjadi tempat wisata alam, tetapi juga bagian dari budaya lokal modern. Aktivitas seperti berkemah, trekking ringan, dan fotografi alam telah menjadi cara masyarakat menjalin kedekatan dengan alam. Lokasi ini juga dijadikan bagian dari paket wisata desa digital yang dikelola bersama oleh komunitas, memperkuat nilai gotong royong dan pelestarian alam dalam ekowisata partisipatif.
      </p>
    `
  },

  10: {
    title: "Benteng Tua Bitombang",
    location: "Desa Bontobangun, Bontoharu, Kepulauan Selayar",
    image: "https://images.unsplash.com/photo-1613297640737-4a04e54b6e2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Benteng Tua Bitombang</h3>
      <p class="text-liver mb-6">
        Benteng Tua Bitombang berdiri sejak abad ke-17 sebagai bentuk perlawanan sekelompok masyarakat terhadap konversi agama dan pengaruh kerajaan luar. Mereka membangun permukiman mandiri di tebing kapur, menjadikannya simbol spiritual dan kemandirian budaya. Nama "Bitombang" berasal dari "Bi Tambang" (mengikat babi), mengacu pada ritual adat praislam. Hingga kini, kawasan ini menjadi saksi sejarah identitas masyarakat adat Selayar.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya di Benteng Tua Bitombang</h3>
      <p class="text-liver mb-6">
        Bitombang menyimpan kekayaan budaya seperti ritual pembangunan rumah adat tanpa paku, penggunaan pasak kayu dan rotan, serta praktik spiritual gabungan antara Islam dan kepercayaan lokal. Sumur Jodoh yang terkenal di sana menjadi ikon mistis yang diyakini membawa keberuntungan. Selain itu, pengunjung dapat melihat nisan kuno, rumah tinggi khas Bitombang, dan berinteraksi langsung dengan masyarakat adat yang menjaga warisan spiritual dan arsitektur tradisional.
      </p>
    `
  },
  11: {
  title: "Air Terjun Bantimurung",
  location: "Bantimurung, Bone-Bone, Kabupaten Luwu Utara, Sulawesi Selatan",
  image: "https://images.unsplash.com/photo-1556909219-ef4367934f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  content: `
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Air Terjun Bantimurung</h3>
    <p class="text-liver mb-6">
      Kawasan Air Terjun Bantimurung berkembang dari tempat pemandian alami warga menjadi ikon desa wisata unggulan. 
      Dengan dukungan Kemenparekraf, lokasi ini kini dilengkapi fasilitas modern namun tetap mempertahankan keaslian alamnya. 
      Alfred Russel Wallace bahkan menyebutnya sebagai "Kerajaan Kupu-Kupu", karena kekayaan hayatinya.
    </p>
    
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya dan Tradisi</h3>
    <p class="text-liver mb-6">
      Warga lokal memanfaatkan air terjun ini sebagai tempat silaturahmi pasca-hajatan atau momen keluarga. 
      Kegiatan seperti berendam bersama, makan bersama, dan menjaga kebersihan alam mencerminkan tradisi gotong royong dan kesadaran ekologis. 
      Tempat ini bukan hanya alam, tapi bagian dari identitas budaya masyarakat Maros.
    </p>
  `
},

12: {
  title: "Air Terjun Sarambu Alla",
  location: "Dusun Tonangka, Desa Kalotok, Kecamatan Sabbang Selatan, Kabupaten Luwu Utara, Sulawesi Selatan",
  image: "https://images.unsplash.com/photo-1611142613016-d292af1e3482?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  content: `
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Air Terjun Sarambu Alla</h3>
    <p class="text-liver mb-6">
      Meski belum terdokumentasi secara formal, Air Terjun Sarambu Alla telah lama dihormati oleh masyarakat adat Enrekang sebagai bagian dari alam sakral. 
      Dalam beberapa tahun terakhir, kawasan ini mulai diteliti dan dikembangkan secara perlahan oleh akademisi sebagai bagian dari ekowisata lestari.
    </p>
    
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya dan Tradisi</h3>
    <p class="text-liver mb-6">
      Kepercayaan lokal menyebut kawasan ini dijaga oleh roh alam. Warga yang masuk ke wilayah air terjun kerap mengucapkan doa sebagai bentuk penghormatan. 
      Nilai gotong royong dan cinta terhadap lingkungan tercermin dalam tradisi bersih-bersih jalur serta kisah lisan tentang asal-usul Sarambu Alla.
    </p>
  `
},
  13: {
    title: "Wisata Alam Sulili Baebunta",
    location: "Desa Baebunta, Kecamatan Baebunta, Kabupaten Luwu Utara, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Wisata Alam Sulili</h3>
      <p class="text-liver mb-6">
        Bermula dari inisiatif masyarakat lokal dan pemerintah desa, awalnya hanya digunakan sebagai tempat mandi warga. Tahun 2023-2024 dikembangkan dengan dana aspirasi menjadi destinasi wisata alam unggulan di Luwu Utara dengan fasilitas toilet, homestay, dan area parkir.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya di Baebunta</h3>
      <p class="text-liver mb-6">
        Masyarakat mempertahankan tradisi Bugis seperti "massolo'" (sumbangan untuk keluarga berduka) dan struktur adat Kemakolean Baebunta. Pengembangan wisata mengedepankan kearifan lokal dengan menjaga adab dan kesopanan pengunjung sesuai nilai budaya setempat.
      </p>
    `
},

14: {
    title: "Pemandian Air Panas Pincara",
    location: "Desa Pincara, Kecamatan Masamba, Kabupaten Luwu Utara, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1589394815804-9648adb3d470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Pemandian Pincara</h3>
      <p class="text-liver mb-6">
        Mulai dikembangkan tahun 2018-2019 oleh Dinas Pariwisata setelah sebelumnya hanya digunakan masyarakat lokal untuk pengobatan tradisional. Berhasil masuk nominasi ADWI 2023 setelah revitalisasi besar-besaran dengan pembangunan berbagai fasilitas modern.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya di Pincara</h3>
      <p class="text-liver mb-6">
        Mempertahankan tradisi Bugis seperti upacara adat Balole (syukur panen) dan Toke' Sampa' (penghormatan leluhur). Masyarakatnya menjunjung tinggi gotong royong dan memiliki sanggar seni yang menampilkan tari/musik tradisional Bugis untuk wisatawan.
      </p>
    `
  },
  15: {
    title: "Air Terjun Rema (Permandian Alam Tamboke)",
    location: "Desa Tamboke, Kec. Sukamaju, Kab. Luwu Utara, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Air Terjun Rema</h3>
      <p class="text-liver mb-6">
        Mulanya hanya digunakan warga untuk mandi dan mencuci, kini berkembang jadi destinasi wisata sejak 2020 berkat gotong royong masyarakat. Nama "Rema" diambil dari aliran sungai setempat, sementara "Tamboke" merujuk pada desanya. Masuk nominasi ADWI 2024 kategori ekowisata.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya di Tamboke</h3>
      <p class="text-liver mb-6">
        Masyarakatnya memegang kearifan lokal "roh penjaga sungai" yang melarang perusakan alam. Aktivitas botram (makan bersama) sering dilakukan pengunjung, mencerminkan kebersamaan khas Bugis. Setiap tahun diadakan festival kecil untuk mempromosikan budaya dan kuliner lokal.
      </p>
    `
  },
  16: {
    title: "Danau Matano",
    location: "Kec. Nuha, Kabupaten Luwu Timur, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1628155930542-2c9c3d5b9c4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Danau Matano</h3>
      <p class="text-liver mb-6">
        Terbentuk 2–4 juta tahun lalu akibat pergeseran lempeng tektonik, danau ini menjadi laboratorium alam bagi penelitian geologi dan biologi. Ditetapkan sebagai Taman Wisata Alam sejak 1979 dan masuk daftar Global Ecoregions WWF. Situs arkeologi sekitar danau mengungkap industri pandai besi kuno abad ke-8.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya & Aktivitas</h3>
      <p class="text-liver mb-6">
        Festival tahunan dengan lomba perahu dayung dan tarian kolosal 14 suku. Masyarakatnya memegang filosofi "Tuwu Mate Memoroko" (hidup-mati bersama alam). Aktivitas unik: snorkeling di air super jernih, eksplorasi gua bawah air, dan kunjungan ke desa penempa besi tradisional Molabu.
      </p>
    `
  },
  17: {
    title: "Danau Towuti",
    location: "Kec. Towuti, Kabupaten Luwu Timur, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Danau Towuti</h3>
      <p class="text-liver mb-6">
        Terbentuk 1–4 juta tahun lalu dari patahan lempeng tektonik, danau ini menjadi bagian Sistem Danau Malili yang diajukan sebagai UNESCO Global Geopark. Habitat unik bagi ikan butini dan kerang endemik Tylomelania.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya & Aktivitas</h3>
      <p class="text-liver mb-6">
        Masyarakat percaya pada mitos "Nenek Penjaga Danau" yang melestarikan etika lingkungan. Aktivitas populer: eksplorasi Pulau Loeha dengan perahu tradisional, memancing ikan opudi, dan berkemah di tepi danau sambil menikmati kuliner lokal seperti sagu olahan.
      </p>
    `
},
  18: {
    title: "Pantai Ide",
    location: "Dusun Magani, Kel. Magani, Kec. Nuha, Kab. Luwu Timur, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Pantai Ide</h3>
      <p class="text-liver mb-6">
        Awalnya area relaksasi pekerja PT Vale Indonesia, dikembangkan menjadi destinasi wisata kolaboratif antara perusahaan, pemerintah, dan masyarakat. Nama "Ide" terinspirasi dari suasana inspiratif yang ditawarkan danau purba ini.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya & Aktivitas</h3>
      <p class="text-liver mb-6">
        Simbol harmoni industri-alam dengan tradisi kerja bakti warga. Aktivitas unik: lompat dari dermaga kayu, memetik buah dengen asam, dan menikmati kuliner lokal di warung tepi danau. Setiap tahun digelar lomba renang dan dayung tradisional.
      </p>
    `
},
19: {
    title: "Permandian Air Panas & Arum Jeram",
    location: "Cendana, Burau, Kab. Luwu Timur, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1582123450787-9fd9f5c9d6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah</h3>
      <p class="text-liver mb-6">
        Mulanya digunakan masyarakat untuk terapi kulit, kini dikelola desa wisata dengan konsep ekowisata. Arum jeram mulai populer sejak 2015 sebagai atraksi pendukung.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya</h3>
      <p class="text-liver mb-6">
        Menggabungkan kearifan lokal Bugis-Makassar dalam pengelolaan alam. Aktivitas river tubing melibatkan pemandu dari warga setempat yang paham kondisi sungai dan tradisi.
      </p>
    `
},

20: {
    title: "Pantai Lemo",
    location: "Desa Mabonta, Kec. Burau, Kab. Luwu Timur, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah</h3>
      <p class="text-liver mb-6">
        Bekas pusat Kerajaan Lemo-Lemo abad ke-16 dengan peninggalan benteng dan makam raja. Pernah menjadi lokasi balap perahu tradisional "Bala-bala" yang legendaris.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya</h3>
      <p class="text-liver mb-6">
        Masyarakat nelayan Bugis-Makassar menjaga tradisi pembuatan perahu dan ritual leluhur. Spot kuliner ikan bakar dan rumput laut olahan menjadi daya tarik tambahan.
      </p>
    `
  },
  21: {
    title: "Buttu Macca",
    location: "Bamba Puang, Kec. Anggeraja, Kab. Enrekang, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1518630386542-61c3e60a115a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah</h3>
      <p class="text-liver mb-6">
        Dulunya tempat nazar warga dengan ikatan ilalang, dikembangkan sejak 2016 oleh Laskar Bambapuang menjadi wisata alam berbasis komunitas. Kini jadi ikon Enrekang dengan 15.000+ pengunjung saat liburan.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya & Aktivitas</h3>
      <p class="text-liver mb-6">
        Kental dengan filosofi Bugis "Bukit Pintar". Aktivitas: ayunan jurang, foto di spot instagramable (perahu, piano), dan trekking ke Air Terjun Laweja (45 menit). Tiket Rp5.000 + biaya wahana.
      </p>
    `
},
22: {
    title: "Air Terjun Lewaja",
    location: "Desa Lewaja, Kec. Enrekang, Kab. Enrekang, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1588392382834-a8914b63b3af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah</h3>
      <p class="text-liver mb-6">
        Dikembangkan sebagai desa wisata oleh Kemparekraf dengan revitalisasi kolam permandian, sambil menjaga kealamian air terjun. Spot favorit warga untuk acara keluarga.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya</h3>
      <p class="text-liver mb-6">
        Contoh sukses ekowisata berbasis gotong royong. Warga aktif dalam konservasi dan menyediakan kuliner khas seperti pisang epe dan jagung bakar.
      </p>
    `
},
23: {
    title: "Mendatte Park",
    location: "Mendatte, Kec. Anggeraja, Kab. Enrekang, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah</h3>
      <p class="text-liver mb-6">
        Dirintis BUMDesa Makinawa sejak 2020 untuk ekonomi kreatif warga. Kini jadi destinasi unggulan dengan panorama karst dan lembah yang disebut "negeri dongeng".
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya</h3>
      <p class="text-liver mb-6">
        Menyajikan Kopi Kalosi dan Dangke (keju kerbau khas). Aktivitas berkebun organik dan sistem koin lokal "Benggolo’" untuk dukung UMKM.
      </p>
    `
},
24: {
    title: "Dante Pine",
    location: "Tanete, Kec. Anggeraja, Kab. Enrekang, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah</h3>
      <p class="text-liver mb-6">
        Dibuka 2017 oleh pemuda lokal pimpinan Hardiono. Gabungkan konsep ekowisata & ekonomi kreatif dengan 500m flying fox dan pasar digital "Benggolo’".
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya</h3>
      <p class="text-liver mb-6">
        Sajikan kuliner khas: Dangke, Deppa Tetekan, dan Sarabba. Sistem koin lokal dukung UMKM & pelestarian kopi Arabika Kalosi Enrekang.
      </p>
    `
  },
 25: {
    title: "Bukit Cekong",
    location: "Tanete, Kec. Anggeraja, Kab. Enrekang, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah</h3>
      <p class="text-liver mb-6">
        Bekas sirkuit balap motor trail lokal yang aktif menyelenggarakan turnamen grasstrack hingga tahun 2017. Jalur balap aslinya masih bisa dilacak di antara kontur bukit.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya</h3>
      <p class="text-liver mb-6">
        Masyarakat Bugis-Makassar dan Massenrempulu memadukan tradisi petani bawang merah dengan wisata modern. Kedai kopi lokal menjadi pusat interaksi sambil menikmati kopi Arabika Kalosi khas Enrekang.
      </p>
    `
},
26: {
    title: "Pantai Pasir Putih Tonrangeng (Paputo)",
    location: "Jl. Latassakka, Kel. Lumpue, Kec. Bacukiki Barat, Parepare",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah</h3>
      <p class="text-liver mb-6">
        Hasil revitalisasi kawasan pesisir kumuh sejak 2019 oleh komunitas lokal dan Pemda. Nama "Paputo" dipopulerkan melalui esai Sahrul Syukur (2023) sebagai ikon baru wisata Parepare.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya</h3>
      <p class="text-liver mb-6">
        Pusat Festival Salo Karajae tahunan yang menampilkan seni tradisional dan lomba perahu. Gazebo warna-warni dan kios UKM mencerminkan kolaborasi masyarakat pesisir Bugis-Makassar.
      </p>
    `
},
27: {
    title: "Kebun Raya Jompie",
    location: "Jl. Industri Kecil, Kel. Bukit Harapan, Kec. Soreang, Parepare",
    image: "https://images.unsplash.com/photo-1587135991058-8816a5360a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah</h3>
      <p class="text-liver mb-6">
        Bermula dari Hutan Jompie (2009), dikembangkan menjadi kebun raya sejak 2017 melalui Perda Retribusi. Memiliki 17 blok tematik konservasi flora Wallacea.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya</h3>
      <p class="text-liver mb-6">
        Pusat edukasi tanaman obat adat Sulawesi. Workshop kompos dan pembibitan melestarikan kearifan lingkungan masyarakat Soreang.
      </p>
    `
},
28: {
    title: "Museum BJ Habibie",
    location: "Jl. Alwi Abdul Djalil Habibie No.1, Kel. Mallusetasi, Parepare",
    image: "https://images.unsplash.com/photo-1587135991058-8816a5360a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah</h3>
      <p class="text-liver mb-6">
        Rumah masa kecil Habibie yang diresmikan sebagai museum (2021). Menampilkan replika pesawat N250 Gatotkaca dan memorabilia pribadi.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya</h3>
      <p class="text-liver mb-6">
        Simbol kebanggaan lokal dengan narasi trilingual (Indonesia-Inggris-Bugis). Audiovisual interaktif menghidupkan warisan teknokrat dunia asal Parepare.
      </p>
    `
},
29: {
    title: "Tonrangeng Riverside",
    location: "Lumpue, Bacukiki Barat, Parepare",
    image: "https://images.unsplash.com/photo-1604063058114-4d9842c7383f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah</h3>
      <p class="text-liver mb-6">
        Hasil revitalisasi Sungai Karajae sejak 2018. Nama "Tonrangeng" berasal dari bahasa Bugis yang berarti "tempat yang damai".
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya</h3>
      <p class="text-liver mb-6">
        Venue utama Festival Salo Karajae dengan pertunjukan musik tradisional dan lomba perahu. Kafe kontainer menyajikan kuliner khas pesisir.
      </p>
    `
},
30: {
    title: "Pantai Lumpue",
    location: "Jl. Pinggir Laut No.18, Lumpue, Parepare",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah</h3>
      <p class="text-liver mb-6">
        Berfungsi sebagai pelabuhan nelayan sejak 1950-an. Dijuluki "Pantai Kupu-Kupu" karena barisan perahu warna-warni yang bersandar.
      </p>
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya</h3>
      <p class="text-liver mb-6">
        Ruang interaksi nelayan tradisional dengan gazebo bambu alami. Kepercayaan lokal tentang penunggu gaib laut masih dipegang masyarakat.
      </p>
    `
},
31: {
  title: "Danau Tempe",
  location: "Desa Salotengnga, Kabupaten Wajo, Sulawesi Selatan",
  image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  content: `
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Danau Tempe</h3>
    <p class="text-liver mb-6">
      Merupakan danau tektonik purba yang terbentuk sejak akhir Zaman Es (20.000-10.000 SM) akibat aktivitas lempeng Australia-Eurasia. Awalnya berfungsi sebagai muara bagi 13 sungai besar di Sulawesi Selatan, danau seluas 350 km² ini menjadi habitat penting bagi lebih dari 60 spesies ikan air tawar. Pada pertengahan abad ke-20, danau ini dijuluki "mangkuk ikan" Indonesia karena produktivitas ikannya yang tinggi.
    </p>
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya di Danau Tempe</h3>
    <p class="text-liver mb-6">
      Masyarakat Bugis menjalankan tradisi unik seperti rumah terapung (kalampang) dan festival Maccera Tappareng setiap 23 Agustus - ritual pembersihan danau dengan kurban kerbau, lomba perahu, dan tarian Bissu. Sistem sosial nelayan diatur oleh nilai-nilai Bugis: sipakatau (saling memanusiakan), sipakainge (saling mengingatkan), dan sipakalebbi (saling menghargai). Larangan menangkap ikan di malam hari dan hari Jumat menunjukkan kearifan lokal dalam menjaga ekosistem.
    </p>
  `
},

32: {
  title: "Rumah Adat Atakkae",
  location: "Kelurahan Atakkae, Kabupaten Wajo, Sulawesi Selatan",
  image: "https://images.unsplash.com/photo-1576941089067-2de3c901442a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  content: `
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Rumah Adat Atakkae</h3>
    <p class="text-liver mb-6">
      Dibangun tahun 1995 di atas lahan 1.1 hektar, kompleks ini menampilkan arsitektur tradisional Bugis dengan rumah utama Saoraja La Tenri Bali - istana dengan 101 tiang kayu ulin (berat 2 ton per tiang) sebagai simbol Kerajaan Wajo. Nama rumah ini merujuk pada Arung Matoa (raja) La Tenri Bali yang pernah berkuasa. Pada 2023, kawasan ini direvitalisasi dengan anggaran Rp5.8 miliar dari Kementerian PUPR.
    </p>
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya di Rumah Adat Atakkae</h3>
    <p class="text-liver mb-6">
      Kompleks ini menjadi pusat aktivitas budaya seperti pameran, seminar, dan perkemahan nasional. Arsitekturnya mencerminkan stratifikasi sosial Bugis melalui detail seperti timpa'laja' (jenjang atap) dan ukiran. Pengunjung dapat melihat perabotan tradisional, kain tenun, badik (senjata khas), serta alat musik Bugis. Kawasan ini juga digunakan untuk pelatihan tenun dan pertunjukan tari tradisional.
    </p>
  `
},

33: {
  title: "Gelora Permata Hijau Waetuwo",
  location: "Desa Waetuwo, Kabupaten Wajo, Sulawesi Selatan",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  content: `
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Desa Waetuwo</h3>
    <p class="text-liver mb-6">
      Berawal dari pemanfaatan mata air alami oleh warga setempat, desa ini berkembang menjadi destinasi wisata setelah masuk 300 besar Anugerah Desa Wisata Indonesia (ADWI) 2023 dan meraih Juara 1 Kategori Berkembang tahun 2023. Nama "Waetuwo" berarti "air hidup" dalam bahasa lokal, merujuk pada sumber mata air jernih yang menjadi daya tarik utama.
    </p>
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya di Waetuwo</h3>
    <p class="text-liver mb-6">
      Masyarakat Bugis Waetuwo mempertahankan tradisi gotong royong dan seni lokal seperti tari dan musik tradisional. Desa ini menawarkan produk kreatif seperti dodol, keripik pepaya, dan kerajinan dari ban bekas. Fasilitas wisata termasuk kolam renang alami, camping ground, sanggar seni, dan homestay dengan harga terjangkau (Rp200.000/malam). Spot menarik seperti jembatan bambu dan taman bunga menjadi lokasi favorit foto pre-wedding.
    </p>
  `
},

34: {
  title: "Gelora Wisata Desa Nepo",
  location: "Desa Nepo, Kabupaten Wajo, Sulawesi Selatan",
  image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  content: `
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Desa Nepo</h3>
    <p class="text-liver mb-6">
      Desa bersejarah yang pernah menjadi bagian Kerajaan Passijiangeng abad ke-16 dan dikenal sebagai "Kampung Habibie Kecil" karena BJ Habibie menghabiskan masa kecilnya di sini. Beberapa bangunan peninggalannya masih terjaga, termasuk masjid dan tempat mandi tradisional. Desa di tepi Danau Tempe ini diakui secara administratif sejak 1973.
    </p>
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya di Desa Nepo</h3>
    <p class="text-liver mb-6">
      Budaya tradisional Bugis sangat kental terasa di Desa Nepo. Kearifan lokal masih hidup dan dijaga erat oleh masyarakat, seperti tradisi gotong royong, mappalili (musyawarah sebelum musim tanam), serta mappadendang (syukuran setelah panen) yang dilakukan secara kolektif. Tradisi ini tidak hanya menjadi bentuk ritual agraris, tetapi juga mempererat hubungan sosial antarwarga. Selain itu, kuliner khas seperti Beppa Pitung Rupa atau kue tujuh macam—yang terdiri dari Onde-Onde, Jompo-Jompo, Sawella, Barongko, Beppa Oto’, Putu Pesse’, dan Bandang-Bandang—menjadi sajian istimewa dalam berbagai acara adat seperti pernikahan, aqiqah, hingga syukuran keluarga. Kuliner ini mencerminkan kekayaan budaya dan filosofi keselarasan dalam kehidupan masyarakat Bugis. Setiap tanggal 23 Agustus, Desa Nepo juga menjadi tuan rumah bagi ritual tahunan Maccera Tappare’ atau Festival Kebersihan Danau Tempe. Perayaan ini dimeriahkan dengan lomba perahu tradisional, permainan rakyat, dan pertunjukan seni seperti tarian bissu dan mappadendang, menjadikan kegiatan tersebut bukan hanya upaya pelestarian budaya, tetapi juga daya tarik pariwisata yang sarat nilai spiritual dan ekologis.
    </p>
  `
},
34: {
   title: "Saoraja La Tenri Bali - Istana Raja Wajo",
  location: "Kompleks Rumah Adat Atakkae, Kabupaten Wajo, Sulawesi Selatan",
  image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  content: `
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Desa Nepo</h3>
    <p class="text-liver mb-6">
     Desa Nepo bukan hanya dikenal sebagai lokasi wisata, tetapi juga menyimpan sejarah yang kaya. Berdasarkan catatan Naskah Lontara, desa ini dulunya bagian dari kerajaan Passijiangeng—menghubungkan wilayah Sidenreng, Suppa, dan Sawitto—pada abad ke-16, dipimpin oleh Arung Patappuloe dan kemudian Labongngo.
    Pada 1973 status administrasinya diakui sebagai desa. Selain itu, Desa Nepo dikenal sebagai “Kampung Habibie Kecil” karena BJ Habibie, Presiden Indonesia ketiga, menghabiskan masa kecilnya di sini. Beberapa bangunan peninggalan masa kecilnya, termasuk masjid dan tempat mandi tradisional, masih dijaga oleh masyarakat.
    </p>
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya di Desa Nepo</h3>
    <p class="text-liver mb-6">
      Masyarakatnya melestarikan tradisi Bugis seperti mappalili (musyawarah pra-tanam) dan mappadendang (syukuran panen). Kuliner khas Beppa Pitung Rupa (kue tujuh macam) menjadi sajian istimewa dalam acara adat. Setiap 23 Agustus, desa ini menjadi pusat festival Maccera Tappare' - ritual pembersihan Danau Tempe dengan lomba perahu dan tarian Bissu. Wisatawan dapat menikmati sunset di danau, gazebo, dan spot foto instagramable.
    </p>
  `
},
36: {
  title: "Lembah Cinta - Pusat Sejarah & Budaya Mattabulu",
  location: "Desa Mattabulu, Kecamatan Lalabata, Kabupaten Soppeng, Sulawesi Selatan",
  image: "https://images.unsplash.com/photo-1587135991058-8816a5360a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  content: `
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Desa Mattabulu</h3>
    <p class="text-liver mb-6">
      Berdasarkan catatan Naskah Lontara, desa ini dulunya bagian dari kerajaan Passijiangeng—menghubungkan wilayah Sidenreng, Suppa, dan Sawitto—pada abad ke-16, dipimpin oleh Arung Patappuloe dan kemudian Labongngo. Pada 1973 status administrasinya diakui sebagai desa. Selain itu, Desa Mattabulu dikenal sebagai "Kampung Habibie Kecil" karena BJ Habibie, Presiden Indonesia ketiga, menghabiskan masa kecilnya di sini. Beberapa bangunan peninggalan masa kecilnya, termasuk masjid dan tempat mandi tradisional, masih dijaga oleh masyarakat.
    </p>
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya & Tradisi</h3>
    <p class="text-liver mb-6">
      <strong>Ritual Pattaungeng</strong>: Dilakukan warga di sumber mata air Ompo untuk memelihara warisan leluhur Kerajaan Soppeng dan sebagai ungkapan syukur atas sumber air suci. Ritual ini diawali dengan tabuhan gendang dan gong, diikuti tarian bissu, pemotongan kerbau, serta persembahan makanan khas, termasuk nasi ketan hitam, putih, dan merah.
      <br><br>
      <strong>Mappadendang</strong>: Tradisi panen pra-Islam yang dilaksanakan sebagai bentuk syukur atas hasil panen. Prosesi ritual melibatkan kekompakan masyarakat melalui musyawarah penentuan waktu, persiapan lesung dan alu, hingga pembacaan pesan-pesan leluhur yang diwariskan secara turun-temurun.
      <br><br>
      <strong>Situs Makam Petta Bulu Matanre</strong>: Berada di puncak Desa Mattabulu, menjadi pusat upacara tahunan Pattaungeng. Diyakini sebagai peninggalan Kerajaan Bulu Matanre. Ritual ini dilakukan dalam tahapan berurutan dan dipimpin oleh Sanro Wanua (tokoh adat) beserta pemegang kunci makam.
    </p>
  `
},
37: {
  title: "Pemandian Air Panas Lejja - Warisan Budaya Soppeng",
  location: "Desa Bulue, Kecamatan Marioriawa, Kabupaten Soppeng, Sulawesi Selatan",
  image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  content: `
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Kawasan Lejja</h3>
    <p class="text-liver mb-6">
      Pemandian Air Panas Lejja merupakan kawasan wisata alam yang terbentuk secara alami akibat aktivitas vulkanik gunung berapi purba yang kini sudah tidak aktif. Menurut sejarah geologis, kawasan Lejja dulunya adalah bagian dari sistem vulkanik tua yang terbentuk jutaan tahun lalu. Sisa-sisa aktivitas vulkanik inilah yang menyebabkan munculnya sumber air panas di bawah tanah, yang kemudian naik ke permukaan dalam bentuk kolam alami dengan kandungan belerang cukup tinggi (sekitar 1,5%).
      <br><br>
      Lejja juga adalah tempat yang sejak zaman dahulu sudah dikenal masyarakat lokal sebagai tempat berendam dan pengobatan tradisional, terutama untuk menyembuhkan penyakit kulit, pegal linu, hingga rematik. Masyarakat sekitar meyakini bahwa airnya membawa manfaat kesehatan, sehingga digunakan secara turun-temurun.
    </p>
    <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya</h3>
    <p class="text-liver mb-6">
      <strong>Ritual Pra-Islam</strong>: Sejak zaman sebelum masuknya Islam, masyarakat telah menggunakan mata air panas tersebut untuk ritual syukuran berupa sesaji, terutama setelah panen raya atau peristiwa penting dalam kehidupan mereka.
      <br><br>
      <strong>Kepercayaan Magis</strong>: Situs ini adalah tempat munculnya berbagai kepercayaan magis—seperti kehadiran "makhluk gaib" penjaga air panas dan ritual nazar—yang secara turun-temurun dipelihara masyarakat, meskipun saat ini telah berubah wujud menjadi praktik simbolis seperti menggantung botol atau batu sebagai bentuk harapan atau ucapan syukur.
      <br><br>
      <strong>Sumur Jodoh</strong>: Di kawasan pemandian ini terdapat lokasi ritual "sumur jodoh," yaitu satu titik di mana para pengunjung percaya bahwa menggantung botol atau kaleng berisi air di pohon tertentu akan mendatangkan jodoh, karena dipercaya tempat tersebut sering menjadi tempat bertemunya pasangan hingga berlanjut ke pernikahan.
      <br><br>
      <strong>Integrasi Budaya & Wisata</strong>: Tradisi budaya Lejja adalah contoh nyata integrasi nilai spiritual, masyarakat, dan ekowisata. Masyarakat lokal secara aktif terlibat dalam pengelolaan objek wisata ini, membentuk rasa memiliki terhadap lingkungan dan memelihara nilai-nilai budaya klasik dengan menyelaraskannya bersama aktivitas pariwisata modern.
    </p>
  `
},
};
if (!localStorage.getItem('userRatings')) {
  localStorage.setItem('userRatings', JSON.stringify({}));
}