import React, { useState, useEffect } from 'react';
import RazberiTroubleshooting from './RazberiTroubleshooting';
import RazberiSelectorTool from './RazberiSelectorTool';
import RazberiFAQ from './RazberiFAQ';
import '../../styles/Pages.css'

const Razberi = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <main className="faq-container">
          <RazberiTroubleshooting/>
          <RazberiFAQ/>
          <RazberiSelectorTool/>
      </main>
    </div>
  );
};

export default Razberi;
