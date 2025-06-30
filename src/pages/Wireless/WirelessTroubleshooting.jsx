import React, { useEffect, useState } from 'react';

const WirelessTroubleshooting = ({ activeSubSection }) => {
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

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
      setIsChecked(e.target.checked);
    };

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
      <div id="netwave-configurations" className="faq-answer">
        <h1 className="faq-title" onClick={() => toggleFAQ("netwave-configurations")}>
          How to Configure Comnet's Wireless Radios
          <span className={`dropdown-chevron ${isFAQExpanded("netwave-configurations") ? 'expanded' : ''}`}></span>
        </h1>
        {isFAQExpanded("netwave-configurations") && (
          <p>Click the link to <a href="pdf/Wireless/NetWave.pdf">view Comnet's wireless configuration documentation</a>.</p>
        )}
      </div>

      <div id="radio-not-powering-on" className="faq-answer">
        <h1 className="faq-title" onClick={() => toggleFAQ("radio-not-powering-on")}>
          How to Troubleshoot a Wireless Radio That Will Not Power On
          <span className={`dropdown-chevron ${isFAQExpanded("radio-not-powering-on") ? 'expanded' : ''}`}></span>
        </h1>
        {isFAQExpanded("radio-not-powering-on") && (
          <>
            <p><strong>1. Try using a hardened IEEE 802.3af/at compliant PoE injector to power the radio.</strong></p>
            <p style={{ paddingLeft: "40px" }}><strong>1.1.</strong> Replace the Ethernet cable to rule it out.</p>
            <p style={{ paddingLeft: "40px" }}><strong>1.2.</strong> Verify that the PoE injector will power on another device.</p>
            <p style={{ paddingLeft: "40px" }}><strong>1.3.</strong> Retry using another hardened IEEE 802.3af/at compliant PoE injector.</p>

            <p style={{ paddingTop: "40px" }}><strong>2. Try using a hardened IEEE 802.3af/at compliant PoE switch to power the radio.</strong></p>
            <p style={{ paddingLeft: "40px" }}><strong>2.1.</strong> Verify the power supply produces enough wattage for the device(s) powered by PoE and the radio.</p>
            <p style={{ paddingLeft: "40px" }}><strong>2.2.</strong> Use a voltmeter to verify the power supply is producing 48 to 56VDC under load.</p>
            <p style={{ paddingLeft: "80px" }}><strong>2.2.a.</strong> Confirm the red probe is connected to the voltmeter's positive terminal and the black probe is connected to the negative (or ground) terminal.</p>
            <p style={{ paddingLeft: "80px" }}><strong>2.2.b.</strong> Ensure the voltmeter is set to DC voltage mode.</p>
            <p style={{ paddingLeft: "80px" }}><strong>2.2.c.</strong> Touch the red probe to the positive terminal and the black probe to the negative terminal.</p>
            <p style={{ paddingLeft: "80px" }}><strong>2.2.d</strong> Verify the power supply delivers the required 48VDC-56VDC input voltage while connected to the switch. If not, replace the power supply and redo step 2.2.</p>
            <p style={{ paddingLeft: "40px" }}><strong>2.3</strong> Retry using another hardened IEEE 802.3af/at compliant PoE switch.</p>
          </>
        )}
      </div>

      <div id="radio-losing-connection" className="faq-answer">
        <h1 className="faq-title" onClick={() => toggleFAQ("radio-losing-connection")}>
          How to Troubleshoot a Wireless Radio with Communication Issues
          <span className={`dropdown-chevron ${isFAQExpanded("radio-losing-connection") ? 'expanded' : ''}`}></span>
        </h1>
        {isFAQExpanded("radio-losing-connection") && (
          <>
            <p><strong>1.</strong> Confirm the radio is powered properly.</p>
            <p style={{ paddingLeft: "40px" }}><strong>1.1.</strong> The radio should be powered by a hardened, 802.3af/at compliant PSE.</p>
            <p style={{ paddingLeft: "40px" }}><strong>1.2.</strong> Only one radio should be powered by a single PoE switch to prevent a network loop.</p>
            <p><strong>2.</strong> Default the wireless radio and reconfigure it. Click the link to <a href="pdf/Wireless/NetWave.pdf">view Comnet's wireless configuration documentation</a>.</p>
            <p><strong>3.</strong> Confirm each radio in the network has the latest firmware version.</p>
            <p><strong>4.</strong> Confirm each radio in the network has a unique IP address.</p>
            <p><strong>5.</strong> Confirm there is a direct line of sight between the access point and its associated client(s).</p>
            <p><strong>6.</strong> Confirm the access point and its associated client(s) share the same ESSID and PSK.</p>
            <p><strong>7.</strong> If there are multiple access points in the area, confirm each access point and its associated client(s) share a unique ESSID and PSK.</p>
            <p><strong>8.</strong> Using an aerial view in Google Maps, confirm the client(s) are within the beamwidth of the access point.</p>
            <p><strong>9.</strong> Determine the throughput. It is recommended to limit the throughput to a total of 500 Mbps.</p>
            <p><strong>10.</strong> In an add/drop/repeat topology, ensure there are no more than 3 hops.</p>
            <p><strong>11.</strong> If there are two radios mounted on the same pole:</p>
            <p style={{ paddingLeft: "40px" }}><strong>11.1.</strong> If the radios are facing the same direction, ensure there is at least a 3-meter distance between them.</p>
            <p style={{ paddingLeft: "40px" }}><strong>11.2.</strong> If the radios are facing opposite directions, ensure there is at least a 3-foot distance between them.</p>
            <p><strong>12.</strong> Consider enabling AP Background ACS scan on the access point radio to automatically scan and switch to the best channel after 60 seconds.</p>
            <p><strong>13.</strong> Consider enabling Ping Watchdog to reboot the radio after 5 failed ping attempts.</p>
            <p><strong>14.</strong> Consider setting the radio to reboot automatically at a specified interval (e.g., 2 hours, 12 hours, 24 hours).</p>
          </>
        )}
      </div>
    </div>
  );
};

export default WirelessTroubleshooting;