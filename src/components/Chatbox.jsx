import React, { useState, useEffect, useRef } from 'react';
import ServerProducts from '../pages/Razberi/RazberiProducts';
import EthernetSwitchProducts from '../pages/EthernetSwitch/EthernetSwitchProducts';
import MediaConverterProducts from '../pages/MediaConverter/MediaConverterProducts';
import EthernetExtenderProducts from '../pages/EthernetExtender/EthernetExtenderProducts';
import WirelessProducts from '../pages/Wireless/WirelessProducts';
import SerialDataProducts from '../pages/SerialData/SerialDataProducts';
import WiegandProducts from '../pages/Wiegand/WiegandProducts';
import ContactClosureProducts from '../pages/ContactClosure/ContactClosureProducts';
import SFPProducts from '../pages/SFP/SFPProducts';
import PowerSupplyProducts from '../pages/PowerSupply/PowerSupplyProducts';
import PoeInjectorProducts from '../pages/PoeInjector/PoeInjectorProducts';
import EnclosureProducts from '../pages/Enclosure/EnclosureProducts';
import "../styles/Chatbox.css";

// Knowledge base for Razberi servers
const razberiTroubleshooting = {
  "server power": "How to Troubleshoot a Server With Powering Issues:\n[1] Document if the server boots up at all or how frequently it powers on and off.\n[2] Confirm the AC outlet is producing 100 - 120VAC.\n[3] If a UPS is in use, bypass it temporarily to test with direct wall power.\n[4] Replace the power cord.",
  "server poe": "How to Troubleshoot a Server Switch with PoE Issues:\n[1] Confirm the AC outlet is producing 100 - 120VAC.\n[2] If a UPS is in use, bypass it temporarily to test with direct wall power.\n[3] Replace the power cord.\n[4] Try pinging the switch from the command prompt on the server.",
  "server raid": "How to Troubleshoot a Server with RAID Issues:\n[1] Take note of the RAID configuration requirements.\n[2] Confirm the current RAID configuration and check for failed HDD/RAID.\n[3] Contact technical support for warranty status.",
  "server nic": "How to Troubleshoot a Server with NIC Issues:\n[1] Enter 'View network status and tasks' in Windows search.\n[2] Click 'Change adapter settings'.\n[3] Disable and enable the NIC.\n[4] Diagnose the NIC connection.",
  "server os": "How to Troubleshoot a Server with OS Issues:\n[1] Check the Razberi Monitor alert logs.\n[2] Check the Event Viewer alert logs.\n[3] Check the iDRAC alert logs.\n[4] Check CPU utilization in Task Manager.",
  "server rdp": "How to Set Up a Remote Desktop Connection:\n[1] Enable Remote Desktop in the server's settings.\n[2] Connect a PC to a NIC on the server.\n[3] Open Remote Desktop Connection software on the PC.\n[4] Enter the IP address of the server's NIC.",
  "server registration": "How to Skip the Razberi Monitor Registration:\nWhile on the registration page, hold down: Ctrl + Shift + Alt + F11.",
  "server password": "What to do if the Windows Password is Forgotten:\nThere is no way to reset the Windows password. A recovery of the operating system will need to be performed."
};

// Knowledge base for Ethernet switches
const ethernetSwitchTroubleshooting = {
  "switch power": "How to Troubleshoot an Ethernet Switch with Power Issues:\n[1] Confirm the AC outlet is producing 100 - 120VAC.\n[2] If a UPS is in use, bypass it temporarily to test with direct wall power.\n[3] Replace the power cord.",
  "switch optical": "How to Troubleshoot an Ethernet Switch with Optical Link Issues:\nCheck fiber connections, clean connectors, verify compatible transceivers, and check link status.",
  "switch network": "How to Troubleshoot an Ethernet Switch with Network Issues:\n[1] Check power-related issues first.\n[2] Determine if all ports pass network traffic.\n[3] Check if communication is restored after power cycle.\n[4] Verify speed and duplex settings match connected devices.",
  "switch poe": "How to Troubleshoot an Ethernet Switch with PoE Issues:\n[1] Confirm the AC outlet is producing 100 - 120VAC.\n[2] If a UPS is in use, bypass it temporarily.\n[3] Replace the power cord.\n[4] Confirm powered devices are IEEE 802.3af/at compliant.",
  "switch ip": "How to Find the IP Address of an Ethernet Switch:\n[1] Check default IP in installation manual (typically 192.168.10.1).\n[2] Use serial connection if default IP doesn't work.\n[3] Use LLDP if credentials are unknown.\n[4] Use IP scanner to scan possible ranges.",
  "switch default": "How to Factory Default an Ethernet Switch:\n[1] Open serial connection (115200 baud, 8 data bits, 1 stop bit).\n[2] Enter username and password.\n[3] Type 'enable'.\n[4] Type 'reload defaults'."
};

const mediaConverterTroubleshooting = {
  "media converter power": "How to Troubleshoot a Media Converter with Power Issues:\n[1] Confirm the AC outlet is producing 100 - 120VAC.\n[2] If a UPS is in use, bypass it temporarily to test with direct wall power.\n[3] Replace the power cord.",
  "media converter optical": "How to Troubleshoot a Media Converter with Optical Link Issues:\nCheck fiber connections, clean connectors, verify compatible transceivers, and check link status.",
  "media converter communication": "How to Troubleshoot a Media Converter with no Ethernet Port Activity:\n[1] Follow power troubleshooting steps first\n[2] Replace the Ethernet cable\n[3] Replace the media converter with another of the same model",
  "media converter poe": "How to Troubleshoot a Media Converter with PoE Issues:\n[1] Confirm powered devices are IEEE 802.3af/at compliant\n[2] Verify power supply provides sufficient wattage\n[3] Check voltage with a voltmeter (should be 48-56VDC)",
  "media converter cnfe2mc2c": "How to configure the contacts on a CNFE2MC2C:\nView the configuration manual at pdf/MediaConverter/CNFE2MC2C.pdf"
};

const mediaConverterInfo = {
  "media converter": "Media Converter Information:\n- Converts between copper and fiber media\n- Operates at Layer 1 (physical layer)\n- Available in PoE and non-PoE versions\n- Comes in full-sized and miniature form factors\n- Supports Fast Ethernet (10/100Mbps) or Gigabit Ethernet (1000Mbps)\n- Advanced versions include dual and quad media converters"
};

// Knowledge base for Contact Closures
const contactClosureTroubleshooting = {
  "contact closure power": "How to Troubleshoot a Contact Closure Device with Power Issues:\n[1] Confirm the AC outlet is producing 100 - 120VAC.\n[2] If a UPS is in use, bypass it temporarily.\n[3] Replace the power cord.",
  "contact closure optical": "How to Troubleshoot a Unit with Optical Link Issues:\nCheck fiber connections, clean connectors, verify compatible transceivers, and check link status.",
  "contact closure contacts": "How to Troubleshoot a Unit That is Not Sending or Receiving the Status of a Contact:\n[1] Ensure wires are connected properly\n[2] Confirm inputs are dry (volt-free) closures\n[3] Tighten terminal block screws\n[4] Cycle power on the unit"
};

const contactClosureInfo = {
  "contact closure": "Contact Closure Information:\n- Form A relays: SPST normally open\n- Form C relays: SPDT with NO and NC contacts\n- Latching vs. non-latching relays\n- Supervision detects short/open circuits\n- Summary fault relays monitor fiber status"
};

// Knowledge base for Ethernet Extenders
const ethernetExtenderTroubleshooting = {
  "ethernet extender clf": "How to Troubleshoot CLFE(X)EO(U/C) to CLFE(X)EO(U/C) Devices:\n[1] View the installation manual at pdf/EthernetExtender/CLFE_X_EO_C-U.pdf\n[2] Note:\n- CLL units are local, CLR are remote\n- PoE is available at 802.3at standard\n- LEDs require full connection to illuminate",
  "ethernet extender cll": "How to Troubleshoot CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C) Devices:\n[1] View the installation manual at pdf/EthernetExtender/CL_L-R_FE_X_POE_C-U.pdf\n[2] Note:\n- CLL units are local, CLR are remote\n- PoE is available at 802.3at standard\n- LEDs require full connection to illuminate"
};

const ethernetExtenderInfo = {
  "ethernet extender": "Ethernet Extender Information:\n- Extends Ethernet beyond 100m limit\n- Uses UTP copper or coaxial cables\n- Different models for various channel counts\n- Local (CLL) and remote (CLR) units\n- PoE available at 802.3at standard"
};

// Knowledge base for Wireless
const wirelessTroubleshooting = {
  "wireless configuration": "How to Configure Comnet's Wireless Radios:\nView configuration documentation at pdf/Wireless/NetWave.pdf",
  "wireless power": "How to Troubleshoot a Wireless Radio with Power Issues:\n[1] Use hardened IEEE 802.3af/at compliant PoE injector\n[2] Replace Ethernet cable\n[3] Verify PoE injector works with another device\n[4] Try another PoE injector or switch",
  "wireless connection": "How to Troubleshoot a Wireless Radio that Drops Out:\n[1] Default and reconfigure radio\n[2] Confirm proper power supply\n[3] Check firmware versions\n[4] Verify unique IP addresses\n[5] Check line of sight\n[6] Match ESSID and PSK\n[7] Limit throughput to 250Mbps\n[8] Enable Ping Watchdog\n[9] Set automatic reboot schedule"
};

const wirelessInfo = {
  "wireless": "Wireless Ethernet Information:\n- Uses ESSID (network name) and PSK (password)\n- Antenna gain measured in dBi\n- RSSI measures signal strength\n- Supports various Wi-Fi standards (802.11a/b/g/n/ac/ax)\n- Secure communication with WPA2 encryption"
};

// Knowledge base for Wiegand
const wiegandTroubleshooting = {
  "wiegand power": "How to Troubleshoot a Unit with Power Issues:\n[1] Confirm the AC outlet is producing 100 - 120VAC.\n[2] If a UPS is in use, bypass it temporarily.\n[3] Replace the power cord.",
  "wiegand optical": "How to Troubleshoot a Unit with Optical Link Issues:\nSwap the transmit and receive fiber strands.",
  "wiegand configuration": "How to Configure FDW1000 and EXP101 Devices:\n[1] Default the FDW1000/C\n[2] Configure dip switches based on setup\n[3] Configure expansion modules if needed\n[4] Default the FDW1000/R\n[5] Configure dip switches\n[6] Ensure proper wiring with common ground"
};

const wiegandInfo = {
  "wiegand": "Wiegand Information:\n- Communication protocol for access control\n- Transmits data over two wires (Data 0 and Data 1)\n- Can be extended over fiber\n- Different from OSDP (Open Supervised Device Protocol)\n- Requires proper configuration of dip switches"
};

// Knowledge base for general information
const generalInfo = {
  "server": "Server Information:\n- Computing Terminology\n- Power Over Ethernet\nUse navigation for detailed information.",
  "ethernet switch": "Ethernet Switch Information:\n- Switch Protocols\n- Fiber Information\n- Power Over Ethernet\n- Surge Suppression\n- OSI Model\nUse navigation for detailed information."
};

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hi! I am Comnet Bot! How can I help you?", 
      isUser: false 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const messagesEndRef = useRef(null);

  // Combine all products into a single array with their categories
  const allProducts = [
    ...ServerProducts.map(p => ({ ...p, category: 'Server' })),
    ...EthernetSwitchProducts.map(p => ({ ...p, category: 'Ethernet Switch' })),
    ...MediaConverterProducts.map(p => ({ ...p, category: 'Media Converter' })),
    ...EthernetExtenderProducts.map(p => ({ ...p, category: 'Ethernet Extender' })),
    ...WirelessProducts.map(p => ({ ...p, category: 'Wireless' })),
    ...SerialDataProducts.map(p => ({ ...p, category: 'Serial Data Over Fiber' })),
    ...WiegandProducts.map(p => ({ ...p, category: 'Wiegand Over Fiber' })),
    ...ContactClosureProducts.map(p => ({ ...p, category: 'Contact Closure Over Fiber' })),
    ...SFPProducts.map(p => ({ ...p, category: 'SFP' })),
    ...PowerSupplyProducts.map(p => ({ ...p, category: 'Power Supply' })),
    ...PoeInjectorProducts.map(p => ({ ...p, category: 'PoE Injector' })),
    ...EnclosureProducts.map(p => ({ ...p, category: 'Enclosure' }))
  ];

  const categories = [
    "Server",
    "Ethernet Switch",
    "Ethernet Extender",
    "Wireless",
    "Media Converter",
    "Serial Data Over Fiber",
    "Contact Closure Over Fiber",
    "Wiegand Over Fiber",
    "Power Supply",
    "PoE Injector",
    "Enclosure"
  ];

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    scrollToBottom();
  };

  const closeChat = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const findAnswer = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    // Check for Razberi server questions
    if (lowerQuestion.includes('razberi') || lowerQuestion.includes('server')) {
      if (lowerQuestion.includes('power') || lowerQuestion.includes('boot')) {
        return razberiTroubleshooting["server power"];
      } else if (lowerQuestion.includes('poe')) {
        return razberiTroubleshooting["server poe"];
      } else if (lowerQuestion.includes('raid')) {
        return razberiTroubleshooting["server raid"];
      } else if (lowerQuestion.includes('nic') || lowerQuestion.includes('network interface')) {
        return razberiTroubleshooting["server nic"];
      } else if (lowerQuestion.includes('os') || lowerQuestion.includes('operating system')) {
        return razberiTroubleshooting["server os"];
      } else if (lowerQuestion.includes('rdp') || lowerQuestion.includes('remote desktop')) {
        return razberiTroubleshooting["server rdp"];
      } else if (lowerQuestion.includes('registration')) {
        return razberiTroubleshooting["server registration"];
      } else if (lowerQuestion.includes('password')) {
        return razberiTroubleshooting["server password"];
      } else {
        return generalInfo["server"];
      }
    }
    
    // Check for Ethernet switch questions
    if (lowerQuestion.includes('ethernet switch') || lowerQuestion.includes('switch')) {
      if (lowerQuestion.includes('power')) {
        return ethernetSwitchTroubleshooting["switch power"];
      } else if (lowerQuestion.includes('optical') || lowerQuestion.includes('fiber') || lowerQuestion.includes('link')) {
        return ethernetSwitchTroubleshooting["switch optical"];
      } else if (lowerQuestion.includes('network') || lowerQuestion.includes('communicat')) {
        return ethernetSwitchTroubleshooting["switch network"];
      } else if (lowerQuestion.includes('poe') || lowerQuestion.includes('power over ethernet')) {
        return ethernetSwitchTroubleshooting["switch poe"];
      } else if (lowerQuestion.includes('ip') || lowerQuestion.includes('address')) {
        return ethernetSwitchTroubleshooting["switch ip"];
      } else if (lowerQuestion.includes('default') || lowerQuestion.includes('reset')) {
        return ethernetSwitchTroubleshooting["switch default"];
      } else {
        return generalInfo["ethernet switch"];
      }
    }
    
    if (lowerQuestion.includes('media converter') || lowerQuestion.includes('converter')) {
      if (lowerQuestion.includes('power')) {
        return mediaConverterTroubleshooting["media converter power"];
      } else if (lowerQuestion.includes('optical') || lowerQuestion.includes('fiber') || lowerQuestion.includes('link')) {
        return mediaConverterTroubleshooting["media converter optical"];
      } else if (lowerQuestion.includes('communication') || lowerQuestion.includes('ethernet')) {
        return mediaConverterTroubleshooting["media converter communication"];
      } else if (lowerQuestion.includes('poe')) {
        return mediaConverterTroubleshooting["media converter poe"];
      } else if (lowerQuestion.includes('cnfe2mc2c')) {
        return mediaConverterTroubleshooting["media converter cnfe2mc2c"];
      } else {
        return mediaConverterInfo["media converter"];
      }
    }
    
    // Check for Contact Closure questions
    if (lowerQuestion.includes('contact closure') || lowerQuestion.includes('fdc')) {
      if (lowerQuestion.includes('power')) {
        return contactClosureTroubleshooting["contact closure power"];
      } else if (lowerQuestion.includes('optical') || lowerQuestion.includes('fiber') || lowerQuestion.includes('link')) {
        return contactClosureTroubleshooting["contact closure optical"];
      } else if (lowerQuestion.includes('contact') || lowerQuestion.includes('relay')) {
        return contactClosureTroubleshooting["contact closure contacts"];
      } else {
        return contactClosureInfo["contact closure"];
      }
    }
    
    // Check for Ethernet Extender questions
    if (lowerQuestion.includes('ethernet extender') || lowerQuestion.includes('extender') || lowerQuestion.includes('clf') || lowerQuestion.includes('cll')) {
      if (lowerQuestion.includes('clf')) {
        return ethernetExtenderTroubleshooting["ethernet extender clf"];
      } else if (lowerQuestion.includes('cll')) {
        return ethernetExtenderTroubleshooting["ethernet extender cll"];
      } else {
        return ethernetExtenderInfo["ethernet extender"];
      }
    }
    
    // Check for Wireless questions
    if (lowerQuestion.includes('wireless') || lowerQuestion.includes('radio')) {
      if (lowerQuestion.includes('config')) {
        return wirelessTroubleshooting["wireless configuration"];
      } else if (lowerQuestion.includes('power')) {
        return wirelessTroubleshooting["wireless power"];
      } else if (lowerQuestion.includes('connection') || lowerQuestion.includes('drop')) {
        return wirelessTroubleshooting["wireless connection"];
      } else {
        return wirelessInfo["wireless"];
      }
    }
    
    // Check for Wiegand questions
    if (lowerQuestion.includes('wiegand') || lowerQuestion.includes('fdw')) {
      if (lowerQuestion.includes('power')) {
        return wiegandTroubleshooting["wiegand power"];
      } else if (lowerQuestion.includes('optical') || lowerQuestion.includes('fiber') || lowerQuestion.includes('link')) {
        return wiegandTroubleshooting["wiegand optical"];
      } else if (lowerQuestion.includes('config')) {
        return wiegandTroubleshooting["wiegand configuration"];
      } else {
        return wiegandInfo["wiegand"];
      }
    }
    
    return null;
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = inputValue;
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInputValue('');
    
    // Check if input matches a category
    const matchedCategory = categories.find(cat => 
      cat.toLowerCase() === userMessage.toLowerCase()
    );

    // Check if input matches a product model
    const matchedProduct = allProducts.find(product => 
      product.Model.toLowerCase() === userMessage.toLowerCase()
    );

    // Try to find an answer in our knowledge base
    const answer = findAnswer(userMessage);

    if (matchedCategory || matchedProduct) {
      const item = (matchedCategory || matchedProduct.Model).toLowerCase();
      setSelectedItem(item);
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: `While we are working on our Chatbox, please use the navigation bar at the top of the screen for help regarding the ${item}.`, 
          isUser: false 
        }]);
      }, 1000);
    } else if (answer) {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: answer, 
          isUser: false 
        }]);
      }, 1000);
    } else {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "I don't know the answer to that. Please ask another question or use the navigation bar for further assistance.", 
          isUser: false 
        }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-button" onClick={toggleChat}>
        <svg className="conversation-icon" viewBox="0 0 24 24" fill="none">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="white"/>
          <path d="M6 9H18V11H6V9ZM6 12H14V14H6V12Z" fill="#0066CC"/>
        </svg>
      </div>

      {isOpen && (
        <div className="chatbox-popup">
          <div className="chatbox-header">
            <span>🤖 Comnet Bot</span>
            <button onClick={closeChat} className="close-button">X</button>
          </div>

          <div className="chatbox-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
              >
                {message.text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbox-input-container">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder={"Ask a question..."}
              className="chatbox-input"
            />
            <button 
              onClick={handleSendMessage}
              className="send-button"
              disabled={!inputValue.trim()}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;