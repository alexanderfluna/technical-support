import React, { useState, useEffect } from 'react';
import Slideshow from '../components/Slideshow'
import "../styles/MainContent.css";

const MainContent = () => {
  const [animatedElements, setAnimatedElements] = useState([]);
  const [activeSection, setActiveSection] = useState(null);

  const supportData = [
    {
      id: 'contact',
      title: 'Contact Information',
      question: 'How can I contact Comnet\'s technical support?',
      answer: 'Please email comnetsupport@acresecurity.com to create a ticket or call us at 203-796-5300 from 8:00am to 4:30pm EST.'
    },
    {
      id: 'support',
      title: 'Technical Support Services',
      question: 'What technical support services are offered by Comnet?',
      answer: "Comnet's technical support can assist with providing product information, providing part numbers, application designs, troubleshooting, and processing RMAs."
    },
    {
      id: 'rma',
      title: 'Return Merchandise Authorization',
      question: 'How do I request an RMA for a Comnet product?',
      answer: 'To request an RMA, please contact Comnet\'s technical support with the product model, a description of the issue, and the troubleshooting that has been performed.'
    },
    {
      id: 'datasheet',
      title: 'Product Documentation',
      question: 'Where can I find a Comnet product\'s data sheets or manual?',
      answer: 'Enter the device\'s part number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a> and click the \'View product details\' button.'
    },
    {
      id: 'firmware',
      title: 'Firmware Updates',
      question: 'How can I get the latest firmware version of a Comnet device?',
      answer: 'You will need to request this from Comnet\'s technical support and provide the current firmware version of the device.'
    },
    {
      id: 'warranty',
      title: 'Warranty Information',
      question: 'Where can I find the warranty information for a Comnet product?',
      answer: 'The warranty information is listed in the product\'s data sheet on the bottom of the first page.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Animate elements as they come into view
      supportData.forEach((item, index) => {
        const element = document.getElementById(item.id);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const elementOffset = elementPosition + scrollPosition;
          const isInView = scrollPosition > elementOffset - windowHeight * 0.7;
          
          if (isInView && !animatedElements.includes(item.id)) {
            setAnimatedElements(prev => [...prev, item.id]);
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedElements]);

  const imageNames = [
    "SS32X.jpg",
    "CNGE3FE8MS.jpg",
    "CLFE1EOU.jpg",
    "CNFE3DOE2.jpg",
    "NW1.jpg",
    "CNMCSFP.jpg",
    "FDX60.jpg",
    "FDW1000.jpg",
    "FDC80.jpg",
    "FVT110.jpg",
    "SFP.jpg",
    "PSU.jpg",
    "CNGE1IPS.jpg",
    "C1US.jpg",
  ];

  return (
    <main className="support-main">
      <section className="support-hero">
        <div className="hero-content">
          <h1 className="support-title">Comnet Technical Support</h1>
          <p className="support-subtitle">Find answers to common technical questions and get the help you need</p>
          <div className="scroll-indicator">↓ Scroll to explore ↓</div>
        </div>
      </section>

      {supportData.map((item, index) => (
        <section 
          key={item.id}
          id={item.id}
          className={`support-section ${animatedElements.includes(item.id) ? 'animated' : ''} ${activeSection === item.id ? 'active' : ''}`}
          style={{ '--delay': index * 0.1 }}
        >
          <div className="support-card">
            <div className="support-header">
              <h2>{item.title}</h2>
              <div className="support-icon">{index % 2 === 0 ? '📞' : '🔧'}</div>
            </div>
            <div className="support-content">
              <h3 className="support-question">{item.question}</h3>
              <div 
                className="support-answer" 
                dangerouslySetInnerHTML={{ __html: item.answer }} 
              />
            </div>
          </div>
        </section>
      ))}

    <Slideshow imageNames={imageNames} />
    </main>
  );
};

export default MainContent;