// 1. Fungsi Utama Konversi
function konversiSuhu(nilai, tipe) {
    let hasil = 0;
    let unit = "";

    switch (tipe) {
        case "c-to-f":
            hasil = (nilai * 9/5) + 32;
            unit = "°Fahrenheit";
            break;
        case "c-to-r":
            hasil = nilai * 4/5;
            unit = "°Reamur";
            break;
        case "f-to-c":
            hasil = (nilai - 32) * 5/9;
            unit = "°Celsius";
            break;
        case "f-to-r":
            hasil = (nilai - 32) * 4/9;
            unit = "°Reamur";
            break;
        case "r-to-c":
            hasil = nilai * 5/4;
            unit = "°Celsius";
            break;
        case "r-to-f":
            hasil = (nilai * 9/4) + 32;
            unit = "°Fahrenheit";
            break;
        default:
            return "Tipe konversi tidak valid";
    }
    
    // Membulatkan hasil ke 2 angka di belakang koma agar rapi
    return `${hasil.toFixed(2)} ${unit}`;
}

// 2. Fungsi untuk menangani input dari HTML
function prosesKonversi() {
    const inputSuhu = document.getElementById("inputSuhu").value;
    const tipe = document.getElementById("jenisKonversi").value;
    const elemenHasil = document.getElementById("hasil");

    // Validasi apakah input sudah diisi
    if (inputSuhu === "") {
        elemenHasil.innerText = "Silakan masukkan nilai suhu terlebih dahulu.";
        return;
    }

    const nilaiSuhu = parseFloat(inputSuhu);
    const hasilAkhir = konversiSuhu(nilaiSuhu, tipe);

    // 3. Menampilkan hasil ke elemen HTML
    elemenHasil.innerText = "Hasil: " + hasilAkhir;
}