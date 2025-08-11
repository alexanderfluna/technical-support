import { useRef } from 'react';
import ContactClosureSelectorTool from './ContactClosureSelectorTool';
import ContactClosureFAQ from './ContactClosureFAQ';
import Navbar from '../../components/Navigation/Navbar';

const ContactClosure = () => {
  const relevantInfoRef = useRef(null);
  const selectorToolRef = useRef(null);


  return (
    <div className="main-container">
      <Navbar />
      <div className="page">
        <div className="main-content">
          <h1 className="faq-title" style={{fontSize: "3rem"}}>Contact Closure To Fiber</h1>
          <p className="hero-subtitle"><strong>Selector Tool</strong> — Identify the perfect solution for your requirements.</p>
          <div 
            id="contact-closure-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <ContactClosureSelectorTool />
          </div>
          <p className="hero-subtitle"><strong>Technical Support</strong> — Find answers to common technical questions.</p>
          <div 
            id="contact-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <ContactClosureFAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactClosure;