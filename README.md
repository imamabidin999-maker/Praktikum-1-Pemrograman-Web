# Penjelasan Kode

**HTML**
1. Struktur Dokumen (<head>)
<!DOCTYPE html>: Memberitahu browser bahwa ini adalah dokumen HTML5 versi terbaru.
<html lang="id">: Elemen utama yang membungkus semua konten dan menetapkan Bahasa Indonesia sebagai bahasa utama.
<meta charset="UTF-8">: Memastikan semua karakter teks (termasuk simbol) bisa tampil dengan benar.
<meta name="viewport">: Pengaturan agar website tampilannya pas dan tidak berantakan saat dibuka di HP (responsif).
<link rel="stylesheet" href="style.css">: Menghubungkan file HTML ini dengan file CSS agar website punya warna dan desain.

2. Wadah Utama (<header>)
<div class="container">: kotak pembungkus utama agar konten website berada di tengah dan tidak melebar memenuhi layar.
<img src="Banner1.jpg">: Menampilkan gambar utama/banner untuk memperkuat tema pertanian.
<h1> & <p>: Judul utama dan deskripsi singkat tentang apa itu sistem SIMPENAN.
<hr>: Garis horizontal sederhana untuk memisahkan bagian header dengan konten di bawahnya agar lebih rapi.

3. Daftar Layanan (<section class="info-section">)
<ul> (Unordered List): Digunakan untuk membuat daftar poin-poin tanpa urutan angka.
<li> (List Item): Isi dari masing-masing poin layanan yang ditawarkan oleh SIMPENAN.
  
4. Tabel Penyakit (<section class="table-section">)
<table>: Struktur utama untuk membuat tabel.
<thead>: Bagian kepala tabel yang berisi judul kolom seperti "No", "Nama Penyakit", dan "Gejala".
<tbody>: Bagian badan tabel yang berisi baris-baris data penyakit tanaman.
<tr> (Table Row): Membuat baris baru di dalam tabel.
<th> (Table Data): Mengisi sel data di dalam baris tersebut.

5. Form Buku Tamu (<section class="form-section">)
<div class="card">: Kotak kartu untuk memisahkan area form agar terlihat menonjol.
<form id="guestForm">: Wadah untuk mengumpulkan input dari pengguna.
<input type="text">: Kotak kosong tempat pengunjung mengetikkan nama mereka.
<button type="submit">: Tombol untuk memicu aksi pengiriman data.

6. Penghubung JavaScript (<script>)
<script src="script.js"></script>: Berfungsi untuk memanggil file logika JavaScript.


**CSS**
1. Import Font & Pengaturan Dasar (body)
@import url(...): Mengambil jenis huruf Poppins dari Google Fonts.
body:
  font-family: Menerapkan font Poppins ke seluruh teks.
  background-color: #00ffaa: Memberikan warna latar belakang hijau cerah.
  margin & padding: Mengatur jarak agar konten tidak menempel ke pinggir layar.

2. Layout Kontainer (.container)
max-width: 900px: Membatasi lebar website agar tidak terlalu melar di monitor yang sangat besar.
margin: 40px auto: Membuat kotak website otomatis berada tepat di tengah layar.
border-radius: 20px: Membuat sudut kotak menjadi bulat/tumpul.
box-shadow: Memberikan bayangan halus di bawah kotak agar website terlihat memiliki dimensi.

4. Gambar Utama & Header
header { text-align: center }: Memastikan judul dan banner berada di posisi tengah.
.main-image:
  height: 350px: Menentukan tinggi gambar agar seragam.
  object-fit: cover: Ini fitur penting agar gambar yang terpasang tidak terlihat aneh meski ukurannya tidak pas.
  border-radius: 15px: Menyelaraskan sudut gambar dengan sudut kontainer.

4. Tabel Data (table, th, td)
border-collapse: collapse: Menghilangkan jarak antar garis tabel.
th (Table Header): Memberikan warna hijau gelap dan teks putih agar judul kolom menonjol.
tbody tr:hover: Memberikan efek interaktif. Saat kursor diarahkan ke baris tabel, warnanya akan berubah sedikit.

5. Formulir & Input
.card:
input[type="text"]:
  width: 100%: Membuat kotak input memenuhi lebar kartu.
  box-sizing: border-box: Memastikan padding di dalam kotak input tidak merusak ukuran lebar yang sudah ditentukan.

6. Tombol & Animasi (button)
transition: all 0.3s ease: Memberikan efek perubahan yang halus saat tombol ditekan atau didekati kursor.
button:hover:
  transform: translateY(-2px): Efek tombol seolah-olah sedikit terangkat saat akan diklik.
  box-shadow: Menambah bayangan saat di-hover untuk memperkuat kesan bahwa tombol tersebut aktif.


**JAVASCRIPT**
1. document.addEventListener('DOMContentLoaded', function() { ... }): memberitahu browser untuk menunggu sampai semua struktur HTML selesai dimuat, baru jalankan kode JavaScript di dalamnya.

2. const form = document.getElementById('guestForm'), const inputNama = document.getElementById('nama'): document.getElementById bekerja dengan cara memanggil elemen berdasarkan ID yang sudah di buat di file HTML sebelumnya

3. form.addEventListener('submit', function(event) { ... }): menunggu sampai pengguna menekan tombol Submit pada form tersebut sebelum menjalankan perintah berikutnya.

4. event.preventDefault(): menghentikan aksi refresh halaman secara otomatis ketika tombol dipencet. Tujuannya agar bisa memproses nama yang diinput dan memunculkan pesan tanpa membuat halaman menjadi kosong kembali.

5. const namaUser = inputNama.value.trim(): value: Mengambil teks apa pun yang diketik oleh pengguna di kotak input, .trim(): Berfungsi untuk menghapus spasi kosong di awal atau di akhir teks. Ini untuk mencegah pengguna yang hanya menekan spasi tanpa mengetik nama asli.

6. if (namaUser !== "") {
      alert("Selamat Datang, " + namaUser + "!");
  } else {
      alert("Silakan masukkan nama kamu terlebih dahulu.");
   }
   Jika (if) kotak nama tidak kosong, maka munculkan pesan sambutan yang menggabungkan teks statis dengan nama yang diinput pengguna.
   Jika tidak (else), munculkan pesan peringatan agar pengguna mengisi namanya terlebih dahulu.
   alert() sendiri adalah fungsi bawaan browser untuk memunculkan kotak pesan kecil di bagian atas layar.
