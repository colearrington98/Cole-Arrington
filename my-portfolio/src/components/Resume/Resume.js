import React from 'react';
import styles from './Resume.module.css';

function Resume() {
    return (
        <section className={styles.resume}>
            <h2>Resume</h2>
            <p>
               <a href="https://www.linkedin.com/in/colearrington/overlay/1635523170248/single-media-viewer?type=DOCUMENT&profileId=ACoAACx4Y9cBzSkzI7rja49tQzYu-YlsJ33Gtk8&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BUFmPfZlHQtWypPYiQuDKIg%3D%3D" download>Download my resume</a>
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