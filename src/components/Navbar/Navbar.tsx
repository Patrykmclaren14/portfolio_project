import React from "react";
import './Navbar.styles.scss'
import githubIcon from '../../assets/imgs/navbar-icon-github.svg';
import linkedinIcon from '../../assets/imgs/navbar-icon-linkedin.svg';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><a className="nav__item--link" href="#">Home</a></li>
        <li className="nav__item"><a className="nav__item--link" href="#">About</a></li>
        <li className="nav__item"><a className="nav__item--link" href="#">Tech Stack</a></li>
        <li className="nav__item"><a className="nav__item--link" href="#">Projects</a></li>
        <li className="nav__item"><a className="nav__item--link" href="#">Contact</a></li>
      </ul>
      <ul className="nav__list">
        <li className="nav__icon">
          <a href="#">
            <img src={githubIcon} alt="github-icon" />
          </a>
        </li>
        <li className="nav__icon">
          <a href="#">
            <img src={linkedinIcon} alt="github-icon" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;