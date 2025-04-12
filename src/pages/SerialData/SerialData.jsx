import React, { useState, useEffect } from 'react';
import '../../styles/Pages.css'
import SerialDataTroubleshooting from './SerialDataTroubleshooting';
import SerialDataSelectorTool from './SerialDataSelectorTool';
import SerialDataFAQ from './SerialDataFAQ';

const SerialData = () => {
  return (
    <div>
      <main className="faq-container">
          <SerialDataTroubleshooting/>
          <SerialDataFAQ/>
          <SerialDataSelectorTool/>
      </main>
    </div>
  );
};

export default SerialData;
