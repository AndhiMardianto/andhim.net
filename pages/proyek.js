import styles from '../styles/garisHeading.module.css';
import metaData from '../components/metaData';
import HeaderBanner from '../components/HeaderBanner';
import Navbar2 from '../components/Navbar2';
import ChatWidget from '../components/ChatWidget';
import BisnisSection from '../components/BisnisSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
export default function Proyek() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Proyek Digital Andhim",
    "description": "Kumpulan proyek digital oleh Andhi Mardianto, termasuk Addon NVDA, Browser Options, Device Monitoring, Calculator, dan Smart Download Video.",
    "url": "https://www.andhim.net/proyek",
    "inLanguage": "id",
    "author": {
      "@type": "Person",
      "name": "Andhi Mardianto",
      "url": "https://www.andhim.net"
    },
    "hasPart": [
      {
        "@type": "SoftwareApplication",
        "name": "Addon NVDA - Browser Options",
        "applicationCategory": "Accessibility",
        "operatingSystem": "Windows",
        "url": "https://www.andhim.net/proyek"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Device Monitoring",
        "applicationCategory": "Utility",
        "operatingSystem": "Windows",
        "url": "https://www.andhim.net/proyek"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Calculator",
        "applicationCategory": "Productivity",
        "operatingSystem": "Windows",
        "url": "https://www.andhim.net/proyek"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Smart Download Video",
        "applicationCategory": "Multimedia",
        "operatingSystem": "Windows",
        "url": "https://www.andhim.net/proyek"
      }
    ]
  };

  return (
    <>
      <metaData
        title="Proyek Andhim | Karya Digital oleh Andhi Mardianto"
        description="Kumpulan proyek digital karya Andhi Mardianto seperti Addon NVDA, Browser Options, Device Monitoring, Calculator, dan Smart Download Video."
        keywords="andhim, andhi mardianto, proyek, software, addon NVDA, browser options, device monitoring, calculator, smart download video"
        url="https://www.andhim.net/proyek"
        image="https://www.andhim.net/media/og.jpg"
        structuredData={structuredData}
      />
      <HeaderBanner />
      <Navbar2 />
<main>
  <div className={styles.garisHeading}>
    <h1>Proyek Andhi Mardianto</h1>
  </div>

  <p>
    Saya mengembangkan beberapa program aplikasi berbasis Python, termasuk addon NVDA,
    baik untuk kebutuhan pribadi maupun komunitas pengguna disabilitas penglihatan di
    tingkat lokal maupun internasional. Sebagian proyek dirilis secara publik, sementara
    lainnya digunakan secara terbatas dalam komunitas. Pengembangan ini juga menjadi
    sarana saya untuk terus belajar dan mengeksplorasi teknologi aksesibel sambil
    berkontribusi kepada komunitas.
  </p>

  <p>
    Silakan hubungi saya melalui kontak di bawah apabila Anda memiliki saran, kritik,
    atau pertanyaan.
  </p>

  {/* =======================================
      Browser Options
  ======================================== */}
  <div className={styles.garisHeading}>
    <h2>Browser Options – NVDA Addon</h2>
  </div>

  <p>
    Addon NVDA untuk memudahkan pemilihan browser yang terinstal di Windows.
    Mendukung deteksi Chrome, Firefox, dan Edge, serta menyediakan fitur penyimpanan
    tautan favorit.
  </p>

  <p>
    <a href="https://github.com/AndhiMardianto/browserOptions/releases/download/v1.2.1/browserOptions-1.2.1.nvda-addon">
      👉 Unduh Browser Options
    </a>
  </p>

  <p>
    Kunjungi versi di NVDA Store:&nbsp;
    <a href="https://nvda-addons.org/addon.php?id=418">👉 Buka NVDA Store</a>
  </p>

  <p>
    <a href="https://github.com/AndhiMardianto/browserOptions/">Lihat kode sumber</a>
  </p>

  {/* =======================================
      My Calculator
  ======================================== */}
  <div className={styles.garisHeading}>
    <h2>My Calculator – NVDA Addon</h2>
  </div>

  <p>
    Addon NVDA kalkulator dengan pengalaman penggunaan yang lebih baik. Mendukung
    beberapa metode perhitungan seperti standar, left-to-right, ilmiah, serta konversi
    satuan termasuk konversi Masehi ↔ Hijriah.
  </p>

  <p>
    <a href="https://github.com/AndhiMardianto/MyCalculator/releases/download/v2.2.1/myCalculator-2.2.1.nvda-addon">
      👉 Unduh My Calculator
    </a>
  </p>

  <p>
    Kunjungi versi di NVDA Store:&nbsp;
    <a href="https://nvda-addons.org/addon.php?id=419">👉 Buka NVDA Store</a>
  </p>

  <p>
    <a href="https://github.com/AndhiMardianto/MyCalculator/">Lihat kode sumber</a>
  </p>

  {/* =======================================
      Device Monitoring
  ======================================== */}
  <div className={styles.garisHeading}>
    <h2>Device Monitoring</h2>
  </div>

  <p>
    Addon NVDA untuk memantau sumber daya perangkat seperti jaringan, penyimpanan, RAM,
    CPU, proses latar belakang yang berjalan, perangkat USB terhubung, dan pembaruan
    yang tersedia.
  </p>

  <p>
    <a href="https://github.com/AndhiMardianto/device-monitoring/releases/download/v1/deviceMonitoring-1.0.0.nvda-addon">
      👉 Unduh Device Monitoring
    </a>
  </p>

  <p>
    <a href="https://github.com/AndhiMardianto/device-monitoring/">Lihat kode sumber</a>
  </p>

  {/* =======================================
      Smart D
  ======================================== */}
  <div className={styles.garisHeading}>
    <h2>Smart D</h2>
  </div>

  <p>
    Aplikasi Windows untuk mengunduh video dari berbagai platform yang didukung dan
    memiliki fitur konversi  menjadi audio. harap Gunakan program ini dengan bijak. 
    Tambahan Informasi Instalasi:
Karena aplikasi belum memiliki sertifikat penandatanganan digital, Windows atau antivirus tertentu mungkin menampilkan peringatan saat proses instalasi. Jika muncul pesan “Windows protected your PC”, pilih More info lalu klik Run anyway untuk melanjutkan. Aplikasi ini aman digunakan selama Anda mengunduhnya dari tautan resmi yang tersedia di halaman ini.
  </p>

  <p>
    <a href="https://github.com/AndhiMardianto/Smart-D/releases/download/v1.0.0/Smart-D-Setup.exe">
      👉 Unduh Smart D
    </a>
  </p>

  <p>
    <a href="https://github.com/AndhiMardianto/Smart-D/">Lihat kode sumber</a>
  </p>

  {/* =======================================
      Andhim Player
  ======================================== */}
  <div className={styles.garisHeading}>
    <h2>Andhim Player</h2>
  </div>

  <p>
    Aplikasi pemutar media sederhana berbasis Windows dan libVLC. Masih dalam tahap
    pengembangan, mendukung pemutaran media lokal serta streaming radio dan TV.
    Proyek ini belum mencapai rilis resmi dan saat ini tersedia dalam bentuk kode sumber serta versi beta awal. Versi beta tersebut masih bersifat eksperimental dan pada beberapa perangkat dapat mengalami kegagalan instalasi atau ketidakstabilan. Pengembangan dilakukan secara bertahap sesuai ketersediaan waktu, dan setiap masukan dari pengguna sangat membantu dalam meningkatkan kualitas aplikasi ke depannya.
  </p>

  <p>
    <a href="https://github.com/AndhiMardianto/AndhimPlayer/">Lihat kode sumber</a>
  </p>

  {/* Widgets & Komponen Tambahan */}
  <ChatWidget />
  <BisnisSection />

  <h2>Kontak</h2>
  <Contact />
</main>

      <Footer />
    </>
  );
}
