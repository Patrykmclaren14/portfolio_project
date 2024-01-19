import React, { useEffect } from "react"
import './AboutMe.styles.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const AboutMe = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <section className="section">
      <h1 className="title" data-aos="fade-up">About Me</h1>
      <p className="paragraph about-me__paragraph" data-aos="fade-up">
Hi! I&apos;m Patryk Wierzbowski, a Full-stack Developer.
I&apos;ve been immersed in the fascinating world of programming since a very young age.
I started my journey at the age of 13, creating simple websites using HTML and CSS. Over time,
I delved deeper into the intricacies of programming, exploring new technologies such as C++, Python, and JavaScript.
This passionate interest led me to be a source of concern for my parents many times, as I worked on projects until late into the night.
My sociable nature makes it easy for me to connect with other people. Diverse interests, including sports, automotive, business, and influencer marketing,
allow me to find common ground with individuals with various areas of interest.
Exceptionally strong ambition is my driving force, and the belief that nothing is impossible accompanies me every day.
I am motivated not only by the fascination with coding but also by the constant search for new technological solutions and development in the programming field.</p>
    </section>
  )
}