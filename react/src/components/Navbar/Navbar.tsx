import RubyLogo from '../../assets/logo/logo2.png';
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
/* import { CodeBracketSquareIcon, ChevronDownIcon } from '@heroicons/react/24/outline'; */

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(rotation => rotation + Math.random() * 360 - 180);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className="flex items-center">
        <img src={RubyLogo} className={`${styles.logo}`} alt="Logo" style={{ transform: `rotate(${rotation}deg)` }} />
      </div>
      <div className={styles.dropdown}>
        <button className={styles.dropdownButton} onClick={() => setIsOpen(!isOpen)}>Menu</button>
        <div className={`${styles.dropdownContent} ${isOpen ? styles.show : ''}`}>
          <a href="#">Projects</a>
          <a href="#">Contact Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

