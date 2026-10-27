/**
 * Sumber tunggal data program — design system §8.
 * Jangan menyalin isi program ke halaman lain; baca dari berkas ini.
 *
 * Catatan konten: seluruh teks di bawah diangkat dari halaman program yang
 * sudah tayang. Field `needsValidation` menandai hal yang masih harus
 * dikonfirmasi unit sebelum publikasi (design system §9).
 */

export type Pillar = {
  /** MOVE. / LEARN. / GROW. */
  key: 'move' | 'learn' | 'grow';
  label: string;
  title: string;
  desc: string;
};

/** Blok konten mendalam per unit — dirender sebagai grid info-card. */
export type DeepDive = {
  eyebrow: string;
  title: string;
  lead?: string;
  columns: 2 | 3 | 4;
  tint?: boolean;
  items: { id?: string; title: string; desc: string; example?: string }[];
};

export type Program = {
  slug: string;
  name: string;
  /** Nama ringkas untuk navigasi, kartu, breadcrumb dan daftar footer. */
  shortName: string;
  publicName: string;
  legalEntityName: string;
  ageRange: string;
  modality: string;
  modalityShort: string;
  learningModel: string;
  tag: string;
  cardTag: string;
  cardSummary: string;
  heroTitle: string;
  summary: string;
  heroImage: string | null;
  imageAlt: string;
  imageCaption: string;
  cardImage: string | null;
  pillars: Pillar[];
  journey: { title: string; desc: string }[];
  rhythm: { time: string; title: string; desc: string; tag: string }[];
  rhythmTitle: string;
  rhythmNote: string;
  support: { title: string; desc: string }[];
  supportTitle: string;
  supportLead: string;
  deepDive: DeepDive[];
  faq: { q: string; a: string }[];
  ctaLink: string;
  needsValidation: string;
  lastReviewed: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: 'preschool-reguler',
    name: 'TK Tarbiyah Sunnah Bandung Reguler',
    shortName: 'TK Reguler',
    publicName: 'TK Tarbiyah Sunnah Bandung · Reguler',
    legalEntityName: 'TK Tarbiyah Sunnah Bandung Reguler',
    ageRange: 'Usia 3–6 tahun',
    modality: 'Onsite · Bandung',
    modalityShort: 'Onsite',
    learningModel: 'Sentra & eksplorasi bahan alam',
    tag: 'TK REGULER · ONSITE',
    cardTag: 'TK REGULER · 3–6 TAHUN',
    cardSummary:
      'Belajar melalui bermain bermakna, eksplorasi sensorik, dan pembiasaan adab bersama guru.',
    heroTitle: 'Belajar dengan bergerak, bermain, dan mengalami dunia nyata.',
    summary:
      'Pendidikan anak usia dini berbasis fitrah yang mendampingi Ananda melalui bermain bermakna, eksplorasi bahan alam, pembiasaan adab, dan lingkungan belajar hangat yang aman dari tekanan kognitif berlebihan.',
    heroImage: '/images/preschool/playground-outdoor.jpg',
    imageAlt: 'Area bermain outdoor dan motorik kasar TK Tarbiyah Sunnah Bandung',
    imageCaption: 'Area bermain luar ruang TK Reguler',
    cardImage: '/images/preschool/ruang-kelas-bermain.jpg',
    pillars: [
      {
        key: 'move',
        label: 'MOVE.',
        title: 'Bereksplorasi dengan seluruh indra',
        desc: 'Sentra bahan alam, balok dan bangun, main peran, serta motorik kasar di ruang terbuka. Anak belajar dengan menyentuh, meraba, bergerak, dan mengamati objek nyata di sekitarnya.',
      },
      {
        key: 'learn',
        label: 'LEARN.',
        title: 'Bermain sambil membangun pemahaman',
        desc: 'Mengamati, bertanya, mencoba, bercerita, dan mengenali pola melalui benda konkret: menghitung daun gugur, menakar air, memilah biji-bijian alam.',
      },
      {
        key: 'grow',
        label: 'GROW.',
        title: 'Menumbuhkan adab dan kemandirian',
        desc: "Pembiasaan doa dan dzikir, adab makan, tanggung jawab diri, bahasa, sosial-emosional, serta kesiapan belajar yang bertahap tanpa paksaan calistung instan.",
      },
    ],
    journey: [
      {
        title: 'Datang dan merasa aman',
        desc: 'Transisi hangat, salam, menata sepatu di rak, dan bersiap belajar bersama guru.',
      },
      {
        title: 'Mengalami dan mencoba',
        desc: 'Eksplorasi sentra, bermain terarah, berdialog, dan membuat karya sesuai tahapan usia.',
      },
      {
        title: 'Menguatkan kebiasaan baik',
        desc: 'Merapikan alat, kisah hikmah, refleksi sederhana, doa penutup, dan pulang dengan tenang.',
      },
    ],
    deepDive: [
      {
        eyebrow: 'Fokus perkembangan',
        title: 'Enam matra tumbuh kembang utuh',
        lead: 'Setiap aktivitas di kelas dirancang holistik untuk menstimulasi seluruh aspek potensi fitrah Ananda secara proporsional.',
        columns: 3,
        items: [
          {
            id: '01',
            title: 'Fitrah keimanan & adab',
            desc: "Mengenalkan Allah sebagai Rabb pencipta alam, membiasakan doa harian, adab makan dan minum, mencintai Nabi ﷺ, serta lantunan surat pendek Juz 'Amma tanpa paksaan.",
            example: 'Contoh: menyimak kisah teladan, dzikir sebelum bermain, adab berbagi.',
          },
          {
            id: '02',
            title: 'Kemandirian & self-care',
            desc: 'Meletakkan sepatu di rak, merapikan alat bermain, mencuci tangan mandiri, membuka wadah bekal sendiri, dan pendampingan toilet training kooperatif.',
            example: 'Contoh: membersihkan meja setelah makan, memakai kaos kaki sendiri.',
          },
          {
            id: '03',
            title: 'Bahasa & komunikasi',
            desc: 'Memperkaya kosakata deskriptif, mendengar aktif dalam lingkaran cerita, berbicara santun, serta mengenalkan bunyi huruf hijaiyah dan latin secara kontekstual.',
            example: 'Contoh: menceritakan pengalaman akhir pekan, mendengarkan dongeng hikmah.',
          },
          {
            id: '04',
            title: 'Sosio-emosional',
            desc: 'Mengenali ragam emosi diri, belajar menenangkan diri, bergantian mainan, dan berinteraksi rukun bersama teman sebaya.',
            example: 'Contoh: bermain peran bersama, belajar meminta maaf dan memaafkan.',
          },
          {
            id: '05',
            title: 'Kognitif & pra-matematika',
            desc: 'Menyelidiki sebab-akibat sederhana, klasifikasi warna dan ukuran, konsep perbandingan, serta pola spasial melalui benda konkret.',
            example: 'Contoh: menghitung daun gugur, menakar air, memilah biji-bijian alam.',
          },
          {
            id: '06',
            title: 'Fisik & motorik',
            desc: 'Motorik halus (meremas playdough alami, meronce, memegang krayon) untuk kesiapan menulis, serta motorik kasar di ruang terbuka.',
            example: 'Contoh: senam ceria pagi, balok titian, finger painting.',
          },
        ],
      },
      {
        eyebrow: 'Pengalaman kelas onsite',
        title: 'Zona sentra belajar di sekolah',
        lead: 'Ruang kelas ditata menjadi area sentra terarah yang memerdekakan eksplorasi anak secara mandiri maupun berkelompok.',
        columns: 4,
        tint: true,
        items: [
          {
            id: '01',
            title: 'Sentra bahan alam',
            desc: 'Eksplorasi pasir bersih, air, bebatuan, dedaunan, dan ranting untuk melatih sensomotorik dan kepekaan rasa.',
          },
          {
            id: '02',
            title: 'Sentra balok & bangun',
            desc: 'Menyusun balok kayu alami untuk mengasah penalaran ruang, simetri, gravitasi, dan kreativitas konstruksi.',
          },
          {
            id: '03',
            title: 'Sentra main peran',
            desc: 'Menirukan kehidupan nyata, adab bertamu, dan profesi mulia untuk memperkuat empati dan komunikasi.',
          },
          {
            id: '04',
            title: 'Sentra perpustakaan cilik',
            desc: 'Pojok literasi dengan buku bergambar sirah, sains ramah anak, dan tilawah surat pendek yang tenang.',
          },
        ],
      },
    ],
    rhythmTitle: 'Contoh ritme hari di TK Reguler',
    rhythm: [
      {
        time: '07.30 – 08.00',
        title: 'Penyambutan hangat & transisi',
        desc: 'Salam, menata sepatu di rak, adaptasi hati dari orang tua ke guru.',
        tag: 'Adab kedatangan',
      },
      {
        time: '08.00 – 08.30',
        title: "Lingkaran pagi, dzikir & Qur'an",
        desc: "Doa pagi, hafalan surat pendek Juz 'Amma, dan dialog pembuka.",
        tag: 'Fondasi ruhiyah',
      },
      {
        time: '08.30 – 09.30',
        title: 'Eksplorasi sentra & motorik alami',
        desc: 'Bermain terarah di sentra bahan alam, balok, peran, motorik kasar outdoor, atau pra-matematika.',
        tag: 'Inti belajar',
      },
      {
        time: '09.30 – 10.00',
        title: 'Snack sehat beradab & toilet mandiri',
        desc: 'Cuci tangan, doa sebelum makan, duduk tenang dengan tangan kanan, dan membuang sampah.',
        tag: 'Self-care',
      },
      {
        time: '10.00 – 10.30',
        title: 'Kisah hikmah, refleksi & kepulangan',
        desc: 'Mendengarkan kisah sirah nabi, doa penutup majelis, dan kepulangan pukul 10.30 WIB.',
        tag: 'Kepulangan',
      },
    ],
    rhythmNote:
      'Ritme di atas mengikuti keterangan yang tercantum pada situs saat ini. Validasi kembali bersama unit sebelum publikasi, termasuk keterangan snack dan jam kepulangan.',
    supportTitle: 'Sinergi dua rumah',
    supportLead:
      'Pendidikan usia dini tidak dibebankan seluruhnya kepada sekolah. Komunikasi dijaga aktif agar pembiasaan baik di kelas tersambung erat di rumah.',
    support: [
      {
        title: 'Di sekolah — peran guru',
        desc: 'Menyediakan lingkungan sentra yang aman dan terarah, mengobservasi keunikan tahap perkembangan Ananda, serta memberi umpan balik berkala kepada orang tua.',
      },
      {
        title: 'Di rumah — peran Abba & Umma',
        desc: 'Melanjutkan rutinitas tidur, makan beradab, dan doa harian; membatasi gawai dan memperbanyak dialog; menghadiri sesi parenting dan konsultasi perkembangan anak.',
      },
    ],
    faq: [
      {
        q: 'Berapa usia minimal untuk mendaftar ke TK Tarbiyah Sunnah Bandung?',
        a: 'Usia minimal penerimaan adalah 3 tahun pada awal tahun ajaran baru (kelompok Playgroup), serta 4–6 tahun untuk kelompok Kindergarten A & B.',
      },
      {
        q: 'Apakah Ananda harus sudah lulus toilet training saat mulai sekolah?',
        a: 'Tidak menjadi syarat mutlak yang kaku. Guru mendampingi proses kemandirian toilet secara kooperatif, sabar, dan penuh kasih sayang bersama orang tua di rumah.',
      },
      {
        q: 'Bagaimana jika Ananda mengalami tantangan adaptasi atau speech delay ringan?',
        a: 'Kami melakukan observasi awal secara ramah saat proses SPMB. Tim guru berdialog terbuka dengan orang tua untuk menentukan strategi stimulasi dan pendampingan yang sesuai kebutuhan Ananda.',
      },
      {
        q: "Bagaimana pendekatan pengajaran Al-Qur'an di jenjang TK?",
        a: "Al-Qur'an diperkenalkan melalui talaqqi ceria yang berulang, pengenalan huruf hijaiyah lewat sensomotorik, dan mendengarkan murottal yang tenang tanpa target hafalan yang membebani anak.",
      },
    ],
    ctaLink: '/spmb',
    needsValidation:
      'Kuota, biaya, dan ritme harian menunggu konfirmasi unit.',
    lastReviewed: '2026-10-27',
  },

  {
    slug: 'preschool-hbl',
    name: 'TK Tarbiyah Sunnah Bandung HBL',
    shortName: 'TK HBL',
    publicName: 'TK Tarbiyah Sunnah Bandung · Home-Based Learning',
    legalEntityName: 'TK Tarbiyah Sunnah Bandung HBL',
    ageRange: 'Usia 3–6 tahun',
    modality: 'Home-based · Nasional & diaspora',
    modalityShort: 'Home-based',
    learningModel: '2 hari sesi live + 3 hari aktivitas mandiri',
    tag: 'TK · HBL / DARING',
    cardTag: 'TK HBL · 3–6 TAHUN',
    cardSummary:
      'Aktivitas nyata di rumah, kurikulum terarah, dan pendampingan guru untuk keluarga belajar dari rumah.',
    heroTitle: 'Rumah menjadi ruang belajar yang hangat. Keluarga tidak berjalan sendiri.',
    summary:
      'Program pendidikan usia dini berbasis rumah untuk keluarga yang ingin mendampingi tumbuh kembang fitrah Ananda dengan kurikulum terstruktur: perpaduan 2 sesi live meeting terbimbing (Talaqqi & Tematik Diniyah) dan 3 hari eksplorasi tematik mandiri di rumah.',
    heroImage: '/images/preschool-hbl-hero.jpg',
    imageAlt:
      'Sudut belajar di rumah dengan bahan alam dan modul tematik Home-Based Learning TK Tarbiyah Sunnah Bandung',
    imageCaption: 'Sudut belajar di rumah · foto final menunggu kurasi',
    cardImage: '/images/preschool-hbl-hero.jpg',
    pillars: [
      {
        key: 'move',
        label: 'MOVE.',
        title: 'Mengalami kehidupan di rumah',
        desc: 'Aktivitas nyata dengan benda di sekitar rumah: memasak, menata rumah, bermain bahan alam (loose parts), gerak, dan eksplorasi sensorik.',
      },
      {
        key: 'learn',
        label: 'LEARN.',
        title: 'Belajar terstruktur dan fleksibel',
        desc: "Dua sesi live terarah — Talaqqi Al-Qur'an serta Tematik Diniyah — dan tiga hari aktivitas tematik mandiri dengan panduan pekanan dari guru.",
      },
      {
        key: 'grow',
        label: 'GROW.',
        title: 'Bertumbuh bersama keluarga',
        desc: 'Panduan guru, komunikasi dua arah, jurnal observasi perkembangan, dan pembiasaan adab harian yang konsisten di rumah.',
      },
    ],
    journey: [
      {
        title: 'Guru memberi arah',
        desc: 'Rencana pekanan, modul tematik, video dan audio belajar, serta contoh aktivitas sesuai usia.',
      },
      {
        title: 'Abba & Umma mendampingi',
        desc: 'Mengajak Ananda bereksplorasi 1–2 jam per hari sesuai ritme rumah, rileks dan tanpa tekanan.',
      },
      {
        title: 'Guru dan keluarga merefleksi',
        desc: 'Jurnal observasi, konsultasi, dan pertemuan evaluasi untuk membahas tindak lanjut perkembangan Ananda.',
      },
    ],
    deepDive: [
      {
        eyebrow: 'Klarifikasi pembelajaran',
        title: 'Memahami HBL secara jernih',
        lead: 'Kami membedakan secara tegas antara pembelajaran usia dini berbasis rumah yang fitrah dengan metode "sekolah online" yang melelahkan.',
        columns: 2,
        items: [
          {
            id: 'HBL BUKAN',
            title: 'Bukan sekolah online berjam-jam',
            desc: 'Bukan kelas video call sepanjang hari, bukan tumpukan lembar kerja monoton, bukan mengubah rumah menjadi kelas formal yang kaku, dan bukan orang tua dibiarkan sendirian tanpa panduan maupun evaluasi guru.',
          },
          {
            id: 'HBL ADALAH',
            title: 'Pengalaman konkret yang terarah',
            desc: "Belajar dari aktivitas keseharian dan bahan alam di rumah; dua sesi live Talaqqi Al-Qur'an dan Tematik Diniyah; panduan pekanan terstruktur dari guru; serta konsultasi dan pemantauan melalui jurnal observasi.",
          },
        ],
      },
      {
        eyebrow: 'Profil keluarga',
        title: 'Siapa yang cocok mengikuti TK HBL?',
        columns: 3,
        tint: true,
        items: [
          {
            id: '01',
            title: 'Luar jangkauan onsite',
            desc: 'Keluarga yang berdomisili di luar Bandung atau luar negeri, namun menghendaki kurikulum fitrah berkualitas berbasis Sunnah.',
          },
          {
            id: '02',
            title: 'Pilihan homeschooling',
            desc: 'Orang tua yang berkomitmen mendidik anak di rumah tetapi membutuhkan arahan kurikulum, bahan ajar, dan pendampingan ahli.',
          },
          {
            id: '03',
            title: 'Kesiapan waktu & komitmen',
            desc: 'Keluarga yang memiliki pendamping dewasa di rumah dan siap menjalin komunikasi serta evaluasi berkala bersama guru pembimbing.',
          },
        ],
      },
    ],
    rhythmTitle: 'Struktur belajar sepekan',
    rhythm: [
      {
        time: 'Sesi live 1',
        title: "Talaqqi Al-Qur'an",
        desc: 'Tahsin dan setoran hafalan interaktif bersama guru pembimbing.',
        tag: 'Live meeting',
      },
      {
        time: 'Sesi live 2',
        title: 'Tematik Diniyah',
        desc: 'Aqidah, adab, hadits, ibadah praktis, tarbiyah jinsiah, dan keteladanan salaf.',
        tag: 'Live meeting',
      },
      {
        time: '3 hari',
        title: 'Aktivitas tematik mandiri di rumah',
        desc: 'Eksplorasi konkret mengikuti modul dan panduan pekanan, didampingi orang dewasa di rumah.',
        tag: 'Mandiri terarah',
      },
    ],
    rhythmNote:
      'Model 2 hari live + 3 hari mandiri mengikuti deskripsi kurikulum yang tercantum pada situs saat ini. Finalkan kembali bersama unit HBL sebelum publikasi.',
    supportTitle: 'Fasilitas dan dukungan pembelajaran',
    supportLead:
      'Keluarga tidak dilepas berjalan sendirian. Sekolah membekali orang tua dengan sistem pendukung agar proses belajar di rumah berjalan nyaman, terstruktur, dan selaras dengan fitrah anak.',
    support: [
      {
        title: 'Modul & panduan pekanan',
        desc: 'Modul tematik dengan visual menarik sesuai tahap perkembangan, disertai panduan menyusun jadwal belajar dan target capaian mingguan.',
      },
      {
        title: 'Video & audio belajar',
        desc: "Video pembelajaran tematik dan audio hafalan/talaqqi Al-Qur'an untuk mendukung pembelajaran mandiri Ananda.",
      },
      {
        title: 'Bimbingan & konsultasi',
        desc: 'Konsultasi langsung dengan guru untuk membantu orang tua menghadapi kesulitan pembelajaran maupun pengasuhan.',
      },
      {
        title: 'Seminar parenting',
        desc: 'Seminar rutin seputar pendidikan anak untuk meningkatkan wawasan orang tua dalam pengasuhan berbasis fitrah.',
      },
      {
        title: 'Evaluasi & asesmen',
        desc: 'Evaluasi menyeluruh oleh pengajar bersama orang tua untuk menilai perkembangan kognitif, emosional, dan spiritual anak.',
      },
      {
        title: 'Optimalisasi STTPA',
        desc: 'Program dirancang mengacu pada Standar Tingkat Pencapaian Perkembangan Anak agar capaian tumbuh kembang tepat usia.',
      },
    ],
    faq: [
      {
        q: 'Berapa kali sesi live meeting dalam sepekan?',
        a: "Terdapat 2 sesi live meeting interaktif: 1 hari khusus Talaqqi Al-Qur'an (tahsin & setoran hafalan) dan 1 hari Tematik Diniyah. Tiga hari lainnya merupakan pembelajaran tematik mandiri berbasis aktivitas konkret di rumah.",
      },
      {
        q: 'Bagaimana jika Abba & Umma sibuk atau bekerja?',
        a: 'Program HBL mensyaratkan pendamping dewasa yang konsisten — ibu, ayah, atau pengasuh terpercaya — yang dapat meluangkan 1–2 jam per hari untuk mendampingi aktivitas modul secara rileks.',
      },
      {
        q: 'Bagaimana sosialisasi anak jika belajar dari rumah?',
        a: 'Anak bersosialisasi secara nyata di lingkungan terdekat (keluarga besar, tetangga, masjid) dan tetap terhubung dengan teman sekelasnya melalui sesi sapaan virtual berkala serta temu komunitas ramah anak.',
      },
      {
        q: 'Apakah lulusan TK HBL bisa melanjutkan ke SD Tarbiyah Sunnah Bandung atau SD lain?',
        a: 'Bisa. Portofolio dan laporan observasi perkembangan HBL dirancang komprehensif untuk memastikan kematangan fondasi adab, emosi, motorik, dan kesiapan kognitif anak memasuki jenjang sekolah dasar.',
      },
    ],
    ctaLink: '/spmb',
    needsValidation:
      'Jadwal dan format sesi live HBL mengikuti versi kurikulum yang berlaku; perlu konfirmasi unit HBL. Foto kegiatan rumah masih memakai aset lama dan butuh dokumentasi berizin.',
    lastReviewed: '2026-10-27',
  },

  {
    slug: 'elementary',
    name: 'SD Tarbiyah Sunnah Bandung',
    shortName: 'SD Tarbiyah Sunnah Bandung',
    publicName: 'SD Tarbiyah Sunnah Bandung',
    legalEntityName: 'SD Tarbiyah Sunnah Bandung',
    ageRange: 'Usia 6–12 tahun',
    modality: 'Onsite · Bandung',
    modalityShort: 'Onsite',
    learningModel: 'Pembelajaran mendalam & proyek terarah',
    tag: 'SD · ONSITE',
    cardTag: 'SD · 6–12 TAHUN',
    cardSummary:
      "Belajar mendalam melalui Al-Qur'an, literasi, sains, dialog majelis, dan praktik nyata.",
    heroTitle: 'Bertanya lebih dalam. Memahami lebih baik. Berkarya dengan adab.',
    summary:
      "Pendidikan dasar Islam yang mengembangkan kecakapan bahasa, kemandirian belajar, nalar kritis, dan keteguhan karakter rabbani di atas fondasi Al-Qur'an dan As-Sunnah sesuai pemahaman Salafus Shalih.",
    heroImage: '/images/elementary-kelas-1.jpg',
    imageAlt: 'Suasana ruang belajar interaktif di SD Tarbiyah Sunnah Bandung',
    imageCaption: 'Ruang kelas SD Tarbiyah Sunnah Bandung',
    cardImage: '/images/elementary-halaqah.jpg',
    pillars: [
      {
        key: 'move',
        label: 'MOVE.',
        title: 'Menjelajah persoalan nyata',
        desc: 'Observasi, praktik, eksperimen lapangan, dan proyek terpadu yang menghubungkan konsep dengan ayat kauniyah serta kehidupan sehari-hari.',
      },
      {
        key: 'learn',
        label: 'LEARN.',
        title: 'Menalar dan memahami konsep',
        desc: "Tahsin & tahfidz Al-Qur'an, literasi empat bahasa, numerasi bernalar, sains Islami, dan dialog majelis yang hangat tanpa hafalan kosong.",
      },
      {
        key: 'grow',
        label: 'GROW.',
        title: 'Membangun karakter Rabbani',
        desc: 'Tauhid, adab penuntut ilmu, kepemimpinan diri, tanggung jawab moral, daya juang, life skills, dan kesiapan menuju jenjang berikutnya.',
      },
    ],
    journey: [
      {
        title: 'Bertanya dan mengamati',
        desc: 'Mengenali persoalan, mengumpulkan informasi dan bukti, serta membedakan fakta dari dugaan.',
      },
      {
        title: 'Menguji gagasan',
        desc: 'Berdiskusi dalam majelis, mengolah informasi, mencoba solusi, dan menjelaskan alasan dengan hujjah.',
      },
      {
        title: 'Mengamalkan dan merefleksi',
        desc: 'Menampilkan karya dan portofolio, mengambil pelajaran, lalu memperbaiki proses belajarnya.',
      },
    ],
    deepDive: [
      {
        eyebrow: 'Fokus keunggulan',
        title: 'Lima pilar pendidikan jenjang SD',
        lead: "Mengokohkan pondasi ruhiyah penuntut ilmu Al-Qur'an bersanding dengan pengembangan sains, karakter kepemimpinan, dan kemandirian hidup nyata.",
        columns: 3,
        items: [
          {
            id: '01',
            title: "Al-Qur'an — tahsin & hafalan",
            desc: 'Program intensif perbaikan bacaan dan hafalan sesuai kemampuan individual murid, dipandu guru berpengalaman melalui halaqah dan talaqqi.',
          },
          {
            id: '02',
            title: 'Character & life skills',
            desc: 'Melatih kemandirian, tanggung jawab atas diri sendiri, serta keterampilan praktis sehari-hari yang membentuk pribadi kokoh dan beradab.',
          },
          {
            id: '03',
            title: 'Kecakapan abad 21 & sains Islami',
            desc: 'Mengasah nalar kritis, kreativitas, dan kolaborasi, dipadukan dengan eksplorasi sains berbasis tadabbur ayat-ayat kauniyah.',
          },
          {
            id: '04',
            title: 'Leadership & fitrah kemandirian',
            desc: "Pembentukan karakter dan kepemimpinan diri sesuai fitrah: jiwa kepemimpinan (qawwamah) bagi ikhwan, serta rasa malu yang mulia (haya') dan kecakapan mengelola kebaikan bagi akhwat.",
          },
          {
            id: '05',
            title: 'Persiapan jenjang selanjutnya',
            desc: 'Kesiapan akademik, kematangan emosi, dan keteguhan aqidah untuk transisi menuju pendidikan menengah atau pondok pesantren.',
          },
        ],
      },
      {
        eyebrow: 'Kecerdasan bahasa & literasi',
        title: 'Bahasa sebagai gerbang pemahaman',
        lead: 'Sebelum anak berpikir kritis dan menulis karya bermutu, mereka melalui tangga bahasa yang kokoh — dari mendengar secara beradab hingga berani menyampaikan gagasan.',
        columns: 4,
        tint: true,
        items: [
          {
            id: 'BAHASA INDONESIA',
            title: 'Literasi pokok',
            desc: 'Tata bahasa baku, apresiasi sastra bermoral, dan kemampuan menulis naratif ilmiah.',
          },
          {
            id: 'BAHASA ARAB',
            title: "Bahasa Qur'ani",
            desc: "Pengenalan kosakata Al-Qur'an, nahwu-sharaf aplikatif, dan percakapan tematik harian.",
          },
          {
            id: 'BAHASA INGGRIS',
            title: 'Komunikasi global',
            desc: 'Keterampilan membaca teks sains, menyimak instruksi, dan presentasi lisan terarah.',
          },
          {
            id: 'BAHASA SUNDA',
            title: 'Kearifan lokal',
            desc: 'Undak usuk basa Sunda yang sarat adab kesopanan, tata krama, dan budaya luhur daerah.',
          },
        ],
      },
      {
        eyebrow: 'Paradigma berpikir',
        title: 'Critical thinking berbasis adab & bukti',
        lead: 'Kemampuan menggunakan informasi secara cermat, membedakan fakta dan dugaan, mencari bukti (hujjah), menemukan sebab-akibat, serta mengambil kesimpulan secara bertanggung jawab.',
        columns: 3,
        items: [
          {
            id: '01',
            title: 'Berkesadaran',
            desc: 'Anak memahami mengapa suatu ilmu dipelajari dan apa manfaatnya bagi dirinya, sesama, dan agama. Tidak ada hafalan kosong tanpa makna.',
          },
          {
            id: '02',
            title: 'Bermakna',
            desc: 'Setiap konsep matematika, sains, dan bahasa dihubungkan langsung dengan fenomena alam ciptaan Allah dan kehidupan nyata anak.',
          },
          {
            id: '03',
            title: 'Menggembirakan',
            desc: 'Pembelajaran mengalir dalam dialog majelis yang hangat dan eksperimen lapangan, tanpa intimidasi sistem ranking.',
          },
        ],
      },
    ],
    rhythmTitle: 'Keseharian murid di SD Tarbiyah Sunnah Bandung',
    rhythm: [
      {
        time: '07.30 – 08.00',
        title: 'Pengkondisian, dzikir pagi & shalat Dhuha',
        desc: 'Kedatangan murid beradab, penataan diri, dzikir pagi, shalat Dhuha, dan pengkondisian hati menyambut ilmu.',
        tag: 'Pembuka & Dhuha',
      },
      {
        time: '08.00 – 09.10',
        title: "Tahsin & tahfidz Al-Qur'an",
        desc: "Halaqah Al-Qur'an intensif dalam kelompok kecil dengan bimbingan tajwid dan setoran hafalan.",
        tag: "Al-Qur'an",
      },
      {
        time: '09.10 – 09.40',
        title: 'Snack sehat & istirahat pagi',
        desc: 'Kudapan bergizi, mempraktikkan adab makan dan minum, serta menyegarkan fisik.',
        tag: 'Istirahat pagi',
      },
      {
        time: '09.40 – 12.00',
        title: 'Pembelajaran sesuai jadwal kelas',
        desc: 'Bahasa, matematika bernalar, sains Islami, karakter & life skills.',
        tag: 'Akademik',
      },
      {
        time: '12.00 – 13.00',
        title: 'Istirahat siang, makan siang & shalat Dzuhur',
        desc: 'Shalat Dzuhur berjamaah, makan siang bersama secara beradab, dan istirahat siang.',
        tag: 'Ibadah & makan',
      },
      {
        time: '14.10 / 14.45',
        title: 'Kepulangan berjenjang sesuai fase',
        desc: 'Fase A (kelas 1–2) pulang 14.10 WIB. Fase B & C (kelas 3–6) melanjutkan pendalaman proyek atau riset hingga 14.45 WIB.',
        tag: 'Kepulangan',
      },
    ],
    rhythmNote:
      'Jadwal mengikuti keterangan pada situs saat ini. Sebutan jalur pendidikan dan status kesetaraan wajib ditinjau sesuai dokumen legal terkini sebelum publikasi.',
    supportTitle: 'Asesmen autentik',
    supportLead:
      'Capaian anak tidak direduksi menjadi selembar angka ujian. Asesmen ditujukan untuk memahami keunikan proses belajar Ananda dan memandu perbaikan yang berkelanjutan.',
    support: [
      {
        title: 'Observasi karakter & adab',
        desc: 'Pencatatan konsistensi shalat, kejujuran, adab berbicara, kepedulian terhadap teman, dan kemandirian menjaga barang pribadi.',
      },
      {
        title: 'Portofolio karya & riset',
        desc: 'Kumpulan proyek ilmiah, karangan cerita, hasil uji sains, dan catatan refleksi murid sepanjang semester.',
      },
      {
        title: 'Ujian pemahaman konseptual',
        desc: 'Tanya jawab lisan dan pemecahan masalah yang menguji nalar mendalam, bukan menghafal pola jawaban.',
      },
      {
        title: 'Laporan naratif deskriptif',
        desc: 'Umpan balik tertulis yang memetakan kekuatan, area tantangan, dan rekomendasi stimulasi di rumah.',
      },
    ],
    faq: [
      {
        q: "Berapa target hafalan Al-Qur'an murid selama di jenjang SD?",
        a: 'Target hafalan berjenjang dirancang realistis (2–5 juz selama 6 tahun) dengan memprioritaskan kesempurnaan makhraj huruf, hukum tajwid, pemahaman makna surat, serta pembiasaan shalat dengan bacaan yang mutqin.',
      },
      {
        q: 'Bagaimana kebijakan pekerjaan rumah (PR) di SD Tarbiyah Sunnah Bandung?',
        a: "Kami membatasi PR akademis yang memberatkan. Waktu di rumah diprioritaskan untuk penguatan hafalan Qur'an, interaksi hangat bersama orang tua, membantu pekerjaan rumah tangga, dan istirahat yang cukup.",
      },
      {
        q: 'Apakah menerima murid pindahan dari sekolah lain?',
        a: 'Penerimaan murid pindahan dibuka berkala berdasarkan ketersediaan kuota kelas, melalui asesmen kesiapan belajar serta keselarasan visi pendidikan bersama orang tua.',
      },
      {
        q: 'Bagaimana kesiapan lulusan SD Tarbiyah Sunnah Bandung ke jenjang berikutnya?',
        a: "Lulusan dibekali kemandirian adab, kecakapan bahasa (Arab, Inggris, Indonesia), bacaan Al-Qur'an yang mutqin, dan daya pikir kritis untuk melanjutkan ke pondok pesantren, KMI, maupun SMP unggulan.",
      },
    ],
    ctaLink: '/spmb',
    needsValidation:
      'Nomenklatur SD Tarbiyah Sunnah Bandung serta dokumen izin operasional satuan pendidikan perlu dipastikan mutakhir sebelum publikasi.',
    lastReviewed: '2026-10-27',
  },
];

export const getProgram = (slug: string) => PROGRAMS.find((p) => p.slug === slug);

/** Warna aksen per pilar untuk teks di latar terang. */
export const PILLAR_INK: Record<Pillar['key'], string> = {
  move: 'var(--tsls-move-ink)',
  learn: 'var(--tsls-learn-ink)',
  grow: 'var(--tsls-grow-ink)',
};
