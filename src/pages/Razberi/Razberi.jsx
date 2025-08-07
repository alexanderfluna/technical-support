import { useState, useRef} from 'react';
import RazberiFAQ from './RazberiFAQ';
import RazberiSelectorTool from './RazberiSelectorTool';
import Navbar from '../../components/Navigation/Navbar';

const Razberi = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const relevantInfoRef = useRef(null);
  const selectorToolRef = useRef(null);

  const toggleFAQ = (sectionID) => {
    setExpandedFAQ(prev => prev === sectionID ? null : sectionID);
  }

  return (
    <div className="main-container">
      <Navbar/>
      <div className="page">
        <div className="main-content">
          <h1 className="faq-title" style={{fontSize: "3rem"}}>Razberi Server</h1>
          <p className="hero-subtitle"><strong>Selector Tool</strong> — Identify the perfect solution for your requirements.</p>
          <div 
            id="razberi-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <RazberiSelectorTool />
          </div>
          <p className="hero-subtitle"><strong>Technical Support</strong> — Find answers to common technical questions.</p>
          <div 
            id="razberi-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <RazberiFAQ expandedFAQ={expandedFAQ} toggleFAQ={toggleFAQ} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Razberi;