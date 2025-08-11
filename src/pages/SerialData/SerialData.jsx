import { useRef } from 'react';
import SerialDataSelectorTool from './SerialDataSelectorTool';
import SerialDataFAQ from './SerialDataFAQ';
import Navbar from '../../components/Navigation/Navbar';

const SerialData = () => {
  const relevantInfoRef = useRef(null);
  const selectorToolRef = useRef(null);

  return (
    <div className="main-container">
      <Navbar/>
      <div className="page">
        <div className="main-content">
          <h1 className="faq-title" style={{fontSize: "3rem"}}>Serial Data To Fiber</h1>
          <p className="hero-subtitle"><strong>Selector Tool</strong> — Identify the perfect solution for your requirements.</p>
          <div 
            id="serial-data-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <SerialDataSelectorTool />
          </div>
          <p className="hero-subtitle"><strong>Technical Support</strong> — Find answers to common technical questions.</p>
          <div 
            id="serial-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <SerialDataFAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerialData;