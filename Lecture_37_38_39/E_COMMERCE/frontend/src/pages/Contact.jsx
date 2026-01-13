import React, { useContext } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import '../style/Contact.css';
import { ShopContext } from '../context/ShopContext';

const Contact = () => {
  const { navigate } = useContext(ShopContext);
  return (
    <div className="contact-container">

      <div className="contact-title">
        <Title text1="CONTACT" text2="US" />
      </div>

      <div className="contact-content">
        <img
          src={assets.contact_img}
          alt="Contact"
          className="contact-image"
        />

        <div className="contact-text">
          <p className="contact-heading">Our Store</p>

          <p className="contact-info">
            Panipat <br />
            Haryana, India-132103
          </p>

          <p className="contact-info">
            Tel: +91 7206290968 <br />
            Email: mohitahlawat912@gmail.com
          </p>
           <div className='btn-container'>
          <button className="contact-btn" onClick={()=>{
            navigate("https://www.linkedin.com/in/mohit-kumar-79866a264/")
          }}>
            Linkedin
          </button>
          <button className="contact-btn" onClick={()=>{
            navigate("https://github.com/Mohit-Kumar-3114")
          }}>
            GitHub
          </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;