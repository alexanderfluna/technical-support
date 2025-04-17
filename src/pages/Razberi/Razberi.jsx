import React, { useState, useRef } from 'react';
import RazberiTroubleshooting from './RazberiTroubleshooting';
import RazberiSelectorTool from './RazberiSelectorTool';
import RazberiFAQ from './RazberiFAQ';
import Navbar from '../../components/Navigation/Navbar';

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
    <div>
      <Navbar/>
      <div className="page">
        <div className="table-of-contents2">
          <p onClick={() => handleSectionClick("razberi-troubleshooting")}>Troubleshooting</p>
          {selectedContent === "razberi-troubleshooting" && (
            <>
              <li 
                className={activeSubSection === "power-ss32x" ? "active" : ""}
                onClick={() => handleSubSectionClick("power-ss32x")}
              >
                How to Troubleshoot Power Issues on a Server Switch
              </li>
              <li 
                className={activeSubSection === "power-core" ? "active" : ""}
                onClick={() => handleSubSectionClick("power-core")}
              >
                How to Troubleshoot Power Issues on a Core Server
              </li>
              <li 
                className={activeSubSection === "no-poe" ? "active" : ""}
                onClick={() => handleSubSectionClick("no-poe")}
              >
                How to Troubleshoot a Server Switch with PoE Issues
              </li>
              <li 
                className={activeSubSection === "raid" ? "active" : ""}
                onClick={() => handleSubSectionClick("raid")}
              >
                How to Troubleshoot Issues with the RAID
              </li>
              <li 
                className={activeSubSection === "nic" ? "active" : ""}
                onClick={() => handleSubSectionClick("nic")}
              >
                How to Troubleshoot Issues with the NIC
              </li>
              <li 
                className={activeSubSection === "os" ? "active" : ""}
                onClick={() => handleSubSectionClick("os")}
              >
                How to Troubleshoot Issues with the OS
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
              <li 
                className={activeSubSection === "ping-ssiq24" ? "active" : ""}
                onClick={() => handleSubSectionClick("ping-ssiq24")}
              >
                Pinging the Server Switch
              </li>
            </>
          )}
          
          <p onClick={() => handleSectionClick("razberi-relevant-information")}>Relevant Information</p>
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
    </div>
  );
};

export default Razberi;