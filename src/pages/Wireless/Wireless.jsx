import React, { useState, useRef } from 'react';
import WirelessTroubleshooting from './WirelessTroubleshooting';
import WirelessSelectorTool from './WirelessSelectorTool';
import WirelessFAQ from './WirelessFAQ';
import Navbar from '../../components/Navigation/Navbar';

const Wireless = () => {
  const [selectedContent, setSelectedContent] = useState('');
  const [activeSubSection, setActiveSubSection] = useState(null);
  const troubleshootingRef = useRef(null);
  const relevantInfoRef = useRef(null);
  const selectorToolRef = useRef(null);

  const handleSectionClick = (content) => {
    setSelectedContent(prevContent => prevContent === content ? '' : content);
    setActiveSubSection(null);
    
    if (selectedContent !== content) {
      setTimeout(() => {
        if (content === "wireless-selector-tool" && selectorToolRef.current) {
          selectorToolRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const handleSubSectionClick = (sectionId) => {
    setActiveSubSection(sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="main-container">
        <Navbar/>
        <div className="page">
          <div className="main-content">
            <h1 className="faq-title" style={{fontSize: "3rem"}}>Wireless Ethernet</h1>
            <div 
              id="wireless-selector-tool" 
              ref={selectorToolRef}
              className="selector-tool"
            >
              <WirelessSelectorTool />
            </div>
            <div 
              id="wireless-troubleshooting" 
              ref={troubleshootingRef}
              className="troubleshooting"
            >
              <WirelessTroubleshooting activeSubSection={activeSubSection} />
            </div>

            <div 
              id="wireless-relevant-information" 
              ref={relevantInfoRef}
              className="relevant-information"
            >
              <WirelessFAQ activeSubSection={activeSubSection} />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Wireless;