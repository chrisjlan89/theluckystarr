import React, { Component } from "react";
import { Link } from 'react-router-dom';

import M from 'materialize-css';
import './Nav.css'

class Nav extends Component {

  componentDidMount() {
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
}


render(){
  return (
    <div>
    <nav>
    <div class="nav-wrapper">
    <div className="col l2 offset-s2  offset-l3 col s2">
            
  
    
    </div>
    <a href="#" className="brand-logo brand-text custom-brand-text"  >The Lucky Starr</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><img className="mob-nav" src={process.env.PUBLIC_URL + "assets/img/hamburger-menu.png"}/></a>
      <ul class="right hide-on-med-and-down">
      <li className="text-color"><Link className={window.location.pathname === "/" ? "active" : ""}  to="/">   Home </Link></li>
      <li className="text-color"><Link className={window.location.pathname === "/cabin" ? "active" : ""}  to="/cabin">   Cabin Rental </Link></li>
      <li className="text-color"><Link className={window.location.pathname === "/venue" ? "active" : ""}  to="/venue">  The Venue </Link></li>
      <li className="text-color"><Link className={window.location.pathname === "/form" ? "active" : ""} to="/form">   Contact Us </Link></li>
      </ul>
      <a href ="https://www.facebook.com/luckystarr6086/">
      <img className ="social-container" src={process.env.PUBLIC_URL + "assets/img/Facebook_icon_20132.png"}/>
      </a>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
  <li className="text-color"><Link className={window.location.pathname === "/" ? "active" : ""}  to="/">   Home </Link></li>
  <li className="text-color"><Link className={window.location.pathname === "/cabin" ? "active" : ""}  to="/cabin">   Cabin Rental </Link></li>
  <li className="text-color"><Link className={window.location.pathname === "/venue" ? "active" : ""}  to="/venue">  The Venue </Link></li>
  <li className="text-color"><Link className={window.location.pathname === "/form" ? "active" : ""} to="/form">   Contact Us </Link></li>
  </ul>
   
          
      </div>

      
  )
}
};

export default Nav;




// <nav id = "custom-nav-style">
// <div className="nav-wrapper ">
  
//   <ul id=" " className="right  custom-link-style sidenav-fixed">
//   <a href="#" className="brand-logo brand-text custom-brand-text"  >The Lucky Starr</a>
//   <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
//   <ul class="right hide-on-med-and-down">
  
  // <li className="text-color"><Link className={window.location.pathname === "/" ? "active" : ""}  to="/">   Home </Link></li>
  // <li className="text-color"><Link className={window.location.pathname === "/cabin" ? "active" : ""}  to="/cabin">   Cabin Rental </Link></li>
  // <li className="text-color"><Link className={window.location.pathname === "/venue" ? "active" : ""}  to="/venue">  The Venue </Link></li>
  // <li className="text-color"><Link className={window.location.pathname === "/form" ? "active" : ""} to="/form">   Contact Us </Link></li>
//   </ul>
//   </ul>
  
//   </div>
  
// </nav>