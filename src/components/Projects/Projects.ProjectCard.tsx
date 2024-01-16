import React from "react"
import { ProjectProps } from "./Projects.types"

export const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project">
      <div className="project__image"></div>
      <div className="project__container">
      <h1 className="project__title gradient-text">{project.title}</h1>
      <p className="project__headline">{project.technologies}</p>
        <p className="project__paragraph">{project.description}</p>
        <div className="project__links">
          <button className="button">Demo</button>
          <button className="button">Code</button>
      </div>
    </div>
  </div>
  )
}