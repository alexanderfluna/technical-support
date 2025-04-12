import React from 'react';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import Fiber from '../../relevant-information/Fiber';

const SFPFAQ = () => {
  return (
    <div className="faq-list">
      <h1 className="faq-title">SFP</h1>

      <div className="table-of-contents">
        <h1>Table of Contents</h1>
          <li><a href="#no-optical-link">How to Troubleshoot an SFP module with Optical Link Issues</a></li>
          <li><a href="#ddi">How to View the Status of an SFP Module</a></li>
          <li><a href="#cisco">Will Comnet SFPs work with Cisco devices?</a></li>
          <li><a href="#sfp-chart">Comnet's SFP Chart</a></li>
          <li><a href="#fiber">Fiber Optics</a></li>
      </div>

      <div id="no-optical-link" className="faq-answer">
        <h1>How to Troubleshoot an SFP module with Optical Link Issues</h1>
        <NoOpticalLink />
      </div>

      <div id="ddi" className="faq-answer">
        <h1>How to View the Status of an SFP Module</h1>
        <p>It is possible to view the status of the SFP in an Ethernet switch via the DDMI section or the SFP Status section.</p>
      </div>

      <div id="cisco" className="faq-answer">
        <h1>Will Comnet SFPs work with Cisco devices?</h1>
        <p>ComNet SFP modules will optically communicate with properly matched Cisco SFPs when Cisco SFPs are installed in a Cisco switch. Note that ComNet SFPs will not operate when installed in a Cisco switch.</p>
      </div>

      <div id="sfp-chart" className="faq-answer">
        <h1>Comnet's SFP Chart</h1>
        <p><strong>SFP (Small Form-Factor Pluggable)</strong> modules are compact, hot-swappable devices used in network equipment like switches and routers to send and receive data over fiber optic or copper cables. They support singlemode or multimode fiber for different distances and come in various speeds like Fast Ethernet (FE), Gigabit Ethernet (GE), and 10 Gigabit (10G). SFPs use different connectors, such as LC, SC, or RJ-45, depending on the cable type. They help expand network capabilities without replacing entire devices.</p>
        <a href="pdf/SFP/sfp-modules.pdf">
          <button style={{ backgroundColor: "rgb(13, 128, 173)", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px"}}>
            View Comnet SFP Chart
          </button>
        </a>
        <img src="photos/SFP/SFP.png" alt="SFP Chart" />
      </div>

      <div id="fiber" className="faq-answer">
        <Fiber />
      </div>
    </div>
  );
};

export default SFPFAQ;
