import { useState, useRef } from 'react';
import EthernetExtenderSelectorTool from './EthernetExtenderSelectorTool';
import EthernetExtenderFAQ from './EthernetExtenderFAQ';
import Navbar from '../../components/Navigation/Navbar'

const EthernetExtender = () => {
  const relevantInfoRef = useRef(null);
  const selectorToolRef = useRef(null);

  return (
    <div className="main-container">
      <Navbar/>
      <div className="page">
        <div className="main-content">
          <h1 className="faq-title" style={{fontSize: "3rem"}}>Ethernet to UTP/Coax</h1>
          <p className="hero-subtitle"><strong>Selector Tool</strong> — Identify the perfect solution for your requirements.</p>
          <div 
            id="ethernet-extender-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <EthernetExtenderSelectorTool />
          </div>
          <p className="hero-subtitle"><strong>Technical Support</strong> — Find answers to common technical questions.</p>
          <div 
            id="extender-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <EthernetExtenderFAQ/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthernetExtender;