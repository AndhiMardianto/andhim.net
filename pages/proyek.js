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
<h1> Proyek Andhi Mardianto    </h1>
</div>
<p>Saya mengembangkan beberapa program aplikasi berbasis Python, termasuk addon NVDA, baik untuk kebutuhan pribadi maupun komunitas pengguna disabilitas penglihatan  ditingkat lokal dan internasional. Sebagian proyek tersedia secara publik, sementara beberapa lainnya digunakan secara tertutup dan terbatas dalam komunitas. Pengembangan ini juga menjadi sarana saya untuk terus belajar dan mengeksplorasi teknologi aksesibel, sambil berkontribusi nyata kepada komunitas.</p>
<p>Silahkan hubungi kontak saya,👇 jika anda memiliki saran, kritik ataupun pertanyaan.</p>
    <div className={styles.garisHeading}>
<h2>Browser Options  NVDA addon </h2>
</div>
<p>Sebuah addon NVDA untuk memudahkan penulusuran dengan pilihan pilihan browser yang terinstal di perangkat windows. <br />
dapat mendeteksi browser chrome, firefox dan edge. serta memiliki fitur simpan Link favorite. </p>
<p><a href="https://github.com/AndhiMardianto/browserOptions/releases/download/v1.2.1/browserOptions-1.2.1.nvda-addon">👉Download disini</a></p>
<p> Atau kunjungi toko NVDA store <a href="https://nvda-addons.org/addon.php?id=418">👉disini</a></p>
<p><a href="https://github.com/AndhiMardianto/browserOptions/">Lihat kode sumber</a></p>
    <div className={styles.garisHeading}>
<h2>My Calculator </h2>
</div>
<p>addon NVDA kalkulator dengan pengunaan pengalaman yang lebih baik </p>
<p>memiliki beberapa metode perhitungan, seperti standar, left to right, ilmiah, dan juga konversi satuan termasuk konversi tahun masehi ke hijriah dan sebaliknya.</p>
<p><a href="https://github.com/AndhiMardianto/MyCalculator/releases/download/v2.2.1/myCalculator-2.2.1.nvda-addon"> 👉Download disini</a></p>
<p> Atau kunjungi toko NVDA store <a href="https://nvda-addons.org/addon.php?id=419"> 👉disini</a></p>
<p><a href="https://github.com/AndhiMardianto/MyCalculator/">Lihat kode sumber</a></p>
    <div className={styles.garisHeading}>
<h2>Device Monitoring</h2>
</div>
<p>Add-on NVDA ini untuk memantau sumber daya perangkat, seperti jaringan, penyimpanan, RAM, CPU, Proses latar belakang yang sedang berjalan, memeriksa USB yang terhubung  dan memeriksa update yang tersedia.</p>
<p>Download <a href="https://github.com/AndhiMardianto/device-monitoring/releases/download/v1/deviceMonitoring-1.0.0.nvda-addon">👉disini</a></p>
<p>Lihat kode sumber <a href="https://github.com/AndhiMardianto/device-monitoring/">disini</a></p>

    <div className={styles.garisHeading}>
<h2>Smart D</h2>
</div>
<p> aplikasi ini untuk mendownload video dari berbagai platform dan situs yang didukung, dan hanya berjalan di windows. serta  memiliki fitur konversi  hasil download dari video ke audio</p>
<p>harap gunakan program ini dengan bijak.</p>
<p> download <a href="https://github.com/AndhiMardianto/Smart-D/releases/download/v1.0.0/Smart-D-Setup.exe">disini</a></p>
<p><a href="https://github.com/AndhiMardianto/Smart-D/">Lihat kode sumber</a></p>

    <div className={styles.garisHeading}>
<h2>Andhim Player</h2>
</div>
<p> aplikasi windows ini adalah pemutar media sederhana yang masih dalam tahap pengembangan,  mengunakan teknologi libvlc. memiliki fitur fitur sepeti memutar file media lokal dan jaringan radio maupun TV streaming.</p>
<p> Lihat kode sumber <a href="https://github.com/AndhiMardianto/AndhimPlayer/">disini</a></p>
        <ChatWidget />
      <BisnisSection />

<h2>Kontak</h2>
      <Contact />
      </main>

      <Footer />
    </>
  );
}
