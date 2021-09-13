import React from 'react';
import './Projects.css';

const ProjectCard = ({
    projectName,
    projectDescription,
    projectUrl,
}) => {
    return (
        
        <div className='project-card'>
                       <div className='project-details-container'>
                <h2 className='project-heading'>{projectName}</h2>
                 <hr className="hrline"/>
                <p className='project-details'>{projectDescription}</p>
                <a href={projectUrl} className="code-link" target="_blank"><u>View Source Code</u></a>
            </div>
        </div>
       
    );
};

export default ProjectCard;