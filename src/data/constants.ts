export const SITE = {
  name: 'Sekolah Tarbiyah Sunnah Bandung',
  shortName: 'STS Bandung',
  url: 'https://tslabschool.sch.id',
  campaign: 'MOVE. LEARN. GROW.',
  tagline: 'Merawat Fitrah, Membangun Generasi Rabbani.',
  description:
    "Sekolah Islam yang mendampingi anak bertumbuh sesuai tahap perkembangannya, menjaga fitrah, membangun iman dan adab di atas fondasi Al-Qur'an dan As-Sunnah sesuai pemahaman Salafus Shalih.",
  city: 'Bandung, Jawa Barat',
  address: 'Jl. Setrasari VI No.3A, Sukarasa, Kec. Sukasari, Kota Bandung, Jawa Barat 40152',
  phone: '+62 851-7339-6002',
  phoneRaw: '6285173396002',
};

const waMessage =
  "Assalamu'alaikum, saya ingin berkonsultasi tentang program dan SPMB Sekolah Tarbiyah Sunnah Bandung.";

export const EXTERNAL_LINKS = {
  /** Beranda TSLS Hub — titik masuk pendaftaran publik. */
  hub: 'https://hub.tslabschool.sch.id',
  /** Portal wali murid aktif — dibedakan dari pendaftaran publik (design system §3, jalur D). */
  portal: 'https://hub.tslabschool.sch.id/portal',
  spmb: 'https://hub.tslabschool.sch.id',
  whatsapp: `https://wa.me/${SITE.phoneRaw}`,
  consultation: `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(waMessage)}`,
  maps: 'https://www.google.com/maps/search/?api=1&query=Jl.+Setrasari+VI+No.3A+Sukarasa+Bandung',
};

/** Tahun ajaran SPMB — satu titik ubah untuk seluruh situs. */
export const SPMB = {
  academicYear: '2027/2028',
  label: 'SPMB 2027/2028',
};

/** Navigasi utama — sesuai sitemap design system §2. */
export const PRIMARY_NAV = [
  { href: '/', label: 'Beranda' },
  { href: '/pendekatan', label: 'Cara Belajar' },
  { href: '/cerita-belajar', label: 'Kehidupan Sekolah' },
  { href: '/tentang', label: 'Tentang' },
];

export const UTILITY_NAV = [
  { href: '/faq', label: 'FAQ' },
  { href: '/kontak', label: 'Kontak' },
];
