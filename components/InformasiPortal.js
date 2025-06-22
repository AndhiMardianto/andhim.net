// components/InformasiPortal.js
import { useEffect, useState } from 'react';
import styles from '../styles/garisHeading.module.css';

export default function InformasiPortal() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/info')
      .then(res => res.json())
      .then(data => {
        // Ambil hanya 3 berita terbaru
        const tigaTerbaru = data.slice(0, 3);
        setBerita(tigaTerbaru);
      });
  }, []);

  return (
    <>
      <div className={styles.garisHeading}>
        <h2 id="informasi">Portal Informasi</h2>
      </div>

      {berita.length === 0 ? (
        <p>Fitur sedang dalam perbaikan...</p>
      ) : (
        <ul className={styles.daftarBerita}>
          {berita.map((item, index) => (
            <li key={index} className={styles.daftarItem}>
              <strong>{item.title}</strong><br />
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>Info selengkapnya &raquo;</small>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
