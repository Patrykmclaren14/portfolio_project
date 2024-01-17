import React from "react";
import './Experience.styles.scss'

interface ExperienceCard {
  img: string;
  name: string;
  position: string;
  time: string;
  workPlace: string;
  description: string;
}

export interface ExperienceCardProps {
  experience: ExperienceCard;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="exp">
      <img src={experience.img} alt="mate-logo" />
      <h1 className="exp__title">{experience.name} <span className="gradient-text">{experience.position}</span></h1>
      <p className="exp__paragraph exp__period">{experience.time}</p>
      <p className="exp__paragraph exp__work-place">{experience.workPlace}</p>
      <p className="exp__description">{experience.description}</p>
    </div>
  )
}