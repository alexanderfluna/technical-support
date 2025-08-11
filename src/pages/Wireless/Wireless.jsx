import { useState, useRef } from 'react';
import WirelessSelectorTool from './WirelessSelectorTool';
import WirelessFAQ from './WirelessFAQ';
import Navbar from '../../components/Navigation/Navbar';

const Wireless = () => {
  const relevantInfoRef = useRef(null);
  const selectorToolRef = useRef(null);

  return (
    <div className="main-container">
        <Navbar/>
        <div className="page">
          <div className="main-content">
            <h1 className="faq-title" style={{fontSize: "3rem"}}>Wireless Ethernet</h1>
            <p className="hero-subtitle"><strong>Selector Tool</strong> — Identify the perfect solution for your requirements.</p>
            <div 
              id="wireless-selector-tool" 
              ref={selectorToolRef}
              className="selector-tool"
            >
              <WirelessSelectorTool />
            </div>
            <p className="hero-subtitle"><strong>Technical Support</strong> — Find answers to common technical questions.</p>
            <div 
              id="wireless-relevant-information" 
              ref={relevantInfoRef}
              className="relevant-information"
            >
              <WirelessFAQ />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Wireless;