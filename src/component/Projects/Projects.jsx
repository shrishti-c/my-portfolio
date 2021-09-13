
import React from 'react';
import Footerlink from '../Footerlink/Footerlink';
import Header from '../Header/Header';
import { projectsData } from './projectsData';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
    return (
        <div className="project-section">
        <div className='section-container'>
            <Header 
                Heading='My Projects.'
                Details="Here are a few cool things I've worked on, do check them out!"
            />

            <div className='project-cards-container'>
                {projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        videoUrl,
                        projectUrl,
                    }) => {
                        return (
                            <ProjectCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                projectUrl={projectUrl}
                                imageUrl={imageUrl}
                                videoUrl={videoUrl}
                            />
                        );
                    }
                )}
            </div>

            <Footerlink
                phrase='Check out '
                link='my skills!'
                toadress='/skills'
            />
        </div>
        </div>
    );
};

export default Projects;