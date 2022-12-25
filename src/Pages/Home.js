import React, { useContext } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import DownloadIcon from '@material-ui/icons/CloudDownload';
import "../Styles/Home.css";
import { ThemeContext } from "../App";

const Home = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="home" id={theme}>
      <div className="about">
        <h2>Hi, My name is Siddiq</h2>
        <div className="prompt">
          <p>A Web Developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/siddiq-barbhuiya-9b3ba022a/" target="_blank"><LinkedInIcon /></a>
          <a href="https://github.com/siddiqbarbhuiya" target="_blank"><GithubIcon /></a>
          <a href="mailto: siddiqbarbhuiya@outlook.com"><EmailIcon /></a>
        </div>

        <a href="assests/Resume-SiddiqBarbhuiya.pdf" className="resume" download>
          Resume <DownloadIcon />
        </a>

      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>React JS, Flutter, HTML, CSS, SCSS, Bootstrap, Material-UI</span>
          </li>

          <li className="item">
            <h2>Back-End</h2>
            <span>Node JS(Bacic), MySQL(Bacic)</span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span>Java, Javascript, Dart, Swift</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
