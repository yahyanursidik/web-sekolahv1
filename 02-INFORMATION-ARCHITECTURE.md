# Information Architecture — TSLS Website

## 1. Sitemap

```text
/
├── /tentang
│   ├── #visi-misi
│   ├── #filosofi-pendidikan
│   ├── #merawat-fitrah
│   └── #lab-school
│
├── /program
│   ├── /preschool
│   ├── /preschool-hbl
│   └── /elementary
│
├── /pendidikan
│   ├── #fondasi
│   ├── #al-quran-sunnah
│   ├── #adab-karakter
│   ├── #perkembangan-anak
│   ├── #pembelajaran-mendalam
│   ├── #critical-thinking
│   └── #kemitraan-orang-tua
│
├── /kehidupan-sekolah
│   ├── #lingkungan
│   ├── #fasilitas
│   └── #galeri
│
├── /spmb
├── /faq
├── /kontak
└── external:
    └── https://hub.tslabschool.sch.id
```

Tidak ada route `artikel`, `blog`, atau `insight` pada scope redesign.

---

# 2. Navbar

Desktop:

```text
LOGO TSLS

Tentang
Program ▾
Pendidikan
Kehidupan Sekolah
SPMB
Kontak

[Masuk TSLS Hub]
```

Dropdown **Program**:

- Preschool
- Preschool HBL
- Elementary School

`Masuk TSLS Hub` adalah secondary CTA.

Pada periode penerimaan siswa baru, boleh tambahkan CTA primer:

`Daftar SPMB`

---

# 3. Mobile Navigation

Gunakan navigation drawer sederhana.

Urutan:

1. Tentang TSLS
2. Preschool
3. Preschool HBL
4. Elementary School
5. Pendidikan di TSLS
6. Kehidupan Sekolah
7. SPMB
8. FAQ
9. Kontak
10. Masuk TSLS Hub

Tidak perlu mega-menu mobile.

---

# 4. Footer

Empat kelompok:

## TSLS
- Tentang
- Visi & Misi
- Filosofi Pendidikan

## Program
- Preschool
- Preschool HBL
- Elementary

## Informasi
- Pendidikan di TSLS
- Kehidupan Sekolah
- SPMB
- FAQ
- Kontak

## Akses
- TSLS Hub
- WhatsApp
- Instagram
- Maps

Footer jangan dibuat terlalu tinggi atau berisi navigasi berulang yang tidak perlu.

---

# 5. User Journey

## Calon orang tua Preschool

```text
Homepage
→ Program Preschool
→ Filosofi & perkembangan
→ Kegiatan / lingkungan
→ FAQ
→ SPMB
→ TSLS Hub
```

## Calon orang tua HBL

```text
Homepage
→ Preschool HBL
→ Cara kerja HBL
→ Peran orang tua
→ Apa yang diterima keluarga
→ FAQ HBL
→ SPMB
→ TSLS Hub
```

## Calon orang tua Elementary

```text
Homepage
→ Elementary
→ 6 arah perkembangan
→ Pembelajaran mendalam
→ Fondasi Qur'an & Sunnah
→ Lingkungan
→ SPMB
→ TSLS Hub
```

---

# 6. Route Rules

- Semua internal route gunakan lowercase dan kebab-case.
- Gunakan URL sederhana.
- Jangan membuat route berdasarkan jargon internal sekolah.
- Redirect route lama jika ada perubahan route penting.
- Hindari nested route terlalu dalam.
- Anchor section harus stabil agar bisa digunakan dari navbar/footer.

---

# 7. Information Priority

Urutan prioritas pada homepage:

```text
Brand promise
↓
Philosophy
↓
Programs
↓
Foundation
↓
Child development
↓
How learning works
↓
Parent partnership
↓
School environment
↓
SPMB
↓
FAQ / Contact
```

Jangan meletakkan galeri sebelum pengunjung memahami apa yang membuat TSLS berbeda.
