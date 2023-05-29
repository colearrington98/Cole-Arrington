import React from 'react';
import styles from './Resume.module.css';

function Resume() {
    return (
        <section className={styles.resume}>
            <h2>Resume</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquet velit eget velit tincidunt, sed luctus enim maximus.
                </p>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </section>

    );

}   

export default Resume;