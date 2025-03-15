import React from "react";

function Skills(props) {
  const { skills } = props;

  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );  
}

export default Skills;
