import React, { useState, useRef, useEffect } from 'react';
import RazberiTroubleshooting from './RazberiTroubleshooting';
import RazberiFAQ from './RazberiFAQ';
import RazberiSelectorTool from './RazberiSelectorTool';
import Navbar from '../../components/Navigation/Navbar';

const Razberi = () => {
  const [selectedContent, setSelectedContent] = useState('');
  const [activeSubSection, setActiveSubSection] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
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
    <div className="main-container">
      <Navbar/>
      <div className="page">
        <div className="main-content">
          <h1 style={{textAlign: "center"}}>Edge Computing</h1>
          <div 
            id="razberi-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <RazberiSelectorTool />
          </div>
          <div 
            id="razberi-troubleshooting" 
            ref={troubleshootingRef}
            className="troubleshooting"
          >
            <h1>Technical Support</h1>
            <RazberiTroubleshooting activeSubSection={activeSubSection} expandedFAQ={expandedFAQ} toggleFAQ={toggleFAQ} />
          </div>

          <div 
            id="razberi-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <RazberiFAQ activeSubSection={activeSubSection} expandedFAQ={expandedFAQ} toggleFAQ={toggleFAQ} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Razberi;