import React, { useState, useEffect } from 'react';
import EthernetExtenderTroubleshooting from './EthernetExtenderTroubleshooting';
import EthernetExtenderSelectorTool from './EthernetExtenderSelectorTool';
import EthernetExtenderFAQ from './EthernetExtenderFAQ';
import '../../styles/Pages.css'

const EthernetExtender = () => {
  return (
    <div>
      <main className="faq-container">
          <EthernetExtenderTroubleshooting/>
          <EthernetExtenderSelectorTool/>
          <EthernetExtenderFAQ/>
      </main>
    </div>
  );
};

export default EthernetExtender;
