import YhLogo from '../../assets/logo/logoyh.png';
import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(rotation => rotation + Math.random() * 360 - 180);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: { target: unknown; }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={styles.navbar}>
      <div className="flex items-center">
        <img src={YhLogo} className={`${styles.logo}`} alt="Logo" style={{ transform: `rotate(${rotation}deg)` }} />
      </div>
      <div className={styles.dropdown} ref={dropdownRef}>
        <button className={styles.dropdownButton} onClick={() => setIsOpen(!isOpen)}>Menu</button>
        <div className={`${styles.dropdownContent} ${isOpen ? styles.show : ''}`}>
          <a href="#section2" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#">Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
