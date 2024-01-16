import React from "react"
import '../../App.styles.scss'
import './Projects.styles.scss'
import { ProjectCard } from './Projects.ProjectCard';

export const Projects = () => {
  const projects = [
    {url: 'url', title: 'Layout Dia', technologies: 'HTML, SCSS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio praesentium ipsum doloribus. Eum dolores quasi odit sequi natus recusandae corrupti deserunt quia corporis consequuntur, incidunt dolorem beatae reiciendis repellat?'},
    {url: 'url', title: 'Layout Dia', technologies: 'HTML, SCSS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio praesentium ipsum doloribus. Eum dolores quasi odit sequi natus recusandae corrupti deserunt quia corporis consequuntur, incidunt dolorem beatae reiciendis repellat?'},
    {url: 'url', title: 'Layout Dia', technologies: 'HTML, SCSS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio praesentium ipsum doloribus. Eum dolores quasi odit sequi natus recusandae corrupti deserunt quia corporis consequuntur, incidunt dolorem beatae reiciendis repellat?'}
  ]
  return (
    <section className="section">
      <h1 className="title">Projects</h1>
      <p className="paragraph projects__paragraph">Things I’ve built so far</p>
      <article className="projects">
        {projects.map(project => (
          <ProjectCard key={project.url} project={project} />
        ))}
      </article>
    </section>
  )
}