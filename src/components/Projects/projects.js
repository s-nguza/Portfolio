import React from 'react';
import './projects.css';

const projects = [
  {
    title: 'Weather App',
    description: 'A simple app to check weather by city using OpenWeather API.',
    githubLink: 'https://github.com/yourusername/weather-app',
  },
  {
    title: 'Todo List',
    description: 'Manage your daily tasks efficiently with a React-powered todo list.',
    githubLink: 'https://github.com/yourusername/todo-list',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio showcasing my skills and projects.',
    githubLink: 'https://github.com/yourusername/portfolio',
  }
];

const Project = () => {
  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
