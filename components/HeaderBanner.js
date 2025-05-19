// components/HeaderBanner.js
import { useEffect, useState } from 'react';
import styles from '../styles/HeaderBanner.module.css';

const images = ['/media/banner1.webp', '/media/banner2.webp'];

export default function HeaderBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // bersihkan interval saat unmount
  }, []);

  return (
    <div className={styles.bannerContainer}>
      <img
        src={images[currentIndex]}
        alt={`Banner ${currentIndex + 1}`}
        className={styles.bannerImage}
      />
    </div>
  );
}
