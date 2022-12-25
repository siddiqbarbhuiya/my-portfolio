import React from "react";
import "../Styles/Projects.css";
import ProjectItems from "../Components/ProjectItems";
import { ProjectList } from "../helpers/ProjectList";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItems
              id={idx}
              name={project.name}
              image={project.image}
              skills={project.skills}
              url={project.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
