import React from 'react';
import '../../styles/Pages.css'
import SFPSelectorTool from './SFPSelectorTool';
import SFPFAQ from './SFPFAQ';

const SFP = () => {
  return (
    <div>
      <main className="faq-container">
          <SFPFAQ/>
          <SFPSelectorTool/>
      </main>
    </div>
  );
};

export default SFP;
