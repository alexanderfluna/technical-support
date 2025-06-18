import React, { useEffect, useState } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import NoPoE from '../../relevant-information/NoPoe';

const MediaConverterTroubleshooting = ({ activeSubSection }) => {
  const [expandedFAQs, setExpandedFAQs] = useState([]);

  const toggleFAQ = (sectionID) => {
    setExpandedFAQs(prev => {
      if (prev.includes(sectionID)) {
        // Remove the section if it's already open
        return prev.filter(id => id !== sectionID);
      } else {
        // Add the section if it's closed
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
        // Automatically expand the active subsection if it's not already expanded
        if (!expandedFAQs.includes(activeSubSection)) {
          setExpandedFAQs(prev => [...prev, activeSubSection]);
        }
      }
    }
  }, [activeSubSection]);

  return (
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
            <p><strong>[1]</strong> Follow the <strong>"How to Troubleshoot a Media Converter with Power Issues"</strong> procedure to rule out power-related issues.</p>
            <p><strong>[2]</strong> Replace the Ethernet cable to determine if the issue persists.</p>
            <p><strong>[3]</strong> Replace the media converter with another of the same model to determine if the issue persists.</p>
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
    </div>
  );
}

export default MediaConverterTroubleshooting;