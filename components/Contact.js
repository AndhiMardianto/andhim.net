import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <a href="https://wa.me/6281268480808" target="_blank" rel="noopener noreferrer">
        <img src="/media/iconwa.svg" alt="WhatsApp" />
      </a>
      <a href="mailto:andhi@andhim.net">
        <img src="/media/iconemail.svg" alt="Email" />
      </a>
      <a href="https://www.linkedin.com/in/andhi-mardianto" target="_blank" rel="noopener noreferrer">
        <img src="/media/linkedin.png" alt="Linkedin" />
      </a>

      <a href="https://facebook.com/andhi.mardianto.andhim/" target="_blank" rel="noopener noreferrer">
        <img src="/media/iconfb.svg" alt="Facebook" />
      </a>

      <a href="https://instagram.com/andhi.mardianto.andhim/" target="_blank" rel="noopener noreferrer">
        <img src="/media/instagram.svg" alt="Instagram" />
      </a>

      <a href="https://x.com/andhi_mardianto" target="_blank" rel="noopener noreferrer">
        <img src="/media/x.svg" alt="Twiter / x" />
      </a>

      <a href="https://github.com/AndhiMardianto" target="_blank" rel="noopener noreferrer">
        <img src="/media/github.svg" alt="GitHub" />
      </a>

    </div>
  );
}
