import React, { useEffect, useState } from "react";
import { softwareDevelopment } from "../Database";
import { Navigate, Route, Routes, useParams, Link } from "react-router-dom";
import "./index.css";

function SoftwareDevelopment() {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <div>
            <p className="d-header" style={{paddingTop: "3em"}}>Software Development</p>
            <p className="d-reason">Another one of my major interest areas is Software Development. Through my Computer Science courses at Northeastern University, I discovered I enjoy Front-End Software Development for GUI's, websites, and apps the most within CS because I can apply some creativity while experimenting with technical aspects.</p>
            <div>
                {softwareDevelopment.map((experience, index) => (
                    <div className="flex-fill d-experience">
                        <div className="d-horizontal">
                            <div className="d-section">
                            <Link to={`/Software-Development/${experience.id}`} key={index}
                                style={{textDecoration: "none", color: "#6A8FE1"}}>
                                <div className="d-title d-mini-section">
                                    {experience.title}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 6L15 12L9 18" stroke="#6A8FE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </Link>
                                <div>
                                    <div className="d-mini-section">
                                        <p className="d-subtitle">ROLE</p>
                                        <p className="d-body">{experience.role}</p>
                                    </div>
                                    <div className="d-mini-section">
                                        <p className="d-subtitle">TIMELINE</p>
                                        <p className="d-body">{experience.timeline}</p>
                                    </div>
                                </div>
                                <div className="d-mini-section">
                                    <p className="d-subtitle">OVERVIEW</p>
                                    <ul>
                                        {experience.overview.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '38vw', marginLeft: "5vw" }}>
                                    <img src={experience.image} className="img-fluid" style={{marginBottom: '5vw'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="d-tags">
                            {experience.tags.map((tag, index) => (
                                <span key={index} className="d-tag">{tag}</span>
                            ))}
                        </div>                    
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SoftwareDevelopment;