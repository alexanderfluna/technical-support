import React from 'react';
import Fiber from '../../relevant-information/Fiber';

const ContactClosureFAQ = () => {
  return (
    <div className="faq-list">
        <h1 className="faq-title">Relevant Contact Closure Information</h1>

        <div className="table-of-contents">
          <h1>Table of Contents</h1>
          <li><a href="#formA">Form A Relays</a></li>
          <li><a href="#formC">Form C Relays</a></li>
          <li><a href="#latching">Latching vs. Non-Latching Relays</a></li>
          <li><a href="#supervision">Supervision</a></li>
          <li><a href="#summary">Summary Fault Relays</a></li>
          <li><a href="#fiber">Fiber Optics</a></li>
        </div>

        <div id="formA" className="faq-answer">
          <h1>Form A Relays</h1>
          <p><strong>Form A relays</strong> are Single Pole Single Throw (SPST) normally open relays. When the relay coil in a Form A mechanical relay is not energized, or when there is no magnetic field nearby in a reed relay, the relay contacts are open. When the relay coil in a Form A relay is energized, or when a magnetic field exists nearby in a reed relay, the relay contacts close. Used in applications where you need to switch a circuit on when the relay is activated: common in simple on/off control circuits, like turning on a light or powering a device.</p>
          <img src="photos/FDC/FormA.png" style={{height: "400px"}}></img>
        </div>

        <div id="formC" className="faq-answer">
          <h1>Form C Relays</h1>
          <p><strong>Form C relays</strong> are Single Pole Double Throw (SPDT) relays with a normally open set of contacts and a normally closed set of contacts. When the relay coil is not energized, the relay contacts are open relative to normally open and common AND are closed relative to normally closed and common. When the relay coil is energized, the relay contacts are closed relative to normally open and common AND are open relative to normally closed and common. Form C relays are used in applications where you need to alternate between two circuits. It allows for switching between two states, such as toggling between two power sources or switching between two devices: like switching between a primary and backup power supply.</p>
          <img src="photos/FDC/FormC.png" style={{height: "400px"}}></img>
        </div>

        <div id="latching" className="faq-answer">
          <h1>Latching vs. Non-Latching Relays</h1>
          <p>In the case of a loss of optical link, <strong>latching relays</strong> will remain in the same state, whereas <strong>non-latching</strong> relays will open.</p>
        </div>

        <div id="supervision" className="faq-answer">
          <h1>Supervision</h1>
          <p><strong>Supervision</strong> allows the device to detect if there is a short circuit or an open circuit. A slow fashing red LED indicates a short circuit, whereas a fast fashing red LED indicates an open circuit.</p>
          <p><strong>On the FDC80 transmitter:</strong></p>
          <li style={{"padding-left": "40px"}}>Flipping dip switch #1 on will allow for detection of short circuits.</li>
          <li style={{"padding-left": "40px"}}>Flipping dip switch #2 on will allow for detection of cut wires.</li>
          <p><strong>On the FDC80 receiver:</strong></p>
          <li style={{"padding-left": "40px"}}>Flipping dip switch #1 on will add fiber loss to the summary fault relay.</li>
          <li style={{"padding-left": "40px"}}>Flipping dip switch #2 on will add contact faults to the summary fault relay.</li>
        </div>

        <div id="summary" className="faq-answer">
          <h1>Summary Fault Relays</h1>
          <p>A <strong>summary fault relay</strong> is normally closed during normal conditions and will open upon loss of optical link. The <strong>FDC10</strong> is a good choice for monitoring the status of optical fiber.</p>
        </div>

        <div id="fiber" className="faq-answer">
          <Fiber />
        </div>
      </div>
  )
}

export default ContactClosureFAQ