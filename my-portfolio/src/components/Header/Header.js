import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Cole Arrington</h1>
      <nav>
        <ul className={styles.navigation}>
          <li>
            <Link className={styles.navigation__link} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.navigation__link} to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles.navigation__link} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className={styles.navigation__link} to="/resume">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
