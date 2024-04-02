// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import styles from './Navbar.module.css';
// // import YhLogo from '../../assets/logo/logoyh.png';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   // const [rotation, setRotation] = useState(0);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       setIsScrolled(isScrolled);
//     };

//     document.addEventListener('scroll', handleScroll);
//     return () => {
//       document.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setRotation(rotation => rotation + Math.random() * 360 - 180);
//   //   }, 1000);
//   //   return () => clearInterval(interval);
//   // }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: { target: unknown; }) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     }

//     if (isOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen]);

//   const fetchResume = async (event: { preventDefault: () => void; }) => {
//     event.preventDefault();
//     const email = "yuhribrp.dev@gmail.com";
//     const response = await axios.get("api/v1/resumes", {
//       params: { email: email },
//       responseType: 'blob'
//     });
//     const blob = new Blob([response.data], { type: 'application/pdf' });
//     const pdfUrl = URL.createObjectURL(blob);
//     window.open(pdfUrl, '_blank');
//   };

//   return (
//     <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
//       <div className="flex items-center">
//       </div>
//       <div className={styles.dropdown} ref={dropdownRef}>
//         <button className={`${styles.dropdownButton} ${isScrolled ? 'bg-black text-white' : 'bg-transparent text-white'}`} onClick={() => setIsOpen(!isOpen)}>
//           Menu
//           <svg className={`${isOpen ? 'transform rotate-180' : ''} ml-2 ${styles.arrowDown}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </button>
//         {isOpen && (
//           <div className={`${styles.dropdownContent}`}>
//             <a href="#section2" onClick={() => setIsOpen(false)}>Projects</a>
//             <a href="#" onClick={fetchResume}>Resume</a>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
