import { useState, useEffect } from 'react';
import Fiber from '../../relevant-information/Fiber';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';

const SerialDataFAQ = ({ activeSubSection }) => {
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
                        <p><strong>2. Confirm the dip switches are set correctly. Cycle power after changing the dip switch configuration.</strong></p>
                        <img src="photos/FDX/fdx60-switches.jpg" alt="FDX60 dip switches"></img>
                        <p><strong>3. Verify the wires are connected properly.</strong></p>
                        <img src="photos/FDX/fdx60-wires.jpg" alt="FDX60 wiring diagram"></img>
                        <p><strong>4. Ensure the baud rate of the terminal equipment is enough for the FDX60 to handle.</strong></p>
                        <p><strong>5. If passing 2-wire RS485, ensure there is 120-ohm resistor across pins 6 and 7 (+I/O and -I/O).</strong></p>
                        <li>An impedance mismatch occurs because of two electronic devices with different impedance values, meaning they resist alternating current differently. Without proper termination, a resistor that matches the cable's characteristic impedance, the signal is not properly absorbed, leading to ringing.</li>
                        <li>Ringing happens when a data signal reflects back and forth between devices instead of cleanly reaching its destination. In a lumped distance, where devices are very close together, the resistor can be placed at either end. In distributed distance systems, where devices are far apart, the terminating resistor must be placed at both ends.</li>
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

            <div id="rs232" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("rs232")}>
                    Get a Better Understanding of RS232
                    <span className={`dropdown-chevron ${isFAQExpanded("rs232") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("rs232") && (
                    <p><strong>RS-232</strong> is a standard for serial communication that allows full-duplex data transmission using just three wires: transmit (TX), receive (RX), and ground (GND). Full-duplex means data can be sent and received at the same time, with one wire dedicated to sending data and another for receiving. The ground wire serves as a reference point for distinguishing between binary 1s and 0s, which are determined by the voltage difference between the transmit or receive wire and the ground. However, because RS-232 uses an unbalanced (single-ended) signaling method, it is more susceptible to noise interference, as electrical noise can easily disrupt voltage differences and introduce errors. RS-232 is a point-to-point communication standard, meaning it connects only two devices directly without support for multiple devices on the same line. The maximum recommended cable length for RS-232 depends on the data transmission speed, but at a common baud rate of 9600 bps (bits per second), it can reliably transmit data up to 15 meters (about 50 feet). While RS-232 was widely used in older computer and networking hardware for connecting modems, printers, and other peripherals, it has largely been replaced by USB and other modern communication interfaces, though it is still used in industrial and legacy systems.</p>
                )}
            </div>

            <div id="rs422" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("rs422")}>
                    Get a Better Understanding of RS422
                    <span className={`dropdown-chevron ${isFAQExpanded("rs422") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("rs422") && (
                    <p><strong>RS-422</strong> is a serial communication standard that supports full-duplex data transmission using four wires: two for transmitting (TX+ and TX-) and two for receiving (RX+ and RX-). Unlike RS-232, which uses single-ended signaling, RS-422 employs balanced (differential) signaling, meaning data is transmitted as the voltage difference between each pair of wires rather than a single voltage level referenced to ground. This design makes RS-422 highly resistant to electrical noise because any interference affects both wires equally, and the receiver only processes the difference between them, effectively canceling out external noise. RS-422 supports point-to-point connections but can also be used in multi-drop configurations where multiple receivers share a common transmitter, a feature useful for industrial and automation systems. Additionally, RS-422 supports add/drop/repeat functionality, allowing data signals to be relayed across long distances by intermediate devices. With its improved noise immunity and signal integrity, RS-422 can reliably transmit data up to 1200 meters (about 4000 feet) at a baud rate of 9600 bps, making it ideal for applications requiring long-distance and high-reliability communication, such as industrial automation, telemetry, and process control.</p>
                )}
            </div>

            <div id="rs485" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("rs485")}>
                    Get a Better Understanding of RS485
                    <span className={`dropdown-chevron ${isFAQExpanded("rs485") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("rs485") && (
                    <>
                        <p><strong>RS-485</strong> is a serial communication standard designed for long-distance, high-speed, and noise-resistant data transmission. Unlike RS-232, RS-485 uses balanced (differential) signaling, where data is transmitted as the voltage difference between two wires, D+ and D-. This differential approach makes RS-485 highly resistant to electrical noise, as interference affects both wires equally, and the receiver only processes the voltage difference, effectively canceling out external noise. RS-485 is widely used in industrial automation, building management systems, and other applications where multiple devices need to communicate over long distances. It supports both two-wire and four-wire configurations, each with distinct advantages.</p>
                        <p>In a <strong>2-wire RS-485</strong> setup, communication is half-duplex, meaning the same pair of wires is used for both transmitting and receiving data, but not at the same time. Devices must switch between sending and receiving, which requires careful coordination to avoid collisions. Since RS-485 relies on differential signaling, binary 1s and 0s are determined by the voltage difference between the D+ and D- wires. The system can transmit data up to 1200 meters (about 4000 feet) at a baud rate of 9600 bps, making it ideal for industrial applications where long-distance communication is needed but full-duplex communication is not required.</p>
                        <p> <strong>4-wire RS-485</strong> configuration allows full-duplex communication, where two wires are dedicated to transmitting and two separate wires are used for receiving. This setup enables continuous two-way communication, as devices do not need to switch between sending and receiving. Similar to the 2-wire version, data is transmitted using differential signaling, making it highly resistant to noise. The 4-wire configuration is commonly used in point-to-point or bus-based systems where simultaneous two-way communication is needed. Like the 2-wire version, it also supports transmission over distances up to 1200 meters at 9600 bps.</p>
                        <p>RS-485 is designed for multi-device communication and operates on a <strong>bus topology</strong>, where multiple devices share the same communication lines. To enable multiple devices to coexist on the same bus, RS-485 devices have a high-impedance load mode, also known as "tri-state." In this mode, a device can completely disconnect from the bus when it is not transmitting or receiving, allowing other devices to communicate without interference. However, only one device can be in tri-state at a time, so proper coordination is necessary to avoid data collisions. Adding termination resistors across the bus helps maintain signal integrity by preventing reflections that could distort data transmission.</p>
                        <p>Another key feature of RS-485 is <strong>tri-state level detect</strong>, which ensures that a device only enters tri-state mode when a specific voltage threshold (such as 400 mV) is met. This prevents unintended bus conflicts. Additionally, turnaround time is an important factor in RS-485 networks, as devices need to be polled to determine when they are ready to transmit. Efficient turnaround timing is crucial in half-duplex systems, where devices must take turns communicating on the same wires.</p>
                        <p>Because of its robustness, long-distance capabilities, and ability to support multiple devices on the same bus, RS-485 is widely used in industrial control systems, HVAC controls, building automation, and other applications where reliable serial communication is essential.</p>
                    </>
                )}
            </div>

            <div id="fiber" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("fiber")}>
                    Get a Better Understanding of Fiber Optics
                    <span className={`dropdown-chevron ${isFAQExpanded("fiber") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("fiber") && (
                    <Fiber />
                )}
            </div>
        </div>
      </div>
    );
};

export default SerialDataFAQ;