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
                <div className="support-header">
                  <h1 className="support-title">
                    <span className="title-gradient">Technical</span>
                    <span className="title-gradient">Support</span>
                  </h1>
                  <div className="support-description">
                    <span>Need help? We've got you covered.</span>
                    <span>- <span className="highlight">Troubleshoot product issues</span> with our step-by-step guides.</span>
                    <span>- Discover  <span className="highlight">detailed product insights</span> and technical specifications.</span>
                    <span>-Use our <span className="highlight">product selector tools</span> to find the perfect fit for your setup.</span>
                  </div>
                </div>

                <div className="product-visual">
                  <div className="visual-container">
                    <img
                      src="https://acresecurity.com/hubfs/Website/Pages/Solutions/Finalised%20Graphic%20Desktop.jpg"
                      alt="ComNet Product Range"
                      loading="lazy"
                      className="product-image"
                    />
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