import React, { useEffect, useState } from "react";
import { productDesign } from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import "./index.css";

function ProductDesign() {
    return (
        <div>
            <p className="header">Product Design</p>
            <p className="reason">Ever since taking design courses at Northeastern University and getting involved in UI/UX work through my job experiences and extracurriculars, this area has quickly become my happy space. I feel so invigorated when I’m expanding on style guides and component libraries, exploring various workflows with my team, and analyzing user insights to improve our products.</p>
            <div>
                {productDesign.map((experience) => (
                    <div className="flex-fill experience">
                        <div className="horizontal">
                            <div className="section">
                                <div className="title mini-section">
                                    {experience.title}
                                </div>
                                <div>
                                    <div className="mini-section">
                                        <p className="subtitle">ROLE</p>
                                        <p className="body">{experience.role}</p>
                                    </div>
                                    <div className="mini-section">
                                        <p className="subtitle">TIMELINE</p>
                                        <p className="body">{experience.timeline}</p>
                                    </div>
                                </div>
                                <div className="mini-section">
                                    <p className="subtitle">OVERVIEW</p>
                                    <ul>
                                        {experience.overview.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="image-container">
                                <img 
                                    src={experience.image} 
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="tags">
                            {experience.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductDesign;