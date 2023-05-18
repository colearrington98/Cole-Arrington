import styles from './About.module.css';
import React from 'react';

function About() {
    return (
        <section className={styles.about}>
            <h2>About Me</h2>
            <img src="https://via.placeholder.com/150" alt="Cole Arrington" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquet velit eget velit tincidunt, sed luctus enim maximus.
                Donec euismod, nisl id aliquam ultricies, nunc sapien
                sollicitudin quam, quis aliquam elit nisl vitae nunc. Nulla
                facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            </p>
        </section>
    );
}

export default About;