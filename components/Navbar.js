import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <button className={styles.navButton} onClick={() => router.push('/')}>Home</button>
      <button className={styles.navButton} onClick={() => router.push('/projects')}>Proyek</button>
      <button className={styles.navButton} onClick={() => window.open('https://blog.andhim.net', '_blank')}>Blog</button>
    </nav>
  );
}
