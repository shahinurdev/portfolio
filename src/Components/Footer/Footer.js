import React from 'react';
const Footer = () => {
  return (
   
     <footer className="bg-light text-center text-lg-start mt-3">

<div className="container p-4">
 
  <div className="row">
   
    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
      <h5 className="text-uppercase">Footer Content</h5>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
        molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
        voluptatem veniam, est atque cumque eum delectus sint!
      </p>
    </div>
  

    
    <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
      <h5 class="text-uppercase">Links</h5>

      <ul class="list-unstyled mb-0">
        <li>
          <a href="https://www.facebook.com/md.soron.50" target="_blank"  rel="noreferrer" className="text-dark">FaceBook</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/md-shahinur-khan-b549ab202/" target="_blank"  rel="noreferrer" className="text-dark">Linkedin</a>
        </li>
        <li>
          <a href="https://github.com/shahinurdev" target="_blank"  rel="noreferrer" className="text-dark">Github</a>
        </li>
       
      </ul>
    </div>
   
   
  </div>

</div>



<div className="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
  © 2021 Copyright: Md Shahinur Khan

</div>

</footer>



  );
};

export default Footer;