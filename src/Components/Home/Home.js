import React from 'react';
import './Home.css'
import shoron from '../../images/IMG_20180301_171906.jpg'
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';
import About from '../About/About';
import Contact from '../Contact/Contact';


const Home = () => {
    let url = 'https://drive.google.com/file/d/1v-pKltGhu7ZB3OwnxZqdu0iX5cqn0eq4/view?usp=sharing'
    return (
      <section>
        <section className="home">
          <div className="title">
            <h1>
              <p>Hi,</p>
              <p>I am Md Shahinur Khan</p>
              <p>A web developer</p>
              
            </h1>
              <button>
                 <a target="_blank" href={url} rel="noreferrer">Resume</a>
            </button>
            
          </div>
          <div className="person">
           <img src={shoron} alt="shoron"/>
           
          </div>
        </section>
       <Skills></Skills>
       <Projects></Projects>
       <Blogs></Blogs>
       <About></About>
       <Contact></Contact>
        </section>  
      );
};

export default Home;