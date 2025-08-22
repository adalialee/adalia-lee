import React, { useEffect } from 'react';
import "./index.css";
import Cards from '../Cards';

function Home() {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <div>
            <div className="section">
                <div className="intro">
                    <img src="/adalia-lee/media/profile.png" alt="profile" className="img-fluid pfp" loading="lazy" />
                    <div className="intro-content">
                        <h2 className="intro-header">Hi, I’m Adalia!</h2>
                        <h5>
                            I’m a fourth-year Computer Science and Design student concentrating in Interaction Design at Northeastern University.
                        </h5>
                        <p className="disappearing-text">
                            I have been gathering valuable experience in software development, full-stack web and app development, and product design. Ultimately, I want to solidify my career in CS and design because they give me the tools to design, develop, and implement meaningful solutions for people to use. I had a lot of fun designing and coding this website from scratch - I hope you enjoy exploring my projects and interests!
                        </p>
                    </div>
                </div>
                <p className="reappearing-text">
                    I have been gathering valuable experience in software development, full-stack web and app development, and product design. Ultimately, I want to solidify my career in CS and design because they give me the tools to design, develop, and implement meaningful solutions for people to use. I had a lot of fun designing and coding this website from scratch - I hope you enjoy exploring my projects and interests!
                </p>
            </div>
            <Cards/>
        </div>
    );
}

export default Home;