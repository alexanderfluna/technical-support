import React, { useState, useRef } from 'react';
import MediaConverterTroubleshooting from './MediaConverterTroubleshooting';
import MediaConverterSelectorTool from './MediaConverterSelectorTool';
import MediaConverterFAQ from './MediaConverterFAQ';
import Navbar from '../../components/Navigation/Navbar';

const MediaConverter = () => {
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
        if (content === "media-converter-selector-tool" && selectorToolRef.current) {
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
      <Navbar />
      <div className="page">
        <div className="table-of-contents2">
          <h1 className="faq-title">Media Converters</h1>
          <p onClick={() => handleSectionClick("media-troubleshooting")}>Troubleshooting<span className="dropdown-chevron"></span></p>
          {selectedContent === "media-troubleshooting" && (
            <>
              <li 
                className={activeSubSection === "no-power-light" ? "active" : ""}
                onClick={() => handleSubSectionClick("no-power-light")}
              >
                How to Troubleshoot a Media Converter with Power Issues
              </li>
              <li 
                className={activeSubSection === "no-optical-link" ? "active" : ""}
                onClick={() => handleSubSectionClick("no-optical-link")}
              >
                How to Troubleshoot a Media Converter with Optical Link Issues
              </li>
              <li 
                className={activeSubSection === "no-communication" ? "active" : ""}
                onClick={() => handleSubSectionClick("no-communication")}
              >
                How to Troubleshoot a Media Converter with no Ethernet Port Activity
              </li>
              <li 
                className={activeSubSection === "no-poe" ? "active" : ""}
                onClick={() => handleSubSectionClick("no-poe")}
              >
                How to Troubleshoot a Media Converter with PoE Issues
              </li>
              <li 
                className={activeSubSection === "cnfe2mc2c" ? "active" : ""}
                onClick={() => handleSubSectionClick("cnfe2mc2c")}
              >
                How to configure the contacts on a CNFE2MC2C
              </li>
            </>
          )}
          
          <p onClick={() => handleSectionClick("media-relevant-information")}>Educational<span className="dropdown-chevron"></span></p>
          {selectedContent === "media-relevant-information" && (
            <>
              <li 
                className={activeSubSection === "media-converters" ? "active" : ""}
                onClick={() => handleSubSectionClick("media-converters")}
              >
                Media Converters
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
                Power over Ethernet
              </li>
              <li 
                className={activeSubSection === "osi" ? "active" : ""}
                onClick={() => handleSubSectionClick("osi")}
              >
                The OSI Model
              </li>
            </>
          )}
          
          <p onClick={() => handleSectionClick("media-converter-selector-tool")}>Selector Tool</p>
        </div>

        <div className="main-content">
          <div 
            id="media-troubleshooting" 
            ref={troubleshootingRef}
            className="troubleshooting"
          >
            <h1>Troubleshooting</h1>
            <MediaConverterTroubleshooting activeSubSection={activeSubSection} />
          </div>

          <div 
            id="media-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <h1>Educational</h1>
            <MediaConverterFAQ activeSubSection={activeSubSection} />
          </div>

          <div 
            id="media-converter-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <h1>Selector Tool</h1>
            <MediaConverterSelectorTool />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaConverter;