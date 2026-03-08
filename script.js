document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('guestForm');
    const inputNama = document.getElementById('nama');
    
    form.addEventListener('submit', function(event) {
 
        event.preventDefault();

        const namaUser = inputNama.value.trim();

        if (namaUser !== "") {
            alert("Selamat Datang, " + namaUser + "! Kamu berhasil menjadi seorang SIMPENAN.");
        } else {
            alert("Silakan masukkan nama kamu terlebih dahulu.");
        }
    });
});