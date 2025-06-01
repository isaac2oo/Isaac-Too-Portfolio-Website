import React from "react";
// import '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const designTools = [
    "Figma",
    "Design Systems",
    "Wireframing",
    "Prototyping",
    "Usability Testing",
    "User Interviews",
    "Information Architecture",
    "Accessibility",
];

const softSkills = [
    "User Empathy",
    "Iterative Design",
    "Problem Solving",
    "Cross-Team Collaboration",
    "Qualitative Research",
    "Stakeholder Communication",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Experiences</h1>
            <div className="skills-grid">
                <div className="skill">
                    <h3>GovTech Singapore</h3>
                    <p>As a UI/UX Design Intern, I’ve helped out across multiple public-facing platforms such as Case Connect and ComLink+ through research, interface design, and design system maintenance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills involved:</span>
                        {designTools.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <h3>Google Developer Student Club (NUS)</h3>
                    <p>Worked on building a partnership and beneficiary management system for Heartware Network, as well as simulating volunteer training experiences through scenario-based resources.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills involved:</span>
                        {softSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;