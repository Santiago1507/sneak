import React from 'react';
import GoogleIcon from '../assets/statics/google-icon.png';
import TwittereIcon from '../assets/statics/twitter-icon.png';

import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <p> © 2016 - Sneak All Right Reserved</p>
    <div className="footer__social">
      <img src={GoogleIcon} alt="" />
      <img src={TwittereIcon} alt="" />
      <img src={GoogleIcon} alt="" />
      <img src={TwittereIcon} alt="" />
    </div>
  </footer>
);

export default Footer;
