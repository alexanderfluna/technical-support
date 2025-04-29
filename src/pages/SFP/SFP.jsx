import React, { useState, useEffect } from 'react';
import SFPSelectorTool from './SFPSelectorTool';
import Navbar from '../../components/Navigation/Navbar';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import Fiber from '../../relevant-information/Fiber';

const SFP = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [animatedElements, setAnimatedElements] = useState([]);

  const sections = [
    { id: 'sfp-module', title: "What is an SFP module?" },
    { id: 'ddi', title: 'How Can I View the Status of an SFP Module?' },
    { id: 'cisco', title: 'Will Comnet SFPs work with Cisco devices?' },
    { id: 'fiber', title: 'Overview of Fiber Optics' },
    { id: 'no-optical-link', title: 'How to Troubleshoot an SFP module with Optical Link Issues' },
  ];

  const contentCards = [
    {
      id: 'sfp-module',
      title: "What is an SFP module?",
      content: (
        <>
          <p><strong>SFP (Small Form-Factor Pluggable)</strong> modules are compact, hot-swappable devices used in network equipment like switches and routers to send and receive data over fiber optic or copper cables. They support singlemode or multimode fiber for different distances and come in various speeds like Fast Ethernet (FE), Gigabit Ethernet (GE), and 10 Gigabit (10G). SFPs use different connectors, such as LC, SC, or RJ-45, depending on the cable type. They help expand network capabilities without replacing entire devices.</p>
        </>
      )
    },
    {
      id: 'ddi',
      title: 'How Can I View the Status of an SFP Module?',
      content: <p>It is possible to view the status of the SFP in an Ethernet switch via the DDMI section or the SFP Status section.</p>
    },
    {
      id: 'cisco',
      title: 'Will Comnet SFPs work with Cisco devices?',
      content: <p>Certain ComNet SFP modules will optically communicate with properly matched Cisco SFPs when Cisco SFPs are installed in a Cisco switch. Note that ComNet SFPs will not operate when installed in a Cisco switch.</p>
    },
    {
      id: 'fiber',
      title: 'Overview of Fiber Optics',
      content: <Fiber />
    },
    {
      id: 'no-optical-link',
      title: 'How to Troubleshoot an SFP module with Optical Link Issues',
      content: <NoOpticalLink />
    }
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

      // Check for selector tool visibility
      const selectorElement = document.getElementById('selector-tool');
      if (selectorElement) {
        const elementPosition = selectorElement.getBoundingClientRect().top;
        const isInView = elementPosition < windowHeight * 0.75;
        
        if (isInView && !animatedElements.includes('selector-tool')) {
          setAnimatedElements(prev => [...prev, 'selector-tool']);
          setActiveSection('selector-tool');
        }
      }
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
        <div className="toc-wrapper">
          <div className="toc-header">
            <h2 className="toc-title">SFP</h2>
          </div>
          
          <ul className="toc-list">
            <li>
              <button 
                className={`toc-item ${activeSection === 'selector-tool' ? 'active' : ''}`}
                onClick={() => handleSectionClick('selector-tool')}
              >
                SFP Selector Tool
              </button>
            </li>
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={`toc-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => handleSectionClick(section.id)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="cards-grid">
          {contentCards.map((card, index) => (
            <article 
              key={card.id}
              id={card.id}
              className={`content-card ${animatedElements.includes(card.id) ? 'animated' : ''} ${activeSection === card.id ? 'active' : ''}`}
              style={{ '--delay': index * 0.1 }}
            >
              <header className="card-header">
                <h2 className="card-title">{card.title}</h2>
              </header>
              <div className="card-body">
                <div className="card-content">
                  {card.content}
                </div>
              </div>
            </article>
          ))}
          
          <div 
            id="selector-tool" 
            className={`full-width-card ${animatedElements.includes('selector-tool') ? 'animated' : ''}`}
          >
            <SFPSelectorTool />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SFP;