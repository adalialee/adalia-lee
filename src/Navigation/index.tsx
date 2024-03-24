import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaClock } from "react-icons/fa";

function Navigation() {
    const links = [
        {label: "Home", icon: <FaClock className="fs-2"/>},
        {label: "ProductDesign", icon: <FaClock className="fs-2"/>}
    ];
    const {pathname} = useLocation();
    return (
        <div>
            {links.map((link, index) => (
                <Link to={`/{link.label}`}>{link.icon}</Link>
            ))}
        </div>
    );
}
export default Navigation;