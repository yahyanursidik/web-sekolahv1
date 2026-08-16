# SPMB & TSLS Hub

## Route

`/spmb`

## Tujuan

Halaman SPMB menjelaskan proses terlebih dahulu sebelum orang tua masuk ke sistem.

Website utama:
- informasi;
- program;
- syarat;
- proses;
- FAQ.

TSLS Hub:
- membuat akun;
- mengisi formulir;
- upload dokumen;
- memantau status.

---

# Hero

H1:
> **Penerimaan Murid Baru TSLS**

Sub:
> Pelajari program dan tahapan pendaftaran terlebih dahulu. Seluruh proses formulir dan pemantauan status dilakukan melalui TSLS Hub.

CTA:
- Mulai Pendaftaran
- Sudah Punya Akun? Masuk TSLS Hub

---

# Program Selector

Tampilkan tiga pilihan:

- Preschool
- Preschool HBL
- Elementary School

Masing-masing:
- ringkasan;
- usia/kelas jika sudah final;
- lokasi/model;
- CTA detail program.

Jangan mengarang usia atau kelas jika belum dimasukkan dalam data project.

---

# SPMB Flow

## Diagram utama

```text
01
PILIH PROGRAM
Kenali Preschool, HBL, atau Elementary
        ↓
02
BUAT AKUN
Buat akun di hub.tslabschool.sch.id
        ↓
03
ISI FORMULIR
Lengkapi data calon murid dan orang tua
        ↓
04
UNGGAH DOKUMEN
Unggah dokumen yang dipersyaratkan
        ↓
05
PANTAU STATUS
Lihat perkembangan proses di akun TSLS Hub
        ↓
06
TUNGGU INFORMASI
Tim TSLS menyampaikan informasi melalui
email atau WhatsApp
        ↓
07
TAHAP LANJUTAN
Ikuti proses berikutnya sesuai program
```

## Wording penting

Gunakan:

> Setelah data dan dokumen dilengkapi, orang tua dapat memantau status proses pendaftaran melalui TSLS Hub. Informasi lanjutan akan disampaikan oleh tim TSLS melalui email atau WhatsApp.

Jangan menjanjikan waktu respon tertentu jika belum ada SLA resmi.

---

# Documents

Buat section:

> **Siapkan Dokumen Sebelum Memulai**

Isi list harus diambil dari data aktual sekolah.

Jika data belum tersedia, tampilkan placeholder developer:
`TODO: replace with confirmed SPMB document requirements`

Jangan AI mengarang daftar dokumen legal.

---

# Status

Berikan contoh status UI tanpa mengunci nama status internal:

```text
AKUN DIBUAT
→ FORMULIR BELUM LENGKAP
→ DOKUMEN TERKIRIM
→ SEDANG DITINJAU
→ MENUNGGU TAHAP BERIKUTNYA
```

Status final harus mengikuti implementasi TSLS Hub existing.

---

# Diagram UX

Desktop:
- vertical timeline di tengah;
- nomor besar;
- copy di sisi kanan;
- subtle progress line.

Mobile:
- single vertical line kiri;
- nomor;
- content.

Animation:
- progress line draw saat scroll;
- step opacity 0.45 → 1;
- no bouncing;
- no infinite loop.

---

# CTA

Primary:
`Mulai Pendaftaran di TSLS Hub`

URL:
`https://hub.tslabschool.sch.id`

Secondary:
`Masuk / Cek Status`

URL:
`https://hub.tslabschool.sch.id`

---

# FAQ SPMB

Minimal:

1. Di mana formulir pendaftaran diisi?
2. Apakah harus membuat akun?
3. Bagaimana mengunggah dokumen?
4. Di mana status pendaftaran dapat dilihat?
5. Bagaimana sekolah menghubungi orang tua?
6. Saya belum yakin memilih program, apa yang harus dilakukan?
7. Bagaimana jika saya lupa password akun Hub?

Jawaban terkait mekanisme teknis Hub harus mengikuti sistem existing.

---

# Security / Trust Copy

Tambahkan copy ringkas:

> Data pendaftaran dikelola melalui TSLS Hub. Pastikan orang tua menggunakan alamat email dan nomor WhatsApp yang aktif agar informasi proses pendaftaran dapat diterima.

Jangan menyebut enkripsi, keamanan tingkat tinggi, compliance, atau klaim teknis lainnya kecuali sudah diverifikasi.
