import React from 'react';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import Fiber from '../../relevant-information/Fiber';

const SFPFAQ = ({ activeSection, animatedElements }) => {
  const contentCards = [
    {
      id: 'no-optical-link',
      title: 'How to Troubleshoot an SFP module with Optical Link Issues',
      icon: '🔍',
      content: <NoOpticalLink />
    },
    {
      id: 'ddi',
      title: 'How to View the Status of an SFP Module',
      icon: '📊',
      content: <p>It is possible to view the status of the SFP in an Ethernet switch via the DDMI section or the SFP Status section.</p>
    },
    {
      id: 'cisco',
      title: 'Will Comnet SFPs work with Cisco devices?',
      icon: '🔄',
      content: <p>ComNet SFP modules will optically communicate with properly matched Cisco SFPs when Cisco SFPs are installed in a Cisco switch. Note that ComNet SFPs will not operate when installed in a Cisco switch.</p>
    },
    {
      id: 'sfp-chart',
      title: "Comnet's SFP Chart",
      icon: '📈',
      content: (
        <>
          <p><strong>SFP (Small Form-Factor Pluggable)</strong> modules are compact, hot-swappable devices used in network equipment like switches and routers to send and receive data over fiber optic or copper cables. They support singlemode or multimode fiber for different distances and come in various speeds like Fast Ethernet (FE), Gigabit Ethernet (GE), and 10 Gigabit (10G). SFPs use different connectors, such as LC, SC, or RJ-45, depending on the cable type. They help expand network capabilities without replacing entire devices.</p>
          <div className="card-image-container">
            <img src="photos/SFP/SFP.png" alt="SFP Chart" className="card-image" />
          </div>
        </>
      )
    },
    {
      id: 'fiber',
      title: 'Fiber Optics',
      icon: '🔦',
      content: <Fiber />
    }
  ];

  return (
    <>
      {contentCards.map((card, index) => (
        <article 
          key={card.id}
          id={card.id}
          className={`content-card ${animatedElements.includes(card.id) ? 'animated' : ''} ${activeSection === card.id ? 'active' : ''}`}
          style={{ '--delay': index * 0.1 }}
        >
          <header className="card-header">
            <div className="card-icon">{card.icon}</div>
            <h2 className="card-title">{card.title}</h2>
          </header>
          <div className="card-body">
            <div className="card-content">
              {card.content}
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default SFPFAQ;