import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import Navigation from "./Navigation";

function Portfolio() {
    const links = [
        {label: "Home", title: "Home"},
        {label: "Product-Design", title: "Product Design"},
        {label: "Software-Development", title: "Software Development"}
    ];

    const {pathname} = useLocation();

    return (
        <div>
            <Navigation/>
            {links.map((link, index) => (
                <label key={index} className={pathname.includes(link.label) ? "active" : ""}>
                    <Link to={`/{link.label}`}>{link.title}</Link>
                </label>
            ))}
        </div>
    );
}
export default Portfolio;