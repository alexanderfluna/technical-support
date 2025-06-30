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
          <h1 className="faq-title" style={{fontSize: "3rem"}}>Media Converter</h1>
          <p className="hero-subtitle"><strong>Selector Tool</strong> — Identify the perfect solution for your requirements.</p>
          <div 
            id="media-converter-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <MediaConverterSelectorTool />
          </div>
          <p className="hero-subtitle"><strong>Technical Support</strong> — Find answers to common technical questions.</p>
          <div 
            id="media-troubleshooting" 
            ref={troubleshootingRef}
            className="troubleshooting"
          >
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