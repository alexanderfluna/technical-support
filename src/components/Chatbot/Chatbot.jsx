import React, { useState, useEffect, useRef } from 'react';
import ServerProducts from '../../pages/Razberi/RazberiProducts';
import EthernetSwitchProducts from '../../pages/EthernetSwitch/EthernetSwitchProducts';
import MediaConverterProducts from '../../pages/MediaConverter/MediaConverterProducts';
import EthernetExtenderProducts from '../../pages/EthernetExtender/EthernetExtenderProducts';
import WirelessProducts from '../../pages/Wireless/WirelessProducts';
import SerialDataProducts from '../../pages/SerialData/SerialDataProducts';
import WiegandProducts from '../../pages/Wiegand/WiegandProducts';
import ContactClosureProducts from '../../pages/ContactClosure/ContactClosureProducts';
import SFPProducts from '../../pages/SFP/SFPProducts';
import PowerSupplyProducts from '../../pages/PowerSupply/PowerSupplyProducts';
import PoeInjectorProducts from '../../pages/PoeInjector/PoeInjectorProducts';
import EnclosureProducts from '../../pages/Enclosure/EnclosureProducts';
import "../../styles/Chatbot.css";

// Import knowledge bases
import { razberiTroubleshooting } from './knowledgeBase/razberi';
import { razberiInfo } from './knowledgeBase/razberi';
import { ethernetSwitchTroubleshooting } from './knowledgeBase/ethernetSwitch';
import { mediaConverterTroubleshooting, mediaConverterInfo } from './knowledgeBase/mediaConverter';
import { contactClosureTroubleshooting, contactClosureInfo } from './knowledgeBase/contactClosure';
import { ethernetExtenderTroubleshooting, ethernetExtenderInfo } from './knowledgeBase/ethernetExtender';
import { wirelessTroubleshooting, wirelessInfo } from './knowledgeBase/wireless';
import { wiegandTroubleshooting, wiegandInfo } from './knowledgeBase/wiegand';

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
    
    // Expanded Razberi server questions
    if (lowerQuestion.includes('razberi') || lowerQuestion.includes('server') || 
        lowerQuestion.includes('ssiq') || lowerQuestion.includes('rz') ||
        lowerQuestion.includes('nvr') ||
        lowerQuestion.includes('ss32') || lowerQuestion.includes('core')) {
      
      // Power/Booting issues
      if (lowerQuestion.includes('power') || lowerQuestion.includes('boot') || 
          lowerQuestion.includes('start') || lowerQuestion.includes('turn on') ||
          lowerQuestion.includes('shut down') || lowerQuestion.includes('restart')) {
        return razberiTroubleshooting["server power"];
      }
      // PoE issues
      else if (lowerQuestion.includes('poe') || lowerQuestion.includes('power over ethernet') ||
               lowerQuestion.includes('injector') || lowerQuestion.includes('powered device')) {
        return razberiTroubleshooting["no poe"];
      }
      // Storage/RAID issues
      else if (lowerQuestion.includes('raid') || lowerQuestion.includes('drive') || 
               lowerQuestion.includes('hard disk') || lowerQuestion.includes('hdd') ||
               lowerQuestion.includes('ssd') || lowerQuestion.includes('storage') ||
               lowerQuestion.includes('disk') || lowerQuestion.includes('volume')) {
        return razberiTroubleshooting["raid"];
      }
      // Network issues
      else if (lowerQuestion.includes('nic') || lowerQuestion.includes('network interface') ||
               lowerQuestion.includes('ethernet') || lowerQuestion.includes('lan') ||
               lowerQuestion.includes('port') || lowerQuestion.includes('connection') ||
               lowerQuestion.includes('adapter')) {
        return razberiTroubleshooting["nic"];
      }
      // OS issues
      else if (lowerQuestion.includes('os') || lowerQuestion.includes('operating system') ||
               lowerQuestion.includes('windows') || lowerQuestion.includes('reboot') ||
               lowerQuestion.includes('crash') || lowerQuestion.includes('freeze') ||
               lowerQuestion.includes('hang') || lowerQuestion.includes('slow')) {
        return razberiTroubleshooting["os"];
      }
      // Remote access
      else if (lowerQuestion.includes('rdp') || lowerQuestion.includes('remote desktop') ||
               lowerQuestion.includes('remote access') || lowerQuestion.includes('connect remotely')) {
        return razberiTroubleshooting["rdp"];
      }
      // Registration
      else if (lowerQuestion.includes('registration') || lowerQuestion.includes('register') ||
               lowerQuestion.includes('activate') || lowerQuestion.includes('license')) {
        return razberiTroubleshooting["registration"];
      }
      // Security
      else if (lowerQuestion.includes('camera defense') || lowerQuestion.includes('security') ||
               lowerQuestion.includes('firewall') || lowerQuestion.includes('protection') ||
               lowerQuestion.includes('whitelist') || lowerQuestion.includes('block')) {
        return razberiTroubleshooting["camera defense"];
      }
      // Password
      else if (lowerQuestion.includes('password') || lowerQuestion.includes('login') ||
               lowerQuestion.includes('credentials') || lowerQuestion.includes('forgot') ||
               lowerQuestion.includes('reset') || lowerQuestion.includes('authentication')) {
        return razberiTroubleshooting["password"];
      }
      // Computing terms
      else if (lowerQuestion.includes('computing') || lowerQuestion.includes('terminology') ||
               lowerQuestion.includes('define') || lowerQuestion.includes('what is') ||
               lowerQuestion.includes('meaning') || lowerQuestion.includes('explain') ||
               lowerQuestion.includes('cpu') || lowerQuestion.includes('gpu') ||
               lowerQuestion.includes('ram') || lowerQuestion.includes('memory') ||
               lowerQuestion.includes('storage') || lowerQuestion.includes('raid') ||
               lowerQuestion.includes('hertz') || lowerQuestion.includes('ghz') ||
               lowerQuestion.includes('mhz') || lowerQuestion.includes('bandwidth') ||
               lowerQuestion.includes('throughput') || lowerQuestion.includes('latency')) {
        return razberiInfo["computing terminology"];
      }
      // PoE info
      else if (lowerQuestion.includes('power over ethernet') || lowerQuestion.includes('poe info') ||
               lowerQuestion.includes('poe standard') || lowerQuestion.includes('poe class') ||
               lowerQuestion.includes('poe pinout') || lowerQuestion.includes('poe budget')) {
        return razberiInfo["power over ethernet"];
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
          text: "I don't know how to answer that. Please ask me another question.", 
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
            <span>Comnet Bot</span>
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