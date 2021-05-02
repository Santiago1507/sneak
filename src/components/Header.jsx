import React from 'react';
import Logo from '../assets/statics/logo.png';
import logoMobile from '../assets/statics/logoMobile.png';

import '../assets/styles/components/Header.scss';

const Header = ({ children }) => {
  setTimeout(() => {
    const collapse = document.getElementById('collapse');
  }, 10);

  const handleClick = () => {
    const contentMenu = document.getElementById('menu');

    if (collapse.className !== 'header__collapse-menu collapse') {
      collapse.classList.add('collapse');
      contentMenu.style.transform = 'translate(0px)';
      contentMenu.style.transition = 'transform .7s';
      
    } else {
      collapse.classList.remove('collapse');
      contentMenu.style.transform = 'translate(460px)';
      contentMenu.style.transition = 'transform .7s';
    }
  };

  return (
    <header className="header">
      <div className="header__collapse-menu" id="collapse" onClick={handleClick}></div>
      <a href="/">
        <img className="header__img" src={Logo} alt="Sneak" />
        <img className="header__img mobile" src={logoMobile} alt="Sneak" />
      </a>
      {children}
    </header>
  );
};

export default Header;
