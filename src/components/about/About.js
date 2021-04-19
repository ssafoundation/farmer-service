import React from 'react';
import './about.css';
import aboutLeft from './img/about_image.jpg';

const About = () => {
    return (
        <div className='about-area-wrap'>
            <div className="container">
                <div className="about-title">
                    <h2>কৃষক পরিচিতি</h2>
                </div>
               <div className="row">
                   <div className="col-md-5">
                       <div className="about-image">
                           <img className='img-fluid' src={aboutLeft} alt=""/>
                       </div>
                   </div>
                   <div className="col-md-7 my-auto">
                       <div className="about-content">
                            {/* <h2></h2> */}
                            <p> বাংলাদেশ একটি কৃষি প্রধান দেশ। এ দেশের প্রায় ৮০% লোক এখনও কৃষি কাজের সহিত জড়িত। কৃষির উন্নতিই দেশের উন্নতি। কৃষক বাঁচলে দেশ বাঁচবে। কৃষক তথা দেশের উন্নতির লক্ষ্যকে সামনে রেখেই ১৯৬১ সালের ১৬ অক্টোবর তৎকালীন ইপিএডিসি প্রতিষ্ঠা লাভ করে। বর্তমানে যা বিএডিসি নামে পরিচিত করে।</p>
                       </div>
                   </div>
               </div>
            </div>
            
        </div>
    );
};

export default About;