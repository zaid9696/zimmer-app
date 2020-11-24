
import React from 'react';
import {NavLink} from 'react-router-dom';

import NavItem from './navItem/navItem';

import './nav.styles.scss';




const Nav = () => (

  <nav className="nav">
        <div className="nav__logo">
            <NavLink to="/">ZIMMER <span>APP</span></NavLink>
        </div>
        <NavItem />
  </nav>

);


export default Nav;
