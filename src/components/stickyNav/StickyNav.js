import React from 'react';
import styles from './nav.module.css'
import { Link } from 'react-router-dom'

const StickyNav = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/cars'>Cars</Link>
          <Link to='/motorcycles'>Motorcycles</Link>
        </ul>
      </nav>
    </header>
  );
}

export default StickyNav;
