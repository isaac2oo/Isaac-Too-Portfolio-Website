import React from "react";
import mock09 from '../assets/images/GovTech.png';
import mock10 from '../assets/images/kiosk.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Work and Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.figma.com/design/ZBp9sEJeWXnulRyC4S4di5/Kiosk.-Case-Study?node-id=0-1&t=qP7RRS6pF6drvcLP-1" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/ZBp9sEJeWXnulRyC4S4di5/Kiosk.-Case-Study?node-id=0-1&t=qP7RRS6pF6drvcLP-1" target="_blank" rel="noreferrer"><h2>Kiosk. Case Study</h2></a>
                <p>Designed a productivity app that implements elements of gamification to help users stay focused and get into the "flow-state" quickly.</p>
            </div>
            <div className="project">
                <a href="https://github.com/isaac2oo/Contributions-GovTech" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/isaac2oo/Contributions-GovTech" target="_blank" rel="noreferrer"><h2>Contributions @ GovTech</h2></a>
                <p>A brief rundown of what I worked on during my internship stint at GovTech (Spring 24/25).</p>
            </div> 
        </div>
    </div>
    );
}

export default Project;