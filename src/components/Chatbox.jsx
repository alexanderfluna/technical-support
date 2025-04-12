import React, { useState } from 'react';
import "../styles/Chatbox.css";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [responses, setResponses] = useState({});

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (question) => {
    const newResponses = {
      contact: 'Please email comnetsupport@acresecurity.com to create a ticket or call us at 203-796-5300 from 8:00am to 4:30pm EST.',
      support: "Comnet's technical support can assist with providing product information, providing part numbers, application designs, troubleshooting, and processing RMAs.",
      datasheet: 'Enter the device\'s part number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a> and click the \'View product details\' button.',
      rma: 'To request an RMA, please contact Comnet\'s technical support with the product model, a description of the issue, and the troubleshooting that has been performed.',
      firmware: 'You will need to request this from Comnet\'s technical support and provide the current firmware version of the device.',
      warranty: 'The warranty information is listed in the product\'s data sheet on the bottom of the first page.',
    };

    setResponses(prevResponses => {
      const isResponseVisible = prevResponses[question] !== undefined;
      if (isResponseVisible) {
        const { [question]: removedResponse, ...remainingResponses } = prevResponses;
        return remainingResponses;
      } else {
        return { ...prevResponses, [question]: newResponses[question] }; 
      }
    });
  };

  const closeChat = () => {
    setIsOpen(false);
    setResponses({});
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

          <div className="chatbox-buttons">
            <button onClick={() => handleButtonClick('contact')}>
              How can I contact Comnet's technical support?
            </button>
            {responses.contact && (
              <div className="chat-message bot" dangerouslySetInnerHTML={{ __html: responses.contact }} />
            )}

            <button onClick={() => handleButtonClick('support')}>
              What technical support services are offered by Comnet?
            </button>
            {responses.support && (
              <div className="chat-message bot" dangerouslySetInnerHTML={{ __html: responses.support }} />
            )}

            <button onClick={() => handleButtonClick('datasheet')}>
              Where can I find a Comnet product's data sheets or manual?
            </button>
            {responses.datasheet && (
              <div className="chat-message bot" dangerouslySetInnerHTML={{ __html: responses.datasheet }} />
            )}

            <button onClick={() => handleButtonClick('rma')}>
              How do I request an RMA for a Comnet product?
            </button>
            {responses.rma && (
              <div className="chat-message bot" dangerouslySetInnerHTML={{ __html: responses.rma }} />
            )}

            <button onClick={() => handleButtonClick('firmware')}>
              How can I get the latest firmware version of a Comnet device?
            </button>
            {responses.firmware && (
              <div className="chat-message bot" dangerouslySetInnerHTML={{ __html: responses.firmware }} />
            )}

            <button onClick={() => handleButtonClick('warranty')}>
              Where can I find the warranty information for a Comnet product?
            </button>
            {responses.warranty && (
              <div className="chat-message bot" dangerouslySetInnerHTML={{ __html: responses.warranty }} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;