// components/TechBar.js

import React from "react";

const TechBar = () => {
  const techList = [
    "HTML", "CSS", "JavaScript", "ReactJS", "Node", "Express", "Bootstrap",
    "jQuery", "PHP", "MySQL", "MongoDB", "Prisma" ,"Git", "GitHub", "Figma", "WordPress",
    "C", "C++", "Python", "HTML", "CSS", "JavaScript", "ReactJS", "Node", "Express",
    "Bootstrap", "jQuery", "PHP", "MySQL", "MongoDB", "Git", "GitHub", "Figma", "WordPress",
    "C", "C++", "Python"
  ];

  return (
    <div className="overflow-hidden relative w-full bg-gray-800 py-6">
      <ul className="techs flex animateMarquee space-x-16 text-white text-2xl">
        {techList.map((tech, index) => (
          <li key={index} className="tech drop-shadow-3xl animate-pulse ">{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechBar;
