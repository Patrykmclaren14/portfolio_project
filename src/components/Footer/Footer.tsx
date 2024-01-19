import React from "react"
import './Footer.styles.scss'
import NAV_ITEMS from '../../utils/navItems';
import { FooterItem } from "./Footer.FooterItem";

export const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__line"></span>
      <nav className="footer__nav">
        <ul className="footer__list">
          {NAV_ITEMS.map(item => (
            <FooterItem key={item} item={item} />
          ))}
        </ul>
      </nav>
    </footer>
  )
}