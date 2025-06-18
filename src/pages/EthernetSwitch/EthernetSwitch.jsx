import { useRef } from 'react';
import EthernetSwitchTroubleshooting from './EthernetSwitchTroubleshooting';
import EthernetSwitchSelectorTool from './EthernetSwitchSelectorTool';
import EthernetSwitchFAQ from './EthernetSwitchFAQ';
import Navbar from '../../components/Navigation/Navbar';

const EthernetSwitch = () => {
  const troubleshootingRef = useRef(null);
  const relevantInfoRef = useRef(null);
  const selectorToolRef = useRef(null);

  return (
    <div className="main-container">
      <Navbar/>
      <div className="page">
        <div className="main-content">
          <h1 className="faq-title" style={{fontSize: "3rem"}}>Ethernet Switch</h1>
          <div 
            id="ethernet-switch-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <EthernetSwitchSelectorTool />
          </div>
          <div 
            id="ethernet-troubleshooting" 
            ref={troubleshootingRef}
            className="troubleshooting"
          >
            <EthernetSwitchTroubleshooting/>
          </div>

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