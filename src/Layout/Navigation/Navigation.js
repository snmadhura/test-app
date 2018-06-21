import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
//import Aux from '../../Auxilliary/Auxilliary';

const navigation = (props) =>{
 return(
    <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
      <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
    <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
        <NavigationItems />
        </ul>
      </div>
    </div>
  </nav>
 );

  
}

export default navigation;