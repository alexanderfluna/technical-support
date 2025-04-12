import React from 'react';
import '../../styles/Pages.css'
import WirelessTroubleshooting from './WirelessTroubleshooting';
import WirelessSelectorTool from './WirelessSelectorTool';
import WirelessFAQ from './WirelessFAQ';

const Wireless = () => {
  return (
    <div>
      <main className="faq-container">
          <WirelessTroubleshooting/>
          <WirelessFAQ/>
          <WirelessSelectorTool/>
      </main>
    </div>
  );
};

export default Wireless;
