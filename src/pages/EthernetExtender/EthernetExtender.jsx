import React, { useState, useRef } from 'react';
import EthernetExtenderTroubleshooting from './EthernetExtenderTroubleshooting';
import EthernetExtenderSelectorTool from './EthernetExtenderSelectorTool';
import EthernetExtenderFAQ from './EthernetExtenderFAQ';
import Navbar from '../../components/Navigation/Navbar'

const EthernetExtender = () => {
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
        if (content === "ethernet-extender-selector-tool" && selectorToolRef.current) {
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
          <p onClick={() => handleSectionClick("extender-troubleshooting")}>Troubleshooting</p>
          {selectedContent === "extender-troubleshooting" && (
            <>
              <li 
                className={activeSubSection === "CLFE(X)EO(U/C) to CLFE(X)EO(U/C)" ? "active" : ""}
                onClick={() => handleSubSectionClick("CLFE(X)EO(U/C) to CLFE(X)EO(U/C)")}
              >
                How to Troubleshoot CLFE(X)EO(U/C) to CLFE(X)EO(U/C) Devices
              </li>
              <li 
                className={activeSubSection === "CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C)" ? "active" : ""}
                onClick={() => handleSubSectionClick("CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C)")}
              >
                How to Troubleshoot CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C) Devices
              </li>
            </>
          )}
          
          <p onClick={() => handleSectionClick("extender-relevant-information")}>Relevant Information</p>
          {selectedContent === "extender-relevant-information" && (
            <>
              <li 
                className={activeSubSection === "copper" ? "active" : ""}
                onClick={() => handleSubSectionClick("copper")}
              >
                Copper
              </li>
              <li 
                className={activeSubSection === "coax" ? "active" : ""}
                onClick={() => handleSubSectionClick("coax")}
              >
                Coax
              </li>
            </>
          )}
          
          <p onClick={() => handleSectionClick("ethernet-extender-selector-tool")}>Selector Tool</p>
        </div>

        <div className="main-content">
          <div 
            id="extender-troubleshooting" 
            ref={troubleshootingRef}
            className="troubleshooting"
          >
            <EthernetExtenderTroubleshooting activeSubSection={activeSubSection} />
          </div>

          <div 
            id="extender-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <EthernetExtenderFAQ activeSubSection={activeSubSection} />
          </div>

          <div 
            id="ethernet-extender-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <EthernetExtenderSelectorTool />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthernetExtender;