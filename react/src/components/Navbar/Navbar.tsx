import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from './Navbar.module.css';
import YhLogo from '../../assets/logo/logoyh.png';

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

  const fetchResume = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const email = process.env.API_EMAIL;
    const response = await axios.get("api/v1/resumes", {
      params: { email: email },
      responseType: 'blob'
    });
    const blob = new Blob([response.data], { type: 'application/pdf' });
    const pdfUrl = URL.createObjectURL(blob);
    window.open(pdfUrl, '_blank');
  };

  return (
    <nav className={styles.navbar}>
      <div className="flex items-center">
        <img src={YhLogo} className={`${styles.logo}`} alt="Logo" style={{ transform: `rotate(${rotation}deg)` }} />
      </div>
      <div className={styles.dropdown} ref={dropdownRef}>
        <button className={styles.dropdownButton} onClick={() => setIsOpen(!isOpen)}>Menu</button>
        <div className={`${styles.dropdownContent} ${isOpen ? styles.show : ''}`}>
          <a href="#section2" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#" onClick={fetchResume}>Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
