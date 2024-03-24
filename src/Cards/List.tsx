import React, { useState } from "react";
import { cards } from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import "./index.css";

function CardsList() {
    return (
        <>
            <div className="preview">
                {cards.map((card) => (
                    <div className="custom flex-fill">
                        <div>
                            <div className="section-title">
                                {card.title}
                            </div>
                            <img 
                                className="img-fluid" 
                                src={card.image}
                                style={{paddingTop: "32px", paddingBottom: "32px", paddingLeft: "16px", paddingRight: "16px"}}
                            />
                            <div className="navigate">
                                <div className="bottom-text">
                                    {card.description}
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CardsList;