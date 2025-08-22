import React, { useEffect } from "react";
import { cards } from "../Database";
import { Link } from "react-router-dom";
import "./index.css";

function CardsList() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="cards-container">
            <div className="blue-section cards">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <Link to={`/${card.id}`} style={{ textDecoration: "none" }}>
                            <div className="card-content">
                                <h4 className="section-title">
                                    {card.title.map((titlePart, index) => (
                                        <React.Fragment key={index}>
                                            {titlePart}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </h4>
                                <img
                                    className="img-fluid"
                                    src={card.image}
                                    alt="card"
                                />
                                <div className="navigate">
                                    <h5 className="bottom-text">
                                        {card.description}
                                    </h5>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardsList;
