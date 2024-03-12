/* import RubyLogo from '../../assets/logo/logo2.png'; */
import React from 'react';
import styles from './Navbar.module.css';
import { CodeBracketSquareIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
const Navbar: React.FC = () => {
 return (
    <nav className={styles.navbar}>
      <div className="flex items-center">
        <CodeBracketSquareIcon className="h-5 w-5 text-white" aria-hidden="true" />
        <span className="ml-2 text-white">Logo</span>
      </div>
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

