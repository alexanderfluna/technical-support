import React, { useState, useRef } from 'react';
import EthernetExtenderTroubleshooting from './EthernetExtenderTroubleshooting';
import EthernetExtenderSelectorTool from './EthernetExtenderSelectorTool';
import EthernetExtenderFAQ from './EthernetExtenderFAQ';
import Navbar from '../../components/Navigation/Navbar'

const EthernetExtender = () => {
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
        if (content === "ethernet-extender-selector-tool" && selectorToolRef.current) {
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
          <h1 className="faq-title" style={{fontSize: "3rem"}}>Ethernet Extender</h1>
          <div 
            id="ethernet-extender-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <EthernetExtenderSelectorTool />
          </div>
          <div 
            id="extender-troubleshooting" 
            ref={troubleshootingRef}
            className="troubleshooting"
          >
            <EthernetExtenderTroubleshooting activeSubSection={activeSubSection} />
          </div>

          <div 
            id="extender-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <EthernetExtenderFAQ activeSubSection={activeSubSection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthernetExtender;