import React, { useEffect } from "react";
import { productDesign } from "../Database";
import { Link } from "react-router-dom";
import "./index.css";

function ProductDesign() {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <div className="section">
            <h1 className="p-header">Product Design</h1>
            <p className="p-intro">
                A design quote that deeply resonates with me is from Moira Cullen, VP of Global Beverage Design at PepsiCo: “Design differentiates and embodies the intangibles — emotion, context, and essence — that matter most to consumers.” Without a strong user experience, customers cannot fully appreciate products and how they best fit into the customers’ lives. Aside from software, I have a background in UI/UX design and user research, so I have the full context about why people need certain products as well as what makes products intuitive and enjoyable to use.
            </p>
            <div className="p-list">
                {productDesign.map((experience, index) => (
                    <div className="p-experience">
                        <div className="p-top">
                            <div className="p-left">
                                <Link to={`/Product-Design/${experience.id}`} key={index}
                                    style={{textDecoration: "none", color: "var(--primary-dark)"}}>
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

export default ProductDesign;