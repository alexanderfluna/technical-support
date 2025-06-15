import React, { useState, useRef } from 'react';
import MediaConverterTroubleshooting from './MediaConverterTroubleshooting';
import MediaConverterSelectorTool from './MediaConverterSelectorTool';
import MediaConverterFAQ from './MediaConverterFAQ';
import Navbar from '../../components/Navigation/Navbar';

const MediaConverter = () => {
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
        if (content === "media-converter-selector-tool" && selectorToolRef.current) {
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
      <Navbar />
      <div className="page">
        <div className="main-content">
          <h1 style={{textAlign: "center"}}>Media Converter</h1>
          <div 
            id="media-converter-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <MediaConverterSelectorTool />
          </div>

          <div 
            id="media-troubleshooting" 
            ref={troubleshootingRef}
            className="troubleshooting"
          >
            <h1>Technical Support</h1>
            <MediaConverterTroubleshooting activeSubSection={activeSubSection} />
          </div>

          <div 
            id="media-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <MediaConverterFAQ activeSubSection={activeSubSection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaConverter;