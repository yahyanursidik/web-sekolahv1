export const SITE = {
  name: 'Tarbiyah Sunnah Lab School',
  shortName: 'TSLS',
  url: 'https://tslabschool.sch.id',
  tagline: 'Merawat Fitrah, Membangun Generasi Rabbani.',
  description: 'Sekolah Islam yang mendampingi anak bertumbuh sesuai tahap perkembangannya, menjaga fitrah, membangun iman dan adab di atas fondasi Al-Qur\'an dan As-Sunnah.',
};

export const EXTERNAL_LINKS = {
  hub: 'https://hub.tslabschool.sch.id',
  spmb: 'https://hub.tslabschool.sch.id/spmb',
  whatsapp: 'https://wa.me/6281234567890',
};

export const NAV_LINKS = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang TSLS', href: '/tentang' },
  {
    label: 'Program',
    href: '#',
    children: [
      { label: 'Preschool', href: '/preschool', desc: 'Holistik Berbasis Fitrah' },
      { label: 'Preschool HBL', href: '/preschool-hbl', desc: 'Home-Based Learning Terarah' },
      { label: 'Elementary (PKBM)', href: '/elementary', desc: 'Pendidikan Dasar Islam Utuh (Setara SD)' },
    ],
  },
  { label: 'Pendidikan', href: '/pendidikan' },
  { label: 'Kehidupan Sekolah', href: '/kehidupan-sekolah' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontak', href: '/kontak' },
];
