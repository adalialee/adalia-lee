import React, { useEffect, useState } from "react";
import { productDesign } from "../Database";
import { Navigate, Route, Routes, useParams, Link } from "react-router-dom";
import "./index.css";

function ProductDesign() {
    return (
        <div>
            <p className="p-header" style={{paddingTop: "48px"}}>Product Design</p>
            <p className="p-reason">Ever since taking design courses at Northeastern University and getting involved in UI/UX work through my job experiences and extracurriculars, this area has quickly become my happy space. I feel so invigorated when I’m expanding on style guides and component libraries, exploring various workflows with my team, and analyzing user insights to improve our products.</p>
            <div>
                {productDesign.map((experience, index) => (
                    <div className="flex-fill p-experience">
                        <div className="p-horizontal">
                            <div className="p-section">
                            <Link to={`/Product-Design/${experience.id}`} key={index}
                                style={{textDecoration: "none", color: "#6A8FE1"}}>
                                <div className="p-title p-mini-section">
                                    {experience.title}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 6L15 12L9 18" stroke="#6A8FE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                
                            </Link>
                                <div>
                                    <div className="p-mini-section">
                                        <p className="p-subtitle">ROLE</p>
                                        <p className="p-body">{experience.role}</p>
                                    </div>
                                    <div className="p-mini-section">
                                        <p className="p-subtitle">TIMELINE</p>
                                        <p className="p-body">{experience.timeline}</p>
                                    </div>
                                </div>
                                <div className="p-mini-section">
                                    <p className="p-subtitle">OVERVIEW</p>
                                    <ul>
                                        {experience.overview.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '50vw', marginLeft: "24px" }}>
                                    <img src={experience.image} className="img-fluid" style={{marginBottom: '5vw'}}/>
                                </div>
                            </div>
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

export default ProductDesign;