import React from 'react';
import './About.css'
import shoron from '../../images/shahin.jpg'

const About = () => {
    return (
        <section  className="allSection text-center text-lg-start mt-5">
             <h1>Who am I</h1>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                    <img className="img-fluid rounded img-responsive" src={shoron} alt=""/>

                </div>
                <div className="col-lg-8 col-md-12 mb-4 mb-md-0">
                    <p>
                       The name’s Md Shahinur Khan. I'm a web developer based in Mymensingh, Bangladesh.
                    </p>
               
                <p>
                  JavaScript my programming language, React is my strength framework. I love coding and programming. I can't get up without finishing work, it's my weakness point.
                </p>
                </div>
            </div>
        </div>

    </section>
)
    
};

export default About;