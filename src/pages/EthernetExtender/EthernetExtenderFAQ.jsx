import { useEffect, useState } from 'react';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import SurgeSuppression from '../../relevant-information/SurgeSuppression';

const EthernetExtenderFAQ = ({ activeSubSection }) => {
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
          style={{width: "20rem"}}
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
        <div id="copper" className="faq-answer">
          <h1 className="faq-title" onClick={() => toggleFAQ("copper")}>
            Gain a Better Understanding of Twisted Pair Cabling
            <span className={`dropdown-chevron ${isFAQExpanded("copper") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("copper") && (
            <>
              <p><strong>Unshielded Twisted Pair (UTP)</strong> copper cables have a standard maximum transmission distance of 100 meters (328 feet) for Ethernet networks. This limitation exists because electrical signals weaken as they travel through the copper wires. The resistance in the cable causes signal loss, known as attenuation, which reduces the strength and quality of the transmitted data. Over longer distances, the receiving end may struggle to correctly interpret the signals, leading to data loss or transmission errors.</p>
              <p>Another challenge with copper cables is their vulnerability to <strong>electromagnetic interference (EMI)</strong>. Nearby electrical devices, power lines, and even other network cables can introduce noise into the signal, causing disruptions and reducing overall performance. Over long distances, this interference becomes more noticeable, further degrading the signal quality and making communication unreliable.</p>
              <p>For applications that require longer transmission distances without the need for fiber optics, extended copper solutions exist. Using technologies like <strong>DSL (Digital Subscriber Line)</strong> or <strong>BroadR-Reach,</strong> specialized network extenders can transmit data up to 2,000 feet. These solutions often require signal repeaters or amplification to maintain data integrity over such extended distances.</p>
            </>
          )}
        </div>

        <div id="coax" className="faq-answer">
          <h1 className="faq-title" onClick={() => toggleFAQ("coax")}>
            Gain a Better Understanding of Coaxial Cabling
            <span className={`dropdown-chevron ${isFAQExpanded("coax") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("coax") && (
            <>
              <p><strong>BNC Connector:</strong> The BNC (Bayonet Neill-Concelman) connector is a small, quick-connect, twist-and-lock coaxial cable connector used in video, radio, and data transmission applications. It provides a secure connection and is commonly found in CCTV systems, radio communications, and older analog video setups. Unlike threaded connectors, the BNC's bayonet-style design allows for quick installation and removal, making it ideal for professional video and networking environments.</p>
              <p><strong>Coaxial Cable Transmission Distance:</strong> One of the advantages of coaxial cables is their ability to carry signals over longer distances compared to standard twisted-pair copper cables. This makes coax a viable option for legacy surveillance systems and specialized communication networks. However, over long distances, signal loss (attenuation) occurs, and amplifiers or repeaters may be needed to maintain signal integrity.</p>
              <p><strong>Types of Coaxial Cables:</strong> Coaxial cables come in various types, each suited for specific applications. The most common types include RG11, RG6, and RG59, which differ in size, impedance, and usage. These cables are used in applications such as television broadcasting, security camera systems, and broadband internet. The impedance of a coaxial cable, usually 50 or 75 ohms, determines its electrical resistance and suitability for different signal types. Thicker cables like RG11 offer lower signal loss and longer transmission distances, while thinner cables like RG59 are more flexible and easier to install in tight spaces.</p>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "18px",
                  textAlign: "left",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "rgb(13, 128, 173)", color: "#fff" }}>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Cable Type</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Applications</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Impedance</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Size</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Max Distance</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Signal Loss</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "RG11", applications: "Used in long-distance video and internet connections", impedance: "75 Ohms", size: "Large", maxDistance: "Up to 1,500 ft", signalLoss: "Low" },
                    { type: "RG6", applications: "Used in satellite TV, cable systems, and broadband internet", impedance: "75 Ohms", size: "Medium", maxDistance: "Up to 1,000 ft", signalLoss: "Medium" },
                    { type: "RG59", applications: "Used in analog video applications, CCTV", impedance: "75 Ohms", size: "Small", maxDistance: "Up to 750 ft", signalLoss: "High" },
                    { type: "RG58", applications: "Used in radio and data communication", impedance: "50 Ohms", size: "Small", maxDistance: "Up to 500 ft", signalLoss: "Higher" },
                  ].map((item, index) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
                      }}
                    >
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.type}</td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.applications}</td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.impedance}</td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.size}</td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.maxDistance}</td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.signalLoss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>

        <div id="poe" className="faq-answer">
          <h1 className="faq-title" onClick={() => toggleFAQ("poe")}>
            Gain a Better Understanding of Power Over Ethernet
            <span className={`dropdown-chevron ${isFAQExpanded("poe") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("poe") && (
            <>
              <PowerOverEthernet />
            </>
          )}
        </div>

        <div id="surge" className="faq-answer">
          <h1 className="faq-title" onClick={() => toggleFAQ("surge")}>
            Gain a Better Understanding of Surge Suppression
            <span className={`dropdown-chevron ${isFAQExpanded("surge") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("surge") && (
            <>
              <SurgeSuppression />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EthernetExtenderFAQ;