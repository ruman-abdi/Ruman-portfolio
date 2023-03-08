import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Ruman</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/ruman-abdirashid-sheikh-81991b236/ ', '_blank')} />
          <EmailIcon onClick={() => window.open('https://mail.google.com/mail/u/2/', '_blank')}  />

           <GithubIcon onClick={() => window.open('https://github.com/ruman-abdi','_blank')} />
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <span>
              ReactJS, HTML, CSS,  NPM,
               BootStrap, MaterialUI, Yarn, StyledComponents,Git,GitHub,Javascript,figma
            </span>
          </li>
          
        </ol>
      </div>
    </div>
  );
}

export default Home;
