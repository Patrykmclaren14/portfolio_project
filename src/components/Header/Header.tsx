import React from "react";
import './Header.styles.scss'
import {Navbar} from "../Navbar/Navbar";
import {Hero} from "../Hero/Hero";

export const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <Hero />
    </header>
  )
}
//  
export default Header;
