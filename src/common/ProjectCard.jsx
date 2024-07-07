import React from "react";
import viberr from "../assets/viberr.png";
import fitlit from "../assets/fitlift.png";

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`}></img>

      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
