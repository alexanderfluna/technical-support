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
          <h1 className="faq-title" style={{fontSize: "3rem"}}>Serial Data</h1>
          <p className="hero-subtitle"><strong>Selector Tool</strong> — Identify the perfect solution for your requirements.</p>
          <div 
            id="serial-data-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <SerialDataSelectorTool />
          </div>
          <p className="hero-subtitle"><strong>Technical Support</strong> — Find answers to common technical questions.</p>
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
        </div>
      </div>
    </div>
  );
};

export default SerialData;