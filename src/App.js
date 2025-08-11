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
import AboutUs from './pages/AboutUs';
import './styles/FAQ.css'
import './styles/Cards.css'
import './styles/SelectorTool.css'
import './styles/Navbar.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/technical-support" element={<Webpage />} />
        <Route path="/technical-support/razberi-server" element={<Razberi />} />
        <Route path="/technical-support/ethernet-switch" element={<EthernetSwitch />} />
        <Route path="/technical-support/ethernet-to-fiber" element={<MediaConverter />} />
        <Route path="/technical-support/ethernet-to-utp-coax" element={<EthernetExtender />} />
        <Route path="/technical-support/wireless-ethernet" element={<Wireless />} />
        <Route path="/technical-support/serial-data-to-fiber" element={<SerialData />} />
        <Route path="/technical-support/wiegand-to-fiber" element={<Wiegand />} />
        <Route path="/technical-support/contact-closure-to-fiber" element={<ContactClosure />} />
        <Route path="/technical-support/sfp" element={<SFP />} />
        <Route path="/technical-support/power-supply" element={<PowerSupply />} />
        <Route path="/technical-support/poe-injector" element={<PoeInjector />} />
        <Route path="/technical-support/card-cage" element={<Enclosure />} />
        <Route path="/technical-support/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;