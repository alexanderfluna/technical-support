import React from 'react';
import Server from './Razberi/Razberi';
import EthernetSwitch from './EthernetSwitch/EthernetSwitch';
import MediaConverter from './MediaConverter/MediaConverter';
import EthernetExtender from './EthernetExtender/EthernetExtender';
import Wireless from './Wireless/Wireless';
import SerialData from './SerialData/SerialData';
import Wiegand from './Wiegand/Wiegand';
import ContactClosure from './ContactClosure/ContactClosure';
import SFP from './SFP/SFP';
import PowerSupply from './PowerSupply/PowerSupply';
import PoeInjector from './PoeInjector/PoeInjector';
import CardCage from './Enclosure/Enclosures';
import Navbar from '../components/Navigation/Navbar';
import HomePage from './HomePage';

const Webpage = ({ category }) => {
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
        return <HomePage />   
    }
  };

  return (
    <main>
      <Navbar />
      {renderContent()}
    </main>
  );
};

export default Webpage;