import React from "react";

function skillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default skillList;
