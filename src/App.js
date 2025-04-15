import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './pages/Page';
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
        <Route path="/technical-support" element={<Page />} />
        <Route path="/razberi" element={<Razberi />} />
        <Route path="/ethernet-switch" element={<EthernetSwitch />} />
        <Route path="/media-converter" element={<MediaConverter />} />
        <Route path="/ethernet-extender" element={<EthernetExtender />} />
        <Route path="/wireless" element={<Wireless />} />
        <Route path="/serial-data" element={<SerialData />} />
        <Route path="/wiegand" element={<Wiegand />} />
        <Route path="/contact-closure" element={<ContactClosure />} />
        <Route path="/sfp" element={<SFP />} />
        <Route path="/power-supply" element={<PowerSupply />} />
        <Route path="/poe-injector" element={<PoeInjector />} />
        <Route path="/enclosure" element={<Enclosure />} />
      </Routes>
    </Router>
  );
};

export default App;