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
        if (content === "razberi-selector-tool" && selectorToolRef.current) {
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
    <div>
      <Navbar/>
      <div className="page">
      <div className="table-of-contents2">
        <p onClick={() => handleSectionClick("ethernet-troubleshooting")}>Troubleshooting</p>
        {selectedContent === "ethernet-troubleshooting" && (
          <>
            <li 
              className={activeSubSection === "switch-diagnose" ? "active" : ""}
              onClick={() => handleSubSectionClick("switch-diagnose")}
            >
              Diagnose the Issues of the Ethernet Switch
            </li>
            <li 
              className={activeSubSection === "switch-no-power-light" ? "active" : ""}
              onClick={() => handleSubSectionClick("switch-no-power-light")}
            >
              How to Troubleshoot an Ethernet Switch with Power Issues
            </li>
            <li 
              className={activeSubSection === "switch-no-optical-link" ? "active" : ""}
              onClick={() => handleSubSectionClick("switch-no-optical-link")}
            >
              How to Troubleshoot an Ethernet Switch with Optical Link Issues
            </li>
            <li 
              className={activeSubSection === "switch-not-communicating" ? "active" : ""}
              onClick={() => handleSubSectionClick("switch-not-communicating")}
            >
              How to Troubleshoot an Ethernet Switch with Network Issues
            </li>
            <li 
              className={activeSubSection === "switch-no-poe" ? "active" : ""}
              onClick={() => handleSubSectionClick("switch-no-poe")}
            >
              How to Troubleshoot an Ethernet Switch with PoE Issues
            </li>
            <li 
              className={activeSubSection === "switch-ip-address" ? "active" : ""}
              onClick={() => handleSubSectionClick("switch-ip-address")}
            >
              How to Find the IP Address of an Ethernet Switch
            </li>
            <li 
              className={activeSubSection === "switch-default" ? "active" : ""}
              onClick={() => handleSubSectionClick("switch-default")}
            >
              How to Factory Default an Ethernet Switch
            </li>
          </>
        )}
        
        <p onClick={() => handleSectionClick("ethernet-relevant-information")}>Relevant Information</p>
        {selectedContent === "ethernet-relevant-information" && (
          <>
            <li 
              className={activeSubSection === "switch" ? "active" : ""}
              onClick={() => handleSubSectionClick("switch")}
            >
              Ethernet Switches
            </li>
            <li 
              className={activeSubSection === "switch-protocols" ? "active" : ""}
              onClick={() => handleSubSectionClick("switch-protocols")}
            >
              Ethernet Switch Protocols
            </li>
            <li 
              className={activeSubSection === "fiber" ? "active" : ""}
              onClick={() => handleSubSectionClick("fiber")}
            >
              Fiber Optics
            </li>
            <li 
              className={activeSubSection === "poe" ? "active" : ""}
              onClick={() => handleSubSectionClick("poe")}
            >
              Power Over Ethernet
            </li>
            <li 
              className={activeSubSection === "osi" ? "active" : ""}
              onClick={() => handleSubSectionClick("osi")}
            >
              The OSI Model
            </li>
          </>
        )}
        
        <p onClick={() => handleSectionClick("ethernet-selector-tool")}>Selector Tool</p>
      </div>

      <div className="main-content">
        <div 
          id="ethernet-troubleshooting" 
          ref={troubleshootingRef}
          className="troubleshooting"
        >
          <EthernetSwitchTroubleshooting activeSubSection={activeSubSection} />
        </div>

        <div 
          id="ethernet-relevant-information" 
          ref={relevantInfoRef}
          className="relevant-information"
        >
          <EthernetSwitchFAQ activeSubSection={activeSubSection} />
        </div>

        <div 
          id="ethernet-selector-tool" 
          ref={selectorToolRef}
          className="selector-tool"
        >
          <EthernetSwitchSelectorTool />
        </div>
      </div>
    </div>
    </div>
  );
};

export default EthernetSwitch;