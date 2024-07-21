import React from "react";
import style from "./projectStyle.module.css";
import wecare from "../../assets/wecare.jpg";
import futsal from "../../assets/futsal.png";
import recipebook from "../../assets/recipebook.webp";
import netflix from "../../assets/netflix.jpg";
import ProjectCard from "../../common/ProjectCard";
import Logo from "../../assets/food-delivery.jpg";

function Project() {
  return (
    <section id="projects" className={style.container}>
      <h1 className="sectionTitle">Project</h1>
      <div className={style.projectContainer}>
        <ProjectCard
          src={futsal}
          link="https://github.com/prithivi12/Futsal-app"
          h3="Futsal"
          p="Futsal booking App"
        />
        <ProjectCard
          src={wecare}
          link="https://github.com/prithivi12/we_care"
          h3="We Care"
          p="Doctor appointing app"
        />
        <ProjectCard
          src={Logo}
          link="https://github.com/prithivi12/food-app"
          h3="Tomato"
          p="Food delivery app"
        />
        <ProjectCard
          src={recipebook}
          link="https://github.com/prithivi12/Recipe-Book-app"
          h3="Recipe Book"
          p="Recipe finding App"
        />
        <ProjectCard
          src={netflix}
          link="https://github.com/prithivi12/netflix-clone"
          h3="Netflix"
          p="Netflix clone"
        />
      </div>
    </section>
  );
}

export default Project;
