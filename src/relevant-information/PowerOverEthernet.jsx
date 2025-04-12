import React, { useState } from 'react';

const PowerOverEthernet = () => {
  const standards = [
    { standard: "IEEE 802.3af", type: "Type 1", power: "12.5W / 15W", voltage: "48VDC - 47VDC" },
    { standard: "IEEE 802.3at", type: "Type 2", power: "25W / 30W", voltage: "50VDC - 57VDC" },
    { standard: "IEEE 802.3bt", type: "Type 3", power: "60W", voltage: "52VDC - 57VDC" },
    { standard: "IEEE 802.3bt", type: "Type 4", power: "90W", voltage: "52VDC - 57VDC" },
  ];

  const poeClasses = [
    { class: "Class 0", powerRange: "0.44W - 12.95W" },
    { class: "Class 1", powerRange: "0.44W - 3.84W" },
    { class: "Class 2", powerRange: "3.84W - 6.49W" },
    { class: "Class 3", powerRange: "6.49W - 12.95W" },
    { class: "Class 4", powerRange: "12.95W - 25.5W" },
    { class: "Class 5", powerRange: "25.5W - 40W" },
    { class: "Class 6", powerRange: "40W - 51W" },
    { class: "Class 7", powerRange: "51W - 62W" },
    { class: "Class 8", powerRange: "62W - 71.3W" },
  ];

  return (
    <div>
      <h1>Power Over Ethernet</h1>
      <p><strong>Power over Ethernet (PoE)</strong> allows both data and electrical power to be transmitted over a single Ethernet cable, eliminating the need for separate power adapters. This is especially useful for powering IP cameras, wireless access points, VoIP phones, and other networked devices in environments where running additional power lines is impractical or expensive.</p>
      <p>To enable PoE, you need a PoE-enabled device such as a <strong>PoE switch, media converter, or injector</strong>. A PoE switch is the most common solution, as it provides both data and power from a single network device. A PoE injector, on the other hand, is useful when you have a non-PoE switch but need to power a PoE device. A media converter with PoE functionality can also be used when extending network connectivity over fiber optic cables while still supplying power to a remote device.</p>
      <p>It's important to note that <strong>a PoE switch or media converter is only required on the end of the connection where power needs to be supplied to a device</strong>. If you're using fiber optics to extend your network, keep in mind that fiber cables do not carry electrical power—only data. The PoE-enabled device should be placed at the end where power needs to be injected.</p>
      <p>PoE technology has evolved over the years, with different standards providing increasing levels of power to accommodate a wider range of devices. The <strong>IEEE (Institute of Electrical and Electronics Engineers)</strong> has established several PoE standards that define how much power can be delivered and at what voltage levels. The following table outlines the main PoE standards and their specifications:</p>
    
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        margin: "20px 0",
        fontSize: "18px",
        textAlign: "left",
      }}>
        <thead>
          <tr style={{ backgroundColor: "rgb(13, 128, 173)", color: "#fff" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Standard</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Type</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Power (W)</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Voltage (VDC)</th>
          </tr>
        </thead>
        <tbody>
          {standards.map((item, index) => (
            <tr key={index} style={{
              backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
            }}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.standard}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.type}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.power}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.voltage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Each standard supports different power levels, making it essential to choose the right type based on your device's requirements. Modern high-powered devices, such as PTZ cameras and outdoor access points, often require <strong>PoE++ (IEEE 802.3bt)</strong> to function properly.</p>
      <p>PoE devices are classified into different power classes, which help ensure that power is allocated efficiently. The class determines how much power the <strong>powered device (PD)</strong> can request from the <strong>power sourcing equipment (PSE)</strong>. The following table outlines these PoE classes and their respective power ranges:</p>

      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        margin: "20px 0",
        fontSize: "18px",
        textAlign: "left",
      }}>
        <thead>
          <tr style={{ backgroundColor: "rgb(13, 128, 173)", color: "#fff" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>PoE Class</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Power Range</th>
          </tr>
        </thead>
        <tbody>
          {poeClasses.map((item, index) => (
            <tr key={index} style={{
              backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
            }}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.class}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.powerRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Understanding PoE classes can help network administrators allocate power more efficiently and avoid overloading PoE switches, which have a <strong>maximum power budget</strong>.</p>
      <p>Some devices support <strong>passthrough PoE,</strong> which allows them to receive power through PoE while also passing power along to another device. This is useful in scenarios where only one power source is available, but multiple PoE devices need to be powered. A common example is a PoE-enabled network switch that receives power from an upstream PoE injector and distributes it to connected IP cameras or access points.</p>
      <p>Unlike standard PoE, which follows IEEE specifications and negotiates power delivery between devices, <strong>passive PoE</strong> simply delivers power without any handshake or power negotiation. This means the device on the receiving end must be compatible with the voltage provided, as there is no automatic adjustment. Passive PoE is often used in proprietary networking equipment but requires caution to avoid damaging non-compatible devices.</p>
      <p>PoE can be delivered using different wiring methods. In <strong>Mode A PoE,</strong> power is sent over the same wires used for data transmission. Specifically, power is carried on pins 1 and 2 (positive) and pins 3 and 6 (negative). This method is commonly used in PoE network switches and allows for power and data transmission on a single twisted pair.</p>
      <p><strong>Mode B PoE</strong> delivers power over the unused wire pairs in an Ethernet cable, separate from the data transmission pairs. In this configuration, pins 4 and 5 carry the positive voltage, while pins 7 and 8 carry the negative voltage. This approach is more common in PoE injectors and legacy PoE implementations.</p>
      <p>While both Mode A and Mode B provide the same functionality, the method used depends on the network equipment. Most modern PoE switches support both modes to ensure compatibility with a wide range of devices.</p>
    </div>
  );
};

export default PowerOverEthernet;
