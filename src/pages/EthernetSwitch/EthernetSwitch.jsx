import { useRef } from 'react';
import EthernetSwitchSelectorTool from './EthernetSwitchSelectorTool';
import EthernetSwitchFAQ from './EthernetSwitchFAQ';
import Navbar from '../../components/Navigation/Navbar';

const EthernetSwitch = () => {
  const relevantInfoRef = useRef(null);
  const selectorToolRef = useRef(null);

  return (
    <div className="main-container">
      <Navbar/>
      <div className="page">
        <div className="main-content">
          <h1 className="faq-title" style={{fontSize: "3rem"}}>Ethernet Switch</h1>
          <p className="hero-subtitle"><strong>Selector Tool</strong> — Identify the perfect solution for your requirements.</p>
          <div 
            id="ethernet-switch-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <EthernetSwitchSelectorTool />
          </div>
          <p className="hero-subtitle"><strong>Technical Support</strong> — Find answers to common technical questions.</p>
          <div 
            id="ethernet-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <EthernetSwitchFAQ/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthernetSwitch;