// App.jsx
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Portfolio/Home';
import ProductDesign from './Portfolio/ProductDesign';
import SoftwareDevelopment from './Portfolio/SoftwareDevelopment';
import Navigation from './Portfolio/Navigation';
import ExpandedProject from './Portfolio/ExpandedProject';
import ExpandedCode from './Portfolio/ExpandedCode';
import GraphicDesign from './Portfolio/GraphicDesign';
import CrochetCreations from './Portfolio/CrochetCreations';
import "./App.css";

function App() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
    return (
        <HashRouter>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home/*" element={<Home />} />
                    <Route path="/Product-Design/*" element={<ProductDesign />} />
                    <Route path="/Software-Development/*" element={<SoftwareDevelopment />} />
                    <Route path="/Product-Design/:projectId" element={<ExpandedProject />} />
                    <Route path="/Software-Development/:projectId" element={<ExpandedCode />} />
                    <Route path="/Graphic-Design/*" element={<GraphicDesign />} />
                    <Route path="/Crochet-Creations/*" element={<CrochetCreations />} />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
