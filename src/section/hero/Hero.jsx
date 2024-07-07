import React from "react";
import style from "./HeroStyle.module.css";
import HeroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterdark from "../../assets/twitter-dark.svg";
import twitterlight from "../../assets/twitter-light.svg";
import githubdark from "../../assets/github-dark.svg";
import githublight from "../../assets/github-light.svg";
import linkedindark from "../../assets/linkedin-dark.svg";
import linkedinlight from "../../assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterlight : twitterdark;
  const githubIcon = theme === "light" ? githublight : githubdark;
  const linkedinIcon = theme === "light" ? linkedinlight : linkedindark;

  return (
    <section id="hero" className={style.container}>
      <div className={style.colorModeContainer}>
        <img className={style.Hero} src={HeroImg} alt="hero img" />
        <img
          className={style.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={style.info}>
        <h1>
          Prithivi
          <br /> lalchan
        </h1>
        <h2>Frontend Develpoer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="twitter icon"></img>
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="github icon"></img>
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="linkedin icon"></img>
          </a>
        </span>
        <p className="style.description">
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
