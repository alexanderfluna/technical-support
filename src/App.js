import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Webpage from './pages/Webpage';
import Razberi from './pages/Razberi/Razberi';
import EthernetSwitch from './pages/EthernetSwitch/EthernetSwitch';
import MediaConverter from './pages/MediaConverter/MediaConverter';
import EthernetExtender from './pages/EthernetExtender/EthernetExtender';
import Wireless from './pages/Wireless/Wireless';
import SerialData from './pages/SerialData/SerialData';
import Wiegand from './pages/Wiegand/Wiegand';
import ContactClosure from './pages/ContactClosure/ContactClosure';
import SFP from './pages/SFP/SFP';
import PowerSupply from './pages/PowerSupply/PowerSupply';
import PoeInjector from './pages/PoeInjector/PoeInjector';
import Enclosure from './pages/Enclosure/Enclosures';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/technical-support" element={<Webpage />} />
        <Route path="/technical-support/razberi" element={<Razberi />} />
        <Route path="/technical-support/ethernet-switch" element={<EthernetSwitch />} />
        <Route path="/technical-support/media-converter" element={<MediaConverter />} />
        <Route path="/technical-support/ethernet-extender" element={<EthernetExtender />} />
        <Route path="/technical-support/wireless" element={<Wireless />} />
        <Route path="/technical-support/serial-data" element={<SerialData />} />
        <Route path="/technical-support/wiegand" element={<Wiegand />} />
        <Route path="/technical-support/contact-closure" element={<ContactClosure />} />
        <Route path="/technical-support/sfp" element={<SFP />} />
        <Route path="/technical-support/power-supply" element={<PowerSupply />} />
        <Route path="/technical-support/poe-injector" element={<PoeInjector />} />
        <Route path="/technical-support/enclosure" element={<Enclosure />} />
      </Routes>
    </Router>
  );
};

export default App;