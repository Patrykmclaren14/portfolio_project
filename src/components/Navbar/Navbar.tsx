import React from "react";
import './Navbar.styles.scss'
import githubIcon from '../../assets/imgs/navbar-icon-github.svg';
import linkedinIcon from '../../assets/imgs/navbar-icon-linkedin.svg';
import {NavItem} from "./Navbar.NavItem";
import NAV_ITEMS from '../../utils/navItems';

export const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {NAV_ITEMS.map(item => (
          <NavItem item={item} key={item} />
          ))}
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