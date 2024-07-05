import React from "react";
import style from "./HeroStyle.module.css";
import HeroImg from "../../assets/hero-img.png";
import theamIcon from "../../assets/sun.svg";

function Hero() {
  return (
    <section id="hero" className={style.container}>
      <div className={style.colorModeContainer}>
        <img className={style.Hero} src={HeroImg} alt="hero img" />
        <img className={style.colorMode} src={theamIcon} alt="" />
      </div>
      <div className={style.info}>
        <h1>
          Prithivi
          <br /> lalchan
        </h1>
        <h2>Frontend Develpoer</h2>
        <span>
          <a href="https:"></a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
