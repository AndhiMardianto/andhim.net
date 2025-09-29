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
    "alternateName": ["Andi Mardianto", "Andhim"],
    "url": "https://www.andhim.net",
    "description": "Profil Andhi Mardianto, pusat landing page karya digital seputar teknologi, pemrograman, bisnis, sosial, dan komunitas disabilitas.",
    "inLanguage": "id",
    "keywords": "andhi mardianto, andi mardianto, andhim, pemrograman, teknologi, komunitas disabilitas, inklusif, digital humanis, bisnis sosial, Pekanbaru",
    "publisher": {
      "@type": "Person",
      "name": "Andhi Mardianto",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pekanbaru",
        "addressCountry": "ID"
      },
      "sameAs": [
        "https://github.com/AndhiMardianto",
        "https://x.com/andhi_mardianto",
        "https://www.linkedin.com/in/andhimardianto",
        "https://www.youtube.com/@Zona_Andhim",
        "https://www.facebook.com/andhi.mardianto.andhim",
        "https://www.instagram.com/andhi.mardianto.andhim"
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
        description="Profil Andhi Mardianto, pusat landing page karya digital seputar teknologi, pemrograman, digital marketing, bisnis, sosial, dan komunitas disabilitas."
        keywords="andhim, andhi mardianto, pemrograman, teknologi, komunitas disabilitas, inklusif, digital humanis, bisnis sosial, Pekanbaru"
        url="https://www.andhim.net"
        image="https://www.andhim.net/media/og.jpg"
        structuredData={structuredData}
      />
      <HeaderBanner />
      <Navbar />
      <FotoNama />
      <main>
<p>Saya Andhi Mardianto (Andhim), seorang programmer dan digital marketer dari kota Pekanbaru, Indonesia, dengan ketertarikan pada teknologi, pemrograman, aplikasi inklusif, dan proyek digital..</p>
<p>Halaman ini menjadi pusat navigasi karya digital saya mulai dari <a href="https://andhim.net/proyek/">proyek perangkat lunak,</a> tulisan <a href="https://blog.andhim.net">blog,</a> hingga bisnis dalam satu ekosistem.</p>

      <BisnisSection />
        <h2>Kontak & Sosial Media</h2>
        <Contact />
        <ChatWidget />
      </main>
      <Footer />
    </>
  );
}
