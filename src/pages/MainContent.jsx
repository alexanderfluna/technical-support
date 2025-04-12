import React from 'react';
import Server from './Razberi/Razberi'
import EthernetSwitch from './EthernetSwitch/EthernetSwitch'
import MediaConverter from './MediaConverter/MediaConverter'
import EthernetExtender from './EthernetExtender/EthernetExtender'
import Wireless from './Wireless/Wireless'
import SerialData from './SerialData/SerialData'
import Wiegand from './Wiegand/Wiegand'
import ContactClosure from './ContactClosure/ContactClosure'
import SFP from './SFP/SFP'
import PowerSupply from './PowerSupply/PowerSupply'
import PoeInjector from './PoeInjector/PoeInjector'
import CardCage from './Enclosure/Enclosures'
import '../styles/Pages.css'

const MainContent = ({ category }) => {

  const renderContent = () => {
    switch (category) {
      case 'server':
        return <Server />;
      case 'ethernet-switch':
        return <EthernetSwitch />;
      case 'media-converter':
        return <MediaConverter />;
      case 'ethernet-extender':
        return <EthernetExtender />;
      case 'wireless':
        return <Wireless />;
      case 'serial-data':
        return <SerialData />;
      case 'wiegand':
        return <Wiegand />;
      case 'contact-closure':
        return <ContactClosure />;
      case 'sfp':
        return <SFP />;
      case 'power-supply':
        return <PowerSupply />;
      case 'poe-injector':
        return <PoeInjector />;
      case 'card-cage':
        return <CardCage />;
      default:
        return (
          <>
            <div className="support-hero">
              <div className="support-container">
                <div className="support-header">
                  <h1 className="support-title">
                    <span className="title-gradient">Technical Support</span>
                  </h1>
                  <div className="support-subtitle">
                    <p className="support-description">
                      Thank you for visiting Comnet's technical support page. Our page provides 
                      <span className="highlight"> assistance with troubleshooting</span> common product issues, 
                      <span className="highlight"> identifying the correct part number</span> for your application, 
                      and contains <span className="highlight">relevant product information</span>.
                    </p>
                    <p className="support-description">
                      To get started, enter a product number into the search box or select one of the product categories below.
                    </p>
                  </div>
                </div>

                <div className="product-visual">
                  <div className="visual-container">
                    <img
                      src="https://acresecurity.com/hs-fs/hubfs/Landing%20pages/Landing%20Page%20Images/comnet%20by%20acre%20full%20product%20range.png"
                      alt="ComNet Product Range"
                      loading="lazy"
                      className="product-image"
                    />
                    <div className="visual-overlay">
                      <div className="overlay-circle"></div>
                      <div className="overlay-circle"></div>
                      <div className="overlay-circle"></div>
                    </div>
                  </div>
                  <div className="visual-decoration">
                    <div className="decoration-line"></div>
                    <div className="decoration-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
    }
  }

  return (
    <main>
        {renderContent()}
    </main>
  )
}

export default MainContent