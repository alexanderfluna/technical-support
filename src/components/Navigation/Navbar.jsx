import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import Chatbox from '../Chatbox'
import '../../styles/Navbar.css';

const Navbar = ({ onCategoryChange }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const navigate = useNavigate();
  
  const handleMouseEnter = (category) => {
    if (window.innerWidth > 768) {
      setHoveredCategory(category);
    }
  };
  
  const handleMouseClick = (category) => {
    const routeMap = {
      "technical-support": "/technical-support",
      "razberi": "/technical-support/razberi",
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
      "enclosure": "/technical-support/enclosure",
      "server": "/technical-support/razberi"
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
          { name: 'Ethernet Extender', id: 'ethernet-extender' },
          { name: 'Terminal Server', id: 'terminal-server' }
        ];
      case 'data-over-fiber':
        return [
          { name: 'Media Converter', id: 'media-converter' },
          { name: 'Serial Data', id: 'serial-data' },
          { name: 'Wiegand', id: 'wiegand' },
          { name: 'Contact Closure', id: 'contact-closure' },
          { name: 'Analog Video', id: 'analog-video' }
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
      <Chatbox/>

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

      <Search/>

      <div className={`categories ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="main-category" onClick={() => handleMouseClick("server")}>
          <span>Edge Computing</span>
        </div>

        <div 
          className="main-category"
          onMouseEnter={() => handleMouseEnter("ethernet")}
          onMouseLeave={() => setHoveredCategory(null)}
          onClick={() => window.innerWidth <= 768 ? toggleCategory('ethernet') : null}
        >
          <span>Ethernet<span className="dropdown-chevron"></span></span>
          {(hoveredCategory === "ethernet" || (window.innerWidth <= 768 && expandedCategory === 'ethernet')) && (
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
          onMouseEnter={() => handleMouseEnter("data-over-fiber")}
          onMouseLeave={() => setHoveredCategory(null)}
          onClick={() => window.innerWidth <= 768 ? toggleCategory('data-over-fiber') : null}
        >
          <span>Data Over Fiber<span className="dropdown-chevron"></span></span>
          {(hoveredCategory === "data-over-fiber" || (window.innerWidth <= 768 && expandedCategory === 'data-over-fiber')) && (
            <div className="hover-box">
              {getSubcategories('data-over-fiber').map(item => (
                <li key={item.id} onClick={() => handleMouseClick(item.id)}>{item.name}</li>
              ))}
            </div>
          )}
        </div>

        <div 
          className="main-category"
          onMouseEnter={() => handleMouseEnter("accessories")}
          onMouseLeave={() => setHoveredCategory(null)}
          onClick={() => window.innerWidth <= 768 ? toggleCategory('accessories') : null}
        >
          <span>Accessories<span className="dropdown-chevron"></span></span>
          {(hoveredCategory === "accessories" || (window.innerWidth <= 768 && expandedCategory === 'accessories')) && (
            <div className="hover-box">
              {getSubcategories('accessories').map(item => (
                <li key={item.id} onClick={() => handleMouseClick(item.id)}>{item.name}</li>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;