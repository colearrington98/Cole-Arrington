import React from 'react';

const Project = ({ project }) => {
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
export default Project;