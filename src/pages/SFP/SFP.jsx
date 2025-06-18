import React, { useState, useRef, useEffect } from 'react';
import SFPSelectorTool from './SFPSelectorTool';
import Navbar from '../../components/Navigation/Navbar';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import Fiber from '../../relevant-information/Fiber';

const SFP = () => {
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
        if (content === "sfp-selector-tool" && selectorToolRef.current) {
          selectorToolRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (content === "sfp-faq" && faqRef.current) {
          faqRef.current.scrollIntoView({ behavior: 'smooth' });
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

  const SFPFAQ = ({ activeSubSection }) => {
    const [expandedFAQs, setExpandedFAQs] = useState([]);
  
    const toggleFAQ = (sectionID) => {
      setExpandedFAQs(prev => {
        if (prev.includes(sectionID)) {
          return prev.filter(id => id !== sectionID);
        } else {
          return [...prev, sectionID];
        }
      });
    }

    const isFAQExpanded = (sectionID) => {
      return expandedFAQs.includes(sectionID);
    }

    useEffect(() => {
      if (activeSubSection) {
        const element = document.getElementById(activeSubSection);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
          if (!expandedFAQs.includes(activeSubSection)) {
            setExpandedFAQs(prev => [...prev, activeSubSection]);
          }
        }
      }
    }, [activeSubSection]);

    return (
      <div className="faq-list">
        <div id="sfp-module" className="faq-answer">
          <h1 className="faq-title" onClick={() => toggleFAQ("sfp-module")}>
            What is an SFP module?
            <span className={`dropdown-chevron ${isFAQExpanded("sfp-module") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("sfp-module") && (
            <p><strong>SFP (Small Form-Factor Pluggable)</strong> modules are compact, hot-swappable devices used in network equipment like switches and routers to send and receive data over fiber optic or copper cables. They support singlemode or multimode fiber for different distances and come in various speeds like Fast Ethernet (FE), Gigabit Ethernet (GE), and 10 Gigabit (10G). SFPs use different connectors, such as LC, SC, or RJ-45, depending on the cable type. They help expand network capabilities without replacing entire devices.</p>
          )}
        </div>

        <div id="ddi" className="faq-answer">
          <h1 className="faq-title" onClick={() => toggleFAQ("ddi")}>
            How Can I View the Status of an SFP Module?
            <span className={`dropdown-chevron ${isFAQExpanded("ddi") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("ddi") && (
            <p>It is possible to view the status of the SFP in an Ethernet switch via the DDMI section or the SFP Status section.</p>
          )}
        </div>

        <div id="cisco" className="faq-answer">
          <h1 className="faq-title" onClick={() => toggleFAQ("cisco")}>
            Will Comnet SFPs work with Cisco devices?
            <span className={`dropdown-chevron ${isFAQExpanded("cisco") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("cisco") && (
            <p>Certain ComNet SFP modules will optically communicate with properly matched Cisco SFPs when Cisco SFPs are installed in a Cisco switch. Note that ComNet SFPs will not operate when installed in a Cisco switch.</p>
          )}
        </div>

        <div id="fiber" className="faq-answer">
          <h1 className="faq-title" onClick={() => toggleFAQ("fiber")}>
            Overview of Fiber Optics
            <span className={`dropdown-chevron ${isFAQExpanded("fiber") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("fiber") && (
            <Fiber />
          )}
        </div>

        <div id="no-optical-link" className="faq-answer">
          <h1 className="faq-title" onClick={() => toggleFAQ("no-optical-link")}>
            How to Troubleshoot an SFP module with Optical Link Issues
            <span className={`dropdown-chevron ${isFAQExpanded("no-optical-link") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("no-optical-link") && (
            <NoOpticalLink />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="main-container">
      <Navbar/>
      <div className="page">
        <div className="main-content">
          <h1 className="faq-title" style={{fontSize: "3rem"}}>SFP</h1>
          <div 
            id="sfp-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <SFPSelectorTool />
          </div>
          <div 
            id="sfp-faq" 
            ref={faqRef}
            className="relevant-information"
          >
            <SFPFAQ activeSubSection={activeSubSection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SFP;