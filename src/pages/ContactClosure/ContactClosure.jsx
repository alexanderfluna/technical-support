import React, { useState, useRef } from 'react';
import ContactClosureTroubleshooting from './ContactClosureTroubleshooting';
import ContactClosureSelectorTool from './ContactClosureSelectorTool';
import ContactClosureFAQ from './ContactClosureFAQ';
import Navbar from '../../components/Navigation/Navbar';

const ContactClosure = () => {
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
        if (content === "contact-closure-selector-tool" && selectorToolRef.current) {
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
          <h1 className="faq-title" style={{fontSize: "3rem"}}>Contact Closure</h1>
          <div 
            id="contact-closure-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <ContactClosureSelectorTool />
          </div>
          <div 
            id="contact-troubleshooting" 
            ref={troubleshootingRef}
            className="troubleshooting"
          >
            <ContactClosureTroubleshooting activeSubSection={activeSubSection} />
          </div>

          <div 
            id="contact-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <ContactClosureFAQ activeSubSection={activeSubSection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactClosure;