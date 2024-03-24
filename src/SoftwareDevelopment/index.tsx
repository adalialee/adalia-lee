import React, { useEffect, useState } from "react";
import { softwareDevelopment } from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import "./index.css";

function SoftwareDevelopment() {
    return (
        <div>
            <div>
                {softwareDevelopment.map((experience) => (
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

export default SoftwareDevelopment;