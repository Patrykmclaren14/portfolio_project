import React from "react"
import './Experience.styles.scss'
import mate from '../../assets/imgs/mate-logo.svg'
import kodland from '../../assets/imgs/kodland-logo.svg'
import { ExperienceCard } from './Experience.ExperienceCard';

const EXPERIENCE_DATA = [
  { img: mate, name: 'Mate Academy', position: ' | Full Stack Developer', time: 'Sep 2023 - Present', workPlace: 'Remote', description: `

  I create attractive and easy-to-use landing pages that work well on different devices. I use HTML5, CSS3, and Vanilla JS to ensure the code is organized and easy to maintain, reducing errors. I also review code to make sure it meets high-quality standards.

  I collaborate on projects using ReactJS, SASS, TypeScript, and BEM, either on my own or as part of a team. I also build web pages using HTML, SCSS, BEM, and JavaScript.
  
  I've set up servers using Node.js and Express.js, and I've used Sequelize ORM to manage databases. I follow the MVC architecture for server-database interactions, implementing CRUD endpoints.
  
  I've contributed to designing and building informative pages for applications using React and Material UI. In my pursuit of improvement, I've spent over 500 hours practicing coding.` },
  { img: kodland, name: 'Kodland', position: ' | Tutor', time: 'Jun 2023 - Present', workPlace: 'Remote', description: `
  I teach young individuals how to create computer games using programming languages such as Lua and Python. Additionally, I guide them in designing 3D models using graphic programs and game editors like Roblox Studio.
  
  In my role, I engage in conversations with clients to discuss course enrollment, addressing any inquiries or concerns they may have. I strive to provide a positive and supportive environment for learners, encouraging their interest and passion for game development.
  
  As a team leader, I have experience leading groups ranging from 6 to 12 individuals. I focus on promoting collaboration among team members, fostering a positive work environment, and ensuring productivity. My leadership style emphasizes effective communication and teamwork to achieve shared goals in the educational and creative gaming space.` },
];

export const Experience = () => {
  return (
    <section className="section">
      <h1 className="title">Experience</h1>
      <p className="paragraph experience__paragraph">Skill Mastery at Leading Innovators</p>
      <article className="experience">
          {EXPERIENCE_DATA.map(experience => (
            <ExperienceCard key={experience.img} experience={experience} />
          ))}

      </article>
    </section>
  );
};
