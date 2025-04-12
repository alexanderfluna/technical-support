import React from 'react';

const NoPowerLight = () => {

  return (
    <div>
    <p><strong>[1]</strong> Using the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a>, open the device's data sheet and locate its required input or operating voltage range (e.g. 100 - 240 VAC, 8 - 15VDC, 8 - 24VDC, 48 - 56VDC).</p>
    <p><strong>[2]</strong> For devices that operate on 120VAC, use a voltmeter to verify that 120V RMS is present at the device's power input.</p>
    <p><strong>[3]</strong> For devices that use an external power supply, use a voltmeter to verify the correct polarity and input voltage.</p>
    <p style={{paddingLeft: "40px"}}><strong>[3.1]</strong> Confirm that the power supply is wired correctly. </p>
    <p style={{paddingLeft: "40px"}}><strong>[3.2]</strong> Confirm that the screws of the terminal block on the unit and on the power supply are securely tighted.</p>
    <p style={{paddingLeft: "40px"}}><strong>[3.4]</strong> Confirm the red probe is connected to the voltmeter's positive terminal, the black probe is connected to the negative (or ground) terminal, and the voltmeter is set to DC voltage mode.</p>
    <p style={{paddingLeft: "40px"}}><strong>[3.5]</strong> Touch the red probe to the suspected positive terminal and the black probe to the suspected negative terminal (a positive reading indicates correct polarity while a negative reading indicates reversed polarity).</p>
    <p style={{paddingLeft: "40px"}}><strong>[3.6]</strong> If the polarity is reversed, swap the wires and repeat the measurement.</p>
    <p style={{paddingLeft: "40px"}}><strong>[3.7]</strong> Confirm that the power supply is delivering the correct input voltage while connected to the device.</p>
    <p style={{paddingLeft: "80px"}}><strong>[3.7.a]</strong> If the measured voltage is below the required input range, replace the power supply and repeat the measurement.</p>
    <p style={{paddingLeft: "80px"}}><strong>[3.7.b]</strong> If the voltage is within the correct range but the device does not power on, contact technical support for further assistance.</p>
  </div>

  );
};

export default NoPowerLight;
