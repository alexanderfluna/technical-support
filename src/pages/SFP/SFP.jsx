import React, { useState, useRef } from 'react';
import SFPSelectorTool from './SFPSelectorTool';
import SFPFAQ from './SFPFAQ';
import Navbar from '../../components/Navigation/Navbar';

const SFP = () => {
  const [selectedContent, setSelectedContent] = useState('');
  const [activeSubSection, setActiveSubSection] = useState(null);
  
  // Create refs for content sections
  const faqRef = useRef(null);
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
          <p onClick={() => handleSectionClick("sfp-faq")}>SFP Information</p>
          {selectedContent === "sfp-faq" && (
            <>
              <li 
                className={activeSubSection === "no-optical-link" ? "active" : ""}
                onClick={() => handleSubSectionClick("no-optical-link")}
              >
                How to Troubleshoot an SFP module with Optical Link Issues
              </li>
              <li 
                className={activeSubSection === "ddi" ? "active" : ""}
                onClick={() => handleSubSectionClick("ddi")}
              >
                How to View the Status of an SFP Module
              </li>
              <li 
                className={activeSubSection === "cisco" ? "active" : ""}
                onClick={() => handleSubSectionClick("cisco")}
              >
                Will Comnet SFPs work with Cisco devices?
              </li>
              <li 
                className={activeSubSection === "sfp-chart" ? "active" : ""}
                onClick={() => handleSubSectionClick("sfp-chart")}
              >
                Comnet's SFP Chart
              </li>
              <li 
                className={activeSubSection === "fiber" ? "active" : ""}
                onClick={() => handleSubSectionClick("fiber")}
              >
                Fiber Optics
              </li>
            </>
          )}
          
          <p onClick={() => handleSectionClick("sfp-selector-tool")}>Selector Tool</p>
        </div>

        <div className="main-content">
          <div 
            id="sfp-faq" 
            ref={faqRef}
            className="relevant-information"
          >
            <SFPFAQ activeSubSection={activeSubSection} />
          </div>

          <div 
            id="sfp-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <SFPSelectorTool />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SFP;