import React from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';

const SerialDataTroubleshooting = () => {
  return (
    <div className="faq-list">
      <h1 className="faq-title">Troubleshooting Serial Data</h1>

      <div className="table-of-contents">
        <h1>Table of Contents</h1>
        <li><a href="#no-power">How to Troubleshoot a Unit with Power Issues</a></li>
        <li><a href="#no-optical-link">How to Troubleshoot a Unit with Optical Link Issues</a></li>
        <li><a href="#fdx60">How to Troubleshoot an FDX60</a></li>
        <li><a href="#cnfe3doe2">How to Troubleshoot a CNFE3DOE2/M</a></li>
      </div>

      <div id="no-power" className="faq-answer">
        <h1>How to Troubleshoot a Unit with Power Issues</h1>
        {<NoPowerLight />}
      </div>

      <div id="no-optical-link" className="faq-answer">
        <h1>Troubleshooting a unit that will not link optically</h1>
        {<NoOpticalLink />}
      </div>
      
      <div id="fdx60" className="faq-answer">
        <h1>How to Troubleshoot an FDX60</h1>
        <p><strong>[1] Document what lights are illuminated on the unit.</strong></p>
        <img src="photos/FDX/fdx60-led.jpg"></img>
        <p><strong>[2] If passing 2-wire RS485, ensure there is 120-omh resistor across pins 6 and 7 (+I/O and -I/O).</strong></p>
        <li>An impedance mismatch occurs because of two electronic devices with different impedance values, meaning they resist alternating current differently. Without proper termination, a resistor that matches the cable's characteristic impedance, the signal is not properly absorbed, leading to ringing.</li>
        <li>Ringing happens when a data signal reflects back and forth between devices instead of cleanly reaching its destination. In a lumped distance, where devices are very close together, the resistor can be placed at either end. In distributed distance systems, where devices are far apart, the terminating resistor must be placed at both ends.</li>
        <p><strong>[3] Confirm the dip switches are set correctly. Cycle power after changing the dip switch configuration.</strong></p>
        <img src="photos/FDX/fdx60-switches.jpg"></img>
        <p><strong>[4] Verify the wires are connected properly.</strong></p>
        <img src="photos/FDX/fdx60-wires.jpg"></img>
      </div>

      <div id="cnfe3doe2" className="faq-answer">
        <h1>How to Troubleshoot a CNFE3DOE2/M</h1>
        <a href="pdf/SerialData/CNFE3DOE2.pdf">Click the link to view the configuration manual for the CNFE3DOE2/M.</a>
      </div>

    </div>
  )
}

export default SerialDataTroubleshooting