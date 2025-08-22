import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Portfolio/Home';
import ProductDesign from './Portfolio/ProductDesign';
import SoftwareDevelopment from './Portfolio/SoftwareDevelopment';
import Navigation from './Portfolio/Navigation';
import ExpandedProject from './Portfolio/ExpandedProject';
import ExpandedCode from './Portfolio/ExpandedCode';
import GraphicDesign from './Portfolio/GraphicDesign';
import CrochetCreations from './Portfolio/CrochetCreations';
import Contact from './Portfolio/Contact';
import "./App.css";

function App() {
    const navRef = useRef<HTMLDivElement>(null);
    const [navHeight, setNavHeight] = useState(0);
  
    useLayoutEffect(() => {
      const updateHeight = () => {
        if (navRef.current) {
          setNavHeight(navRef.current.offsetHeight);
        }
      };
  
      updateHeight();
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }, []);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    return (
        // <>
            <HashRouter>
                <div className="app-container">
                    <div className="navigation" ref={navRef}>
                        <Navigation />
                    </div>
                    <div className="content" style={{ marginTop: navHeight }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/Home/*" element={<Home />} />
                            <Route path="/Product-Design/*" element={<ProductDesign />} />
                            <Route path="/Software-Development/*" element={<SoftwareDevelopment />} />
                            <Route path="/Product-Design/:projectId" element={<ExpandedProject />} />
                            <Route path="/Software-Development/:projectId" element={<ExpandedCode />} />
                            <Route path="/Graphic-Design/*" element={<GraphicDesign />} />
                            <Route path="/Crochet-Creations/*" element={<CrochetCreations />} />
                            <Route path="/Let's-Connect/*" element={<Contact />} />
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        // </>
    );
}

export default App;
