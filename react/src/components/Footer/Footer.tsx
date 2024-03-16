import styles from './Footer.module.css';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import Dino from '../../assets/logo/dino3.gif';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.folio}>© 2024 Portfolio</div>
        <div className={styles.email}>yuhribrp.dev@gmail.com</div>
        <div className={styles.icons}>
          <a href="https://twitter.com/Yuhribrp" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://github.com/Yuhribrp" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/yuhribrp" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
        <div className={styles.dino}>
          <img src={Dino} alt="Dino walking" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
