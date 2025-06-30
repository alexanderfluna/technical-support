import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import Chatbot from '../Chatbot/Chatbot';

const Navbar = ({ onCategoryChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const navigate = useNavigate();
  const categoryRefs = {
    ethernet: useRef(null),
    'data-over-fiber': useRef(null),
    accessories: useRef(null)
  };

  const handleMouseClick = (category) => {
    const routeMap = {
      "technical-support": "/technical-support",
      "server": "/technical-support/server",
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
      "card-cage": "/technical-support/card-cage",
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

  const handleCategoryLeave = (category, e) => {
    // Check if mouse is leaving to go to the hover-box
    const relatedTarget = e.relatedTarget;
    const hoverBox = categoryRefs[category].current;
    
    if (!hoverBox || !hoverBox.contains(relatedTarget)) {
      setExpandedCategory(null);
    }
  };

  const handleHoverBoxLeave = (category, e) => {
    // Check if mouse is leaving to go to the main category
    const relatedTarget = e.relatedTarget;
    const mainCategory = e.currentTarget.parentElement;
    
    if (!mainCategory.contains(relatedTarget)) {
      setExpandedCategory(null);
    }
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
          { name: 'Card Cage', id: 'card-cage' }
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

      <Search/>

      <div className={`categories ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="main-category" onClick={() => handleMouseClick("server")}>
          <span>Server</span>
        </div>

        <div 
          className="main-category"
          onClick={() => toggleCategory('ethernet')}
          onMouseLeave={(e) => handleCategoryLeave('ethernet', e)}
        >
          <span>Ethernet<span className="dropdown-chevron"></span></span>
          {(expandedCategory === 'ethernet') && (
            <div 
              className="hover-box"
              ref={categoryRefs.ethernet}
              onMouseLeave={(e) => handleHoverBoxLeave('ethernet', e)}
            >
              {getSubcategories('ethernet').map(item => (
                <li key={item.id} onClick={() => handleMouseClick(item.id)}>{item.name}</li>
              ))}
            </div>
          )}
        </div>

        <div className="main-category" onClick={() => handleMouseClick("wireless")}>
          <span>Wireless Radio</span>
        </div>

        <div 
          className="main-category"
          onClick={() => toggleCategory('data-over-fiber')}
          onMouseLeave={(e) => handleCategoryLeave('data-over-fiber', e)}
        >
          <span>Data Over Fiber<span className="dropdown-chevron"></span></span>
          {(expandedCategory === 'data-over-fiber') && (
            <div 
              className="hover-box"
              ref={categoryRefs['data-over-fiber']}
              onMouseLeave={(e) => handleHoverBoxLeave('data-over-fiber', e)}
            >
              {getSubcategories('data-over-fiber').map(item => (
                <li key={item.id} onClick={() => handleMouseClick(item.id)}>{item.name}</li>
              ))}
            </div>
          )}
        </div>

        <div 
          className="main-category"
          onClick={() => toggleCategory('accessories')}
          onMouseLeave={(e) => handleCategoryLeave('accessories', e)}
        >
          <span>Accessories<span className="dropdown-chevron"></span></span>
          {(expandedCategory === 'accessories') && (
            <div 
              className="hover-box"
              ref={categoryRefs.accessories}
              onMouseLeave={(e) => handleHoverBoxLeave('accessories', e)}
            >
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