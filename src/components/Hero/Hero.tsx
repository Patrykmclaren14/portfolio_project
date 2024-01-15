import React, { useState } from "react"
import './Hero.styles.scss'

export const Hero = () => {
  const [isNameLoading, setIsNameLoading] = useState(false);
  const [isProffession, setIsProffessionLoading] = useState(false);

  setTimeout(() => {
    setIsNameLoading(true)
  }, 2000)

  setTimeout(() => {
    setIsProffessionLoading(true)
  }, 4000)

  return (
    <div className="hero">
      <h1 className="hero__headline">welcome</h1>
      <h1 className="hero__title name">Patryk Wierzbowski</h1>
      {isNameLoading && <h1 className="hero__title proffession">Full Stack Developer</h1>}
      {isProffession && <button className="button hero__button">Get to know me</button>}
      <div className="cosmonaut"></div>
    </div>
  )
}

