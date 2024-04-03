import React from "react";
import { cards } from "../Database";
import { Link } from "react-router-dom";
import "./index.css";

function CardsList() {
    return (
        <div className="container">
            <div className="row">
                {cards.map((card, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12" style={{ marginBottom: index !== cards.length - 1 ? "24px" : "0" }}>
                        <Link to={`/${card.id}`} style={{ textDecoration: "none" }}>
                            <div className="custom">
                                <div>
                                    <div className="section-title">
                                    {card.title.map((titlePart, index) => (
                                        <React.Fragment key={index}>
                                            {titlePart}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                    </div>
                                    <img
                                        className="img-fluid"
                                        src={card.image}
                                        style={{paddingLeft: "12px", paddingRight: "12px", paddingBottom: "24px"}}
                                    />
                                    <div className="navigate">
                                        <div className="bottom-text" style={{paddingBottom: "16px"}}>
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
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardsList;
