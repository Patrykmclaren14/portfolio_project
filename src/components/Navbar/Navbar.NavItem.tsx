import React from "react";
import NavItemProps from "./Navbar.types";

export const NavItem: React.FC<NavItemProps> = (item) => {
  return (
    <li className="nav__item"><a className="nav__item--link" href="#">{item.item}</a></li>
  )
}

