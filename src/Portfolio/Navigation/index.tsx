import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

function Navigation() {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    const links = [
        { label: "Home", title: "Home" },
        { label: "Product-Design", title: "Product Design" },
        { label: "Software-Development", title: "Software Development" },
        { label: "Graphic-Design", title: "Graphic Design" },
        { label: "Crochet-Creations", title: "Crochet Creations" },
        { label: "Let's-Connect", title: "Let's Connect" }
    ];

    const { pathname } = useLocation();

    return (
        <div className="nav-bar">
            {links.map((link, index) => (
                <li key={index} style={{textDecoration: "none"}}
                    className={(pathname.startsWith(`/${link.label}`) || (pathname === "/" && link.label === "Home")) ? "active" : ""}>
                    <Link to={`/${link.label}`} className="link-name" style={{ textDecoration: "none" }}>
                        <p>{link.title}</p>
                    </Link>
                </li>
            ))}
        </div>
    );
}

export default Navigation;