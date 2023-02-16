import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.png";
import axios from "axios";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <ul
              className={Mobile ? "navMenu-list" : "flexSB"}
              onClick={() => setMobile(false)}
            >
              <Link to="/">Home</Link>
              <Link to="/series">Series</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/pages">Pages</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contact">Contact</Link>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
          <div className="account flexSB">
            <i className="fa fa-search"></i>
            <div className="bell">
              <i
                className="fa fa-bell "
                onClick={() => setNotification(!notification)}
              ></i>
              <div className={notification ? "notiMenu" : "hideNotiMenu"}>
                <div className={notification ? "showNotiBtns" : "hideNotiBtns"}>
                  <button>Check out!</button>
                </div>
              </div>
            </div>
            <i className="fa fa-user"></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

/* fa fa-bars makes a 3 bars button */
// className='fa fa-bell' makes a bell button
// className='fa fa-user' person button
//link to ="/#" directs to another page
