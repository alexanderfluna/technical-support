import { useState, useEffect } from 'react';
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
                        <p><strong>1.</strong> Follow the "How to Troubleshoot a Contact Closure Device with Power Issues" procedure to rule out power-related issues.</p>
                        <p><strong>2.</strong> Confirm the copper wires are properly wired.</p>
                        <p><strong>3.</strong> Use an ohmmeter across the screw heads. Expect: <strong>0-0.5 Ω</strong> (closed contact, good continuity) or <strong>OL</strong> (open circuit, no contact closure).</p>                        
                        <p style={{paddingLeft: "60px"}}><strong>Note:</strong> Ensure that all screws are properly tightened. Loose screws may give a false indication that the relay is not responding.</p>
                        <p><strong>4.</strong> Confirm the inputs are dry (volt-free) closures. It is not acceptable to have voltage across the input pair.</p>
                        <p><strong>5.</strong> Cycle power on the unit.</p>
                        <p><strong>6.</strong> Replace the unit with a spare if available.</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default ContactClosureTroubleshooting;