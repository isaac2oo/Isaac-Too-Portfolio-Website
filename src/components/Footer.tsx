import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/isaac2oo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/isaac-too/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
        <p> Isaac Too. Last Updated 5th May 2025.</p>
    </footer>
  );
}

export default Footer;