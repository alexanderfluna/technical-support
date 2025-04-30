import React, { useEffect, useState } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import NoPoE from '../../relevant-information/NoPoe';

const MediaConverterTroubleshooting = ({ activeSubSection }) => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (sectionID) => {
    setExpandedFAQ(prev => prev === sectionID ? null : sectionID);
  }

  useEffect(() => {
    if (activeSubSection) {
      const element = document.getElementById(activeSubSection);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [activeSubSection]);

  return (
    <div className="faq-list">
      <div className="faq-answer" id="no-power-light">
        <h1 className="faq-title" onClick={() => toggleFAQ("no-power-light")}>How to Troubleshoot a Media Converter with Power Issues<span className="dropdown-chevron"></span></h1>
        {expandedFAQ === "no-power-light" && (
          <>
            <NoPowerLight />
          </>
        )}
      </div>

      <div className="faq-answer" id="no-optical-link">
        <h1 className="faq-title" onClick={() => toggleFAQ("no-optical-link")}>How to Troubleshoot a Media Converter with Optical Link Issues<span className="dropdown-chevron"></span></h1>
        {expandedFAQ === "no-optical-link" && (
          <>
            <NoOpticalLink />
          </>
        )}
      </div>

      <div className="faq-answer" id="no-communication">
        <h1 className="faq-title" onClick={() => toggleFAQ("no-communication")}>How to Troubleshoot a Media Converter with no Ethernet Port Activity<span className="dropdown-chevron"></span></h1>
        {expandedFAQ === "no-communication" && (
          <>
            <p><strong>[1]</strong> Follow the <strong>"How to Troubleshoot a Media Converter with Power Issues"</strong> procedure to rule out power-related issues.</p>
            <p><strong>[2]</strong> Replace the Ethernet cable to determine if the issue persists.</p>
            <p><strong>[3]</strong> Replace the media converter with another of the same model to determine if the issue persists.</p>
          </>
        )}
      </div>

      <div className="faq-answer" id="no-poe">
        <h1 className="faq-title" onClick={() => toggleFAQ("no-poe")}>How to Troubleshoot a Media Converter with PoE Issues<span className="dropdown-chevron"></span></h1>
        {expandedFAQ === "no-poe" && (
          <>
            <NoPoE />
          </>
        )}
      </div>

      <div className="faq-answer" id="cnfe2mc2c">
        <h1 className="faq-title" onClick={() => toggleFAQ("cnfe2mc2c")}>How to configure the contacts on a CNFE2MC2C<span className="dropdown-chevron"></span></h1>
        {expandedFAQ === "cnfe2mc2c" && (
          <>
            <a href="pdf/MediaConverter/CNFE2MC2C.pdf">Click the link to view the configuration manual.</a>
          </>
        )}
      </div>
    </div>
  );
}

export default MediaConverterTroubleshooting;