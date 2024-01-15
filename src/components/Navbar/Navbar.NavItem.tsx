import React from "react";
import NavItemProps from "./Navbar.types";

const NavItem: React.FC<NavItemProps> = (item) => {
  console.log(1)
  return (
    <li className="nav__item"><a className="nav__item--link" href="#">{item.item}</a></li>
  )
}

export default NavItem