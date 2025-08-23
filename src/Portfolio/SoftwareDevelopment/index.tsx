import React, { useEffect } from "react";
import { softwareDevelopment } from "../Database";
import { Link } from "react-router-dom";
import "./index.css";

function SoftwareDevelopment() {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <div className="section">
            <h1 className="p-header">Software Development</h1>
            <p className="p-intro">
                I strive to design, develop, and implement meaningful solutions for clients to use. Software engineering gives me the tools to execute my ideas, and I can leverage my background in UI/UX design and user research to build impactful products.
            </p>
            <div className="p-list">
                {softwareDevelopment.map((experience, index) => (
                    <div className="p-experience">
                        <div className="p-top">
                            <div className="p-left">
                                <Link to={`/Software-Development/${experience.id}`} key={index}
                                    style={{textDecoration: "none", color: "var(--primary-dark"}}>
                                    <div className="p-mini-section">
                                        <h3>
                                            {experience.title}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 6L15 12L9 18" stroke="#6A8FE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </h3>
                                    </div>
                                </Link>
                                <div className="p-mini-section">
                                    <p className="subtitle-1">ROLE</p>
                                    <p>{experience.role}</p>
                                </div>
                                <div className="p-mini-section">
                                    <p className="subtitle-1">TIMELINE</p>
                                    <p>{experience.timeline}</p>
                                </div>
                                <div className="p-mini-section">
                                    <p className="subtitle-1">OVERVIEW</p>
                                    <ul>
                                        {experience.overview.map((item, index) => (
                                            <li key={index}>
                                                <p>{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <img src={`/adalia-lee/media/${experience.image}`} alt="wireframe" className="img-fluid" loading="lazy" />
                        </div>
                        <div className="p-tags">
                            {experience.tags.map((tag, index) => (
                                <span key={index} className="p-tag">{tag}</span>
                            ))}
                        </div>                    
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SoftwareDevelopment;