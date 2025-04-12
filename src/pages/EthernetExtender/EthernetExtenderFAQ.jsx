import React, { useState, useEffect } from 'react';

const EthernetExtenderFAQ = () => {
  return (
    <div className="faq-list">
      <h1 className="faq-title">Relevant Ethernet Extender Information</h1>

      <div className="table-of-contents">
        <h1>Table of Contents</h1>
        <li><a href="#copper">Copper</a></li>
        <li><a href="#coax">Coax</a></li>
      </div>

      <div id="copper" className="faq-answer">
        <h1>Copper</h1>
        <p><strong>Unshielded Twisted Pair (UTP)</strong> copper cables have a standard maximum transmission distance of 100 meters (328 feet) for Ethernet networks. This limitation exists because electrical signals weaken as they travel through the copper wires. The resistance in the cable causes signal loss, known as attenuation, which reduces the strength and quality of the transmitted data. Over longer distances, the receiving end may struggle to correctly interpret the signals, leading to data loss or transmission errors.</p>
        <p>Another challenge with copper cables is their vulnerability to <strong>electromagnetic interference (EMI)</strong>. Nearby electrical devices, power lines, and even other network cables can introduce noise into the signal, causing disruptions and reducing overall performance. Over long distances, this interference becomes more noticeable, further degrading the signal quality and making communication unreliable.</p>
        <p>For applications that require longer transmission distances without the need for fiber optics, extended copper solutions exist. Using technologies like <strong>DSL (Digital Subscriber Line)</strong> or <strong>BroadR-Reach,</strong> specialized network extenders can transmit data up to 2,000 feet. These solutions often require signal repeaters or amplification to maintain data integrity over such extended distances.</p>
      </div>

      <div id="coax" className="faq-answer">
            <h1>Coax</h1>
            <p><strong>BNC Connector:</strong> The BNC (Bayonet Neill-Concelman) connector is a small, quick-connect, twist-and-lock coaxial cable connector used in video, radio, and data transmission applications. It provides a secure connection and is commonly found in CCTV systems, radio communications, and older analog video setups. Unlike threaded connectors, the BNC’s bayonet-style design allows for quick installation and removal, making it ideal for professional video and networking environments.</p>
            <p><strong>Coaxial Cable Transmission Distance:</strong> One of the advantages of coaxial cables is their ability to carry signals over longer distances compared to standard twisted-pair copper cables. This makes coax a viable option for legacy surveillance systems and specialized communication networks. However, over long distances, signal loss (attenuation) occurs, and amplifiers or repeaters may be needed to maintain signal integrity.</p>
            <p><strong>Types of Coaxial Cables:</strong> Coaxial cables come in various types, each suited for specific applications. The most common types include RG11, RG6, and RG59, which differ in size, impedance, and usage. These cables are used in applications such as television broadcasting, security camera systems, and broadband internet. The impedance of a coaxial cable, usually 50 or 75 ohms, determines its electrical resistance and suitability for different signal types. Thicker cables like RG11 offer lower signal loss and longer transmission distances, while thinner cables like RG59 are more flexible and easier to install in tight spaces.</p>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "18px",
                textAlign: "left",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "rgb(13, 128, 173)", color: "#fff" }}>
                  <th style={{ padding: "10px", border: "1px solid #ddd" }}>Cable Type</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd" }}>Applications</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd" }}>Impedance</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd" }}>Size</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd" }}>Max Distance</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd" }}>Signal Loss</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "RG11", applications: "Used in long-distance video and internet connections", impedance: "75 Ohms", size: "Large", maxDistance: "Up to 1,500 ft", signalLoss: "Low" },
                  { type: "RG6", applications: "Used in satellite TV, cable systems, and broadband internet", impedance: "75 Ohms", size: "Medium", maxDistance: "Up to 1,000 ft", signalLoss: "Medium" },
                  { type: "RG59", applications: "Used in analog video applications, CCTV", impedance: "75 Ohms", size: "Small", maxDistance: "Up to 750 ft", signalLoss: "High" },
                  { type: "RG58", applications: "Used in radio and data communication", impedance: "50 Ohms", size: "Small", maxDistance: "Up to 500 ft", signalLoss: "Higher" },
                ].map((item, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
                    }}
                  >
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.type}</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.applications}</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.impedance}</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.size}</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.maxDistance}</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.signalLoss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
      </div>
  </div>
  )
}

export default EthernetExtenderFAQ