import React from 'react';
import './about.css';
import pythonLogo from '../../asserts/python.svg';
import javaLogo from '../../asserts/python.svg';
import jsLogo from '../../asserts/javascript.svg';
import reactLogo from '../../asserts/react.svg';
import tsLogo from '../../asserts/typescript.svg';
import dockerLogo from '../../asserts/docker.svg';
import githubLogo from '../../asserts/github.svg';

const skills = [
  { name: 'Python', image: pythonLogo },
  { name: 'Java', image: javaLogo },
  { name: 'JavaScript', image: jsLogo },
  { name: 'React', image: reactLogo },
  { name: 'TypeScript', image: tsLogo },
  { name: 'Docker', image: dockerLogo },
  { name: 'GitHub', image: githubLogo }
];

const About = () => {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <p className="intro">
        I'm a driven and passionate developer trained as a full-stack developer at <strong>WeThinkCode_</strong>. I specialize in modern technologies and frameworks, and I thrive on building efficient, scalable, and user-friendly applications.
      </p>

      <div className="skills-wrapper">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
