import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-5 col-md-6 my-auto">
          <div
            className="footer-widget__column footer-widget__about"
            
          >
            <div className="footer-widget__title">
              <h3>About</h3>
            </div>
            <div className="footer-widget_about_text">
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Nulla placerat
                posuere dui. Pellentesque venenatis sem non lacus ac auctor.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div
            className="footer-widget__column footer-widget__link"
           
          >
            <div className="footer-widget__title">
              <h3>Explore</h3>
            </div>
            <ul className="footer-widget__links-list type2 list-unstyled">
              <li>
                <Link to="about.html">About Us</Link>
              </li>
              <li>
                <Link to="service.html">Services</Link>
              </li>

              <li>
                <Link to="farmers.html">Meet the Farmers</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div
            className="footer-widget__column footer-widget__contact"
            
          >
            <div className="footer-widget__title">
              <h3>Contact</h3>
            </div>
            <div className="footer-widget_contact">
              <p>
                66 Broklyn Street, New Town
                <br />
                DC 5752, New Yrok
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
