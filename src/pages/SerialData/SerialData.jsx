import React, { useState, useRef } from 'react';
import SerialDataTroubleshooting from './SerialDataTroubleshooting';
import SerialDataSelectorTool from './SerialDataSelectorTool';
import SerialDataFAQ from './SerialDataFAQ';
import Navbar from '../../components/Navigation/Navbar';

const SerialData = () => {
  const [selectedContent, setSelectedContent] = useState('');
  const [activeSubSection, setActiveSubSection] = useState(null);
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
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="main-container">
      <Navbar/>
      <div className="page">
        <div className="main-content">
          <h1 style={{textAlign: "center"}}>Serial Data</h1>
          <div 
            id="serial-data-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <SerialDataSelectorTool />
          </div>

          <div 
            id="serial-troubleshooting" 
            ref={troubleshootingRef}
            className="troubleshooting"
          >
            <h1>Technical Support</h1>
            <SerialDataTroubleshooting activeSubSection={activeSubSection} />
          </div>

          <div 
            id="serial-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <SerialDataFAQ activeSubSection={activeSubSection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerialData;