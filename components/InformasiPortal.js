// components/InformasiPortal.js
import { useEffect, useState } from 'react';
import styles from '../styles/garisHeading.module.css';

export default function InformasiPortal() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    fetch('https://api.andhim.net/info')
      .then(res => res.json())
      .then(data => setBerita(data));
  }, []);

  return (
    <>
      <div className={styles.garisHeading}>
        <h2 id="informasi">Portal Informasi</h2>
      </div>
      {berita.length === 0 ? (
        <p>Sedang memuat data informasi...</p>
      ) : (
        <ul className={styles.daftarBerita}>
          {berita.map((item, index) => (
            <li key={index} className={styles.daftarItem}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <strong>{item.judul}</strong>
              </a>
              <p>{item.kutipan}</p>
              <small>{item.tanggal}</small>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
