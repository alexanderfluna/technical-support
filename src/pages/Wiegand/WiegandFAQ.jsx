import { useState, useEffect } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import Fiber from '../../relevant-information/Fiber';
import WiegandConfigurationTool from './WiegandConfigurationTool'

const WiegandFAQ = ({ activeSubSection }) => {
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
                    <p>Swap the transmit and receive fiber strands.</p>
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
    );
};

export default WiegandFAQ;

/* 

                        <p><strong>[1] Default the FDW1000/C.</strong></p>
                        <p style={{paddingLeft: "40px"}}>[1.1] Remove the power, fiber strands, and metal housing to expose the DIP switches.</p>
                        <p style={{paddingLeft: "40px"}}>[1.2] Flip all dip switches OFF.</p>
                        <p style={{paddingLeft: "40px"}}>[1.3] Flip the following dip switches ON accordingly.</p>
                        <li style={{paddingLeft: "60px"}}>If it is a reader only, flip dip switches 1, 4, and 8 ON.</li>
                        <li style={{paddingLeft: "60px"}}>Else, if it is a reader and keypad combination, flip dip switches 1, 4, and 7 ON.</li>
                        <p style={{paddingLeft: "40px"}}>[1.4] Apply power (There should be a green STATUS LED).</p>
                        <p style={{paddingLeft: "40px"}}>[1.5] Remove power.</p>
                        <p style={{paddingLeft: "40px"}}>[1.6] Flip all dip switches OFF.</p>
                        <p><strong>[2] Configure the FDW1000/C.</strong></p>
                        <p style={{paddingLeft: "40px"}}>[2.1] Flip dip switch 3 ON.</p>
                        <p style={{paddingLeft: "40px"}}>[2.2] If EXP101/C expansion modules will be used, configure dip switches 6, 7, and 8 accordingly.</p>
                        <img src="photos/FDW/Configure.png" alt="FDW1000" style={{width: "80%"}}/>
                        <p style={{paddingLeft: "40px"}}>[2.3] Apply power (The FDW1000/C is now ready to use).</p>
                        <p><strong>[3] Configure the EXP101/C expansion modules as needed.</strong></p>
                        <p style={{paddingLeft: "40px"}}>[3.1] Remove the power, fiber strands, and metal housing to expose the DIP switches.</p>
                        <p style={{paddingLeft: "40px"}}>[3.2] Flip all dip switches OFF.</p>
                        <p style={{paddingLeft: "40px"}}>[3.3] Flip dip switch 2 ON.</p>
                        <p style={{paddingLeft: "40px"}}>[3.4] Flip the following dip switch ON accordingly.</p>
                        <li style={{paddingLeft: "60px"}}>If it is a reader only, flip dip switch 5 ON.</li>
                        <li style={{paddingLeft: "60px"}}>Else, if it is a reader and keypad combination, flip dip switch 4 ON.</li>
                        <p style={{paddingLeft: "40px"}}>[3.5]Configure dip switches 6, 7, and 8 accordingly.</p>
                        <img src="photos/FDW/Configure2.png" alt="EXP101" style={{width: "75%"}}></img>
                        <p><strong>[4] Default the FDW1000/R.</strong></p>
                        <p style={{paddingLeft: "40px"}}>[4.1] Remove the power, fiber strands, and metal housing to expose the DIP switches.</p>
                        <p style={{paddingLeft: "40px"}}>[4.2] Flip all dip switches OFF.</p>
                        <p style={{paddingLeft: "40px"}}>[4.3] Flip the following dip switches ON accordingly.</p>
                        <li style={{paddingLeft: "60px"}}>If it is a reader only, flip dip switches 1, 4, and 8 ON.</li>
                        <li style={{paddingLeft: "60px"}}>Else, if it is a reader and keypad, flip dip switches 1, 4, and 7 ON.</li>
                        <p style={{paddingLeft: "40px"}}>[4.4] Apply power (There should be a green STATUS LED).</p>
                        <p style={{paddingLeft: "40px"}}>[4.5] Remove power.</p>
                        <p style={{paddingLeft: "40px"}}>[4.6] Flip all dip switches OFF.</p>
                        <p><strong>[5] Configure the FDW1000/R.</strong></p>
                        <p style={{paddingLeft: "40px"}}>[5.1] If EXP101/R expansion modules will be used, configure dip switches 6, 7, and 8 accordingly.</p>
                        <img src="photos/FDW/Configure.png" alt="FDW1000" style={{width: "75%"}}/>
                        <p style={{paddingLeft: "40px"}}>[5.2] Apply power (The FDW1000/R is now ready to use).</p>
                        <p><strong>[6] Configure the EXP101/R expansion modules as needed.</strong></p>
                        <p style={{paddingLeft: "40px"}}>[6.1] Remove the power, fiber strands, and metal housing to expose the DIP switches.</p>
                        <p style={{paddingLeft: "40px"}}>[6.2] Flip all dip switches OFF.</p>
                        <p style={{paddingLeft: "40px"}}>[6.3] Flip the following dip switch ON accordingly.</p>
                        <li style={{paddingLeft: "60px"}}>If it is a reader only, flip dip switch 5 ON.</li>
                        <li style={{paddingLeft: "60px"}}>Else, if it is a reader and keypad combination, flip dip switch 4 ON.</li>
                        <p style={{paddingLeft: "40px"}}>[6.4] Configure dip switches 6, 7, and 8 accordingly.</p>
                        <img src="photos/FDW/Configure2.png" alt="EXP101" style={{width: "75%"}}></img>
                        <p><strong>[7] Ensure the correct wire configuration.</strong></p>
                        <p style={{color: "red"}}><strong>Please note there must be a common ground between the central unit(s) and the panel and there must be a common ground between the remote unit(s) and reader(s)!</strong></p>
                        <img src="photos/FDW/FDW.png" alt="FDW1000 wiring"style={{width: "75%"}}></img>


*/