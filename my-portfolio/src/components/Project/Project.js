import React from 'react';
import projects from '../../projectSeed.js';
import styles from './Project.module.css';

const Project = ({ project = {} }) => {
  const { title, image, deployedLink, repoLink } = project;
  return (
    <div className={styles.project}>
      <h3 className={styles['project-title']}>{title}</h3>
      <img className={styles['project-image']} src={image} alt={title} />
      <div className={styles['project-links']}>
        <a href={deployedLink}>Deployed Application</a>
        <a href={repoLink}>GitHub Repository</a>
      </div>
    </div>
  );
};

const Projects = () => (
  <div className={styles.projects}>
    {projects.map((project, index) => (
      <Project key={index} project={project} />
    ))}
  </div>
);

export default Projects;


