import { useEffect, useRef, useState } from 'react';
import './about.css';
import pythonLogo from '../../asserts/python.svg';
import javaLogo from '../../asserts/java.png';
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
  const introRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const currentRef = introRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); // reset so it replays
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const introText =
    "I'm a driven and passionate developer trained as a full-stack developer at WeThinkCode_. I specialize in modern technologies and frameworks, and I thrive on building efficient, scalable, and user-friendly applications.";
  const words = introText.split(' ');

  return (
    <div className="about-section">
      <h2 className='abouttitle'>About Me</h2>
      <p className="intro" ref={introRef}>
        {words.map((word, index) => (
          <span
            key={index}
            className={`intro-word ${visible ? 'visible' : ''}`}
            style={{
              animationDelay: `${index * 0.05}s`
            }}
          >
            {word}&nbsp;
          </span>
        ))}
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
