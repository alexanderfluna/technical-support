import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';

const Navbar = ({ onCategoryChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const navigate = useNavigate();
  const categoryRefs = {
    'media-converter': useRef(null),
    accessories: useRef(null)
  };

  const handleMouseClick = (category) => {
    const routeMap = {
      "technical-support": "/technical-support",
      "server": "/technical-support/razberi-server",
      "ethernet-switch": "/technical-support/ethernet-switch",
      "media-converter": "/technical-support/media-converter",
      "ethernet-to-fiber": "/technical-support/ethernet-to-fiber",
      "ethernet-to-utp-coax": "/technical-support/ethernet-to-utp-coax",
      "serial-data-to-fiber": "/technical-support/serial-data-to-fiber",
      "contact-closure-to-fiber": "/technical-support/contact-closure-to-fiber",
      "wiegand-to-fiber": "/technical-support/wiegand-to-fiber",
      "wireless-ethernet": "/technical-support/wireless-ethernet",
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
      case 'media-converter':
        return [
          { name: 'Ethernet To Fiber', id: 'ethernet-to-fiber' },
          { name: 'Ethernet To UTP/Coax', id: 'ethernet-to-utp-coax' },
          { name: 'Serial Data To Fiber', id: 'serial-data-to-fiber' },
          { name: 'Contact Closure To Fiber', id: 'contact-closure-to-fiber' },
          { name: 'Wiegand To Fiber', id: 'wiegand-to-fiber' },
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
          <span>Razberi Server</span>
        </div>

        <div className="main-category" onClick={() => handleMouseClick("ethernet-switch")}>
          <span>Ethernet Switch</span>
        </div>

        <div 
          className="main-category"
          onClick={() => toggleCategory('media-converter')}
          onMouseLeave={(e) => handleCategoryLeave('media-converter', e)}
        >
          <span>Media Converter<span className="dropdown-chevron"></span></span>
          {(expandedCategory === 'media-converter') && (
            <div 
              className="hover-box"
              ref={categoryRefs['media-converter']}
              onMouseLeave={(e) => handleHoverBoxLeave('media-converter', e)}
            >
              {getSubcategories('media-converter').map(item => (
                <li key={item.id} onClick={() => handleMouseClick(item.id)}>{item.name}</li>
              ))}
            </div>
          )}
        </div>

        <div className="main-category" onClick={() => handleMouseClick("wireless-ethernet")}>
          <span>Wireless Ethernet</span>
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
      </div>
    </nav>
  )
}

export default Navbar;