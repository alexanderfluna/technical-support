import { useEffect, useState } from 'react';
import Fiber from '../../relevant-information/Fiber';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import SurgeSuppression from '../../relevant-information/SurgeSuppression';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import NoPoE from '../../relevant-information/NoPoe';

const MediaConverterFAQ = ({ activeSubSection }) => {
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
        <div className="faq-answer" id="no-power-light">
          <h1 className="faq-title" onClick={() => toggleFAQ("no-power-light")}>
            How to Troubleshoot a Media Converter With Power Issues
            <span className={`dropdown-chevron ${isFAQExpanded("no-power-light") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("no-power-light") && (
            <>
              <NoPowerLight />
            </>
          )}
        </div>

        <div className="faq-answer" id="no-optical-link">
          <h1 className="faq-title" onClick={() => toggleFAQ("no-optical-link")}>
            How to Troubleshoot a Media Converter With Optical Link Issues
            <span className={`dropdown-chevron ${isFAQExpanded("no-optical-link") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("no-optical-link") && (
            <>
              <NoOpticalLink />
            </>
          )}
        </div>

        <div className="faq-answer" id="no-communication">
          <h1 className="faq-title" onClick={() => toggleFAQ("no-communication")}>
            How to Troubleshoot a Media Converter With No Ethernet Port Activity
            <span className={`dropdown-chevron ${isFAQExpanded("no-communication") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("no-communication") && (
            <>
              <p><strong>1.</strong> Follow the <strong>"How to Troubleshoot a Media Converter with Power Issues"</strong> procedure to rule out power-related issues.</p>
              <p><strong>2.</strong> Replace the Ethernet cable to determine if the issue persists.</p>
              <p><strong>3.</strong> Replace the media converter with another of the same model to determine if the issue persists.</p>
            </>
          )}
        </div>

        <div className="faq-answer" id="no-poe">
          <h1 className="faq-title" onClick={() => toggleFAQ("no-poe")}>
            How to Troubleshoot a Media Converter That Will Not Provide PoE
            <span className={`dropdown-chevron ${isFAQExpanded("no-poe") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("no-poe") && (
            <>
              <NoPoE />
            </>
          )}
        </div>

        <div className="faq-answer" id="cnfe2mc2c">
          <h1 className="faq-title" onClick={() => toggleFAQ("cnfe2mc2c")}>
            How To Configure the Contacts on a CNFE2MC2C
            <span className={`dropdown-chevron ${isFAQExpanded("cnfe2mc2c") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("cnfe2mc2c") && (
            <>
              <a href="pdf/MediaConverter/CNFE2MC2C.pdf">Click the link to view the configuration manual.</a>
            </>
          )}
        </div>

        <div className="faq-answer" id="media-converters">
          <h1 className="faq-title" onClick={() => toggleFAQ("media-converters")}>
            Gain a Better Understanding of Media Converters
            <span className={`dropdown-chevron ${isFAQExpanded("media-converters") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("media-converters") && (
            <>
              <p><strong>A media converter</strong> facilitates communication between different networking media. It converts Ethernet data, transmitted as electrical pulses over copper cables, into infrared light signals that can travel through optical fiber and vice versa. Media converters are essential in modern networking, particularly when extending network distances beyond the limits of traditional copper cabling.</p>
              <p>Operating at <strong>Layer 1,</strong> media converters strictly function as data pass-through devices. Unlike routers or switches, they do not analyze or modify network traffic. Their role is purely to convert signals, ensuring compatibility between different transmission media while maintaining the integrity and speed of data transfer.</p>
              <p>Some media converters support <strong>Power over Ethernet (PoE),</strong> which allows the transmission of both power and data over a single Ethernet cable. Non-PoE versions, on the other hand, require separate power sources for connected devices. These devices also come in different physical sizes. <strong>Full-sized media converters</strong> are designed to be mounted in <strong>rack-mountable card cages,</strong> making them ideal for structured networking environments where multiple conversions need to be managed centrally. <strong>Miniature media converters,</strong> which are compact and standalone, offer flexibility for installations in tight spaces or single-device deployments.</p>
              <p><strong>Media converters are commonly designed for specific network speeds,</strong> such as <strong>Fast Ethernet (10/100Mbps)</strong> or <strong>Gigabit Ethernet (1000Mbps)</strong>. Some models, like those offered by ComNet, feature <strong>multi-rate</strong> capabilities, allowing users to switch between Fast Ethernet and Gigabit Ethernet using a simple dip switch. This adaptability makes them a versatile choice for evolving network infrastructures.</p>
              <p><strong>Advanced versions of media converters include dual and quad media converters.</strong> A <strong>dual media converter</strong> integrates two independent conversion units within a single enclosure, effectively serving two network connections at once. Similarly, a <strong>quad media converter</strong> houses four conversion units, providing a compact and efficient solution for high-density network applications.</p>
            </>
          )}
        </div>

        <div className="faq-answer" id="fiber">
          <h1 className="faq-title" onClick={() => toggleFAQ("fiber")}>
            Gain a Better Understanding of Fiber Optics
            <span className={`dropdown-chevron ${isFAQExpanded("fiber") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("fiber") && (
            <>
              <Fiber />
            </>
          )}
        </div>

        <div className="faq-answer" id="poe">
          <h1 className="faq-title" onClick={() => toggleFAQ("poe")}>
            Gain a Better Understanding of Power Over Ethernet
            <span className={`dropdown-chevron ${isFAQExpanded("poe") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("poe") && (
            <>
              <PowerOverEthernet />
            </>
          )}
        </div>

        <div id="surge" className="faq-answer">
            <h1 className="faq-title" onClick={() => toggleFAQ("surge")}>
              Gain a Better Understanding of Surge Suppression
              <span className={`dropdown-chevron ${isFAQExpanded("surge") ? 'expanded' : ''}`}></span>
            </h1>
            {isFAQExpanded("surge") && (
              <>
                <SurgeSuppression />
              </>
            )}
        </div>
      </div>
    </div>
  );
}

export default MediaConverterFAQ;