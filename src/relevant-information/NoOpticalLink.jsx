const NoOpticalLink = () => {
  return (
    <div>
      <p><strong>1.</strong> For devices requiring an 'A' and 'B' pair, confirm that one side of the fiber has an 'A' unit and the other side has a 'B' unit.</p>
      <p style={{paddingLeft: "30px"}}><strong>Note:</strong> Since the data is transmitted and received over a single strand of fiber, using wavelength division multiplexing (WDM), the 'A' and 'B' units transmit and receive data on different wavelengths.</p>
      <p><strong>2.</strong> Verify the compatibility of the devices on both ends of the fiber.</p>
      <p style={{paddingLeft: "40px"}}><strong>2.1.</strong> Confirm the data rates match (Fast Ethernet vs. Gigabit Ethernet).</p>
      <p style={{paddingLeft: "40px"}}><strong>2.2.</strong> Confirm the expected fiber types match (Multimode vs. Single mode).</p>
      <p style={{paddingLeft: "40px"}}><strong>2.3.</strong> Confirm the number of fiber strands match (1 strand vs. 2 strands).</p>
      <p style={{paddingLeft: "40px"}}><strong>2.4.</strong> Confirm the correct optical connector is used (ST vs. SC vs. LC).</p>
      <p><strong>3.</strong> Using a visual fault locator, confirm light successfully passes through the fiber.</p>
      <p><strong>4.</strong> To rule out contamination, use a fiber optic cleaning kit to clean the optics on the unit and the connector on the fiber.</p>
      <p><strong>5.</strong> Remove and reinsert the fiber. If the link light on the unit remained solid green after the fiber was removed, there may be a powering issue.</p>
      <p><strong>6.</strong> Using a process of elimination, swap out the device on either end of the fiber with to determine which unit is failing.</p>
    </div>

  );
};

export default NoOpticalLink;
