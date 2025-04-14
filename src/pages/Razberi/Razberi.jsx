import React, { useState, useRef } from 'react';
import RazberiTroubleshooting from './RazberiTroubleshooting';
import RazberiSelectorTool from './RazberiSelectorTool';
import RazberiFAQ from './RazberiFAQ';
import '../../styles/Pages2.css';

const Razberi = () => {
  const [selectedContent, setSelectedContent] = useState('');
  const [activeSubSection, setActiveSubSection] = useState(null);
  
  // Create refs for each content section
  const troubleshootingRef = useRef(null);
  const relevantInfoRef = useRef(null);
  const selectorToolRef = useRef(null);

  const handleSectionClick = (content) => {
    setSelectedContent(content);
    setActiveSubSection(null);
    
    // Scroll to the section after a slight delay to allow state update
    setTimeout(() => {
      if (content === "razberi-troubleshooting" && troubleshootingRef.current) {
        troubleshootingRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (content === "razberi-relevant-information" && relevantInfoRef.current) {
        relevantInfoRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (content === "razberi-selector-tool" && selectorToolRef.current) {
        selectorToolRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
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
    <div className="page">
      <div className="table-of-contents2">
        <p onClick={() => handleSectionClick("razberi-troubleshooting")}>Troubleshooting</p>
        {selectedContent === "razberi-troubleshooting" && (
          <>
            <li 
              id="ss32x-power"
              className={activeSubSection === "power-ss32x" ? "active" : ""}
              onClick={() => handleSubSectionClick("power-ss32x")}
            >
              How to Troubleshoot Power Issues on a Server Switch
            </li>
          </>
          
        )}
        
        <p onClick={() => handleSectionClick("razberi-relevant-information")}>Relevant Information</p>
        {selectedContent === "razberi-relevant-information" && (
          <>
          <li 
            id="ss32x-power"
            className={activeSubSection === "copnuting" ? "active" : ""}
            onClick={() => handleSubSectionClick("computing")}
          >
            Computing
          </li>
          <li 
            id="power-over-ethernet"
            className={activeSubSection === "power-over-ethernet" ? "active" : ""}
            onClick={() => handleSubSectionClick("power-over-ethernet")}
          >
            Power Over Ethernet
          </li>
          </>
        )}
        
        <p onClick={() => handleSectionClick("razberi-selector-tool")}>Selector Tool</p>
      </div>

      <div className="main-content">
        <div 
          id="razberi-troubleshooting" 
          ref={troubleshootingRef}
          className="troubleshooting"
        >
          <RazberiTroubleshooting activeSubSection={activeSubSection} />
        </div>

        <div 
          id="razberi-relevant-information" 
          ref={relevantInfoRef}
          className="relevant-information"
        >
          <RazberiFAQ activeSubSection={activeSubSection} />
        </div>

        <div 
          id="razberi-selector-tool" 
          ref={selectorToolRef}
          className="selector-tool"
        >
          <RazberiSelectorTool />
        </div>
      </div>
    </div>
  );
};

export default Razberi;