// Explain dip switch #4 is for the status of loss of optical link

import React from 'react';
import '../../styles/Pages.css'
import WiegandSelectorTool from './WiegandSelectorTool';
import WiegandFAQ from './WiegandFAQ';

const Wiegand = () => {
  return (
    <div>
      <main className="faq-container">
          <WiegandFAQ/>
          <WiegandSelectorTool/>
      </main>
    </div>
  );
};

export default Wiegand;
