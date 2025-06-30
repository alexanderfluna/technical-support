import React, { useEffect, useState } from 'react';

const EthernetExtenderTroubleshooting = ({ activeSubSection }) => {
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
      <div id="CLFE-troubleshooting" className="faq-answer">
        <h1 className="faq-title" onClick={() => toggleFAQ("CLFE-troubleshooting")}>
          How to Configure the CLFE(X)EO(U/C) to CLFE(X)EO(U/C) Devices
          <span className={`dropdown-chevron ${isFAQExpanded("CLFE-troubleshooting") ? 'expanded' : ''}`}></span>
        </h1>
        {isFAQExpanded("CLFE-troubleshooting") && (
          <>
            <p><strong>1.</strong> Note the following information.</p>
            <li><strong>Local vs. Remote</strong></li>
            <li style={{paddingLeft: "40px"}}>A local and remote device are required on both ends of the extended distance.</li>
            <li style={{paddingLeft: "40px"}}>Devices with 1 or 4 channels can be set as a local or remote via the dip switch. The devices with 8 or 16 channels can only be used as the local device.</li>
            <li><strong>10 Mbps vs. 100 Mbps</strong></li>
            <li style={{paddingLeft: "40px"}}>Every device has a dip switch to flip between 10 Mbps or 100 Mbps.</li>
            <li style={{paddingLeft: "40px"}}>The devices on both ends of the extended distance require the same data rate dip switch configuration.</li>
            <li><strong>UTP - 1 Pair vs. UTP - 4 Pair</strong></li>
            <li style={{paddingLeft: "40px"}}>For the Ethernet over UTP extenders, the devices on both ends of the extended distance require the same UTP dip switch configuration.</li>
            <li style={{paddingLeft: "40px"}}>For UTP - 1 Pair, pins 1 and 2 are used for transmission.</li>
            <li><strong>PoE</strong></li>
            <li style={{paddingLeft: "40px"}}>Every device is capable of pass-through PoE. Only the 1-channel device can be powered by pass-through PoE. Every other device requires an external power supply.</li>
            <li style={{paddingLeft: "40px"}}>There is no pass-through PoE when using one pair of UTP.</li>
            <li><strong>LEDs</strong></li>
            <li style={{paddingLeft: "40px"}}>The entire setup must be connected for the LEDs to illuminate.</li>
            <li style={{paddingLeft: "40px"}}>The Extended Distance LED will illuminate when there is a valid connection.</li>
            <li style={{paddingLeft: "40px"}}>The Ethernet port LEDs will illuminate when there is a valid connection.</li>


            <p><strong>2. View the <a href="pdf/EthernetExtender/CLFE_X_EO_C-U.pdf" >installation manual</a> for the device images, installation instructions, and specification tables.</strong></p>
            <li style={{paddingLeft: "40px"}}>Page 2: CLFE1EOC and CLFE1EOU images and dip switches.</li>
            <li style={{paddingLeft: "40px"}}>Page 3: CLFE4EOC images and dip switches.</li>
            <li style={{paddingLeft: "40px"}}>Page 4: CLFE4EOU images and dip switches.</li>
            <li style={{paddingLeft: "40px"}}>Page 5: CLFE8EOC and CLFE8EOU images and dip switches.</li>
            <li style={{paddingLeft: "40px"}}>Page 6: CLFE16EOC images and dip switches.</li>
            <li style={{paddingLeft: "40px"}}>Page 7: CLFE16EOU images and dip switches.</li>
            <li style={{paddingLeft: "40px"}}>Page 8: Application diagrams.</li>
            <li style={{paddingLeft: "40px"}}>Page 9: Installation instructions, power table and LED table.</li>
            <li style={{paddingLeft: "40px"}}>Page 10: Application notes, extended distance table, troubleshooting guide.</li>
          </>
        )}
      </div>

      <div id="CLLFE-troubleshooting" className="faq-answer">
        <h1 className="faq-title" onClick={() => toggleFAQ("CLLFE-troubleshooting")}>
          How to Configure the CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C) Devices
          <span className={`dropdown-chevron ${isFAQExpanded("CLLFE-troubleshooting") ? 'expanded' : ''}`}></span>
        </h1>
        {isFAQExpanded("CLLFE-troubleshooting") && (
          <>
            <p><strong>1.</strong> Note the following information.</p>
            <li><strong>Local (CLL) vs. Remote (CLR)</strong></li>
            <li style={{paddingLeft: "40px"}}>A local and remote device are required on both ends of the extended distance.</li>
            <li style={{paddingLeft: "40px"}}>The devices with 1, 4, 8, or 16 channels that begin with <strong>CLL</strong> are the local units. The devices with 1 or 4 channels that begin with <strong>CLR</strong> are the remote units.</li>
            <li><strong>10 Mbps vs. 100 Mbps</strong></li>
            <li style={{paddingLeft: "40px"}}>Every device has a dip switch to flip between 10 Mbps or 100 Mbps.</li>
            <li style={{paddingLeft: "40px"}}>The devices on both ends of the extended distance require the same data rate dip switch configuration.</li>
            <li><strong>UTP - 1 Pair vs. UTP - 4 Pair</strong></li>
            <li style={{paddingLeft: "40px"}}>For the Ethernet over UTP extenders, the devices on both ends of the extended distance require the same UTP dip switch configuration.</li>
            <li style={{paddingLeft: "40px"}}>For UTP - 1 Pair, pins 1 and 2 are used for transmission.</li>
            <li><strong>PoE</strong></li>
            <li style={{paddingLeft: "40px"}}>Every device is capable of pass-through PoE.</li>
            <li style={{paddingLeft: "40px"}}>The local or remote device can inject 48VDC at the 802.3at standard..</li>
            <li style={{paddingLeft: "40px"}}>There is no pass-through PoE when using one pair of UTP.</li>
            <li><strong>LEDs</strong></li>
            <li style={{paddingLeft: "40px"}}>The entire setup must be connected for the LEDs to illuminate.</li>
            <li style={{paddingLeft: "40px"}}>The Extended Distance LED will illuminate when there is a valid connection.</li>
            <li style={{paddingLeft: "40px"}}>The Ethernet port LEDs will illuminate when there is a valid connection.</li>

            <p><strong>2. View the <a href="pdf/EthernetExtender/CL_L-R_FE_X_POE_C-U.pdf" >installation manual</a> for the device images, installation instructions, and speciication tables.</strong></p>
            <li style={{paddingLeft: "40px"}}>Page 2: CLLFE1POEC and CLRFE1POEC images and dip switch.</li>
            <li style={{paddingLeft: "40px"}}>Page 3: CLLFE1POEU and CLRFE1PEOU images and dip switches.</li>
            <li style={{paddingLeft: "40px"}}>Page 4: CLLFE4POEC and CLRFE4PEOU images and dip switch.</li>
            <li style={{paddingLeft: "40px"}}>Page 5: CLLFE4POEU and CLRFE4POEU images and dip switches.</li>
            <li style={{paddingLeft: "40px"}}>Page 6: CLLFE8EOC images and dip switches.</li>
            <li style={{paddingLeft: "40px"}}>Page 7: CLLFE8EOU images and dip switches.</li>
            <li style={{paddingLeft: "40px"}}>Page 8: CLLFE16EOC images and dip switches.</li>
            <li style={{paddingLeft: "40px"}}>Page 9: CLLFE16EOU images and dip switches.</li>
            <li style={{paddingLeft: "40px"}}>Page 10: Application diagrams.</li>
            <li style={{paddingLeft: "40px"}}>Page 11: Installation instructions, power table, LED table, and application notes.</li>
            <li style={{paddingLeft: "40px"}}>Page 12: Extended distance table and troubleshooting guide</li>
            <li style={{paddingLeft: "40px"}}>Page 13: Ferrite core</li>
          </>
        )}
      </div>
    </div>
  );
};

export default EthernetExtenderTroubleshooting;