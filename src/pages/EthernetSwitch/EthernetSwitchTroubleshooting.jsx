import { useEffect, useState } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import NoPoE from '../../relevant-information/NoPoe';

const EthernetSwitchTroubleshooting = ({ activeSubSection }) => {
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
        <div className="faq-answer" id="switch-diagnose">
            <h1 className="faq-title" onClick={() => toggleFAQ("switch-diagnose")}>
              How to Diagnose the Issues of an Ethernet Switch
              <span className={`dropdown-chevron ${isFAQExpanded("switch-diagnose") ? 'expanded' : ''}`}></span>
            </h1>
            {isFAQExpanded("switch-diagnose") && (
              <>
                <p><strong>Document the following information:</strong></p>
                <p><strong>1.</strong> Has the Ethernet switch ever operated correctly? If so, for how long before the issue occurred?</p>
                <p><strong>2.</strong> Does the Ethernet switch power on and remain powered?</p>
                <p><strong>3.</strong> Can the Ethernet switch be reached via a ping test?</p>
                <p><strong>4.</strong> Do all ports successfully forward network traffic?</p>
                <p><strong>5.</strong> If this is a PoE switch, are connected devices receiving power as expected?</p>
                <p><strong>6.</strong> If none of the above issues apply, could the issue be related to the switch's configuration?</p>
              </>
            )}
        </div>

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
                <p><strong>2.</strong> If the default IP address does not work, but the username and password are known:</p>
                <p style={{paddingLeft: "40px"}}><strong>2.1.</strong> Open PuTTY or Tera Term and start a serial connection using the following configurations.</p>
                <li style={{paddingLeft: "60px"}}>Speed (baud): 115200</li>
                <li style={{paddingLeft: "60px"}}>Data bits: 8</li>
                <li style={{paddingLeft: "60px"}}>Stop bits: 1</li>
                <li style={{paddingLeft: "60px"}}>Parity: None</li>
                <li style={{paddingLeft: "60px"}}>Flow control: None</li>
                <p style={{paddingLeft: "40px"}}><strong>2.2.</strong> Enter the username and password.</p>
                <p style={{paddingLeft: "40px"}}><strong>2.3.</strong> Type "show ip interface brief" and click enter.</p>
                <p><strong>3.</strong> If the username or password is not known:</p>
                <p style={{paddingLeft: "40px"}}><strong>3.1.</strong> Connect the switch to another LLDP-enabled switch, then check the LLDP Remote Device Summary to view details about the connected device.</p>
                <p><strong>4.</strong> Use Advanced IP Scanner to scan through the possible IP ranges that the switch is under.</p>
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
                <p><strong>1.</strong> Open PuTTY or Tera Term and start a serial connection using the following configurations.</p>
                <li style={{paddingLeft: "60px"}}>Speed (baud): 115200</li>
                <li style={{paddingLeft: "60px"}}>Data bits: 8</li>
                <li style={{paddingLeft: "60px"}}>Stop bits: 1</li>
                <li style={{paddingLeft: "60px"}}>Parity: None</li>
                <li style={{paddingLeft: "60px"}}>Flow control: None</li>
                <p><strong>2.</strong> Enter the username and password.</p>
                <p><strong>3.</strong> Type "enable" and click enter.</p>
                <p><strong>4.</strong> Type "reload defaults" and click enter.</p>
              </>
            )}
        </div>
    </div>
  );
};

export default EthernetSwitchTroubleshooting;