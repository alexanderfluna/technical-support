import { useRef } from 'react';
import WiegandSelectorTool from './WiegandSelectorTool';
import WiegandFAQ from './WiegandFAQ';
import Navbar from '../../components/Navigation/Navbar';

const Wiegand = () => {  
  const faqRef = useRef(null);
  const selectorToolRef = useRef(null);

  return (
    <div className="main-container">
        <Navbar/>
        <div className="page">
          <div className="main-content">
            <h1 className="faq-title" style={{fontSize: "3rem"}}>Wiegand</h1>
            <p className="hero-subtitle"><strong>Selector Tool</strong> — Identify the perfect solution for your requirements.</p>
            <div 
              id="wiegand-selector-tool" 
              ref={selectorToolRef}
              className="selector-tool"
            >
              <WiegandSelectorTool />
            </div>
            <p className="hero-subtitle"><strong>Technical Support</strong> — Find answers to common technical questions.</p>
            <div 
              id="wiegand-faq" 
              ref={faqRef}
              className="relevant-information"
            >
              <WiegandFAQ  />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Wiegand;