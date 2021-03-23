import React, { useEffect, useState } from 'react';
import './Nav.css';
// asstes
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
import { useHistory } from 'react-router-dom';

const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.replace('/')}
          src={logo}
          className="nav__logo"
          alt="logo"
        />
        <img
          onClick={() => history.push('/profile')}
          src={avatar}
          className="nav__avatar"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
