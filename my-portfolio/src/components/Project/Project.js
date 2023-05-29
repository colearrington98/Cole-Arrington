import React from 'react';
import projects from '../../projectSeed.js';

const Project = ({ project = {} }) => {
    const { title, image, deployedLink, repoLink } = project;
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <div className="links">
                <a href={deployedLink}>Deployed Application</a>
                <a href={repoLink}>GitHub Repository</a>
            </div>
        </div>
    );
};

const Projects = () => (
    <div className="projects">
        {projects.map((project, index) => <Project key={index} project={project} />)}
    </div>
)

export default Projects;



