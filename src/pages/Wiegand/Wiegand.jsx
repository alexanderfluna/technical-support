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
    <div className="main-container">
        <Navbar/>
        <div className="page">
          <div className="main-content">
            <h1 className="faq-title" style={{fontSize: "3rem"}}>Wiegand</h1>
            <div 
              id="wiegand-selector-tool" 
              ref={selectorToolRef}
              className="selector-tool"
            >
              <WiegandSelectorTool />
            </div>
            <div 
              id="wiegand-faq" 
              ref={faqRef}
              className="relevant-information"
            >
              <WiegandFAQ activeSubSection={activeSubSection} />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Wiegand;