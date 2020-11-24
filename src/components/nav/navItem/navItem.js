
import React from 'react';
import {NavLink} from 'react-router-dom';

import './navItem.styles.scss';


const NavItem = () => (

  <div className="navItem">
        <NavLink exact activeClassName="active" to="/">HOME</NavLink>
        <NavLink activeClassName="active" to="/about">ABOUT</NavLink>
  </div>

);

export default NavItem;
