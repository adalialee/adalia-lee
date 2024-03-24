import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Home from './Home';
import ProductDesign from './ProductDesign';
import SoftwareDevelopment from './SoftwareDevelopment';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Home/*"/>}/>
          <Route path="/Home/*" element={<Home />}/>
          <Route path="/Product-Design/*" element={<ProductDesign />}/>
          <Route path="/Software-Development/*" element={<SoftwareDevelopment />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
