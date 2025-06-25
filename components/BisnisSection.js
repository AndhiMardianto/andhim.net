'use client';
import styles from '../styles/BisnisSection.module.css';

export default function BisnisSection() {
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
        <a
          href="https://travel.andhim.net"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Traveling
        </a>
      </div>
    </section>
  );
}
