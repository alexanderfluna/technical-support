import { useState, useEffect } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import Fiber from '../../relevant-information/Fiber';
import WiegandConfigurationTool from './WiegandConfigurationTool'

const WiegandFAQ = ({ activeSubSection }) => {
    const [expandedFAQs, setExpandedFAQs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = (e) => {
      const query = e.target.value.toLowerCase();
      setSearchQuery(query);

      if (query.length === 0) {
        setSearchResults([]);
        return;
      }

      const allFAQItems = Array.from(document.querySelectorAll('.faq-title'));
      const results = allFAQItems.filter(item => 
        item.textContent.toLowerCase().includes(query)
      ).map(item => ({
        id: item.parentElement.id,
        text: item.textContent
      }));

      setSearchResults(results);
    };

    const handleResultClick = (id) => {
      const element = document.getElementById(id);
      if (element) {
        if (!expandedFAQs.includes(id)) {
          setExpandedFAQs(prev => [...prev, id]);
        }
        element.scrollIntoView({ behavior: 'smooth' });
        setSearchQuery('');
        setSearchResults([]);
      }
    };

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
      <div>
        <div className="search-container" style={{ marginBottom: '20px' }}>
          <input
            type="text"
            className="search-input"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={handleSearch}
          />
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((result, index) => (
                <div 
                  key={index}
                  className="search-result-item"
                  onClick={() => handleResultClick(result.id)}
                >
                  {result.text}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="faq-list">
            <div id="fdw1000" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("fdw1000")}>
                    How to Configure the FDW1000 and EXP101 Devices
                    <span className={`dropdown-chevron ${isFAQExpanded("fdw1000") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("fdw1000") && (
                  <WiegandConfigurationTool />
                )}
            </div>

            <div id="no-power" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("no-power")}>
                    How to Troubleshoot a Unit with Power Issues
                    <span className={`dropdown-chevron ${isFAQExpanded("no-power") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("no-power") && (
                    <NoPowerLight />
                )}
            </div>

            <div id="no-link-light" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("no-link-light")}>
                    How to Troubleshoot a Unit with Optical Link Issues
                    <span className={`dropdown-chevron ${isFAQExpanded("no-link-light") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("no-link-light") && (
                  <div>
                    <p><strong>1.</strong> Confirm there is a central unit and remote unit on both ends of the fiber.</p>
                    <p><strong>2.</strong> Swap the transmit and receive fiber strands on either the central or the remote unit.</p>
                    <p><strong>3.</strong>Using a visual fault locator, confirm light successfully passes through the fiber.</p>
                  </div>
                )}
            </div>

            <div id="Wiegand vs. OSDP" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("Wiegand vs. OSDP")}>
                    Gain a Better Understanding of Wiegand vs. OSDP
                    <span className={`dropdown-chevron ${isFAQExpanded("Wiegand vs. OSDP") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("Wiegand vs. OSDP") && (
                    <>
                        <p><strong>Wiegand</strong> is a communication protocol commonly used in access control systems, where data from a credential (like a card or keypad) is transmitted as binary pulses over two wires (Data 0 and Data 1) to a controller for authentication and authorization.</p>
                        <p><strong>OSDP (Open Supervised Device Protocol)</strong> is a modern, secure communication protocol for access control systems that enables bidirectional data exchange, device supervision, and advanced encryption over a 2-wire RS-485 serial connection.</p>
                    </>
                )}
            </div>

            <div id="fiber" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("fiber")}>
                    Gain a Better Understanding of Fiber Optics
                    <span className={`dropdown-chevron ${isFAQExpanded("fiber") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("fiber") && (
                    <Fiber />
                )}
            </div>
        </div>
      </div>
    );
};

export default WiegandFAQ;