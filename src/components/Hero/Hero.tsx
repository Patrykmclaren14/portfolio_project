import React, { useEffect, useState } from "react"
import './Hero.styles.scss'
import '../../App.styles.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Hero = () => {
  const [isNameLoading, setIsNameLoading] = useState(false);
  const [isProffession, setIsProffessionLoading] = useState(false);

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  setTimeout(() => {
    setIsNameLoading(true)
  }, 2000)

  setTimeout(() => {
    setIsProffessionLoading(true)
  }, 4000)

  return (
    <div className="hero">
      <h1 className="gradient-text hero__headline" data-aos="fade-up">welcome</h1>
      <h1 className="hero__title name" data-aos="fade-up">Patryk Wierzbowski</h1>
      {isNameLoading && <h1 className="hero__title proffession" data-aos="fade-up"><span className="gradient-text">I&apos;m</span> Full Stack Developer</h1>}
      {isProffession && <button className="button hero__button">Get to know me</button>}
      <div className="cosmonaut" data-aos="fade-up"></div>
    </div>
  )
}

