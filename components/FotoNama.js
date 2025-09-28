// components/FotoNama.jsx
import React, { useState, useEffect } from 'react';
import styles from '../styles/FotoNama.module.css';
import Image from 'next/image';

const FotoNama = () => {
  const [nama, setNama] = useState("Andhi Mardianto");

  useEffect(() => {
    const interval = setInterval(() => {
      setNama((prev) => prev === "Andhi Mardianto" ? "Andhim" : "Andhi Mardianto");
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <Image
        src="/media/foto.png"
        alt="Foto Profil Andhi Mardianto (Andhim)"
        width={300}
        height={300}
        className={styles.foto}
      />
      <h1 className={styles.nama}>{nama}</h1>
    </div>
  );
};

export default FotoNama;
