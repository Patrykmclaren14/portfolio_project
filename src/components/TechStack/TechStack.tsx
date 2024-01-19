import React, { useEffect } from "react";
import './TechStack.styles.scss';
import { Technology } from "./TechStack.Technology";
import github from '../../assets/imgs/icons/github.svg';
import html from '../../assets/imgs/icons/html.svg';
import js from '../../assets/imgs/icons/js.svg';
import next from '../../assets/imgs/icons/next.svg';
import node from '../../assets/imgs/icons/node.svg';
import python from '../../assets/imgs/icons/python.svg';
import reactIcon from '../../assets/imgs/icons/react.svg';
import redux from '../../assets/imgs/icons/redux.svg';
import sass from '../../assets/imgs/icons/sass.svg';
import ts from '../../assets/imgs/icons/ts.svg';
import tw from '../../assets/imgs/icons/tw.svg';
import vs from '../../assets/imgs/icons/vs.svg';
import AOS from 'aos'
import 'aos/dist/aos.css'

const techIcons = [
  { name: 'github', path: github, alt: 'GitHub' },
  { name: 'html', path: html, alt: 'HTML' },
  { name: 'js', path: js, alt: 'JavaScript' },
  { name: 'next', path: next, alt: 'Next.js' },
  { name: 'node', path: node, alt: 'Node.js' },
  { name: 'python', path: python, alt: 'Python' },
  { name: 'react', path: reactIcon, alt: 'React' },
  { name: 'redux', path: redux, alt: 'Redux' },
  { name: 'sass', path: sass, alt: 'Sass' },
  { name: 'ts', path: ts, alt: 'TypeScript' },
  { name: 'tw', path: tw, alt: 'Tailwind CSS' },
  { name: 'vs', path: vs, alt: 'Visual Studio Code' },
];

export const TechStack = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <section className="section">
      <h1 className="title" data-aos="fade-up">My Tech Stack</h1>
      <p className="paragraph tech-stack__paragraph" data-aos="fade-up">Technologies I’ve been working with recently</p>
      <article className="tech-stack tech-stack--margin" data-aos="fade-up">
        {techIcons.map((tech, index) => (
          <Technology key={index} name={tech.name} path={tech.path} alt={tech.alt} />
        ))}
      </article>
    </section>
  );
};
