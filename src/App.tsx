// App.jsx
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Portfolio/Home';
import ProductDesign from './Portfolio/ProductDesign';
import SoftwareDevelopment from './Portfolio/SoftwareDevelopment';
import Navigation from './Portfolio/Navigation';
import "./App.css";

function App() {
    return (
        <HashRouter>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home/*" element={<Home />} />
                    <Route path="/Product-Design/*" element={<ProductDesign />} />
                    <Route path="/Software-Development/*" element={<SoftwareDevelopment />} />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
