import React from "react";

const HeaderTop = () => {
  return (
    <>
      <div className="topbar-two">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo-box-two">
                <a href="index2.html" className="main-nag__logo">
                  <h2>Farmer</h2>
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <ul className="header-top-item">
                <li>
                  <div className="address_icon">
                    <span className="icon-placeholder"></span>
                  </div>
                  <div className="address_title">
                    <h6>Address</h6>
                    <p>66 Broklyn St. New York</p>
                  </div>
                </li>
                <li>
                  <div className="address_icon">
                    <span className="icon-phone-call"></span>
                  </div>
                  <div className="address_title">
                    <h6>Phone</h6>
                    <p>
                      <a href="tel:123456789">66 Broklyn St. New York</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="address_icon">
                    <span className="icon-clock"></span>
                  </div>
                  <div className="address_title">
                    <h6>Timings</h6>
                    <p>Mon - Fri 09:00am - 07:00pm</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
