// Navbar.tsx
import React from 'react';
import styles from './Navbar.module.css';
import RubyLogo from '../../assets/logo/logo2.png';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <img src={RubyLogo} alt="Logo" className={styles.logo} />
      <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>Menu</button>
        <div className={styles.dropdownContent}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
