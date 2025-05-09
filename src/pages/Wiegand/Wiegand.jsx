import React, { useState, useRef } from 'react';
import WiegandSelectorTool from './WiegandSelectorTool';
import WiegandFAQ from './WiegandFAQ';
import Navbar from '../../components/Navigation/Navbar';

const Wiegand = () => {
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
        if (content === "wiegand-selector-tool" && selectorToolRef.current) {
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
            <h1 className="faq-title">Wiegand</h1>
            <p onClick={() => handleSectionClick("wiegand-faq")}>Wiegand <span className="dropdown-chevron"></span></p>
            {selectedContent === "wiegand-faq" && (
              <>
                <li 
                  className={activeSubSection === "no-power" ? "active" : ""}
                  onClick={() => handleSubSectionClick("no-power")}
                >
                  How to Troubleshoot a Unit with Power Issues
                </li>
                <li 
                  className={activeSubSection === "no-link-light" ? "active" : ""}
                  onClick={() => handleSubSectionClick("no-link-light")}
                >
                  How to Troubleshoot a Unit with Optical Link Issues
                </li>
                <li 
                  className={activeSubSection === "fdw1000" ? "active" : ""}
                  onClick={() => handleSubSectionClick("fdw1000")}
                >
                  How to Configure FDW1000 and EXP101 Devices
                </li>
                <li 
                  className={activeSubSection === "Wiegand vs. OSDP" ? "active" : ""}
                  onClick={() => handleSubSectionClick("Wiegand vs. OSDP")}
                >
                  Wiegand vs. OSDP
                </li>
                <li 
                  className={activeSubSection === "fiber" ? "active" : ""}
                  onClick={() => handleSubSectionClick("fiber")}
                >
                  Optical Fiber
                </li>
              </>
            )}
            
            <p onClick={() => handleSectionClick("wiegand-selector-tool")}>Selector Tool</p>
          </div>

          <div className="main-content">
            <div 
              id="wiegand-faq" 
              ref={faqRef}
              className="relevant-information"
            >
              <h1>Wiegand</h1>
              <WiegandFAQ activeSubSection={activeSubSection} />
            </div>

            <div 
              id="wiegand-selector-tool" 
              ref={selectorToolRef}
              className="selector-tool"
            >
              <h1>Wiegand Selector Tool</h1>
              <WiegandSelectorTool />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Wiegand;