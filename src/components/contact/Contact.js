import React from "react";
import './contact.css';
const Contact = () => {
  return (
    <div className="container">
      <div className="get_quote_one_form_inner">
        <h2>যোগাযোগ করুন</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="input_box">
              <input type="text" name="name" placeholder="Full name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input_box">
              <input type="text" name="email" placeholder="Email Address" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input_box">
              <input type="text" name="phone" placeholder="Phone" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input_box">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="input_box">
              <textarea name="message" placeholder="Write Message"></textarea>
            </div>
          </div>
          <div className="col-md-12">
            <div className="input_box">
              <button type="submit" className="thm-btn get_quote__btn">
                Send a Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
