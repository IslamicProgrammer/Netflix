import { Facebook, Instagram, YouTube } from '@material-ui/icons';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__body">
        <div className="footer__links">
          <Facebook />
          <Instagram />
          <YouTube />
        </div>
        <div className="footer__items">
          <div className="footer__item">
            <h4>Audio</h4>
            <h4>Subtitres</h4>
            <h4>Term and Conditions</h4>
          </div>
          <div className="footer__item">
            <h4>Sound Info</h4>
            <h4>Vacancy</h4>
            <h4>Licence</h4>
          </div>
          <div className="footer__item">
            <h4>Help</h4>
            <h4>Faq</h4>
            <h4>Cookie Settings</h4>
          </div>
        </div>
      </div>
      <div className="footer__info">
        <h3>1997 - {new Date().getFullYear()} Netflix Inc</h3>
      </div>
    </div>
  );
};

export default Footer;
