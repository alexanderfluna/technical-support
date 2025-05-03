import React, { useState, useRef, useEffect } from 'react';
import RazberiTroubleshooting from './RazberiTroubleshooting';
import RazberiFAQ from './RazberiFAQ';
import RazberiSelectorTool from './RazberiSelectorTool';
import Navbar from '../../components/Navigation/Navbar';

const Razberi = () => {
  const [selectedContent, setSelectedContent] = useState('');
  const [activeSubSection, setActiveSubSection] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  
  // Create refs for each content section
  const troubleshootingRef = useRef(null);
  const relevantInfoRef = useRef(null);
  const selectorToolRef = useRef(null);

  const toggleFAQ = (sectionID) => {
    setExpandedFAQ(prev => prev === sectionID ? null : sectionID);
  }

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
          <h1 className="faq-title">Edge Computing</h1>

          <p onClick={() => handleSectionClick("razberi-troubleshooting")}>Troubleshooting<span className="dropdown-chevron"></span></p>
          {selectedContent === "razberi-troubleshooting" && (
            <> 
              <li 
                className={activeSubSection === "server-power" ? "active" : ""}
                onClick={() => handleSubSectionClick("server-power")}
              >
                How to Troubleshoot a Server With Powering Issues
              </li>
              <li 
                className={activeSubSection === "no-poe" ? "active" : ""}
                onClick={() => handleSubSectionClick("no-poe")}
              >
                How to Troubleshoot a Server Switch That is Not Providing PoE
              </li>
              <li 
                className={activeSubSection === "raid" ? "active" : ""}
                onClick={() => handleSubSectionClick("raid")}
              >
                How to Troubleshoot a Server with a Bad Drive or RAID
              </li>
              <li 
                className={activeSubSection === "ssd" ? "active" : ""}
                onClick={() => handleSubSectionClick("ssd")}
              >
                How to Troubleshoot a Server with a Bad mSATA
              </li>
              <li 
                className={activeSubSection === "nic" ? "active" : ""}
                onClick={() => handleSubSectionClick("nic")}
              >
                How to Troubleshoot a Server with NIC Issues
              </li>
              <li 
                className={activeSubSection === "os" ? "active" : ""}
                onClick={() => handleSubSectionClick("os")}
              >
                How to Troubleshoot a Server Experiencing Issues with the OS
              </li>
              <li 
                className={activeSubSection === "rdp" ? "active" : ""}
                onClick={() => handleSubSectionClick("rdp")}
              >
                How to Set Up a Remote Desktop Connection
              </li>
              <li 
                className={activeSubSection === "registration" ? "active" : ""}
                onClick={() => handleSubSectionClick("registration")}
              >
                How to Skip the Razberi Monitor Registration
              </li>
              <li 
                className={activeSubSection === "camera-defense" ? "active" : ""}
                onClick={() => handleSubSectionClick("camera-defense")}
              >
                How to Set Up Camera Defense
              </li>
              <li 
                className={activeSubSection === "password" ? "active" : ""}
                onClick={() => handleSubSectionClick("password")}
              >
                What to do if the Windows Password is Forgotten
              </li>
            </>
          )}
          
          <p onClick={() => handleSectionClick("razberi-relevant-information")}>Educational<span className="dropdown-chevron"></span></p>
          {selectedContent === "razberi-relevant-information" && (
            <>
              <li 
                className={activeSubSection === "computing" ? "active" : ""}
                onClick={() => handleSubSectionClick("computing")}
              >
                Computing Terminology
              </li>
              <li 
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
            <h1>Troubleshooting</h1>
            <RazberiTroubleshooting activeSubSection={activeSubSection} expandedFAQ={expandedFAQ} toggleFAQ={toggleFAQ} />
          </div>

          <div 
            id="razberi-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <h1>Educational</h1>
            <RazberiFAQ activeSubSection={activeSubSection} expandedFAQ={expandedFAQ} toggleFAQ={toggleFAQ} />
          </div>

          <div 
            id="razberi-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <h1>Selector Tool</h1>
            <RazberiSelectorTool />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Razberi;