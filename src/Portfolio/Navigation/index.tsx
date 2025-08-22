import React, { useState, useEffect } from "react";
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
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
          const target = e.target as HTMLElement;
          if (isMenuOpen && !target.closest('.navigation-container') && !target.closest('.hamburger-button')) {
            setIsMenuOpen(false);
          }
        };
    
        if (isMenuOpen) {
          document.addEventListener('click', handleClickOutside);
          return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navigation-container">
          <button 
            className={`hamburger-button ${isMenuOpen ? 'menu-open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
    
          <div className={`nav-bar ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
            {links.map((link, index) => (
              <li 
                key={index} 
                style={{ textDecoration: "none" }}
                className={(pathname.startsWith(`/${link.label}`) || 
                           (pathname === "/" && link.label === "Home")) ? "active" : ""}
              >
                <Link 
                  to={`/${link.label}`} 
                  className="link-name" 
                  style={{ textDecoration: "none" }}
                >
                  <p>{link.title}</p>
                </Link>
              </li>
            ))}
          </div>
    
          {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />}
        </div>
    );
}

export default Navigation;