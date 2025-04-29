import React, { useState, useRef } from 'react';
import SerialDataTroubleshooting from './SerialDataTroubleshooting';
import SerialDataSelectorTool from './SerialDataSelectorTool';
import SerialDataFAQ from './SerialDataFAQ';
import Navbar from '../../components/Navigation/Navbar';

const SerialData = () => {
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
        if (content === "serial-data-selector-tool" && selectorToolRef.current) {
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
          <p onClick={() => handleSectionClick("serial-troubleshooting")}>Troubleshooting<span className="dropdown-chevron"></span></p>
          {selectedContent === "serial-troubleshooting" && (
            <>
              <li 
                className={activeSubSection === "no-power" ? "active" : ""}
                onClick={() => handleSubSectionClick("no-power")}
              >
                How to Troubleshoot a Unit with Power Issues
              </li>
              <li 
                className={activeSubSection === "no-optical-link" ? "active" : ""}
                onClick={() => handleSubSectionClick("no-optical-link")}
              >
                How to Troubleshoot a Unit with Optical Link Issues
              </li>
              <li 
                className={activeSubSection === "fdx60" ? "active" : ""}
                onClick={() => handleSubSectionClick("fdx60")}
              >
                How to Troubleshoot an FDX60
              </li>
              <li 
                className={activeSubSection === "cnfe3doe2" ? "active" : ""}
                onClick={() => handleSubSectionClick("cnfe3doe2")}
              >
                How to Troubleshoot a CNFE3DOE2/M
              </li>
            </>
          )}
          
          <p onClick={() => handleSectionClick("serial-relevant-information")}>Relevant Information<span className="dropdown-chevron"></span></p>
          {selectedContent === "serial-relevant-information" && (
            <>
              <li 
                className={activeSubSection === "rs232" ? "active" : ""}
                onClick={() => handleSubSectionClick("rs232")}
              >
                RS232
              </li>
              <li 
                className={activeSubSection === "rs422" ? "active" : ""}
                onClick={() => handleSubSectionClick("rs422")}
              >
                RS422
              </li>
              <li 
                className={activeSubSection === "rs485" ? "active" : ""}
                onClick={() => handleSubSectionClick("rs485")}
              >
                RS485
              </li>
              <li 
                className={activeSubSection === "fiber" ? "active" : ""}
                onClick={() => handleSubSectionClick("fiber")}
              >
                Fiber Optics
              </li>
            </>
          )}
          
          <p onClick={() => handleSectionClick("serial-data-selector-tool")}>Selector Tool</p>
        </div>

        <div className="main-content">
          <div 
            id="serial-troubleshooting" 
            ref={troubleshootingRef}
            className="troubleshooting"
          >
            <SerialDataTroubleshooting activeSubSection={activeSubSection} />
          </div>

          <div 
            id="serial-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <SerialDataFAQ activeSubSection={activeSubSection} />
          </div>

          <div 
            id="serial-data-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <SerialDataSelectorTool />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerialData;