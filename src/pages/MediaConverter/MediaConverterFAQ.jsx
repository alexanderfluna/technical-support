import { useEffect, useState } from 'react';
import Fiber from '../../relevant-information/Fiber';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';

const MediaConverterFAQ = ({ activeSubSection }) => {
  const [expandedFAQs, setExpandedFAQs] = useState([]);

  const toggleFAQ = (sectionID) => {
    setExpandedFAQs(prev => {
      if (prev.includes(sectionID)) {
        return prev.filter(id => id !== sectionID);
      } else {
        return [...prev, sectionID];
      }
    });
  }

  const isFAQExpanded = (sectionID) => {
    return expandedFAQs.includes(sectionID);
  }

  useEffect(() => {
    if (activeSubSection) {
      const element = document.getElementById(activeSubSection);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        if (!expandedFAQs.includes(activeSubSection)) {
          setExpandedFAQs(prev => [...prev, activeSubSection]);
        }
      }
    }
  }, [activeSubSection]);

  return (
    <div className="faq-list">
      <div className="faq-answer" id="media-converters">
        <h1 className="faq-title" onClick={() => toggleFAQ("media-converters")}>
          Gain a Better Understanding of Media Converters
          <span className={`dropdown-chevron ${isFAQExpanded("media-converters") ? 'expanded' : ''}`}></span>
        </h1>
        {isFAQExpanded("media-converters") && (
          <>
            <p><strong>A media converter</strong> facilitates communication between different networking media. It converts Ethernet data, transmitted as electrical pulses over copper cables, into infrared light signals that can travel through optical fiber and vice versa. Media converters are essential in modern networking, particularly when extending network distances beyond the limits of traditional copper cabling.</p>
            <p>Operating at <strong>Layer 1,</strong> media converters strictly function as data pass-through devices. Unlike routers or switches, they do not analyze or modify network traffic. Their role is purely to convert signals, ensuring compatibility between different transmission media while maintaining the integrity and speed of data transfer.</p>
            <p>Some media converters support <strong>Power over Ethernet (PoE),</strong> which allows the transmission of both power and data over a single Ethernet cable. Non-PoE versions, on the other hand, require separate power sources for connected devices. These devices also come in different physical sizes. <strong>Full-sized media converters</strong> are designed to be mounted in <strong>rack-mountable card cages,</strong> making them ideal for structured networking environments where multiple conversions need to be managed centrally. <strong>Miniature media converters,</strong> which are compact and standalone, offer flexibility for installations in tight spaces or single-device deployments.</p>
            <p><strong>Media converters are commonly designed for specific network speeds,</strong> such as <strong>Fast Ethernet (10/100Mbps)</strong> or <strong>Gigabit Ethernet (1000Mbps)</strong>. Some models, like those offered by ComNet, feature <strong>multi-rate</strong> capabilities, allowing users to switch between Fast Ethernet and Gigabit Ethernet using a simple dip switch. This adaptability makes them a versatile choice for evolving network infrastructures.</p>
            <p><strong>Advanced versions of media converters include dual and quad media converters.</strong> A <strong>dual media converter</strong> integrates two independent conversion units within a single enclosure, effectively serving two network connections at once. Similarly, a <strong>quad media converter</strong> houses four conversion units, providing a compact and efficient solution for high-density network applications.</p>
          </>
        )}
      </div>

      <div className="faq-answer" id="fiber">
        <h1 className="faq-title" onClick={() => toggleFAQ("fiber")}>
          Gain a Better Understanding of Fiber Optics
          <span className={`dropdown-chevron ${isFAQExpanded("fiber") ? 'expanded' : ''}`}></span>
        </h1>
        {isFAQExpanded("fiber") && (
          <>
            <Fiber />
          </>
        )}
      </div>

      <div className="faq-answer" id="poe">
        <h1 className="faq-title" onClick={() => toggleFAQ("poe")}>
          Gain a Better Understanding of Power Over Ethernet
          <span className={`dropdown-chevron ${isFAQExpanded("poe") ? 'expanded' : ''}`}></span>
        </h1>
        {isFAQExpanded("poe") && (
          <>
            <PowerOverEthernet />
          </>
        )}
      </div>
    </div>
  );
}

export default MediaConverterFAQ;