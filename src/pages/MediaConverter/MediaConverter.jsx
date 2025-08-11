import { useState, useRef } from 'react';
import MediaConverterSelectorTool from './MediaConverterSelectorTool';
import MediaConverterFAQ from './MediaConverterFAQ';
import Navbar from '../../components/Navigation/Navbar';

const MediaConverter = () => {
  const relevantInfoRef = useRef(null);
  const selectorToolRef = useRef(null);

  return (
    <div className="main-container">
      <Navbar />
      <div className="page">
        <div className="main-content">
          <h1 className="faq-title" style={{fontSize: "3rem"}}>Ethernet To Fiber</h1>
          <p className="hero-subtitle"><strong>Selector Tool</strong> — Identify the perfect solution for your requirements.</p>
          <div 
            id="media-converter-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <MediaConverterSelectorTool />
          </div>
          <p className="hero-subtitle"><strong>Technical Support</strong> — Find answers to common technical questions.</p>
          <div 
            id="media-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <MediaConverterFAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaConverter;