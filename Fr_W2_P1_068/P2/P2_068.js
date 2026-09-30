
// Fungsi untuk menghitung usia berdasarkan tahun lahir
function hitungUsia(tahunLahir) {
    // Mendapatkan tahun saat ini menggunakan objek Date
    const tahunSekarang = new Date().getFullYear();

    // Menghitung usia dengan mengurangi tahun lahir dari tahun saat ini
    const usia = tahunSekarang - tahunLahir;
    return usia;
}

// Menangani event submit form
document.getElementById('formUsia').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form dari reload halaman

    // Mendapatkan nilai tahun lahir dari input
    const inputTahunLahir = document.getElementById('tahunLahir').value;

    // Mendapatkan nilai tahun lahir dari input
    const tahunLahir = parseInt(inputTahunLahir, 10);

    // Validasi input tahun lahir
    if (isNaN(tahunLahir) || tahunLahir <= 0 ) {
        document.getElementById('hasil').innerText = "Masukkan tahun lahir yang valid.";
        return;
    }

    // Menghitung usia menggunakan fungsi hitungUsia
    const usia = hitungUsia(tahunLahir);

    // Validasi usia yang dihasilkan
    if (usia < 0) {
        document.getElementById('hasil').innerText = "Tahun lahir lebih besar dari tahun saat ini.";
    } else {
        // Menampilkan hasil usia di elemen HTML
        document.getElementById('hasil').innerText = `Usia Anda adalah: ${usia} tahun.`;
    }
});