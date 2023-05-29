import styles from './About.module.css';
import React from 'react';
import myImage from '../../images/my-image.jpg';


function About() {
    return (
        <section className={styles.about}>
            <h2>About Me</h2>
            <img src={myImage} alt="Cole Arrington" />
            <p>
            Hello, my name is Cole Arrington, I am a Full Stack Web Developer located in Nashville, TN.
I am a current student of the Vanderbilt Web Development Bootcamp and set to graduate May 2023.
I enjoy implementing what I am learning into innovtive projects. I am eager to learn and open to any new adventures that is thrown my way.
            </p>
        </section>
    );
}

export default About;