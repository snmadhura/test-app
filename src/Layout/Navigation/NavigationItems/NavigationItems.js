import React from 'react';
import Aux from '../../../Auxilliary/Auxilliary';

const navigationItems = () =>{
return(    
    <Aux>
    <li className="nav-item mx-0 mx-lg-1">
    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
  </li>
  <li className="nav-item mx-0 mx-lg-1">
    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
  </li>
  <li className="nav-item mx-0 mx-lg-1">
    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
  </li>
  </Aux>
);
}

export default navigationItems;