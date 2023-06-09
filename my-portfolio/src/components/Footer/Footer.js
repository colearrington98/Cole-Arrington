import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="https://github.com/colearrington98" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/colearrington/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
            </a>
        </footer>
    );
};

export default Footer;
