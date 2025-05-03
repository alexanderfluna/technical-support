import React, { useState, useRef } from 'react';
import WirelessTroubleshooting from './WirelessTroubleshooting';
import WirelessSelectorTool from './WirelessSelectorTool';
import WirelessFAQ from './WirelessFAQ';
import Navbar from '../../components/Navigation/Navbar';

const Wireless = () => {
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
        if (content === "wireless-selector-tool" && selectorToolRef.current) {
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
            <h1 className="faq-title">Wireless Ethernet</h1>
            <p onClick={() => handleSectionClick("wireless-troubleshooting")}>Troubleshooting<span className="dropdown-chevron"></span></p>
            {selectedContent === "wireless-troubleshooting" && (
              <>
                <li 
                  className={activeSubSection === "netwave-configurations" ? "active" : ""}
                  onClick={() => handleSubSectionClick("netwave-configurations")}
                >
                  How to Configure Comnet's Wireless Radios
                </li>
                <li 
                  className={activeSubSection === "radio-not-powering-on" ? "active" : ""}
                  onClick={() => handleSubSectionClick("radio-not-powering-on")}
                >
                  How to Troubleshoot a Wireless Radio with Power Issues
                </li>
                <li 
                  className={activeSubSection === "radio-losing-connection" ? "active" : ""}
                  onClick={() => handleSubSectionClick("radio-losing-connection")}
                >
                  How to Troubleshoot a Wireless Radio with Communication Issues
                </li>
              </>
            )}
            
            <p onClick={() => handleSectionClick("wireless-relevant-information")}>Educational<span className="dropdown-chevron"></span></p>
            {selectedContent === "wireless-relevant-information" && (
              <>
                <li 
                  className={activeSubSection === "wireless" ? "active" : ""}
                  onClick={() => handleSubSectionClick("wireless")}
                >
                  Wireless Ethernet
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
            
            <p onClick={() => handleSectionClick("wireless-selector-tool")}>Selector Tool</p>
          </div>

          <div className="main-content">
            <div 
              id="wireless-troubleshooting" 
              ref={troubleshootingRef}
              className="troubleshooting"
            >
              <h1>Troubleshooting</h1>
              <WirelessTroubleshooting activeSubSection={activeSubSection} />
            </div>

            <div 
              id="wireless-relevant-information" 
              ref={relevantInfoRef}
              className="relevant-information"
            >
              <h1>Educational</h1>
              <WirelessFAQ activeSubSection={activeSubSection} />
            </div>

            <div 
              id="wireless-selector-tool" 
              ref={selectorToolRef}
              className="selector-tool"
            >
              <h1>Selector Tool</h1>
              <WirelessSelectorTool />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Wireless;