import React from 'react';
import bikeBazar from '../../images/Screenshot 2021-05-02 145659.png';
import arrived from '../../images/arrived.png';
import sports from '../../images/sports.png'

const Projects = () => {
    return (
        <section style={{ backgroundColor: '#009B77' }} className="allSection text-center text-lg-start mt-5">
             <h1 className="p-4">Projects</h1>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0 ">
                        <h5> Bike Bazar— <small>A bike selling Application</small>  : <a href="https://bikebazar-53d40.web.app" className="text-warning">Live </a>
                         |  
                        <a className="text-warning" href="https://github.com/shahinurdev/Bike-Bazar">Client code</a> |
                        <a className="text-warning" href="https://github.com/shahinurdev/Bike-Bazar-Server"> Server Code</a></h5>

                        <img className="img-thumbnail  mb-5 mt-2 " src={bikeBazar} alt=""/>
                
                         <p> <strong className="text-white bg-dark">Description</strong>: In this Application, Customers can choose and buy Bikes.
                            The customer can go to the order menu and see what he/she has ordered.
                            Admin can add bikes and remove them.
                            Firebase Auth and MongoDB use the Backend.</p>
                            
                       <p><strong className="text-white bg-dark"> Tools</strong>: Html5, Css3, Bootstrap, JavaScript, React, React-Router,
                        NodeJs, Firebase Auth, Express, MongoDB</p>
                </div>
                <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                    <h5>  Easy Arrived Rides— <small>A vehicle rent application</small> : <a href="https://easy-arrived-rides.web.app/" target="_blank"  rel="noreferrer" className="text-warning">Live</a>| <a href="https://github.com/shahinurdev/Easy-Arrived-Rides" target="_blank" rel="noreferrer" className="text-warning">See Code</a>|</h5>
                   
                    <img className="img-thumbnail mb-4 mt-2" src={arrived} alt=""/>
                       <p> <strong className="text-white bg-dark" >Description</strong>: The user using this application rents a vehicle.
                        Users can log in by clicking by Login Button
                        After rent, the user can see a map of where he/she is going.</p>

                       <p><strong className="text-white bg-dark">Using Technology</strong>:  React, React Dom, React-Bootstraps,
                        Firebase, Firebase-Auth and HTML5, CSS3</p>

                </div>
                  
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0 ">
                        <h5>All Sports Leagues— <small> User can see sports leagues details</small>: <a href="https://objective-albattani-abeae2.netlify.app/" target="_blank"  rel="noreferrer" className="text-warning">Site</a> | <a href="https://github.com/shahinurdev/sport-s-League-" target="_blank" rel="noreferrer" className="text-warning">Code</a>  |</h5>

                        <img className="img-thumbnail mb-4 mt-2" src={sports} alt=""/>

                         <p> <strong className="text-white bg-dark">Description</strong>: Sports lovers would like this application. Using this app sports lovers can see details of their favorite leagues.</p>

                       <p><strong className="text-white bg-dark"> Technology to create</strong>: It's base on ReactJs website, React-Router, Bootstrap, Html and Css3</p>
                </div>
                    </div>
                </div>

       
        </section>
    );
};

export default Projects;