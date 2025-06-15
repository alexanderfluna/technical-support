import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import Chatbot from '../Chatbot/Chatbot'

const Navbar = ({ onCategoryChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const navigate = useNavigate();
  
  const handleMouseClick = (category) => {
    const routeMap = {
      "technical-support": "/technical-support",
      "server": "/technical-support/razberi",
      "ethernet-switch": "/technical-support/ethernet-switch",
      "media-converter": "/technical-support/media-converter",
      "ethernet-extender": "/technical-support/ethernet-extender",
      "wireless": "/technical-support/wireless",
      "serial-data": "/technical-support/serial-data",
      "wiegand": "/technical-support/wiegand",
      "contact-closure": "/technical-support/contact-closure",
      "sfp": "/technical-support/sfp",
      "power-supply": "/technical-support/power-supply",
      "poe-injector": "/technical-support/poe-injector",
      "card-cage": "/technical-support/enclosure",
      "about-us": "/technical-support/about-us",
    };
    
    const route = routeMap[category];
    if (route) {
      navigate(route);
      setIsMobileMenuOpen(false);
      setExpandedCategory(null);
    }
    
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setExpandedCategory(null);
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const getSubcategories = (category) => {
    switch(category) {
      case 'ethernet':
        return [
          { name: 'Ethernet Switch', id: 'ethernet-switch' },
          { name: 'Media Converter', id: 'media-converter' },
          { name: 'Ethernet Extender', id: 'ethernet-extender' },
        ];
      case 'data-over-fiber':
        return [
          { name: 'Serial Data', id: 'serial-data' },
          { name: 'Wiegand', id: 'wiegand' },
          { name: 'Contact Closure', id: 'contact-closure' },
        ];
      case 'accessories':
        return [
          { name: 'SFP', id: 'sfp' },
          { name: 'Power Supply', id: 'power-supply' },
          { name: 'PoE Injector', id: 'poe-injector' },
          { name: 'Enclosure', id: 'card-cage' }
        ];
      default:
        return [];
    }
  };

  return (
    <nav className="navbar">
      <div className="mobile-header">
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </div>
        <img 
          onClick={() => navigate('/technical-support')} 
          className="comnet-logo" 
          src="https://th.bing.com/th/id/OIP.QEpdXFZIcPoZBpgnZpTHoAHaCP?rs=1&pid=ImgDetMain" 
          alt="Comnet Logo"
        />
      </div>

      <div className={`categories ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="main-category" onClick={() => handleMouseClick("server")}>
          <span>Edge Computing</span>
        </div>

        <div 
          className="main-category"
          onClick={() => toggleCategory('ethernet')}
        >
          <span>Ethernet<span className="dropdown-chevron"></span></span>
          {(expandedCategory === 'ethernet') && (
            <div className="hover-box">
              {getSubcategories('ethernet').map(item => (
                <li key={item.id} onClick={() => handleMouseClick(item.id)}>{item.name}</li>
              ))}
            </div>
          )}
        </div>

        <div className="main-category" onClick={() => handleMouseClick("wireless")}>
          <span>Wireless Ethernet</span>
        </div>

        <div 
          className="main-category"
          onClick={() => toggleCategory('data-over-fiber')}
        >
          <span>Data Over Fiber<span className="dropdown-chevron"></span></span>
          {(expandedCategory === 'data-over-fiber') && (
            <div className="hover-box">
              {getSubcategories('data-over-fiber').map(item => (
                <li key={item.id} onClick={() => handleMouseClick(item.id)}>{item.name}</li>
              ))}
            </div>
          )}
        </div>

        <div 
          className="main-category"
          onClick={() => toggleCategory('accessories')}
        >
          <span>Accessories<span className="dropdown-chevron"></span></span>
          {(expandedCategory === 'accessories') && (
            <div className="hover-box">
              {getSubcategories('accessories').map(item => (
                <li key={item.id} onClick={() => handleMouseClick(item.id)}>{item.name}</li>
              ))}
            </div>
          )}
        </div>

        <div className="main-category" onClick={() => handleMouseClick("about-us")}>
          <span>About Us</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;