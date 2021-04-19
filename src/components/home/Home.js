import React from 'react';
import About from '../about/About';
import Testimonials from '../client/Testimonials';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import FooterBottom from '../footer/FooterBottom';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Service from '../service/Service';


const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <About/>
            <Service/>
           <Testimonials/>
            <Contact/>
            <Footer/>
            <FooterBottom/>
        </>
    );
};

export default Home;