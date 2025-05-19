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
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/media/iconfb.svg" alt="Facebook" />
      </a>
    </div>
  );
}
