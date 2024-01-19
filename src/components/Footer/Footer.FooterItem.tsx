import React from "react";
import {FooterItemProps} from './Footer.types'

export const FooterItem: React.FC<FooterItemProps> = ({ item }) => {
  return (
    <li className="footer__list--item">
      <a href="" className="footer__list--link">
        {item}
      </a>
    </li>
  );
}