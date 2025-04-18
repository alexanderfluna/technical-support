import React, { useEffect } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import NoPoE from '../../relevant-information/NoPoe';

const MediaConverterTroubleshooting = ({ activeSubSection }) => {
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
            <h1 className="faq-title">Troubleshooting Media Converters</h1>

            <div className="faq-answer" id="no-power-light">
                <h1>How to Troubleshoot a Media Converter with Power Issues</h1>
                <NoPowerLight />
            </div>

            <div className="faq-answer" id="no-optical-link">
                <h1>How to Troubleshoot a Media Converter with Optical Link Issues</h1>
                <NoOpticalLink />
            </div>

            <div className="faq-answer" id="no-communication">
                <h1>How to Troubleshoot a Media Converter with no Ethernet Port Activity.</h1>
               <p><strong>[1]</strong> Follow the <strong>"How to Troubleshoot a Media Converter with Power Issues"</strong> procedure to rule out power-related issues.</p>
                <p><strong>[2]</strong> Replace the Ethernet cable to determine if the issue persists.</p>
                <p><strong>[3]</strong> Replace the media converter with another of the same model to determine if the issue persists.</p>
            </div>

            <div className="faq-answer" id="no-poe">
                <h1>How to Troubleshoot a Media Converter with PoE Issues</h1>
                <NoPoE />
            </div>

            <div className="faq-answer" id="cnfe2mc2c">
                <h1>How to configure the contacts on a CNFE2MC2C.</h1>
                <a href="pdf/MediaConverter/CNFE2MC2C.pdf">Click the link to view the configuration manual.</a>
            </div>
        </div>
    );
}

export default MediaConverterTroubleshooting;
