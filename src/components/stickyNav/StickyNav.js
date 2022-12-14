import React from 'react';
import styles from './nav.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const StickyNav = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated)


  return (
    <header className={styles.headerNav}>
      <nav className={styles.nav}>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/cars'>Cars</Link>
          <Link to='/motorcycles'>Motorcycles</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/login'> {auth == true ? 'Account' : 'Login'}</Link>
        </ul>
      </nav>
    </header>
  );
}

export default StickyNav;
