import { useState, useRef} from 'react';
import RazberiTroubleshooting from './RazberiTroubleshooting';
import RazberiFAQ from './RazberiFAQ';
import RazberiSelectorTool from './RazberiSelectorTool';
import Navbar from '../../components/Navigation/Navbar';

const Razberi = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const troubleshootingRef = useRef(null);
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
          <h1 className="faq-title" style={{fontSize: "3rem"}}>Edge Computing</h1>
          <div 
            id="razberi-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <RazberiSelectorTool />
          </div>
          <div 
            id="razberi-troubleshooting" 
            ref={troubleshootingRef}
            className="troubleshooting"
          >
            <RazberiTroubleshooting expandedFAQ={expandedFAQ} toggleFAQ={toggleFAQ} />
          </div>

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