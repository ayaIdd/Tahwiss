import React, { useState } from "react";
import './NavBar.css';
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import logo from './logo.png'
import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState(false);

  const showNav = () => {
    setActive(true);
  };

  const removeNavbar = () => {
    setActive(false);
  };

  return (
    <section className="navBarsection">
      <header className="header flex">
        

        <div className="logo Div">
          <a href="#" className="logo flex">
            <img src={logo} alt="Logo" className="logoImage" /> 
             
          </a>
          <p>Visit Algeria</p>
          
        </div>
        <div className="navBar">
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Places to go
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Practical Tips
              </a>
            </li>
            <li className="navItem">
            <Link to='/thingstodo' className="navLink">Things to do</Link>
            </li>
          </ul>
        </div>

        <div className="navBar">
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Profile
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Likes
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Search
              </a>
            </li>
          </ul>
        </div>

       

        
      </header>
    </section>
  );
};

export default NavBar;
