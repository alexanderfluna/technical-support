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
    <div>
      <Navbar/>
      <div className="page">
      <div className="table-of-contents2">
        <h1 className="faq-title">Ethernet Switch</h1>
        <p onClick={() => handleSectionClick("ethernet-troubleshooting")}>Troubleshooting<span className="dropdown-chevron"></span></p>
        {selectedContent === "ethernet-troubleshooting" && (
          <>
            <li 
              className={activeSubSection === "switch-diagnose" ? "active" : ""}
              onClick={() => handleSubSectionClick("switch-diagnose")}
            >
              Diagnosing the Issues of an Ethernet Switch
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
        
        <p onClick={() => handleSectionClick("ethernet-relevant-information")}>Educational<span className="dropdown-chevron"></span></p>
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
              className={activeSubSection === "surge" ? "active" : ""}
              onClick={() => handleSubSectionClick("surge")}
            >
              Surge Suppression
            </li>
            <li 
              className={activeSubSection === "osi" ? "active" : ""}
              onClick={() => handleSubSectionClick("osi")}
            >
              The OSI Model
            </li>
          </>
        )}
        
        <p onClick={() => handleSectionClick("ethernet-switch-selector-tool")}>Selector Tool</p>
      </div>

      <div className="main-content">
        <div 
          id="ethernet-troubleshooting" 
          ref={troubleshootingRef}
          className="troubleshooting"
        >
          <h1>Troubleshooting</h1>
          <EthernetSwitchTroubleshooting activeSubSection={activeSubSection} />
        </div>

        <div 
          id="ethernet-relevant-information" 
          ref={relevantInfoRef}
          className="relevant-information"
        >
          <h1>Educational</h1>
          <EthernetSwitchFAQ activeSubSection={activeSubSection} />
        </div>

        <div 
          id="ethernet-switch-selector-tool" 
          ref={selectorToolRef}
          className="selector-tool"
        >
          <h1>Selector Tool</h1>
          <EthernetSwitchSelectorTool />
        </div>
      </div>
    </div>
    </div>
  );
};

export default EthernetSwitch;