import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ title, subtitle }) => {
  const menus = [
    'inicio',
    'foto producto',
    'moda',
    'community',
    'sobre mí',
    'contacto',
  ];

  const returnUrl = (e) => {
    if (e === 'foto producto') return 'productos';
    if (e === 'sobre mí') return 'about';
    else return e;
  };

  return (
    <nav className="nav">
      <h1>{title.toUpperCase()}</h1>
      <h2>{subtitle.toUpperCase()}</h2>
      <ul className="header-menu">
        {menus.map((e) => (
          <li key={e}>
            <Link to={`/${returnUrl(e)}`}>{e.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
