import React, { useState, useRef } from 'react';
import EthernetSwitchTroubleshooting from './EthernetSwitchTroubleshooting';
import EthernetSwitchSelectorTool from './EthernetSwitchSelectorTool';
import EthernetSwitchFAQ from './EthernetSwitchFAQ';
import Navbar from '../../components/Navigation/Navbar';

const EthernetSwitch = () => {
  const [selectedContent, setSelectedContent] = useState('');
  const [activeSubSection, setActiveSubSection] = useState(null);
  
  // Create refs for each content section
  const troubleshootingRef = useRef(null);
  const relevantInfoRef = useRef(null);
  const selectorToolRef = useRef(null);

  const handleSectionClick = (content) => {
    setSelectedContent(prevContent => prevContent === content ? '' : content);
    setActiveSubSection(null);
    
    if (selectedContent !== content) {
      setTimeout(() => {
        if (content === "ethernet-switch-selector-tool" && selectorToolRef.current) {
          selectorToolRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const handleSubSectionClick = (sectionId) => {
    setActiveSubSection(sectionId);
    
    // Find the element and scroll to it
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
          <h1 style={{textAlign: "center"}}>Ethernet Switch</h1>
          <div 
            id="ethernet-switch-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <EthernetSwitchSelectorTool />
          </div>
          <div 
            id="ethernet-troubleshooting" 
            ref={troubleshootingRef}
            className="troubleshooting"
          >
            <h1>Technical Support</h1>
            <EthernetSwitchTroubleshooting activeSubSection={activeSubSection} />
          </div>

          <div 
            id="ethernet-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <EthernetSwitchFAQ activeSubSection={activeSubSection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthernetSwitch;