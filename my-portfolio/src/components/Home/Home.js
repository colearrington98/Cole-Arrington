import React from 'react';
import styles from './Home.module.css';

function Home() {
    return (
        <section className={styles.home}>
            <h2>Home</h2>
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

export default Home;