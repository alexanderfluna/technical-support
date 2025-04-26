import React, { useState, useEffect } from 'react';
import SFPSelectorTool from './SFPSelectorTool';
import SFPFAQ from './SFPFAQ';
import Navbar from '../../components/Navigation/Navbar';

const SFP = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [animatedElements, setAnimatedElements] = useState([]);

  const sections = [
    { id: 'no-optical-link', title: 'How to Troubleshoot an SFP module with Optical Link Issues' },
    { id: 'ddi', title: 'How to View the Status of an SFP Module' },
    { id: 'cisco', title: 'Will Comnet SFPs work with Cisco devices?' },
    { id: 'sfp-chart', title: "Comnet's SFP Chart" },
    { id: 'fiber', title: 'Fiber Optics' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      sections.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const isInView = elementPosition < windowHeight * 0.75;
          
          if (isInView && !animatedElements.includes(item.id)) {
            setAnimatedElements(prev => [...prev, item.id]);
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedElements]);

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="content-page">
      <Navbar/>
      <div className="content-container">
        {/* Table of Contents at the top */}
        <div className="toc-wrapper">
          <h2 className="toc-main-title">SFP Information</h2>
          <ul className="toc-list">
            {sections.map((section) => (
              <li 
                key={section.id}
                className={`toc-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => handleSectionClick(section.id)}
              >
                {section.title}
              </li>
            ))}
          </ul>
          <h2 
            className="toc-main-title"
            onClick={() => handleSectionClick('selector-tool')}
          >
            Selector Tool
          </h2>
        </div>

        {/* Main content area */}
        <div className="cards-grid">
          <SFPFAQ activeSection={activeSection} animatedElements={animatedElements} />
          
          <div id="selector-tool" className="full-width-card">
            <SFPSelectorTool />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SFP;