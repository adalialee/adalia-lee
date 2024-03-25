// Navigation.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

function Navigation() {
    const links = [
        { label: "Home", title: "Home" },
        { label: "Product-Design", title: "Product Design" },
        { label: "Software-Development", title: "Software Development" }
    ];

    const { pathname } = useLocation();

    return (
        <div>
            <ul className="horizontal-list">
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link.label) ? "active" : ""}
                    style={{textDecoration: "none"}}>
                        <Link to={`/${link.label}`} style={{textDecoration: "none"}}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navigation;
