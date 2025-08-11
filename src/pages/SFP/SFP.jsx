import { useState, useRef, useEffect } from 'react';
import SFPSelectorTool from './SFPSelectorTool';
import Navbar from '../../components/Navigation/Navbar';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import Fiber from '../../relevant-information/Fiber';

const SFP = () => {
  const [activeSubSection, setActiveSubSection] = useState(null);
  
  // Create refs for content sections
  const faqRef = useRef(null);
  const selectorToolRef = useRef(null);


  const SFPFAQ = ({ activeSubSection }) => {
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
            style={{width: "20rem"}}
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
      </div>
    );
  };

  return (
    <div className="main-container">
      <Navbar/>
      <div className="page">
        <div className="main-content">
          <h1 className="faq-title" style={{fontSize: "3rem"}}>SFP</h1>
          <p className="hero-subtitle"><strong>Selector Tool</strong> — Identify the perfect solution for your requirements.</p>
          <div 
            id="sfp-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <SFPSelectorTool />
          </div>
          <p className="hero-subtitle"><strong>Technical Support</strong> — Find answers to common technical questions.</p>

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