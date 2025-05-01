import React, { useState, useEffect } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';

const ContactClosureTroubleshooting = ({ activeSubSection }) => {
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
            <div id="no-power" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("no-power")}>
                    How to Troubleshoot a Contact Closure Device with Power Issues
                    <span className={`dropdown-chevron ${isFAQExpanded("no-power") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("no-power") && (
                    <NoPowerLight />
                )}
            </div>

            <div id="no-optical-link" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("no-optical-link")}>
                    How to Troubleshoot a Unit with Optical Link Issues
                    <span className={`dropdown-chevron ${isFAQExpanded("no-optical-link") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("no-optical-link") && (
                    <NoOpticalLink />
                )}
            </div>

            <div id="no-contacts" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("no-contacts")}>
                    How to Troubleshoot a Unit That is Not Sending or Receiving the Status of a Contact
                    <span className={`dropdown-chevron ${isFAQExpanded("no-contacts") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("no-contacts") && (
                    <>
                        <p><strong>[1] Ensure the wires are connected properly.</strong></p>
                        <p><strong>FDC10:</strong></p>
                        <img src="photos/FDC/fdc10.jpg" style={{"padding-right": "100px"}} alt="FDC10 wiring"></img>
                        <p><strong>FDC8 or FDC80:</strong></p>
                        <img src="photos/FDC/fdc80.jpg" style={{height: "600px"}} alt="FDC80 wiring"></img>
                        <p><strong>[2] Confirm the inputs are dry (volt-free) closures. It is not acceptable to have voltage across the input pair.</strong></p>
                        <p><strong>[3] If an ohmmeter is being used across the screwheads on the green terminal block and if the screws are not tightened, it will look like the relay is not responding. Be sure that there are wires in the terminal block and that the screws are tightened. If wires are not inserted into the terminal block, tighten the screws anyway and then measure across the screw heads.</strong></p>
                        <p><strong>[4] Cycle power on the unit.</strong></p>
                    </>
                )}
            </div>
        </div>
    );
};

export default ContactClosureTroubleshooting;