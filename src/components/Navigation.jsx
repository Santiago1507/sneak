import React from 'react';

import '../assets/styles/components/Navigation.scss';

const Navigation = ({ children }) => {
  const handleClickMenu = (e) => {
    console.log(e.target.innerHTML);
  };
  return (
    <div className="header__menu" id="menu">
      <ul>
        <li><a href="#grid-20px" className="active" onClick={handleClickMenu}>All</a></li>
        <li><a href="#grid" onClick={handleClickMenu}>Branding</a></li>
        <li><a href="#grid" onClick={handleClickMenu}>Web</a></li>
        <li><a href="#grid" onClick={handleClickMenu}>Photography</a></li>
        <li><a href="#grid" onClick={handleClickMenu}>App</a></li>
        {children}
      </ul>
    </div>
  );
};

export default Navigation;
