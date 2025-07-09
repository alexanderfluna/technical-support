import { useState, useEffect } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';

const SerialDataTroubleshooting = ({ activeSubSection }) => {
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
                    How to Troubleshoot a Unit with Power Issues
                    <span className={`dropdown-chevron ${isFAQExpanded("no-power") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("no-power") && (
                    <NoPowerLight />
                )}
            </div>

            <div id="no-optical-link" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("no-optical-link")}>
                    Troubleshooting a Unit that will not Link Optically
                    <span className={`dropdown-chevron ${isFAQExpanded("no-optical-link") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("no-optical-link") && (
                    <NoOpticalLink />
                )}
            </div>
            
            <div id="fdx60" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("fdx60")}>
                    How to Troubleshoot an FDX60
                    <span className={`dropdown-chevron ${isFAQExpanded("fdx60") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("fdx60") && (
                    <>
                        <p><strong>1. Document what lights are illuminated on the unit.</strong></p>
                        <img src="photos/FDX/fdx60-led.jpg" alt="FDX60 LED indicators"></img>
                        <p><strong>2. If passing 2-wire RS485, ensure there is 120-ohm resistor across pins 6 and 7 (+I/O and -I/O).</strong></p>
                        <li>An impedance mismatch occurs because of two electronic devices with different impedance values, meaning they resist alternating current differently. Without proper termination, a resistor that matches the cable's characteristic impedance, the signal is not properly absorbed, leading to ringing.</li>
                        <li>Ringing happens when a data signal reflects back and forth between devices instead of cleanly reaching its destination. In a lumped distance, where devices are very close together, the resistor can be placed at either end. In distributed distance systems, where devices are far apart, the terminating resistor must be placed at both ends.</li>
                        <p><strong>3. Confirm the dip switches are set correctly. Cycle power after changing the dip switch configuration.</strong></p>
                        <img src="photos/FDX/fdx60-switches.jpg" alt="FDX60 dip switches"></img>
                        <p><strong>4. Verify the wires are connected properly.</strong></p>
                        <img src="photos/FDX/fdx60-wires.jpg" alt="FDX60 wiring diagram"></img>
                        <p><strong>5. Ensure the baud rate of the terminal equipment is enough for the FDX60 to handle.</strong></p>
                    </>
                )}
            </div>

            <div id="cnfe3doe2" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("cnfe3doe2")}>
                    How to Troubleshoot a CNFE3DOE2/M
                    <span className={`dropdown-chevron ${isFAQExpanded("cnfe3doe2") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("cnfe3doe2") && (
                    <a href="pdf/SerialData/CNFE3DOE2.pdf">Click the link to view the configuration manual for the CNFE3DOE2/M.</a>
                )}
            </div>
        </div>
    );
};

export default SerialDataTroubleshooting;