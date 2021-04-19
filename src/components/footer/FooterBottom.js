import React from "react";
import { Link } from "react-router-dom";
import './footer.css';
const FooterBottom = () => {
  return (
    <>
      <div className="site-footer_bottom ">
        <div className="container">
          <div className="footer-bottom-wrap">
            <div className="site-footer_bottom_copyright">
              <p>
                @ All copyright 2020, <Link to="#">কৃষক সেবা.com</Link>
              </p>
            </div>
            <div className="site-footer_bottom_menu">
              <ul>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms of Use</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
