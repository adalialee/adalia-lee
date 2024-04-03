import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

function Navigation() {
    const links = [
        { label: "Home", title: "Home" },
        { label: "Product-Design", title: "Product Design" },
        { label: "Software-Development", title: "Software Development" },
        { label: "Graphic-Design", title: "Graphic Design" },
        { label: "Crochet-Creations", title: "Crochet Creations" }
    ];

    const { pathname } = useLocation();

    return (
        <div className="nav-bar">
            <ul className="horizontal-list">
                {links.map((link, index) => (
                    <li key={index} style={{textDecoration: "none"}}
                        className={(pathname === `/${link.label}` || (pathname === "/" && link.label === "Home")) ? "active" : ""}>
                        <Link to={`/${link.label}`} style={{ textDecoration: "none" }}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navigation;