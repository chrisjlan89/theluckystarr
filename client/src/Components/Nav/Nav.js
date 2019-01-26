import React, { Component } from "react";
import { Link } from 'react-router-dom';

import M from 'materialize-css';
import './Nav.css'

class Nav extends Component {

  componentDidMount() {
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  //   let element = document.querySelector('.dropdown-trigger');
  //  this.element = element;
   
  //   var instance = M.Dropdown.init(element);
  });
}


render(){
  return (
    <div>
    <nav>
    <div className="nav-wrapper">
    <div className="col l2 offset-s2  offset-l3 col s2">
  
  
    
    </div>
    <a href="#" className="brand-logo brand-text custom-brand-text"  >The Lucky Starr</a>
      <a href="#"  className="sidenav-trigger sidenav-close"><img className="mob-nav" src={process.env.PUBLIC_URL + "assets/img/hamburger-menu.png"}/></a>
      <ul className="right hide-on-med-and-down">
      <li className="text-color " data-target="slide-out"><Link className={window.location.pathname === "/" ? "active" : ""}  to="/">   Home </Link></li>
      <li className="text-color " ><Link className={window.location.pathname === "/cabin" ? "active" : ""}  to="/cabin">   Cabin Rental </Link></li>
      <li className="text-color "><Link className={window.location.pathname === "/venue" ? "active" : ""}  to="/venue">  The Venue </Link></li>
      <li className="text-color"><Link data-target="dropdown1" className={window.location.pathname === "/form" ? "active" : "dropdown-trigger"} to="/form">   Contact Us </Link></li>
      </ul>
      <a href ="https://www.facebook.com/luckystarr6086/">
      <img className ="social-container" src={process.env.PUBLIC_URL + "assets/img/Facebook_icon_20132.png"}/>
      </a>
    </div>
  </nav>

  <ul className="sidenav sidenav-close" id="mobile-demo">
  <li className="text-color"><Link className={window.location.pathname === "/" ? "active" : ""}  to="/">   Home </Link></li>
  <li className="text-color"><Link className={window.location.pathname === "/cabin" ? "active" : ""}  to="/cabin">   Cabin Rental </Link></li>
  <li className="text-color"><Link className={window.location.pathname === "/venue" ? "active" : ""}  to="/venue">  The Venue </Link></li>
  <li className="text-color"><Link data-target="dropdown1" className= {window.location.pathname === "/form" ?  'active' : "dropdown-trigger"} to="/form ">   Contact Us </Link></li>
  </ul>

  <ul id="dropdown1" class="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li class="divider"></li>
  <li><a href="#!">three</a></li>
</ul>
   
          
      </div>

      
  )
}
};

export default Nav;




