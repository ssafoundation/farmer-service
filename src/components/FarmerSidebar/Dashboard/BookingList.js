import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Booking from './Booking';
import Sidebar from './Sidebar';

const BookingList = () => {
   const [loggend, setLoggend] = useContext(UserContext);
   const [bookings, setBookings] = useState([]);

   useEffect(() => {
      axios
         .get(`https://mighty-tor-42350.herokuapp.com/bookings?email=${loggend.email}`)
         .then((res) => {
            setBookings(res.data);
         })
         .catch((err) => console.log(err));
   }, [loggend.email]);

   return (
      <Container className="dashboard">
         <Row>
            <Col md={3}>
               <aside className="admin-dashboard-wrap">
                  <Sidebar />
               </aside>
               
            </Col>
            <Col className="pt-9" md={9}>
               <div className="manage-books-title py-3">
                  <h3>আপনি সেবা গ্রহন করেছেন</h3>
               </div>
               <Row>
                  {bookings.map((booking) => (
                     <Col md={6} key={booking._id}>
                        <Booking {...booking} />
                     </Col>
                  ))}
               </Row>
            </Col>
         </Row>
      </Container>
   );
};

export default BookingList;
