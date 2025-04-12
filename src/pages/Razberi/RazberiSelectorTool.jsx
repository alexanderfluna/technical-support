import React, { useState } from 'react';

const RazberiSelectorTool = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="faq-list">
        <h1 className="faq-title">Razberi Server Selector Tool</h1>
        <div className="selector-placeholder" >
          <div className="selector-options" style={{width: "50%"}}>
            <button
              className={`selector-button ${selected === "Server Switch" ? "selected" : ""}`}
              onClick={() => setSelected("Server Switch")}
            >
              Server Switch
            </button>
            <span className="separator"></span>
            <button
              className={`selector-button ${selected === "Server" ? "selected" : ""}`}
              onClick={() => setSelected("Server")}
            >
              Server
            </button>
          </div>

          {selected && (
            <div>
              {selected === "Server Switch" && (
                <div className="faq-answer">
                  <a href="pdf/razberi/SS32_Data_Sheet.pdf">
                    <button style={{ backgroundColor: "rgb(13, 128, 173)", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", marginBottom: "20px" }}>
                      Click to view the SS32X data sheet
                    </button>
                  </a>
                  <p>The <strong>SS32X server switch</strong> is a high-performance networking device designed for enterprise environments. It features a <strong>32-port PoE switch,</strong> powered by an <strong>Intel I5 processor</strong> for reliable performance. It includes two <strong>M.2 SSDs</strong> in RAID 1 for redundancy, with up to <strong>88TB</strong> of total capacity with <strong>RAID</strong> configurations of 0, 1, 5, 6, or 10 for storage flexibility. Users can choose between <strong>16GB or 32GB of RAM</strong>. It supports Windows 10, Windows 11, Windows Server 2019, and Windows Server 2022. The SS32X is also available in two form factors: a <strong>long chassis</strong> version, marked with "LX" in the part number, and a <strong>2U rack-mounted</strong> model, identified by "2U."</p>
                  <p>By default, the SS32X server switch is configured for easy deployment. The <strong>switch IP</strong> is set to 192.168.50.1, with a dedicated <strong>Admin Uplink IP</strong> of 192.168.50.19 for management access. The <strong>U2</strong> port is set to receive IP addresses via DHCP, allowing for seamless integration into dynamic network environments.</p>
                  <p><strong>Camera Defense</strong> allows the binding of ports to the MAC address of connected devices, disabling unused ports to reduce vulnerabilities. The firewall can be configured to allow only essential services or protocols, removing unnecessary ones. Network traffic can be restricted to known networks or approved devices with fixed IP addresses through whitelisting. It enforces secure password policies, disallowing default, prohibited, or common passwords.</p>
                  <p><strong>Appliance Defense (Cylance)</strong> is an  antimalware solution that leverages artificial intelligence and machine learning to build predictive models, enabling it to detect even previously unknown malware in real time. Cylance is fully integrated into Razberi Monitor, providing real-time notifications on malware protection through the dashboard.</p>
                </div>
              )}
              {selected === "Server" && (
                <div className="faq-answer">
                   <p>Purchasing a <strong>Razberi recording server</strong> is a smart choice for reliable, scalable, high-performance video storage. Dell PowerEdge servers offer RAID configurations for data protection, critical for continuous recording and long-term storage. With support for large drives and SSDs, they handle large video archives while ensuring fast access. Their compatibility with video management software (VMS) makes them ideal for security applications. Remote management tools like Dell <strong>iDRAC</strong> enable easy monitoring and maintenance, reducing downtime. These servers offer the performance, security, and scalability needed for both small and large surveillance systems. They can also include <strong>10 GbE Ethernet or 10GbE SFP+ ports</strong> for faster data rates.</p>
                   <p>The <strong>Xeon processor</strong> is perfect for managing camera footage with its 24/7 reliability, multiple cores, and ECC memory for error-free operation. It quickly processes video files and offers fast access to stored footage. Xeon CPUs are built for long-term use, making them ideal for continuous security systems. A <strong>dual Xeon setup</strong> doubles processing power, enabling faster video processing, smoother performance, and better multitasking. This setup enhances redundancy, supports more camera streams, and improves video analytics and AI-driven surveillance, making it ideal for high-performance security systems.</p>
                </div>
              )}
            </div>
          )}
          {!selected && <p className="placeholder-text"></p>}
        </div>
    </div>
  )
}

export default RazberiSelectorTool