import React from "react";
import './Header.styles.scss'
import Navbar from "../Navbar/Navbar";

export const Header = () => {
  return (
    <header className="header">
      <Navbar />
    </header>
  )
}

export default Header;
