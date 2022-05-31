import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
   <footer id="footer">

  <div className = "leftFooter">
   <h4>About Us</h4>
   <a href = "http://www.banasthali.org/banasthali/wcms/en/home/" >Banasthali Vidyapith</a>
   <p>BVmart is created for the convenient online shopping of goods for Banasthali Vidyapith students</p>
  </div>

  <div className = "midFooter">
    <h1>BVmart</h1>
    <p>Banasthali students convenience is ours first priority</p>
    <p>Copyrights 2022 @Banasthali Vidyapith</p>
  </div>
    
  <div className = "rightFooter">
    <h4>Follow Us </h4>
    <a href = "https://www.facebook.com/banasthali.org" >Facebook</a>
    <a href = "https://www.linkedin.com/school/banasthali-vidyapith/" >Linkedin</a>
  </div>

   </footer> 
  );
}

export default Footer;