// Fungsi untuk menyapa sesuai kondisi waktu 
function ucapkanSalam() {
    const waktuSekarang = new Date();
    const jam = waktuSekarang.getHours();
    let ucapkan;

    if (jam >= 18 || jam < 2) {
        ucapkan = "Hello, Selamat Malam. Saya Andhim 😍";
    } else if (jam >= 2 && jam < 11) {
        ucapkan = "Hello, Selamat Pagi. Saya Andhim 😍";
    } else if (jam >= 11 && jam < 15) {
        ucapkan = "Hello, Selamat Siang. Saya Andhim 😍";
    } else if (jam >= 15 && jam < 18) {
        ucapkan = "Hello, Selamat Sore. Saya Andhim 😍";
    }

    document.getElementById("menyapa1").innerText = ucapkan;
}

// Fungsi untuk mengganti tahun otomatis di copyright footer 
function copyright() {
    const year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
}

// Tambahkan kedua fungsi ke event listener `DOMContentLoaded`
window.addEventListener("DOMContentLoaded", () => {
    ucapkanSalam();
    copyright();
});
