import React from "react";
import "./Skills.css";
import Header from "../Header/Header";
import Footerlink from "../Footerlink/Footerlink";
import skillsVector from './../../assets/skills_vector.png';
import {SkillList} from '../SkillCard/SkillList.js';
import SkillCard from "../SkillCard/SkillCard";

const Skills = () => {
    return (
        <div className='section-container'>
            <Header
                Heading='My Skills.'
                Details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
            />

            <div className='skill-card-container'>
                {SkillList.map(({ skillName, skillUrl }) => (
                    <SkillCard skillName={skillName} skillUrl={skillUrl} />
                ))}
            </div>

            

            <div className='skills-vector-frame'>
                <img
                    src={skillsVector}
                    alt='skills'
                    className='skills-vector'
                />
            </div>
        </div>
    );
};

export default Skills;