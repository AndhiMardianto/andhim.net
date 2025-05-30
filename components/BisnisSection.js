'use client';
import styles from '../styles/BisnisSection.module.css';

export default function BisnisSection() {
  const handleTravelingClick = () => {
    alert('Halaman sedang dalam pengerjaan.');
  };

  return (
    <section className={styles.bisnisSection}>
      <h2 className={styles.title}>Bisnis</h2>
      <div className={styles.buttonContainer}>
        <a
          href="https://catering.andhim.net"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Catering
        </a>
        <button onClick={handleTravelingClick} className={styles.button}>
          Traveling
        </button>
      </div>
    </section>
  );
}
