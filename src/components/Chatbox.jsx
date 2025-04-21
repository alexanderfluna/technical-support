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

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Please enter a Comnet part number or choose one of the following categories:\n- Server\n- Ethernet Switch\n- Ethernet Extender\n- Wireless\n- Media Converter\n- Serial Data Over Fiber\n- Contact Closure Over Fiber\n- Wiegand Over Fiber\n- Power Supply\n- PoE Injector\n- Enclosure", 
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

    if (matchedCategory || matchedProduct) {
      const item = (matchedCategory || matchedProduct.Model).toLowerCase();
      setSelectedItem(item);
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: `While we are working on our Chatbox, please use the navigation bar at the top of the screen for help regarding the ${item}.`, 
          isUser: false 
        }]);
      }, 1000);
    } else {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Please enter a full valid Comnet part number or one of the mentioned categories.", 
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
        <span className="conversation-icon">💬</span>
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
              placeholder={selectedItem ? `Ask about ${selectedItem}...` : "Enter part number or select category..."}
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