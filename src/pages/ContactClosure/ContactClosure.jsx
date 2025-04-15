import React, { useState, useRef } from 'react';
import ContactClosureTroubleshooting from './ContactClosureTroubleshooting';
import ContactClosureSelectorTool from './ContactClosureSelectorTool';
import ContactClosureFAQ from './ContactClosureFAQ';

const ContactClosure = () => {
  const [selectedContent, setSelectedContent] = useState('');
  const [activeSubSection, setActiveSubSection] = useState(null);
  
  // Create refs for each content section
  const troubleshootingRef = useRef(null);
  const relevantInfoRef = useRef(null);
  const selectorToolRef = useRef(null);

  const handleSectionClick = (content) => {
    setSelectedContent(content);
    setActiveSubSection(null);
    
    setTimeout(() => {
      if (content === "contact-troubleshooting" && troubleshootingRef.current) {
        troubleshootingRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (content === "contact-relevant-information" && relevantInfoRef.current) {
        relevantInfoRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (content === "contact-selector-tool" && selectorToolRef.current) {
        selectorToolRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
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
    <div className="page">
      <div className="table-of-contents2">
        <p onClick={() => handleSectionClick("contact-troubleshooting")}>Troubleshooting</p>
        {selectedContent === "contact-troubleshooting" && (
          <>
            <li 
              className={activeSubSection === "no-power" ? "active" : ""}
              onClick={() => handleSubSectionClick("no-power")}
            >
              How to Troubleshoot a Unit with Power Issues
            </li>
            <li 
              className={activeSubSection === "no-optical-link" ? "active" : ""}
              onClick={() => handleSubSectionClick("no-optical-link")}
            >
              How to Troubleshoot a Unit with Optical Link Issues
            </li>
            <li 
              className={activeSubSection === "no-contacts" ? "active" : ""}
              onClick={() => handleSubSectionClick("no-contacts")}
            >
              How to Troubleshoot a Unit That is Not Sending or Receiving the Status of a Contact
            </li>
          </>
        )}
        
        <p onClick={() => handleSectionClick("contact-relevant-information")}>Relevant Information</p>
        {selectedContent === "contact-relevant-information" && (
          <>
            <li 
              className={activeSubSection === "formA" ? "active" : ""}
              onClick={() => handleSubSectionClick("formA")}
            >
              Form A Relays
            </li>
            <li 
              className={activeSubSection === "formC" ? "active" : ""}
              onClick={() => handleSubSectionClick("formC")}
            >
              Form C Relays
            </li>
            <li 
              className={activeSubSection === "latching" ? "active" : ""}
              onClick={() => handleSubSectionClick("latching")}
            >
              Latching vs. Non-Latching Relays
            </li>
            <li 
              className={activeSubSection === "supervision" ? "active" : ""}
              onClick={() => handleSubSectionClick("supervision")}
            >
              Supervision
            </li>
            <li 
              className={activeSubSection === "summary" ? "active" : ""}
              onClick={() => handleSubSectionClick("summary")}
            >
              Summary Fault Relays
            </li>
            <li 
              className={activeSubSection === "fiber" ? "active" : ""}
              onClick={() => handleSubSectionClick("fiber")}
            >
              Fiber Optics
            </li>
          </>
        )}
        
        <p onClick={() => handleSectionClick("contact-selector-tool")}>Selector Tool</p>
      </div>

      <div className="main-content">
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

        <div 
          id="contact-selector-tool" 
          ref={selectorToolRef}
          className="selector-tool"
        >
          <ContactClosureSelectorTool />
        </div>
      </div>
    </div>
  );
};

export default ContactClosure;