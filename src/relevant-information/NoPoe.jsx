import React  from 'react';

const NoPoE = () => {
  return (
    <div>
      <p><strong>[1]</strong> For devices that operate on 120VAC, use a voltmeter to verify that 120V RMS is present at the device's power input.</p>
      <p><strong>[2]</strong> For devices that use an external PSU, use a voltmeter to verify the power supply is producing a minimum of 52VDC and verify the correct polarity.</p>
      <p style={{paddingLeft: "40px"}}><strong>[2.1]</strong> Confirm that the power supply is wired correctly.</p>
      <p style={{paddingLeft: "40px"}}><strong>[2.2]</strong> Confirm that the screws of the terminal block on the unit and on the power supply are securely tighted.</p>
      <p style={{paddingLeft: "40px"}}><strong>[2.2]</strong> Confirm the red probe is connected to the voltmeter's positive terminal, the black probe is connected to the negative (or ground) terminal, and the voltmeter is set to DC voltage mode.</p>
      <p style={{paddingLeft: "40px"}}><strong>[2.3]</strong> Touch the red probe to the suspected positive terminal and the black probe to the suspected negative terminal. A positive voltage reading indicates correct polarity; a negative reading indicates reversed polarity.</p>
      <p style={{paddingLeft: "40px"}}><strong>[2.4]</strong> If the voltage is less than 52VDC, increase the voltage using the potentiometer. Otherwise, replace the power supply unit and recheck the voltage.</p>
      <p><strong>[3]</strong> Look up the data sheet of the PSE, power supply, and attached PDs.</p>
      <p style={{paddingLeft: "40px"}}><strong>[3.1]</strong> Ensure that the power supply rating (in watts) is sufficient to support the PSE and attached PDs.</p>
      <p style={{paddingLeft: "40px"}}><strong>[3.2]</strong> Verify that the PDs are compatible with the PoE standard of the PSE (802.3af, 802.3at, or 802.3bt).</p>
      <p><strong>[4]</strong> If the device has a GUI, and there is an option to force PoE, then force PoE.</p>
      <p><strong>[5]</strong> Replace the Ethernet cable to rule it out.</p>
      <p><strong>[6]</strong> Test that the PDs are capable of being powered by another PSE.</p>
    </div>
  );
};

export default NoPoE;

