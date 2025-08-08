import { useEffect, useState } from 'react';
import Fiber from '../../relevant-information/Fiber';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import SurgeSuppression from '../../relevant-information/SurgeSuppression';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import NoPoE from '../../relevant-information/NoPoe';

const EthernetSwitchFAQ = ({ activeSubSection }) => {
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
          <div className="faq-answer" id="switch-no-power-light">
              <h1 className="faq-title" onClick={() => toggleFAQ("switch-no-power-light")}>
                How to Troubleshoot an Ethernet Switch with Power Issues
                <span className={`dropdown-chevron ${isFAQExpanded("switch-no-power-light") ? 'expanded' : ''}`}></span>
              </h1>
              {isFAQExpanded("switch-no-power-light") && (
                <>
                  <NoPowerLight />
                </>
              )}
          </div>

          <div className="faq-answer" id="switch-no-optical-link">
              <h1 className="faq-title" onClick={() => toggleFAQ("switch-no-optical-link")}>
                How to Troubleshoot an Ethernet Switch with Optical Link Issues
                <span className={`dropdown-chevron ${isFAQExpanded("switch-no-optical-link") ? 'expanded' : ''}`}></span>
              </h1>
              {isFAQExpanded("switch-no-optical-link") && (
                <>
                  <NoOpticalLink />
                </>
              )}
          </div>

          <div className="faq-answer" id="switch-not-communicating">
              <h1 className="faq-title" onClick={() => toggleFAQ("switch-not-communicating")}>
                How to Troubleshoot an Ethernet Switch with Network Issues
                <span className={`dropdown-chevron ${isFAQExpanded("switch-not-communicating") ? 'expanded' : ''}`}></span>
              </h1>
              {isFAQExpanded("switch-not-communicating") && (
                <>
                  <p><strong>1.</strong> Follow the <strong>"How to Troubleshoot an Ethernet Switch with Power Issues"</strong> procedure to rule out power-related issues </p>
                  <p><strong>2.</strong> Determine if all ports succesfully pass network traffic</p>
                  <p><strong>3.</strong> Determine if communication is restored on its own or if the switch requires a power cycle.</p>
                  <p><strong>4.</strong> Determine the interval in which the switch has the issues (e.g. every day, once a week, etc.) or if it is random.</p>
                  <p><strong>5.</strong> Determine if the web interface is accessible.</p>
                  <p><strong>6.</strong> Factory default the switch to determine if the issue persists.</p>
                  <p><strong>7.</strong> Identify the current firmware version of the switch and update it to the latest version.</p>
                  <p><strong>8.</strong> Isolate the switch outside of the network on a bench to determine if the issue persists.</p>
                  <p><strong>9.</strong> If the switch supports logging, review the event logs for any error messages, warnings, or hardware-related issues that might point to the cause of the issue.</p>
                  <p><strong>10.</strong> Verify that the speed and duplex settings of the affected port(s) match those of the connected device. Mismatched settings could cause intermittent connectivity. Ideally, both should be set to auto-negotiate.</p>
                  <p><strong>11.</strong> Test the Ethernet cables between the devices and the switch to ensure they are properly wired and not experiencing intermittent failures due to poor quality or damage.</p>
                  <p><strong>12.</strong> Ensure that the network is not congested. High traffic levels or large bursts of data could overwhelm the switch, causing temporary drops. Use a network analyzer to monitor traffic and identify congestion points.</p>
                  <p><strong>13.</strong> Replace the switch with a known-working one to determine if the same issue persists with the new switch.</p>
                </>
              )}
          </div>

          <div className="faq-answer" id="switch-no-poe">
              <h1 className="faq-title" onClick={() => toggleFAQ("switch-no-poe")}>
                How to Troubleshoot an Ethernet Switch with PoE Issues
                <span className={`dropdown-chevron ${isFAQExpanded("switch-no-poe") ? 'expanded' : ''}`}></span>
              </h1>
              {isFAQExpanded("switch-no-poe") && (
                <>
                  <NoPoE />
                </>
              )}
          </div>

          <div className="faq-answer" id="switch-ip-address">
              <h1 className="faq-title" onClick={() => toggleFAQ("switch-ip-address")}>
                How to Find the IP Address of an Ethernet Switch
                <span className={`dropdown-chevron ${isFAQExpanded("switch-ip-address") ? 'expanded' : ''}`}></span>
              </h1>
              {isFAQExpanded("switch-ip-address") && (
                <>
                  <p><strong>1.</strong> Enter the device's part number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a> to find the default IP address in the installation manual. The typical default configurations of a Comnet Ethernet switch are:</p>
                  <li style={{paddingLeft: "40px"}}>Default IP address: 192.168.10.1</li>
                  <li style={{paddingLeft: "40px"}}>Default username: "admin"</li>
                  <li style={{paddingLeft: "40px"}}>Default password: "admin"</li>
                  <p><strong>2.</strong> If the default IP address does not work, but the username and password of the switch is known:</p>
                  <p style={{paddingLeft: "40px"}}><strong>2.1.</strong> Open PuTTY or Tera Term and start a serial connection. The typical serial connection configuration for a Comnet Ethernet switch are:</p>
                  <li style={{paddingLeft: "100px"}}>Speed (baud): 115200</li>
                  <li style={{paddingLeft: "100px"}}>Data bits: 8</li>
                  <li style={{paddingLeft: "100px"}}>Stop bits: 1</li>
                  <li style={{paddingLeft: "100px"}}>Parity: None</li>
                  <li style={{paddingLeft: "100px"}}>Flow control: None</li>
                  <p style={{paddingLeft: "40px"}}><strong>2.2.</strong> Enter the username and password.</p>
                  <p style={{paddingLeft: "40px"}}><strong>2.3.</strong> Enter the command "show ip interface brief"</p>
                  <p><strong>3.</strong> If the username or password of the switch is unknown:</p>
                  <p style={{paddingLeft: "40px"}}><strong>3.1.</strong> Connect the unit to another switch with LLDP enabled. Then, check the LLDP Neighbors section of the other switch to find the IP address of all connected devices.</p>
                  <p><strong>4.</strong> Use Advanced IP Scanner to scan through the possible IP ranges that the switch may be under.</p>
                </>
              )}
          </div>

          <div className="faq-answer" id="switch-default">
              <h1 className="faq-title" onClick={() => toggleFAQ("switch-default")}>
                How to Factory Default an Ethernet Switch
                <span className={`dropdown-chevron ${isFAQExpanded("switch-default") ? 'expanded' : ''}`}></span>
              </h1>
              {isFAQExpanded("switch-default") && (
                <>
                  <p><strong>1.</strong> If the IP address of the switch is known, use the Factory Default option in the GUI.</p>
                  <p><strong>2.</strong> If the IP address of the switch is unkown, open PuTTY or Tera Term and start a serial connection. The typical serial connection configuration for a Comnet Ethernet switch are:</p>
                  <li style={{paddingLeft: "60px"}}>Speed (baud): 115200</li>
                  <li style={{paddingLeft: "60px"}}>Data bits: 8</li>
                  <li style={{paddingLeft: "60px"}}>Stop bits: 1</li>
                  <li style={{paddingLeft: "60px"}}>Parity: None</li>
                  <li style={{paddingLeft: "60px"}}>Flow control: None</li>
                  <p><strong>2.1</strong> Enter the command "reload defaults".</p>
                </>
              )}
          </div>
        <div id="switch" className="faq-answer">
          <h1 className="faq-title" onClick={() => toggleFAQ("switch")}>
            Gain a Better Understanding of Ethernet Switches
            <span className={`dropdown-chevron ${isFAQExpanded("switch") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("switch") && (
            <>
              <p>Ethernet switches are used to connect end devices like PCs, printers, servers, and other networking devices within a <strong>local area network (LAN)</strong>. Their role is to switch packets of data from one device to another. This is achieved by examining the destination <strong>MAC address</strong> in the Ethernet frame and forwarding the packet to the appropriate port on the switch that is connected to the destination device.</p>
              <p style={{paddingTop:"40px", paddingBottom: "10px", textDecoration: "underline"}}>The following protocols are commonly used in Ethernet switches:</p>
              <p><strong>ARP (Address Resolution Protocol)</strong> is used to map an IP address to a MAC address. It allows devices on the same local network to find each other and communicate effectively by resolving IP addresses to their corresponding physical hardware addresses.</p>
              <p><strong>LLDP (Link Layer Discovery Protocol)</strong> is a protocol used by network devices to discover and exchange information about each other on a local network. It helps network administrators manage their network by providing details about connected devices and their capabilities.</p>
              <p><strong>NTP (Network Time Protocol)</strong> is used to synchronize the clocks of computers and devices over a network. It ensures that all devices within a network have consistent time, which is crucial for activities like logging, data timestamps, and scheduled tasks.</p>
              <p><strong>VLAN (Virtual Local Area Network)</strong> using 802.1Q is a protocol that allows network administrators to create virtual networks within a physical network. VLANs help segment traffic, improve network performance, and enhance security by isolating different groups of devices.</p>
              <p><strong>LACP (Link Aggregation Control Protocol)</strong> is a protocol used to combine multiple network links into a single logical link. This increases the bandwidth and provides redundancy in case of a link failure, improving network reliability and performance.</p>
              <p><strong>STP (Spanning Tree Protocol)</strong> is a network protocol that ensures there are no loops in Ethernet networks. It does this by creating a tree-like structure of the network where redundant paths are blocked, ensuring efficient communication without looping.</p>
              <p><strong>RSTP (Rapid Spanning Tree Protocol)</strong> is a network protocol designed to prevent loops in Ethernet networks. It provides faster convergence compared to the older STP, making network recovery more efficient in case of topology changes.</p>
              <p><strong>MSTP (Multiple Spanning Tree Protocol)</strong> is an enhancement of STP that allows multiple spanning tree instances to exist within a single network. This enables more efficient use of network resources and helps in optimizing traffic flow.</p>
              <p><strong>IGMP (Internet Group Management Protocol)</strong> is used by devices to join or leave multicast groups in IP networks. It is essential for managing the delivery of multicast traffic to a group of receivers without flooding the entire network.</p>
              <p><strong>QoS (Quality of Service)</strong> refers to a set of technologies used to manage network traffic and ensure the performance of critical applications. It helps prioritize important data, such as voice or video, over less critical traffic like email or file transfers.</p>
              <p><strong>SNMP (Simple Network Management Protocol)</strong> is used to manage and monitor network devices. It allows network administrators to gather information about the status and performance of devices, and it can also be used to configure network devices remotely.</p>
              <p><strong>Telnet</strong> is a network protocol that allows users to access remote devices over a network. However, it is not secure, as it transmits data, including passwords, in plain text. For secure remote access, SSH is generally preferred over Telnet.</p>
              <p><strong>SSH (Secure Shell)</strong> is a cryptographic network protocol used for secure communication between devices. It allows administrators to access and manage remote systems securely over an unsecured network, replacing older, insecure protocols like Telnet.</p>
              <p><strong>RADIUS (Remote Authentication Dial-In User Service)</strong> and <strong>TACACS+ (Terminal Access Controller Access-Control System Plus)</strong> are network protocols used for authentication, authorization, and accounting. They help secure network access by ensuring only authorized users can connect and that their activities are monitored.</p>
            </>
          )}
        </div>

        <div id="fiber" className="faq-answer">
          <h1 className="faq-title" onClick={() => toggleFAQ("fiber")}>
            Gain a Better Understanding of Fiber Optics
            <span className={`dropdown-chevron ${isFAQExpanded("fiber") ? 'expanded' : ''}`}></span>
          </h1>
          {isFAQExpanded("fiber") && (
            <>
              <Fiber />
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

export default EthernetSwitchFAQ;