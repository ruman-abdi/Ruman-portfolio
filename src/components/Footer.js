import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/ruman-abdirashid-sheikh-81991b236/ ', '_blank')} />
      <GithubIcon onClick={() => window.open('https://github.com/ruman-abdi','_blank')} />
        <InstagramIcon onClick={() => window.open('https://www.instagram.com/ruman.codes/ ', '_blank')} />
      
       
      </div>
      <p> &copy; 2023 ruman</p>
    </div>
  );
}

export default Footer;
