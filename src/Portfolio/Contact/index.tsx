import React, { useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import ButtonMailto from "./ButtonMailto/ButtonMailto";

function Contact() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="section connect">
      <h1 className="p-header">Let's Connect!</h1>
      <div className="c-intro">
        <p>
          Thank you for being here on my portfolio website - I had lots of fun designing and coding it from scratch. I hope you've been enjoying looking through it and learning about me!
        </p>
        <p>
          Building on my interests and experiences across academia, internships, and extracurriculars, I am now seeking a full-time role where I can contribute at a greater scale and grow as both a software developer and a designer. After graduating in April of 2026, I am hoping to work in the Bay Area, California or the Greater Boston Area, Massachusetts.
        </p>
        <p>
          I'd love to connect with you - go ahead and reach out! :)
        </p>
      </div>
      <br/>
      <div className="contact-info">
        <Link to="https://www.linkedin.com/in/adalia-lee" target="_blank" rel="noopener noreferrer" className="contact-row" style={{ textDecoration: "none" }}>
            <img src="/adalia-lee/media/linkedin.svg" className="icon" alt="linkedin"></img>
            <p className="c-sub">LinkedIn</p>
        </Link>
        <ButtonMailto mailto="adalialee@gmail.com">
          <div className="contact-row">
            <img src="/adalia-lee/media/email.svg" alt="email"/>
            <p className="c-sub">adalialee@gmail.com</p>
          </div>
        </ButtonMailto>
        <ButtonMailto mailto="lee.adal@northeastern.edu">
          <div className="contact-row">
            <img src="/adalia-lee/media/email.svg" alt="email"/>
            <p className="c-sub">lee.adal@northeastern.edu</p>
          </div>
        </ButtonMailto>
      </div>
    </div>
  )
}

export default Contact;