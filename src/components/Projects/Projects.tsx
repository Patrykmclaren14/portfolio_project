import React, { useEffect } from "react"
import '../../App.styles.scss'
import './Projects.styles.scss'
import { ProjectCard } from './Projects.ProjectCard';
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Projects = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  const projects = [
    {url: 'url', title: 'Layout Dia', technologies: 'HTML, SCSS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio praesentium ipsum doloribus. Eum dolores quasi odit sequi natus recusandae corrupti deserunt quia corporis consequuntur, incidunt dolorem beatae reiciendis repellat?'},
    {url: 'url', title: 'Layout Dia', technologies: 'HTML, SCSS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio praesentium ipsum doloribus. Eum dolores quasi odit sequi natus recusandae corrupti deserunt quia corporis consequuntur, incidunt dolorem beatae reiciendis repellat?'},
    {url: 'url', title: 'Layout Dia', technologies: 'HTML, SCSS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio praesentium ipsum doloribus. Eum dolores quasi odit sequi natus recusandae corrupti deserunt quia corporis consequuntur, incidunt dolorem beatae reiciendis repellat?'}
  ]
  return (
    <section className="section">
      <h1 className="title" data-aos="fade-up">Projects</h1>
      <p className="paragraph projects__paragraph" data-aos="fade-up">Things I’ve built so far</p>
      <article className="projects" data-aos="fade-up">
        {projects.map(project => (
          <ProjectCard key={project.url} project={project} />
        ))}
      </article>
    </section>
  )
}