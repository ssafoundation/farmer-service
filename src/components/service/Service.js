import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './service.css';

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get('https://mighty-tor-42350.herokuapp.com/services')
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const history = useHistory();

  const handleServiceClick = (id) => {
    history.push(`/dashboard/book/${id}`);
  };

    return (
      <div className="service-main-wrap">
        <div className="container">
          <div className="service-title">
            <h2>আমাদের সেবা</h2>
          </div>
          <div className="service-content">
            <div className="row">
              {services.map((farmer) => (
                <div key={farmer._id} className="col-md-4">
                  <div className="service-item">
                    <img src={farmer.imageURL} alt="" />
                    <h4>{farmer.name}</h4>
                    <p>{farmer.description}</p>
                    <h5>{farmer.price}</h5>
                    <button
                      onClick={() => handleServiceClick(farmer._id)}
                      className="btn btn-info"
                    >
                     Get Service
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Service;