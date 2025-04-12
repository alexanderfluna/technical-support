import React, { useState } from 'react';

const NoOpticalLink = () => {
  return (
    <div>
      <p><strong>[1]</strong> For devices requiring an 'A' and 'B' pair, confirm that one side of the fiber has an 'A' unit and the other side has a 'B' unit.</p>
      <li style={{paddingLeft: "40px"}}>Since the data is transmitted and received over a single strand of fiber, using wavelength division multiplexing (WDM), the 'A' and 'B' units transmit and receive data at different wavelengths.</li>
      <p><strong>[2]</strong> Verify the compatibility of the devices on both ends of the fiber.</p>
      <p style={{paddingLeft: "40px"}}><strong>[2.1]</strong> Confirm the data rates match (Fast Ethernet vs. Gigabit Ethernet).</p>
      <p style={{paddingLeft: "40px"}}><strong>[2.2]</strong> Confirm the expected fiber types match (Multimode vs. Single mode).</p>
      <p style={{paddingLeft: "40px"}}><strong>[2.3]</strong> Confirm the number of fiber strands match (1 strand vs. 2 strands).</p>
      <p style={{paddingLeft: "40px"}}><strong>[2.4]</strong> Confirm the correct optical connector is used (ST vs. SC vs. LC).</p>
      <p><strong>[3]</strong> Using a process of elimination, swap out the device on either end of the fiber with to determine which unit is failing.</p>
      <p><strong>[4]</strong> If the link light remains solid green after removing the fiber, follow the <strong>"How to Troubleshoot Power Issues"</strong> procedure to rule out power-related issues.</p>
    </div>

  );
};

export default NoOpticalLink;
