import styles from '../styles/garisHeading.module.css';

import metaData from '../components/metaData';
import HeaderBanner from '../components/HeaderBanner';
import Navbar from '../components/Navbar';
import FotoNama from '../components/FotoNama';
import ChatWidget from '../components/ChatWidget';
import BisnisSection from '../components/BisnisSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Andhim.net",
    "url": "https://www.andhim.net",
    "description": "Profil Andhi Mardianto, pusat landing page karya digital seputar teknologi, pemrograman, bisnis, sosial, dan komunitas disabilitas.",
    "inLanguage": "id",
    "keywords": "andhim, andhi mardianto, pemrograman, teknologi, komunitas disabilitas, inklusif, digital humanis, bisnis sosial, Pekanbaru",
    "publisher": {
      "@type": "Person",
      "name": "Andhi Mardianto",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pekanbaru",
        "addressCountry": "ID"
      },
      "sameAs": [
        "https://github.com/andhimardianto",
        "https://www.youtube.com/@Zona_Andhim",
        "https://www.facebook.com/andhimard",
        "https://www.instagram.com/username-anda"
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.andhim.net/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <metaData
        title="Andhim Mardianto | Navigasi Digital Humanis Inklusif"
        description="Profil Andhi Mardianto, pusat landing page karya digital seputar teknologi, pemrograman, bisnis, sosial, dan komunitas disabilitas."
        keywords="andhim, andhi mardianto, pemrograman, teknologi, komunitas disabilitas, inklusif, digital humanis, bisnis sosial, Pekanbaru"
        url="https://www.andhim.net"
        image="https://www.andhim.net/media/og.jpg"
        structuredData={structuredData}
      />
      <HeaderBanner />
      <Navbar />
      <FotoNama />
      <main>
<p>Saya adalah seorang pengembang mandiri <em>self-taught developer</em> berasal dari kota <a href="https://maps.app.goo.gl/X9Th5YKPBohx8PVA9?g_st=ac">Pekanbaru</a> Indonesia, dengan ketertarikan besar pada dunia teknologi, pemrograman, dan pengembangan aplikasi yang ramah pengguna terutama bagi komunitas disabilitas.</p>
<p>Halaman ini berfungsi sebagai titik pusat atau <em>landing page</em> dari berbagai karya digital yang saya bangun, mulai dari proyek perangkat lunak, blog hingga bisnis didalam satu ekosistem.</p>
      <BisnisSection />
        <h2>Kontak</h2>
        <Contact />
        <ChatWidget />
      </main>
      <Footer />
    </>
  );
}
