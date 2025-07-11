import React, { useState, useEffect } from 'react';
import Fiber from '../../relevant-information/Fiber';

const ContactClosureFAQ = ({ activeSubSection }) => {
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
            <div id="formA" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("formA")}>
                    Gain a Better Understanding of Form A Relays
                    <span className={`dropdown-chevron ${isFAQExpanded("formA") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("formA") && (
                    <>
                        <p><strong>Form A relays</strong> are Single Pole Single Throw (SPST) normally open relays. When the relay coil in a Form A mechanical relay is not energized, or when there is no magnetic field nearby in a reed relay, the relay contacts are open. When the relay coil in a Form A relay is energized, or when a magnetic field exists nearby in a reed relay, the relay contacts close. Used in applications where you need to switch a circuit on when the relay is activated: common in simple on/off control circuits, like turning on a light or powering a device.</p>
                        <img src="photos/FDC/FormA.png" style={{height: "400px"}} alt="Form A Relay Diagram"></img>
                    </>
                )}
            </div>

            <div id="formC" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("formC")}>
                    Gain a Better Understanding of Form C Relays
                    <span className={`dropdown-chevron ${isFAQExpanded("formC") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("formC") && (
                    <>
                        <p><strong>Form C relays</strong> are Single Pole Double Throw (SPDT) relays with a normally open set of contacts and a normally closed set of contacts. When the relay coil is not energized, the relay contacts are open relative to normally open and common AND are closed relative to normally closed and common. When the relay coil is energized, the relay contacts are closed relative to normally open and common AND are open relative to normally closed and common. Form C relays are used in applications where you need to alternate between two circuits. It allows for switching between two states, such as toggling between two power sources or switching between two devices: like switching between a primary and backup power supply.</p>
                        <img src="photos/FDC/FormC.png" style={{height: "400px"}} alt="Form C Relay Diagram"></img>
                    </>
                )}
            </div>

            <div id="latching" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("latching")}>
                    Gain a Better Understanding of Latching vs. Non-Latching Relays
                    <span className={`dropdown-chevron ${isFAQExpanded("latching") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("latching") && (
                    <p>In the case of a loss of optical link, <strong>latching relays</strong> will remain in the same state, whereas <strong>non-latching</strong> relays will open.</p>
                )}
            </div>

            <div id="supervision" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("supervision")}>
                    Gain a Better Understanding of Supervision
                    <span className={`dropdown-chevron ${isFAQExpanded("supervision") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("supervision") && (
                    <>
                        <p><strong>Supervision</strong> allows the device to detect if there is a short circuit or an open circuit. A slow fashing red LED indicates a short circuit, whereas a fast fashing red LED indicates an open circuit.</p>
                        <p><strong>On the FDC80 transmitter:</strong></p>
                        <li style={{"padding-left": "40px"}}>Flipping dip switch #1 on will allow for detection of short circuits.</li>
                        <li style={{"padding-left": "40px"}}>Flipping dip switch #2 on will allow for detection of cut wires.</li>
                        <p><strong>On the FDC80 receiver:</strong></p>
                        <li style={{"padding-left": "40px"}}>Flipping dip switch #1 on will add fiber loss to the summary fault relay.</li>
                        <li style={{"padding-left": "40px"}}>Flipping dip switch #2 on will add contact faults to the summary fault relay.</li>
                    </>
                )}
            </div>

            <div id="summary" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("summary")}>
                    Gain a Better Understanding of Summary Fault Relays
                    <span className={`dropdown-chevron ${isFAQExpanded("summary") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("summary") && (
                    <p>A <strong>summary fault relay</strong> is normally closed during normal conditions and will open upon loss of optical link. The <strong>FDC10</strong> is a good choice for monitoring the status of optical fiber.</p>
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
    );
};

export default ContactClosureFAQ;