import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import github from "../../images/github.png";
import playstore from "../../images/playstore.png";
import appstore from "../../images/app-store.png";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="box">
            <ul className="flex">
              <li>Terms of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>
              &#169; 2022 NETFLIX. All Rights Reserved. All videos and shows on
              this platform are trademarks of, and all related images and
              content are the property of, NETFLIX Inc. Duplication and copy of
              this is strictly prohibited. All rights reserved
            </p>
          </div>
          <div className="follow">
            <span>Follow Us</span>
            <div className="follow-links">
              <a href="https://www.facebook.com">
                <img src={facebook} alt="/" />
              </a>
              <a href="https://www.instagram.com">
                <img src={instagram} alt="/" />
              </a>
              <a href="https://www.twitter.com">
                <img src={twitter} alt="/" />
              </a>
              <a href="https://www.github.com">
                <img src={github} alt="/" />
              </a>
            </div>
          </div>
          <div className="follow downloads">
            <span>NETFLIX App</span>
            <div className="follow-links">
              <a href="https://www.playstore.com">
                <img src={playstore} alt="/" />
                <span>Google Play Store</span>
              </a>
              <a href="https://www.appstore.com">
                <img src={appstore} alt="/" />
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
